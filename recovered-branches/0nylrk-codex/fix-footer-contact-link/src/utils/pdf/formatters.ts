
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {format} from 'date-fns';


=======
import {format} from 'date-fns';


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { format } from 'date-fns';
import {format} from 'date-fns';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import {format} from 'date-fns';


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
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
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return format(date, 'MMM yyyy')

}
  }
  return format(date, 'MMM yyyy')
}
;
<<<<<<< HEAD
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
