
<<<<<<< HEAD
import { format } from 'date-fns',;
import { toast } from '@/hooks/use-toast',;
;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date:Date | string | undefined) => {;
  if (!date) return undefined,;
  return typeof date === 'string' ? date :format(date, 'yyyy-MM-dd'),;
},;
;
// Error handling with toast;
export const handleResumeError = (e:any, errorMessage:string) => {;
  console.error(`Error:${errorMessage}`, e),;
  toast({;
    title:"Error",;
    description:`${errorMessage} ${e.message}`,;
    variant:"destructive";
  }),;
  return false,;
},;
;
// Success notification;
export const showSuccessToast = (title:string, description:string) => {;
  toast({;
    title,;
    description;
  }),;
  return true,;
},;
=======
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
    variant: "destructive"
  }),
  return false
},
    variant: &quot;destructive&quot;
  });
  return false;
};

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title,
    description
  }),
  return true
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
