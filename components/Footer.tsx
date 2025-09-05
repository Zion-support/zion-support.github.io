import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

const services = {
  'AI Solutions': [
    { name: 'AI Content Creation', href: '/ai-services' },
    { name: 'AI Email Automation', href: '/ai-services' },
    { name: 'AI Customer Support', href: '/ai-services' },
    { name: 'AI Data Analytics', href: '/ai-services' }
  ],
  'IT Services': [
    { name: 'Cloud Migration', href: '/it-services' },
    { name: 'Cybersecurity', href: '/it-services' },
    { name: 'Network Infrastructure', href: '/it-services' },
    { name: 'DevOps', href: '/it-services' }
  ],
  'Micro SaaS': [
    { name: 'AI Analytics Dashboard', href: '/micro-saas' },
    { name: 'Project Management Hub', href: '/micro-saas' },
    { name: 'Customer Support Automation', href: '/micro-saas' },
    { name: 'Blockchain Payment Gateway', href: '/micro-saas' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses with cutting-edge AI solutions, cloud services, and technology consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, serviceList]) => (
                <div key={category}>
                  <h4 className="font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-2">
                    {serviceList.map((service) => (
                      <li key={service.name}>
                        <Link href={service.href} className="text-gray-400 hover:text-white text-sm">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-400 text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-400 text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-gray-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}