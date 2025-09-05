import React from 'react';
export const SnackbarProvider: React.FC<any> = (_{_children}) => <>{_children}</>;
export const _useSnackbar = () => {_return { enqueueSnackbar: (_msg: string) =>};
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject {_variant?: VariantType;}
