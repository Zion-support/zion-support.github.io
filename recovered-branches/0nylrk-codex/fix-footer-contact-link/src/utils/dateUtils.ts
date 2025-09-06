
<<<<<<< HEAD
import { format } from "date-fns";
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    return date_string;
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
}

