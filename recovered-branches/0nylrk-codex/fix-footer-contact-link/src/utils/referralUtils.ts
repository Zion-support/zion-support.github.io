
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {format} from 'date-fns';


<<<<<<< HEAD
=======
import {format} from 'date-fns';


import { format } from 'date-fns';
import {format} from 'date-fns';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  try {
    // Check condition
if ( {) {
  $2
}
      return format (new Date (date), 'MMM d, yyyy');
    }
    return format (date, 'MMM d, yyyy');
  } catch (e) {
<<<<<<< HEAD
<<<<<<< HEAD

  
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
  

=======
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (refCode) {
    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
    return refCode
<<<<<<< HEAD
  }
<<<<<<< HEAD

  
  return localStorage && localStorage.getItem('referral_code')

}
/**
=======
  return localStorage && localStorage.getItem('referral_code')
}
/**
  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM d, yyyy')
    }
    return format(date, 'MMM d, yyyy')
  } catch (e) {;
    console.error('Error formatting date:', e);
    return '-'
=======
    return '-';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
/**;
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
 * Track referral when a user signs up
=======
    console.error ('Error formatting date:', e);
    return '-';
  }
}
/**;

<<<<<<< HEAD
=======
    return '-';
  }
=======
  }
  return localStorage.getItem('referral_code')
}



/**
 * Track referral when a user signs up
* Stores referral code in local_storage when detected in URL;
*/;
export function checkUrlForReferralCode (): string | null {
  // Check condition
if (return null) {
  $2
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
  const url = new URL (window.location.href);
  const ref_code = url.search_params.get ('ref');
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
/**;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======


=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  // Check condition
if ( {) {
  $2
}
    local_storage.set_item ('referral_code', ref_code);
    // Remove it from URL to keep it clean;
    url.search_params.delete ('ref');
    window.history.replace_state ({}, document.title, url.to_string ());
    return ref_code;
<<<<<<< HEAD
  }
  return local_storage.get_item ('referral_code');
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  return local_storage.get_item ('referral_code');
}
<<<<<<< HEAD


/**
 * Track referral when a user signs up
 */
function track_referral() {
  try {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
    

<<<<<<< HEAD

  }
  return localStorage.getItem('referral_code')
}


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
/**;
* Track referral when a user signs up;
*/;
export async /**
 * track_referral - Function description
 */
function track_referral() {
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
  }
  return localStorage.getItem('referral_code')
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

/**
 * Track referral when a user signs up
 */
<<<<<<< HEAD
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
    

=======
export async function trackReferral(userId: string, email: string) {
  try {;
    const refCode = localStorage.getItem('referral_code');
    if (!refCode) return
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

=======
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
        'Content-Type': 'application/json'}
      body: JSON.stringify({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        refCode;
        userId;
        email
        ipAddress: '', // This will be captured by the server
      })});
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    
    if (response && response.ok) {

      // Clear the stored referral code

=======
    if (response && response.ok) {
      // Clear the stored referral code

      localStorage.removeItem('referral_code')


    if (response.ok) {
      // Clear the stored referral code
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      localStorage.removeItem('referral_code')
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
      localStorage && localStorage.removeItem('referral_code')
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
=======
import { format } from 'date-fns',;
;
/**;
 * Formats a date for display in the referral system;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date:Date | string | undefined):string {;
  if (!date) return '-',;
  try {;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM d, yyyy'),;
    }
    return format(date, 'MMM d, yyyy'),;
  } catch (e) {;
    console.error('Error formatting date:', e),;
    return '-',;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
    console.error('Error tracking referral:', error)
  }
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
