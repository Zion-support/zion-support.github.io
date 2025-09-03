<<<<<<< HEAD
import: React, { useState, useEffect } from 'react' import { Link } from 'react-router-dom' import { Logo } from './Logo'' import { UserMenu } from './UserMenu'' import { LanguageSelector } from './LanguageSelector'' import { MainNavigation } from '@/layout/MainNavigation'' import { MobileMenu } from './MobileMenu' import { useAuth } from '@/hooks/useAuth'' import { useWhitelabel } from '@/context/WhitelabelContext'' import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'' import { generateSearchSuggestions } from '@/data/marketplaceData'' import { useNavigate } from 'react-router-dom'' import { Button } from '@/components/ui/button'' import { Menu, X, Sparkles } from 'lucide-react'' import { Search as SearchIcon } from 'lucide-react' export function Header({ hideLogin = false, customLogo, customTheme }) { const { user } = useAuth() const { isWhitelabel, primaryColor } = useWhitelabel()' const navigate = useNavigate()'; const: [query, setQuery] = useState(') const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) const [isScrolled, setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()';";";";";
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react' import { Link } from 'react-router-dom' import { Logo } from './Logo' import { UserMenu } from './UserMenu' import { LanguageSelector } from './LanguageSelector' import { MainNavigation } from '@/layout/MainNavigation' import { MobileMenu } from './MobileMenu' import { useAuth } from '@/hooks/useAuth' import { useWhitelabel } from '@/context/WhitelabelContext' import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput' import { generateSearchSuggestions } from '@/data/marketplaceData' import { useNavigate } from 'react-router-dom' import { Button } from '@/components/ui/button' import { Menu, X, Sparkles } from 'lucide-react' import { Search as SearchIcon } from 'lucide-react' export function Header({ hideLogin = false, customLogo, customTheme }) { const { user } = useAuth() const { isWhitelabel, primaryColor } = useWhitelabel()' const navigate = useNavigate()'; const [query, setQuery] = useState(') const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) const [isScrolled, setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()';";
=======
<<<<<<< HEAD
import React, {useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {Logo } from './Logo';
import {UserMenu } from './UserMenu';
import {LanguageSelector } from './LanguageSelector';
import {MainNavigation } from '@/layout/MainNavigation';
import {MobileMenu } from './MobileMenu';
import {useAuth } from '@/hooks/useAuth';
import {useWhitelabel } from '@/context/WhitelabelContext';
import {EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import {generateSearchSuggestions } from '@/data/marketplaceData';
import {useNavigate } from 'react-router-dom';
import {Button } from '@/components/ui/button';
import {Menu, X, Sparkles } from 'lucide-react';
import {Search as SearchIcon } from 'lucide-react';

export function Header({hideLogin = false, customLogo, customTheme }) {const { user } = useAuth();
  const {isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { MobileMenu } from './MobileMenu';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
=======
<<<<<<< HEAD
import React, { useState, useEffect } from &apos;react&apos; import { Link } from &apos;react-router-dom&apos; import { Logo } from &apos;./Logo&apos;&apos; import { UserMenu } from &apos;./UserMenu&apos;&apos; import { LanguageSelector } from &apos;./LanguageSelector&apos;&apos; import { MainNavigation } from &apos;@/layout/MainNavigation&apos;&apos; import { MobileMenu } from &apos;./MobileMenu&apos; import { useAuth } from &apos;@/hooks/useAuth&apos;&apos; import { useWhitelabel } from &apos;@/context/WhitelabelContext&apos;&apos; import { EnhancedSearchInput } from &apos;@/components/search/EnhancedSearchInput&apos;&apos; import { generateSearchSuggestions } from &apos;@/data/marketplaceData&apos;&apos; import { useNavigate } from &apos;react-router-dom&apos;&apos; import { Button } from &apos;@/components/ui/button&apos;&apos; import { Menu, X, Sparkles } from &apos;lucide-react&apos;&apos; import { Search as SearchIcon } from &apos;lucide-react&apos;&apos;' export function Header({ hideLogin = false, customLogo, customTheme }) {} const { user } = useAuth() const;const;const { isWhitelabel, primaryColor } = useWhitelabel()&apos; ;&apos;const navigate = useNavigate()';&apos;&apos; const [query, setQuery] = useState(&apos;)&apos;' const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) const [isScrolled, setIsScrolled] = useState(false) const;const;const searchSuggestions = generateSearchSuggestions()';";&quot;"
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';""
import { Link } from 'react-router-dom';""
import { Logo } from './Logo';""
import { UserMenu } from './UserMenu';""
import { LanguageSelector } from './LanguageSelector';""
import { MainNavigation } from '@/layout/MainNavigation';""
import { MobileMenu } from './MobileMenu';""
import { useAuth } from '@/hooks/useAuth';""
import { useWhitelabel } from '@/context/WhitelabelContext';""
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';""
import { generateSearchSuggestions } from '@/data/marketplaceData';""
import { useNavigate } from 'react-router-dom';""
import { Button } from '@/components/ui/button';""
import { Menu, X, Sparkles } from 'lucide-react';""
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react' import { Link } from 'react-router-dom' import { Logo } from './Logo'' import { UserMenu } from './UserMenu'' import { LanguageSelector } from './LanguageSelector'' import { MainNavigation } from '@/layout/MainNavigation'' import { MobileMenu } from './MobileMenu' import { useAuth } from '@/hooks/useAuth'' import { useWhitelabel } from '@/context/WhitelabelContext'' import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'' import { generateSearchSuggestions } from '@/data/marketplaceData'' import { useNavigate } from 'react-router-dom'' import { Button } from '@/components/ui/button'' import { Menu, X, Sparkles } from 'lucide-react'' import { Search as SearchIcon } from 'lucide-react' export function Header({ hideLogin = false, customLogo, customTheme }) { const { user } = useAuth() const { isWhitelabel, primaryColor } = useWhitelabel()' const navigate = useNavigate()'; const [query, setQuery] = useState(') const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) const [isScrolled, setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()';";'"
=======
import React, { useState, useEffect } from 'react
import { Link } from 'react-router-dom
import { Logo } from './Logo
import { UserMenu } from './UserMenu
import { LanguageSelector } from './LanguageSelector
import { MainNavigation } from '@/layout/MainNavigation
import { MobileMenu } from './MobileMenu
import { useAuth } from '@/hooks/useAuth
import { useWhitelabel } from '@/context/WhitelabelContext
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput
import { generateSearchSuggestions } from '@/data/marketplaceData
import { useNavigate } from 'react-router-dom
import { Button } from '@/components/ui/button
import { Menu, X, Sparkles } from 'lucide-react
>>>>>>> main
>>>>>>> main
import { Search as SearchIcon } from 'lucide-react';

export function Header({ hideLogin = false, customLogo, customTheme }) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
<<<<<<< HEAD
  const navigate = useNavigate();""
>>>>>>> main
  const [query, setQuery] = useState('');
=======
  const navigate = useNavigate();'
  const [query, setQuery] = useState( );
>>>>>>> main
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  
<<<<<<< HEAD
  // If we have a white-label tenant and no specific customTheme is provided, ""
  // use the tenant&apos;s primary color'
=======
  // If we have a white-label tenant and no specific customTheme is provided,'
  // use the tenant's primary color
>>>>>>> main
  const effectiveTheme =
    customTheme ||
    (isWhitelabel
<<<<<<< HEAD
      ? {
          primaryColor,
          backgroundColor: '#000000', // Default dark background'
=======
<<<<<<< HEAD
      ? {primaryColor,
          backgroundColor: '#000000', // Default dark background
>>>>>>> main
          textColor: '#ffffff', // Default light text
        }
      : undefined);
      
  const headerStyle = effectiveTheme
    ? {backgroundColor: effectiveTheme.backgroundColor,
        color: effectiveTheme.textColor,
        borderColor: `${effectiveTheme.primaryColor}20`,
      }
    : {};
    
  // Handle scroll effect
  useEffect(() => {const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };`
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
<<<<<<< HEAD
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim()) {'
      navigate(`/search?q=${encodeURIComponent(query)}`);`
=======
  const handleSubmit = e => {e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
>>>>>>> main
      setQuery('');
    }
  };
  
  const toggleMobileMenu = () => {setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
<<<<<<< HEAD
    <header'
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled`
          ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20''
          : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20''
      }`}
      style={headerStyle}
    >
      {/* Animated background pattern */}`
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
=======
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${ isScrolled ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20' }`} style={headerStyle} >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data: image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
>>>>>>> main
      
      {/* Glowing border effect */}"
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50" />
<<<<<<< HEAD
      "
      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo
          customLogo={customLogo}
          customColor={effectiveTheme?.primaryColor}
        />
        
        {/* Desktop Navigation */}"
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>
        
        {/* Search Bar */}"
        <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">"
          <div className="relative group">"
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hove,
    r:opacity-100 transition-opacity duration-300"></div>
            <EnhancedSearchInput
              value={query}
              onChange={setQuery}
              onSelectSuggestion={text => {
                setQuery(text);"
                navigate(`/search?q=${encodeURIComponent(text)}`);
              }}
              suggestions={searchSuggestions}`
              placeholder="Search services, solutions...""
              className="w-full bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg px-4 py-2 text-white placeholder-zion-purple/50 focus: outline-none focus:ring-2 focu,
    s:ring-zion-purple/50 focu,
    s:border-transparent"
=======
      
      <div className="container flex h-16 items-center px-4 sm: px-6 relative z-10">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
        
        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg: block">
          <MainNavigation />
        </div>
        
        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="hidden md: block w-80 mx-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <EnhancedSearchInput value={query} onChange={setQuery} onSelectSuggestion={text => {
                setQuery(text);
                navigate(`/search?q=${encodeURIComponent(text)}`);
              }}
              suggestions={searchSuggestions}
=======
      ? {
          primaryColor, ""
          backgroundColor: '#000000', // Default dark background""
          textColor: '#ffffff', // Default light text,
}
      : undefined);
      
  const headerStyle = effectiveTheme
    ? {
        backgroundColor: effectiveTheme.backgroundColor, color: effectiveTheme.textColor,
        borderColor: `${effectiveTheme.primaryColor}20`, }
    : {};
    
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);, };""
    window.addEventListener('scroll', handleScroll);""
    return () => window.removeEventListener('scroll', handleScroll);, }, []);
  
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim()) {`
<<<<<<< HEAD
      navigate(`/search?q=${encodeURIComponent(query)}`);""
      setQuery('');, }
=======
      navigate(`/search?q=${encodeURIComponent(query)}`);'
      setQuery( );,
}
>>>>>>> main
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);, };
  
  return (`
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
<<<<<<< HEAD
        isScrolled""
=======
        isScrolled'
>>>>>>> main
          ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20'
          : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20', `
}`}
      style={headerStyle}" >"
      {/* Animated background pattern */}""
      <div className="absolute inset-0 bg-[url('data: image/svg+xml;base64, PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" /" >"
      
      {/* Glowing border effect */}""
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50" /" >"
      ""
      <div className="container flex h-16 items-center px-4 sm: px-6 relative z-10">
        <Logo customLogo={customLogo}
          customColor={effectiveTheme?.primaryColor}
        /" >"
        
        {/* Desktop Navigation */}""
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation /" >"
        </div>
        
        {/* Search Bar */}""
        <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">""
          <div className="relative group">""
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <EnhancedSearchInput value={query}
              onChange={setQuery}
              onSelectSuggestion={text =" > {"
                setQuery(text);`
                navigate(`/search?q=${encodeURIComponent(text)}`);, }}
              suggestions={searchSuggestions}""
>>>>>>> main
              placeholder="Search services, solutions..."
              className="w-full bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg px-4 py-2 text-white placeholder-zion-purple/50 focus: outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent"
>>>>>>> main
            />
          </div>
        </form>
        
<<<<<<< HEAD
        {/* Right side actions */}"
=======
        {/* Right side actions */}""
>>>>>>> main
        <div className="flex items-center space-x-4">
          {!hideLogin && (
            <>
              {user ? (
<<<<<<< HEAD
                <UserMenu user={user} />
              ) : ("
                <div className="flex items-center space-x-3">
                  <Button"
                    variant="ghost""
                    onClick={() => navigate('/login')}
                    className="text-zion-purple hover:text-white hove,
    r:bg-zion-purple/20"
                  >
                    Sign In
                  </Button>
                  <Button"
                    onClick={() => navigate('/register')}
                    className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hove,
    r:to-zion-cyan/80 text-white"
=======
                <UserMenu user={user} /" >"
              ) : (""
                <div className="flex items-center space-x-3">
<<<<<<< HEAD
                  <Button variant="ghost" onClick={() => navigate('/login')}
=======
                  <Button ""
                    variant="ghost"
                    onClick={() =" > navigate('/login')}"
>>>>>>> main
                    className="text-zion-purple hover: text-white hover:bg-zion-purple/20"
                  >
                    Sign In
                  </Button>
<<<<<<< HEAD
                  <Button onClick={() => navigate('/register')}
=======
                  <Button ""
                    onClick={() =" > navigate('/register')}"
>>>>>>> main
                    className="bg-gradient-to-r from-zion-purple to-zion-cyan hover: from-zion-purple/80 hover:to-zion-cyan/80 text-white"
>>>>>>> main
                  >
                    Get Started
                  </Button>
                </div>
              )}
</>
          )}
          
          <LanguageSelector /" >"
          
          {/* Mobile menu button */}
<<<<<<< HEAD
          <button
            onClick={toggleMobileMenu}"
            className="lg: hidden p-2 text-zion-purple hove,
    r:text-white hove,
    r:bg-zion-purple/20 rounded-lg transition-colors"
          >
=======
<<<<<<< HEAD
          <button onClick={toggleMobileMenu} className="lg: hidden p-2 text-zion-purple hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors" >
>>>>>>> main
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
=======
<<<<<<< HEAD
          <button onClick={toggleMobileMenu}""
            className="lg: hidden p-2 text-zion-purple hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"" >"
            {isMobileMenuOpen ? <X size={24} /" > : <Menu size={24} /" >}
=======
          <button onClick={toggleMobileMenu}"
            className='lg:hidden p-2 text-zion-purple hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors  >
            {isMobileMenuOpen ? <X size={24} /' > : <Menu size={24} /" >}
>>>>>>> main
>>>>>>> main
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
<<<<<<< HEAD
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}
=======
      <MobileMenu isOpen={isMobileMenuOpen}
        onClose={() =" > setIsMobileMenuOpen(false)}"
>>>>>>> main
        user={user}
        onNavigate={path => {
          navigate(path);
          setIsMobileMenuOpen(false);, }}
      />
    </header>
<<<<<<< HEAD
  );
}"
=======
  );,
<<<<<<< HEAD
}"`"
=======
}"`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
