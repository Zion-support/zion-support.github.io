:src/hooks/use-toast.tsx

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number

;
export function useToast(...args[]):  {

:src/hooks/use-toast.tsx
  const [toasts, setToasts] = useState<any>([]);

  
    
    const newToast: Toas t = { id, title, description, variant, duration };

    setToasts(prev => [...prev, newToast]);

    if (duration > 0) {