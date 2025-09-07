  title?: string;
  description?: string;
  variant?: ToastVariant;
  action_label?: string;
  on_action?: () => void;
  duration_ms?: number;
}
  addToast: (toast: Omit<Toast, 'id'>) => string;

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {const [toasts, setToasts] = useState<Toast[]>([]);

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {

    <ToastContext.Provider value={value}>;

                <div className={`mt-1 h-2 w-2 rounded-full ${
                  t.variant === 'success' ? 'bg-emerald-400' : t.variant === 'error' ? 'bg-rose-400' : t.variant === 'info' ? 'bg-sky-400' : 'bg-gray-400`;
                }`} />
</div>
                <div className="flex-1">"
</div>"
                  {t.title && <div className="font-medium text-sm">{t.title}</div>}""
                  {t.description && <div className="text-xs opacity-80 mt-0.5">{t.description}</div>}""
                    <button onClick={t.onAction} className="mt-2 text-xs underline underline-offset-2 hover:opacity-80">"
</button>
                    </button>;"`;