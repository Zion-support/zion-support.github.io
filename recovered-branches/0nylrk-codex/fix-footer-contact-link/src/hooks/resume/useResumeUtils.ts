<<<<<<< HEAD
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';

// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined;
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
};

// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  console.error(`Error: ${errorMessage}`, e);
  toast({
    title: 'Error',
    description: `${errorMessage}: ${e.message}`,
    variant: 'destructive',
  });
  return false;
};

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title,
    description,
  });
  return true;
=======
 variant: "destructive" 
});
return false;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
