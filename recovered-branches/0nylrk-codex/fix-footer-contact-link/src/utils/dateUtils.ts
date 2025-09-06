


<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {format} from "date-fns";
import { format } from "date-fns",

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {

  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {

<<<<<<< HEAD
    return dateString


=======
;

=======
    return dateString

  };

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
