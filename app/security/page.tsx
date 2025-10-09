import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security solutions for your business
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <measure.icon className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">{measure.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{measure.description}</p>
                <ul className="space-y-3">
                  {measure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Third-party verified security and compliance standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Valid until: {cert.validUntil}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Policies
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive security documentation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityPolicies.map((policy, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{policy.title}</h3>
                  </div>
                  <span className="text-xs text-gray-500">Updated: {policy.lastUpdated}</span>
                </div>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  View Policy →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Incident Response
            </h2>
            <p className="text-xl text-gray-600">
              How we handle security incidents and data breaches
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Immediate Response</h3>
                  <p className="text-gray-600">
                    Upon detection of a security incident, our team immediately activates our incident response plan 
                    to contain the threat and assess the impact.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Investigation & Analysis</h3>
                  <p className="text-gray-600">
                    We conduct a thorough investigation to understand the scope and impact of the incident, 
                    working with security experts and forensic specialists as needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Notification & Communication</h3>
                  <p className="text-gray-600">
                    We notify affected users and relevant authorities within 72 hours of discovering a data breach, 
                    as required by applicable laws and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Security Issue */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Report a Security Issue
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            If you discover a security vulnerability, please report it to us immediately
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:security@ziontechgroup.com"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              security@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>We appreciate responsible disclosure and will respond within 24 hours</p>
          </div>
        </div>
      </section></div>
  );
};

export default SecurityPage;
=======
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SecurityPage;
>>>>>>> origin/main
