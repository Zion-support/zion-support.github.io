<<<<<<< HEAD
import { format } from './date - fns';
/**;
* Formats a date string into a readable format;
* @param date_string ISO date string to format;
* @returns Formatted date string;
*/;
export const format_date = (date_string: string): string => {
  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {
    return date_string;
  }
}
;
=======

import { format } from "date-fns",;
;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString:string):string => {;
  try {;
    return format(new Date(dateString), 'PP'),;
  } catch (e) {;
    return dateString,;
  }
},; 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
