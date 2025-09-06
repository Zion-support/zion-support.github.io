
import { format } from 'date-fns'
  if (!date) return ''
  if (typeof date = = 'string'
    return format(new Date(date), 'MMM yyyy'
  return format(date, 'MMM yyyy'