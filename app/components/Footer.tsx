import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' }
  ];

  const additionalServices = [
    { name: 'Cloud Migration', url: '/cloud-migration' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Data Analytics', url: '/data-analytics' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'E-commerce', url: '/e-commerce-development' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses with cutting-edge AI and technology solutions.
            </p>
            <div className="flex space-x-4">
              <Phone className="w-5 h-5" />
              <Mail className="w-5 h-5" />
              <MapPin className="w-5 h-5" />
            </div>
          </div>

          {/* Micro SaaS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {additionalServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>+1 (555) 123-4567</p>
              <p>info@ziontechgroup.com</p>
              <p>123 Tech Street, Innovation City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;