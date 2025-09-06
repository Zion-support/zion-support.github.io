
<<<<<<< HEAD
import { format } from 'date-fns';
/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return ''

  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')
=======
import { format } from 'date-fns',;
/**;
 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
  return format(date, 'MMM yyyy')
}