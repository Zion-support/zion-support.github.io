import React, {useState, createContext, useContext, useCallback} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {X, CheckCircle, AlertTriangle, Info, AlertCircle, Bell} from 'lucide-react';
import {Button} from "button.tsx";
// Context
const NotificationContext = createContext(null);
// Hook
export function useNotifications(props: any) {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within a NotificationProvider')}
    return context}
export function NotificationProvider(props: any) {
    const [notifications, setNotifications] = useState([]);
    const removeNotification = useCallback((id) => {
        setNotifications(prev => prev.filter(n => n.id !== id))}, []);
    const addNotification = useCallback((notification) => {
        const newNotification = {
  ...notification,
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date(),
            dismissible: notification.dismissible ?? true,
  duration: notification.duration ?? 5000
        

const notification.js: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">notification.js</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default notification.js;