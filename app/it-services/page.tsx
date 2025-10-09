import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Cloud, Shield, Settings, Database, Network, Headphones, BarChart, Code, Smartphone, Globe, Lock, Zap } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions including migration, optimization, and 24/7 monitoring.',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Cloud Migration', 'Infrastructure Optimization', '24/7 Monitoring', 'Cost Optimization'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Compliance Management'],
      benefits: ['Prevent security breaches', 'Ensure compliance', 'Protect sensitive data'],
      price: 'Starting at $3,200/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Deployment Automation', 'Performance Monitoring'],
      benefits: ['Faster deployments', 'Reduced errors', 'Improved efficiency'],
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Database Administration',
      description: 'Expert database management, optimization, and maintenance for optimal performance.',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['Optimize database performance', 'Ensure data integrity', 'Reduce downtime'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Network Infrastructure',
      description: 'Robust network design, implementation, and management for reliable connectivity.',
      icon: Network,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
      benefits: ['Improve network reliability', 'Enhance performance', 'Reduce downtime'],
      price: 'Starting at $2,200/month'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with rapid response and expert troubleshooting.',
      icon: Headphones,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training'],
      benefits: ['Minimize downtime', 'Improve productivity', 'Reduce IT costs'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and reporting.',
      icon: BarChart,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reporting'],
      benefits: ['Make data-driven decisions', 'Identify trends', 'Improve business performance'],
      price: 'Starting at $2,800/month'
    },
    {
      title: 'API Development & Integration',
      description: 'Seamless integration solutions and custom API development for enhanced connectivity.',
      icon: Code,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      features: ['API Development', 'Third-party Integration', 'Data Synchronization', 'API Management'],
      benefits: ['Improve system connectivity', 'Streamline workflows', 'Enhance efficiency'],
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design.',
      icon: Smartphone,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Deployment'],
      benefits: ['Reach mobile users', 'Improve user experience', 'Increase engagement'],
      price: 'Starting at $5,000/project'
    },
    {
      title: 'Web Application Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: Globe,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'Security Implementation'],
      benefits: ['Custom solutions', 'Scalable architecture', 'Modern user experience'],
      price: 'Starting at $8,000/project'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and consulting to align technology with business goals.',
      icon: Lock,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Vendor Management'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Plan for growth'],
      price: 'Starting at $300/hour'
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive backup solutions and disaster recovery planning for business continuity.',
      icon: Zap,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Protection'],
      benefits: ['Ensure business continuity', 'Protect critical data', 'Minimize downtime'],
      price: 'Starting at $1,200/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database administration, and more." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database administration, network management, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Comprehensive IT solutions to power your business
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-4xl mx-auto">
                From cloud infrastructure to cybersecurity, we provide end-to-end IT services 
                that keep your business running smoothly and securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  to="/case-studies"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Service Categories
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions across all IT domains
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-200">
                  <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free IT assessment and discover how we can optimize your technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get Free Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/enterprise"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;