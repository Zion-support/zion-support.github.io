import React from 'react';
export type EmptyStateProps = $2;
  title: string,
  message: string,
  action?: React.ReactNode
},
export type EmptyStateProps = {

import React from "react";
export type EmptyStateProps = {;
  emoji?: string;
  title: string;
  message: string;
  return (

  );
        <span className="text-3xl">{emoji}</span>;
      </div>;"
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>;"
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>;"
      {action && <div className="mt-3">{action}</div>}
}

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Active Users</span>
          <span className="font-semibold">1,234</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Session Duration</span>
          <span className="font-semibold">5m 32s</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Bounce Rate</span>
          <span className="font-semibold">23%</span>
        </div>
  );
};
export default UserEngagementSystem;