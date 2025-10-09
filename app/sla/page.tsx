'use client';
import React from 'react';

const SLAPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Service Level Agreement (SLA) - Zion Tech Group"
        description="Our comprehensive Service Level Agreement outlining uptime guarantees, response times, and service commitments for all Zion Tech Group services."
        keywords={['SLA', 'service level agreement', 'uptime guarantee', 'response time', 'support commitment', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/sla"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text">
              Service Level Agreement (SLA)
            </h1>
            
            <div className="cyber-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Service Level Commitments</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Uptime Guarantee</h3>
                  <p className="text-gray-300 mb-2">
                    We guarantee 99.9% uptime for all our services, measured monthly.
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• AI Services: 99.9% uptime</li>
                    <li>• Cloud Infrastructure: 99.9% uptime</li>
                    <li>• API Services: 99.9% uptime</li>
                    <li>• Support Portal: 99.5% uptime</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Response Times</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Critical Issues</h4>
                      <p className="text-gray-300">Response: 1 hour | Resolution: 4 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">High Priority</h4>
                      <p className="text-gray-300">Response: 4 hours | Resolution: 24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Medium Priority</h4>
                      <p className="text-gray-300">Response: 24 hours | Resolution: 72 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">Low Priority</h4>
                      <p className="text-gray-300">Response: 72 hours | Resolution: 1 week</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Service Credits</h3>
                  <p className="text-gray-300 mb-4">
                    If we fail to meet our SLA commitments, you may be eligible for service credits:
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• 99.0% - 99.9% uptime: 10% service credit</li>
                    <li>• 95.0% - 99.0% uptime: 25% service credit</li>
                    <li>• Below 95.0% uptime: 50% service credit</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Exclusions</h3>
                  <p className="text-gray-300 mb-2">
                    The following are excluded from our uptime calculations:
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Scheduled maintenance windows</li>
                    <li>• Force majeure events</li>
                    <li>• Third-party service outages</li>
                    <li>• Issues caused by client-side configurations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cyber-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Support Channels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">24/7 Support</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Email: support@ziontechgroup.com</li>
                    <li>• Phone: +1 302 464 0950</li>
                    <li>• Live Chat: Available on our website</li>
                    <li>• Support Portal: /support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Business Hours</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                    <li>• Emergency Support: 24/7</li>
                    <li>• Response within SLA times</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">General Inquiries</h3>
                  <p className="text-gray-300 mb-2">Email: info@ziontechgroup.com</p>
                  <p className="text-gray-300 mb-2">Phone: +1 302 464 0950</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Support</h3>
                  <p className="text-gray-300 mb-2">Email: support@ziontechgroup.com</p>
                  <p className="text-gray-300 mb-2">Portal: /support</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">
                  This SLA is effective as of January 1, 2024, and may be updated with 30 days notice. 
                  For questions about this SLA, please contact us at legal@ziontechgroup.com.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SLAPage;