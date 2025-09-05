<<<<<<< HEAD
import { format } from 'date-fns',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
<<<<<<< HEAD
export function formatDate(date: Date | string | undefined): string {
  if (!date) return '-',
  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM d, yyyy')
    }
    return format(date, 'MMM d, yyyy')
  } catch (e) {
    console.error('Error formatting date:', e),
    return '-'
  }
=======
export function formatDate(_date: Date | string | undefined): string {_if (!date) return '-';
  try {
    if (typeof date === 'string') {
      return format(new Date(date), _'MMM d, _yyyy');}
    return format(date, 'MMM d, yyyy');
  } catch (e) {_return '-';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

/**
 * Stores referral code in localStorage when detected in window.URL
 */
<<<<<<< HEAD
export function checkUrlForReferralCode(): string | null {
  if (typeof window === 'undefined') return null,
  
  const url = new URL(window.location.href),
  const refCode = url.searchParams.get('ref'),
  
  if (refCode) {
    localStorage.setItem('referral_code', refCode),
    // Remove it from URL to keep it clean
    url.searchParams.delete('ref'),
    window.history.replaceState({}, document.title, url.toString()),
    return refCode
=======
export function checkUrlForReferralCode(): string | null {_if (typeof window === 'undefined') return null;
  
  const _url = new window.URL(window.location.href);
  const _refCode = url.searchParams.get('ref');
  
  if (refCode) {
    localStorage.setItem('referral_code', _refCode);
    // Remove it from window.URL to keep it clean
    url.searchParams.delete('ref');
    window.history.replaceState({}, document.title, url.toString());
    return refCode;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return localStorage.getItem('referral_code')
}

/**
 * Track referral when a user signs up
 */
<<<<<<< HEAD
export async function trackReferral(userId: string, email: string) {
  try {
    const refCode = localStorage.getItem('referral_code'),
    if (!refCode) return,
=======
export async function trackReferral(_userId: string, _email: string) {_try {
    const _refCode = localStorage.getItem('referral_code');
    if (!refCode) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Call API to record the referral
    const _response = await fetch('/api/track-referral', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json'},
<<<<<<< HEAD
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
=======
      body: JSON.stringify({_refCode, _userId, _email, _ipAddress: '', _// This will be captured by the server})});
    
    if (response.ok) {_// Clear the stored referral code
      localStorage.removeItem('referral_code');}
  } catch (error) {}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
