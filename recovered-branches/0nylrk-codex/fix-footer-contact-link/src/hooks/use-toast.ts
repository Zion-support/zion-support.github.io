<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import {
  useToast as useToastHook,
  Toast} from "@/components/ui/toast",

// Extend the Toast component props with common toast options
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {
  description?: string,
  title?: string,
  variant?: "default" | "destructive" | "success"
},
=======
import React from &quot;react&quot;;
import {
  useToast as useToastHook,
  Toast} from &quot;@/components/ui/toast&quot;;
=======
import React from "react";
import {_useToast as useToastHook, _Toast} from "@/components/ui/toast";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Extend the Toast component props with common toast options
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {_description?: string;
  title?: string;
<<<<<<< HEAD
  variant?: &quot;default&quot; | &quot;destructive&quot; | &quot;success&quot;;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export const useToast = useToastHook,

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {
  const { toast } = useToastHook(),
  toast(props)
}

// Convenience helpers mirroring common toast variants.
baseToast.title = (title: string) => {
  baseToast({ title })
},

baseToast.description = (description: string) => {
  baseToast({ description })
},

baseToast.error = (error: string) => {
<<<<<<< HEAD
  baseToast({ variant: "destructive", title: "Error", description: error })
},

baseToast.success = (message: string) => {
  baseToast({ variant: "success", title: "Success", description: message })
},
=======
  baseToast({ variant: &quot;destructive&quot;, title: &quot;Error&quot;, description: error });
};

baseToast.success = (message: string) => {
  baseToast({ variant: &quot;success&quot;, title: &quot;Success&quot;, description: message });
=======
  variant?: "default" | "destructive" | "success";};

export const _useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(_props: ToastOptions) {_const { toast} = useToastHook();
  toast(props);
}

// Convenience helpers mirroring common toast variants.
baseToast.title = (_title: string) => {_baseToast({ title});
};

baseToast.description = (_description: string) => {_baseToast({ description});
};

baseToast.error = (_error: string) => {_baseToast({ variant: "destructive", _title: "Error", _description: error});
};

baseToast.success = (_message: string) => {_baseToast({ variant: "success", _title: "Success", _description: message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

// Export the callable toast function.
<<<<<<< HEAD
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void,
  description: (description: string) => void,
  error: (error: string) => void,
  success: (message: string) => void
},
=======
export const _toast = baseToast as typeof baseToast & {_title: (_title: string) => void;
  description: (_description: string) => void;
  error: (_error: string) => void;
  success: (_message: string) => void;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
