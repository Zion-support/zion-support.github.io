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
/**
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

  }

  return format(date, 'MMM yyyy')

}
  }'
  return format(date, 'MMM yyyy')
}
;

}

}
}
}