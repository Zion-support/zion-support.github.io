import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AnalyticsState {
  pageViews: number;
  events: Array<{ name: string; timestamp: number; data?: any }>;
  userSessions: number;
}

interface AnalyticsContextType {
  state: AnalyticsState;
  trackEvent: (name: string, data?: any) => void;
  trackPageView: (page: string) => void;
}

const initialState: AnalyticsState = {
  pageViews: 0,
  events: [],
  userSessions: 1,
};

type AnalyticsAction =
  | { type: 'TRACK_EVENT'; payload: { name: string; data?: any } }
  | { type: 'TRACK_PAGE_VIEW'; payload: string }
  | { type: 'INCREMENT_SESSION' };

function analyticsReducer(state: AnalyticsState, action: AnalyticsAction): AnalyticsState {
  switch (action.type) {
    case 'TRACK_EVENT':
      return {
        ...state,
        events: [...state.events, { name: action.payload.name, timestamp: Date.now(), data: action.payload.data }],
      };
    case 'TRACK_PAGE_VIEW':
      return {
        ...state,
        pageViews: state.pageViews + 1,
      };
    case 'INCREMENT_SESSION':
      return {
        ...state,
        userSessions: state.userSessions + 1,
      };
    default:
      return state;
  }
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(analyticsReducer, initialState);

  const trackEvent = (name: string, data?: any) => {
    dispatch({ type: 'TRACK_EVENT', payload: { name, data } });
  };

  const trackPageView = (page: string) => {
    dispatch({ type: 'TRACK_PAGE_VIEW', payload: page });
  };

  return React.createElement(
    AnalyticsContext.Provider,
    { value: { state, trackEvent, trackPageView } },
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