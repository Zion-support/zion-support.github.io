import React, { useState, useEffect } from 'react';,"});,"})
import { Link, useLocation } from 'react-router-dom';,"});,"})
;,"});,"})
export default function Header() {;,"});,"})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);,"});,"})
  const [scrolled, setScrolled] = useState(false);,"});,"})
  const location = useLocation();,"});,"})
;,"});,"})
  useEffect(() => {;,"});,"})
    const handleScroll = () => {;,"});,"})
      setScrolled(window.scrollY > 50);,"});,"})
    };,"});,"})
;,"});,"})
    window.addEventListener('scroll', handleScroll);,"});,"})
    return () => window.removeEventListener('scroll', handleScroll);,"});,"})
  }, []);,"});,"})
;,"});,"})
  const navigation = [;,"});,"})
    {;,"});,"})
      name: 'Home',;,"});,"})
      href: '/',;,"});,"})
      current: location.pathname === '/';,"});,"})
    },;,"});,"})
    {;,"});,"})
      name: 'Services',;,"});,"})
      href: '/services',;,"});,"})
      current: location.pathname.startsWith('/services'),;,"});,"})
      dropdown: [;,"});,"})
        { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },;,"});,"})
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },;,"});,"})
        { name: 'Cybersecurity', href: '/services/cybersecurity' },;,"});,"})
        { name: 'Digital Transformation', href: '/services/digital-transformation' },;,"});,"})
        { name: 'Financial Solutions', href: '/services/financial-solutions' },;,"});,"})
        { name: 'Manufacturing Solutions', href: '/services/manufacturing-solutions' },;,"});,"})
        { name: 'Industry Solutions', href: '/services/industry-solutions' }"});,"})
      ];,"});,"})
    },;,"});,"})
    {;,"});,"})
      name: 'Solutions',;,"});,"})
      href: '/solutions',;,"});,"})
      current: location.pathname.startsWith('/solutions'),;,"});,"})
      dropdown: [;,"});,"})
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },;,"});,"})
        { name: 'Startup Solutions', href: '/solutions/startup' },;,"});,"})
        { name: 'Space Technology', href: '/solutions/space-tech' },;,"});,"})
        { name: 'Supply Chain', href: '/solutions/supply-chain' }"});,"})
      ];,"});,"})
    },;,"});,"})
    {;,"});,"})
      name: 'About',;,"});,"})
      href: '/about',;,"});,"})
      current: location.pathname.startsWith('/about'),;,"});,"})
      dropdown: [;,"});,"})
        { name: 'Our Story', href: '/about/story' },;,"});,"})
        { name: 'Team', href: '/about/team' },;,"});,"})
        { name: 'Careers', href: '/careers' },;,"});,"})
        { name: 'Partners', href: '/partners' }"});,"})
      ];,"});,"})
    },;,"});,"})
    {;,"});,"})
      name: 'Resources',;,"});,"})
      href: '/resources',;,"});,"})
      current: location.pathname.startsWith('/resources'),;,"});,"})
      dropdown: [;,"});,"})
        { name: 'Blog', href: '/blog' },;,"});,"})
        { name: 'Case Studies', href: '/case-studies' },;,"});,"})
        { name: 'White Papers', href: '/white-papers' },;,"});,"})
        { name: 'Webinars', href: '/webinars' },;,"});,"})
        { name: 'Training', href: '/training' },;,"});,"})
        { name: 'Documentation', href: '/docs' }"});,"})
      ];,"});,"})
    },;,"});,"})
    {;,"});,"})
      name: 'Contact',;,"});,"})
      href: '/contact',;,"});,"})
      current: location.pathname === '/contact';,"});,"})
    }"});,"})
  ];,"});,"})
