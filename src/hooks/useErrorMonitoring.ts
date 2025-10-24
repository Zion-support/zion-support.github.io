<<<<<<< HEAD
// useErrorMonitoring hook
=======
'use client'
import { useCallback } from 'react'
import { useAnalytics } from '../components/AnalyticsProvider'
// ErrorInfo interface removed as it's not used in this hook
// Global type definitions for browser events
declare global {
  interface Window {
    __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void
  }
}
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
export const useErrorMonitoring = () => {
  // Hook implementation
  return null;
};

export default useErrorMonitoring;