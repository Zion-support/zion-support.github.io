import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
export const formatDateForDB = $2;
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},

// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  console.error($2);
  toast($2);
  return false
},

export const handleResumeError = (e: any, errorMessage: string) => {
  console.error(`Error: ${errorMessage}`, e),
  toast({
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
    variant: "destructive"
  }),
  return false
}
// Success notification
}

export const showSuccessToast = (title: string, description: string) => {
  toast($2);
  return true
},
