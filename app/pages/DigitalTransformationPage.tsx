import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowPathIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  UserIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: ArrowPathIcon,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring'],
      pricing: 'Starting at $4,000/month',
      duration: '4-6 weeks'
    },
    {
      icon: UserGroupIcon,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with effective change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics'],
      pricing: 'Starting at $3,500/month',
      duration: '6-8 weeks'
    },
    {
      icon: ChartBarIcon,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'ROI Analysis'],
      pricing: 'Starting at $5,000/month',
      duration: '8-12 weeks'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights to drive better business decisions.',
      features: ['Data Collection', 'Analytics Platforms', 'Dashboard Development', 'Insight Generation'],
      pricing: 'Starting at $4,500/month',
      duration: '6-10 weeks'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to stay competitive in the digital age.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning'],
      pricing: 'Starting at $6,000/month',
      duration: '10-16 weeks'
    },
    {
      icon: CheckCircleIcon,
      title: 'Digital Maturity',
      description: 'Assess and improve your organization\'s digital maturity across all business functions.',
      features: ['Maturity Assessment', 'Gap Analysis', 'Improvement Plans', 'Progress Tracking'],
      pricing: 'Starting at $3,000/month',
      duration: '4-8 weeks'
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Customer Experience',
    'Competitive Advantage',
    'Data-Driven Decisions',
    'Future-Proof Technology'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We evaluate your current digital state and identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive digital transformation strategy tailored to your needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the transformation plan with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize your digital solutions for maximum value.'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Electronic health records, telemedicine, and AI-powered diagnostics',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Digital banking, fintech solutions, and automated trading',
      icon: '💼'
    },
    {
      name: 'Manufacturing',
      description: 'IoT integration, predictive maintenance, and smart factories',
      icon: '🏭'
    },
    {
      name: 'Retail',
      description: 'E-commerce platforms, inventory management, and customer analytics',
      icon: '🛒'
    },
    {
      name: 'Education',
      description: 'Online learning platforms, student management systems, and AI tutoring',
      icon: '🎓'
    },
    {
      name: 'Government',
      description: 'Digital services, citizen portals, and smart city initiatives',
      icon: '🏛️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and digital strategy development." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business for the digital age with our comprehensive digital transformation 
                services that drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Digital Transformation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end digital transformation solutions designed to modernize your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      Expert Team
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-purple-400 font-semibold">{service.pricing}</span>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Transformation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We Transform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our digital transformation solutions are tailored to meet the unique needs of various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Benefits of Digital Transformation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business and unlock new opportunities for growth
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our digital transformation services can modernize your business 
              and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;