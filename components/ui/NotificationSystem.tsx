export interface Notification {
export interface Notification {;





=======

=======
import React from "react";

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const getNotificationStyles = (type: Notification["type"]): string => {;
  const baseStyles = "border-l-4";
  const typeStyles = {;
    success: "bg-green-50 border-green-400 text-green-800",;
    error: "bg-red-50 border-red-400 text-red-800",;
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",;
    info: "bg-blue-50 border-blue-400 text-blue-800",;
interface NotificationSystemProps {
interface NotificationSystemProps {;
  notifications: Notification[];
  onDismiss?: (id: string) => void;}

          key;


const getNotificationStyles = (type: Notification["type"]): string => {
  const baseStyles = "border-l-4";
  const typeStyles = {
    success: "bg-green-50 border-green-400 text-green-800"
    error: "bg-red-50 border-red-400 text-red-800"
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800"
    info: "bg-blue-50 border-blue-400 text-blue-800"
  }
  return `${baseStyles} ${typeStyles[type]}`;
}
export default function NotificationSystem({
  notifications
  onDismiss
key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {notification.title && (
                <h4 className="font-medium mb-1">{notification.title}</h4>)}
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' }
type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
}
const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} })
export function useToast() {
  return useContext(NotificationContext)
}
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, tone }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])=======    success: "bg-green-50 border-green-400 text-green-800",
    error: "bg-red-50 border-red-400 text-red-800",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    info: "bg-blue-50 border-blue-400 text-blue-800",
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
  return `${baseStyles} ${typeStyles[type]}`;
};

==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
        >,
          <div className="flex items-start justify-between">,
            <div className="flex-1">,
              {notification.title && (,
                <h4 className="font-medium mb-1">{notification.title}</h4>)},
              <p className="text-sm">{notification.message}</p>,
            </div>,
            {onDismiss && (,
              <button,
                onClick={() => onDismiss(notification.id)},;
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react',;
import { AnimatePresence, motion } from 'framer-motion',;
;
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' },

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
},

const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} }),

export function useToast() {
  return useContext(NotificationContext)
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]),

=======

  if (notifications.length === 0) return null;

}: NotificationSystemProps) {;
}: NotificationSystemProps) {
  if (notifications.length === 0) return null;
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
