

<<<<<<< HEAD
import {format} from 'date-fns';


import {format} from 'date-fns';


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
import { format } from 'date-fns',;
/**;

 * Formats a date for PDF display;
=======
import {format} from 'date-fns'; * Formats a date for PDF display;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(date: Date | string | undefined): string {;
  if (!date) return '';
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy');
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
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
<<<<<<< HEAD
}
}
}
=======
}}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
