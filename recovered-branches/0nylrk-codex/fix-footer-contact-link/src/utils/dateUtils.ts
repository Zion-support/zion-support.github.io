
<<<<<<< HEAD
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
},;
=======
import { format } from "date-fns",
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'PP')
  } catch (e) {
    return dateString
  }
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
