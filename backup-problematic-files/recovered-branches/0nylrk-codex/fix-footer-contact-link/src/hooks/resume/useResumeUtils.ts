<<<<<<< HEAD
title: "Error",
    description: `${errorMessage}: ${e && e.message}`;
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
},; variant: "destructive" 
});
return false;
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
