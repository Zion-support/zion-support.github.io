

    unreadCount,
    markAsRead,


    unreadCount, 
    markAsRead, 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications(),

  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [loadedOnce, setLoadedOnce] = useState(false),
  const enqueueSnackbar = useEnqueueSnackbar(),

=======
  const handleFilterChange = (newFilter: FilterType,) => {
    setFilter(newFilter as any)
  }
  return (
    <Popover open={open} onOpenChange={(v,) => setOpen(v ?? false)}>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  // Refresh notifications when popover opens, but avoid duplicate
  useEffect(() => {
    if (open && !loadedOnce) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          logErrorToProduction('Failed to fetch notifications:', { data: err }),
          setError("Couldn't load notifications"),
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
        } finally {
          setLoadedOnce(true)
import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { useEnqueueSnackbar } from '@/context',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  NotificationFilter,;
  NotificationHeader,;
  NotificationList,;
  NotificationFooter;
} from '@/components/notifications',;
import { FilterType } from '@/components/notifications/NotificationFilter',;
export const NotificationCenter: React.FC = () => {;
  const {;
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
    loading,;
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [loadedOnce, setLoadedOnce] = useState(false),;
  const enqueueSnackbar = useEnqueueSnackbar(),;
  // Refresh notifications when popover opens, but avoid duplicate;
  useEffect(() => {;
    if (open && !loadedOnce) {;
      const loadNotifications = async () => {;
        try {;
          await fetchNotifications(),;
          setError(null);
        } catch (err) {;
          logErrorToProduction('Failed to fetch notifications:', { data: err }),;
          setError("Couldn't load notifications"),;
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
        } finally {;
          setLoadedOnce(true);
        }
      },;
      loadNotifications();
    }
  }, [open, loadedOnce, fetchNotifications]),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (



          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}
        />
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )

          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
        />

        <NotificationFilter
          filter={filter as FilterType}
          onFilterChange={handleFilterChange}
        />

        <NotificationList
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}
