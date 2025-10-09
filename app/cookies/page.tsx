import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Settings, BarChart, ArrowRight } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Authentication, security, and basic functionality',
      retention: 'Session or up to 1 year',
      icon: Shield,
      color: 'text-red-400',
      examples: [
        'Authentication tokens',
        'Security preferences',
        'Language settings',
        'Shopping cart contents'
      ]
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      purpose: 'Website performance and user behavior analysis',
      retention: 'Up to 2 years',
      icon: BarChart,
      color: 'text-blue-400',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User journey analysis',
        'Performance metrics'
      ]
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      purpose: 'User preferences and enhanced features',
      retention: 'Up to 1 year',
      icon: Settings,
      color: 'text-green-400',
      examples: [
        'Theme preferences',
        'Customized content',
        'Remembered settings',
        'User interface preferences'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: December 15, 2024
          </div>
        </div>

        {/* What Are Cookies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              What Are Cookies?
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We use cookies and similar technologies to analyze how our website is used, improve its performance, 
              and provide you with personalized content and advertisements.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Types of Cookies We Use
          </h2>
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <type.icon className={`w-12 h-12 ${type.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{type.name}</h3>
                    <p className="text-gray-300 text-lg mb-4">{type.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Purpose:</h4>
                        <p className="text-gray-300">{type.purpose}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Retention:</h4>
                        <p className="text-gray-300">{type.retention}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2">
                        <span className="text-cyan-400">•</span>
                        <span className="text-gray-300">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Third-Party Cookies
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              We may also use third-party cookies from trusted partners to enhance our services and provide you with 
              relevant content and advertisements. These third parties have their own privacy policies and cookie practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Google Analytics</h3>
                <p className="text-gray-300 mb-2">We use Google Analytics to understand how visitors interact with our website.</p>
                <p className="text-sm text-gray-400">
                  <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
                <p className="text-gray-300 mb-2">We may use social media cookies to enable sharing and engagement features.</p>
                <p className="text-sm text-gray-400">
                  These cookies are controlled by the respective social media platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              You have control over cookies and can manage your preferences in several ways:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can choose to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete cookies when you close your browser</li>
                  <li>• Block cookies from specific websites</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Cookie Consent Banner</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential cookies</li>
                  <li>• Customize your preferences</li>
                  <li>• Learn more about our cookie usage</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Opt-Out Links</h3>
                <p className="text-gray-300 mb-4">
                  For specific third-party services, you can opt out directly:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
                      Google Analytics Opt-out
                    </a>
                  </li>
                  <li>
                    <a href="https://www.aboutads.info/choices/" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
                      Digital Advertising Alliance Opt-out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/privacy"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CookiesPage;