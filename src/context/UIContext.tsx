import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

// State;
interface UIState {}
  isErrorModalOpen: boolean;
  errorMessage: string;
  errorRetryConfig: any | null; // Consider defining a more specific type for retryConfig;
  isLoading: boolean;
}

// Actions;
type UIAction ='
  | { type: 'SHOW_ERROR_MODAL'; payload: { message: string; retryConfig?: any } }'
  | { type: 'HIDE_ERROR_MODAL' }'
  | { type: 'SET_IS_LOADING'; payload: boolean };

const initialState: UIState = {}
  isErrorModalOpen: false,'
  errorMessage: '',
  errorRetryConfig: null,
  isLoading: false};

// Reducer;
const uiReducer: any = (state: UIState, action: UIAction): UIState => {}
  switch (action.type) {}
'
    case 'SHOW_ERROR_MODAL': any;
      return {}
        ...state,
        isErrorModalOpen: true,
        errorMessage: action.payload.message,
        errorRetryConfig: action.payload.retryConfig || null,
        isLoading: false, // Ensure loading is false when modal shows;
      };'
    case 'HIDE_ERROR_MODAL': any;
      return {}
        ...state,
        isErrorModalOpen: false,'
        errorMessage: '',
        errorRetryConfig: null};'
    case 'SET_IS_LOADING': any;
      return {}
        ...state,
        isLoading: action.payload};
    default: any;
      return state;
  }
};

// Context;
interface UIContextProps {}
  state: UIState;
  dispatch: Dispatch<UIAction>;
}

const UIContext: any = createContext<UIContextProps | undefined>(undefined);

// Provider;
interface UIProviderProps {}
  children: ReactNode;
}

export const UIProvider: any = ({ children }: UIProviderProps) => {}
  const [state, dispatch] = useReducer(uiReducer, initialState);
  return <UIContext.Provider value={{ state, dispatch }}>{children}</UIContext.Provider>;
};

// Hook;
export const useUIContext: any = () => {}
  const context: any = useContext(UIContext);
  if (context === undefined) {}
'
    throw new Error('useUIContext must be used within a UIProvider');
  }
  return context;
};
'
