import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Shield,
  Cloud,
  Database,
  Server,
  Lock,
  Users,
  Zap,
  BarChart3,
  Globe,
  Cpu,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Building,
  Briefcase
} from 'lucide-react';

export default function ComprehensiveITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Professional IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to support your business growth and digital transformation
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
                Seamless migration to cloud platforms with minimal downtime and maximum security.
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-blue-600">$2,500</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  AWS, Azure, GCP migration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Zero-downtime migration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cost optimization
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                Get Quote
              </Link>
            </div>

            {/* Cybersecurity Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity Consulting</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cybersecurity assessment and implementation of enterprise-grade security measures.
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-red-600">$3,500</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Security assessment
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Compliance consulting
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Incident response
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors text-center block">
                Get Quote
              </Link>
            </div>

            {/* DevOps Automation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">DevOps Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamline development and deployment processes with automated CI/CD pipelines and infrastructure.
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-green-600">$2,000</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  CI/CD pipeline setup
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Infrastructure as Code
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Monitoring & alerting
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-center block">
                Get Quote
              </Link>
            </div>

            {/* Data Analytics Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics Consulting</h3>
              <p className="text-gray-600 mb-4">
                Transform your data into actionable insights with advanced analytics and business intelligence solutions.
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-purple-600">$2,800</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.7/5 Rating</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Data warehouse design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  BI dashboard creation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Predictive analytics
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                Get Quote
              </Link>
            </div>

            {/* Network Infrastructure */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Design, implement, and manage robust network infrastructure for optimal performance and security.
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-orange-600">$1,500</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Network design & setup
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Wireless solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 monitoring
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                Get Quote
              </Link>
            </div>

            {/* Database Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Database Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize database performance, security, and scalability for improved application performance.
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-indigo-600">$1,800</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance tuning
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Backup & recovery
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Security hardening
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center block">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services across all major technology areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600 text-sm">
                Large-scale IT solutions for enterprise organizations with complex requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">SMB Solutions</h3>
              <p className="text-gray-600 text-sm">
                Cost-effective IT solutions designed for small and medium businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Startup Solutions</h3>
              <p className="text-gray-600 text-sm">
                Scalable IT infrastructure and services for growing startups.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Complete infrastructure management and optimization services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IT experts today to discuss how our comprehensive services can support your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors font-medium">
                +1 302 464 0950
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
              <div className="text-blue-100 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <div className="text-blue-100 font-medium">
                24/7 IT Support<br />
                Enterprise clients
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}