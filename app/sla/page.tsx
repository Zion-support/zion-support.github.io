import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Clock, CheckCircle, AlertTriangle, Mail, Phone, Calendar, Zap } from 'lucide-react';

const SlaPage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const serviceLevels = [
    {
      service: "Micro SAAS Solutions",
      uptime: "99.9%",
      responseTime: "< 2 seconds",
      support: "24/7 Email Support",
      maintenance: "Scheduled maintenance windows",
      icon: <Zap className="w-6 h-6" />
    },
    {
      service: "AI Services",
      uptime: "99.5%",
      responseTime: "< 5 seconds",
      support: "Business Hours Support",
      maintenance: "Planned maintenance with notice",
      icon: <Shield className="w-6 h-6" />
    },
    {
      service: "IT Services",
      uptime: "99.9%",
      responseTime: "< 1 second",
      support: "24/7 Phone & Email",
      maintenance: "Emergency maintenance only",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const responseTimes = [
    {
      priority: "Critical",
      description: "Service completely down or major functionality unavailable",
      responseTime: "1 hour",
      resolutionTime: "4 hours",
      availability: "24/7"
    },
    {
      priority: "High",
      description: "Significant functionality impacted or degraded performance",
      responseTime: "4 hours",
      resolutionTime: "24 hours",
      availability: "Business Hours"
    },
    {
      priority: "Medium",
      description: "Minor functionality issues or non-critical problems",
      responseTime: "24 hours",
      resolutionTime: "72 hours",
      availability: "Business Hours"
    },
    {
      priority: "Low",
      description: "General questions or feature requests",
      responseTime: "48 hours",
      resolutionTime: "1 week",
      availability: "Business Hours"
    }
  ];

  const guarantees = [
    {
      title: "Uptime Guarantee",
      description: "We guarantee 99.9% uptime for our core services",
      compensation: "Service credits equal to 5% of monthly fee for each 0.1% below 99.9%"
    },
    {
      title: "Response Time Guarantee",
      description: "We guarantee response times based on issue priority",
      compensation: "Service credits equal to 10% of monthly fee for each violation"
    },
    {
      title: "Resolution Time Guarantee",
      description: "We guarantee resolution times based on issue complexity",
      compensation: "Service credits equal to 15% of monthly fee for each violation"
    },
    {
      title: "Data Security Guarantee",
      description: "We guarantee the security and integrity of your data",
      compensation: "Full data recovery and security audit at our expense"
    }
  ];

  const exclusions = [
    "Scheduled maintenance windows (with 48 hours notice)",
    "Force majeure events (natural disasters, war, etc.)",
    "Third-party service outages beyond our control",
    "Client-side issues or misconfigurations",
    "Internet connectivity issues on client side",
    "Client-initiated changes or updates"
  ];

  return (
    <>
      <Helmet>
        <title>SLA - Service Level Agreement | Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Service Level Agreement (SLA) outlines our commitments to uptime, response times, and service quality for all our AI and IT services." />
        <meta name="keywords" content="SLA, service level agreement, uptime guarantee, response time, service credits" />
        <meta property="og:title" content="SLA - Service Level Agreement - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to service quality and performance" />
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
                Our commitment to delivering reliable, high-quality services with guaranteed performance levels.
              </p>
              <div className="flex items-center justify-center text-gray-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Levels */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Service Level Commitments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We guarantee specific performance levels for each of our service categories
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {serviceLevels.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    {service.service}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{service.uptime}</div>
                      <div className="text-gray-300 text-sm">Uptime Guarantee</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xl font-semibold text-white mb-1">{service.responseTime}</div>
                      <div className="text-gray-300 text-sm">Response Time</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-semibold text-white mb-1">{service.support}</div>
                      <div className="text-gray-300 text-sm">Support Level</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-300">{service.maintenance}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Response Time Commitments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We guarantee specific response and resolution times based on issue priority
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <thead className="bg-white/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Priority</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Description</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Response Time</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Resolution Time</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseTimes.map((item, index) => (
                      <tr key={index} className="border-t border-white/20">
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            item.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {item.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-300 text-sm">{item.description}</td>
                        <td className="px-6 py-4 text-white font-semibold">{item.responseTime}</td>
                        <td className="px-6 py-4 text-white font-semibold">{item.resolutionTime}</td>
                        <td className="px-6 py-4 text-gray-300">{item.availability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Service Guarantees */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Service Guarantees</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stand behind our services with specific guarantees and compensation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{guarantee.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{guarantee.description}</p>
                  <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg text-sm">
                    <strong>Compensation:</strong> {guarantee.compensation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">SLA Exclusions</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The following situations are excluded from our SLA commitments:
                </p>
                <ul className="space-y-3">
                  {exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span>{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring and Reporting */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Monitoring and Reporting</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 24/7 system monitoring and alerting</li>
                      <li>• Automated performance tracking</li>
                      <li>• Proactive issue detection</li>
                      <li>• Real-time status dashboards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Monthly Reports</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Detailed uptime statistics</li>
                      <li>• Performance metrics and trends</li>
                      <li>• Incident reports and resolutions</li>
                      <li>• SLA compliance summary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Our SLA?</h2>
              <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Contact our team if you have any questions about our Service Level Agreement or need clarification on any terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
              </div>
              <div className="mt-4 text-white/90">
                <p>Zion Tech Group</p>
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SlaPage;