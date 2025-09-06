
<<<<<<< HEAD
import { format } from 'date-fns';
import {format} from 'date-fns';
=======

import {format} from 'date-fns';


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
  return format(date, 'MMM yyyy')

}
<<<<<<< HEAD
  }
  return format(date, 'MMM yyyy')
}
;
=======
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
