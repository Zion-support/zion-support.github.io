import React from 'react';
export const SnackbarProvider: React.FC<any> = ({ children }) => <>{children}</>;
export const useSnackbar = () => {
<<<<<<< HEAD
  return { enqueueSnackbar: (msg: string) => console.log('snackbar'msg) };
=======
  return { enqueueSnackbar: (msg: string) => console.log('snackbar', msg) };
>>>>>>> origin/auto/autonomy-17186719616
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject { variant?: VariantType; }
