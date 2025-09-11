
<<<<<<< HEAD
<<<<<<< HEAD
import {format} from 'date-fns';


import { format } from 'date-fns';
import {format} from 'date-fns';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {format} from 'date-fns';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
  

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (refCode) {
    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
    return refCode
  }
<<<<<<< HEAD
<<<<<<< HEAD
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
  }
=======

  
  return localStorage && localStorage.getItem('referral_code')

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

  
  return localStorage && localStorage.getItem('referral_code')

}
/**
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
 * Track referral when a user signs up
    console.error ('Error formatting date:', e);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return '-';
  }
}
/**;

<<<<<<< HEAD
<<<<<<< HEAD
    return '-';
  }
}
;
/**;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }
  return localStorage.getItem('referral_code')
}


<<<<<<< HEAD
/**
 * Track referral when a user signs up
=======

/**
 * Track referral when a user signs up
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 */
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
    

<<<<<<< HEAD
<<<<<<< HEAD
/**;
* Track referral when a user signs up;
*/;
export async /**
 * track_referral - Function description
 */
function track_referral() {
  try {
    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
  }
  return localStorage.getItem('referral_code')
}

/**
 * Track referral when a user signs up
 */
export async function trackReferral(userId: string, email: string) {
  try {;
    const refCode = localStorage.getItem('referral_code');
    if (!refCode) return
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
<<<<<<< HEAD
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
        'Content-Type': 'application/json'}
      body: JSON.stringify({
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        refCode;
        userId;
        email
        ipAddress: '', // This will be captured by the server
      })});
<<<<<<< HEAD
    if (response && response.ok) {
      // Clear the stored referral code

      localStorage.removeItem('referral_code')


<<<<<<< HEAD
    if (response.ok) {
      // Clear the stored referral code
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
    if (response && response.ok) {

      // Clear the stored referral code

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
    }
  } catch (error) {
    console && console.error('Error tracking referral:', error)
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  } catch (error) {
    console && console.error('Error tracking referral:', error)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
