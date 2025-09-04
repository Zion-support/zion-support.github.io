interface ToastOptions {
  duration?: number;
  position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
}

export function useToast() {
  const showToast = (message: string, options?: ToastOptions) => {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'fixed top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md z-50';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, options?.duration || 3000);
  };

  return { showToast };
}