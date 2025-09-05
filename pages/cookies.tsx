import React from 'react';
import {
  Eye,
  Lock,
  Globe,
  Users
} from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly.",
    icon: Lock,
    purpose: "Authentication, security, and basic functionality"
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    icon: Eye,
    purpose: "Website analytics and performance monitoring"
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization.",
    icon: Globe,
    purpose: "User preferences and enhanced features"
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements.",
    icon: Users,
    purpose: "Targeted advertising and marketing campaigns"
  }
];

export default function CookiePolicy() {
  return (
    <Layout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website and your options for managing them."
      keywords="cookie policy, privacy, data protection, cookies"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Cookie Policy
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-600 mb-6">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => {
                  const IconComponent = cookie.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">{cookie.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{cookie.description}</p>
                      <p className="text-sm text-gray-500">
                        <strong>Purpose:</strong> {cookie.purpose}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>View and delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
                <li>Set preferences for different types of cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}