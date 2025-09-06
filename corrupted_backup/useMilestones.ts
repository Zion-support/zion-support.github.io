<<<<<<< HEAD
import React from 'react';
export const SnackbarProvider: React.FC<any> = ({ children }) => (
  <>{children}</>
);
export const useSnackbar = () => {
  return { enqueueSnackbar: (msg: string) => console.log('snackbar', msg) };
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject {
  variant?: VariantType;
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
