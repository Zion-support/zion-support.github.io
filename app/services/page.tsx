import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  ChartBarIcon, 
  GlobeAltIcon 
} from "@heroicons/react/24/outline";

const services = [
  {
    title: 'Cybersecurity',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    icon: ShieldCheckIcon,
    services: [
      { name: 'Security Assessment', price: '$1,200/month', description: 'Comprehensive security evaluation and vulnerability assessment', features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] },
      { name: 'Managed Security Services', price: '$2,000/month', description: '24/7 security monitoring and incident response', features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates'] },
      { name: 'Identity & Access Management', price: '$1,500/month', description: 'Secure user authentication and authorization systems', features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control'] },
      { name: 'Data Protection', price: '$1,800/month', description: 'Comprehensive data encryption and backup solutions', features: ['Data Encryption', 'Backup Solutions', 'Data Recovery', 'Privacy Compliance'] }
    ]
  },
  {
    title: 'Cloud Infrastructure',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    icon: CloudIcon,
    services: [
      { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] },
      { name: 'Cloud Architecture', price: '$2,500/month', description: 'Scalable and secure cloud infrastructure design', features: ['Architecture Design', 'Scalability Planning', 'Security Implementation', 'Cost Optimization'] },
      { name: 'DevOps & CI/CD', price: '$2,000/month', description: 'Automated deployment and continuous integration pipelines', features: ['CI/CD Setup', 'Automated Testing', 'Deployment Automation', 'Monitoring Setup'] },
      { name: 'Cloud Management', price: '$1,500/month', description: 'Ongoing cloud infrastructure management and optimization', features: ['24/7 Monitoring', 'Performance Tuning', 'Cost Management', 'Security Updates'] }
    ]
  },
  {
    title: 'Digital Transformation',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    icon: ChartBarIcon,
    services: [
      { name: 'Digital Strategy', price: '$2,500/month', description: 'Comprehensive digital transformation strategy and planning', features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Planning'] },
      { name: 'Process Automation', price: '$1,800/month', description: 'Business process automation and workflow optimization', features: ['Process Analysis', 'Automation Design', 'Workflow Implementation', 'Performance Monitoring'] },
      { name: 'Data Analytics', price: '$2,200/month', description: 'Advanced analytics and business intelligence solutions', features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Development', 'Insight Generation'] },
      { name: 'Mobile Solutions', price: '$1,600/month', description: 'Custom mobile applications and responsive web solutions', features: ['Mobile App Development', 'Responsive Design', 'Cross-Platform Solutions', 'Performance Optimization'] }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    icon: GlobeAltIcon,
    services: [
      { name: 'Custom SaaS Development', price: '$3,500/month', description: 'Tailored software-as-a-service solutions for specific business needs', features: ['Custom Development', 'API Integration', 'User Management', 'Subscription Billing'] },
      { name: 'SaaS Platform Management', price: '$2,000/month', description: 'Ongoing management and maintenance of SaaS platforms', features: ['Platform Maintenance', 'Feature Updates', 'Performance Monitoring', 'User Support'] },
      { name: 'API Development', price: '$1,500/month', description: 'RESTful and GraphQL API development and management', features: ['API Design', 'Documentation', 'Rate Limiting', 'Analytics'] },
      { name: 'Integration Services', price: '$1,200/month', description: 'Third-party integrations and system connectivity', features: ['System Integration', 'Data Synchronization', 'API Connections', 'Error Handling'] }
    ]
  },
  {
    title: '5G Solutions',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    icon: GlobeAltIcon,
    services: [
      { name: '5G Network Planning', price: '$4,000/month', description: 'Comprehensive 5G network design and implementation planning', features: ['Network Design', 'Coverage Planning', 'Capacity Planning', 'Implementation Strategy'] },
      { name: 'IoT Solutions', price: '$2,500/month', description: 'Internet of Things solutions leveraging 5G connectivity', features: ['IoT Architecture', 'Device Management', 'Data Collection', 'Real-time Analytics'] },
      { name: 'Edge Computing', price: '$3,000/month', description: 'Edge computing solutions for ultra-low latency applications', features: ['Edge Infrastructure', 'Data Processing', 'Latency Optimization', 'Scalability'] },
      { name: '5G Applications', price: '$2,200/month', description: 'Custom applications designed for 5G networks', features: ['App Development', '5G Optimization', 'Performance Tuning', 'User Experience'] }
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cybersecurity, cloud infrastructure, digital transformation, and 5G solutions." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud computing, digital transformation, 5G solutions, micro SaaS" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Get Started Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid gap-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                <h2 className={`text-3xl font-bold ${category.color}`}>
                  {category.title}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <div className={`text-2xl font-bold ${category.color} mb-3`}>
                      {service.price}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the right services for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ServicesPage;
