// Client-safe toast shim to avoid server-side ESM externalization issues
// with react-hot-toast during Netlify/CI builds.

export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  // Accept and forward any additional options when available on client
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const useToast = () => ({ toast });

function getClientHotToast() {
  if (typeof window === 'undefined') return null;
  try {
    // Defer import to client runtime only
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require('react-hot-toast');
    return mod?.toast || mod?.default || null;
  } catch (_e) {
    return null;
  }
}

function toast(options: ToastOptions) {
  const clientToast = getClientHotToast();
  const message = options.description || options.title || '';

  if (clientToast) {
    if (options.variant === 'destructive') {
      clientToast.error(message, options);
    } else if (options.variant === 'success') {
      clientToast.success(message, options);
    } else {
      clientToast(message, options);
    }
    return;
  }

  // Server-side or when library unavailable: no-op with log
  if (options.variant === 'destructive') {
    console.error('Toast:', message);
  } else if (options.variant === 'success') {
    console.log('Toast success:', message);
  } else {
    console.log('Toast:', message);
  }
}

toast.title = (title: string) => {
  const clientToast = getClientHotToast();
  return clientToast ? clientToast(title) : console.log('Toast:', title);
};
toast.description = (description: string) => {
  const clientToast = getClientHotToast();
  return clientToast ? clientToast(description) : console.log('Toast:', description);
};
toast.error = (error: string) => {
  const clientToast = getClientHotToast();
  return clientToast ? clientToast.error(error) : console.error('Toast error:', error);
};
toast.success = (message: string) => {
  const clientToast = getClientHotToast();
  return clientToast ? clientToast.success(message) : console.log('Toast success:', message);
};

export { toast };