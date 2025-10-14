import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FuturisticBackground from "../components/FuturisticBackground";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: null,
      services: [
        { name: 'AI Analytics Dashboard', price: '$2,500/month', description: 'Advanced AI-powered analytics and business intelligence platform', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'] },
        { name: 'AI Content Generation', price: '$1,800/month', description: 'Automated content creation using cutting-edge AI technology', features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'SEO Optimization'] },
        { name: 'AI Customer Support', price: '$1,200/month', description: 'Intelligent chatbot and customer service automation', features: ['24/7 Support', 'Natural Language Processing', 'Multi-language Support', 'Integration APIs'] },
        { name: 'AI Data Analytics', price: '$2,000/month', description: 'Machine learning-powered data analysis and insights', features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Automated Reporting'] }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: null,
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
      icon: null,
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] },
        { name: 'Cloud Management', price: '$2,200/month', description: 'Ongoing cloud infrastructure management and optimization', features: ['Resource Monitoring', 'Cost Optimization', 'Security Management', 'Backup & Recovery'] },
        { name: 'DevOps & CI/CD', price: '$2,500/month', description: 'Automated deployment and continuous integration pipelines', features: ['Automated Deployments', 'Version Control', 'Testing Automation', 'Performance Monitoring'] },
        { name: 'Cloud Security', price: '$1,800/month', description: 'Comprehensive cloud security and compliance solutions', features: ['Access Controls', 'Data Encryption', 'Compliance Monitoring', 'Threat Protection'] }
      ]
    },
    {
      title: 'IT Consulting',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: null,
      services: [
        { name: 'Digital Transformation', price: '$4,000/month', description: 'Complete digital transformation strategy and implementation', features: ['Strategy Development', 'Process Optimization', 'Technology Integration', 'Change Management'] },
        { name: 'System Integration', price: '$2,800/month', description: 'Seamless integration of existing and new systems', features: ['API Development', 'Data Synchronization', 'Legacy System Integration', 'Performance Optimization'] },
        { name: 'IT Strategy & Planning', price: '$1,500/month', description: 'Comprehensive IT strategy development and technology roadmap', features: ['Technology Assessment', 'Roadmap Planning', 'Budget Planning', 'Vendor Management'] },
        { name: 'Technical Support', price: '$1,000/month', description: 'Ongoing technical support and maintenance services', features: ['24/7 Support', 'Remote Assistance', 'System Maintenance', 'Performance Monitoring'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including analytics, cybersecurity, cloud infrastructure, and digital transformation solutions." />
        <meta name="keywords" content="AI services, IT consulting, cybersecurity, cloud infrastructure, digital transformation, business solutions" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI and IT services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation. 
            From cutting-edge AI technology to robust cybersecurity, we provide everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get ted</span>
              <div className="w-6 h-6" />
            </Link>
            <Link 
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Explore our comprehensive range of AI and IT services designed to meet your business needs.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-2 xl p-8 border border-white/20">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                    <div className="w-6 h-6" />
                  </div>
                  <h3 className="text-2 xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-white">
                          {service.name}
                        </h4>
                        <span className="text-cyan-400 font-bold">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the right services for your business needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;