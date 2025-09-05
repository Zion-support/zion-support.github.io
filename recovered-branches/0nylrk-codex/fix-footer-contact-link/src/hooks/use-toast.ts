import React from "react";
import {_useToast as useToastHook, _Toast} from "@/components/ui/toast";

// Extend the Toast component props with common toast options
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {_description?: string;
  title?: string;
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
};

// Export the callable toast function.
export const _toast = baseToast as typeof baseToast & {_title: (_title: string) => void;
  description: (_description: string) => void;
  error: (_error: string) => void;
  success: (_message: string) => void;};
