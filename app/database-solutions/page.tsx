import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Server, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  Brain,
  Target,
  Users,
  Award,
  Globe,
  Smartphone,
  Cloud,
  Activity,
  Settings,
  BarChart3,
  Zap
} from 'lucide-react';

const DatabaseSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Managed Database Services",
      description: "Fully managed database solutions with automated backups, scaling, and monitoring."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "High-Performance Storage",
      description: "Optimized database storage with SSD and NVMe for maximum performance and reliability."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance certifications."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Scaling",
      description: "Automatically scale database resources based on demand and performance metrics."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Real-time database performance monitoring with detailed analytics and alerts."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Database Optimization",
      description: "AI-powered database optimization for improved performance and reduced costs."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses with basic database needs",
      features: [
        "Up to 100GB storage",
        "Basic monitoring",
        "Standard support",
        "Email support",
        "Basic backups",
        "1 database instance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for growing businesses with complex database requirements",
      features: [
        "Up to 1TB storage",
        "Advanced monitoring",
        "Priority support",
        "Phone & email support",
        "Advanced backups",
        "5 database instances",
        "Auto-scaling",
        "Performance optimization",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,199",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited storage",
        "Premium monitoring",
        "24/7 dedicated support",
        "On-site support",
        "Premium backups",
        "Unlimited instances",
        "Custom configurations",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Database Solutions | Zion Tech Group - Advanced Database Management</title>
        <meta name="description" content="Manage and optimize your databases with our advanced database solutions. Managed services, performance optimization, and enterprise security starting at $299/month." />
        <meta name="keywords" content="database solutions, managed databases, database optimization, database security, database monitoring, database management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Database Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Manage and optimize your databases with our advanced database solutions. 
                Managed services, performance optimization, and enterprise-grade security for modern applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>
                <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Database Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our database solutions platform provides comprehensive capabilities for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Database Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the database solution that fits your business needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative border-2 ${plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Databases?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our database solutions platform to optimize their data management.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-400 mt-2">24/7 Support Available</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-lg">364 E Main St STE 1008</p>
                  <p className="text-gray-300 text-lg">Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-block">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatabaseSolutionsPage;