<<<<<<< HEAD

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Not Found Page
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our notfoundpage page
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Search,
  ArrowLeft,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Rocket,
  Target,
  Heart,
  Award,
  TrendingUp,
  Cpu,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
} from 'lucide-react';

export function NotFoundPage() {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home, description: 'Return to the main page' },
    { name: 'Services', href: '/services', icon: Rocket, description: 'Explore our technology services' },
    { name: 'About', href: '/about', icon: Award, description: 'Learn more about our company' },
    { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' },
    { name: 'Blog', href: '/blog', icon: TrendingUp, description: 'Read our latest insights' },
    { name: 'Training', href: '/training', icon: GraduationCap, description: 'Access our training programs' },
  ];

  const popularServices = [
    { name: 'AI & Machine Learning', href: '/services#ai-services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Cybersecurity', href: '/services#cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { name: 'Cloud Infrastructure', href: '/services#cloud-services', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Data Analytics', href: '/services#data-analytics', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl font-bold">404</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we've got plenty of amazing content for you to explore!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Navigation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some popular pages to help you get back on track
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our most requested technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Try searching our website for the content you need
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for services, articles, or information..."
                className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Or contact our support team for personalized assistance
            </p>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find what you're looking for. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-cyan-100">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
}
