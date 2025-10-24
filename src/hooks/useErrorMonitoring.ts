<<<<<<< HEAD
// useErrorMonitoring hook
=======
'use client'
import { useCallback } from 'react'
import { useAnalytics } from '../components/AnalyticsProvider'
// ErrorInfo interface removed as it&apos;s not used in this hook
// Global type definitions for browser events
declare global {
  interface Window {
    __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void
  }
}
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
export const useErrorMonitoring = () => {
  // Hook implementation
  return null;
};

export default useErrorMonitoring;