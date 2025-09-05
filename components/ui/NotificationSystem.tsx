          key={notification.id},
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`},

                onClick={() => onDismiss(notification.id)},
