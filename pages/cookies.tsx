import React, { useState } from 'react';
import Layout from '../components/layout/MainLayout';
import {
  Shield,
  Settings,
  Info,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const cookieSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false
};

export default function CookiesPage() {
  const [settings, setSettings] = useState(cookieSettings);

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and manage your preferences."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
              <p className="text-xl text-gray-600">
                Learn about how we use cookies and manage your preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Necessary Cookies</h3>
                      <p className="text-sm text-gray-600">Required for basic website functionality</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">Always Active</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <Settings className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Analytics Cookies</h3>
                      <p className="text-sm text-gray-600">Help us understand how visitors interact with our website</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.analytics ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <Info className="h-6 w-6 text-purple-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Marketing Cookies</h3>
                      <p className="text-sm text-gray-600">Used to track visitors across websites for advertising</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.marketing ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.marketing ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end space-x-4">
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Reject All
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}