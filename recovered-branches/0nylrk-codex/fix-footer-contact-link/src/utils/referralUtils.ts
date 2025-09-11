

import { format } from 'date-fns';
import {format} from 'date-fns';
=======
=======
import {format} from 'date-fns';


  if (!date) return '-'
    return '-';
  }
}
/**;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  }
  return localStorage.getItem('referral_code')
}


/**
 * Track referral when a user signs up>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 */
function track_referral() {
  try {

    const refCode = localStorage && localStorage.getItem('referral_code');
    if (!refCode) return,
    

/**
 * Track referral when a user signs up
 */
export async function trackReferral(userId: string, email: string) {
  try {;
    const refCode = localStorage.getItem('referral_code');
    if (!refCode) return
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Call API to record the referral
    const response = await fetch('/api/track-referral', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({


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
