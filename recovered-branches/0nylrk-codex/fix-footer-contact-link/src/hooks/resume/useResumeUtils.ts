
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
=======
=======

>>>>>>> main
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
=======
import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
<<<<<<< HEAD
  console.error(`Error: ${errorMessage}`, e),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  toast({
<<<<<<< HEAD
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
=======
    title: "Error",
    description: `${errorMessage}: ${e.message}`,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    variant: "destructive"
  }),
  return false
<<<<<<< HEAD
}
=======
},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
<<<<<<< HEAD
    title
    description
  }),
  return true
<<<<<<< HEAD
}

=======
=======
    title,
<<<<<<< HEAD
=======
    description
  }),
  return true
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  console && console.error(`Error: ${errorMessage}`, e);
  toast({

    title: "Error",

    description: `${errorMessage}: ${e.message}`,


    variant: "destructive"
  });
  return false

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


// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({

=======
    title,

>>>>>>> main
    description;
  });
  return true
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

export default UseResumeUtils;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


export default UseResumeUtils;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
