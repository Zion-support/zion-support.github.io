
import { format } from "date-fns";
import { format } from "date-fns",
import {format} from "date-fns";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { format } from "date-fns",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {
  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {
    return dateString

};
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
