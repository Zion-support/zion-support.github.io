import { useCallback } from 'react';
import { useAppStore } from '../store/useAppStore';

export const useNotificationActions = () => {
  const addNotification = useAppStore(state => state.addNotification);
  const removeNotification = useAppStore(state => state.removeNotification);
  const clearNotifications = useAppStore(state => state.clearNotifications);

  const showSuccess = useCallback((title: string, message: string) => {
    addNotification({ type: 'success', title, message });
  }, [addNotification]);

  const showError = useCallback((title: string, message: string) => {
    addNotification({ type: 'error', title, message });
  }, [addNotification]);

  const showWarning = useCallback((title: string, message: string) => {
    addNotification({ type: 'warning', title, message });
  }, [addNotification]);

  const showInfo = useCallback((title: string, message: string) => {
    addNotification({ type: 'info', title, message });
  }, [addNotification]);

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    removeNotification,
    clearNotifications
  };
};