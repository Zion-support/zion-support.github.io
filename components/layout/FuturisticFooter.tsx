import React from 'react',
import Link from 'next/link';
import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Bot,
  Cloud,
  Shield,;
  ArrowRight,;
} from 'lucide-react';
<<<<<<< HEAD



import {
  Mail
  Phone
  MapPin
  Globe
  Zap
  Bot
  Cloud
  Shield
  ArrowRight;
} from 'lucide-react';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

  const currentYear = new Date().getFullYear();import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';


export default function FuturisticFooter() {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const currentYear = new Date().getFullYear();
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
  const quickLinks = [
    { name: 'Services', href: '/services' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Pricing', href: '/pricing' }
    { name: 'About', href: '/about' }
    { name: 'Contact', href: '/contact' }
    { name: 'Blog', href: '/blog' }
  ];
  const serviceCategories = [
    {
      name: 'AI & Machine Learning'
      href: '/services?category=AI%20%26%20Machine%20Learning'
    }
    {
      name: 'Cloud & Infrastructure'
      href: '/services?category=Cloud%20%26%20Infrastructure'
    }
    { name: 'Cybersecurity', href: '/services?category=Cybersecurity' }
    {
      name: 'Analytics & Business Intelligence'
      href: '/services?category=Analytics%20%26%20Business%20Intelligence'
    }
    {
      name: 'Robotics & Automation'
      href: '/services?category=Robotics%20%26%20Automation'
    }
    {
      name: 'Blockchain & Web3'
      href: '/services?category=Blockchain%20%26%20Web3'
    }
  ];
  const socialLinks = [
    {
      name: 'LinkedIn'
      href: 'https://www.linkedin.com/company/zion-tech-group'
      icon: '💼'
    }
    { name: 'X', href: 'https://x.com/ziontechgroup', icon: '🐦' }
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Cloud className='w-5 h-5 text-green-400 mr-2' />
              Services
            </h3>
            <ul className='space-y-3'>
              {serviceCategories.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Services
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Quick Links */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Services */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Contact Info */}
          <div>;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>;
              <Shield className='w-5 h-5 text-purple-400 mr-2' />;
              Contact Us;
            </h3>;
            <div className='space-y-4'>;
              <div className='flex items-start space-x-3'>;
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Phone</p>;
                  <a


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Shield className='w-5 h-5 text-purple-400 mr-2' />
              Contact Us

            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>

              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>

                  <p className="text-white font-medium">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
                    {contactInfo.address}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Bottom section */}

                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'>              Contact Us;
            </h3>;
            <div className="space-y-4">;
              <div className="flex items-start space-x-3">;
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />;
                <div>;
                  <p className="text-white font-medium">Phone</p>;
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
              </div>;
              <div className='flex items-start space-x-3'>;
                <Mail className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Email</p>;
                  <a
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='text-gray-400 hover:text-green-400 transition-colors duration-200'>                <div>;
                  <p className="text-white font-medium">Email</p>;
                  <a
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
              </div>;
              <div className='flex items-start space-x-3'>;
                <MapPin className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Address</p>;
                  <p className='text-gray-400 text-sm'>{contactInfo && contactInfo.address}</p>                </div>                  <p className="text-white font-medium">Address</p>;
                  <p className="text-gray-400 text-sm">;
                    {contactInfo && contactInfo.address}
                  </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Bottom section */}
        <div className='pt-8 border-t border-gray-800'>;
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>;
            <div className='text-gray-400 text-sm'>;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
            <div className='flex space-x-6 text-sm'>;

              <Link
                href='/privacy'
                className='text-gray-400 hover:text-white transition-colors duration-200'>;
                Privacy Policy;
              </Link>;
              <Link
                href='/terms'
                className='text-gray-400 hover:text-white transition-colors duration-200'>;
                Terms of Service;
              </Link>;
              <Link
                href='/cookies'

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.

            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Floating elements */}

      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
    </footer>
<<<<<<< HEAD

);
}



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

                className='text-gray-400 hover:text-white transition-colors duration-200'>                Cookie Policy              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space-x-6 text-sm">;
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Floating elements */}
      <div className='absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse' />;
      <div className='absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000' />;
      <div className='absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500' />;
    </footer>;
  );      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />;
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />;
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />;
    </footer>;
  );
}




}
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
