
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    title,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    description;
  });
  return true
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


export default UseResumeUtils;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

export default UseResumeUtils;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

export default UseResumeUtils;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
