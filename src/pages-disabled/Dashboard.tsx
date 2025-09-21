import React from 'react';
import { Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Bell size={16} className="text-yellow-500" />
          <span className="text-white">Welcome to your dashboard</span>
        </div>
      </div>
    </div>
  );
}