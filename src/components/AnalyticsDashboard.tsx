import React, { useEffect, useState } from 'react';
import { useAdvancedAnalytics } from '../hooks/useAdvancedAnalytics';

interface UserSession {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: number;
  userId?: string;
}

export const AnalyticsDashboard: React.FC = () => {
  const { getSession } = useAdvancedAnalytics();
  const [session, setSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const updateSession = () => {
      setSession(getSession());
    };

    updateSession();
    const interval = setInterval(updateSession, 5000);

    return () => clearInterval(interval);
  }, [getSession]);

  if (process.env.NODE_ENV !== 'development' || !session) {
    return null;
  }

  const sessionDuration = Math.round((Date.now() - session.startTime) / 1000);
  const lastActivity = Math.round((Date.now() - session.lastActivity) / 1000);

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Analytics Monitor
      </h3>
      
      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <div>Session ID: {session.sessionId.slice(-8)}</div>
        <div>Duration: {sessionDuration}s</div>
        <div>Page Views: {session.pageViews}</div>
        <div>Events: {session.events}</div>
        <div>Last Activity: {lastActivity}s ago</div>
        {session.userId && <div>User ID: {session.userId}</div>}
      </div>
    </div>
  );
};