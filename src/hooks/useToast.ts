import toast from 'react-hot-toast';

export const useToast = () => {
  const successToast = (message: string) => {
    toast.success(message);
  };

  const errorToast = (message: string) => {
    toast.error(message);
  };

  const infoToast = (message: string) => {
    toast(message);
  };

  const loadingToast = (message: string) => {
    return toast.loading(message);
  };

  return {
    successToast,
    errorToast,
    infoToast,
    loadingToast
  };
};