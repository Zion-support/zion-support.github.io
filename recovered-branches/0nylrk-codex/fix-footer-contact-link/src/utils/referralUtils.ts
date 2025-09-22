
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import {format} from 'date-fns';

import {format} from 'date-fns';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import { format } from 'date-fns';
import {format} from 'date-fns';

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { format } from 'date-fns';
import {format} from 'date-fns';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
/**
 * Formats a date for display in the referral system;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */
export function formatDate(date: Date | string | undefined): string {}
'
  if (!date) return '-'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {format} from 'date - fns';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {format} from 'date - fns';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  try {
    // Check condition
if ( {) {
  $2
=======
export function format_date (date: Date | string | undefined): string {}
  // Check condition'
if (return '-', ) {};
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

  try {}
    // Check condition;
if ( {) {}
  $2;
}'
      return format (new Date (date), 'MMM d, yyyy');
    }'
    return format (date, 'MMM d, yyyy');
} catch (e) {

  const url = new URL(window && window.location.href);
  const refCode = url && url.searchParams.get('ref');
<<<<<<< HEAD
<<<<<<< HEAD
  if (refCode) {
=======
  } catch (e) {}
  if (refCode) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    localStorage && localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean'
    url && url.searchParams.delete('ref');
    window && window.history.replaceState({}, document && document.title, url && url.toString());
return refCode
}
<<<<<<< HEAD

  return localStorage && localStorage.getItem('referral_code')

}
/**
<<<<<<< HEAD
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
  }
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
 * Track referral when a user signs up
  }
}
/**;

}
const url = new URL (window.location.href);'
  const ref_code = url.search_params.get ('ref');
;
<<<<<<< HEAD
/**;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
 * Stores referral code in localStorage when detected in URL;
=======
  const url = new URL (window.location.href);
  const ref_code = url.search_params.get ('ref');
;
/**;
 * Stores referral code in localStorage when detected in URL;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  return localStorage.getItem('referral_code')
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  }'
  return local_storage.get_item ('referral_code');
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
/**;
* Track referral when a user signs up;
*/;
export async /**;
 * track_referral - Function description;
 */
function track_referral() {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
  }
  return localStorage.getItem('referral_code')
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      })});
'
      localStorage.removeItem('referral_code')

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  } catch (error) {
    console && console.error('Error tracking referral:', error)
;
/**;
 * Track referral when a user signs up;
 */;
export async function trackReferral() { return null; }
export async function trackReferral(userId: string, email: string) {;
    const refCode = localStorage.getItem('referral_code'),;
    if (!refCode) return,;
    // Call API to record the referral;
    const response = await fetch('/api/track-referral', {;
      method: 'POST',;
      headers: {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        'Content-Type': 'application/json'},;
      body: JSON.stringify({;
        refCode,;
        userId,;
<<<<<<< HEAD
        email;'
        ipAddress: '', // This will be captured by the server;
      })});
    if (response.ok) {;
      // Clear the stored referral code;'
      localStorage.removeItem('referral_code');'
      localStorage && localStorage.removeItem('referral_code')
    }
  } catch (error) {'
    console && console.error('Error tracking referral:', error)'
    const ref_code = local_storage.get_item ('referral_code');
    // Check condition;
if (return, ) {}
  $2;
}
    // Call API to record the referral;'
    const response = await fetch ('/api / track - referral', {'
      method: 'POST',
      headers: {'
        'Content - Type': 'application / json'}
      body: JSON.stringify ({}
        ref_code;
        user_id;
        email,'
        ip_address: '', // This will be captured by the server;
      })});
;
    // Check condition;
if ( {) {}
  $2;
}
      // Clear the stored referral code;'
      local_storage.remove_item ('referral_code');
    }
  } catch (error) {'
    console.error ('Error tracking referral:', error);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
    if (response.ok) {;
      // Clear the stored referral code;
      localStorage.removeItem('referral_code');
      localStorage && localStorage.removeItem('referral_code')
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
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { format } from 'date-fns',;
/**;
export function formatDate(date:Date | string | undefined):string {;
      return format(new Date(date), 'MMM d, yyyy'),;
    return format(date, 'MMM d, yyyy'),;
    return '-',;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
;
/**;
* Stores referral code in localStorage when detected in URL;
 */;
export function checkUrlForReferralCode():string | null {;'
  if (typeof window === 'undefined') return null,;
  ;
  const url = new URL(window.location.href),;'
  const refCode = url.searchParams.get('ref'),;
  ;
  if (refCode) {;'
    localStorage.setItem('referral_code', refCode),;
    // Remove it from URL to keep it clean;'
export function checkUrlForReferralCode():string | null {;
    // Remove it from URL to keep it clean;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    url.searchParams.delete('ref'),;
    window.history.replaceState({}, document.title, url.toString()),;
    return refCode,;
  }
<<<<<<< HEAD
  ;'
  return localStorage.getItem('referral_code'),;
/**;
* Track referral when a user signs up;
 */;
export async function trackReferral() { return null; }
export async function trackReferral(userId:string, email:string) {;
    // Call API to record the referral;
      method:'POST',;
      headers:{;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        'Content-Type':'application/json'},;
      body:JSON.stringify({;
refCode,;
        userId,;
<<<<<<< HEAD
        email,;'
        ipAddress:'', // This will be captured by the server;
      })}),;
    ;
    if (response.ok) {;
// Clear the stored referral code;'
      localStorage.removeItem('referral_code'),;
    }
  } catch (error) {;'
    console.error('Error tracking referral:', error),;
  }
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */ 
}/** * Stores referral code in localStorage when detected in window.URL */ '
}return localStorage.getItem ('referral code') '
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {'
  method: 'POST', headers: {'
      // Clear the stored referral code;
      localStorage.removeItem('referral_code'),;
  } catch (error) {;
    console.error('Error tracking referral:', error),;
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */ 
}/** * Stores referral code in localStorage when detected in window.URL */ 
}return localStorage.getItem ('referral code')
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {
  method: 'POST', headers: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  'Content-Type': 'application/json' 
};
}
    }
<<<<<<< HEAD
  } catch (error) {'
    console.error('Error tracking referral:', error)
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      })});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  } catch (error) {
=======
  'Content-Type': 'application/json
};
    })
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    console.error('Error tracking referral:', error)
pr-12325
  } catch (error) {'
    console.error('Error tracking referral:', error)'
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
