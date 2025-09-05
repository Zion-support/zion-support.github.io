<<<<<<< HEAD
import { format } from 'date-fns',
import { apiClient } from './apiClient',
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
    const d = typeof date === 'string' ? new Date(date) : date,
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'}).format(d)
  } catch (e) {
    logErrorToProduction('Error formatting date:', { data:  e }),
    return '-'
=======
export function formatDate(_date: Date | string | undefined): string {_if (!date) return '-';
  try {
    const _d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', _{
      month: 'short', _day: 'numeric', _year: 'numeric'}).format(d);
  } catch (e) {_logErrorToProduction('Error formatting date:', _{ data:  e});
    return '-';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
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
    safeStorage.setItem('referral_code', refCode),
    // Remove it from URL to keep it clean
    url.searchParams.delete('ref'),
    window.history.replaceState({}, document.title, url.toString()),
    return refCode
=======
export function checkUrlForReferralCode(): string | null {_if (typeof window === 'undefined') return null;
  
  const _url = new window.URL(window.location.href);
  const _refCode = url.searchParams.get('ref');
  
  if (refCode) {
    safeStorage.setItem('referral_code', _refCode);
    // Remove it from window.URL to keep it clean
    url.searchParams.delete('ref');
    window.history.replaceState({}, document.title, url.toString());
    return refCode;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return safeStorage.getItem('referral_code')
}

/**
 * Track referral when a user signs up
 */
<<<<<<< HEAD
import api from '@/lib/api',
export async function trackReferral(userId: string, email: string) {
  try {
    const refCode = safeStorage.getItem('referral_code'),
    if (!refCode) return false,
=======
import api from '@/lib/api';

export async function trackReferral(_userId: string, _email: string) {_try {
    const _refCode = safeStorage.getItem('referral_code');
    if (!refCode) return false;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Call API to record the referral
    const _response = await apiClient('/api/track-referral', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json'},
<<<<<<< HEAD
      body: JSON.stringify({
        refCode,
        userId,
        email,
        ipAddress: '', // This will be captured by the server
      })}),

    if (response.status >= 200 && response.status < 300) {
      // Clear the stored referral code
      safeStorage.removeItem('referral_code'),
      return true
    }
  } catch (error) {
    logErrorToProduction('Error tracking referral:', { data: error })
=======
      body: JSON.stringify({_refCode, _userId, _email, _ipAddress: '', _// This will be captured by the server})});

    if (response.status >= 200 && response.status < 300) {_// Clear the stored referral code
      safeStorage.removeItem('referral_code');
      return true;}
  } catch (error) {_logErrorToProduction('Error tracking referral:', _{ data: error});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return false
}
