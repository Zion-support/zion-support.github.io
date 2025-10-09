'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Phone, 
  Mail,
  Calendar,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

const SLAPage: React.FC = () => {
  const serviceLevels = [
    {
      service: 'AI Services',
      uptime: '99.9%',
      responseTime: '2 hours',
      resolutionTime: '24 hours',
      availability: '24/7',
      description: 'AI-powered solutions and machine learning services'
    },
    {
      service: 'IT Infrastructure',
      uptime: '99.95%',
      responseTime: '1 hour',
      resolutionTime: '4 hours',
      availability: '24/7',
      description: 'Cloud infrastructure, servers, and network services'
    },
    {
      service: 'Cybersecurity',
      uptime: '99.99%',
      responseTime: '30 minutes',
      resolutionTime: '2 hours',
      availability: '24/7',
      description: 'Security monitoring, threat detection, and incident response'
    },
    {
      service: 'Support Services',
      uptime: '99.5%',
      responseTime: '4 hours',
      resolutionTime: '48 hours',
      availability: 'Business Hours',
      description: 'Technical support and customer service'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'System Uptime',
      target: '99.9%',
      measurement: 'Monthly',
      description: 'Percentage of time services are available'
    },
    {
      metric: 'Response Time',
      target: '< 2 hours',
      measurement: 'Per Incident',
      description: 'Time to acknowledge and begin working on issues'
    },
    {
      metric: 'Resolution Time',
      target: '< 24 hours',
      measurement: 'Per Incident',
      description: 'Time to resolve critical issues'
    },
    {
      metric: 'Data Backup',
      target: '99.99%',
      measurement: 'Daily',
      description: 'Success rate of automated data backups'
    },
    {
      metric: 'Security Incidents',
      target: '0',
      measurement: 'Monthly',
      description: 'Number of security breaches or data leaks'
    }
  ];

  const serviceCredits = [
    {
      uptime: '99.0% - 99.9%',
      credit: '5%',
      description: 'Minor service degradation'
    },
    {
      uptime: '95.0% - 99.0%',
      credit: '10%',
      description: 'Significant service impact'
    },
    {
      uptime: '90.0% - 95.0%',
      credit: '25%',
      description: 'Major service disruption'
    },
    {
      uptime: 'Below 90.0%',
      credit: '50%',
      description: 'Critical service failure'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service Level Agreement
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Our commitment to delivering exceptional service quality and reliability. 
            This SLA outlines our performance standards, availability guarantees, and service credits.
          </p>
          <div className="flex items-center justify-center text-cyan-400">
            <Calendar className="w-6 h-6 mr-2" />
            <span>Last Updated: January 2025</span>
          </div>
        </section>

        {/* Service Level Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Shield className="w-8 h-8 mr-3 text-cyan-400" />
            Service Level Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceLevels.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">{service.service}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Uptime:</span>
                    <span className="text-green-400 font-bold">{service.uptime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Response:</span>
                    <span className="text-blue-400 font-bold">{service.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Resolution:</span>
                    <span className="text-purple-400 font-bold">{service.resolutionTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Availability:</span>
                    <span className="text-yellow-400 font-bold">{service.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <TrendingUp className="w-8 h-8 mr-3 text-green-400" />
            Performance Metrics
          </h2>
          <div className="cyber-card hologram-card p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-white py-4 px-2">Metric</th>
                    <th className="text-left text-white py-4 px-2">Target</th>
                    <th className="text-left text-white py-4 px-2">Measurement</th>
                    <th className="text-left text-white py-4 px-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceMetrics.map((metric, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="text-cyan-400 py-4 px-2 font-medium">{metric.metric}</td>
                      <td className="text-green-400 py-4 px-2 font-bold">{metric.target}</td>
                      <td className="text-blue-400 py-4 px-2">{metric.measurement}</td>
                      <td className="text-gray-300 py-4 px-2">{metric.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Credits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-yellow-400" />
            Service Credits
          </h2>
          <div className="cyber-card hologram-card p-8">
            <p className="text-gray-300 mb-6 text-center">
              If we fail to meet our service level commitments, you may be eligible for service credits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCredits.map((credit, index) => (
                <div key={index} className="text-center p-4 border border-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-red-400 mb-2">{credit.credit}</div>
                  <div className="text-sm text-gray-400 mb-2">{credit.uptime}</div>
                  <div className="text-xs text-gray-500">{credit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Users className="w-8 h-8 mr-3 text-blue-400" />
            Support & Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone Support</h3>
              <p className="text-gray-300 mb-4">24/7 emergency support</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
              <p className="text-gray-300 mb-4">Technical support and inquiries</p>
              <a href="mailto:support@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 font-medium">
                support@ziontechgroup.com
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Business Hours</h3>
              <p className="text-gray-300 mb-4">Monday - Friday</p>
              <p className="text-green-400 font-medium">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Terms & Conditions
          </h2>
          <div className="cyber-card hologram-card p-8">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">1. Service Availability</h3>
                <p>
                  We commit to maintaining the specified uptime percentages for our services. 
                  Planned maintenance windows are excluded from uptime calculations and will be 
                  scheduled during low-traffic periods with 48-hour advance notice.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">2. Incident Response</h3>
                <p>
                  All incidents are classified by severity level. Critical issues receive immediate 
                  attention, while lower-priority issues are addressed according to our response time 
                  commitments. Response times are measured from the time an incident is reported.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">3. Service Credits</h3>
                <p>
                  Service credits are calculated based on the monthly service fee and are applied 
                  to the next billing cycle. Credits must be requested within 30 days of the 
                  incident and are subject to verification of the service level failure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">4. Exclusions</h3>
                <p>
                  This SLA does not apply to issues caused by client-side problems, third-party 
                  services, force majeure events, or client-initiated changes. Network issues 
                  outside our control are also excluded from SLA calculations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">5. Monitoring & Reporting</h3>
                <p>
                  We provide monthly SLA reports detailing our performance against these commitments. 
                  Clients can access real-time status information through our status page and 
                  monitoring dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Questions About Our SLA?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team is here to help clarify any aspects of our Service Level Agreement. 
            Contact us for more information or to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button"
            >
              Contact Us
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Call Now
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SLAPage;