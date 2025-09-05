
<<<<<<< HEAD
import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},

// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  console.error(`Error: ${errorMessage}`, e),
  toast({
    title: &quot;Error&quot;,
    description: `${errorMessage}: ${e.message}`,
<<<<<<< HEAD
    variant: "destructive"
  }),
  return false
},
=======
    variant: &quot;destructive&quot;
  });
  return false;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title,
    description
  }),
  return true
},
=======
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
    description;
  });
  return true;
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
