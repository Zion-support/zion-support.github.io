

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  console.error(`Error: ${errorMessage}`, e),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  toast({

    title: "Error",
    description: `${errorMessage}: ${e.message}`,

    variant: "destructive"
  }),
  return false

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
