

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
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')
=======

import {format} from 'date-fns';'
import {toast} from '@/hooks/use-toast';
// Utility function to format dates for DB operations;
export const formatDateForDB = (date: Date | string | undefined) => {}
  if (!date) return undefined,';
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};

// Error handling with toast;
export const handleResumeError = (e: any, errorMessage: string) => {;
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
  return typeof date === 'string' ? date : format (date, 'yyyy - MM - dd');
}
;
// Error handling with toast;
export const handleResumeError = (e: any, error_message: string) =>: any {};`
  console.error (`Error: ${error_message}`, e);
  toast ({"
    title: "Error",`
    description: `${error_message}: ${e.message}`;"
    variant: "destructive";
  });
  return false;
}
;
// Success notification;
export const showSuccessToast = (title: string, description: string) =>: any {}
  toast ({}
    title,;
    description;
  });
  return true;
}
;


},


// Success notification;
export const showSuccessToast = (title: string, description: string) => {}
  toast({}`
  console.error(`Error: ${errorMessage}`, e),
<<<<<<< HEAD
<<<<<<< HEAD

  toast({

=======
  toast({
    title: "Error"
    description: `${errorMessage}: ${e.message}`;
    title: "Error",
    description: `${errorMessage}: ${e.message}`,
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
    variant: "destructive";
  }),;
  return false;
},;
// Success notification;
export const showSuccessToast = (title: string, description: string) => {;
  toast({;
    title,;
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

export default UseResumeUtils;



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
