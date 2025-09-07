import {format} from 'date-fns';

import {format} from 'date-fns';

import { format } from 'date-fns';
import {format} from 'date-fns';


/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

      localStorage.removeItem('referral_code')
/**;
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
    return refCode,;
  return localStorage.getItem('referral_code'),;
/**;
export async function trackReferral(userId:string, email:string) {;
    // Call API to record the referral;
      method:'POST',;
      headers:{;
        'Content-Type':'application/json'},;
      body:JSON.stringify({;
        email,;
        ipAddress:, // This will be captured by the server;')
      })}),;
      // Clear the stored referral code;
      localStorage.removeItem('referral_code'),;
  } catch (error) {;
    console.error('Error tracking referral:', error),;
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */ 
}/** * Stores referral code in localStorage when detected in window.URL */ 
}return localStorage.getItem ('referral code')
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {
  method: 'POST', headers: {
  'Content-Type': 'application/json
};
    })
    console.error('Error tracking referral:', error)
pr-12325
  } catch (error) {'
    console.error('Error tracking referral:', error)'
  }
}
'

