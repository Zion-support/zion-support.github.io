#!/usr/bin/env python3
"""
Time Zone Aware Scheduler - V11

Features:
- Detect sender's likely time zone
- Recommend optimal send time
- Avoid off-hours for better response rates
"""

from datetime import datetime, timedelta

# Common time zones by region
TIME_ZONES = {
    'brazil': 'America/Sao_Paulo',
    'portugal': 'Europe/Lisbon',
    'spain': 'Europe/Madrid',
    'usa_east': 'America/New_York',
    'usa_west': 'America/Los_Angeles',
    'uk': 'Europe/London'
}

def detect_sender_timezone(sender: str, snippet: str) -> str:
    """Detect likely time zone from sender info."""
    text = f"{sender} {snippet}".lower()
    
    # Portuguese speakers likely Brazil/Portugal
    if any(w in text for w in ['brazil', 'brasil', 'portugal', 'português', 'pt-br']):
        return 'America/Sao_Paulo'
    
    # Spanish speakers
    if any(w in text for w in ['españa', 'espanol', 'madrid', 'méxico', 'argentina']):
        return 'America/Argentina/Buenos_Aires'  # Default LATAM
    
    # English + specific keywords
    if 'uk' in text or 'london' in text:
        return 'Europe/London'
    if 'est' in text or 'eastern' in text:
        return 'America/New_York'
    
    # Default to UTC
    return 'UTC'

def get_optimal_send_time(timezone: str, priority: int = 50) -> dict:
    """Calculate optimal send time for recipient."""
    now = datetime.utcnow()
    
    # Simple hour calculation (without pytz)
    hour = now.hour
    
    recommendations = {
        'timezone': timezone,
        'current_local_hour': hour,
        'status': 'unknown',
        'optimal_delay_hours': 0
    }
    
    # Business hours: 9 AM - 5 PM
    if 9 <= hour <= 17:
        recommendations['status'] = 'business_hours'
        recommendations['optimal_delay_hours'] = 0  # Send now
    elif 18 <= hour <= 21:
        recommendations['status'] = 'evening'
        recommendations['optimal_delay_hours'] = 10  # Send tomorrow morning
    else:
        recommendations['status'] = 'off_hours'
        # Calculate hours until 9 AM
        delay = (9 - hour) % 24
        recommendations['optimal_delay_hours'] = max(delay, 1)
    
    # Urgent emails can be sent anytime
    if priority >= 80:
        recommendations['status'] = 'urgent'
        recommendations['optimal_delay_hours'] = 0
    
    return recommendations

if __name__ == '__main__':
    # Test
    tz = detect_sender_timezone("client@brazil.com", "Olá tudo bem?")
    print(f"Detected: {tz}")
    rec = get_optimal_send_time(tz, 50)
    print(f"Recommendation: {rec}")