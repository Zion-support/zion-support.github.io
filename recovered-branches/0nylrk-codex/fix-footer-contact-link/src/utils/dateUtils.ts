
<<<<<<< HEAD
import { format } from "date-fns";
import { format } from "date-fns",
=======

import { format } from "date-fns",

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {format} from "date-fns";
import { format } from "date-fns",
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
    return dateString
  }
}

  };
=======

;

=======
    return dateString

  };

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
