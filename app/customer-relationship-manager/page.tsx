import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Phone, 
  Mail, 
  Calendar, 
  BarChart3, 
  Settings, 
  Zap, 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Database,
  CheckCircle
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CustomerRelationshipManagerPage = () => {
  const features = [
    {
      title: "Contact Management",
      description: "Centralized contact database with detailed customer profiles and interaction history",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lead Tracking",
      description: "Track leads through the entire sales pipeline with automated follow-ups",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sales Pipeline",
      description: "Visual sales pipeline with customizable stages and deal tracking",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Communication Hub",
      description: "Unified communication platform for emails, calls, and meetings",
      icon: <Phone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Task Management",
      description: "Automated task creation and reminders for better follow-up",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Analytics & Reports",
      description: "Comprehensive analytics and reporting for sales performance",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Sales",
      description: "Streamline sales processes and close more deals",
      icon: <Zap className="w-6 h-6" />,
      stat: "35% more sales"
    },
    {
      title: "Better Customer Relations",
      description: "Maintain stronger relationships with personalized interactions",
      icon: <Users className="w-6 h-6" />,
      stat: "50% better retention"
    },
    {
      title: "Improved Efficiency",
      description: "Automate routine tasks and focus on high-value activities",
      icon: <Settings className="w-6 h-6" />,
      stat: "60% time saved"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "100% visibility"
    }
  ];

  const integrations = [
    { name: "Email Marketing", icon: <Mail className="w-6 h-6" /> },
    { name: "Calendar", icon: <Calendar className="w-6 h-6" /> },
    { name: "Phone Systems", icon: <Phone className="w-6 h-6" /> },
    { name: "Social Media", icon: <Globe className="w-6 h-6" /> },
    { name: "E-commerce", icon: <Database className="w-6 h-6" /> },
    { name: "Accounting", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Customer Relationship Manager - Zion Tech Group | CRM Software & Sales Management</title>
        <meta name="description" content="Powerful CRM software for managing customer relationships, sales pipelines, and lead tracking. Boost sales with our comprehensive customer relationship management solution." />
        <meta name="keywords" content="CRM software, customer relationship management, sales management, lead tracking, contact management, sales pipeline" />
        <link rel="canonical" href="https://ziontechgroup.com/customer-relationship-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Customer Relationship Manager
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Streamline your sales process and build stronger customer relationships with our comprehensive CRM solution. 
            Manage contacts, track leads, and close more deals with powerful automation and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete CRM Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to manage customer relationships and drive sales growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our CRM?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your sales process with measurable improvements in efficiency and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Connect with your favorite tools and platforms for a unified workflow.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{integration.name}</h3>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of sales teams already using our CRM to boost productivity and close more deals. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas-services"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              View All Tools
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CustomerRelationshipManagerPage;