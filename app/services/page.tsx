'use client';
import React, { lazy } from 'react';
import { Brain, Cpu, Shield, Cloud, Zap, Code, Settings, BarChart, MessageSquare, Eye, Bot, Palette, Music, Video, Heart, Briefcase, Wrench, Navigation as NavIcon, PieChart, Users, Lock, Database, Globe, Target, Search, FileText, Smartphone, Phone, Mail, CheckCircle, TrendingUp, DollarSign, Calendar, Clock3, Calculator, CreditCard, Stethoscope, GraduationCap, Factory, Truck, Home, Scale, Mic, Cube, Camera, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Hammer, Paintbrush, Scissors, BookOpen, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Package, Headphones } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))

const ServicesPage: React.FC = React.memo((props) => {
  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: BarChart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
      icon: Check,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', '50% better time management', '40% fewer missed deadlines', '25% stress reduction'],
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '8,500+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Workflow Automation Pro',
      description: 'Automate complex business processes with intelligent workflow management and exception handling. Save 20+ hours per week.',
      icon: Zap,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard', 'Custom triggers', 'Integration APIs', 'Approval workflows', 'Document processing'],
      benefits: ['80% process automation', '20+ hours saved weekly', '60% cost reduction', '99% accuracy rate'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      rating: 4.7,
      users: '6,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with AI-powered optimization for meetings, appointments, and resource allocation. Perfect for busy professionals.',
      icon: Calendar,
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Resource booking', 'Recurring events', 'Calendar sync', 'Meeting optimization', 'Availability management'],
      benefits: ['50% scheduling efficiency', '90% conflict reduction', '30% time saved', 'Perfect coordination'],
      link: '/ai-scheduler',
      popular: false,
      category: 'Productivity',
      rating: 4.6,
      users: '4,100+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Time Tracker Pro',
      description: 'Advanced time tracking with AI insights, productivity analysis, and automated reporting. Understand how you spend your time.',
      icon: Clock3,
      price: '$34/month',
      originalPrice: '$49/month',
      features: ['Automatic time tracking', 'AI insights', 'Productivity analysis', 'Project billing', 'Team monitoring', 'Detailed reports', 'Goal setting', 'Distraction alerts'],
      benefits: ['25% time awareness', '40% productivity insights', '30% better focus', 'Accurate billing'],
      link: '/ai-time-tracker',
      popular: false,
      category: 'Productivity',
      rating: 4.5,
      users: '3,800+',
      freeTrial: '7 days'
    }
  ];

>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50" aria-label="Skip to main content">Skip to main content</a>
      <main className="container mx-auto px-4 py-16 pt-24" id="main-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Services">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Powerful, affordable AI-powered tools designed for modern businesses. Choose from 30+ specialized applications.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {microSAASServices.map((service, index) => (
              <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded" style={{ color: "#9CA3AF" }}><span className="sr-only">Screen reader: </span>{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1" role="list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1" role="list">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-3 h-3 text-yellow-400" />
                      <span>{service.rating}</span>
                    </div>
                    <div>{service.users} users</div>
                    <div>{service.freeTrial} free trial</div>
                  </div>
                  <a 
                    href={service.link}
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our AI and IT solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                aria-label="Get Free Consultation"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🌐 Website: https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
});

export default ServicesPage;
