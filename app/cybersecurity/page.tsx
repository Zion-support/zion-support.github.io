<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const CybersecurityPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SEOHead
        title="Cybersecurity - Zion Tech Group"";"
        description="Professional cybersecurity solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Cybersecurity</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
>>>>>>> main
      </div>
    </>
  )
}

export default CybersecurityPage;'";'";"
=======
<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";";";";
import SEOHead from '../components/SEOHead",";";";
      const CybersecurityPage: React.FC  =  () => {"}"
        "
  return (",)"
        "
    <>{"}</>"
        "
      <SEOHead",>"
        "
        title="Cybersecurity Solutions - Zion Tech Group","
      description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security consulting services.",";";";";
      keywords="cybersecurity, security solutions, threat detection, vulnerability assessment, security consulting" />";";";";
      {/* Hero Section */};"
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center">""
        <div className="absolute inset-0 bg-black/50"></div>""
        <div className="container mx-auto px-4 relative z-10">""
          <div className="max-w-4xl mx-auto text-center">""
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">""
              <className="w-4 h-4" />","
        "
              Advanced Security Solutions","
        "
            </div>""
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">","
        "
              Cybersecurity","
        "
              <span className="block text-4xl md:text-5xl text-red-400 mt-2">Solutions</span>","
        "
            </h1>","
        "
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">","
        "
              Protect your digital assets with our comprehensive cybersecurity solutions.","
        "
              From threat detection to compliance management, we secure your business against evolving cyber threats.","
        "
            </p>","
        "
            <div className="flex flex-col sm:flex-row gap-4 justify-center">","
        "
              <",>"
        "
                to="/contact","
      className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105";"
              >","
        "
                Get Security Assessment","
        "
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />","
        "
              </>","
        "
              <"">"
                to="/consultation","
      className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105";"
              >","
        "
                Free Consultation","
        "
              </>","
        "
            </div>","
        "
          </div>","
        "
        </div>","
        "
      </section>""
      {/* Services Section */};"
      <section className="py-20 bg-slate-800">""
        <div className="container mx-auto px-4">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl font-bold text-white mb-4">Our Security Services</h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">","
        "
              Comprehensive cybersecurity solutions tailored to your business needs","
        "
            </p>","
        "
          </div>","
        "
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""
            <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">""
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">""
                <className="w-6 h-6 text-red-400" />","
        "
              </div>","
        "
              <h3 className="text-xl font-semibold text-white mb-4">Threat Detection</h3>""
              <p className="text-gray-300 mb-4">","
        "
                Advanced threat detection and response systems to identify and neutralize cyber threats in real-time.","
        "
              </p>""
              <ul className="space-y-2 text-sm text-gray-400">""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Real-time monitoring","
        "
                </li>""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  AI-powered detection","
        "
                </li>""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Automated response","
        "
                </li>","
        "
              </ul>","
        "
            </div>""
            <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">""
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">""
                <Lock className="w-6 h-6 text-red-400" />","
        "
              </div>","
        "
              <h3 className="text-xl font-semibold text-white mb-4">Vulnerability Assessment</h3>""
              <p className="text-gray-300 mb-4">","
        "
                Comprehensive security audits to identify vulnerabilities and provide actionable remediation plans.","
        "
              </p>""
              <ul className="space-y-2 text-sm text-gray-400">""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Penetration testing","
        "
                </li>""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Security scanning","
        "
                </li>""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Risk assessment","
        "
                </li>","
        "
              </ul>","
        "
            </div>""
            <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">""
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">""
                <className="w-6 h-6 text-red-400" />","
        "
              </div>","
        "
              <h3 className="text-xl font-semibold text-white mb-4">Security ing</h3>""
              <p className="text-gray-300 mb-4">","
        "
                24/7 security monitoring and incident response to ensure continuous protection of your assets.","
        "
              </p>""
              <ul className="space-y-2 text-sm text-gray-400">""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  24/7 monitoring","
        "
                </li>""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Incident response","
        "
                </li>""
                <li className="flex items-center gap-2">""
                  <CheckCircle className="w-4 h-4 text-green-400" />","
        "
                  Security reporting","
        "
                </li>","
        "
              </ul>","
        "
            </div>","
        "
          </div>","
        "
        </div>","
        "
      </section>","
        "
      {/* CTA Section */};"
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600">""
        <div className="container mx-auto px-4 text-center">""
          <h2 className="text-4xl font-bold text-white mb-6">","
        "
            Ready to Secure Your Business?","
        "
          </h2>""
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">","
        "
            Don't wait for a security breach. Get professional cybersecurity assessment and protection today.","
        "
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">","
        "
            <",>"
        "
              to="/contact","
      className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors";"
            >","
        "
              Get Started Now","
        "
            </>","
        "
            <",>"
        "
              to="/consultation","
      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors";"
            >","
        "
              Schedule Consultation","
        "
            </>","
        "
          </div>","
        "
        </div>","
        "
      </section>","
        "
    </>""
=======
<<<<<<< HEAD
import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
'use client;''";
export default function Page() {
  return (
    <div: className ="min-h-screen bg-white">""";
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta: name ="description" content="Professional page services by Zion Tech Group." />""";
      </Helmet>
      <div: className ="container mx-auto px-4 py-16">;""";
        <div: className ="text-center">;""";
          <h1: className ="text-4xl font-bold text-gray-900 mb-8">;""";
            Page;
          </h1>
          <p: className ="text-xl text-gray-600 mb-8">;""";
            Professional page solutions tailored to your business needs.;
          </p>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;""";
            <div: className ="bg-blue-50 border border-blue-200 rounded-lg p-6">;""";
              <h3: className ="text-lg font-semibold text-blue-900 mb-2">;""";
                Expert Solutions;
              </h3>
              <p: className ="text-blue-700">;""";
                Our team of experts delivers cutting-edge page solutions.;
              </p>
            </div>
            <div: className ="bg-green-50 border border-green-200 rounded-lg p-6">;""";
              <h3: className ="text-lg font-semibold text-green-900 mb-2">;""";
                Custom Implementation;
              </h3>
              <p: className ="text-green-700">;""";
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div: className ="bg-purple-50 border border-purple-200 rounded-lg p-6">;""";
              <h3: className ="text-lg font-semibold text-purple-900 mb-2">;""";
                24/7 Support;
              </h3>
              <p: className ="text-purple-700">;""";
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div: className ="mt-12">;""";
            <button: className ="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;""";
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>
  );}
}''";
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

import SEOHead from '../components/SEOHead',";
      const CybersecurityPage: React.FC = () => {"}";
        "";
  return (",)";
        "";
    <>{"}</>";
        "";
      <SEOHead",>";
        "";
        title="Cybersecurity Solutions - Zion Tech Group",";
      description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security consulting services.",";
      keywords="cybersecurity, security solutions, threat detection, vulnerability assessment, security consulting" />""";
      {/* Hero Section */};
      <section: className ="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center">""";
        <div: className ="absolute inset-0 bg-black/50"></div>""";
        <div: className ="container mx-auto px-4 relative z-10">""";
          <div: className ="max-w-4xl mx-auto text-center">""";
            <div: className ="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">""";
              <className="w-4 h-4" />",";
        "";
              Advanced Security Solutions",";
        "";
            </div>""";
            <h1: className ="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">",";
        "";
              Cybersecurity",";
        "";
              <span: className ="block text-4xl md:text-5xl text-red-400 mt-2">Solutions</span>",";
        "";
            </h1>",";
        "";
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">",";
        "";
              Protect your digital assets with our comprehensive cybersecurity solutions.",";
        "";
              From threat detection to compliance management, we secure your business against evolving cyber threats.",";
        "";
            </p>",";
        "";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">",";
        "";
              <",>";
        "";
                to="/contact",";
      className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105";";
              >",";
        "";
                Get Security Assessment",";
        "";
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />",";
        "";
              </>",";
        "";
              <"">";
                to="/consultation",";
      className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105";";
              >",";
        "";
                Free Consultation",";
        "";
              </>",";
        "";
            </div>",";
        "";
          </div>",";
        "";
        </div>",";
        "";
      </section>""";
      {/* Services Section */};
      <section: className ="py-20 bg-slate-800">""";
        <div: className ="container mx-auto px-4">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-4xl font-bold text-white mb-4">Our Security Services</h2>""";
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";
        "";
              Comprehensive cybersecurity solutions tailored to your business needs",";
        "";
            </p>",";
        "";
          </div>",";
        "";
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""";
            <div: className ="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">""";
              <div: className ="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">""";
                <className="w-6 h-6 text-red-400" />",";
        "";
              </div>",";
        "";
              <h3: className ="text-xl font-semibold text-white mb-4">Threat Detection</h3>""";
              <p: className ="text-gray-300 mb-4">",";
        "";
                Advanced threat detection and response systems to identify and neutralize cyber threats in real-time.",";
        "";
              </p>""";
              <ul: className ="space-y-2 text-sm text-gray-400">""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Real-time monitoring",";
        "";
                </li>""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  AI-powered detection",";
        "";
                </li>""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Automated response",";
        "";
                </li>",";
        "";
              </ul>",";
        "";
            </div>""";
            <div: className ="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">""";
              <div: className ="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">""";
                <Lock: className ="w-6 h-6 text-red-400" />",";
        "";
              </div>",";
        "";
              <h3: className ="text-xl font-semibold text-white mb-4">Vulnerability Assessment</h3>""";
              <p: className ="text-gray-300 mb-4">",";
        "";
                Comprehensive security audits to identify vulnerabilities and provide actionable remediation plans.",";
        "";
              </p>""";
              <ul: className ="space-y-2 text-sm text-gray-400">""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Penetration testing",";
        "";
                </li>""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Security scanning",";
        "";
                </li>""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Risk assessment",";
        "";
                </li>",";
        "";
              </ul>",";
        "";
            </div>""";
            <div: className ="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">""";
              <div: className ="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">""";
                <className="w-6 h-6 text-red-400" />",";
        "";
              </div>",";
        "";
              <h3: className ="text-xl font-semibold text-white mb-4">Security ing</h3>""";
              <p: className ="text-gray-300 mb-4">",";
        "";
                24/7 security monitoring and incident response to ensure continuous protection of your assets.",";
        "";
              </p>""";
              <ul: className ="space-y-2 text-sm text-gray-400">""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  24/7 monitoring",";
        "";
                </li>""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Incident response",";
        "";
                </li>""";
                <li: className ="flex items-center gap-2">""";
                  <CheckCircle: className ="w-4 h-4 text-green-400" />",";
        "";
                  Security reporting",";
        "";
                </li>",";
        "";
              </ul>",";
        "";
            </div>",";
        "";
          </div>",";
        "";
        </div>",";
        "";
      </section>",";
        "";
      {/* CTA Section */};
      <section: className ="py-20 bg-gradient-to-r from-red-600 to-purple-600">""";
        <div: className ="container mx-auto px-4 text-center">""";
          <h2: className ="text-4xl font-bold text-white mb-6">",";
        "";
            Ready to Secure Your Business?",";
        "";
          </h2>""";
          <p: className ="text-xl text-red-100 mb-8 max-w-2xl mx-auto">",";
        "";
            Don't wait for a security breach. Get professional cybersecurity assessment and protection today.",";";
        "";
          </p>""";
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">",";
        "";
            <",>";
        "";
              to="/contact",";
      className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors";";
            >",";
        "";
              Get Started Now",";
        "";
            </>",";
        "";
            <",>";
        "";
              to="/consultation",";
      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors";";
            >",";
        "";
              Schedule Consultation",";
        "";
            </>",";
        "";
          </div>",";
        "";
        </div>",";
        "";
      </section>",";
        "";
    </>""";
>>>>>>> main
  )
    },
    {};
,
      export default CybersecurityPage;

<<<<<<< HEAD
const CybersecurityPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Cybersecurity - Zion Tech Group"";"
        description="Professional cybersecurity solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Cybersecurity</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default CybersecurityPage;'";'";";";";
"
=======
;
const CybersecurityPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Cybersecurity - Zion Tech Group"";";
        description="Professional cybersecurity solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Cybersecurity</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default CybersecurityPage;'";'";";";

>>>>>>> main
>>>>>>> main
>>>>>>> main
