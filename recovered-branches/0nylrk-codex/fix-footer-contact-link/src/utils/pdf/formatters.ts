





import {format} from 'date-fns';



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return ''

  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')


import { format } from 'date-fns',;
/**;

 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');



  }
  return format(date, 'MMM yyyy')

}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

    return format (new Date (date), 'MMM yyyy');

  }
  return format (date, 'MMM yyyy');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


