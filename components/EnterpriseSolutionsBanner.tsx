import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap, Building2, Users, Globe, Lock } from 'lucide-react';

const EnterpriseSolutionsBanner: React.FC = () => {
  const enterpriseSolutions = [
    {
      icon: '🏢',
      title: 'Enterprise AI Transformation',
      description: 'Complete digital transformation with AI-first strategies, achieving 500% productivity gains and $100M+ cost savings',
      features: ['Custom AI Models', 'MLOps Pipeline', 'Real-time Analytics'],
      impact: '$100M+ Savings',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🛡️',
      title: 'AI Security & Compliance',
      description: 'Enterprise-grade security framework ensuring GDPR, CCPA, and SOC 2 compliance with 99.99% uptime',
      features: ['Zero Trust Architecture', 'Automated Compliance', 'Threat Detection'],
      impact: '99.99% Uptime',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Multi-cloud architecture with Kubernetes orchestration, achieving 80% cost optimization and infinite scalability',
      features: ['Multi-Cloud Strategy', 'Auto-scaling', 'Cost Optimization'],
      impact: '80% Cost Reduction',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🤖',
      title: 'Autonomous Operations',
      description: 'End-to-end automation achieving 98% operational autonomy with intelligent decision-making and self-healing systems',
      features: ['Process Automation', 'Intelligent Routing', 'Self-Healing'],
      impact: '98% Automation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const enterpriseStats = [
    { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
    { value: '$2B+', label: 'Cost Savings Delivered', icon: '💰' },
    { value: '99.9%', label: 'System Uptime', icon: '⚡' },
    { value: '24/7', label: 'Global Support', icon: '🌍' }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: '🔒' },
    { name: 'ISO 27001', icon: '🛡️' },
    { name: 'GDPR Compliant', icon: '⚖️' },
    { name: 'FedRAMP Ready', icon: '🏛️' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">ENTERPRISE SOLUTIONS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300">ENTERPRISE-GRADE SECURITY</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            🏢 Enterprise AI Solutions That Scale
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Trusted by <span className="font-bold text-blue-300">500+ Fortune 500 companies</span> worldwide. 
            Our enterprise AI solutions deliver <span className="font-bold text-green-300">$2B+ cost savings</span>, 
            <span className="font-bold text-yellow-300"> 500% productivity gains</span>, and 
            <span className="font-bold text-purple-300"> 99.9% system uptime</span>.
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
            <Globe className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-bold text-lg">
              ⚡ Global Scale • 24/7 Support • Mission-Critical Reliability
            </span>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {enterpriseSolutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <div className="mb-4">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} text-white text-sm font-bold shadow-lg`}>
                        <Zap className="w-4 h-4" />
                        {solution.impact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-blue-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/enterprise"
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Stats */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              📊 Enterprise Performance Metrics
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proven results across 500+ enterprise implementations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {enterpriseStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              🛡️ Enterprise Certifications & Compliance
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meeting the highest standards for enterprise security and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <div className="text-lg font-bold text-white">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                🚀 Ready for Enterprise AI Transformation?
              </h3>
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg">
                Join 500+ leading enterprises that trust Zion Tech Group for their AI transformation journey. 
                Achieve <span className="font-bold text-blue-300">$100M+ cost savings</span> and 
                <span className="font-bold text-green-300"> 500% productivity gains</span> with our proven enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Schedule Enterprise Demo</span>
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Enterprise Case Studies</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsBanner;