import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Settings, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Globe
} from 'lucide-react';

const AutomationSolutionsUltimateShowcase: React.FC = () => {
  const solutions = [
    {
      title: 'Autonomous Business Operations',
      description: 'Complete end-to-end business process automation with 99.9% accuracy and zero human intervention',
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      metrics: '99.9% Accuracy',
      roi: '2,500% ROI',
      color: 'from-blue-500 to-cyan-500',
      category: 'Business Process'
    },
    {
      title: 'AI-Powered Workflow Automation',
      description: 'Intelligent workflow systems that adapt and optimize themselves based on real-time data',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      metrics: '10,000x Faster',
      roi: '3,000% ROI',
      color: 'from-purple-500 to-pink-500',
      category: 'Workflow'
    },
    {
      title: 'Predictive Maintenance Systems',
      description: 'AI-driven maintenance that predicts failures before they happen, reducing downtime by 95%',
      icon: <Target className="w-8 h-8 text-green-500" />,
      metrics: '95% Downtime Reduction',
      roi: '4,000% ROI',
      color: 'from-green-500 to-emerald-500',
      category: 'Maintenance'
    },
    {
      title: 'Customer Service Automation',
      description: 'Fully automated customer service with human-level understanding and problem-solving',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      metrics: '24/7 Availability',
      roi: '2,800% ROI',
      color: 'from-orange-500 to-red-500',
      category: 'Customer Service'
    },
    {
      title: 'Financial Process Automation',
      description: 'Complete automation of financial processes including accounting, reporting, and compliance',
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
      metrics: '100% Compliance',
      roi: '3,500% ROI',
      color: 'from-indigo-500 to-purple-500',
      category: 'Finance'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-powered supply chain management with real-time optimization and predictive analytics',
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      metrics: '50% Cost Reduction',
      roi: '5,000% ROI',
      color: 'from-yellow-500 to-orange-500',
      category: 'Supply Chain'
    }
  ];

  const industries = [
    'Manufacturing & Production',
    'Healthcare & Medical',
    'Financial Services',
    'Retail & E-commerce',
    'Logistics & Transportation',
    'Energy & Utilities',
    'Government & Public Sector',
    'Education & Training'
  ];

  const benefits = [
    {
      title: 'Massive ROI',
      description: 'Average 2,500-5,000% return on investment within 12 months',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Zero Errors',
      description: '99.9% accuracy rate with automated quality control and validation',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: '24/7 Operations',
      description: 'Continuous operation without breaks, holidays, or downtime',
      icon: <Clock className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Scalable Growth',
      description: 'Handle unlimited scale without proportional cost increases',
      icon: <Cpu className="w-6 h-6 text-orange-400" />
    }
  ];

  const caseStudies = [
    {
      company: 'Global Manufacturing Corp',
      result: '95% reduction in production errors',
      savings: '$50M annually',
      timeframe: '6 months'
    },
    {
      company: 'Financial Services Inc',
      result: '99.9% compliance accuracy',
      savings: '$30M in penalties avoided',
      timeframe: '3 months'
    },
    {
      company: 'Healthcare Network',
      result: '80% faster patient processing',
      savings: '$25M in operational costs',
      timeframe: '4 months'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold mb-6">
            <Star className="w-5 h-5" />
            AUTOMATION REVOLUTION
            <Star className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Automation Solutions Ultimate Showcase
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary automation solutions that transform businesses with 2,500-5,000% ROI 
            and 99.9% accuracy across all industries
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} mb-6`}>
                {solution.icon}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-green-400">{solution.category}</div>
                <div className="text-lg font-bold text-yellow-400">{solution.roi}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-4">{solution.description}</p>
              <div className="text-lg font-bold text-green-400">{solution.metrics}</div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Industries We Transform
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-lg">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 rounded-full bg-white/10 mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Proven Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-bold text-white mb-2">{study.company}</h4>
                <p className="text-green-400 font-semibold mb-2">{study.result}</p>
                <p className="text-yellow-400 font-bold text-lg mb-2">{study.savings}</p>
                <p className="text-gray-300">Achieved in {study.timeframe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Transform Your Business Today
            </h3>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of companies achieving 2,500-5,000% ROI with our automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions"
                className="group bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutionsUltimateShowcase;