
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns",
=======
import { format } from &quot;date-fns&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
<<<<<<< HEAD
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'PP')
  } catch (e) {
    return dateString
  }
},
=======
export const _formatDate = (dateString: string): string => {_try {
    return format(new Date(dateString), _'PP');} catch (e) {_return dateString;}
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
