
<<<<<<< HEAD
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  console.error(`Error: ${errorMessage}`, e),
  toast({
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
    title: "Error",

    description: `${errorMessage}: ${e.message}`,
    variant: "destructive"
  });
  return false
}
},

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
<<<<<<< HEAD
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
=======

=======
    title,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    description;
  });
  return true
};

export default UseResumeUtils;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
