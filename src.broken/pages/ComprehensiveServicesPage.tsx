<<<<<<< HEAD

export default function ComprehensiveServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Comprehensive Services Page
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our comprehensiveservicespage page
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
  Brain,
  Shield,
  Cloud,
  Workflow,
  Briefcase,
  Package,
  Target,
  Heart,
  DollarSign,
  Building,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Lock,
  Database,
  Network,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Rocket,
  TrendingUp,
  Award
} from 'lucide-react';

export function ComprehensiveServicesPage() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      services: [
        { name: 'AI-Powered Analytics', description: 'Advanced data analytics with machine learning', href: '/services/ai-analytics' },
        { name: 'Natural Language Processing', description: 'Text and speech understanding systems', href: '/services/nlp' },
        { name: 'Computer Vision', description: 'Image and video analysis solutions', href: '/services/computer-vision' },
        { name: 'Predictive Modeling', description: 'Future trend forecasting and analysis', href: '/services/predictive-modeling' },
        { name: 'AI Automation', description: 'Intelligent process automation', href: '/services/ai-automation' },
        { name: 'Chatbot Development', description: 'Conversational AI interfaces', href: '/services/chatbots' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      services: [
        { name: 'Threat Detection', description: 'Advanced threat detection and response', href: '/services/threat-detection' },
        { name: 'Penetration Testing', description: 'Comprehensive security assessments', href: '/services/penetration-testing' },
        { name: 'Security Auditing', description: 'Thorough security compliance reviews', href: '/services/security-auditing' },
        { name: 'Incident Response', description: '24/7 security incident management', href: '/services/incident-response' },
        { name: 'Security Training', description: 'Employee cybersecurity awareness', href: '/services/security-training' },
        { name: 'Compliance Management', description: 'Regulatory compliance solutions', href: '/services/compliance' }
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud-services',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and development operations',
      services: [
        { name: 'Cloud Migration', description: 'Seamless cloud platform transitions', href: '/services/cloud-migration' },
        { name: 'DevOps Automation', description: 'Streamlined development workflows', href: '/services/devops-automation' },
        { name: 'Container Orchestration', description: 'Kubernetes and Docker management', href: '/services/container-orchestration' },
        { name: 'Infrastructure as Code', description: 'Automated infrastructure management', href: '/services/iac' },
        { name: 'Cloud Security', description: 'Multi-cloud security solutions', href: '/services/cloud-security' },
        { name: 'Performance Optimization', description: 'Cloud cost and performance tuning', href: '/services/cloud-optimization' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Workflow,
      description: 'End-to-end digital transformation strategies and implementation',
      services: [
        { name: 'Process Optimization', description: 'Business process reengineering', href: '/services/process-optimization' },
        { name: 'Legacy Modernization', description: 'System modernization and upgrades', href: '/services/legacy-modernization' },
        { name: 'Digital Strategy', description: 'Comprehensive digital roadmaps', href: '/services/digital-strategy' },
        { name: 'Change Management', description: 'Organizational change facilitation', href: '/services/change-management' },
        { name: 'Technology Assessment', description: 'Current state technology evaluation', href: '/services/technology-assessment' },
        { name: 'Innovation Consulting', description: 'Emerging technology guidance', href: '/services/innovation-consulting' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      icon: Briefcase,
      description: 'Strategic IT consulting and advisory services',
      services: [
        { name: 'Technology Strategy', description: 'Long-term technology planning', href: '/services/technology-strategy' },
        { name: 'Architecture Design', description: 'System and solution architecture', href: '/services/architecture-design' },
        { name: 'Project Management', description: 'IT project delivery and oversight', href: '/services/project-management' },
        { name: 'Risk Assessment', description: 'Technology risk evaluation', href: '/services/risk-assessment' },
        { name: 'Vendor Management', description: 'Third-party vendor optimization', href: '/services/vendor-management' },
        { name: 'Performance Optimization', description: 'System performance tuning', href: '/services/performance-optimization' }
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      icon: Package,
      description: 'Specialized software-as-a-service solutions for specific business needs',
      services: [
        { name: 'Custom SAAS Development', description: 'Tailored software solutions', href: '/services/custom-saas' },
        { name: 'API Development', description: 'RESTful and GraphQL APIs', href: '/services/api-development' },
        { name: 'Integration Services', description: 'Third-party system integration', href: '/services/integration' },
        { name: 'SAAS Analytics', description: 'Usage analytics and insights', href: '/services/saas-analytics' },
        { name: 'Subscription Management', description: 'Billing and subscription handling', href: '/services/subscription-management' },
        { name: 'Multi-tenancy', description: 'Multi-tenant architecture design', href: '/services/multi-tenancy' }
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'HIPAA-compliant healthcare technology solutions',
      href: '/solutions/healthcare'
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Secure financial technology and compliance solutions',
      href: '/solutions/financial'
    },
    {
      name: 'Manufacturing',
      icon: Workflow,
      description: 'Industry 4.0 and smart manufacturing solutions',
      href: '/solutions/manufacturing'
    },
    {
      name: 'Government',
      icon: Building,
      description: 'Secure government technology solutions',
      href: '/solutions/government'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'E-commerce and retail technology solutions',
      href: '/solutions/retail'
    },
    {
      name: 'Education',
      icon: Users,
      description: 'Educational technology and learning platforms',
      href: '/solutions/education'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              Technology Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and digital transformation, 
              we provide end-to-end technology solutions that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology services designed to meet the evolving needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                    >
                      <div>
                        <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions for your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution) => (
              <Link
                key={solution.name}
                to={solution.href}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Expert Team',
                description: 'Certified professionals with years of industry experience'
              },
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'Always at the forefront of emerging technologies'
              },
              {
                icon: Shield,
                title: 'Security Focused',
                description: 'Enterprise-grade security in everything we build'
              },
              {
                icon: Users,
                title: 'Client Success',
                description: 'Dedicated to your business growth and success'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive technology services can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              Contact Our Team
            </Link>
          </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

export default ComprehensiveServicesPage;

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
