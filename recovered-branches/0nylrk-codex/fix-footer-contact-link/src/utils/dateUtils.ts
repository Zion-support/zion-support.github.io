<<<<<<< HEAD
import { format } from 'date-fns';

/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'PP');
  } catch (e) {
    return dateString;
  }
};
=======
 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 /** * Formats a date string into a readable format * @param dateString ISO date string to format * @returns Formatted date string */ 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
