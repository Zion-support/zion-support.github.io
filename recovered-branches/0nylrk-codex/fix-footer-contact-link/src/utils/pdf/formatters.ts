
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import {format} from 'date-fns';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { format } from 'date-fns';
import {format} from 'date-fns';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

import { format } from 'date-fns',;
=======
  }
  return format(date, 'MMM yyyy')
=======
import {format} from 'date - fns';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
/**;

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { format } from 'date-fns',;
/**;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
  return format(date, 'MMM yyyy')
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
  return format(date, 'MMM yyyy')
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  return format(date, 'MMM yyyy')
}
;
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
