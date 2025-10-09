import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Settings, BarChart, User } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      icon: <Shield className="w-6 h-6" />,
      cookies: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization cookies'
      ],
      purpose: 'Essential for website functionality and security'
    },
    {
      title: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      icon: <BarChart className="w-6 h-6" />,
      cookies: [
        'Google Analytics',
        'Performance monitoring',
        'User behavior tracking',
        'Site usage statistics'
      ],
      purpose: 'Help us understand how visitors interact with our website'
    },
    {
      title: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      icon: <Settings className="w-6 h-6" />,
      cookies: [
        'Language preferences',
        'Region settings',
        'User preferences',
        'Customization data'
      ],
      purpose: 'Remember your choices and provide enhanced features'
    },
    {
      title: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      icon: <User className="w-6 h-6" />,
      cookies: [
        'Advertising cookies',
        'Social media cookies',
        'Retargeting cookies',
        'Interest-based advertising'
      ],
      purpose: 'Show you relevant advertisements and content'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn about how we use cookies and similar technologies on our website
            </p>
            <p className="text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Types of Cookies We Use
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieCategories.map((category, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      Purpose:
                    </h4>
                    <p className="text-sm text-gray-300">
                      {category.purpose}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      Examples:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {category.cookies.map((cookie, cookieIndex) => (
                        <li key={cookieIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                          {cookie}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Managing Your Cookie Preferences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Browser Settings
                </h3>
                <p className="text-gray-300 mb-4">
                  You can control and delete cookies through your browser settings. 
                  Most browsers allow you to refuse cookies or delete them.
                </p>
                <p className="text-sm text-gray-400">
                  Note: Disabling cookies may affect website functionality.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Cookie Consent
                </h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you can choose which cookies 
                  to accept through our cookie consent banner.
                </p>
                <p className="text-sm text-gray-400">
                  You can change your preferences at any time.
                </p>
              </div>
            </div>

            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Need Help?
              </h3>
              <p className="text-gray-300 mb-4">
                If you have questions about our use of cookies, please contact us.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Legal Information
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Data Controller
                </h3>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </p>
                <p className="text-gray-300">
                  Email: kleber@ziontechgroup.com<br />
                  Phone: +1 (302) 464-0950
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Your Rights
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Right to access your personal data</li>
                  <li>• Right to rectification of inaccurate data</li>
                  <li>• Right to erasure of your data</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;