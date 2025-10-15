import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
  Target,
  Rocket,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  TrendingUp,
  Database,
  Network,
  Code,
  Settings,
  Wifi
} from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaaSServices = [
    {
      title: 'AI Accounting Assistant',
      description: 'Automated bookkeeping and financial analysis powered by artificial intelligence.',
      features: [
        'Automated invoice processing',
        'Real-time expense tracking',
        'Tax preparation and filing',
        'Financial report generation',
        'Bank reconciliation',
        'Multi-currency support'
      ],
      pricing: '$29/month',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'AI Content Moderation Pro',
      description: 'Advanced content filtering and moderation for social media and platforms.',
      features: [
        'Real-time content monitoring',
        'Multi-language support (50+ languages)',
        'Image and video analysis',
        'Custom moderation rules',
        'Analytics dashboard',
        'API integration'
      ],
      pricing: '$49/month',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and sustainability tracking for businesses.',
      features: [
        'Carbon footprint analysis',
        'Sustainability reporting',
        'Compliance monitoring',
        'Green initiative tracking',
        'Energy usage optimization',
        'ESG reporting tools'
      ],
      pricing: '$79/month',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Agricultural Intelligence',
      description: 'Smart farming and crop optimization solutions for agricultural businesses.',
      features: [
        'Crop health monitoring',
        'Weather pattern analysis',
        'Yield prediction models',
        'Resource optimization',
        'Pest and disease detection',
        'Farm equipment integration'
      ],
      pricing: '$99/month',
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Advanced business intelligence and predictive analytics platform.',
      features: [
        'Predictive analytics and forecasting',
        'Custom dashboard builder',
        'Real-time data visualization',
        'Automated report generation',
        'KPI tracking and alerts',
        'Data integration (100+ sources)'
      ],
      pricing: '$149/month',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'AI-powered coding assistance for faster and more efficient development.',
      features: [
        'Code generation and completion',
        'Bug detection and fixing',
        'Code review and optimization',
        'Documentation generation',
        'Multi-language support',
        'IDE integration'
      ],
      pricing: '$199/month',
      icon: <Code className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Choose Your Solution',
      description: 'Select the micro SAAS solution that best fits your business needs.',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Customize & Configure',
      description: 'Customize the solution to match your specific business requirements.',
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Integration & Training',
      description: 'Integrate with your existing systems and train your team.',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Launch your solution with ongoing support and continuous updates.',
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The AI Accounting Assistant has saved us hours every week. It\'s incredibly accurate and easy to use.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Content Platform',
      role: 'CTO',
      content: 'The content moderation solution has reduced our manual review time by 90%. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'AgriTech Solutions',
      role: 'CEO',
      content: 'The agricultural intelligence platform has improved our crop yields by 25%. Amazing results!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our micro SAAS solutions including AI accounting, content moderation, climate solutions, and business intelligence tools." />
        <meta name="keywords" content="micro SAAS, software as a service, AI solutions, business tools, accounting software, content moderation, climate solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}SAAS
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can be deployed quickly and scaled as your business grows. 
              No complex setup, no lengthy implementations - just powerful tools that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable software solutions designed for modern businesses. Get started in minutes, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => (
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.pricing}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Started in 5 Simple Steps</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed for quick deployment and immediate value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mt-4">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about our micro SAAS solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Choose your micro SAAS solution and start seeing results in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSPage;