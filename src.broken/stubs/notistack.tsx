<<<<<<< HEAD
import React from 'react',;
export const SnackbarProvider:React.FC<any> = ({ children }) => <>{children}</>,;
export const useSnackbar = () => {;
  return { enqueueSnackbar:(msg:string) => // // // console.log('snackbar', msg) },;
},;
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning',;
export interface OptionsObject { variant?:VariantType, }
=======
import React from 'react',
export const SnackbarProvider: React.FC<any> = ({ children }) => <>{children}</>,
export const useSnackbar = () => {
  return { enqueueSnackbar: (msg: string) => // // // console.log('snackbar', msg) }
},
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning',
export interface OptionsObject { variant?: VariantType }import React from 'react';
export const SnackbarProvider: React.FC<any> = (_{_children}) => <>{_children}</>;
export const _useSnackbar = () => {_return { enqueueSnackbar: (_msg: string) =>};
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject {_variant?: VariantType;}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
