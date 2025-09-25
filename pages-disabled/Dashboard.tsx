import React from 'react';
import { Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        
        <div className="bg-white rounded-lg p-8">
          <div className="flex items-center mb-4">
            <Bell size={16} className='text-yellow-500 mr-2' />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <p>Dashboard content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}