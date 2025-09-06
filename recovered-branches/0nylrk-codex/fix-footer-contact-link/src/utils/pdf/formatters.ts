

<<<<<<< HEAD
=======
import {format} from 'date-fns';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

import { format } from 'date-fns',;
=======
  }
  return format(date, 'MMM yyyy')
=======
import {format} from 'date - fns';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
/**;

 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');

<<<<<<< HEAD
  }
  return format(date, 'MMM yyyy')
}
;

=======

  }
  return format(date, 'MMM yyyy')

}
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
