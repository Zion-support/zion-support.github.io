import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database, AlertCircle } from 'lucide-react';

const Cookies: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies to ensure website performance',
        'Session cookies to maintain your preferences'
      ],
      purpose: 'Essential for website functionality and security',
      retention: 'Session or up to 1 year'
    },
    {
      type: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: [
        'Google Analytics to understand user behavior',
        'Page view tracking to optimize content',
        'User journey analysis to improve navigation',
        'Performance monitoring to ensure fast loading'
      ],
      purpose: 'Help us understand how visitors interact with our website',
      retention: 'Up to 2 years'
    },
    {
      type: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization, such as videos and live chats.',
      examples: [
        'Language preference cookies',
        'Theme and display preference cookies',
        'Chat widget functionality cookies',
        'Video player preference cookies'
      ],
      purpose: 'Provide enhanced functionality and personalization',
      retention: 'Up to 1 year'
    },
    {
      type: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: [
        'Social media integration cookies',
        'Advertising platform cookies',
        'Remarketing and retargeting cookies',
        'Conversion tracking cookies'
      ],
      purpose: 'Show you relevant advertisements on other websites',
      retention: 'Up to 1 year'
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and improve our services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Cookie className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn about how we use cookies and similar technologies to enhance your browsing experience.
          </p>
          <div className="text-blue-200">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What Are Cookies?</h3>
                  <p className="text-blue-800">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                    They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Use of Cookies</h2>
              <p className="text-gray-600 mb-6">
                Zion Tech Group uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                and personalize content and advertisements. This Cookie Policy explains what cookies are, how we use them, 
                and how you can control them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Cookies We Use</h2>
            
            <div className="space-y-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <cookie.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{cookie.type}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{cookie.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {cookie.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <p className="text-gray-600">{cookie.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Retention Period:</h4>
                        <p className="text-gray-600">{cookie.retention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Managing Your Cookie Preferences</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can set your browser 
                  to refuse cookies or delete certain cookies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Chrome:</strong> Settings > Privacy and security > Cookies</li>
                  <li>• <strong>Firefox:</strong> Options > Privacy & Security > Cookies</li>
                  <li>• <strong>Safari:</strong> Preferences > Privacy > Cookies</li>
                  <li>• <strong>Edge:</strong> Settings > Cookies and site permissions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Consent</h3>
                <p className="text-gray-600 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of 
                  cookies you want to accept or reject.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>• You can change your preferences at any time</p>
                  <p>• Essential cookies cannot be disabled</p>
                  <p>• Disabling certain cookies may affect website functionality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Third-Party Cookies</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                We may also use third-party services that set cookies on our website. These services help us provide 
                better functionality and analyze our website performance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Analytics</li>
                    <li>• Hotjar</li>
                    <li>• Mixpanel</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Facebook Pixel</li>
                    <li>• LinkedIn Insight Tag</li>
                    <li>• Twitter Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Cookie Policy?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Updates to This Policy</h3>
              <p className="text-blue-800">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                new Cookie Policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;