
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(_date: Date | string | undefined): string {_if (!date) return '-';
  try {
    const _d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', _{
      month: 'short', _day: 'numeric', _year: 'numeric'}).format(d);
  } catch (e) {_logErrorToProduction('Error formatting date:', _{ data:  e});
    return '-';
  }
}

/**
 * Stores referral code in localStorage when detected in window.URL
 */
export function checkUrlForReferralCode(): string | null {_if (typeof window === 'undefined') return null;
  
  const _url = new window.URL(window.location.href);
  const _refCode = url.searchParams.get('ref');
  
  if (refCode) {
    safeStorage.setItem('referral_code', _refCode);
    // Remove it from window.URL to keep it clean
    url.searchParams.delete('ref');
    window.history.replaceState({}, document.title, url.toString());
    return refCode;
  }
  
  return safeStorage.getItem('referral_code');
}

/**
 * Track referral when a user signs up
 */
import api from '@/lib/api';

export async function trackReferral(_userId: string, _email: string) {_try {
    const _refCode = safeStorage.getItem('referral_code');
    if (!refCode) return false;
    
    // Call API to record the referral
    const _response = await apiClient('/api/track-referral', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({_refCode, _userId, _email, _ipAddress: '', _// This will be captured by the server})});

    if (response.status >= 200 && response.status < 300) {_// Clear the stored referral code
      safeStorage.removeItem('referral_code');
      return true;}
  } catch (error) {_logErrorToProduction('Error tracking referral:', _{ data: error});
  }
  return false;
}
