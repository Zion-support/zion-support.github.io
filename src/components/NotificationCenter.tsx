import React, { useState, useEffect } from 'react';,
// Use the shared icon wrapper
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';,
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';,
import { useNotifications } from '@/context/notifications/NotificationContext';,
import { useEnqueueSnackbar } from '@/context';,
import {logErrorToProduction} from '@/utils/productionLogger';,
import { 
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications',
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC = $2;
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications($2);
  const [open, setOpen] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [loadedOnce, setLoadedOnce] = useState($2);
  const enqueueSnackbar = useEnqueueSnackbar($2);
  // Refresh notifications when popover opens, but avoid duplicate
  useEffect(() => {
    if (open && !loadedOnce) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications($2);
          setError(null)
        } catch (err) {
          logErrorToProduction($2);
          setError($2);
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
        } finally {
          setLoadedOnce(true)
        }
      },

      loadNotifications()
    }
  }, [open, loadedOnce, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead($2);
      enqueueSnackbar("All notifications marked as read", { variant: 'success' })
    } catch (err) {
      logErrorToProduction($2);
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
    }
  },

  const handleFilterChange = $2;
  return (
    <Popover open = $2;