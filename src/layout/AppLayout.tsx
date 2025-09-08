import React from 'react';
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  config: AppConfig;
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ config, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {config.name}
              </h1>
              <span className="ml-2 text-sm text-gray-500">
                v{config.version}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {config.environment}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children || (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to {config.name}
            </h2>
            <p className="text-gray-600 mb-8">
              Your application is running successfully!
            </p>
            
            {/* Feature Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-500">
                  {config.features.analytics ? 'Enabled' : 'Disabled'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">
                  {config.features.notifications ? 'Enabled' : 'Disabled'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-gray-900">Multi-Language</h3>
                <p className="text-sm text-gray-500">
                  {config.features.multiLanguage ? 'Enabled' : 'Disabled'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-gray-900">Dark Mode</h3>
                <p className="text-sm text-gray-500">
                  {config.features.darkMode ? 'Enabled' : 'Disabled'}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500">
            © 2024 {config.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};