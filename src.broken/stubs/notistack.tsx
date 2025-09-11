import React from 'react';
export const SnackbarProvider: React.FC<any> = ({ children }) => <>{children}</>,
export const useSnackbar = () => {
  return { enqueueSnackbar: (msg: string) => console.log('snackbar', msg) }
},
export type VariantType = $2;
export interface OptionsObject { variant?: VariantType }