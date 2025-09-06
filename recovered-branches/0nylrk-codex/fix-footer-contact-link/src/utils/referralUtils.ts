<<<<<<< HEAD
import { format } from 'date-fns';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from 'date-fns';
=======
import {format} from 'date-fns';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
  try {
    // Check condition
if ( {) {
  $2
}
      return format (new Date (date), 'MMM d, yyyy');
    }
    return format (date, 'MMM d, yyyy');
  } catch (e) {
    console && console.error('Error formatting date:', e);
    return '-'
  }
}
/**
 * Stores referral code in localStorage when detected in URL
 */
export function checkUrlForReferralCode(): string | null {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  const refCode = url.searchParams.get('ref');
  if (refCode) {
    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
    return refCode
  }
  return localStorage.getItem('referral_code')
}
/**
 * Track referral when a user signs up
    console.error ('Error formatting date:', e);
    return '-';
  }
}
/**;
<<<<<<< HEAD
* Stores referral code in local_storage when detected in URL;
*/;
export function checkUrlForReferralCode (): string | null {
  // Check condition
if (return null) {
  $2
}
  const url = new URL (window.location.href);
  const ref_code = url.search_params.get ('ref');
;
  // Check condition
if ( {) {
  $2
}
    local_storage.set_item ('referral_code', ref_code);
    // Remove it from URL to keep it clean;
    url.search_params.delete ('ref');
    window.history.replace_state ({}, document.title, url.to_string ());
    return ref_code;
  }
  return local_storage.get_item ('referral_code');
}
/**;
* Track referral when a user signs up;
*/;
export async /**
 * track_referral - Function description
=======

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  return localStorage.getItem('referral_code')
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
/**
 * Track referral when a user signs up
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
 */
function track_referral() {
  try {
    const refCode = localStorage.getItem('referral_code');
    if (!refCode) return
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/json'}
      body: JSON.stringify({
        refCode;
        userId;
        email
        ipAddress: '', // This will be captured by the server
      })});

    if (response.ok) {
      // Clear the stored referral code
<<<<<<< HEAD
      localStorage && localStorage.removeItem('referral_code')
=======

      localStorage.removeItem('referral_code')
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
  } catch (error) {
    console && console.error('Error tracking referral:', error)
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
  }
}