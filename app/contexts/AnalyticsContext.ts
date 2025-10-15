import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AnalyticsState {
  pageViews: number;
  events: Array<{
    name: string;
    timestamp: number;
    properties?: Record<string, any>;
  }>;
  user: {
    id?: string;
    sessionId: string;
  } | null;
}

interface AnalyticsContextType {
  state: AnalyticsState;
  trackEvent: (name: string, properties?: Record<string, any>) => void;
  trackPageView: (path: string) => void;
  setUser: (user: { id?: string; sessionId: string }) => void;
}

const initialState: AnalyticsState = {
  pageViews: 0,
  events: [],
  user: null,
};

type AnalyticsAction =
  | { type: 'TRACK_EVENT'; payload: { name: string; properties?: Record<string, any> } }
  | { type: 'TRACK_PAGE_VIEW'; payload: { path: string } }
  | { type: 'SET_USER'; payload: { id?: string; sessionId: string } };

function analyticsReducer(state: AnalyticsState, action: AnalyticsAction): AnalyticsState {
  switch (action.type) {
    case 'TRACK_EVENT':
      return {
        ...state,
        events: [...state.events, {
          name: action.payload.name,
          timestamp: Date.now(),
          properties: action.payload.properties,
        }],
      };
    case 'TRACK_PAGE_VIEW':
      return {
        ...state,
        pageViews: state.pageViews + 1,
        events: [...state.events, {
          name: 'page_view',
          timestamp: Date.now(),
          properties: { path: action.payload.path },
        }],
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [state, dispatch] = useReducer(analyticsReducer, initialState);

  const trackEvent = (name: string, properties?: Record<string, any>) => {
    dispatch({ type: 'TRACK_EVENT', payload: { name, properties } });
  };

  const trackPageView = (path: string) => {
    dispatch({ type: 'TRACK_PAGE_VIEW', payload: { path } });
  };

  const setUser = (user: { id?: string; sessionId: string }) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  return React.createElement(
    AnalyticsContext.Provider,
    { value: { state, trackEvent, trackPageView, setUser } },
    children
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}