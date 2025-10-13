import { format } from 'date-fns';'
/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */;
export function formatDate(date: Date | string | undefined): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!date) return '-''
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (typeof date === 'string') {'
      return format(new Date(date), 'MMM d, yyyy')'
    }
    return format(date, 'MMM d, yyyy')'
  } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error formatting date:', e)'
    return '-''
  }
}
/**
 * Stores referral code in localStorage when detected in URL
 */;
export function checkUrlForReferralCode(): string | null {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (typeof window === 'undefined') return null;';
const url = new URL(window.location.href);
const refCode = url.searchParams.get('ref')'
  if (refCode) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    localStorage.setItem('referral_code', refCode)'
    // Remove it from URL to keep it clean
    url.searchParams.delete('ref')'
    window.history.replaceState({}, document.title, url.toString())
    return refCode
  }
  return localStorage.getItem('referral_code')'
}
/**
 * Track referral when a user signs up
 */;
export async function trackReferral(userId: string, email: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const refCode = localStorage.getItem('referral_code')'
    if (!refCode) return
    // Call API to record the referral;
const response = await fetch('/api/track-referral', {'
      method: 'POST','
      headers: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        'Content-Type': 'application/json'},'
        'Content-Type': 'application/json','
      },
      body: JSON.stringify({
  // TODO: Add properties
}
  // TODO: Add properties
}
        refCode,
        userId,
        email,
        ipAddress: '', // This will be captured by the server'
      })})
      }),
    })
    if (response.ok) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Clear the stored referral code
      localStorage.removeItem('referral_code')'
    }
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error tracking referral:', error)'
  }
}
