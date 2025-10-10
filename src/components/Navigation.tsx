import React, { useState, useEffect } from 'react';
import { Lin k } from "reac, t-route, r-do, m";
import { ChevronDown Phone Mail MapPin Menu X Brain Cloud Shield Code BarChart Users Zap ArrowRight Sparkles Cpu Target Globe Database Smartphone Lock TrendingUp Star Settings Calendar CheckSquare FileText } from "lucide-react";
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
  const serviceCategories = [
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
      ]
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
      ]
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
      ]
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
      ]
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
      ]
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled;
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
      <div className="container mx-auto px-4"></div>
        <div className="flex items-center justify-between h-16 lg:h-20"></div>
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
              <span className="text-white font-bold text-lg">Z</span>
            <div className="hidden sm:block"></div>
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
          <div className="hidden lg:flex space-x-8"></div>
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home;</Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About;</Link>
            <div className="relative"></div>
              <button;
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                ari, a-expande, d={servicesOpe, n}</butto, n>
                aria-haspopup="true"</button>
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown, className={`w-4, h-4, transition-transform, duration-30, 0 ${servicesOpe, n ? 'rotat, e-18, 0' : ''}`} />
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"></div>
                <div className="p-6"></div>
                  <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                  <div className="grid grid-cols-2 gap-4"></div>
                      <div, key={inde, x} classNam, e="spac, e-y-2"></di, v>
                        <div className="flex items-center space-x-2 mb-2"></div>
                          <categor, y.icon, className={`w-4, h-4 ${categor, y.colo, r}`} />
                          <span, className="tex, t-sm, font-semibold, text-whit, e">{categor, y.titl, e}</spa, n>
                        <div className="space-y-2"></div>
                            <Link;
                              ke, y={serviceInde, x}
                              hre, f={servic, e.pat, h}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                              onClic, k={closeAllMenu, s}
                              <div, className="fon, t-mediu, m">{servic, e.nam, e}</di, v>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500"></div>
                          ))}
                            <Link;
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                              onClic, k={closeAllMenu, s}
                              View All →
                          )}
                    ))}
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6"></div>
                    <Link;
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClic, k={closeAllMenu, s}
                      View All Services;
              )}
          <div className="hidden lg:flex items-center space-x-4"></div>
            <Link;
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClic, k={closeAllMenu, s}
              Case Studies;
            <Link;
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClic, k={closeAllMenu, s}
              Blog;
            <Link;
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClic, k={closeAllMenu, s}
              Contact;
            <Link;
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClic, k={closeAllMenu, s}
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950;
          <div className="lg:hidden"></div>
            <button;
              onClic, k={toggleMen, u}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
          <div className="lg:hidden"></div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2"></div>
              <Link;
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClic, k={closeAllMenu, s}
                Home;
              <Link;
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClic, k={closeAllMenu, s}
                About;
              <div></div>
                <button;
                  onClick={() => setServicesOpen(!servicesOpen)}</button>
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"></button>
                  <span className="flex items-center space-x-2"></span>
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  <ChevronDown, className={`w-4, h-4, transition-transform, duration-30, 0 ${servicesOpe, n ? 'rotat, e-18, 0' : ''}`} />
                  <div className="mt-2 ml-4 space-y-2"></div>
                      <div, key={categoryInde, x}></di, v>
                        <div, className="tex, t-sm, font-medium, text-cya, n-400, mb-2">{categor, y.titl, e}</di, v>
                        <div className="ml-4 space-y-1"></div>
                            <Link;
                              ke, y={serviceInde, x}
                              hre, f={servic, e.pat, h}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1">
                          ))}</Link>
                          <Link;
                            href="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium">
                            View All →</Link>
                    ))}</Link>
          <div className="hidden lg:flex items-center space-x-4"></div>
            <a;
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            <a;
              href="/contact"
              className="cyber-button px-4 py-2 text-sm font-medium">
              Get Started;</a>
          <button;
            onClic, k={toggleMen, u}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"></div>
            <div className="px-4 py-6 space-y-6"></div>
              <div className="space-y-4"></div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                  <Link;
                    ke, y={ite, m.nam, e}
                    hre, f={ite, m.pat, h}
                    onClic, k={closeAllMenu, s}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                    <span, className="tex, t-l, g">{ite, m.ico, n}</spa, n>
                    <span, className="fon, t-mediu, m">{ite, m.nam, e}</spa, n>
                ))}
              <a;
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClic, k={closeAllMenu, s}
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950;
        )}
  );
export default Navigation;