
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations

export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  console && console.error(`Error: ${errorMessage}`, e);
  toast({
<<<<<<< HEAD
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
=======
    title: "Error",
    description: `${errorMessage}: ${e && e.message}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    variant: "destructive"
  });
  return false
}
// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title
    description
  });
  return true
}

