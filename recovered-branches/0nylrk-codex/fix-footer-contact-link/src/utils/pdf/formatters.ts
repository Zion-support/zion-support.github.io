<<<<<<< HEAD
import { format } from 'date-fns';
=======
<<<<<<< HEAD

<<<<<<< HEAD
import {format} from 'date-fns';


import { format } from 'date-fns';
import {format} from 'date-fns';
=======

import {format} from 'date-fns';'



=======
import {format} from 'date-fns';
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
/**
<<<<<<< HEAD
 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */
export function formatDate(date: Date | string | undefined): string {}
'
  if (!date) return ''
'
  if (typeof date === 'string') {'
    return format(new Date(date), 'MMM yyyy')

';
import { format } from 'date-fns',;
/**;

 * Formats a date for PDF display;
=======
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {
<<<<<<< HEAD
  if (!date) return '',
=======

  if (!date) return ''

>>>>>>> merged-prs-20250907-203621
  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')
  }
  return format(date, 'MMM yyyy')
<<<<<<< HEAD
}

export function formatDate(date: Date | string | undefined): string {

  if (!date) return ''

  if (typeof date === 'string') {
    return format(new Date(date), 'MMM yyyy')
=======
import {format} from 'date - fns';
/**;

<<<<<<< HEAD
import { format } from 'date-fns',;
/**;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
 * Formats a date for PDF display;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  }
  return format(date, 'MMM yyyy')
}
  }
  return format(date, 'MMM yyyy')
<<<<<<< HEAD
}
;
=======
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }

  return format(date, 'MMM yyyy')

}
<<<<<<< HEAD
  }'
  return format(date, 'MMM yyyy')
}
;

}

}
}
}
=======
    return format (new Date (date), 'MMM yyyy');
  }
  return format (date, 'MMM yyyy');
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
