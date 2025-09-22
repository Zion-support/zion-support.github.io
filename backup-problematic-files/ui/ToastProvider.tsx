<<<<<<< HEAD

import { AnimatePresence, motion } from 'framer-motion';
export type ToastVariant = 'default' | 'success' | 'error' | 'info';

export type Toast = {
  id: string;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  title?: string;
  description?: string;
  variant?: ToastVariant;
  action_label?: string;
  on_action?: () => void;
  duration_ms?: number;
}
<<<<<<< HEAD

  toasts: Toast[];

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  addToast: (toast: Omit<Toast, 'id'>) => string;
<<<<<<< HEAD
  removeToast: (id: string) => void;
  clearToasts: () => void;
}
<<<<<<< HEAD

=======
:components/ui/ToastProvider.tsx
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {const [toasts, setToasts] = useState<Toast[]>([]);

<<<<<<< HEAD
    const item: Toast = { id, variant: 'default', durationMs: 4000, ...toast }
    setToasts(prev => [...prev, item]);
    if (item.durationMs && item.durationMs > 0) {setTimeout(() => removeToast(id), item.durationMs);

    const item: Toast = { id, variant: 'default', durationMs: 4000, ...toast }
    setToasts(prev => [...prev, item]);
    if (item.durationMs && item.durationMs > 0) {setTimeout(() => removeToast(id), item.durationMs);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
const ToastContext = createContext<ToastContextValue | undefined>(undefined)

  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
<<<<<<< HEAD
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
    return id;
  }, [remove_toast]);
  const clear_toasts = useCallback (() => set_toasts ([]), []);
  const value = useMemo (() => ({ toasts, add_toast, remove_toast, clear_toasts }), [toasts, add_toast, remove_toast, clear_toasts]);
  return (
    <ToastContext.Provider value={value}>;
      {children}
<<<<<<< HEAD

        <AnimatePresence>
          {toasts.map(t => (
            <motion.div

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              key={t.id}
              initial={{ opacity: 0, coordinate_y: 16, scale: 0.98 }}
              animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
              exit={{ opacity: 0, coordinate_y: 8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
<<<<<<< HEAD

              className={`rounded - md border shadow - lg p - 3 backdrop - blur bg - white / 80 dark:bg - black / 60 ${
                t.variant === 'success' ? 'border - emerald - 400 / 40' : t.variant === 'error' ? 'border - rose - 400 / 40' : t.variant === 'info' ? 'border - sky - 400 / 40' : 'border - gray - 300 / 40 dark:border - gray - 700 / 40';

              }`}

=======
:components/ui/ToastProvider.tsx
>
              <div className=&quot;flex items-start gap-3&quot;>
            >
              <div className="flex items-start gap-3">
:backup-problematic-files/ui/ToastProvider.tsx
:backup-problematic-files/ui/ToastProvider.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    <ToastContext.Provider value={value}>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <div className={`mt-1 h-2 w-2 rounded-full ${
                  t.variant === 'success' ? 'bg-emerald-400' : t.variant === 'error' ? 'bg-rose-400' : t.variant === 'info' ? 'bg-sky-400' : 'bg-gray-400`;
                }`} />
<<<<<<< HEAD
                <div className="flex-1">
                  {t.title && <div className="font-medium text-sm">{t.title}</div>}
                  {t.description && <div className="text-xs opacity-80 mt-0.5">{t.description}</div>}
                  {t.actionLabel && t.onAction && (
                    <button onClick={t.onAction} className="mt-2 text-xs underline underline-offset-2 hover:opacity-80">
                      {t.actionLabel}
                    </button>;
                  )}
<<<<<<< HEAD

              </div>
            </motion.div>
          ))}

              </div>
            </motion.div>
          ))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  return ctx;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
</div>
                <div className="flex-1">"
</div>"
                  {t.title && <div className="font-medium text-sm">{t.title}</div>}""
                  {t.description && <div className="text-xs opacity-80 mt-0.5">{t.description}</div>}""
                    <button onClick={t.onAction} className="mt-2 text-xs underline underline-offset-2 hover:opacity-80">"
</button>
                    </button>;"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
