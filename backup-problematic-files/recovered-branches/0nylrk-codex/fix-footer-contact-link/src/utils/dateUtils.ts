
<<<<<<< HEAD
import { format } from "date-fns";
=======
import { format } from "date-fns",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString:string):string => {;
  try {;
<<<<<<< HEAD
    return format(new Date(dateString), 'PP');
  } catch (e) {;
    return dateString;
  }
}; 
=======
    return format(new Date(dateString), 'PP'),;
  } catch (e) {;
    return dateString,;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
