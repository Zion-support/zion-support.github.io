import { format } from "date-fns";
/**


=======

import {format} from "date-fns";

import { format } from "date-fns",
/**

>>>>>>> origin/cursor/delete-old-data-records-6bba
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { format } from './date - fns';
/**;
* Formats a date string into a readable format;
* @param date_string ISO date string to format;
* @returns Formatted date string;
*/;
<<<<<<< HEAD

export const format_date = (date_string: string): string => {
  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {

;


=======

export const format_date = (date_string: string): string => {}
  try {";
    return format(new Date(dateString), "PP");
  } catch (e) {
    return dateString;

  }
<<<<<<< HEAD
};




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
