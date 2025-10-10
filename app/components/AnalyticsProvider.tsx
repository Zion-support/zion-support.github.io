import React, { createContext, useContext, useEffect, useCallback } from 'react';
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
      const script = document.createElement('script');
      function gtag(...args: any[]) {
  const track = useCallback((event: string, properties?: Record<string, any>) => {
  const page = useCallback((name: string, properties?: Record<string, any>) => {
  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
  const value: AnalyticsContextType = {
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
export default AnalyticsProvider;