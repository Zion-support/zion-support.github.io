<<<<<<< HEAD
import {format} from 'date - fns';
/**;
* Formats a date for PDF display;
* @param date Date or string to format;
* @returns Formatted date string;
*/;
export function format_date (date: Date | string | undefined): string {
  // Check condition
if (return '', ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
}
=======

import { format } from 'date-fns',;
;
/**;
 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date:Date | string | undefined):string {;
  if (!date) return '',;
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy'),;
  }
  return format(date, 'MMM yyyy'),;
} /** * Formats a date for PDF display * @param date Date or string to format * @returns Formatted date string */ 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
