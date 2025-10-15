import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  CpuChipIcon,
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  EyeIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: ChartBarIcon },
        { metric: 'Cart Abandonment', value: '-30%', icon: ChartBarIcon },
        { metric: 'Customer Satisfaction', value: '+60%', icon: UserGroupIcon },
        { metric: 'Implementation Time', value: '3 months', icon: ClockIcon }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and machine learning for automated quality inspection',
      results: [
        { metric: 'Quality Defects', value: '-75%', icon: ChartBarIcon },
        { metric: 'Processing Speed', value: '+200%', icon: ChartBarIcon },
        { metric: 'Cost Savings', value: '$2.5M/year', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '4 months', icon: ClockIcon }
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically reducing defects while increasing throughput.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive data analytics platform with predictive modeling',
      results: [
        { metric: 'Treatment Accuracy', value: '+40%', icon: ChartBarIcon },
        { metric: 'Patient Outcomes', value: '+35%', icon: UserGroupIcon },
        { metric: 'Cost Reduction', value: '$1.8M/year', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '6 months', icon: ClockIcon }
      ],
      description: 'MediCare Systems now leverages our advanced analytics platform to provide better patient care through data-driven insights and predictive modeling.'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and innovation',
      solution: 'Complete cloud migration with modern microservices architecture',
      results: [
        { metric: 'System Performance', value: '+300%', icon: ChartBarIcon },
        { metric: 'Scalability', value: '10x', icon: ChartBarIcon },
        { metric: 'Operational Costs', value: '-40%', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '8 months', icon: ClockIcon }
      ],
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.'
    }
  ];

  const industries = [
    {
      name: 'E-commerce',
      count: 15,
      icon: BuildingOfficeIcon,
      description: 'AI-powered personalization and optimization'
    },
    {
      name: 'Manufacturing',
      count: 12,
      icon: CpuChipIcon,
      description: 'Process automation and quality control'
    },
    {
      name: 'Healthcare',
      count: 8,
      icon: UserGroupIcon,
      description: 'Data analytics and predictive modeling'
    },
    {
      name: 'Financial Services',
      count: 10,
      icon: ShieldCheckIcon,
      description: 'Cloud migration and security solutions'
    }
  ];

  const benefits = [
    {
      title: 'Proven Results',
      description: 'Our case studies demonstrate measurable improvements in key business metrics.',
      icon: ChartBarIcon
    },
    {
      title: 'Industry Expertise',
      description: 'We have experience across multiple industries and understand unique challenges.',
      icon: BuildingOfficeIcon
    },
    {
      title: 'Scalable Solutions',
      description: 'Our solutions are designed to grow with your business and adapt to changing needs.',
      icon: RocketLaunchIcon
    },
    {
      title: 'ROI Focused',
      description: 'Every project is designed to deliver measurable return on investment.',
      icon: CurrencyDollarIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI, IT solutions, and technology consulting." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation, ROI" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions. 
              Real results from real clients across various industries.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real impact on business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.client}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <result.icon className="w-6 h-6 text-purple-400 mr-2" />
                          <span className="text-2xl font-bold text-white">{result.value}</span>
                        </div>
                        <div className="text-gray-400 text-sm">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have experience across multiple industries and understand unique challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">{industry.count} projects</span>
                    <Link to="/contact" className="text-purple-400 hover:text-purple-300 flex items-center">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions Work</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our approach combines technical expertise with business understanding
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 gradient-text">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the growing list of successful businesses that have transformed with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Start Your Project
                <RocketLaunchIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Our Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;