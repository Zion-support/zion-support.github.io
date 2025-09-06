
<<<<<<< HEAD

import { format } from "date-fns",

=======
=======
import { format } from "date-fns",

import { format } from "date-fns";
import { format } from "date-fns",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {format} from "date-fns";
import { format } from "date-fns",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

;

    return dateString

  };

<<<<<<< HEAD
=======
=======
  try {
    return format(new Date(dateString), 'PP')
  } catch (e) {
    return dateString
  }
}

  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  }
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
