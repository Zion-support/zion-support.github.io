import React, { React Node, use Callback } from 'react';
import { AnalyticsContext, AnalyticsContextType } from './Analytics Context';

interface Analytics Provider Props {
  children: React Node;
}

export const AnalyticsProvider: React.FC<AnalyticsProv iderProps> = ({ children }) => {
  const track Event = use Callback((event Name: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Event tracked:', event Name, properties);
    }
    // Add your analytics tracking logic here
  }, []);
  
  const track Page View = use Callback((page Name: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page view tracked:', page Name, properties);
    }
    // Add your page view tracking logic here
  }, []);
  
  const set User = use Callback((user Id: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('User set:', user Id, properties);
    }
    // Add your user identification logic here
  }, []);
  
  const identify User = use Callback((user Id: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('User identified:', user Id, properties);
    }
    // Add your user identification logic here
  }, []);
  
  const value: Analytics Context Type = {
    track Event,
    track Page View,
    set User,
    identify User,
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </Analytics Context.Provider>
  );
};
