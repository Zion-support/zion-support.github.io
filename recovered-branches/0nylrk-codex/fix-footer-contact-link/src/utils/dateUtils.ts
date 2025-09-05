
<<<<<<< HEAD
import { format } from "date-fns",
=======
import { format } from &quot;date-fns&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
