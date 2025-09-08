



import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {






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

            <Link href="/" className="flex items - center space - x-2">;
              <div className="w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center">;
                <span className="text - white font - bold text - xl">Z</span>;
              </div>;
              <div>;
                <div className="text - xl font - bold text - gray - 900">;
                  Zion Tech Group;
                </div>;
                <div className="text - xs text - gray - 500">;

                  Technology Solutions;
                </div>;
              </div>;
            </Link>;


              {/* Services Dropdown */}
              <div className="relative group">;
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >;
                  Services;
                  <ChevronDown className="w-4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
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
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >;
                  Resources;
                  <ChevronDown className="w-4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
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
                  )}



            {/* Search and CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;
              <button
                onClick={() => setIsSearchOpen(true)}

                className="p-2 text-gray-700 hover:text-blue-600 transition-colors";
                aria-label="Search";
              >;
                <Search className="w-5 h-5" />;
              </button>;
              <Link
                href="/contact"


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
              {isMenuOpen ? (
                <X className="w - 6 h - 6" />) : (
                <Menu className="w - 6 h - 6" />)}
            </button>;
          </div>;
          {/* Mobile Menu */}
          <AnimatePresence>;
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
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />;
    </>;
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
    </>);

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"    />
            </motion.button>
          </div>




        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100 ${
                      scrolled ? 'text-gray-700' : 'text-white hover:bg-white/10'
                    }`}
                    variants={mobileItemVariants}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group mt-4"
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"    />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};




