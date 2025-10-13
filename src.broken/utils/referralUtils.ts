import { format } from 'date-fns';';
import { apiClient } from './apiClient';'
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
  try {;
const d = typeof date === 'string' ? new Date(date) : date'
    return new Intl.DateTimeFormat('en-US', {'
      month: 'short','
      day: 'numeric','
      year: 'numeric'}).format(d)'
      year: 'numeric','
    }).format(d)
  } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    logErrorToProduction('Error formatting date:', { data:  e })'
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
    safeStorage.setItem('referral_code', refCode)'
    // Remove it from URL to keep it clean
    url.searchParams.delete('ref')'
    window.history.replaceState({}, document.title, url.toString())
    return refCode
  }
  return safeStorage.getItem('referral_code')'
}
/**
 * Track referral when a user signs up
 */;
import api from '@/lib/api';';';
export async function trackReferral(userId: string, email: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const refCode = safeStorage.getItem('referral_code')'
    if (!refCode) return false
    // Call API to record the referral;
const response = await apiClient('/api/track-referral', {'
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
    if (response.status >= 200 && response.status < 300) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Clear the stored referral code
      safeStorage.removeItem('referral_code')'
      return true
    }
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    logErrorToProduction('Error tracking referral:', { data: error })'
  }
  return false
}
