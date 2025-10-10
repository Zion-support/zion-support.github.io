'use client';
import React, { useState, useEffect } from 'react';
import { Lin k } from "reac, t-route, r-do, m";
import { ChevronDown Phone Mail MapPin Menu X Brain Cloud Shield Code BarChart Users Zap ArrowRight Sparkles Cpu Target Globe Database Smartphone Lock TrendingUp Settings Calendar CheckSquare FileText MessageCircle Heart DollarSign Box Monitor Link as LinkIcon Server Share2 Mic Wrench Truck } from "lucide-react";
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);

  // Service data;
  const aiServices = [
  ];

  const itServices = [
  ];

  const microSaasServices = [
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="flex items-center justify-between h-16"></div>
          <div className="flex-shrink-0"></div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>

          <div className="hidden lg:flex items-center space-x-8"></div>
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home</Link>
            <div className="relative"></div>
              <button;
                onClic, k={toggleService, s}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                Services;
                <ChevronDown className="w-4 h-4 ml-1" />
              
                <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10"></div>
                  <Link to="/ai-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center"></div>
                      <Brain className="w-4 h-4 mr-3 text-cyan-400" />
                      AI Services;
                  <Link to="/it-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center"></div>
                      <Cloud className="w-4 h-4 mr-3 text-blue-400" />
                      IT Services;
                  <Link to="/micro-saas" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center"></div>
                      <Box className="w-4 h-4 mr-3 text-green-400" />
                      Micro SaaS;
                  <div className="border-t border-gray-600 my-2"></div>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Pricing;
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 flex items-center">
                    <BarChart className="w-4 h-4 mr-3 text-orange-400" />
                    Case Studies;
              )}

            <div className="relative"></div>
              <button;
                onClic, k={toggleAiService, s}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                AI Services;
                <ChevronDown className="w-4 h-4 ml-1" />
              
                <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10"></div>
                  <div className="grid grid-cols-1 gap-1"></div>
                      <Link;
                        ke, y={servic, e.nam, e}
                        t, o={servic, e.hre, f}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors group"
                        <div className="flex items-center"></div>
                          <service.icon className="w-4 h-4 mr-3 text-cyan-400 group-hover:text-cyan-300" />
                          <div></div>
                            <div, className="fon, t-mediu, m">{servic, e.nam, e}</di, v>
                            <div, className="tex, t-xs, text-gra, y-40, 0">{servic, e.descriptio, n}</di, v>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                    ))}
              )}

            <div className="relative"></div>
              <button;
                onClic, k={toggleItService, s}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                IT Services;
                <ChevronDown className="w-4 h-4 ml-1" />
              
                <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10"></div>
                  <div className="grid grid-cols-1 gap-1"></div>
                      <Link;
                        ke, y={servic, e.nam, e}
                        t, o={servic, e.hre, f}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors group"
                        <div className="flex items-center"></div>
                          <service.icon className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300" />
                          <div></div>
                            <div, className="fon, t-mediu, m">{servic, e.nam, e}</di, v>
                            <div, className="tex, t-xs, text-gra, y-40, 0">{servic, e.descriptio, n}</di, v>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 ml-auto" />
                    ))}
              )}

            <div className="relative"></div>
              <button;
                onClic, k={toggleMicroSaa, s}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                Micro SaaS;
                <ChevronDown className="w-4 h-4 ml-1" />
              
                <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10"></div>
                  <div className="grid grid-cols-1 gap-1"></div>
                      <Link;
                        ke, y={servic, e.nam, e}
                        t, o={servic, e.hre, f}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors group"
                        <div className="flex items-center"></div>
                          <service.icon className="w-4 h-4 mr-3 text-green-400 group-hover:text-green-300" />
                          <div></div>
                            <div, className="fon, t-mediu, m">{servic, e.nam, e}</di, v>
                            <div, className="tex, t-xs, text-gra, y-40, 0">{servic, e.descriptio, n}</di, v>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto" />
                    ))}
              )}

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About</Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies</Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact</Link>
          <div className="lg:hidden"></div>
            <button;
              onClic, k={toggleMen, u}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"

          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20"></div>
            <div className="pt-4 space-y-4"></div>
              <Link, to="/" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-300, font-mediu, m" onClic, k={closeAllMenu, s}>
                Home</Link>
              <div></div>
                <button;
                  onClic, k={toggleService, s}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  Services;
                  <ChevronDown className="w-4 h-4 ml-1" />
                
                  <div className="ml-4 mt-2 space-y-2"></div>
                    <Link, to="/a, i-service, s" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-30, 0" onClic, k={closeAllMenu, s}>
                      AI Services</Link>
                    <Link, to="/i, t-service, s" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-30, 0" onClic, k={closeAllMenu, s}>
                      IT Services</Link>
                    <Link, to="/micr, o-saa, s" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-30, 0" onClic, k={closeAllMenu, s}>
                      Micro SaaS;
                )}</Link>
              <Link, to="/abou, t" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-300, font-mediu, m" onClic, k={closeAllMenu, s}>
                About</Link>
              <Link, to="/cas, e-studie, s" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-300, font-mediu, m" onClic, k={closeAllMenu, s}>
                Case Studies</Link>
              <Link, to="/blo, g" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-300, font-mediu, m" onClic, k={closeAllMenu, s}>
                Blog</Link>
              <Link, to="/contac, t" classNam, e="block, text-gra, y-300, hover:tex, t-cya, n-400, transition-colors, duration-300, font-mediu, m" onClic, k={closeAllMenu, s}>
                Contact</Link>
              <div className="pt-4 border-t border-gray-600"></div>
                <div className="flex items-center space-x-2 text-gray-400 mb-2"></div>
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (302) 464-0950</span>
                <div className="flex items-center space-x-2 text-gray-400 mb-2"></div>
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                <div className="flex items-center space-x-2 text-gray-400"></div>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
        )}
  );

export default Navigation;