
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns";
=======
import { format } from "date-fns",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { format } from "date-fns";
import { format } from "date-fns";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString:string):string => {;
  try {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return format(new Date(dateString), 'PP');
  } catch (e) {;
    return dateString;
  }
}; 
<<<<<<< HEAD
=======
=======
  try {;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return format(new Date(dateString), 'PP'),;
  } catch (e) {;
    return dateString,;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
