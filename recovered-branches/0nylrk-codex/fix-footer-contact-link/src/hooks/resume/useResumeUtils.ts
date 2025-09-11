

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

=======
    title,

    description;
  });
  return true
};

export default UseResumeUtils;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
