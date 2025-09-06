
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import {format} from 'date-fns';


=======
import {format} from 'date-fns';


import { format } from 'date-fns';
import {format} from 'date-fns';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {format} from 'date-fns';


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  }
  return format(date, 'MMM yyyy')
<<<<<<< HEAD
=======
import {format} from 'date - fns';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
/**;

=======
import {format} from 'date - fns';
/**;

import { format } from 'date-fns',;
/**;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { format } from 'date-fns',;
/**;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  }
  return format(date, 'MMM yyyy')

}
  }
  return format(date, 'MMM yyyy')
}
;
<<<<<<< HEAD
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
=======
}
}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
