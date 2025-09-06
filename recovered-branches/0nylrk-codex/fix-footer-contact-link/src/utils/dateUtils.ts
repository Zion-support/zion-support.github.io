
import { format } from "date-fns";
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
<<<<<<< HEAD
<<<<<<< HEAD
export const formatDate = null;
=======
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'PP')
  } catch (e) {
    return dateString
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
