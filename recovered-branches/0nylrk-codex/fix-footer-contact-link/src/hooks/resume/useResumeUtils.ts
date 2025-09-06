
<<<<<<< HEAD
<<<<<<< HEAD
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const formatDateForDB = null;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { format } from 'date-fns',
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
}

export const handleResumeError = (e: any, errorMessage: string) => {
  console.error(`Error: ${errorMessage}`, e),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  toast({
<<<<<<< HEAD
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
=======
    title: "Error",
    description: `${errorMessage}: ${e.message}`,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    variant: "destructive"
  }),
  return false
<<<<<<< HEAD
}
=======
},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Success notification
}

export const showSuccessToast = (title: string, description: string) => {
  toast({
<<<<<<< HEAD
    title
    description
  }),
  return true
<<<<<<< HEAD
}

=======
=======
    title,
<<<<<<< HEAD
=======
    description
  }),
  return true
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
},
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    description;
  });
  return true
};
<<<<<<< HEAD
=======

export default UseResumeUtils;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
