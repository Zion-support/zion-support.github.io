import React from 'react';
import Link from 'next/link';
import { ;
  Facebook, ;
  Twitter, ;
  Linkedin, ;
  Instagram, ;
  Mail, ;
  Phone, ;
  MapPin,;
  Code,;
  Database,;
  Cloud,;
  Shield,;
  Smartphone,;
  BarChart3,;
  Users,;
  Building2,;
  ShoppingCart;
} from 'lucide-react';
;
const Footer:React.FC = () => {;
  const services = [;
    { name:'Web Development', href:'/services/web-development' },;
    { name:'Mobile Development', href:'/services/mobile-development' },;
    { name:'Cloud Solutions', href:'/services/cloud-solutions' },;
    { name:'Database Design', href:'/services/database-design' },;
    { name:'Cybersecurity', href:'/services/cybersecurity' },;
    { name:'Analytics & BI', href:'/services/analytics' }
  ];
;
  const solutions = [;
    { name:'Enterprise Solutions', href:'/solutions/enterprise' },;
    { name:'E-commerce Platforms', href:'/solutions/ecommerce' },;
    { name:'CRM Systems', href:'/solutions/crm' },;
    { name:'Custom Software', href:'/solutions/custom-software' }
  ];
;
  const industries = [;
    { name:'Healthcare', href:'/industries/healthcare' },;
    { name:'Finance', href:'/industries/finance' },;
    { name:'Education', href:'/industries/education' },;
    { name:'Manufacturing', href:'/industries/manufacturing' },;
    { name:'Retail', href:'/industries/retail' },;
    { name:'Automotive', href:'/industries/automotive' }
  ];
;
  const socialLinks = [;
    { name:'Facebook', href:'#', icon:Facebook },;
    { name:'Twitter', href:'#', icon:Twitter },;
    { name:'LinkedIn', href:'#', icon:Linkedin },;
    { name:'Instagram', href:'#', icon:Instagram }
  ];
;
  return (;
    <footer className="bg-gray-900 text-white">;
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-2 mb-4">;
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <div>;
                <div className="text-xl font-bold">Zion Tech Group</div>;
                <div className="text-sm text-gray-400">Technology Solutions</div>;
              </div>;
            </div>;
            <p className="text-gray-400 mb-4">;
              Empowering businesses with cutting-edge technology solutions. ;
              We deliver innovative software, cloud infrastructure, and digital transformation services.;
            </p>;
            <div className="space-y-2">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-blue-400" />;
                <span className="text-sm">+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4 text-blue-400" />;
                <span className="text-sm">kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-4 h-4 text-blue-400" />;
                <span className="text-sm">Delaware, USA</span>;
              </div>;
            </div>;
          </div>;
;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services.map((service) => (;
                <li key={service.name}>;
                  <Link ;
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors";
                  >;
                    {service.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
;
          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {solutions.map((solution) => (;
                <li key={solution.name}>;
                  <Link ;
                    href={solution.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors";
                  >;
                    {solution.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
;
          {/* Industries */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Industries</h3>;
            <ul className="space-y-2">;
              {industries.map((industry) => (;
                <li key={industry.name}>;
                  <Link ;
                    href={industry.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors";
                  >;
                    {industry.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
;
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <div className="text-gray-400 text-sm mb-4 md:mb-0">;
              © 2024 Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-gray-400 hover:text-blue-400 transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="h-5 w-5" />;
                </a>;
              ))}
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
};
;
export default Footer;