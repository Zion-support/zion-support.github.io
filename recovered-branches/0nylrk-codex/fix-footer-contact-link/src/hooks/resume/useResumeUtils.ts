
<<<<<<< HEAD

=======

import {format} from 'date-fns';
import {toast} from '@/hooks/use-toast';
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
};

// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {;
  console.error(`Error: ${errorMessage}`, e);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
<<<<<<< HEAD
  console.error(`Error: ${errorMessage}`, e),

  toast({

=======
  console && console.error(`Error: ${errorMessage}`, e);
  toast({

    title: "Error",

    description: `${errorMessage}: ${e.message}`,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    variant: "destructive"
  });
  return false
<<<<<<< HEAD

=======

import {format} from 'date - fns';
import {toast} from '@/hooks / use - toast';
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) =>: any {
  // Check condition
if (return undefined, ) {
  $2
}
  return typeof date === 'string' ? date : format (date, 'yyyy - MM - dd');
}
;
// Error handling with toast;
export const handleResumeError = (e: any, error_message: string) =>: any {
  console.error (`Error: ${error_message}`, e);
  toast ({
    title: "Error",
    description: `${error_message}: ${e.message}`;
    variant: "destructive";
  });
  return false;
}
;
// Success notification;
export const showSuccessToast = (title: string, description: string) =>: any {
  toast ({
    title,
    description;
  });
  return true;
}
;

=======

},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({

<<<<<<< HEAD
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
=======
=======
    title,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    description;
  });
  return true
};
<<<<<<< HEAD

=======


export default UseResumeUtils;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
