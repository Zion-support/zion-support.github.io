import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  Building2,
  FileText, 
  BarChart3, 
  Workflow,
  Mic,
  Users,
  Calendar,
  PieChart,
  Package,
  Mail,
  Phone,
  MapPin,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Cpu,
  Eye,
  Factory,
  Heart,
  ShoppingCart,
  DollarSign,
  Wifi,
  Link as LinkIcon
} from 'lucide-react';

const ServicesOverview = (props: any) => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Zion Tech Group Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Comprehensive Technology Solutions & Micro SaaS Services
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Professional technology solutions for modern businesses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
                  <p className="text-sm text-gray-500">From $199/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Revolutionary AI solutions that transform business operations</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    AI Content Generation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Customer Analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Workflow Automation
                  </li>
                </ul>
              </div>
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Market Price:</span> $299-1299/month
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  Save up to 40% with Zion Tech Group
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/services/ai-content-generation-suite"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* IT Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
                  <p className="text-sm text-gray-500">From $199/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive IT services for modern businesses</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Cloud Migration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    DevOps Automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Cybersecurity
                  </li>
                </ul>
              </div>
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Market Price:</span> $299-3999/month
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  Save up to 40% with Zion Tech Group
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/services/cloud-migration-services"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Business SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Business SaaS</h3>
                  <p className="text-sm text-gray-500">From $59/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Focused software solutions for specific business needs</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Smart CRM Platform
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Project Management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Financial Analytics
                  </li>
                </ul>
              </div>
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Market Price:</span> $79-499/month
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  Save up to 25% with Zion Tech Group
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/services/smart-crm-platform"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300">Contact us today for a free consultation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.email}
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Professional technology solutions and micro SaaS services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOverview;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>