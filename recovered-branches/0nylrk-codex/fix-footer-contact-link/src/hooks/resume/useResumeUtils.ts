<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {format} from 'date-fns';
import {toast} from '@/hooks/use-toast';
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
<<<<<<< HEAD
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
=======

import {format} from 'date-fns';'
import {toast} from '@/hooks/use-toast';
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {}
  if (!date) return undefined,';
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.error(`Error: ${errorMessage}`, e);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { format } from 'date-fns',
=======
  console.error(`Error: ${errorMessage}`, e);import { format } from 'date-fns',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  console.error(`Error: ${errorMessage}`, e);import { format } from 'date-fns',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  console.error(`Error: ${errorMessage}`, e);

import { format } from 'date-fns',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from '@/hooks/use-toast',
// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined,
=======


'
import { format } from 'date-fns','
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {}
  if (!date) return undefined,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
},
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import { format  } from 'date-fns';
import { toast } from '@/hooks/use-toast';
// Utility function to format dates for DB operations
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




export const formatDateForDB = (date: Date | string | undefined) => {}
  if (!date) return undefined'
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
};
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {}
    title,;
    description;
  }),
  return true;
},'
import { format } from 'date-fns',;'
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {;
  if (!date) return undefined,;'
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
},;
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;`
  console.error(`Error: ${errorMessage}`, e),;
  toast({;
    title: "Error",;`
    description: `${errorMessage}: ${e.message}`,;"
=======

<<<<<<< HEAD
export const formatDateForDB = (date: Date | string | undefined) => {
  if (!date) return undefined
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
}
// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
    title,
    description
  }),
  return true
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  return true;
};"
    variant: "destructive"
  });
  return false;
}
// Success notification;
export const showSuccessToast = (title: string, description: string) => {}
  toast({};
    title;
    description;
  });
  return true;
}
'
import {format} from 'date - fns';'
import {toast} from '@/hooks / use - toast';
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) =>: any {};
  // Check condition;
if (return undefined, ) {}
  $2;
}'
=======
  return true
};
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return typeof date === 'string' ? date : format (date, 'yyyy - MM - dd');
}
;
// Error handling with toast;
<<<<<<< HEAD
export const handleResumeError = (e: any, error_message: string) =>: any {};`
  console.error (`Error: ${error_message}`, e);
  toast ({"
    title: "Error",`
    description: `${error_message}: ${e.message}`;"
=======
export const handleResumeError = (e: any, error_message: string) =>: any {
  console.error (`Error: ${error_message}`, e);
  toast ({
    title: "Error",
    description: `${error_message}: ${e.message}`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    variant: "destructive";
  });
  return false;
}
;
// Success notification;
<<<<<<< HEAD
export const showSuccessToast = (title: string, description: string) =>: any {}
  toast ({}
    title,;
=======
export const showSuccessToast = (title: string, description: string) =>: any {
  toast ({
    title,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    description;
  });
  return true;
}
;


},


<<<<<<< HEAD
// Success notification;
export const showSuccessToast = (title: string, description: string) => {}
  toast({}`
  console.error(`Error: ${errorMessage}`, e),
<<<<<<< HEAD
<<<<<<< HEAD

  toast({

=======
=======
// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({

  console.error(`Error: ${errorMessage}`, e),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  toast({
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
    title: "Error",
    description: `${errorMessage}: ${e.message}`,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    variant: "destructive"
  }),
  return false
=======
  toast({"
    title: "Error";`
    description: `${errorMessage}: ${e.message}`;"
    title: "Error",`
    description: `${errorMessage}: ${e.message}`,"
    variant: "destructive"
  }),
  return false;
}
},
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

// Success notification;
export const showSuccessToast = (title: string, description: string) => {}
  toast({};
    title;
    description;
  }),
  return true;
}

    title,
    description;
  }),
  return true;
},'
import { format } from 'date-fns',;'
import { toast } from '@/hooks/use-toast',;
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {;
  if (!date) return undefined,;'
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
},;
// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;`
  console.error(`Error: ${errorMessage}`, e),;
  toast({;"
    title: "Error",;`
    description: `${errorMessage}: ${e.message}`,;"
=======
    variant: "destructive"
  }),
  return false
}
},

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title
    description
  }),
  return true
}

    title,
    description
  }),
  return true
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    variant: "destructive";
  }),;
  return false;
},;
// Success notification;
export const showSuccessToast = (title: string, description: string) => {;
  toast({;
    title,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    title,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    description;
  });
  return true;
};
=======

<<<<<<< HEAD
export default UseResumeUtils;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
    title,

    description;
  });
  return true
};

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export default UseResumeUtils;


<<<<<<< HEAD

<<<<<<< HEAD
export default UseResumeUtils;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default UseResumeUtils;

export default UseResumeUtils;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
