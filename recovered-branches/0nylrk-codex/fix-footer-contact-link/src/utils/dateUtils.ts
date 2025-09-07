<<<<<<< HEAD
import { format } from "date-fns";
/**
=======
import {format} from "date-fns";
import { format } from "date-fns",/**
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {
import { format } from './date - fns';
/**;
* Formats a date string into a readable format;
* @param date_string ISO date string to format;
* @returns Formatted date string;
*/;
export const format_date = (date_string: string): string => {
  try {
    return format(new Date(dateString), "PP");
  } catch (e) {
<<<<<<< HEAD
    return dateString;
  }
};
};
=======

    return dateString

  };

import { format } from "date-fns",;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString: string): string => {;
  try {;
    return format(new Date(dateString), 'PP');
  } catch (e) {;
    return dateString;
  }>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
