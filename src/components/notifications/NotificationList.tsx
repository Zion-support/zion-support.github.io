
=======


  loading: boolean
  error: string | null
  notifications: Notification[]
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({

  loading,
  error,
  notifications,
  onMarkAsRead,

  onDismiss,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onRetry
}) => {
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={onRetry}
          >
            Try Again
          </Button>
        </div>
      ) : loading ? (
        <div className="p-4 space-y-4">
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
        </div>
      ) : notifications.length === 0 ? (
        <div className="p-8">
          <EmptyState
            icon={<Bell className="h-8 w-8" />}
            title="No Notifications"
            description="You're all caught up."
            action={{ text: 'Refresh', onClick: onRetry }}
            className="border-none bg-transparent"
          />
        </div>
      ) : (
        notifications.map((notification) => (
          <NotificationItem

  );
};
";

=======
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;
  );
};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
