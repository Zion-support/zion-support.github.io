export const SnackbarProvider: React.FC<any> = ({ children }) => <>{children}</>;
export const useSnackbar = () => {
<<<<<<< HEAD
=======
  return { enqueueSnackbar: (msg: string) => console.log('snackbar'msg) };
};
export type VariantType = 'default' | 'error' | 'success' | 'info' | 'warning';
export interface OptionsObject { variant?: VariantType; }
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
