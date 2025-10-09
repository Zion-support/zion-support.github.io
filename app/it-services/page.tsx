import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Brain, 
  Code, 
  BarChart, 
  Users, 
  Target, 
  Shield, 
  Globe, 
  Settings,
  TrendingUp,
  Mail,
  FileText,
  Search,
  Image,
  Video,
  Database,
  Smartphone,
  Lock,
  Cpu,
  Sparkles,
  Award,
  Clock,
  DollarSign,
  Server,
  Cloud,
  Wifi,
  HardDrive,
  Monitor,
  Printer,
  Headphones,
  Camera,
  Router,
  Laptop,
  Smartphone as Phone
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    // Infrastructure Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Setup',
      description: 'Complete cloud infrastructure migration with zero downtime, cost optimization, and security enhancement.',
      icon: Cloud,
      category: 'infrastructure',
      price: 2500,
      period: 'project',
      features: ['Zero Downtime Migration', 'Cost Optimization', 'Security Enhancement', 'Scalability Planning', 'Disaster Recovery', '24/7 Monitoring'],
      benefits: ['50% cost reduction', '99.9% uptime guarantee', 'Enhanced security', 'Scalable infrastructure'],
      popular: true,
      rating: 4.9,
      projects: 150
    },
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Audit & Implementation',
      description: 'Comprehensive security assessment and implementation of enterprise-grade security solutions.',
      icon: Shield,
      category: 'security',
      price: 1800,
      period: 'month',
      features: ['Security Assessment', 'Penetration Testing', 'Vulnerability Scanning', 'Compliance Audit', 'Security Implementation', 'Staff Training'],
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation', 'Peace of mind'],
      popular: true,
      rating: 4.8,
      projects: 200
    },
    {
      id: 'network-setup',
      name: 'Network Infrastructure Setup',
      description: 'Complete network design, implementation, and optimization for enterprise environments.',
      icon: Wifi,
      category: 'infrastructure',
      price: 3200,
      period: 'project',
      features: ['Network Design', 'Hardware Installation', 'Configuration', 'Security Setup', 'Performance Optimization', 'Documentation'],
      benefits: ['Reliable connectivity', 'Optimized performance', 'Secure network', 'Future-proof design'],
      popular: false,
      rating: 4.7,
      projects: 120
    },
    {
      id: 'server-management',
      name: 'Server Management & Maintenance',
      description: '24/7 server monitoring, maintenance, and optimization for maximum uptime and performance.',
      icon: Server,
      category: 'infrastructure',
      price: 1200,
      period: 'month',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Security Updates', 'Backup Management', 'Incident Response'],
      benefits: ['99.9% uptime', 'Reduced downtime', 'Optimized performance', 'Peace of mind'],
      popular: true,
      rating: 4.8,
      projects: 300
    },
    {
      id: 'data-backup',
      name: 'Data Backup & Recovery',
      description: 'Comprehensive data backup solutions with automated recovery and disaster recovery planning.',
      icon: HardDrive,
      category: 'data',
      price: 800,
      period: 'month',
      features: ['Automated Backups', 'Cloud Storage', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing', 'Compliance Support'],
      benefits: ['Data protection', 'Quick recovery', 'Compliance assurance', 'Cost-effective'],
      popular: false,
      rating: 4.6,
      projects: 180
    },
    {
      id: 'helpdesk-support',
      name: 'IT Helpdesk & Support',
      description: '24/7 technical support and helpdesk services for all your IT needs.',
      icon: Headphones,
      category: 'support',
      price: 1500,
      period: 'month',
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'Incident Resolution'],
      benefits: ['Instant support', 'Reduced downtime', 'User satisfaction', 'Cost-effective'],
      popular: true,
      rating: 4.7,
      projects: 500
    },
    {
      id: 'software-licensing',
      name: 'Software Licensing & Management',
      description: 'Complete software asset management including licensing, compliance, and optimization.',
      icon: Code,
      category: 'software',
      price: 600,
      period: 'month',
      features: ['License Management', 'Compliance Monitoring', 'Cost Optimization', 'Software Deployment', 'Updates Management', 'Audit Support'],
      benefits: ['Cost savings', 'Compliance assurance', 'Optimized licensing', 'Reduced risks'],
      popular: false,
      rating: 4.5,
      projects: 100
    },
    {
      id: 'email-systems',
      name: 'Email Systems & Exchange',
      description: 'Enterprise email solutions with migration, security, and management services.',
      icon: Mail,
      category: 'communication',
      price: 900,
      period: 'month',
      features: ['Email Migration', 'Security Configuration', 'Spam Protection', 'Backup & Recovery', 'Mobile Access', 'Compliance Support'],
      benefits: ['Reliable email', 'Enhanced security', 'Mobile access', 'Compliance ready'],
      popular: false,
      rating: 4.6,
      projects: 80
    },
    {
      id: 'voip-systems',
      name: 'VoIP & Communication Systems',
      description: 'Complete VoIP setup and management for modern business communication needs.',
      icon: Phone,
      category: 'communication',
      price: 1100,
      period: 'month',
      features: ['VoIP Setup', 'Call Management', 'Conference Systems', 'Mobile Integration', 'Call Recording', 'Analytics'],
      benefits: ['Cost savings', 'Advanced features', 'Scalable solution', 'Better communication'],
      popular: false,
      rating: 4.4,
      projects: 60
    },
    {
      id: 'workstation-setup',
      name: 'Workstation Setup & Management',
      description: 'Complete workstation deployment, configuration, and ongoing management services.',
      icon: Monitor,
      category: 'hardware',
      price: 200,
      period: 'workstation',
      features: ['Hardware Setup', 'Software Installation', 'User Configuration', 'Security Setup', 'Maintenance', 'Support'],
      benefits: ['Ready-to-use workstations', 'Consistent setup', 'Reduced setup time', 'Professional configuration'],
      popular: true,
      rating: 4.7,
      projects: 400
    },
    {
      id: 'printer-management',
      name: 'Printer & Device Management',
      description: 'Complete printer and peripheral device management and maintenance services.',
      icon: Printer,
      category: 'hardware',
      price: 300,
      period: 'month',
      features: ['Device Setup', 'Network Configuration', 'Maintenance', 'Supply Management', 'Troubleshooting', 'Replacement'],
      benefits: ['Reliable printing', 'Cost management', 'Reduced downtime', 'Professional service'],
      popular: false,
      rating: 4.3,
      projects: 90
    },
    {
      id: 'security-cameras',
      name: 'Security Camera Systems',
      description: 'Complete security camera installation and monitoring system setup.',
      icon: Camera,
      category: 'security',
      price: 1500,
      period: 'project',
      features: ['Camera Installation', 'Network Setup', 'Recording System', 'Mobile Access', 'Remote Monitoring', 'Maintenance'],
      benefits: ['Enhanced security', 'Remote monitoring', 'Evidence collection', 'Peace of mind'],
      popular: false,
      rating: 4.5,
      projects: 70
    },
    {
      id: 'wifi-optimization',
      name: 'WiFi Network Optimization',
      description: 'Complete WiFi network design, installation, and optimization for maximum coverage and performance.',
      icon: Wifi,
      category: 'infrastructure',
      price: 1800,
      period: 'project',
      features: ['Site Survey', 'Network Design', 'Access Point Installation', 'Security Configuration', 'Performance Testing', 'Documentation'],
      benefits: ['Optimal coverage', 'High performance', 'Secure network', 'Future-proof design'],
      popular: true,
      rating: 4.6,
      projects: 110
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Complete database administration, optimization, and maintenance services.',
      icon: Database,
      category: 'data',
      price: 2000,
      period: 'month',
      features: ['Database Administration', 'Performance Optimization', 'Backup & Recovery', 'Security Management', 'Monitoring', 'Tuning'],
      benefits: ['Optimized performance', 'Data protection', 'Reduced downtime', 'Expert management'],
      popular: false,
      rating: 4.8,
      projects: 50
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and consulting services to align technology with business goals.',
      icon: Brain,
      category: 'consulting',
      price: 250,
      period: 'hour',
      features: ['IT Strategy', 'Technology Assessment', 'Roadmap Planning', 'Vendor Selection', 'Implementation Planning', 'Change Management'],
      benefits: ['Strategic alignment', 'Cost optimization', 'Technology roadmap', 'Expert guidance'],
      popular: true,
      rating: 4.9,
      projects: 200
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'data', name: 'Data Management', count: itServices.filter(s => s.category === 'data').length },
    { id: 'support', name: 'Support', count: itServices.filter(s => s.category === 'support').length },
    { id: 'software', name: 'Software', count: itServices.filter(s => s.category === 'software').length },
    { id: 'communication', name: 'Communication', count: itServices.filter(s => s.category === 'communication').length },
    { id: 'hardware', name: 'Hardware', count: itServices.filter(s => s.category === 'hardware').length },
    { id: 'consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'consulting').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT services for modern businesses. From infrastructure to security, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price === 200 ? '$200' : service.price === 250 ? '$250' : `$${service.price}`}
                    </div>
                    <div className="text-sm text-gray-500">/{service.period}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                    <span className="text-sm text-gray-500 ml-2">({service.projects} projects)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Quote
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver exceptional IT services with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600">Our team holds industry certifications and has years of experience in enterprise IT solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support and monitoring to ensure your systems are always running smoothly.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your data and infrastructure from threats.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable improvements in efficiency, security, and cost savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom IT solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;
