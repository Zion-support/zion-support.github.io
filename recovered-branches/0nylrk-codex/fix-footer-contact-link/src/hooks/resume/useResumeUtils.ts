<<<<<<< HEAD
=======


<<<<<<< HEAD
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {format} from 'date-fns';
import {toast} from '@/hooks/use-toast';
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,

};

// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;
<<<<<<< HEAD

=======
  console.error(`Error: ${errorMessage}`, e);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { format } from 'date-fns',

import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,

  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},

<<<<<<< HEAD
export const formatDateForDB = (date: Date | string | undefined) => {}
  if (!date) return undefined'
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
};
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {}
    title,;
    description;
  }),
  return true;
},'
import { format } from 'date-fns',;'
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {;
  if (!date) return undefined,;'
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
},;
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;`
  console.error(`Error: ${errorMessage}`, e),;
  toast({;
    title: "Error",`
    description: `${errorMessage}: ${e.message}`,;"

    variant: "destructive";
  }),;
  return false;
},;
// Success notification;
export const showSuccessToast = (title: string, description: string) => {;
  toast({;
    title,;

    description;
  });
  return true;
<<<<<<< HEAD
};
=======
}
;


},


// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({

  console.error(`Error: ${errorMessage}`, e),
  toast({
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
    title: "Error",
    description: `${errorMessage}: ${e.message}`,
    variant: "destructive"
  }),
  return false
}
},

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title
    description
  }),
  return true
}

    title,
    description
  }),
  return true
},
import { format } from 'date-fns',;
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {;
  if (!date) return undefined,;
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
},;
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;
  console.error(`Error: ${errorMessage}`, e),;
  toast({;
    title: "Error",;
    description: `${errorMessage}: ${e.message}`,;
    variant: "destructive";
  }),;
  return false;
},;
// Success notification;
export const showSuccessToast = (title: string, description: string) => {;
  toast({;
    title,;
    title,

    description;
  });
  return true
};


export default UseResumeUtils;

<<<<<<< HEAD

export default UseResumeUtils;

export default UseResumeUtils;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
