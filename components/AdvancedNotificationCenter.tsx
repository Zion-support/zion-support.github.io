import React, { useState } from "react";
interface Notification {
  id: string;
  title: string;
  message: string;
  type: "success" | "warning" | "error" | "info";
  priority: "low" | "medium" | "high" | "critical";
  timestamp: Date;
  read: boolean;
  archived: boolean;
  category: string;
  actionUrl?: string;
  metadata?: Record<string, any>;
interface AdvancedNotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead?: (id: string) => void;
  onArchive?: (id: string) => void;
  onDelete?: (id: string) => void;
const AdvancedNotificationCenter: React.FC<AdvancedNotificationCenterProps> = ({
  notifications;
  onMarkAsRead;
  onArchive;
  onDelete;
}) => {
  const [filter, setFilter] = useState<"all" | "unread" | "archived">("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === "all" || 
      (filter === "unread" && !notification.read) ||
      (filter === "archived" && notification.archived);
    const matchesType = typeFilter === "all" || notification.type === typeFilter;
    return matchesFilter && matchesType;
  });
  const getTypeIcon = (type: string) => {
    switch() {

      case "success":
        return "✅";
      case "warning":
        return "⚠️";
      case "error":
        return "❌";
      case "info":
        return "ℹ️";
      default:
        return "📢";
    }
  };