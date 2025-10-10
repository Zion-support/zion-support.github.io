'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: 'analytics-dashboard',
      icon: 'BarChart3',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business data',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Data export capabilities',
        'Mobile-responsive design',
        'API integration',
        'User management'
      ],
      price: '$99/month',
      category: 'Analytics'
    },
    {
      id: 'appointment-scheduler',
      icon: 'Calendar',
      title: 'Appointment Scheduler',
      description: 'Streamline booking and scheduling for your business',
      features: [
        'Online booking system',
        'Calendar integration',
        'Email notifications',
        'Payment processing',
        'Multi-timezone support',
        'Custom booking forms'
      ],
      price: '$79/month',
      category: 'Scheduling'
    },
    {
      id: 'email-marketing',
      icon: 'Mail',
      title: 'Email Marketing',
      description: 'Powerful email marketing campaigns and automation',
      features: [
        'Drag-and-drop editor',
        'Email automation',
        'Subscriber management',
        'A/B testing',
        'Analytics and reporting',
        'Template library'
      ],
      price: '$149/month',
      category: 'Marketing'
    },
    {
      id: 'inventory-management',
      icon: 'Package',
      title: 'Inventory Management',
      description: 'Complete inventory tracking and management solution',
      features: [
        'Stock level monitoring',
        'Automated reordering',
        'Barcode scanning',
        'Multi-location support',
        'Reporting and analytics',
        'Integration capabilities'
      ],
      price: '$199/month',
      category: 'Inventory'
    },
    {
      id: 'expense-tracker',
      icon: 'Receipt',
      title: 'Expense Tracker',
      description: 'Track and manage business expenses efficiently',
      features: [
        'Receipt scanning',
        'Expense categorization',
        'Approval workflows',
        'Tax reporting',
        'Mobile app',
        'Integration with accounting'
      ],
      price: '$59/month',
      category: 'Finance'
    },
    {
      id: 'lead-scoring',
      icon: 'Target',
      title: 'Lead Scoring',
      description: 'Intelligent lead scoring and qualification system',
      features: [
        'AI-powered scoring',
        'Behavioral tracking',
        'Custom scoring rules',
        'CRM integration',
        'Lead nurturing',
        'Performance analytics'
      ],
      price: '$129/month',
      category: 'Sales'
    }
  ];

  const categories = ['All', 'Analytics', 'Scheduling', 'Marketing', 'Inventory', 'Finance', 'Sales'];

  const benefits = [
    'Quick deployment and setup',
    'Scalable and flexible solutions',
    'Regular updates and improvements',
    '24/7 technical support',
    'API access and integrations',
    'Custom branding options'
  ];

  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Active Users'
    },
    {
      icon: TrendingUp,
      number: '99.9%',
      label: 'Uptime'
    },
    {
      icon: Shield,
      number: 'Enterprise',
      label: 'Security'
    },
    {
      icon: Cloud,
      number: 'Global',
      label: 'Infrastructure'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      BarChart3,
      Calendar,
      Mail,
      Package,
      Receipt,
      Target
    };
    return icons[iconName] || BarChart3;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick deployment, scalable, and cost-effective." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our collection of specialized SaaS solutions designed to solve specific business problems quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Browse Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Custom Solution
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of specialized solutions or request a custom solution for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = getIcon(product.icon);
              return (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <Link
                        to={`/micro-saas/${product.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the benefits of specialized solutions without the complexity of large enterprise software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8">
            Don't see what you're looking for? We can create a custom micro SaaS solution tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Request Custom Solution
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;