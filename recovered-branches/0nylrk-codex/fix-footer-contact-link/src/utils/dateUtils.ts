import { format } from './date - fns';
/**;
* Formats a date string into a readable format;
* @param date_string ISO date string to format;
* @returns Formatted date string;
*/;
export const format_date = (date_string: string): string => {
  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {
    return date_string;
  }
}
;