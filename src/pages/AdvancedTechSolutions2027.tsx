import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Database, Cloud, Lock, BarChart3, Smartphone, Globe } from 'lucide-react';
const AdvancedTechSolutions2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Advanced Tech Solutions 2027
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Cutting-edge technology solutions designed to accelerate your digital transformation 
            and drive unprecedented business growth in the modern era.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/solutions/cloud" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              Cloud Solutions <Cloud className="w-5 h-5" />
            </Link>
            <Link 
              to="/solutions/ai" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              AI Integration <Cpu className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400 transition-colors">
            <div className="flex items-center mb-4">
              <Cloud className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Cloud Infrastructure</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Scalable, secure, and high-performance cloud solutions that grow with your business needs.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Auto-scaling capabilities</li>
              <li>• 99.99% uptime guarantee</li>
              <li>• Global CDN integration</li>
              <li>• Advanced monitoring</li>
            </ul>
            <Link to="/cloud-solutions" className="text-green-400 hover:text-green-300 flex items-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-colors">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced AI solutions that automate processes and provide intelligent insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Custom model development</li>
              <li>• Real-time processing</li>
              <li>• Predictive analytics</li>
              <li>• Natural language processing</li>
            </ul>
            <Link to="/ai-solutions" className="text-blue-400 hover:text-blue-300 flex items-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-colors">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Data Management</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive data solutions for storage, processing, and analytics at scale.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Big data processing</li>
              <li>• Real-time analytics</li>
              <li>• Data warehousing</li>
              <li>• ETL/ELT pipelines</li>
            </ul>
            <Link to="/data-solutions" className="text-purple-400 hover:text-purple-300 flex items-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-red-400 transition-colors">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Enterprise-grade security solutions to protect your digital assets and data.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Threat detection</li>
              <li>• Identity management</li>
              <li>• Compliance automation</li>
              <li>• Security monitoring</li>
            </ul>
            <Link to="/security-solutions" className="text-red-400 hover:text-red-300 flex items-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-yellow-400 transition-colors">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Analytics & BI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Powerful business intelligence tools to turn data into actionable insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Interactive dashboards</li>
              <li>• Custom reporting</li>
              <li>• Data visualization</li>
              <li>• KPI tracking</li>
            </ul>
            <Link to="/analytics-solutions" className="text-yellow-400 hover:text-yellow-300 flex items-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400 transition-colors">
            <div className="flex items-center mb-4">
              <Smartphone className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Mobile Solutions</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Cross-platform mobile applications that deliver exceptional user experiences.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Native & hybrid apps</li>
              <li>• Offline capabilities</li>
              <li>• Push notifications</li>
              <li>• App store optimization</li>
            </ul>
            <Link to="/mobile-solutions" className="text-cyan-400 hover:text-cyan-300 flex items-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
        {/* Technology Stack */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 rounded-lg p-4 mb-4">
                <Globe className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">Cloud Platforms</h3>
              <p className="text-gray-400 text-sm">AWS, Azure, GCP</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-lg p-4 mb-4">
                <Cpu className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">AI/ML Frameworks</h3>
              <p className="text-gray-400 text-sm">TensorFlow, PyTorch, Scikit-learn</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-lg p-4 mb-4">
                <Database className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">Databases</h3>
              <p className="text-gray-400 text-sm">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 rounded-lg p-4 mb-4">
                <Smartphone className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">React, Vue, Angular</p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Technology Stack?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement the perfect technology solutions 
            for your business needs and growth objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

export default AdvancedTechSolutions2027;