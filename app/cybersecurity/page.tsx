import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security consulting services."
        keywords="cybersecurity, security solutions, threat detection, vulnerability assessment, security consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Advanced Security Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
                Cybersecurity
                <span className="block text-4xl md:text-5xl text-red-400 mt-2">Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Protect your digital assets with our comprehensive cybersecurity solutions. 
                From threat detection to compliance management, we secure your business against evolving cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Security Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to protect your business from modern threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Threat Detection</h3>
                <p className="text-gray-300 mb-6">
                  Advanced monitoring and detection systems to identify and respond to security threats in real-time.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 24/7 Security Monitoring</li>
                  <li>• AI-Powered Threat Analysis</li>
                  <li>• Incident Response Planning</li>
                </ul>
              </div>

              <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Vulnerability Assessment</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security audits to identify and remediate vulnerabilities in your systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Penetration Testing</li>
                  <li>• Security Audits</li>
                  <li>• Compliance Assessments</li>
                </ul>
              </div>

              <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Consulting</h3>
                <p className="text-gray-300 mb-6">
                  Expert guidance to develop and implement robust security strategies for your organization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Security Strategy Development</li>
                  <li>• Policy Creation</li>
                  <li>• Training & Awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-8 hover:from-slate-600 hover:to-slate-700 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
                  <p className="text-gray-300 mb-6">
                    Continuous monitoring of your systems with instant alerts for any suspicious activity.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime Monitoring</div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">24/7 Support</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Instant Alerts</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-8 hover:from-slate-600 hover:to-slate-700 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-red-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Compliance Management</h3>
                  <p className="text-gray-300 mb-6">
                    Ensure your organization meets industry standards and regulatory requirements.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">100%</div>
                      <div className="text-sm text-gray-400">Compliance Rate</div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">GDPR</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">HIPAA</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">SOX</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-8 hover:from-slate-600 hover:to-slate-700 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Incident Response</h3>
                  <p className="text-gray-300 mb-6">
                    Rapid response and recovery services to minimize damage from security incidents.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">&lt;1hr</div>
                      <div className="text-sm text-gray-400">Response Time</div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">24/7 Support</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Expert Team</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don&apos;t wait for a security breach. Get comprehensive protection with our advanced cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Secure Your Business Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don&apos;t wait for a security breach. Get comprehensive protection with our advanced cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;