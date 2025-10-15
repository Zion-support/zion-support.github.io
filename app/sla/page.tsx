import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, Shield, Headphones, CheckCircle, AlertCircle, Mail, Phone } from 'lucide-react';

const SlaPage: React.FC = () => {
  const slaMetrics = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Uptime Guarantee",
      value: "99.9%",
      description: "We guarantee 99.9% uptime for all our hosted services and platforms"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Response Time",
      value: "< 2 hours",
      description: "Initial response to support tickets within 2 hours during business hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Monitoring",
      value: "24/7",
      description: "Continuous security monitoring and threat detection for all systems"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Resolution Time",
      value: "< 24 hours",
      description: "Critical issues resolved within 24 hours, standard issues within 48 hours"
    }
  ];

  const supportTiers = [
    {
      name: "Critical Issues",
      description: "System down, security breach, data loss",
      responseTime: "1 hour",
      resolutionTime: "4 hours",
      availability: "24/7"
    },
    {
      name: "High Priority",
      description: "Major functionality issues, performance problems",
      responseTime: "2 hours",
      resolutionTime: "8 hours",
      availability: "Business hours"
    },
    {
      name: "Medium Priority",
      description: "Minor bugs, feature requests, general questions",
      responseTime: "4 hours",
      resolutionTime: "24 hours",
      availability: "Business hours"
    },
    {
      name: "Low Priority",
      description: "Documentation updates, non-urgent enhancements",
      responseTime: "24 hours",
      resolutionTime: "48 hours",
      availability: "Business hours"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Level Agreement - Zion Tech Group | SLA & Support Guarantees</title>
        <meta name="description" content="Zion Tech Group's Service Level Agreement outlines our commitment to uptime, response times, and support quality for all our AI and IT services." />
        <meta name="keywords" content="SLA, service level agreement, uptime guarantee, support, response time, service quality" />
        <meta property="og:title" content="Service Level Agreement - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to service quality and support excellence" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Service Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Agreement</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Our commitment to delivering exceptional service quality and support excellence for all our clients.
              </p>
              <div className="text-gray-400 text-lg">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* SLA Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Service Commitments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stand behind our services with measurable guarantees and transparent accountability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {slaMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{metric.title}</h3>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Support Priority Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Clear escalation paths and response times based on issue severity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {supportTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      index === 0 ? 'bg-red-400' : 
                      index === 1 ? 'bg-orange-400' : 
                      index === 2 ? 'bg-yellow-400' : 'bg-green-400'
                    }`}></div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Response Time:</span>
                      <span className="text-cyan-400 font-semibold">{tier.responseTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Resolution Time:</span>
                      <span className="text-cyan-400 font-semibold">{tier.resolutionTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Availability:</span>
                      <span className="text-cyan-400 font-semibold">{tier.availability}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Credits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Service Credits</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    If we fail to meet our SLA commitments, we provide service credits as compensation:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <span><strong className="text-white">Uptime below 99.9%:</strong> 5% credit for each 0.1% below target</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <span><strong className="text-white">Response time exceeded:</strong> 10% credit for each hour over SLA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <span><strong className="text-white">Resolution time exceeded:</strong> 15% credit for each day over SLA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <span><strong className="text-white">Maximum credit:</strong> 100% of monthly service fee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Our SLA?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact our support team for any questions about our service level commitments or to report an issue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  support@ziontechgroup.com
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SlaPage;
