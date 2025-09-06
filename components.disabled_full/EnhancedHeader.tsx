import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
=======
<<<<<<< HEAD
=======
import { useRouter } from 'next/router';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import { useRouter } from 'next/router';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function EnhancedHeader() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
  const handleSearch = async (e: React.FormEvent) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleSearch = async (e: React.FormEvent) => {
  const handleSearch = async (e: React.FormEvent) => {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  const handleSearch = async ("e": React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
ursor/fix-syntax-push-and-merge-to-main-40de
  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
  const navigation = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Cloud Services', href: '/services/cloud-services' },
        { name: 'AI Development', href: '/services/ai-development' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
        { name: 'Customer Support', href: '/solutions/customer-support' },
        { name: 'Email Automation', href: '/solutions/email-automation' },
        { name: 'Event Management', href: '/solutions/event-management' },
        { name: 'Project Management', href: '/solutions/project-management' },
        { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  const toggleDropdown = ("itemName": string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
  const navigation = [{
      "name": 'Services',
      "href": '/services',
      "dropdown": [
        { name: 'IT Services', "href": '/services/it-services' },
        { "name": 'Micro SaaS', "href": '/services/micro-saas' },
        { "name": 'Web Development', "href": '/services/web-development' },
        { "name": 'Cloud Services', "href": '/services/cloud-services' },
        { "name": 'AI Development', "href": '/services/ai-development' },
      ]},
    {
      "name": 'Solutions',
      "href": '/solutions',
      "dropdown": [{ name: 'AI Content Creation', "href": '/solutions/ai-content-creation' },
        { "name": 'Customer Support', "href": '/solutions/customer-support' },
        { "name": 'Email Automation', "href": '/solutions/email-automation' },
        { "name": 'Event Management', "href": '/solutions/event-management' },
        { "name": 'Project Management', "href": '/solutions/project-management' },
        { "name": 'Workflow Automation', "href": '/solutions/workflow-automation' },
      ]},
    { "name": 'About', "href": '/about' },
    { "name": 'Blog', "href": '/blog' },
    { "name": 'Contact', "href": '/contact' },
  ];
<<<<<<< HEAD
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
    >
      {' '}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
  
    >
      {' '}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
        {' '}
        <div className="flex justify-between items-center h-16">
          {' '}
          {}{' '}
          <div className="flex items-center">
            {' '}
            <a href="/" className="flex items-center space-x-2">
              {' '}
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                {' '}
                <span className="text-white font-bold text-sm">Z</span>{' '}
              </div>{' '}
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>{' '}
            </a>{' '}
          </div>{' '}
          {}{' '}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
          <nav className="hidden md:flex items-center space-x-8">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <nav className="hidden md:flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          <nav className="hidden "md": flex items-center space-x-8">
            {' '}
            {navigation.map(item => (
              <div key={item.name} className="relative">
                {' '}
                {item.dropdown ? (
                  <div className="relative">
                    {' '}
                    <button
                      onClick={() => toggleDropdown(item.name)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                      className="flex items-center space-x-1 text-gray-700 "hover": text-blue-600 transition-colors duration-200"
                    >
                      {' '}
                      <span>{item.name}</span>{' '}
                      <ChevronDown className="h-4 w-4" />{' '}
                    </button>{' '}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {' '}
                        {item.dropdown.map(dropdownItem => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                            className="block px-4 py-2 text-gray-700 "hover": bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {' '}
                            {dropdownItem.name}{' '}
                          </a>
                        ))}{' '}
                      </div>
                    )}{' '}
                  </div>
                ) : (
                  <a
                    href={item.href}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                    className="text-gray-700 "hover": text-blue-600 transition-colors duration-200"
                  >
                    {' '}
                    {item.name}{' '}
                  </a>
                )}{' '}
              </div>
            ))}{' '}
          </nav>{' '}
          {}{' '}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
          <div className="hidden md:flex items-center space-x-4">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="hidden md:flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          <div className="hidden "md": flex items-center space-x-4">
            {' '}
            {}{' '}
            <form onSubmit={handleSearch} className="relative">
              {' '}
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />{' '}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '}
            </form>{' '}
            {}{' '}
            <div className="flex items-center space-x-2">
              {' '}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
ursor/fix-syntax-push-and-merge-to-main-40de
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {' '}
                <User className="h-5 w-5" />{' '}
              </button>{' '}
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
              <button className="p-2 text-gray-700 "hover": text-blue-600 transition-colors duration-200">
                {' '}
                <User className="h-5 w-5" />{' '}
              </button>{' '}
              <button className="p-2 text-gray-700 "hover": text-blue-600 transition-colors duration-200">
                {' '}
                <ShoppingCart className="h-5 w-5" />{' '}
              </button>{' '}
            </div>{' '}
          </div>{' '}
          {}{' '}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
ursor/fix-syntax-push-and-merge-to-main-40de
          <div className="md:hidden">
            {' '}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          <div className=""md": hidden">
            {' '}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 "hover": text-blue-600 transition-colors duration-200"
            >
              {' '}
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}{' '}
            </button>{' '}
          </div>{' '}
        </div>{' '}
        {}{' '}
        {mobileMenuOpen && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
          <div className="md:hidden">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="md:hidden">
          <div className="md:hidden">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          <div className=""md": hidden">
            {' '}
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {' '}
              {navigation.map(item => (
                <div key={item.name}>
                  {' '}
                  {item.dropdown ? (
                    <div>
                      {' '}
                      <button
                        onClick={() => toggleDropdown(item.name)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 "hover": text-blue-600 transition-colors duration-200"
                      >
                        {' '}
                        <span>{item.name}</span>{' '}
                        <ChevronDown className="h-4 w-4" />{' '}
                      </button>{' '}
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {' '}
                          {item.dropdown.map(dropdownItem => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                              className="block px-3 py-2 text-gray-600 "hover": text-blue-600 transition-colors duration-200"
                            >
                              {' '}
                              {dropdownItem.name}{' '}
                            </a>
                          ))}{' '}
                        </div>
                      )}{' '}
                    </div>
                  ) : (
                    <a
                      href={item.href}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                      className="block px-3 py-2 text-gray-700 "hover": text-blue-600 transition-colors duration-200"
                    >
                      {' '}
                      {item.name}{' '}
                    </a>
                  )}{' '}
                </div>
              ))}{' '}
              {}{' '}
              <form onSubmit={handleSearch} className="px-3 py-2">
                {' '}
                <div className="relative">
                  {' '}
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />{' '}
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '}
                </div>{' '}
              </form>{' '}
            </div>{' '}
          </div>
        )}{' '}
      </div>{' '}
    </header>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/navigation'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}

