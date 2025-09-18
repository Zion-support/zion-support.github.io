import React from 'react';

const Navigation: React.FC = () => {
  return (
<<<<<<< HEAD
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-lg">Z</span>;
            </div>;
            <span className="text-white text-xl font-bold">Zion Tech Group</span>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">;
            {navigation.map((item) => (<div key={item.name} className="relative">;
                {item.dropdown ? (<div className="relative">;
                    <button;
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-300 hover:text-white transition-colors";
                    >;
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />;
                    </button>;
                    <AnimatePresence>;
                      {activeDropdown === item.name && (<motion.div;
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50";
                        >;
                          {item.dropdown.map((dropdownItem) => (<Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors";
                              onClick={() => setActiveDropdown(null)}
                            >;
                              {dropdownItem.name}
                            </Link>;
                          ))}
                        </motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ) : (<Link;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {item.name}
                  </Link>;
                )}
              </div>;
            ))}
          </div>;
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">;
            <Link;
              href="/contact";
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors";
            >;
              Get Started;
              <ArrowRight className="ml-2 h-4 w-4" />;
            </Link>;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors";
            >;
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>;
          </div>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isOpen && (<motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800";
            >;
              <div className="py-4 space-y-2">;
                {navigation.map((item) => (<div key={item.name}>;
                    {item.dropdown ? (<div>;
                        <button;
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-300 hover:text-white transition-colors";
                        >;
                          {item.name}
                          <ChevronDown className="h-4 w-4" />;
                        </button>;
                        {activeDropdown === item.name && (<div className="pl-4 space-y-1">;
                            {item.dropdown.map((dropdownItem) => (<Link;
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-400 hover:text-white transition-colors";
                                onClick={() => {setIsOpen(false)setActiveDropdown(null)}}
                              >;
                                {dropdownItem.name}
                              </Link>;
                            ))}
                          </div>;
                        )}
                      </div>;
                    ) : (<Link;
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white transition-colors";
                        onClick={() => setIsOpen(false)}
                      >;
                        {item.name}
                      </Link>;
                    )}
                  </div>;
                ))}
                <div className="pt-4 border-t border-gray-800">;
                  <Link;
                    href="/contact";
                    className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors";
                    onClick={() => setIsOpen(false)}
                  >;
                    Get Started;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </nav>;
  )}export default Navigation;
import { motion, AnimatePresence  } from 'framer-motion';
origin/automation-improvements-final;
  Menu;
  X;
  ChevronDown;
  ChevronRight;
  Phone;
  Mail;
  MapPin;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  Github;
  ArrowRight;
  Building;
  Users;
  ShoppingCart;
  Shield;
  Zap;
  Globe;
  BarChart3;
  Search;
} from "lucide-react";
import SearchModal from './SearchModal';
export default function Navigation() {export default function Navigation() {export default function Navigation() {const [isMenuOpen, setIsMenuOpen] = useState(false)const [isServicesOpen, setIsServicesOpen] = useState(false)const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)const [isResourcesOpen, setIsResourcesOpen] = useState(false)const [isSearchOpen, setIsSearchOpen] = useState(false){name: "Blockchain";
      href: "/blockchain";
      description: "Smart Contracts, DeFi, NFTs";
      icon: Building;
    }
    {name: "IoT Solutions";
      href: "/iot";
      description: "Connected Devices, Edge Computing";
      icon: Globe;
    }
    {name: "Cybersecurity";
      href: "/cybersecurity";
      description: "Security Audits, Compliance";
      icon: Shield;
    }
  ];
    {name: "Startup Solutions";
      href: "/startup";
      description: "Scalable startup platforms";
      icon: Zap;
    }
    {{name: "Training";
      href: "/training";
      description: "Professional development";
    }
    {name: "Events";
      href: "/events";
      description: "Webinars and conferences";
    }
    { name: "News", href: "/news", description: "Industry news and updates" }
  ];
  return (<>;
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
origin/automation-improvements-final




  Menu
  X
  ChevronDown
  ChevronRight
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  Github
  ArrowRight
  Building
  Users
  ShoppingCart
  Shield
  Zap
  Globe
  BarChart3
  Search
} from "lucide-react";
import SearchModal from "./SearchModal";

export default function Navigation() {
export default function Navigation() {;
export default function Navigation() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
    {
      name: "Blockchain"
      href: "/blockchain"
      description: "Smart Contracts, DeFi, NFTs"
      icon: Building
    }
    {
      name: "IoT Solutions"
      href: "/iot"
      description: "Connected Devices, Edge Computing"
      icon: Globe
    }
    {
      name: "Cybersecurity"
      href: "/cybersecurity"
      description: "Security Audits, Compliance"
      icon: Shield
    }
  ];
    {
      name: "Startup Solutions"
      href: "/startup"
      description: "Scalable startup platforms"
      icon: Zap
    }
    {
    {
      name: "Training"
      href: "/training"
      description: "Professional development"
    }
    {
      name: "Events"
      href: "/events"
      description: "Webinars and conferences"
    }
    { name: "News", href: "/news", description: "Industry news and updates" }
  ];
  return (
    <>;
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">;
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <a href="tel:+13024640950" className="hover:text-blue-300">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <a;
                <a
                </a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">;
        <div className="container mx-auto px-4">;
          <div className="flex justify-between items-center py-4">;
            {/* Logo */}
                  Technology Solutions;
                </div>;
              </div>;
            </Link>;
              {/* Services Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors";
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >;
                  Services;
                  <ChevronDown className="w-4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isServicesOpen && (<motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4";
                  {isServicesOpen && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >;
                      <div className="grid grid-cols-2 gap-4 px-6">;
                        {services && services.map((service, index) => {const IconComponent = service && service.icon;
                        {services && services.map((service, index) => {;
                          const IconComponent = service && service.icon;
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items - center space - x-8">;
              <Link;
                href="/";
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
              >;
                Home;
              </Link>;
              {/* Services Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}
                >;
                  Services;
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;
                </button>;
                <AnimatePresence>;
                  {isServicesOpen && (<motion.div;
                  {isServicesOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";
                      onMouseEnter={() => setIsServicesOpen (true)}
                      onMouseLeave={() => setIsServicesOpen (false)}
                    >;
                      <div className="grid grid - cols - 2 gap - 4 px - 6">;
                        {services.map ((service, index) => {const IconComponent = service.icon;
                          return (<Link;
                              key={index}
              {/* Solutions Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors";
                        {services.map ((service, index) => {
                          const IconComponent = service.icon;
                          return (
                            <Link;
                              key={index}
              {/* Solutions Dropdown */}
              <div className="relative group">;
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >;
                  Solutions;
                  <ChevronDown className="w-4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isSolutionsOpen && (<motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4";
                  {isSolutionsOpen && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsSolutionsOpen(true)}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                    >;
                      <div className="grid grid-cols-2 gap-4 px-6">;
                        {solutions && solutions.map((solution, index) => {const IconComponent = solution && solution.icon;
                        {solutions && solutions.map((solution, index) => {;
                          const IconComponent = solution && solution.icon;
                              href={service.href}
                              className="p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";
                            >;
                              <div className="flex items - center mb - 2">;
                                <IconComponent className="w - 5 h - 5 text - blue - 600 mr - 2" />;
                                <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;
                                  {service.name}
                                </div>;
                              </div>;
                              <div className="text - sm text - gray - 500">;
                                {service.description}
                              </div>;
                            </Link>)})}
                            </Link>);
                        })}
                      </div>;
                      <div className="border - t border - gray - 200 mt - 4 pt - 4 px - 6">;
                        <Link;
                          href="/services";
                          className="flex items - center text - blue - 600 hover:text - blue - 700 font - medium";
                        >;
                          View All Services;
                          <ArrowRight className="w - 4 h - 4 ml - 2" />;
                        </Link>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>;
              {/* Solutions Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
                  onMouseEnter={() => setIsSolutionsOpen (true)}
                  onMouseLeave={() => setIsSolutionsOpen (false)}
                >;
                  Solutions;
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;
                </button>;
                <AnimatePresence>;
                  {isSolutionsOpen && (<motion.div;
                  {isSolutionsOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";
                      onMouseEnter={() => setIsSolutionsOpen (true)}
                      onMouseLeave={() => setIsSolutionsOpen (false)}
                    >;
                      <div className="grid grid - cols - 2 gap - 4 px - 6">;
                        {solutions.map ((solution, index) => {const IconComponent = solution.icon;
                          return (<Link;
                              key={index}
              {/* Industries Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors";
                        {solutions.map ((solution, index) => {
                          const IconComponent = solution.icon;
                          return (
                            <Link;
                              key={index}
              {/* Industries Dropdown */}
              <div className="relative group">;
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >;
                  Industries;
                  <ChevronDown className="w-4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isIndustriesOpen && (<motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4";
                  {isIndustriesOpen && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsIndustriesOpen(true)}
                      onMouseLeave={() => setIsIndustriesOpen(false)}
                    >;
                      <div className="px-6">;
                        {industries && industries.map((industry, index) => (<Link;
                        {industries && industries.map((industry, index) => (;
                          <Link
                            key={index}
                            href={industry && industry.href}
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group">;
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">;
                              {industry && industry.name}
                            </div>;
                            <div className="text-sm text-gray-500">;
                              {industry && industry.description}
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </motion && motion.div>;
                  )}
              {/* Resources Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors";
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >;
                  Resources;
                  <ChevronDown className="w-4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isResourcesOpen && (<motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4";
                  {isResourcesOpen && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >;
                      <div className="px-6">;
                        {resources && resources.map((resource, index) => (<Link;
                        {resources && resources.map((resource, index) => (;
                          <Link
                            key={index}
                            href={resource && resource.href}
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group">;
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">;
                              {resource && resource.name}
                            </div>;
                            <div className="text-sm text-gray-500">;
                              {resource && resource.description}
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </motion && motion.div>;
                  )}</AnimatePresence>;
              </div>;<Link;
                href="/pricing";
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                Pricing;
              </Link>;
            </div>;{/* Search and CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;
              <button;
                onClick={() => setIsSearchOpen(true)}
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;
              <Link;
                href=/contact";
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors;
              >;
                Get Started;
              </Link>;
              <a;
                href="tel:+13024640950";
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors";
              >;
                Call Now;
              </a>;
            </div>;
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">;
                Get Started;
              </Link>;
              <a;
                href="tel:+13024640950";
                  )}


                </AnimatePresence>;
              </div>;

              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;
                Pricing;
              </Link>;
            </div>;

            {/* Search and CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;
              <button
                onClick={() => setIsSearchOpen(true)}
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href=/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors
              >
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">;
                Get Started;
              </Link>;
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors">;
                Call Now;
              </a>;
            </div>;
            {/* Mobile Menu Button */}
            <button;
              className="lg:hidden p-2";
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >;
              {isMenuOpen ? (<X className="w-6 h-6" />;
              ) : (<Menu className="w-6 h-6" />;
              )}
          {/* Mobile Menu */}
          <AnimatePresence>;
            {isMenuOpen && (<motion&& motion.div;
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >;
              {isMenuOpen ? (;
                <X className="w-6 h-6" />;
              ) : (;
                <Menu className="w-6 h-6" />;
              )}
          {/* Mobile Menu */}
          <AnimatePresence>;
            {isMenuOpen && (;
              <motion&& motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-200">;
                <div className="py-4 space-y-2">;
                  <Link;
                    href="/";
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg";
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  {/* Mobile Services */}
                  <div className="px-4 py-2">;
                    <div className="font-medium text-gray-900 mb-2">;
                      Services;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {services && services.map((service, index) => (<Link;
                          key={index}
                          href={service && service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600";
                      {services && services.map((service, index) => (;
                        <Link
                          key={index}
                          href={service && service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          {service && service.name}
                        </Link>;
                      ))}
                  {/* Mobile Solutions */}
                  <div className="px-4 py-2">;
                    <div className="font-medium text-gray-900 mb-2">;
                      Solutions;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {solutions && solutions.map((solution, index) => (<Link;
                          key={index}
                          href={solution && solution.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600";
                      {solutions && solutions.map((solution, index) => (;
                        <Link
                          key={index}
                          href={solution && solution.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          {solution && solution.name}
                        </Link>;
                      ))}
                  {/* Mobile Industries */}
                  <div className="px-4 py-2">;
                    <div className="font-medium text-gray-900 mb-2">;
                      Industries;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {industries && industries.map((industry, index) => (<Link;
                          key={index}
                          href={industry && industry.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600";
                      {industries && industries.map((industry, index) => (;
                        <Link
                          key={index}
                          href={industry && industry.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          {industry && industry.name}
                        </Link>;
                      ))}
                  {/* Mobile Resources */}
                  <div className="px-4 py-2">;
                    <div className="font-medium text-gray-900 mb-2">;
                      Resources;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {resources && resources.map((resource, index) => (<Link;
                          key={index}
                          href={resource && resource.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600";
                      {resources && resources.map((resource, index) => (;
                        <Link
                          key={index}
                          href={resource && resource.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          {resource && resource.name}
                        </Link>;
                      ))}
                  <Link;
                    href="/pricing";
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg";
                    onClick={() => setIsMenuOpen(false)}
                    <Link;
                      href="/contact";
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center";
                  <Link
                    href="/pricing"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    <Link
                      href="/contact"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >;
                      Get Started;
                    </Link>;
                    <a;
                      href="tel:+13024640950";
                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center";
                    <a
                      href="tel:+13024640950"
                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                              href={solution.href}
                              className="p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";
                            >;
                              <div className="flex items - center mb - 2">;
                                <IconComponent className="w - 5 h - 5 text - blue - 600 mr - 2" />;
                                <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;
                                  {solution.name}
                                </div>;
                              </div>;
                              <div className="text - sm text - gray - 500">;
                                {solution.description}
                              </div>;
                            </Link>)})}
                            </Link>);
                        })}
                      </div>;
                      <div className="border - t border - gray - 200 mt - 4 pt - 4 px - 6">;
                        <Link;
                          href="/solutions";
                          className="flex items - center text - blue - 600 hover:text - blue - 700 font - medium";
                        >;
                          View All Solutions;
                          <ArrowRight className="w - 4 h - 4 ml - 2" />;
                        </Link>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>;
              {/* Industries Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
                  onMouseEnter={() => setIsIndustriesOpen (true)}
                  onMouseLeave={() => setIsIndustriesOpen (false)}
                >;
                  Industries;
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;
                </button>;
                <AnimatePresence>;
                  {isIndustriesOpen && (<motion.div;
                  {isIndustriesOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";
                      onMouseEnter={() => setIsIndustriesOpen (true)}
                      onMouseLeave={() => setIsIndustriesOpen (false)}
                    >;
                      <div className="px - 6">;
                        {industries.map ((industry, index) => (<Link;
                        {industries.map ((industry, index) => (
                          <Link;
                            key={index}
                            href={industry.href}
                            className="block p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";
                          >;
                            <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;
                              {industry.name}
                            </div>;
                            <div className="text - sm text - gray - 500">;
                              {industry.description}
                            </div>;
                          </Link>))}
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>;
              {/* Resources Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
                  onMouseEnter={() => setIsResourcesOpen (true)}
                  onMouseLeave={() => setIsResourcesOpen (false)}
                >;
                  Resources;
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;
                </button>;
                <AnimatePresence>;
                  {isResourcesOpen && (<motion.div;
                  {isResourcesOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";
                      onMouseEnter={() => setIsResourcesOpen (true)}
                      onMouseLeave={() => setIsResourcesOpen (false)}
                    >;
                      <div className="px - 6">;
                        {resources.map ((resource, index) => (<Link;
                        {resources.map ((resource, index) => (
                          <Link;
                            key={index}
                            href={resource.href}
                            className="block p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";
                          >;
                            <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;
                              {resource.name}
                            </div>;
                            <div className="text - sm text - gray - 500">;
                              {resource.description}
                            </div>;
                          </Link>))}
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>;
              <Link;
                href="/pricing";
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";
              >;
                Pricing;
              </Link>;
            </div>;
            {/* Search and CTA Buttons */}
            <div className="hidden lg:flex items - center space - x-4">;
              <button;
                on_click={() => setIsSearchOpen (true)}
                className="p - 2 text - gray - 700 hover:text - blue - 600 transition - colors";
                aria - label="Search";
              >;
                <Search className="w - 5 h - 5" />;
              </button>;
              <Link;
                href="/contact";
                className="bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 2 rounded - lg font - medium transition - colors";
              >;
                Get Started;
              </Link>;
              <a;
                href="tel:+13024640950";
                className="bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 6 py - 2 rounded - lg font - medium transition - colors";
              >;
                Call Now;
              </a>;
            </div>;
            {/* Mobile Menu Button */}
            <button;
              className="lg:hidden p - 2";
              on_click={() => setIsMenuOpen (!isMenuOpen)}
            >;
              {isMenuOpen ? (<X className="w - 6 h - 6" />) : (<Menu className="w - 6 h - 6" />)}
              {isMenuOpen ? (
                <X className="w - 6 h - 6" />) : (
                <Menu className="w - 6 h - 6" />)}
            </button>;
          </div>;
          {/* Mobile Menu */}
          <AnimatePresence>;
            {isMenuOpen && (<motion.div;
            {isMenuOpen && (
              <motion.div;
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border - t border - gray - 200";
              >;
                <div className="py - 4 space - y-2">;
                  <Link;
                    href="/";
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 rounded - lg";
                    on_click={() => setIsMenuOpen (false)}
                  >;
                    Home;
                  </Link>;
                  {/* Mobile Services */}
                  <div className="px - 4 py - 2">;
                    <div className="font - medium text - gray - 900 mb - 2">;
                      Services;
                    </div>;
                    <div className="space - y-1 ml - 4">;
                      {services.map ((service, index) => (<Link;
                      {services.map ((service, index) => (
                        <Link;
                          key={index}
                          href={service.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";
                          on_click={() => setIsMenuOpen (false)}
                        >;
                          {service.name}
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Mobile Solutions */}
                  <div className="px - 4 py - 2">;
                    <div className="font - medium text - gray - 900 mb - 2">;
                      Solutions;
                    </div>;
                    <div className="space - y-1 ml - 4">;
                      {solutions.map ((solution, index) => (<Link;
                      {solutions.map ((solution, index) => (
                        <Link;
                          key={index}
                          href={solution.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";
                          on_click={() => setIsMenuOpen (false)}
                        >;
                          {solution.name}
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Mobile Industries */}
                  <div className="px - 4 py - 2">;
                    <div className="font - medium text - gray - 900 mb - 2">;
                      Industries;
                    </div>;
                    <div className="space - y-1 ml - 4">;
                      {industries.map ((industry, index) => (<Link;
                      {industries.map ((industry, index) => (
                        <Link;
                          key={index}
                          href={industry.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";
                          on_click={() => setIsMenuOpen (false)}
                        >;
                          {industry.name}
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Mobile Resources */}
                  <div className="px - 4 py - 2">;
                    <div className="font - medium text - gray - 900 mb - 2">;
                      Resources;
                    </div>;
                    <div className="space - y-1 ml - 4">;
                      {resources.map ((resource, index) => (<Link;
                      {resources.map ((resource, index) => (
                        <Link;
                          key={index}
                          href={resource.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";
                          on_click={() => setIsMenuOpen (false)}
                        >;
                          {resource.name}
                        </Link>))}
                    </div>;
                  </div>;
                  <Link;
                    href="/pricing";
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 rounded - lg";
                    on_click={() => setIsMenuOpen (false)}
                  >;
                    Pricing;
                  </Link>;
                  <div className="px - 4 py - 2 space - y-2">;
                    <Link;
                      href="/contact";
                      className="block bg - blue - 600 hover:bg - blue - 700 text - white px - 4 py - 2 rounded - lg font - medium text - center";
                      on_click={() => setIsMenuOpen (false)}
                    >;
                      Get Started;
                    </Link>;
                    <a;
                      href="tel:+13024640950";
                      className="block bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 4 py - 2 rounded - lg font - medium text - center";
                      on_click={() => setIsMenuOpen (false)}
                    >;
                      Call Now;
                    </a>;
                  </div>;
                </div>;
      {/* Search Modal */}
      <SearchModal;
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />;
    </>;
  )</motion.div>)}
  );
              </motion.div>)}
          </AnimatePresence>;
        </div>;
      </nav>;
      {/* Search Modal */}
      <SearchModal;
        is_open={isSearchOpen}
        on_close={() => setIsSearchOpen (false)}
      />;
    </>)}
ursor/automate-test-improve-and-merge-code-646c;
  Menu,X;
  Menu,X;
  Menu,X;
} from 'lucide-react';const Navigation = () => {const [isOpen, setIsOpen] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)];const [mobileMenuOpen, setMobileMenuOpen]  = useState(false)return (<header className="bg-white shadow-sm">;
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">;
        <div className="flex lg:flex-1">;
          <a href="/" className="-m-1.5 p-1.5">;
            <span className="sr-only">Zion Tech Group</span>;
            <div className="h-8 w-auto text-2xl font-bold text-blue-600">;
              Zion Tech;
            </div>;
          </a>;
        </div>;
        <div className="flex lg:hidden">;
          <button;
            type="button";
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700";
            onClick={() => setMobileMenuOpen(true)}
          >;
            <span className="sr-only">Open main menu</span>;
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />;
          </button>;
        </div>;
        <div className="hidden lg:flex lg:gap-x-12">;
          {navigation.map((item) => (<a;
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600";
            >;
              {item.name}
            </a>;
          ))}
        </div>;
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">;
          <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">;
            Get Started <span aria-hidden="true">&rarr;</span>;
          </a>;
        </div>;
      </nav>;
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>;
        <div className="fixed inset-0 z-10" />;
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">;
          <div className="flex items-center justify-between">;
            <a href="/" className="-m-1.5 p-1.5">;
              <span className="sr-only">Zion Tech Group</span>;
              <div className="h-8 w-auto text-2xl font-bold text-blue-600">;
                Zion Tech;
              </div>;
            </a>;
            <button;
              type="button";
              className="-m-2.5 rounded-md p-2.5 text-gray-700";
              onClick={() => setMobileMenuOpen(false)}
            >;
              <span className="sr-only">Close menu</span>;
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />;
            </button>;
          </div>;
          <div className="mt-6 flow-root">;
            <div className="-my-6 divide-y divide-gray-500/10">;
              <div className="space-y-2 py-6">;
                {navigation.map((item) => (<a;
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50";
                  >;
                    {item.name}
                  </a>;
                ))}
              </div>;
              <div className="py-6">;
                <a;
                  href="/contact";
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50";
                >;
                  Get Started;
                </a>;
              </div>;
            </div>;
          </div>;
        </Dialog.Panel>;
      </Dialog>;
    </header>;
  )}
            </motion.div>;
          )}
        </AnimatePresence>;
      </div>;
const Navigation: React.FC = () => {const [isMenuOpen, setIsMenuOpen]  = useState(false)const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)}return (<nav className="bg-white shadow-lg">;
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
        <div className="flex justify-between h-16">;
          <div className="flex items-center">;
            <Link href="/" className="flex-shrink-0">;
              <span className="text-2xl font-bold text-blue-600">;
                Zion Tech;
              </span>;
            </Link>;
          </div>;
          <div className="hidden md:flex items-center space-x-8">;
            <Link;
              href="/";
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";
            >;
              Home;
            </Link>;
            <Link;
              href="/about";
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";
            >;
              About;
            </Link>;
            <Link;
              href="/services";
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";
            >;
              Services;
            </Link>;
            <Link;
              href="/contact";
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";
            >;
              Contact;
            </Link>;
          </div>;
          <div className="md:hidden flex items-center">;
            <button;
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600";
            >;
              <svg;
                className="h-6 w-6";
                fill="none";
                viewBox="0 0 24 24";
                stroke="currentColor";
              >;
                {isMenuOpen ? (<path;
                    strokeLinecap="round";
                    strokeLinejoin="round";
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12";
                  />;
                ) : (<path;
                    strokeLinecap="round";
                    strokeLinejoin="round";
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16";
                  />;
                )}
              </svg>;
            </button>;
          </div>;
        </div>;
      </div>;
      {isMenuOpen && (<div className="md: hidden">;
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">;
            <Link;
              href="/";
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium";
            >;
              Home;
            </Link>;
            <Link;
              href="/about";
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium";
            >;
              About;
            </Link>;
            <Link;
              href="/services";
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium";
            >;
              Services;
            </Link>;
            <Link;
              href="/contact";
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium";
            >;
              Contact;
            </Link>;
          </div>;
        </div>;
      )}</nav>;
  )}export default Navigation;ursor/automate-test-improve-and-merge-code-646c;
    </>);
}
  Menu, 
  X 
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  ];


  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-400 hover:text-white transition-colors"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-800">
                  <Link
                    href="/contact"
                    className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
=======
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Navigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  );
};

export default Navigation;
