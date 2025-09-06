import { format } from 'date-fns';
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {
  if (!date) return '-',
  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM d, yyyy')
    }
    return format(date, 'MMM d, yyyy')
  } catch (e) {
    console.error($2);
    return '-'
  }
}

/**
 * Stores referral code in localStorage when detected in URL
 */
export function checkUrlForReferralCode(): string | null {
  if (typeof window = $2;
  const url = new URL($2);
  const refCode = url.searchParams.get($2);
  if (refCode) {
    localStorage.setItem($2);
    // Remove it from URL to keep it clean
    url.searchParams.delete($2);
    window.history.replaceState({}, document.title, url.toString()),
    return refCode
  }
  
  return localStorage.getItem('referral_code')
}

/**
 * Track referral when a user signs up
 */
export async function trackReferral(userId: string, email: string) {
  try {
    const refCode = localStorage.getItem($2);
    if (!refCode) return,
    
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        refCode,
        userId,
        email,
        ipAddress: '', // This will be captured by the server
      })}),
    
    if (response.ok) {
      // Clear the stored referral code
      localStorage.removeItem('referral_code')
    }
  } catch (error) {
    console.error('Error tracking referral:', error)
  }
}