import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
}

origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/router'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
import React,{ useState,useEffect } from 'react'; import { useRouter } from 'next/navigation'; import { Menu,X,Search,User,ShoppingCart,ChevronDown } from 'lucide-react'; export default function EnhancedHeader() { const router = useRouter(); const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(); const [scrolled,setScrolled] = useState(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} }; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; const navigation = [ { name: 'Services',href: '/services',dropdown: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],},{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],},{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },]; return ( <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} > {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {' '} <div className="flex justify-between items-center h-16"> {' '} {}{' '} <div className="flex items-center"> {' '} <a href="/" className="flex items-center space-x-2"> {' '} <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-sm">Z</span>{' '} </div>{' '} <span className="text-xl font-bold text-gray-900"> {' '} Zion Tech Group{' '} </span>{' '} </a>{' '} </div>{' '} {}{' '} <nav className="hidden md:flex items-center space-x-8"> {' '} {navigation.map(item => ( <div key={item.name} className="relative"> {' '} {item.dropdown ? ( <div className="relative"> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} </nav>{' '} {}{' '} <div className="hidden md:flex items-center space-x-4"> {' '} {}{' '} <form onSubmit={handleSearch} className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </form>{' '} {}{' '} <div className="flex items-center space-x-2"> {' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <User className="h-5 w-5" />{' '} </button>{' '} <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"> {' '} <ShoppingCart className="h-5 w-5" />{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} <div className="md:hidden"> {' '} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {mobileMenuOpen ? ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )}{' '} </button>{' '} </div>{' '} </div>{' '} {}{' '} {mobileMenuOpen && ( <div className="md:hidden"> {' '} <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"> {' '} {navigation.map(item => ( <div key={item.name}> {' '} {item.dropdown ? ( <div> {' '} <button onClick={() => toggleDropdown(item.name)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} <span>{item.name}</span>{' '} <ChevronDown className="h-4 w-4" />{' '} </button>{' '} {activeDropdown === item.name && ( <div className="pl-4 space-y-1"> {' '} {item.dropdown.map(dropdownItem => ( <a key={dropdownItem.name} href={dropdownItem.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" > {' '} {dropdownItem.name}{' '} </a> ))}{' '} </div> )}{' '} </div> ) : ( <a href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" > {' '} {item.name}{' '} </a> )}{' '} </div> ))}{' '} {}{' '} <form onSubmit={handleSearch} className="px-3 py-2"> {' '} <div className="relative"> {' '} <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />{' '} <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{' '} </div>{' '} </form>{' '} </div>{' '} </div> )}{' '} </div>{' '} </header> )}
<<<<<<< HEAD
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
