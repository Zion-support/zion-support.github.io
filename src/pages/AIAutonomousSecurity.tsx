import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIAutonomousSecurity: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Security Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI autonomous security platform that protects systems, detects threats, and maintains security with advanced AI capabilities and autonomous defense." />
        <meta name="keywords" content="AI security, autonomous security, threat detection, autonomous defense, AI protection, autonomous security monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Autonomous Security Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your AI security partner that never sleeps, never gets tired, and continuously protects your systems 24/7
            </p>
          </div>

          {/* Security Capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Threat Detection</h3>
              <p className="text-gray-300">Real-time monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Access Control</h3>
              <p className="text-gray-300">Secure authentication</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Incident Response</h3>
              <p className="text-gray-300">Automatic mitigation</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Security Analytics</h3>
              <p className="text-gray-300">Threat intelligence</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-red-400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Intelligence</h3>
              <p className="text-gray-300">AI trained on vast security datasets</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-orange-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Operation</h3>
              <p className="text-gray-300">AI that protects independently</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Protection</h3>
              <p className="text-gray-300">24/7 security monitoring</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-amber-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Threat Analysis</h3>
              <p className="text-gray-300">Deep security insights</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-lime-400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Risk Mitigation</h3>
              <p className="text-gray-300">Proactive threat prevention</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-green-400 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-3">Adaptive Security</h3>
              <p className="text-gray-300">Learns new threats</p>
            </div>
          </div>

          {/* Security Process */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Autonomous Security Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-white mb-2">Monitor</h3>
                <p className="text-gray-300 text-sm">Track threats</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-white mb-2">Detect</h3>
                <p className="text-gray-300 text-sm">Identify risks</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-white mb-2">Analyze</h3>
                <p className="text-gray-300 text-sm">Assess threats</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-white mb-2">Respond</h3>
                <p className="text-gray-300 text-sm">Mitigate risks</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold text-white mb-2">Recover</h3>
                <p className="text-gray-300 text-sm">Restore security</p>
              </div>
            </div>
          </div>

          {/* Security Types */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Security Solutions</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['Network Security', 'Endpoint Security', 'Cloud Security', 'Data Security', 'Application Security', 'Identity Security', 'Infrastructure Security', 'IoT Security'].map((type) => (
                <div key={type} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <span className="text-white font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Security Applications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Corporate protection</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Security</h3>
                <p className="text-gray-300">Cloud infrastructure protection</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Critical Infrastructure</h3>
                <p className="text-gray-300">Essential system protection</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for AI-Powered Security?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Transform your protection with AI that never stops defending
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Securing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutonomousSecurity;