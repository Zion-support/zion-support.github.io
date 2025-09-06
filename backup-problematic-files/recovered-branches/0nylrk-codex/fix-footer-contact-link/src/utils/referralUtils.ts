import { format } from 'date-fns'
  if (!date) return '-'
    if (typeof date = = 'string'
      return format(new Date(date), 'MMM d, yyyy'
    return format(date, 'MMM d, yyyy'
    console.error('Error formatting date: any
  if (typeof window = = 'undefined'
  const refCode = url.searchParams.get('ref'
    localStorage.setItem('referral_code'
    url.searchParams.delete('ref'
  return localStorage.getItem('referral_code'
    const refCode = localStorage.getItem('referral_code'
    const response = await fetch('/api/
        'Content-Type': any
** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/
  'Content-Type': any