
import { format } from "date-fns",;
;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString:string):string => {;
  try {;
    return format(new Date(dateString), 'PP'),;
  } catch (e) {;
    return dateString,;
  }
<<<<<<< HEAD
},; 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