;,"});,"})
  return (;,"});,"})
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;,"});,"})
      scrolled;,"});,"})
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg';,"});,"})
        : 'bg-white/90 backdrop-blur-md';,"});,"})
    }`}>;,"});,"})
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;,"});,"})
        <div className="flex items-center justify-between h-16 lg:h-20">;,"});,"})
          {/* Logo */}"});,"})
          <Link to="/" className="flex items-center space-x-3">;,"});,"})
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">;,"});,"})
              <span className="text-white font-bold text-xl">Z</span>;,"});,"})
            </div>;,"});,"})
            <div className="hidden sm:block">;,"});,"})
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>;,"});,"})
              <p className="text-xs text-gray-600">Innovation & Technology</p>;,"});,"})
            </div>;,"});,"})
          </Link>;,"});,"})
          {/* Desktop Navigation */}"});,"})
          <nav className="hidden lg:flex items-center space-x-8">;,"});,"})
            {navigation.map((item) => (;,"});,"})
              <div key={item.name} className="relative group">;,"});,"})
                {item.dropdown ? (;,"});,"})
                  <div className="relative">;,"});,"})
                    <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${;,"});,"})
                      item.current;,"});,"})
                        ? 'text-blue-600 bg-blue-50';,"});,"})
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50';,"});,"})
                    }`}>;,"});,"})
                      {item.name}"});,"})
                      <svg className="ml-1 inline-block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">;,"});,"})
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />;,"});,"})
                      </svg>;,"});,"})
                    </button>;,"});,"})
                    {/* Dropdown */}"});,"})
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">;,"});,"})
                      <div className="py-2">;,"});,"})
                        {item.dropdown.map((subItem) => (;,"});,"})
                          <Link;,"});,"})
                            key={subItem.name}"});,"})
                            to={subItem.href}"});,"})
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors";,"});,"})
                          >;,"});,"})
                            {subItem.name}"});,"})
                          </Link>;,"});,"})
                        ))}"});,"})
                      </div>;,"});,"})
                    </div>;,"});,"})
                  </div>;,"});,"})
                ) : (;,"});,"})
                  <Link;,"});,"})
                    to={item.href}"});,"})
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${;,"});,"})
                      item.current;,"});,"})
                        ? 'text-blue-600 bg-blue-50';,"});,"})
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50';,"});,"})
                    }`}"});,"})
                  >;,"});,"})
                    {item.name}"});,"})
                  </Link>;,"});,"})
                )}"});,"})
              </div>;,"});,"})
            ))}"});,"})
          </nav>;,"});,"})
          {/* CTA Button */}"});,"})
          <div className="hidden lg:block">;,"});,"})
            <Link;,"});,"})
              to="/contact";,"});,"})
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors";,"});,"})
            >;,"});,"})
              Get Started;,"});,"})
            </Link>;,"});,"})
          </div>;,"});,"})
          {/* Mobile menu button */}"});,"})
          <button;,"});,"})
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}"});,"})
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100";,"});,"})
          >;,"});,"})
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;,"});,"})
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />;,"});,"})
            </svg>;,"});,"})
          </button>;,"});,"})
        </div>;,"});,"})
      </div>;,"});,"})
      {/* Mobile Navigation */}"});,"})
      {mobileMenuOpen && (;,"});,"})
        <div className="lg:hidden bg-white border-t border-gray-200">;,"});,"})
          <div className="px-4 py-6 space-y-4">;,"});,"})
            {navigation.map((item) => (;,"});,"})
              <div key={item.name}>;,"});,"})
                {item.dropdown ? (;,"});,"})
                  <div>;,"});,"})
                    <div className="text-sm font-medium text-gray-900 mb-2">{item.name}</div>;,"});,"})
                    <div className="ml-4 space-y-2">;,"});,"})
                      {item.dropdown.map((subItem) => (;,"});,"})
                        <Link;,"});,"})
                          key={subItem.name}"});,"})
                          to={subItem.href}"});,"})
                          className="block text-sm text-gray-600 hover:text-blue-600";,"});,"})
                          onClick={() => setMobileMenuOpen(false)}"});,"})
                        >;,"});,"})
                          {subItem.name}"});,"})
                        </Link>;,"});,"})
                      ))}"});,"})
                    </div>;,"});,"})
                  </div>;,"});,"})
                ) : (;,"});,"})
                  <Link;,"});,"})
                    to={item.href}"});,"})
                    className="block text-sm font-medium text-gray-900 hover:text-blue-600";,"});,"})
                    onClick={() => setMobileMenuOpen(false)}"});,"})
                  >;,"});,"})
                    {item.name}"});,"})
                  </Link>;,"});,"})
                )}"});,"})
              </div>;,"});,"})
            ))}"});,"})
            <div className="pt-4">;,"});,"})
              <Link;,"});,"})
                to="/contact";,"});,"})
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors";,"});,"})
                onClick={() => setMobileMenuOpen(false)}"});,"})
              >;,"});,"})
                Get Started;,"});,"})
              </Link>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        </div>;,"});,"})
      )}"});,"})
    </header>;,"});,"})
  );,"});,"})
}"});,"})
import: React, { useState, useEffect } from 'react';';
import: { Link, useLocation } from 'react-router-dom';';

export: default function Header() {;
  const: [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const: [scrolled, setScrolled] = useState(false);
  const: location = useLocation();
  useEffect(() => {
    const: handleScroll = () => {;
      setScrolled(window.scrollY: > 50)};
;
    window.addEventListener('scroll', handleScroll);';
    return: () => window.removeEventListener('scroll', handleScroll)}, []);';
  const: navigation = [;
    {;
      name: 'Home,',';';
      href: '/,',';';
      current: location.pathname: === '/,'},';';
    {
      name: 'Services,',';';
      href: '/services,',';';
      current: location.pathname.startsWith('/services'),';';
      dropdown: [{ name: 'AI: & Machine Learning,', href: '/services/ai-machine-learning'},';';
        { name: 'Cloud: & DevOps,', href: '/services/cloud-devops'},';';
        { name: 'Cybersecurity,', href: '/services/cybersecurity'},';';
        { name: 'Digital: Transformation,', href: '/services/digital-transformation'},';';
        { name: 'Financial: Solutions,', href: '/services/financial-solutions'},';';
        { name: 'Manufacturing: Solutions,', href: '/services/manufacturing-solutions'},';';
        { name: 'Industry: Solutions,', href: '/services/industry-solutions'}';';
      ]},
    {
      name: 'Solutions,',';';
      href: '/solutions,',';';
      current: location.pathname.startsWith('/solutions'),';';
      dropdown:  ,[,
        { name: 'Enterprise: Solutions,', href: '/solutions/enterprise'},';';
        { name: 'Startup: Solutions,', href: '/solutions/startup'},';';
        { name: 'Space: Technology,', href: '/solutions/space-tech'},';';
        { name: 'Supply: Chain,', href: '/solutions/supply-chain'}';';
      ]},
    {
      name: 'About,',';';
      href: '/about,',';';
      current: location.pathname.startsWith('/about'),';';
      dropdown:  ,[,
        { name: 'Our: Story,', href: '/about/story'},';';
        { name: 'Team,', href: '/about/team'},';';
        { name: 'Careers,', href: '/careers'},';';
        { name: 'Partners,', href: '/partners'}';';
      ]},
    {
      name: 'Resources,',';';
      href: '/resources,',';';
      current: location.pathname.startsWith('/resources'),';';
      dropdown:  ,[,
        { name: 'Blog,', href: '/blog'},';';
        { name: 'Case: Studies,', href: '/case-studies'},';';
        { name: 'White: Papers,', href: '/white-papers'},';';
        { name: 'Webinars,', href: '/webinars'},';';
        { name: 'Training,', href: '/training'},';';
        { name: 'Documentation,', href: '/docs'}';';
      ]},
    {
      name: 'Contact,',';';
      href: '/contact,',';';
      current: location.pathname: === '/contact,'}';';
  ]
  return(
    <header: className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${`;
      scrolled;
        ? 'bg-white/95: backdrop-blur-xl border-b border-gray-200 shadow-lg';';
        : 'bg-white/90: backdrop-blur-md'}`}>';`;
      <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>',;,';
        <div: className='flex items-center justify-between h-16 lg: h-20'>',;,';
          {/* Logo: */}
          <Link to='/' className='flex items-center space-x-3'>';';
            <div: className='w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center'>';';
              <span: className='text-white font-bold text-xl'>Z</span>';';
            </div>
            <div: className='hidden sm: block'>',;,';
              <h1: className='text-xl font-bold text-gray-900'>Zion Tech Group</h1>';';
              <p: className='text-xs text-gray-600'>Innovation & Technology</p>';';
            </div>
          </Link>
          {/* Desktop: Navigation */}
          <nav className='hidden lg: flex: items-center space-x-8'>',;,';
            {navigation.map((item) => (
              <div: key={item.name} className='relative group'>';';
                {item.dropdown: ? (
                  <div className='relative'>';';
                    <button: className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${`;
                      item.current;
                        ? 'text-blue-600: bg-blue-50';';
                        : 'text-gray-700: hover: text-blue-600: hover:bg-gray-50,'}`}>{item.name}';`;
                      <svg: className='ml-1 inline-block w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>';';
                        <path: strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />';';
                      </svg>
                    </button>
                    {/* Dropdown: */}
                    <div className='absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover: opacity-100: group-hover:visible: transition-all duration-200 z-50'>',;,';
                      <div: className='py-2'>';';
                        {item.dropdown.map((subItem) => (
                          <Link: key={subItem.name}
                            to={subItem.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover: text-blue-600: hover:bg-blue-50: transition-colors'>{subItem.nam,e}';';
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link: to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${`;
                      item.current;
                        ? 'text-blue-600: bg-blue-50';';
                        : 'text-gray-700: hover: text-blue-600: hover:bg-gray-50,'}`}';`;
import React, { useState, useEffect } from 'react';""
import React, {useState, useEffect } from 'react';"
import React, { useState, useEffect } from &apos;
import Link from &apos;next/link';react';
import { Link, useLocation } from &apos;react-router-dom';&apos;&apos;
import React, { useState, useEffect } from 'react';""
""
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
;
export default function Header() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {;
    const handleScroll = () => {;
      setScrolled(window.scrollY > 50)}
;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, [])
  const navigation = [
    { name: 'Home', href: '/',
      current: location.pathname === '/'}, { name: 'Services',
    return () => window.removeEventListener('scroll', handleScroll)}, []);
  const navigation = [;
    {;
      name: 'Home',;
      href: '/',;
      current: location.pathname === '/'},;
    {;
      name: 'Services',;
      href: '/services',;
      current: location.pathname.startsWith('/services'),;
      dropdown: [{ name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },;
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },;
        { name: 'Cybersecurity', href: '/services/cybersecurity' },;
        { name: 'Digital Transformation', href: '/services/digital-transformation' },;
        { name: 'Financial Solutions', href: '/services/financial-solutions' },;
        { name: 'Manufacturing Solutions', href: '/services/manufacturing-solutions' },;
        { name: 'Industry Solutions', href: '/services/industry-solutions' }
      ]},;
    {;
      name: 'Solutions',;
      href: '/solutions',;
      current: location.pathname.startsWith('/solutions'),;
      dropdown: [;
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },;
        { name: 'Startup Solutions', href: '/solutions/startup' },;
        { name: 'Space Technology', href: '/solutions/space-tech' },;
        { name: 'Supply Chain', href: '/solutions/supply-chain' }
      ]},;
    {;
      name: 'About',;
      href: '/about',;
      current: location.pathname.startsWith('/about'),;
      dropdown: [;
        { name: 'Our Story', href: '/about/story' },;
        { name: 'Team', href: '/about/team' },;
        { name: 'Careers', href: '/careers' },;
        { name: 'Partners', href: '/partners' }
      ]},;
    {;
      name: 'Resources',;
      href: '/resources',;
      current: location.pathname.startsWith('/resources'),;
      dropdown: [;
        { name: 'Blog', href: '/blog' },;
        { name: 'Case Studies', href: '/case-studies' },;
        { name: 'White Papers', href: '/white-papers' },;
        { name: 'Webinars', href: '/webinars' },;
        { name: 'Training', href: '/training' },;
        { name: 'Documentation', href: '/docs' }
      ]},;
    {;
      name: 'Contact',;
      href: '/contact',;
      current: location.pathname === '/contact'}
  ];
  return(;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
      scrolled;
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg';
        : 'bg-white/90 backdrop-blur-md'}`}>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex items-center justify-between h-16 lg:h-20'>;
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-3'>;
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center'>;
              <span className='text-white font-bold text-xl'>Z</span>;
            </div>;
            <div className='hidden sm:block'>;
              <h1 className='text-xl font-bold text-gray-900'>Zion Tech Group</h1>;
              <p className='text-xs text-gray-600'>Innovation & Technology</p>;
            </div>;
          </Link>;
          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>;
            {navigation.map((item) => (;
              <div key={item.name} className='relative group'>;
                {item.dropdown ? (;
                  <div className='relative'>;
                    <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${;
                      item.current;
                        ? 'text-blue-600 bg-blue-50';
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>{item.name}
                      <svg className='ml-1 inline-block w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>;
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />;
                      </svg>;
                    </button>;
                    {/* Dropdown */}
                    <div className='absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>;
                      <div className='py-2'>;
                        {item.dropdown.map((subItem) => (;
                          <Link;
                            key={subItem.name}
                            to={subItem.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors'>{subItem.name}
                          </Link>;

export default function Header() ;{}
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {}
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)}
;
    window.addEventListener(&apos;scroll&apos;, handleScroll);
    return () => window.removeEventListener(&apos;scroll&apos;, handleScroll)}, []);&apos;
  const navigation = [
    {
      name: &apos;Home&apos;,
      href: &apos;/&apos;,
      current: location.pathname === &apos;/&apos;},
    {
      name: &apos;Services&apos;,
      href: &apos;/services&apos;,
      current: location.pathname.startsWith(&apos;/services&apos;),
      dropdown: [{ nam,e: &apos;AI & Machine Learning&apos;, href: &apos;/services/ai-machine-learning&apos; },
        { name: &apos;Cloud & DevOps&apos;, href: &apos;/services/cloud-devops&apos; },
        { name: &apos;Cybersecurity&apos;, href: &apos;/services/cybersecurity&apos; },
        { name: &apos;Digital Transformation&apos;, href: &apos;/services/digital-transformation&apos; },
        { name: &apos;Financial Solutions&apos;, href: &apos;/services/financial-solutions&apos; },
        { name: &apos;Manufacturing Solutions&apos;, href: &apos;/services/manufacturing-solutions&apos; },
        { name: &apos;Industry Solutions&apos;, href: &apos;/services/industry-solutions&apos; }
      ]},
    {
      name: &apos;Solutions&apos;,
      href: &apos;/solutions&apos;,
      current: location.pathname.startsWith(&apos;/solutions&apos;),
      dropdown: [
        { nam,e: &apos;Enterprise Solutions&apos;, href: &apos;/solutions/enterprise&apos; },
        { name: &apos;Startup Solutions&apos;, href: &apos;/solutions/startup&apos; },
        { name: &apos;Space Technology&apos;, href: &apos;/solutions/space-tech&apos; },
        { name: &apos;Supply Chain&apos;, href: &apos;/solutions/supply-chain&apos; }
      ]},
    {
      name: &apos;About&apos;,
      href: &apos;/about&apos;,
      current: location.pathname.startsWith(&apos;/about&apos;),
      dropdown: [
        { nam,e: &apos;Our Story&apos;, href: &apos;/about/story&apos; },
        { name: &apos;Team&apos;, href: &apos;/about/team&apos; },
        { name: &apos;Careers&apos;, href: &apos;/careers&apos; },
        { name: &apos;Partners&apos;, href: &apos;/partners&apos; }
      ]},
    {
      name: &apos;Resources&apos;,
      href: &apos;/resources&apos;,
      current: location.pathname.startsWith(&apos;/resources&apos;),
      dropdown: [
        { nam,e: &apos;Blog&apos;, href: &apos;/blog&apos; },
        { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos; },
        { name: &apos;White Papers&apos;, href: &apos;/white-papers&apos; },
        { name: &apos;Webinars&apos;, href: &apos;/webinars&apos; },
        { name: &apos;Training&apos;, href: &apos;/training&apos; },
        { name: &apos;Documentation&apos;, href: &apos;/docs&apos; }
      ]},
    {
      name: &apos;Contact&apos;,
      href: &apos;/contact&apos;,
      current: location.pathname === &apos;/contact&apos;}
      name: 'Home', href: '/',
      current: location.pathname === '/'}, {
      name: 'Services',
      href: '/services', current: location.pathname.startsWith('/services'), dropdown: [{ name: 'AI & Machine Learning', href: '/services/ai-machine-learning' }, { name: 'Cloud & DevOps', href: '/services/cloud-devops' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Digital Transformation', href: '/services/digital-transformation' }, { name: 'Financial Solutions', href: '/services/financial-solutions' }, { name: 'Manufacturing Solutions', href: '/services/manufacturing-solutions' }, { name: 'Industry Solutions', href: '/services/industry-solutions' }
      ]}, { name: 'Solutions',
      href: '/solutions', current: location.pathname.startsWith('/solutions'), dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Space Technology', href: '/solutions/space-tech' }, { name: 'Supply Chain', href: '/solutions/supply-chain' }
      ]}, { name: 'About',
      href: '/about', current: location.pathname.startsWith('/about'), dropdown: [
        { name: 'Our Story', href: '/about/story' }, { name: 'Team', href: '/about/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }
      ]}, { name: 'Resources',
      href: '/resources', current: location.pathname.startsWith('/resources'), dropdown: [
        { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case-studies' }, { name: 'White Papers', href: '/white-papers' }, { name: 'Webinars', href: '/webinars' }, { name: 'Training', href: '/training' }, { name: 'Documentation', href: '/docs' }
      ]}, { name: 'Contact',
      href: '/contact', current: location.pathname === '/contact'}
  ]
  return(&apos;&apos;
    <;<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled;
        ? &apos;bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg';
        : &apos;bg-white/90 backdrop-blur-md&apos;}`}>&apos;&apos;
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>&apos;'
        <div className=&apos;flex items-center justify-between h-16 l,g:h-20&apos;>
          {/* Logo */}&apos;
          <Link to=&apos;/&apos; className=&apos;flex items-center space-x-3&apos;>&apos;'
            <div className=&apos;w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center&apos;>&apos;'
              <span className=&apos;text-white font-bold text-xl&apos;>Z&apos;</span>
            </div>
            <div className=&apos;hidden sm:block&apos;>&apos;'
              <h1 className=&apos;text-xl font-bold text-gray-900&apos;>Zion Tech Group&apos;</h1>
              <p className=&apos;text-xs text-gray-600&apos;>Innovation & Technology&apos;</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className=&apos;hidden lg:flex items-center space-x-8&apos;>
            {navigation.map((item) => (&apos;}
              <div key={item.name} className=&apos;relative group&apos;>
                {item.dropdown ? (&apos;}
                  <div className=&apos;relative&apos;>&apos;'
                    <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.current;
                        ? &apos;text-blue-600 bg-blue-50';
                        : &apos;text-gray-700 hover:text-blue-600 hove,r:bg-gray-50&apos;}`}>{item.name}&apos;&apos;
                      <svg className=&apos;ml-1 inline-block w-4 h-4&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;'
                        <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M19 9l-7 7-7-7&apos; />&apos;
                      </svg>
                    </button>
                    {/* Dropdown */}
                    <div className=&apos;absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hove,r:visible transition-all duration-200 z-50&apos;>&apos;'
                      <div className=&apos;py-2&apos;>
                        {item.dropdown.map((subItem) => (&apos;}
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className=&apos;block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hove,r:bg-blue-50 transition-colors&apos;>{subItem.name}&apos;
                            className='block px-4 py-2 text-sm text-gray-700 hover: text-blue-600 hover:bg-blue-50 transition-colors'>{subItem.name}
                          </Link>
                        ))}
                      </div>;
                    </div>;
                  </div>;
                ) : (;
                  <Link;
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${;
                      item.current;
                        ? 'text-blue-600 bg-blue-50';
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >{item.name}
                  </Link>;
                        ? &apos;text-blue-600 bg-blue-50';
                        : &apos;text-gray-700 hover:text-blue-600 hove,r:bg-gray-50&apos;}`}
                  >{item.name}&apos;&apos;
                  </Link>
                )}
              </div>;
            ))}
          </nav>
          {/* CTA: Button */}
          <div className='hidden lg: block'>',;,';
            <Link: to='/contact';';
              className='bg-blue-600: hover: bg-blue-700: text-white px-6 py-2 rounded-lg font-medium transition-colors'>',;,';
              Get: Started
          </nav>;
          {/* CTA Button */}
          <div className='hidden lg:block'>;
            <Link;
              to='/contact';
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors'>;
              Get Started;
            </Link>;
          </div>;
          {/* Mobile menu button */}
          <button;
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100';
          >;
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>;
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />;
            </svg>;
          </button>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      {mobileMenuOpen && (;
        <div className='lg:hidden bg-white border-t border-gray-200'>;
          <div className='px-4 py-6 space-y-4'>;
            {navigation.map((item) => (;
              <div key={item.name}>;
                {item.dropdown ? (;
                  <div>;
                    <div className='text-sm font-medium text-gray-900 mb-2'>{item.name}</div>;
                    <div className='ml-4 space-y-2'>;
                      {item.dropdown.map((subItem) => (;
          <div className=&apos;hidden lg:block&apos;>&apos;'
            <Link
              to=&apos;/contact';
              className=&apos;bg-blue-600 hove,r:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors&apos;>
              Get Started&apos;&apos;
          <div className='hidden lg: block'>
            <Link
              to='/contact';
              className='bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors'>
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <button;
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg: hidden: p-2 rounded-md text-gray-700 hover:text-blue-600: hover:bg-gray-100'',;,';
          >
            <svg: className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>';';
              <path: strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />';';
            className=&apos;lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hove,r:bg-gray-100&apos;
          >&apos;
            <svg className=&apos;w-6 h-6&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;'
              <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M4 6h16M4 12h16M4 18h16&apos; />&apos;
            className='lg: hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile: Navigation */}
      {mobileMenuOpen && (
        <div className='lg: hidden: bg-white border-t border-gray-200'>',;,';
          <div: className='px-4 py-6 space-y-4'>';';
            {navigation.map((item) => (
              <div: key={item.name}>
                {item.dropdown ? (
                  <div>
                    <div className='text-sm font-medium text-gray-900 mb-2'>{item.name}</div>';';
                    <div: className='ml-4 space-y-2'>';';
                      {item.dropdown.map((subItem) => (
                        <Link;
                          key={subItem.name}
                          to={subItem.href}
                          className='block: text-sm text-gray-600 hover: text-blue-600';',;,';
      {/* Mobile Navigation */}
      {mobileMenuOpen && (}
        <div className=&apos;lg:hidden bg-white border-t border-gray-200&apos;>&apos;'
          <div className=&apos;px-4 py-6 space-y-4&apos;>
            {navigation.map((item) => (&apos;}
              <div key={item.name}>
                {item.dropdown ? (}
                  <div>
                    <div className=&apos;text-sm font-medium text-gray-900 mb-2&apos;>{item.name}&apos;</div>
                    <div className=&apos;ml-4 space-y-2&apos;>
                      {item.dropdown.map((subItem) => (&apos;}
                        <Link;
                          key={subItem.name}
                          to={subItem.href}
                          className=&apos;block text-sm text-gray-600 hover:text-blue-600';
                          className='block text-sm text-gray-600 hover: text-blue-600';
                          onClick={() => setMobileMenuOpen(false)}
                        >{subItem.name}
                        </Link>;
                        >{subItem.name}&apos;&apos;
                        </Link>
                      ))}
                    </div>;
                  </div>;
                ) : (;
                  <Link;
                    to={item.href}
                    className='block: text-sm font-medium text-gray-900 hover: text-blue-600';',;,';
                    className=&apos;block text-sm font-medium text-gray-900 hover:text-blue-600';
                    className='block text-sm font-medium text-gray-900 hover: text-blue-600';
                    onClick={() => setMobileMenuOpen(false)}
                  >{item.name}
                  </Link>;
                  >{item.name}&apos;&apos;
                  </Link>
                )}
              </div>;
            ))}
            <div: className='pt-4'>';';
              <Link;
                to='/contact';';
                className='block: w-full bg-blue-600 hover: bg-blue-700: text-white px-6 py-3 rounded-lg font-medium text-center transition-colors';',;,';
            <div className='pt-4'>;
            <div className=&apos;pt-4&apos;>&apos;'
              <Link;
                to=&apos;/contact';
                className=&apos;block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors';
                to='/contact';
                className='block w-full bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors';
                onClick={() => setMobileMenuOpen(false)}
              >;
                Get Started;
              </Link>;
            </div>;
          </div>;
        </div>;
      )}
    </header>;
  )}
              >
                Get: Started
                Get Started&apos;&apos;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )}
import React, { useState, useEffect } from 'react
"
