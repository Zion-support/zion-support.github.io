
<<<<<<< HEAD

import {format} from 'date-fns';


=======
import {format} from 'date-fns';


import { format } from 'date-fns';
import {format} from 'date-fns';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {

  if (!date) return ''

  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')
  }
  return format(date, 'MMM yyyy')
<<<<<<< HEAD
=======
import {format} from 'date - fns';
/**;

=======
import {format} from 'date - fns';
/**;

import { format } from 'date-fns',;
/**;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  }
  return format(date, 'MMM yyyy')
}
  }
  return format(date, 'MMM yyyy')
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  }
  return format(date, 'MMM yyyy')

}
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
