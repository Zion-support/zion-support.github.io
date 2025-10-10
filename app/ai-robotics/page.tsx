'use client';
import React from 'react';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Eye, Building, Factory, Home, Stethoscope, Clock3, Compass, Navigation, Zap, Target, Shield, Users, CheckCircle, ArrowRight, Truck, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIRoboticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Robotics',
      description: 'AI-powered robots that can learn, adapt, and make decisions in real-time for complex tasks.',
      benefits: ['Machine learning', 'Adaptive behavior', 'Real-time decisions', 'Continuous improvement']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced vision systems that enable robots to see, recognize, and interact with their environment.',
      benefits: ['Object recognition', 'Spatial awareness', 'Quality inspection', 'Navigation assistance']
    },
    {
      icon: Settings,
      title: 'Autonomous Operation',
      description: 'Robots that can operate independently with minimal human intervention and supervision.',
      benefits: ['Self-navigation', 'Task planning', 'Error recovery', 'Maintenance alerts']
    },
    {
      icon: Zap,
      title: 'Precision Control',
      description: 'High-precision robotic control systems for delicate and complex manufacturing tasks.',
      benefits: ['Micro-precision', 'Repeatable accuracy', 'Force control', 'Speed optimization']
    },
    {
      icon: Users,
      title: 'Human-Robot Collaboration',
      description: 'Safe and efficient collaboration between humans and robots in shared workspaces.',
      benefits: ['Safety protocols', 'Intuitive interfaces', 'Collaborative tasks', 'Workflow optimization']
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Advanced safety features and fail-safe mechanisms for secure robotic operations.',
      benefits: ['Collision avoidance', 'Emergency stops', 'Safety monitoring', 'Risk assessment']
    }
  ];

  const applications = [
    {
      title: 'Manufacturing',
      description: 'Industrial robots for assembly, welding, painting, and quality control in manufacturing.',
      icon: Factory,
      useCases: ['Assembly automation', 'Quality control', 'Welding robots', 'Painting systems']
    },
    {
      title: 'Healthcare',
      description: 'Medical robots for surgery, rehabilitation, and patient care assistance.',
      icon: Stethoscope,
      useCases: ['Surgical robots', 'Rehabilitation', 'Patient monitoring', 'Drug delivery']
    },
    {
      title: 'Logistics',
      description: 'Warehouse and delivery robots for inventory management and order fulfillment.',
      icon: Truck,
      useCases: ['Warehouse automation', 'Order picking', 'Delivery robots', 'Inventory tracking']
    },
    {
      title: 'Agriculture',
      description: 'Agricultural robots for planting, harvesting, and crop monitoring.',
      icon: Home,
      useCases: ['Precision farming', 'Crop monitoring', 'Harvesting robots', 'Soil analysis']
    },
    {
      title: 'Service Industry',
      description: 'Service robots for cleaning, security, and customer assistance.',
      icon: Users,
      useCases: ['Cleaning robots', 'Security patrols', 'Customer service', 'Maintenance tasks']
    },
    {
      title: 'Research & Exploration',
      description: 'Robots for scientific research, space exploration, and underwater missions.',
      icon: Compass,
      useCases: ['Space exploration', 'Underwater research', 'Scientific experiments', 'Data collection']
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Accuracy in precision tasks',
      icon: Target
    },
    {
      metric: '24/7',
      description: 'Continuous operation capability',
      icon: Clock3
    },
    {
      metric: '50%',
      description: 'Increase in productivity',
      icon: TrendingUp
    },
    {
      metric: '90%',
      description: 'Reduction in workplace injuries',
      icon: Shield
    }
  ];

  const pricingPlans = [
    {
      name: 'Robotics Starter',
      price: '$2,499/month',
      description: 'For small-scale robotic applications',
      features: [
        'Basic robot programming',
        'Standard sensors',
        'Email support',
        'Cloud monitoring',
        'Basic analytics',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Robotics Professional',
      price: '$5,999/month',
      description: 'For enterprise robotic solutions',
      features: [
        'Advanced AI programming',
        'Advanced sensors',
        'Priority support',
        'Real-time monitoring',
        'Advanced analytics',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Robotics Enterprise',
      price: 'Custom',
      description: 'For large-scale robotic operations',
      features: [
        'Custom robot development',
        'On-site deployment',
        'Dedicated support team',
        '24/7 monitoring',
        'White-label solutions',
        'Advanced safety systems',
        'Custom reporting',
        'Full customization'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              <span>Intelligent Robotics Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent robots that can see, learn, and adapt. Our AI-powered robotics solutions
              combine advanced machine learning with precision engineering for autonomous operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Build AI Robots
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
                View Demo
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{capability.metric}</div>
                <div className="text-gray-300">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Robotics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI robotics platform provides the intelligence and capabilities needed for
              autonomous operation in any environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Robotics Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI robotics is transforming industries and enabling new possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors">
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">
                  <app.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="space-y-2">
                  {app.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-300">
                      <Target className="w-4 h-4 mr-2" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Robotics Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your AI robotics needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build AI Robots?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building intelligent robots that can see, learn, and adapt to any environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIRoboticsPage;