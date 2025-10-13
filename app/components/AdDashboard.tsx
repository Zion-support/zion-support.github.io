                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'`
                    }`}>
      case 'management':
        return <AdManagementSystem />.
      case 'analytics':
        return <AdAnalytics />.
      case 'scheduler':
        return <AdScheduler />.
      case 'templates':
        return <AdTemplates />.
      case 'preview':
  };

  const Component = () => {
  
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (,
              <button,
                key={tab.id};
                onClick={() => setActiveTab(tab.id as any)};`
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover: text-gray-700 hover:border-gray-300'`
                }`};"
              >""
                <tab.icon className="w-4 h-4" />
};
"
export default AdDashboard;""`
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
