import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Bot,
  Zap,
  Settings,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  BookOpen,
  MessageSquare,
  Workflow,
  Target,
  Cpu,
  Database,
  Network,
  Globe
} from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns from your business processes and continuously improves efficiency.'
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic optimization of business operations based on real-time data and market conditions.'
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails for all operations.'
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Automated inventory management, demand forecasting, and supplier coordination.',
      icon: Workflow
    },
    {
      title: 'Customer Service',
      description: 'Intelligent chatbots, ticket routing, and automated customer support workflows.',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, expense management, and financial reporting.',
      icon: BarChart3
    },
    {
      title: 'HR & Recruitment',
      description: 'Automated candidate screening, onboarding processes, and performance management.',
      icon: Users
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve process efficiency by 60%',
    'Eliminate manual errors and delays',
    '24/7 automated operations',
    'Scalable infrastructure for growth',
    'Real-time monitoring and analytics'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Logistics',
    'Technology',
    'Energy',
    'Education'
  ];

  return (
    <>
      <SEO
        title="Autonomous Business Operations Platform | Zion Tech Group"
        description="Transform your business with our AI-powered autonomous operations platform. Automate workflows, optimize processes, and drive efficiency across all operations."
        keywords="autonomous business operations, AI automation, business process optimization, workflow automation, enterprise operations"
        canonicalUrl="https://ziontechgroup.com/autonomous-business-operations-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                Autonomous Operations Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Operations</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transform your business with AI-powered autonomous operations that work 24/7, 
                continuously optimize processes, and drive unprecedented efficiency across all operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact?service=autonomous-operations"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/autonomous-business-platform"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  Learn More
                  <Play className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Automation at Scale
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our platform combines advanced AI, machine learning, and process automation 
                to create truly autonomous business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Every Business Function
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From supply chain to customer service, our autonomous platform 
                revolutionizes how businesses operate and deliver value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="bg-blue-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience tangible improvements in efficiency, cost reduction, and operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Agnostic Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our autonomous operations platform adapts to any industry, 
                providing tailored solutions for your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the future of business operations with our autonomous platform. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?service=autonomous-operations"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                View Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
