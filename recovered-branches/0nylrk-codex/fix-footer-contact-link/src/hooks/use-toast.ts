
<<<<<<< HEAD

=======
import { useToast, as, useToastHook, Toast } from "@/components/ui/toast";

// Extend the Toast component props with common toast options;
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {;

  description?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export const useToast = useToastHook;
import React from "react",
import {
  useToast as useToastHook,
  Toast} from "@/components/ui/toast",

  variant?: "default" | "destructive" | "success";

};

export const useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {}
  const { toast } = useToastHook();
  toast(props);
}
// Convenience helpers mirroring common toast variants.

};

baseToast && baseToast.description = (description: string) => {
  baseToast({ description })

<<<<<<< HEAD
}
baseToast.error = (error: string) => {
  baseToast({ variant: "destructive", title: "Error", description: error })

=======
};

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {}
  const { toast } = useToastHook(),
  toast(props)
}
// Convenience helpers mirroring common toast variants.


};

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {}
  const { toast } = useToastHook(),
  toast(props)
}
// Convenience helpers mirroring common toast variants.

>>>>>>> origin/cursor/delete-old-data-records-6bba
  baseToast({ variant: "success", title: "Success", description: message })
}
// Export the callable toast function.
export const toast = baseToast as typeof baseToast & {};
  title: (title: string) => void;

  description: (description: string) => void;

  error: (error: string) => void
  success: (message: string) => void
}



<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
},

baseToast.description = (description: string) => {
  baseToast({ description })
},

baseToast.error = (error: string) => {
  baseToast({ variant: "destructive", title: "Error", description: error })
},

baseToast.success = (message: string) => {
  baseToast({ variant: "success", title: "Success", description: message })
},

// Export the callable toast function.
<<<<<<< HEAD

=======
export const toast = baseToast as typeof baseToast & {;
  title: (title: string) => void;
  description: (description: string) => void;
  error: (error: string) => void,
  success: (message: string) => void
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void,
  description: (description: string) => void,
  error: (error: string) => void,
  success: (message: string) => void
},
import React from "react",;
import {;
  useToast as useToastHook,;
  Toast} from "@/components/ui/toast",;
// Extend the Toast component props with common toast options;
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {;
  description?: string,;
  title?: string,;
  variant?: "default" | "destructive" | "success";
},;
export const useToast = useToastHook,;
// Base toast function that delegates to the implementation from `useToastHook`.;
function baseToast(props: ToastOptions) {;
  const { toast } = useToastHook(),;
  toast(props);
}
;
// Convenience helpers mirroring common toast variants.;
baseToast.title = (title: string) => {;
  baseToast({ title });
},;
baseToast.description = (description: string) => {;
  baseToast({ description });
},;
baseToast.error = (error: string) => {;
  baseToast({ variant: "destructive", title: "Error", description: error });
},;
baseToast.success = (message: string) => {;
  baseToast({ variant: "success", title: "Success", description: message });
},;
// Export the callable toast function.;
export const toast = baseToast as typeof baseToast & {;
  title: (title: string) => void,;
  description: (description: string) => void,;
  error: (error: string) => void;
  success: (message: string) => void;
};
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  description: (description: string) => void;
  error: (error: string) => void,
  success: (message: string) => void;
export const toast = baseToast as typeof baseToast & {}
  title: (title: string) => void,
  description: (description: string) => void,
  error: (error: string) => void,;
  success: (message: string) => void;
},"
import React from "react",;
import {;
  useToast as useToastHook,;"
  Toast} from "@/components/ui/toast",;
// Extend the Toast component props with common toast options;
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {;
  description?: string,;
  title?: string,;"
  variant?: "default" | "destructive" | "success";
},;
export const useToast = useToastHook,;
// Base toast function that delegates to the implementation from `useToastHook`.;`
function baseToast() {;
  }
  toast(props);
}
;
// Convenience helpers mirroring common toast variants.;
baseToast.title = (title: string) => {;
  baseToast({ title });
},;
baseToast.description = (description: string) => {;
  baseToast({ description });
},;
baseToast.error = (error: string) => {;"
  baseToast({ variant: "destructive", title: "Error", description: error });
},;
baseToast.success = (message: string) => {;"
  baseToast({ variant: "success", title: "Success", description: message });
},;
// Export the callable toast function.;
export const toast = baseToast as typeof baseToast & {;
  title: (title: string) => void,;
  description: (description: string) => void,;
  error: (error: string) => void;
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
};


"`
>>>>>>> origin/cursor/delete-old-data-records-6bba
