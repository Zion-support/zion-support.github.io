import { toast as reactToast } from 'react-toastify';

export function useToast() {
  const toast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    switch (type) {
      case 'success':
        reactToast.success(message);
        break;
      case 'error':
        reactToast.error(message);
        break;
      default:
        reactToast.info(message);
    }
  };

  return { toast };
}