
  createContext,
  useContext,
  useState,
  useCallback,

  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
  action?: {}
    label: string;
    onClick: () => void
};
}

  addToast: (toast: Omit<Toast, "id">) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {};
  const context = useContext(ToastContext);

    throw new Error("useToast must be used within a ToastProvider");
  }
  return context
};

interface ToastProviderProps {}
  children: React.ReactNode;
  maxToasts?: number;
}

        id,
        duration: 5000,
        ...toast,
      };

        const updated = [...prev, newToast];
        return updated.slice(-maxToasts);
      });

          removeToast(id);
        }, newToast.duration);
      }

      return id;
    },
    [maxToasts],
  );

    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {}
    setToasts([]);
  }, []);

  return (

      value={{ toasts, addToast, removeToast, clearToasts }}
    >
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
};

interface ToastContainerProps {}
  toasts: Toast[];
  onRemove: (id: string) => void;
}

    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  )
};

interface ToastItemProps {}
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {}
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {}
    // Trigger entrance animation;
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {}
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 300)
};

          messageColor: "text-blue-700",
        };
    }
  };

  const { icon, bgColor, iconColor, titleColor, messageColor } =
    getIconAndColor();

  return (

              <p className={`mt-1 text-sm ${messageColor}`}>{toast.message}</p>
            )}
            {toast.action && ("
              <div className="mt-2">
                <button;
                  onClick={toast.action.onClick}`
                  className={`text-sm font-medium ${titleColor} hover:underline`}
                >
                  {toast.action.label}
                </button>
              </div>
            )}
          </div>"
          <div className="ml-4 flex-shrink-0 flex">

                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

// Convenience hooks for different toast types;
export const useToastNotifications = () => {};
  const { addToast } = useToast();

