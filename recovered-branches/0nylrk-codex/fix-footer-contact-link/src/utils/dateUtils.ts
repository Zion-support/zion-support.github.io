
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns";
=======
import { format } from "date-fns",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

import { format } from "date-fns",

>>>>>>> main
=======
import {format} from "date-fns";
=======
import { format } from "date-fns",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {
<<<<<<< HEAD
  try {
    return format(new Date(dateString), 'PP')
  } catch (e) {
    return dateString
<<<<<<< HEAD
<<<<<<< HEAD
  }
}

=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
import { format } from './date - fns';
/**;
* Formats a date string into a readable format;
* @param date_string ISO date string to format;
* @returns Formatted date string;
*/;
export const format_date = (date_string: string): string => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {

;

=======
    return dateString

  };

>>>>>>> main
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
