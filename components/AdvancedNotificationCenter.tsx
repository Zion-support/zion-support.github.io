import React, { useState } from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: string;
  read: boolean;
  priority: "low" | "medium" | "high";
}

const AdvancedNotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Project Update",
      message: "E-commerce project milestone completed successfully",
      type: "success",
      timestamp: "2025-01-27 16:30",
      read: false,
      priority: "high",
    },
    {
      id: "2",
      title: "Resource Alert",
      message: "Mobile app project requires additional resources",
      type: "warning",
      timestamp: "2025-01-27 15:45",
      read: false,
      priority: "medium",
    },
    {
      id: "3",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur tonight at 2 AM",
      type: "info",
      timestamp: "2025-01-27 14:20",
      read: true,
      priority: "low",
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return "✅";
      case "warning":
        return "⚠️";
      case "error":
        return "❌";
      default:
        return "ℹ️";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "border-l-green-500 bg-green-50";
      case "warning":
        return "border-l-yellow-500 bg-yellow-50";
      case "error":
        return "border-l-red-500 bg-red-50";
      default:
        return "border-l-blue-500 bg-blue-50";
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notification Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with real-time notifications and alerts from your projects and systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  Recent Notifications
                </h3>
                {unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    {unreadCount} unread
                  </span>
                )}
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 border-l-4 ${getTypeColor(notification.type)} ${
                    !notification.read ? "bg-opacity-100" : "bg-opacity-50"
                  } hover:bg-opacity-75 transition-colors cursor-pointer`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`text-lg font-semibold ${
                          !notification.read ? "text-gray-900" : "text-gray-600"
                        }`}>
                          {notification.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs px-2 py-1 rounded ${
                            notification.priority === "high" ? "bg-red-100 text-red-800" :
                            notification.priority === "medium" ? "bg-yellow-100 text-yellow-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {notification.priority}
                          </span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className={`text-gray-600 mb-2 ${
                        !notification.read ? "font-medium" : ""
                      }`}>
                        {notification.message}
                      </p>
                      <p className="text-sm text-gray-500">
                        {notification.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View All Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedNotificationCenter;