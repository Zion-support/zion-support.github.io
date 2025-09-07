<<<<<<< HEAD
import { format } from 'date-fns';
import {format} from 'date-fns';

=======

<<<<<<< HEAD
import {format} from 'date-fns';


import { format } from 'date-fns';
import {format} from 'date-fns';
=======

import {format} from 'date-fns';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**
 * Formats a date for display in the referral system;
 * @param date Date or string to format;
 * @returns Formatted date string;
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
    console.error($2);
    return '-'
  }
}

export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
=======
export function formatDate(date: Date | string | undefined): string {}
'
  if (!date) return '-'
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {format} from 'date - fns';

/**;
* Formats a date for display in the referral system;
* @param date Date or string to format;
* @returns Formatted date string;
*/;
<<<<<<< HEAD

=======
export function format_date (date: Date | string | undefined): string {
  // Check condition
if (return '-', ) {
  $2
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  try {
    // Check condition
if ( {) {
  $2
<<<<<<< HEAD
=======
}
      return format (new Date (date), 'MMM d, yyyy');
    }
    return format (date, 'MMM d, yyyy');
  } catch (e) {
<<<<<<< HEAD
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

  try {}
    // Check condition;
if ( {) {}
  $2;
}'
      return format (new Date (date), 'MMM d, yyyy');
    }'
    return format (date, 'MMM d, yyyy');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (refCode) {

    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean'
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
<<<<<<< HEAD
=======
    return refCode
  }
<<<<<<< HEAD
  return localStorage && localStorage.getItem('referral_code')
}
/**
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return localStorage && localStorage.getItem('referral_code')

}
/**
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
 * Track referral when a user signs up
    console.error ('Error formatting date:', e);
    return '-';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  }
}
/**;

}

=======
<<<<<<< HEAD
    return '-';
  }
}
;
/**;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
 * Stores referral code in localStorage when detected in URL;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  }
  return localStorage.getItem('referral_code')
}

/**;
* Track referral when a user signs up;
*/;
export async /**;
 * track_referral - Function description;
 */
<<<<<<< HEAD
function track_referral() {
  }
  try {
/**
 * Track referral when a user signs up
 */
}
function track_referral() {
  }
  try {
    }
=======

    const refCode = localStorage && localStorage.getItem('referral_code');
>>>>>>> origin/chore/fix-lint-and-merge
    if (!refCode) return,
  }
  return localStorage.getItem('referral_code')
}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**
 * Track referral when a user signs up
 */
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,

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
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
        'Content-Type': 'application/json'}
      body: JSON.stringify({
=======

        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        refCode;
        userId;
        email
        ipAddress: '', // This will be captured by the server

      })});
<<<<<<< HEAD
'
      localStorage.removeItem('referral_code')

=======
    if (response && response.ok) {
      // Clear the stored referral code

      localStorage.removeItem('referral_code')


<<<<<<< HEAD
    if (response.ok) {
      // Clear the stored referral code
=======
    
    if (response && response.ok) {

      // Clear the stored referral code

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      localStorage.removeItem('referral_code')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      localStorage && localStorage.removeItem('referral_code')
=======


    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  }
}

import { format } from 'date-fns',;
/**;
export function formatDate(date:Date | string | undefined):string {;
      return format(new Date(date), 'MMM d, yyyy'),;
    return format(date, 'MMM d, yyyy'),;
    return '-',;

  }
}
;
/**;

export function checkUrlForReferralCode():string | null {;
    // Remove it from URL to keep it clean;

  return localStorage.getItem('referral_code'),;
/**;

export async function trackReferral(userId:string, email:string) {;
    // Call API to record the referral;
      method:'POST',;
      headers:{;

        'Content-Type':'application/json'},;
      body:JSON.stringify({;

        ipAddress:'', // This will be captured by the server;
      })}),;
    ;
    if (response.ok) {;

      // Clear the stored referral code;
      localStorage.removeItem('referral_code'),;
  } catch (error) {;
    console.error('Error tracking referral:', error),;
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */ 
}/** * Stores referral code in localStorage when detected in window.URL */ 
}return localStorage.getItem ('referral code')
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {
  method: 'POST', headers: {

    console.error('Error tracking referral:', error)
pr-12325
  } catch (error) {'
    console.error('Error tracking referral:', error)'
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}
=======
}
>>>>>>> merged-prs-20250907-203621
