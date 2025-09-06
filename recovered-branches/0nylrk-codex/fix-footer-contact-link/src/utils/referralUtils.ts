<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
=======

import {format} from 'date-fns';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { format } from 'date-fns';
import {format} from 'date-fns';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return '-'
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts

  
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
  

========
  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
  if (refCode) {
    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
    return refCode
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts

  
  return localStorage && localStorage.getItem('referral_code')

========
  return localStorage && localStorage.getItem('referral_code')
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
}
/**
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
 * Track referral when a user signs up
    console.error ('Error formatting date:', e);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return '-';
  }
}
/**;

=======
    return '-';
  }
}
;
/**;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  return localStorage.getItem('referral_code')
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
/**
 * Track referral when a user signs up
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
 */
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
    

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts

        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

========
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
=======
        'Content-Type': 'application/json'}
      body: JSON.stringify({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        refCode;
        userId;
        email
        ipAddress: '', // This will be captured by the server
      })});
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts

    
    if (response && response.ok) {

========
    if (response && response.ok) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/referralUtils.ts
      // Clear the stored referral code

      localStorage.removeItem('referral_code')

=======

    if (response.ok) {
      // Clear the stored referral code
      localStorage.removeItem('referral_code')
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */ 
}/** * Stores referral code in localStorage when detected in window.URL */ 
}return localStorage.getItem ('referral code') 
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  } catch (error) {
    console.error('Error tracking referral:', error)
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
