import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CybersecurityServicesPage() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat assessment, penetration testing, security monitoring, and incident response. Protect your business from cyber threats." />
        <meta name="keywords" content="cybersecurity services, security assessment, penetration testing, threat monitoring, incident response, security consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from evolving cyber threats. From risk assessment to incident response, we've got you covered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Security Assessment
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Comprehensive Security Services</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Risk Assessment</h3>
                    <p className="text-gray-600">Comprehensive evaluation of your security posture to identify vulnerabilities and recommend improvements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Penetration Testing</h3>
                    <p className="text-gray-600">Simulated cyber attacks to test your defenses and identify security weaknesses before malicious actors do.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Security Monitoring</h3>
                    <p className="text-gray-600">Round-the-clock monitoring of your systems to detect and respond to threats in real-time.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Incident Response</h3>
                    <p className="text-gray-600">Rapid response to security incidents with expert containment, investigation, and recovery services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic Security</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Security assessment</li>
                    <li>Basic monitoring</li>
                    <li>Email support</li>
                    <li>Monthly reports</li>
                    <li>Vulnerability scanning</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Security</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$799/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Everything in Basic</li>
                    <li>Penetration testing</li>
                    <li>24/7 monitoring</li>
                    <li>Priority support</li>
                    <li>Incident response</li>
                    <li>Security training</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$1,999/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Everything in Advanced</li>
                    <li>Dedicated security team</li>
                    <li>Custom security policies</li>
                    <li>Compliance management</li>
                    <li>White-label options</li>
                    <li>On-site support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Security Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vulnerability Assessment</h3>
                <p className="text-gray-600 mb-4">Identify security weaknesses in your systems and applications before they can be exploited.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Automated vulnerability scanning</li>
                  <li>• Manual security testing</li>
                  <li>• Risk prioritization</li>
                  <li>• Remediation guidance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Security</h3>
                <p className="text-gray-600 mb-4">Protect your network infrastructure with advanced firewalls, intrusion detection, and monitoring.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Firewall configuration</li>
                  <li>• Intrusion detection systems</li>
                  <li>• Network segmentation</li>
                  <li>• Traffic monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Endpoint Protection</h3>
                <p className="text-gray-600 mb-4">Secure all endpoints including desktops, laptops, and mobile devices with comprehensive protection.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Antivirus & antimalware</li>
                  <li>• Device encryption</li>
                  <li>• Access controls</li>
                  <li>• Remote management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Security</h3>
                <p className="text-gray-600 mb-4">Secure your cloud infrastructure and applications with specialized cloud security solutions.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Cloud access security</li>
                  <li>• Data encryption</li>
                  <li>• Identity management</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Training</h3>
                <p className="text-gray-600 mb-4">Educate your team on cybersecurity best practices and threat awareness.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Phishing simulation</li>
                  <li>• Security awareness training</li>
                  <li>• Incident response training</li>
                  <li>• Compliance training</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Management</h3>
                <p className="text-gray-600 mb-4">Ensure compliance with industry regulations and standards like GDPR, HIPAA, and SOX.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Compliance assessment</li>
                  <li>• Policy development</li>
                  <li>• Audit preparation</li>
                  <li>• Documentation management</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Threat Landscape Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Current Threat Landscape</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ransomware</h3>
                <p className="text-gray-600">Up 150% increase in ransomware attacks targeting businesses of all sizes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phishing</h3>
                <p className="text-gray-600">91% of cyber attacks start with a phishing email targeting employees.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Breaches</h3>
                <p className="text-gray-600">Average cost of a data breach is $4.45 million globally.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insider Threats</h3>
                <p className="text-gray-600">60% of security incidents involve insider threats or compromised credentials.</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Our Cybersecurity Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Risk by 90%</h3>
                <p className="text-gray-600">Our comprehensive security approach reduces your cyber risk by up to 90% through proactive protection.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Protection</h3>
                <p className="text-gray-600">Round-the-clock monitoring and response to ensure your systems are protected at all times.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Ensure compliance with industry regulations and standards with our expert guidance and support.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">Don't wait for a breach. Get comprehensive cybersecurity protection today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Security Assessment
              </a>
              <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}