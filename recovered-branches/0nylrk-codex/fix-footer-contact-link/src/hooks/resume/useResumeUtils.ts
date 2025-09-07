import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations


import {format} from 'date-fns';
import {toast} from '@/hooks/use-toast';
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
};

// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {;
  console.error(`Error: ${errorMessage}`, e);

import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
  console.error(`Error: ${errorMessage}`, e);import { format } from 'date-fns',;
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},

// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
};

// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;
  console.error(`Error: ${errorMessage}`, e);

import { format } from 'date-fns',;
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},


  if (!date) return undefined;
}
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {
    title,
    description;
  }),
  return true;
import { format } from 'date-fns',;
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {;
  if (!date) return undefined,;
},;
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;`;
  console.error(`Error: ${errorMessage}`, e),;
  toast({;
    title: "Error",;"`;
    description: `${errorMessage}: ${e.message}`,;"
    variant: "destructive";")
  }),;
  return false;
// Success notification;
export const showSuccessToast = (title: string, description: string) => {;
    title,;
    description;)
  });
};"
    variant: "destructive""
// Success notification;
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title;
"
import {format} from 'date - fns';
import {toast} from '@/hooks / use - toast';
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) =>: any {
  // TODO: Implement
  // Check condition;
if (return undefined, ) {
  $2;
  return typeof date === 'string' ? date : format (date, 'yyyy - MM - dd');
;
// Error handling with toast;
export const handleResumeError = (e: any, error_message: string) =>: any {
  // TODO: Implement
}`;
  console.error (`Error: ${error_message}`, e);
  toast ({
    title: "Error","`;
    description: `${error_message}: ${e.message}`;"
// Success notification;
export const showSuccessToast = (title: string, description: string) =>: any {
  toast ({
    title,
    description;
  });
  return true;
}
;

},

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
  // TODO: Implement




// Success notification;
)`;
  console.error(`Error: ${errorMessage}`, e),
  toast({"
    title: "Error"",`;
  description: `${errorMessage}: ${e.message}`;"
    description: `${errorMessage}: ${e.message}`,"
    variant: "destructive"")

// Success notification;

},"
// Utility function to format dates for DB operations;
// Error handling with toast;
// Success notification;


export default UseResumeUtils;

export default UseResumeUtils;

export default UseResumeUtils;


"`;
pr-12325
