import React, { useState } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  Building,
  Users,
  ShoppingCart,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Search,
} from "lucide-react";
import SearchModal from "./SearchModal";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const services = [
    {
      name: "AI Services",
      href: "/ai-services",
      description: "Machine Learning, NLP, Computer Vision",
      icon: BarChart3
    },
    {
      name: "IT Services",
      href: "/it-services",
      description: "Cloud, DevOps, Cybersecurity",
      icon: Shield
    },
    {
      name: "Micro SaaS",
      href: "/micro-saas",
      description: "Custom SaaS Solutions",
      icon: Zap,
    },
    {
      name: "Quantum Computing",
      href: "/quantum-computing",
      description: "Quantum Algorithms & Solutions",
      icon: Globe,
    },
    {
      name: "Blockchain",
      href: "/blockchain",
      description: "Smart Contracts & DApps",
      icon: Building,
    }
  ];

  const solutions = [
    {
      name: "AI Calculator",
      href: "/ai-calculator",
      description: "Calculate AI implementation costs"
    },
    {
      name: "Case Studies",
      href: "/case-studies",
      description: "Success stories and implementations"
    },
    {
      name: "Consulting",
      href: "/consulting",
      description: "Expert guidance and strategy"
    }
  ];

  const industries = [
    { name: "Healthcare", href: "/healthcare" },
    { name: "Finance", href: "/finance" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Retail", href: "/retail" },
    { name: "Education", href: "/education" }
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Support", href: "/support" }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-4">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50"
                          >
                            <service.icon className="h-6 w-6 text-purple-600 mt-1 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
                    <div className="p-4">
                      {solutions.map((solution) => (
                        <a
                          key={solution.name}
                          href={solution.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <div className="font-medium">{solution.name}</div>
                          <div className="text-xs text-gray-500">{solution.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isIndustriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="p-2">
                      {industries.map((industry) => (
                        <a
                          key={industry.name}
                          href={industry.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {industry.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="p-2">
                      {resources.map((resource) => (
                        <a
                          key={resource.name}
                          href={resource.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {resource.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-purple-600 p-2 rounded-md"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* CTA Button */}
              <a
                href="/contact"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 p-2 rounded-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a
                href="/services"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="/solutions"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Solutions
              </a>
              <a
                href="/industries"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Industries
              </a>
              <a
                href="/resources"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Resources
              </a>
              <a
                href="/contact"
                className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}
    </nav>
  );
}