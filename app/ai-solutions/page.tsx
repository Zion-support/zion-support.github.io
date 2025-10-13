import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Automated Reporting'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-driven cybersecurity and threat detection systems.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud AI Services',
      description: 'Leverage cloud-based AI services for scalable and cost-effective solutions.',
      features: ['Scalable Infrastructure', 'Cost Optimization', 'Global Deployment', 'Auto-scaling'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with our comprehensive business intelligence platform.',
      features: ['Data Visualization', 'KPI Tracking', 'Performance Metrics', 'Strategic Insights'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and processes with intelligent AI solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Efficiency Gains'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions. Analytics, security, automation, and business intelligence powered by artificial intelligence." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, analytics, automation, business intelligence" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to transform your business and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our AI Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how our AI solutions can transform your business and drive innovation.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;
