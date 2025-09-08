
  id: string;



  type: 'success' | 'error' | 'warning' | 'info';
  title: string;



  message?: string;

  removeToast: (id: string) => void}
;

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {;
  const [toasts, setToasts] = useState<Toast[]>([]);




  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void}


const ToastContext = createContext<ToastContextType | undefined" >(undefined);"






  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {

    const id = Math.random().toString(36).substr(2, 9);

    const newToast = { ...toast, id }
    ;
    setToasts(prev => [...prev, newToast]);
    ;
    // Auto remove after duration;
    const duration = toast.duration || 5000;

  return (
'
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => ("
        <Toast key={toast.id} toast={toast} onRemove={removeToast} /" >
      ));
    </div>
  )}


    warning: 'bg-yellow-500', info: 'bg-blue-500' }[toast.type];

  return ('
    <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm`}" >""
      <div className="flex items-start justify-between">"
        <div>""
          <h4 className="font-medium">{toast.title}</h4>"
          {toast.message && (""


      ))}
    </div>;
  )}
;
function Toast({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {;
  const bgColor = {;
    success: 'bg-green-500',;
    error: 'bg-red-500',;
    warning: 'bg-yellow-500',;
    info: 'bg-blue-500',}[toast.type];


    success: 'bg-green-500', error: 'bg-red-500',
    warning: 'bg-yellow-500', info: 'bg-blue-500',


  }[toast.type]

    warning: 'bg-yellow-500', info: 'bg-blue-500',

  }[toast.type];




            <p className="text-sm opacity-90 mt-1">{toast.message}</p>

          )}
        </div>



          className="ml-2 text-white hover: text-gray-200"



        >
          ×&quot;
        </button>
      </div>




