import React from 'react';
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  config: AppConfig;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ config }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {config.name}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                v{config.version}
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to {config.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Your AI-powered marketplace is ready to go!
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Environment: {config.environment}</p>
                <p>API URL: {config.apiUrl}</p>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Features:</h3>
                  <ul className="space-y-1">
                    {config.features.analytics && <li>✓ Analytics</li>}
                    {config.features.notifications && <li>✓ Notifications</li>}
                    {config.features.multiLanguage && <li>✓ Multi-language</li>}
                    {config.features.darkMode && <li>✓ Dark mode</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};