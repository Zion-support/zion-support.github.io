
<<<<<<< HEAD
import { format } from 'date-fns';

/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {
=======

import {format} from 'date-fns'; * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
>>>>>>> origin/merge-pr-12271
  if (!date) return '';
  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy');
  }
<<<<<<< HEAD
  return format(date, 'MMM yyyy');
=======
  return format(date, 'MMM yyyy')

}
  }
  return format(date, 'MMM yyyy')
}
;

  }
  return format(date, 'MMM yyyy')

}
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
}}
>>>>>>> origin/merge-pr-12271
}
