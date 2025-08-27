import React from 'react';
import { Bell } from 'lucide-react';

export const NotificationCenter = () => {
  return (
    <div className="relative">
      <button className="p-2 rounded-lg bg-zion-blue-light hover:bg-zion-blue transition-colors">
        <Bell size={20} className="text-white" />
      </button>
    </div>
  );
};

export default NotificationCenter;