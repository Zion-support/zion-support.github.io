import React from 'react',
export const SnackbarProvider: React.FC<any> = ({ children }) => <>{children}</>,
export const useSnackbar = () => {
<<<<<<< HEAD
  return { enqueueSnackbar: (msg: string) => // // // console.log('snackbar', msg) }
},
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning',
export interface OptionsObject { variant?: VariantType }
=======
  return { enqueueSnackbar: (msg: string) => // console.log('snackbar', msg) };
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject { variant?: VariantType; }
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
