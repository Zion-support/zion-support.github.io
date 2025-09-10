import { format } from 'date-fns';
import { apiClient } from './apiClient';
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {
  if (!date) return '-',
  try {
    const d = $2;
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'}).format(d)
  } catch (e) {
    logErrorToProduction($2);
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
    safeStorage.setItem($2);
    // Remove it from URL to keep it clean
    url.searchParams.delete($2);
    window.history.replaceState({}, document.title, url.toString()),
    return refCode
  }
  
  return safeStorage.getItem('referral_code')
}

/**
 * Track referral when a user signs up
 */
import api from '@/lib/api';
export async function trackReferral(userId: string, email: string) {
  try {
    const refCode = safeStorage.getItem($2);
    if (!refCode) return false,
    
    // Call API to record the referral
    const response = await apiClient('/api/track-referral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        refCode,
        userId,
        email,
        ipAddress: '', // This will be captured by the server
      })}),

    if (response.status >= 200 && response.status < 300) {
      // Clear the stored referral code
      safeStorage.removeItem($2);
      return true
    }
  } catch (error) {
    logErrorToProduction('Error tracking referral:', { data: error})
  }
  return false
}
}/** * Stores referral code in localStorage when detected in window.URL */ 
}return safeStorage.getItem ('referral code') 
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await apiClient ('/api/track-referral', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
}return false 
