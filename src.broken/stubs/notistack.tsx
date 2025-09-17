import React from 'react';
export const SnackbarProvider: React.FC<any> = ({ children }) => <>{children}</>;
export const useSnackbar = () => {
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject { variant?: VariantType; }
