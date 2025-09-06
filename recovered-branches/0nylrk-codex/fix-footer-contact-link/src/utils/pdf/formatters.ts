
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from 'date-fns';
=======
import { format } from 'date-fns';
import {format} from 'date-fns';
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

import {format} from 'date-fns';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  }
  return format(date, 'MMM yyyy')
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
