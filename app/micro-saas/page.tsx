import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe, 
  Smartphone, 
  Monitor,
  Clock,
  DollarSign,
  Target,
  Settings,
  Database,
  Lock,
  TrendingUp
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "AI Content Studio",
      description: "Create professional content with AI-powered writing, design, and video generation tools",
      icon: <Zap className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-content-studio",
      features: ["AI Writing", "Design Tools", "Video Generation", "50+ Templates"],
      featured: true
    },
    {
      title: "Project Management Pro",
      description: "Advanced project management with AI-powered insights and automation",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $49/month",
      link: "/project-management-pro",
      features: ["Task Automation", "AI Insights", "Team Collaboration", "Reporting"],
      featured: true
    },
    {
      title: "AI CRM Pro",
      description: "Intelligent customer relationship management with predictive analytics",
      icon: <Users className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-crm-pro",
      features: ["Lead Scoring", "Automated Follow-ups", "Analytics", "Integration"],
      featured: true
    },
    {
      title: "Smart Inventory Manager",
      description: "AI-powered inventory optimization and demand forecasting",
      icon: <Database className="w-8 h-8" />,
      price: "From $59/month",
      link: "/zion-inventory-smart",
      features: ["Demand Forecasting", "Auto Reordering", "Analytics", "Multi-location"],
      featured: false
    },
    {
      title: "Financial Analytics Pro",
      description: "Advanced financial reporting and AI-powered insights",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $79/month",
      link: "/ai-financial-analytics-pro",
      features: ["Real-time Reports", "AI Insights", "Forecasting", "Compliance"],
      featured: false
    },
    {
      title: "Performance Monitor",
      description: "Employee performance tracking with AI-powered analytics",
      icon: <Monitor className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-performance-monitor",
      features: ["Time Tracking", "Productivity Analytics", "Goal Setting", "Reports"],
      featured: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered",
      description: "Leverage artificial intelligence for automation and insights"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native",
      description: "Built for the cloud with 99.9% uptime guarantee"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and data visualization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for remote teams"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Connect with your existing tools and workflows"
    }
  ];

  const benefits = [
    {
      metric: "500+",
      label: "Active Users",
      description: "Growing community of satisfied customers"
    },
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Reliable service availability"
    },
    {
      metric: "24/7",
      label: "Support",
      description: "Round-the-clock customer support"
    },
    {
      metric: "30+",
      label: "Integrations",
      description: "Connect with popular business tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SAAS services designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, business tools, AI automation, project management, CRM, inventory management, financial analytics" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
Page
          </h1>442
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.
          </p>529
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>829
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.
              </p>955
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>1193
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.
              </p>1325
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>1570
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.
              </p>1694
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>1893
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Our Micro SAAS Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our Micro SAAS Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard key={index} className={`p-6 ${service.featured ? 'ring-2 ring-blue-400' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">{service.icon}</div>
                  {service.featured && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <FuturisticButton className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our micro SAAS services today and experience the power of AI-driven business automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <FuturisticButton size="lg">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
            <Link to="/demo">
              <FuturisticButton variant="outline" size="lg">
                View Demo <Globe className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

