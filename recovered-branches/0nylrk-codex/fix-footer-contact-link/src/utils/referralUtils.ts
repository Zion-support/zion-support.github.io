<<<<<<< HEAD



/**
 * Formats a date for display in the referral system;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */

export function formatDate(date: Date | string | undefined): string {}
'
  if (!date) return '-'

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


  try {
    // Check condition
if ( {) {
  $2

}
      return format (new Date (date), 'MMM d, yyyy');
    }
    return format (date, 'MMM d, yyyy');
  } catch (e) {

  if (refCode) {

    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean'
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());

    return refCode
  }


  return localStorage && localStorage.getItem('referral_code')

}
/**


 * Track referral when a user signs up
    console.error ('Error formatting date:', e);
    return '-';

  }
}
/**;



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
  return local_storage.get_item ('referral_code');
}

/**
 * Track referral when a user signs up
 */
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,

=======
import { format } from 'date-fns';

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

export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM d, yyyy')
    }
    return format(date, 'MMM d, yyyy')
  } catch (e) {;
    console.error('Error formatting date:', e);
    return '-'
  }
}
/**
 * Stores referral code in localStorage when detected in URL
 */
}

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  
  return localStorage.getItem('referral_code')
}
<<<<<<< HEAD

/**;
* Track referral when a user signs up;
*/;
export async /**;
 * track_referral - Function description;
 */


    const refCode = localStorage && localStorage.getItem('referral_code');

    if (!refCode) return,
  }
  return localStorage.getItem('referral_code')
}




/**
 * Track referral when a user signs up
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



=======
/**
 * Track referral when a user signs up
 */
export async function trackReferral(userId: string, email: string) {

'
      localStorage.removeItem('referral_code')

>>>>>>> origin/cursor/delete-old-data-records-6bba
;
/**;
 * Track referral when a user signs up;
 */;

export async function trackReferral(userId: string, email: string) {;
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

    if (response.ok) {;
      // Clear the stored referral code;
      localStorage.removeItem('referral_code');

<<<<<<< HEAD


    }

=======
      localStorage && localStorage.removeItem('referral_code')
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } catch (error) {
    console && console.error('Error tracking referral:', error)
    const ref_code = local_storage.get_item ('referral_code');
    // Check condition;
if (return, ) {
    // Call API to record the referral;
    const response = await fetch ('/api / track - referral', {
      method: 'POST',
        'Content - Type': 'application / json'}
      body: JSON.stringify ({
        ref_code;
        user_id;
        email,
        ip_address: , // This will be captured by the server;')
    // Check condition;
      // Clear the stored referral code;
      local_storage.remove_item ('referral_code');
    console.error ('Error tracking referral:', error);

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
;
/**;
 * Stores referral code in localStorage when detected in URL;
 */;
export function checkUrlForReferralCode():string | null {;
  if (typeof window === 'undefined') return null,;
  ;
  const url = new URL(window.location.href),;
  const refCode = url.searchParams.get('ref'),;
  ;
  if (refCode) {;
    localStorage.setItem('referral_code', refCode),;
    // Remove it from URL to keep it clean;
    url.searchParams.delete('ref'),;
    window.history.replaceState({}, document.title, url.toString()),;
    return refCode,;
  }
  ;
  return localStorage.getItem('referral_code'),;
}
;
/**;
 * Track referral when a user signs up;
 */;
export async function trackReferral(userId:string, email:string) {;
  try {;
    const refCode = localStorage.getItem('referral_code'),;
    if (!refCode) return,;
    ;
    // Call API to record the referral;
    const response = await fetch('/api/track-referral', {;
      method:'POST',;
      headers:{;
        'Content-Type':'application/json'},;
      body:JSON.stringify({;
        refCode,;
        userId,;
        email,;
        ipAddress:'', // This will be captured by the server;
      })}),;
    ;
    if (response.ok) {;
      // Clear the stored referral code;
      localStorage.removeItem('referral_code'),;
    }
  } catch (error) {;
    console.error('Error tracking referral:', error),;
  }
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */ 
}/** * Stores referral code in localStorage when detected in window.URL */ 
}return localStorage.getItem ('referral code') 
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
}
    }
  } catch (error) {
    console && console.error('Error tracking referral:', error)
    const ref_code = local_storage.get_item ('referral_code');
    // Check condition;
if (return, ) {
    // Call API to record the referral;
    const response = await fetch ('/api / track - referral', {
      method: 'POST',
        'Content - Type': 'application / json'}
      body: JSON.stringify ({
        ref_code;
        user_id;
        email,
        ip_address: , // This will be captured by the server;')
    // Check condition;
      // Clear the stored referral code;
      local_storage.remove_item ('referral_code');
    console.error ('Error tracking referral:', error);
  }
<<<<<<< HEAD

}

=======
            refCode;
        userId;
        email;
    'ipAddress': '', // This will be captured by the server'
      })});
>>>>>>> origin/cursor/delete-old-data-records-6bba
