import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import React from 'react';

export default function page() {

  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements. From concept to deployment, we create applications that drive your business forward.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000",
      features: ["Custom Applications", "API Development", "Database Design", "Quality Assurance"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. From simple websites to complex web platforms, we deliver exceptional user experiences.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless performance across all devices.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $8,000",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment integration, inventory management, and customer relationship management features.",
      icon: <Zap className="w-8 h-8" />,
      path: "/e-commerce-development",
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,000",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Portal"]
    },
    {
      title: "Database Development",
      description: "Custom database solutions with optimized performance, data integrity, and scalability. From design to implementation and maintenance.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,000",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration between systems. Scalable, secure, and well-documented API solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/api-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting"]
  ];
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

<<<<<<< HEAD
export default function CustomDevelopmentPage() {
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

const CustomDevelopmentPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Custom Development solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Custom Development</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive custom development solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Custom software development services tailored to your needs." />
        <meta name="keywords" content="custom development, software, bespoke solutions" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Custom Development
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Custom software development services tailored to your needs.
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CustomDevelopmentPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
