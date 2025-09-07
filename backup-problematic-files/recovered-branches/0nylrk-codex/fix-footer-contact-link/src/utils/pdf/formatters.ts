
import { format } from 'date-fns';
;
/**;
 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date:Date | string | undefined):string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');
  }
  return format(date, 'MMM yyyy');
} /** * Formats a date for PDF display * @param date Date or string to format * @returns Formatted date string */ 
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
