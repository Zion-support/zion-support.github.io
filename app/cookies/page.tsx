'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Authentication, security, and basic website functionality',
      retention: 'Session or up to 1 year'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      purpose: 'Website analytics, performance monitoring, and user behavior analysis',
      retention: 'Up to 2 years'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      purpose: 'User preferences, language settings, and personalized content',
      retention: 'Up to 1 year'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      purpose: 'Targeted advertising, remarketing, and marketing analytics',
      retention: 'Up to 1 year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies and similar technologies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: January 1, 2024
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. 
                    Below are the types of cookies we use and their purposes:
                  </p>
                  
                  <div className="space-y-6">
                    {cookieTypes.map((cookie, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-2">{cookie.name}</h3>
                        <p className="text-gray-300 mb-3">{cookie.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-cyan-400 font-semibold">Purpose:</span>
                            <p className="text-gray-300">{cookie.purpose}</p>
                          </div>
                          <div>
                            <span className="text-cyan-400 font-semibold">Retention:</span>
                            <p className="text-gray-300">{cookie.retention}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                    can impact your user experience and parts of our website may no longer be fully accessible.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Most web browsers allow you to control cookies through their settings preferences</li>
                    <li>You can set your browser to refuse cookies or delete certain cookies</li>
                    <li>You can opt out of certain third-party cookies through their respective opt-out mechanisms</li>
                    <li>You can use our cookie consent banner to manage your preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may also use third-party services that set cookies on our behalf. These may include analytics 
                    providers, advertising networks, and social media platforms. We do not control these third-party 
                    cookies and recommend reviewing their respective privacy policies.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for 
                    other operational, legal, or regulatory reasons. We will notify you of any material changes by 
                    posting the new policy on this page.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Phone: (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;