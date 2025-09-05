
<<<<<<< HEAD
import { format } from 'date-fns',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
<<<<<<< HEAD
export function formatDate(date: Date | string | undefined): string {
  if (!date) return '',
  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')
  }
  return format(date, 'MMM yyyy')
=======
export function formatDate(_date: Date | string | undefined): string {_if (!date) return '';
  if (typeof date === 'string') {
    return format(new Date(date), _'MMM yyyy');}
  return format(date, 'MMM yyyy');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
