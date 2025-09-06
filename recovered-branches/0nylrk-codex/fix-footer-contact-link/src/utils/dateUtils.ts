
<<<<<<< HEAD
import {format} from "date-fns";
=======
import { format } from "date-fns",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
  };
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
