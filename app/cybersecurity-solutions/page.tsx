import React from 'react';
import { Helmet } from 'react-helmet-async';
const CybersecuritySolutions = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];
  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];
  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats and ensure compliance." />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Advanced Cybersecurity Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Cybersecurity Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your business with our comprehensive cybersecurity solutions. From AI-powered threat detection
            to zero trust architecture, we provide enterprise-grade security that adapts to evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Protected
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
          </div>
              <div className="text-cyan-400 font-semibold">{service.price}</div>
            </div>
          ))}
        </div>
        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-500' : 'border-white/20'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
import React from 'react';';';
import {Helmet}}from 'react-helmet-async';';'
const CybersecuritySolutionsPage: React.FC = () => {,
  return(<>)
      <Helmet />
<title>Cybersecurity Solutions - Zion Tech Group</title>
<meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." />"
<meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" /></Helmet>"
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<div className="container mx-auto px-4 py-16">"
<div className="text-center mb-16">"
<h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Solutions;</h1></h1>"
<p className="text-xl text-gray-300 max-w-3xl mx-auto">Protect your organization with comprehensive cybersecurity solutions including;</p>"
              threat detection, vulnerability assessment, and 24/7 security monitoring.
            </p></div>
</div></section>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,</div>"
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Threat Detection</h3>"
<p className="text-gray-300 mb-4">Advanced threat detection systems to identify and respond to security threats in real-time.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Real-time monitoring</li>
<li>• Behavioral analysis</li>
<li>• Threat intelligence</li>
<li>• Automated response</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Vulnerability Assessment</h3>"
<p className="text-gray-300 mb-4">Comprehensive vulnerability scanning and assessment to identify security weaknesses.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Network scanning</li>
<li>• Penetration testing</li>
<li>• Code analysis</li>
<li>• Risk prioritization</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Monitoring</h3>"
<p className="text-gray-300 mb-4">24/7 security operations center (SOC) monitoring and incident response.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• 24/7 monitoring</li>
<li>• Incident response</li>
<li>• Log analysis</li>
<li>• Threat hunting</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Compliance Management</h3>"
<p className="text-gray-300 mb-4">Ensure compliance with industry regulations and security standards.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• GDPR compliance</li>
<li>• HIPAA compliance</li>
<li>• SOX compliance</li>
<li>• Audit preparation</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Data Protection</h3>"
<p className="text-gray-300 mb-4">Advanced data protection and encryption solutions for sensitive information.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Data encryption</li>
<li>• Access controls</li>
<li>• Data loss prevention</li>
<li>• Backup solutions</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Training</h3>"
<p className="text-gray-300 mb-4">Comprehensive security awareness training for your employees.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Phishing simulation</li>
<li>• Security awareness</li>
<li>• Best practices</li>
<li>• Incident reporting</li></ul>
</div></div>
<div className="text-center">"
<button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">,</button>"
              Secure Your Organization;
            </button></div>
</div></div>
</>
  );};
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
            Secure Your Business
          </h2>
<p className="text-xl text-gray-300 mb-8">"
            Get started with our comprehensive cybersecurity solutions.
          </p>
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">"
<ArrowRight className="w-5 h-5 mr-2" />"
            Get Started
          </button></div>
</section>
<Footer /></div>
  )
}
export default CybersecuritySolutionsPage;
}
