'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  BarChart, 
  Calendar, 
  Target, 
  TrendingUp, 
  Award,
  Play,
  Download,
  Phone,
  Mail,
  ExternalLink,
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe
} from 'lucide-react';
import { getServiceById } from '../../data/servicesData';

// Lazy load components
const Navigation = lazy(() => import('../../components/Navigation'));
const Footer = lazy(() => import('../../components/Footer'));

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = memo(({ icon, title, description }) => (
  <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
    <div className="text-3xl mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const PricingCard: React.FC<{ 
  name: string; 
  price: number; 
  period: string; 
  features: string[]; 
  popular?: boolean; 
  currency?: string;
}> = memo(({ name, price, period, features, popular = false, currency = 'USD' }) => (
  <div className={`cyber-card p-8 relative ${popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold px-4 py-2 rounded-full">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="text-4xl font-bold text-cyan-400 mb-2">
        ${price}<span className="text-lg text-gray-400">/{period}</span>
      </div>
    </div>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
      popular 
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
        : 'bg-slate-700 text-white hover:bg-slate-600'
    }`}>
      Get Started
    </button>
  </div>
));

PricingCard.displayName = 'PricingCard';

const AIProjectManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const service = getServiceById('ai-project-manager');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Risk Prediction',
      description: 'Advanced machine learning algorithms analyze project data to predict potential risks and suggest mitigation strategies before they become problems.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Task Assignment',
      description: 'Intelligent task distribution based on team member skills, workload, and availability, ensuring optimal resource utilization.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards and reports that provide instant insights into project progress, team performance, and budget status.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Resource Optimization',
      description: 'AI-driven recommendations for resource allocation, helping you maximize efficiency while minimizing costs and delays.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Budget Forecasting',
      description: 'Predictive analytics that forecast project costs and identify potential budget overruns before they happen.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Performance Insights',
      description: 'Detailed analytics on individual and team performance, helping identify strengths and areas for improvement.'
    }
  ];

  const benefits = [
    'Reduce project delivery time by 40%',
    'Improve team productivity by 35%',
    'Cut project costs by 25%',
    'Increase project success rate to 95%',
    'Automate 80% of routine tasks',
    'Eliminate manual reporting overhead'
  ];

  const useCases = [
    {
      title: 'Software Development Teams',
      description: 'Streamline agile development processes with AI-powered sprint planning and resource allocation.',
      icon: '💻'
    },
    {
      title: 'Marketing Agencies',
      description: 'Manage multiple client campaigns efficiently with automated task distribution and progress tracking.',
      icon: '📢'
    },
    {
      title: 'Construction Companies',
      description: 'Optimize project timelines and resource allocation for complex construction projects.',
      icon: '🏗️'
    },
    {
      title: 'Consulting Firms',
      description: 'Track billable hours, manage client deliverables, and optimize consultant utilization.',
      icon: '💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            {service.name}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            {service.description}
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            {service.detailedDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={service.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              View Live Demo
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">40%</div>
              <div className="text-sm text-gray-300">Faster Delivery</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">25%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">80%</div>
              <div className="text-sm text-gray-300">Task Automation</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI Project Manager Pro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.pricing.tiers?.map((tier, index) => (
              <PricingCard
                key={index}
                name={tier.name}
                price={tier.price}
                period={service.pricing.period}
                features={tier.features}
                popular={index === 1}
                currency={service.pricing.currency}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={service.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-cyan-400" />
                  Integrations
                </h3>
                <ul className="space-y-2">
                  {service.technicalSpecs.integrations.map((integration, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Cloud className="w-6 h-6 mr-2 text-cyan-400" />
                  Deployment
                </h3>
                <ul className="space-y-2">
                  {service.technicalSpecs.deployment.map((deployment, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                      {deployment}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-cyan-400" />
                  Scalability
                </h3>
                <p className="text-gray-300 text-sm">{service.technicalSpecs.scalability}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-cyan-400" />
                  Security
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-green-400" />
                    Enterprise-grade security
                  </li>
                  <li className="text-gray-300 text-sm flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-green-400" />
                    GDPR compliant
                  </li>
                  <li className="text-gray-300 text-sm flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    SOC 2 certified
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have already revolutionized their project management with AI. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={service.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AIProjectManagerPage;