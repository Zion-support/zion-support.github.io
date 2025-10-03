// import React from 'react';
import { Helmet } from 'react-helmet-async';

const RemoteCollaborationPlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Remote Collaboration Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced remote collaboration platform with video conferencing, project management, and real-time collaboration features for distributed teams." />
        <meta name="keywords" content="remote collaboration, video conferencing, project management, team collaboration, remote work" />
        <link rel="canonical" href="https://ziontechgroup.com/services/remote-collaboration-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Remote Collaboration Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empower your distributed teams with our comprehensive remote collaboration platform. 
              Seamless video conferencing, project management, and real-time collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors"
              >
                ✉️ Request Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete Collaboration Suite
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold mb-3">HD Video Conferencing</h3>
                <p className="text-gray-600">
                  Crystal-clear video calls with up to 100 participants and advanced screen sharing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3">Project Management</h3>
                <p className="text-gray-600">
                  Comprehensive project tracking with task management, deadlines, and progress monitoring.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Chat</h3>
                <p className="text-gray-600">
                  Instant messaging with file sharing, emoji reactions, and threaded conversations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="text-xl font-semibold mb-3">File Collaboration</h3>
                <p className="text-gray-600">
                  Share and collaborate on documents in real-time with version control.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Team Analytics</h3>
                <p className="text-gray-600">
                  Track team productivity, meeting insights, and collaboration patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level security with end-to-end encryption and compliance certifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Flexible Pricing Options
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$12<span className="text-lg text-gray-500">/user/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Up to 25 participants</li>
                  <li>✓ 5GB storage per user</li>
                  <li>✓ Basic project management</li>
                  <li>✓ Standard support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-700 transition-colors">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-purple-600 p-8 rounded-xl text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-6">$25<span className="text-lg opacity-80">/user/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Up to 100 participants</li>
                  <li>✓ 50GB storage per user</li>
                  <li>✓ Advanced project management</li>
                  <li>✓ Team analytics</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Unlimited participants</li>
                  <li>✓ Unlimited storage</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ White-label solution</li>
                  <li>✓ Dedicated support</li>
                </ul>
                <a href="tel:+13024640950" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Boost Team Productivity
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Enhanced Remote Work</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span>Increase team productivity by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span>Reduce meeting setup time by 70%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span>Improve project delivery times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span>Enhance team communication</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-4">Performance Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">35%</div>
                    <div className="text-sm opacity-80">Productivity increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">70%</div>
                    <div className="text-sm opacity-80">Faster meeting setup</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">90%</div>
                    <div className="text-sm opacity-80">User satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Remote Work?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a demo and discover how our collaboration platform can enhance your team's productivity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RemoteCollaborationPlatformPage;