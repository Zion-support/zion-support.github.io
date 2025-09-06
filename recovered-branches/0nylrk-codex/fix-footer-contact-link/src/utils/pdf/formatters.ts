

=======
import {format} from 'date-fns';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return ''

  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')
<<<<<<< HEAD

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
