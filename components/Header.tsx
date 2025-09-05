import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { useRouter } from 'next/router';
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
<<<<<<< HEAD
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Custom Development', href: '/custom-development' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' }
=======
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
    { name: 'Edge Computing', href: '/edge-computing' },
    { name: '5G Networks', href: '/5g-networks' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
<<<<<<< HEAD
    { name: 'Custom Development', href: '/solutions/custom' },
    { name: 'AI Implementation', href: '/solutions/ai-implementation' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
    { name: 'API Development', href: '/solutions/api-development' }
=======
    { name: 'Custom Development', href: '/solutions/custom' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
<<<<<<< HEAD
    { name: 'Energy', href: '/industries/energy' },
    { name: 'Transportation', href: '/industries/transportation' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Media & Entertainment', href: '/industries/media' },
    { name: 'Legal', href: '/industries/legal' }
=======
    { name: 'Energy', href: '/industries/energy' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
<<<<<<< HEAD
    { name: 'FAQ', href: '/faq' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Industry Reports', href: '/industry-reports' },
    { name: 'Newsletter', href: '/newsletter' }
=======
    { name: 'FAQ', href: '/faq' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
<<<<<<< HEAD
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Investor Relations', href: '/investors' }
=======
    { name: 'Privacy Policy', href: '/privacy' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  ]
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center space-x-6">
            {Object.entries(navigation).map(([title, links]) => (
              <div key={title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="font-medium">{title}</span>
=======
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.entries(navigation).map(([title, links]) => (
              <div key={title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{title}</span>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === title && (
<<<<<<< HEAD
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-1">
                      {links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md mx-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
=======
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-3">
=======
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
<<<<<<< HEAD
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
=======
                className="text-gray-700 hover:text-blue-600 transition-colors"
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
<<<<<<< HEAD
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
=======
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
