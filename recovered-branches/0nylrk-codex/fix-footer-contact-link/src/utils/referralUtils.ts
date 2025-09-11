

import {format} from 'date-fns';


/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
=======
import {format} from 'date - fns';
/**;
* Formats a date for display in the referral system;
* @param date Date or string to format;
* @returns Formatted date string;
*/;
export function format_date (date: Date | string | undefined): string {
  // Check condition
if (return '-', ) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    // Check condition
if ( {) {
  $2
}
      return format (new Date (date), 'MMM d, yyyy');
    }
    return format (date, 'MMM d, yyyy');
  } catch (e) {

  
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
  

  if (refCode) {
    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
    return refCode
  }

  
  return localStorage && localStorage.getItem('referral_code')

}
/**
 * Stores referral code in localStorage when detected in URL
 */
export function checkUrlForReferralCode(): string | null {;
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  const refCode = url.searchParams.get('ref');
  if (refCode) {
    localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url.searchParams.delete('ref');
    window.history.replaceState({}, document.title, url.toString());
    return refCode
import { format } from 'date-fns',;
/**;
 * Formats a date for display in the referral system;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '-',;
  try {;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM d, yyyy');
    }
    return format(date, 'MMM d, yyyy');
  } catch (e) {;
    console.error('Error formatting date:', e),;
    return '-';
  }
}
/**;

 * Stores referral code in localStorage when detected in URL;
 */;
export function checkUrlForReferralCode(): string | null {;
  if (typeof window === 'undefined') return null,;
  const url = new URL(window.location.href),;
  const refCode = url.searchParams.get('ref'),;
  if (refCode) {;
    localStorage.setItem('referral_code', refCode),;
    // Remove it from URL to keep it clean;
    url.searchParams.delete('ref'),;
    window.history.replaceState({}, document.title, url.toString()),;
    return refCode;



  }
  return localStorage.getItem('referral_code')
}



/**
 * Track referral when a user signs up
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
 */
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
    

    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {

        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

        refCode;
        userId;
        email
        ipAddress: '', // This will be captured by the server
      })});

    
    if (response && response.ok) {

      // Clear the stored referral code

      localStorage.removeItem('referral_code')
;
/**;
 * Track referral when a user signs up;
 */;
export async function trackReferral(userId: string, email: string) {;
  try {;
    const refCode = localStorage.getItem('referral_code'),;
    if (!refCode) return,;
    // Call API to record the referral;
    const response = await fetch('/api/track-referral', {;
      method: 'POST',;
      headers: {;
        'Content-Type': 'application/json'},;
      body: JSON.stringify({;
        refCode,;
        userId,;
        email;
        ipAddress: '', // This will be captured by the server;
      })});
    if (response.ok) {;
      // Clear the stored referral code;
      localStorage.removeItem('referral_code');



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  } catch (error) {
    console && console.error('Error tracking referral:', error)
=======
    const ref_code = local_storage.get_item ('referral_code');
    // Check condition
if (return, ) {
  $2
}
    // Call API to record the referral;
    const response = await fetch ('/api / track - referral', {
      method: 'POST',
      headers: {
        'Content - Type': 'application / json'}
      body: JSON.stringify ({
        ref_code;
        user_id;
        email,
        ip_address: '', // This will be captured by the server;
      })});
;
    // Check condition
if ( {) {
  $2
}
      // Clear the stored referral code;
      local_storage.remove_item ('referral_code');
    }
  } catch (error) {
    console.error ('Error tracking referral:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}