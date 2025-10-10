'use client';
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Brain,
  Calendar,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Revolutionary project management with quantum-inspired algorithms, real-time collaboration, and predictive analytics. Used by Fortune 500 companies.',
      icon: BarChart,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Quantum task optimization', 'Real-time collaboration', 'Predictive analytics', 'AI risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking', 'Team insights'],
      benefits: ['60% productivity increase', '85% fewer delays', '95% planning accuracy', '40% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '25,000+',
      freeTrial: '30 days',
      realFeatures: ['OpenAI GPT-4 integration', 'Microsoft Teams sync', 'Slack notifications', 'Jira integration', 'GitHub tracking', 'Calendar sync', 'Email automation', 'Mobile app']
    },
    {
      title: 'AI Smart Calendar Pro',
      description: 'Intelligent calendar management with AI-powered scheduling, conflict resolution, and productivity optimization.',
      icon: Calendar,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Pattern learning AI', 'Auto-optimization', 'Energy mapping', 'Focus time blocks', 'Meeting intelligence', 'Travel optimization', 'Work-life balance', 'Smart suggestions'],
      benefits: ['35% more productive time', 'Better work-life balance', 'Reduced scheduling stress', 'Optimal energy usage'],
      link: '/ai-smart-calendar',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '35,000+',
      freeTrial: '21 days',
      realFeatures: ['Google Calendar sync', 'Outlook integration', 'Zoom scheduling', 'Calendly automation', 'Time zone management', 'Recurring events', 'Conflict resolution', 'Mobile notifications']
    },
    {
      title: 'AI Document Intelligence Pro',
      description: 'Transform any document into actionable insights with AI-powered analysis, summarization, and knowledge extraction.',
      icon: FileText,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Document analysis', 'Smart summarization', 'Knowledge extraction', 'Search & discovery', 'Version control', 'Collaboration tools', 'OCR processing', 'Multi-format support'],
      benefits: ['80% faster document processing', 'Better knowledge retention', 'Improved search', 'Enhanced collaboration'],
      link: '/ai-document-intelligence',
      popular: true,
      category: 'Productivity',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Personal Assistant Pro',
      description: 'Your intelligent personal assistant that manages emails, schedules, and tasks with natural language processing.',
      icon: Bot,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Email management', 'Smart scheduling', 'Task automation', 'Voice commands', 'Calendar sync', 'Reminder system', 'Travel planning', 'Expense tracking'],
      benefits: ['50% time savings', 'Never miss important tasks', 'Better organization', 'Reduced stress'],
      link: '/ai-personal-assistant',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '45,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Team Collaboration Hub',
      description: 'Advanced team collaboration platform with AI-powered insights, smart notifications, and productivity analytics.',
      icon: Users,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Team analytics', 'Smart notifications', 'Project tracking', 'Communication tools', 'File sharing', 'Video conferencing', 'Task management', 'Performance insights'],
      benefits: ['35% team productivity increase', 'Better communication', 'Reduced meetings', 'Improved outcomes'],
      link: '/ai-team-collaboration',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Task Optimizer',
      description: 'Revolutionary quantum-inspired task optimization that processes millions of task combinations to find the perfect workflow. Achieve 99.9% efficiency.',
      icon: Zap,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Quantum algorithms', 'Multi-dimensional optimization', 'Real-time adaptation', 'Predictive scheduling', 'Energy efficiency', 'Parallel processing', 'Quantum encryption', 'Neural networks'],
      benefits: ['99.9% efficiency', 'Quantum speed', 'Zero waste', 'Future-proof'],
      link: '/ai-quantum-task-optimizer',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '2,500+',
      freeTrial: '30 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 mb-8">
            <Zap className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">Micro SaaS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Micro SaaS</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of powerful AI-driven micro SaaS applications designed to solve specific business challenges 
            and boost productivity across your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, focused AI applications that solve specific business challenges with precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.users})</span>
                  </div>
                  <span className="text-cyan-400 font-medium">{service.category}</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-white">${service.price.split('/')[0]}</span>
                    <span className="text-gray-400 line-through">${service.originalPrice.split('/')[0]}</span>
                  </div>
                  <span className="text-gray-400">per month</span>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of professionals who are already using our AI-powered micro SaaS applications 
              to work smarter and achieve more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;