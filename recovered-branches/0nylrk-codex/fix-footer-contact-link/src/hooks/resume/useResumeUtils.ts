
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
=======

// Utility function to format dates for DB operations
export const _formatDateForDB = (_date: Date | string | undefined) => {_if (!date) return undefined;
  return typeof date === 'string' ? date : format(date, _'yyyy-MM-dd');};

// Error handling with toast
export const _handleResumeError = (_e: unknown, _errorMessage: string) => {_toast({
    title: "Error", _description: `${errorMessage}: ${_e.message}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title,
    description
  }),
  return true
},
=======
export const _showSuccessToast = (_title: string, _description: string) => {_toast({
    title, _description});
  return true;
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
