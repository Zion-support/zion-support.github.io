import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Menu, X, Star, Zap, ArrowRight, ChevronDown } from 'lucide-react';

const EnhancedNavigationWithContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const newContentItems = [
    {
      title: 'Ultimate Content Hub 2026',
      description: 'The most comprehensive AI resource collection',
      icon: '🚀',
      link: '/ultimate-content-showcase-2026',
      new: true,
      featured: true
    },
    {
      title: 'Future Tech Showcase',
      description: 'Groundbreaking technologies shaping tomorrow',
      icon: '⚡',
      link: '/future-tech-showcase-2026',
      new: true,
      featured: false
    },
    {
      title: 'AI Revolution 2026',
      description: 'Complete transformation guide',
      icon: '🧠',
      link: '/ai-revolution-2026',
      new: true,
      featured: true
    },
    {
      title: 'Quantum AI Breakthrough',
      description: 'Next-gen computing convergence',
      icon: '⚛️',
      link: '/quantum-ai-breakthrough',
      new: true,
      featured: false
    }
  ];

  const menuItems = [
    {
      title: 'Home',
      link: '/',
      dropdown: null
    },
    {
      title: 'New Content',
      link: '#',
      dropdown: 'content',
      new: true
    },
    {
      title: 'Services',
      link: '/services',
      dropdown: 'services'
    },
    {
      title: 'Resources',
      link: '/resources',
      dropdown: 'resources'
    },
    {
      title: 'Case Studies',
      link: '/case-studies',
      dropdown: 'cases'
    },
    {
      title: 'Contact',
      link: '/contact',
      dropdown: null
    }
  ];

  const servicesItems = [
    { title: 'AI Consulting', link: '/services/ai-consulting' },
    { title: 'Cloud Infrastructure', link: '/services/cloud-infrastructure' },
    { title: 'Micro SaaS Development', link: '/services/micro-saas' },
    { title: 'Technology Implementation', link: '/services/implementation' }
  ];

  const resourcesItems = [
    { title: 'AI Resources 2026', link: '/ai-resources-2025' },
    { title: 'Technology Showcase', link: '/ai-tools-showcase' },
    { title: 'Implementation Guides', link: '/resources/guides' },
    { title: 'Best Practices', link: '/resources/best-practices' }
  ];

  const caseStudiesItems = [
    { title: 'Manufacturing Success', link: '/case-studies/manufacturing' },
    { title: 'Healthcare Innovation', link: '/case-studies/healthcare' },
    { title: 'Financial Services', link: '/case-studies/financial' },
    { title: 'E-commerce Transformation', link: '/case-studies/ecommerce' }
  ];

  const renderDropdown = (type: string) => {
    switch (type) {
      case 'content':
        return (
          <div className="absolute top-full left-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                New Content 2026
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2 p-4">
              {newContentItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="text-2xl mr-3">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      {item.new && <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">New</Badge>}
                      {item.featured && <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>}
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-gray-100">
              <Button asChild variant="outline" className="w-full">
                <Link href="/ultimate-content-showcase-2026">
                  <Zap className="w-4 h-4 mr-2" />
                  View All New Content
                </Link>
              </Button>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
            {servicesItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-50 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        );
      case 'resources':
        return (
          <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
            {resourcesItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-50 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        );
      case 'cases':
        return (
          <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
            {caseStudiesItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-50 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
            <Badge variant="secondary" className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs">
              <Zap className="w-3 h-3 mr-1" />
              2026
            </Badge>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors ${
                    item.dropdown ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown)}
                >
                  <span className="font-medium">{item.title}</span>
                  {item.new && (
                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                      New
                    </Badge>
                  )}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                {activeDropdown === item.dropdown && renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/ultimate-content-showcase-2026">
                <Star className="w-4 h-4 mr-2" />
                New Content
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.link}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.title}</span>
                      {item.new && (
                        <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                  </Link>
                  {item.dropdown === 'content' && (
                    <div className="ml-4 space-y-1">
                      {newContentItems.map((content, contentIndex) => (
                        <Link
                          key={contentIndex}
                          href={content.link}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center gap-2">
                            <span>{content.icon}</span>
                            <span>{content.title}</span>
                            {content.new && <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">New</Badge>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                <Link href="/ultimate-content-showcase-2026">
                  <Star className="w-4 h-4 mr-2" />
                  New Content
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigationWithContent;