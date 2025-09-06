
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns";
=======
import { format } from "date-fns",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {format} from "date-fns";
=======
import { format } from "date-fns",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {
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
    return dateString
<<<<<<< HEAD
<<<<<<< HEAD
  }
}

=======
    return dateString

  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
