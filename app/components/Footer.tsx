'use client';
import React from 'react';
// Using regular anchor tags instead of Next.js Link for Vite compatibility
import { 
  Brain, 
  Cloud, 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'AI project management' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'AI social media automation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support-chatbot', description: 'AI customer support chatbot' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'DevOps automation & CI/CD' },
    { name: 'Database Services', url: '/database', description: 'Database optimization & security' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network design & management' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'System Administration', url: '/system-administration', description: 'System management & maintenance' },
    { name: 'API Development', url: '/api-development', description: 'RESTful & GraphQL APIs' },
    { name: 'Microservices', url: '/microservices', description: 'Scalable microservice architecture' },
    { name: 'Containerization', url: '/containerization', description: 'Docker & Kubernetes solutions' },
    { name: 'Serverless Computing', url: '/serverless-computing', description: 'Serverless architecture & deployment' },
    { name: 'Infrastructure as Code', url: '/infrastructure-as-code', description: 'IaC with Terraform & Ansible' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'AI project management' },
    { name: 'AI Task Manager', url: '/ai-task-manager', description: 'Smart task management' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Meeting Scheduler', url: '/ai-meeting-scheduler', description: 'Intelligent scheduling' },
    { name: 'AI Time Tracker', url: '/ai-time-tracker', description: 'Productivity tracking' },
    { name: 'AI Content Writer', url: '/ai-content-writer', description: 'AI content creation' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email marketing automation' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-chatbot', description: 'AI support chatbot' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum Solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent Robotics' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain Solutions' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive Experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban Technology' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business Modernization' },
    { name: 'Innovation Labs', url: '/innovation-labs', description: 'R&D and Prototyping' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            <div className="flex items-start space-x-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 9AM-6PM EST</span>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <div className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/ai-services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center"
            >
              View all AI Services
              <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold text-lg flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <div className="space-y-2">
              {itServices.slice(0, 8).map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/it-services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center"
            >
              View all IT Services
              <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* Micro SAAS & Support */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <div className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-4">
              <h4 className="text-cyan-400 font-semibold text-sm mb-2">Support</h4>
              <div className="space-y-1">
                {supportLinks.slice(0, 4).map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-300">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;