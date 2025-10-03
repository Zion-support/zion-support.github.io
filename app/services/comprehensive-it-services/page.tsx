import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Eye,
  Search,
  Edit3,
  Upload,
  Download,
  PieChart,
  LineChart,
  AlertTriangle,
  Cpu,
  Lock,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Globe,
  Zap,
  Brain,
  BarChart3,
  FileText,
  Mic,
  Building,
  Briefcase,
  Home,
  Heart,
  Factory,
  ShoppingCart,
  GraduationCap,
  Truck
} from 'lucide-react';

export default function ComprehensiveITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-500/20 to-blue-500/20 border border-gray-500/30 mb-6">
              <Server className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600 font-bold text-lg">Comprehensive IT Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Professional IT Solutions & Support
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Complete IT services including cloud migration, cybersecurity, infrastructure management, 
              digital transformation, software development, and 24/7 support with industry expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-500 hover:text-gray-600 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-sm rounded-xl p-4 border border-gray-500/30">
                <div className="text-2xl font-extrabold text-gray-400 mb-1">8</div>
                <div className="text-xs text-gray-300">Service Categories</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">24/7</div>
                <div className="text-xs text-blue-300">Support Available</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
                <div className="text-xs text-green-300">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">$1,500</div>
                <div className="text-xs text-orange-300">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core IT Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to keep your business running smoothly and securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Migration Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Migration Services</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration to AWS, Azure, or Google Cloud with zero downtime and enhanced security.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Zero-downtime migration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Cost optimization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Security hardening</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $2,500/month
              </div>
            </div>

            {/* Cybersecurity Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions including threat detection, incident response, and compliance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />24/7 threat monitoring</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Incident response</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Compliance management</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $3,000/month
              </div>
            </div>

            {/* Infrastructure Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Management</h3>
              <p className="text-gray-600 mb-4">
                Complete infrastructure management including servers, networks, and data centers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Server management</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Network optimization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Performance monitoring</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $1,500/month
              </div>
            </div>

            {/* DevOps Automation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">DevOps Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated CI/CD pipelines, infrastructure as code, and deployment automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />CI/CD pipelines</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Infrastructure as code</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Automated deployments</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $2,000/month
              </div>
            </div>

            {/* Data Analytics Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics Consulting</h3>
              <p className="text-gray-600 mb-4">
                Data strategy, analytics implementation, and business intelligence solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Data strategy</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Analytics implementation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Business intelligence</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $2,500/month
              </div>
            </div>

            {/* Software Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-gray-600 mb-4">
                Custom software development, API integration, and application modernization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Custom development</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />API integration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Application modernization</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $3,500/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your IT service needs with transparent pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-gray-600 mb-2">$1,500</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Basic infrastructure management</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Email support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Standard security</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Monthly reporting</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />99.9% uptime</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-600 mb-2">$3,500</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Advanced infrastructure management</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Enhanced security</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Weekly reporting</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Cloud migration</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />DevOps automation</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />99.99% uptime</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-600 mb-2">Custom</div>
                <div className="text-gray-600">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Complete IT management</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />24/7 dedicated support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Enterprise security</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Real-time reporting</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom solutions</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />All services included</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />On-site support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />SLA guarantees</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join thousands of businesses using our comprehensive IT services to drive efficiency and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-gray-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our IT experts to discuss your requirements and get a custom solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-gray-600 hover:text-gray-700 font-medium">
                +1 302 464 0950
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <div className="text-green-600 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}