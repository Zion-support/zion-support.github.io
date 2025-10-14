import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  ArrowPathIcon,
  UserGroupIcon,
  TargetIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CogIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: ArrowPathIcon,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring'],
      pricing: 'Starting at $2,200/month',
      category: 'Automation'
    },
    {
      icon: UserGroupIcon,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with effective change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics'],
      pricing: 'Starting at $1,800/month',
      category: 'Management'
    },
    {
      icon: TargetIcon,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'ROI Analysis'],
      pricing: 'Starting at $2,500/month',
      category: 'Strategy'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights to drive better business decisions.',
      features: ['Data Collection', 'Analytics Platforms', 'Dashboard Development', 'Insight Generation'],
      pricing: 'Starting at $1,600/month',
      category: 'Analytics'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to stay competitive in the digital age.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning'],
      pricing: 'Starting at $2,800/month',
      category: 'Innovation'
    },
    {
      icon: CheckCircleIcon,
      title: 'Digital Maturity',
      description: 'Assess and improve your organization\'s digital maturity across all business functions.',
      features: ['Maturity Assessment', 'Gap Analysis', 'Improvement Plans', 'Progress Tracking'],
      pricing: 'Starting at $2,000/month',
      category: 'Assessment'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate processes to reduce manual work by up to 70%',
      icon: ClockIcon
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through process optimization and automation',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for improved business decisions',
      icon: ChartBarIcon
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge digital technologies',
      icon: GlobeAltIcon
    }
  ];

  const transformationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Evaluate current state and create transformation roadmap',
      icon: TargetIcon
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Design comprehensive digital strategy aligned with business goals',
      icon: LightBulbIcon
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Execute transformation initiatives with expert guidance',
      icon: CogIcon
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Monitor, measure, and continuously improve digital processes',
      icon: CheckCircleIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Modernize Your Business</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services including process automation, change management, and digital strategy. Starting from $1,600/month." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, business modernization" />
        <meta property="og:title" content="Digital Transformation - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive digital transformation services including process automation, change management, and digital strategy." />
        <meta property="og:url" content="https://ziontechgroup.com/digital-transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business for the digital age with our comprehensive digital transformation services. 
            From process automation to change management, we help you modernize and compete effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Transformation Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Digital Transformation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business to thrive in the digital economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transformation Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transformation Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes consultation & implementation</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/contact" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Quote
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>
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
            Let's discuss how digital transformation can modernize your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformationPage;