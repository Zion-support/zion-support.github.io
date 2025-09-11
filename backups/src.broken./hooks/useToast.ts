import { toast } from 'sonner';

export function useToast() {
  const successToast = (message: string) => toast.success(message);
  const errorToast = (message: string) => toast.error(message);
  return { successToast, errorToast };
}

export default useToast;

