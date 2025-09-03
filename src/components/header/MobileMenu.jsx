<<<<<<< HEAD
import React from 'react';""
import { Link } from 'react-router-dom';""
=======
<<<<<<< HEAD
import React, { useState } from 'react' import { Link, useLocation } from 'react-router-dom' import Menu from 'lucide-react/dist/esm/icons/menu' import X from 'lucide-react/dist/esm/icons/x' import User from 'lucide-react/dist/esm/icons/user' import MessageSquare from 'lucide-react/dist/esm/icons/message-square' import Home from 'lucide-react/dist/esm/icons/home' import Store from 'lucide-react/dist/esm/icons/store' import Users from 'lucide-react/dist/esm/icons/users' import Settings from 'lucide-react/dist/esm/icons/settings' import { useAuth } from '@/hooks/useAuth' import { useTranslation } from 'react-i18next' import { cn } from '@/lib/utils' import { Button } from '@/components/ui/button' export function MobileMenu({ className }) { const { user, isAuthenticated } = useAuth() const location = useLocation() const { t } = useTranslation() const [isOpen, setIsOpen] = useState(false) const toggleMenu = () => setIsOpen(!isOpen) const navigationItems = [ { href: '/', label: t('nav.home'), icon: Home, matches: (path) => path === '/' }, { href: '/marketplace', label: t('nav.marketplace'), icon: Store, matches: (path) => path.startsWith('/marketplace') }, { href: '/talent', label: t('nav.talent'), icon: Users, matches: (path) => path.startsWith('/talent') && !path.includes('/talent-dashboard') }, { href: '/categories', label: t('nav.categories'), icon: Store, matches: (path) => path.startsWith('/categories') }, { href: '/equipment', label: t('nav.equipment'), icon: Store, matches: (path) => path.startsWith('/equipment') }, { href: '/community', label: t('nav.community'), icon: Users, matches: (path) => path.startsWith('/community') },  ] if (isAuthenticated) { navigationItems.push({ href: '/dashboard', label: t('nav.dashboard'), icon: Settings, matches: (path) => path.startsWith('/dashboard') })} return (<div className = { cn('md: hidden', '; className)'}>';' {}''' <Button variant='ghost' size='sm' onClick={toggleMenu} className='p-2 text-white hover: bg-zion-purple/20' aria-label={isOpen ? 'Close menu' : 'Open menu'}>''' {isOpen ? <X className='h-6 w-6'/> : <Menu className='h-6 w-6'/>}' </Button>';' {}''' {isOpen && (<div className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'>''' <div className='fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20'>''' <div className='flex items-center justify-between p-4 border-b border-zion-purple/20'>''' <h2 className='text-lg font-semibold text-white'>Menu</h2>''' <Button variant='ghost' size='sm' onClick={toggleMenu} className='p-2 text-white hover: bg-zion-purple/20'>''' <X className='h-5 w-5'/>' </Button>' </div>';' {}''' <nav className='p-4 space-y-2'> {navigationItems.map((item) => {' const Icon = item.icon'; const isActive = item.matches(location.pathname)' return (<Link key={item.href} to={item.href} onClick={toggleMenu} className = {';'' cn('flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors', ';' isActive'';' ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/40'';' : 'hover:bg-zion-purple/10 hover:text-zion-cyan')';' }>''' <Icon className='w-5 h-5'/>''' <span className='font-medium'>{item.label}</span>' </Link>)})}' </nav>';' {}''' <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20'>''' {isAuthenticated ? (<div className='space-y-3'>''' <div className='flex items-center gap-3 px-4 py-2'>''' <User className='h-5 w-5 text-zion-cyan'/>''' <span className='text-white font-medium'>'{user?.email || 'User'}' </span>'' </div>''' <Link to='/messages' onClick={toggleMenu} className='flex items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors'>''' <MessageSquare className='h-5 w-5'/>' <span>Messages</span>'' </Link>''' <Link to='/profile' onClick={toggleMenu} className='flex items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors'>''' <Settings className='h-5 w-5'/>' <span>Profile</span>'' </Link>''' </div>) : (<div className='space-y-3'>''' <Link to='/login' onClick={toggleMenu} className='block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover: bg-zion-purple-dark transition-colors'>'{t('auth.login')}'' </Link>''' <Link to='/signup' onClick={toggleMenu} className='block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan hover:text-zion-blue-dark transition-colors'> {t('auth.signup')} </Link> </div>)} </div>' </div>' </div>)}' </div>)}';'';''""
=======
import React from 'react
import { Link } from 'react-router-dom
>>>>>>> main
import { X, ChevronRight, Home, Briefcase, Target, Building, FileText, Video, Mail, Brain, Cloud, Shield, Server, Rocket, Users, HelpCircle, DollarSign } from 'lucide-react';

export function MobileMenu({ isOpen, onClose, user, onNavigate }) {
  const navigationItems = [
<<<<<<< HEAD
    {""
      name: 'Home', ""
      href: '/',
      icon: Home, },
    {""
      name: 'Services', ""
=======
  {"
      name: 'Home,
      href: '/',
      icon: Home,
},
    {"
      name: 'Services,
>>>>>>> main
      href: '/services',
      icon: Briefcase, children: [""
        { name: 'AI Services', href: '/services/ai', icon: Brain },""
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud }, ""
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },""
        { name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server }, ""
        { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket }
<<<<<<< HEAD
      ], },
    {""
      name: 'Solutions', ""
=======
      ],
},
    {"
      name: 'Solutions,
>>>>>>> main
      href: '/solutions',
      icon: Target, children: [""
        { name: 'Industry Solutions', href: '/solutions/industry' }, ""
        { name: 'Manufacturing', href: '/solutions/manufacturing' }, ""
        { name: 'Financial Services', href: '/solutions/financial' }, ""
        { name: 'Healthcare', href: '/solutions/healthcare' }, ""
        { name: 'Retail', href: '/solutions/retail' }
<<<<<<< HEAD
      ], },
    {""
      name: 'About', ""
=======
      ],
},
    {"
      name: 'About,
>>>>>>> main
      href: '/about',
      icon: Building, children: [""
        { name: 'Company', href: '/about' }, ""
        { name: 'Team', href: '/about/team' }, ""
        { name: 'Careers', href: '/careers' }, ""
        { name: 'Partners', href: '/partners' }
<<<<<<< HEAD
      ], },
    {""
      name: 'Resources', ""
=======
      ],
},
    {"
      name: 'Resources,
>>>>>>> main
      href: '#',
      icon: FileText, children: [""
        { name: 'Case Studies', href: '/case-studies' }, ""
        { name: 'Research & Development', href: '/research-development' }, ""
        { name: 'Events', href: '/events' }, ""
        { name: 'News', href: '/news' }, ""
        { name: 'Blog', href: '/blog' }, ""
        { name: 'White Papers', href: '/white-papers' }, ""
        { name: 'Webinars', href: '/webinars' }
<<<<<<< HEAD
      ], },
    {""
      name: 'Support', ""
=======
      ],
},
    {"
      name: 'Support,
>>>>>>> main
      href: '/support',
      icon: HelpCircle, children: [""
        { name: 'Help Center', href: '/support' }, ""
        { name: 'Documentation', href: '/docs' }, ""
        { name: 'Training', href: '/training' }, ""
        { name: 'Contact', href: '/contact' }
      ], }
  ];

  const handleNavigation = (path) => {
    onNavigate(path);, };

  if (!isOpen) return null;

  return (""
    <div className="lg: hidden fixed inset-0 z-50">
      {/* Overlay */}
      <div ""
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      /" >"
      
      {/* Menu Content */}""
      <div className="absolute right-0 top-0 h-full w-80 bg-zion-blue-dark border-l border-zion-purple/20 shadow-2xl">
        {/* Header */}""
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">""
          <div className="flex items-center space-x-2">""
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">""
              <span className="text-white font-bold text-lg">Z</span>
            </div>""
            <span className="text-white font-semibold">Zion Tech Group</span>
          </div>
<<<<<<< HEAD
          <button onClick={onClose}""
            className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"" >"
            <X className="h-5 w-5" /" >"
=======
          <button onClick={onClose}"
            className='p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors  >'
            <X className="h-5 w-5" /" >
>>>>>>> main
          </button>
        </div>

        {/* Navigation */}""
        <div className="flex-1 overflow-y-auto py-4">""
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}" >"
                {item.children ? (""
                  <details className="group">""
                    <summary className="flex items-center justify-between px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 cursor-pointer transition-colors">""
                      <div className="flex items-center space-x-3">""
                        <item .icon className="h-5 w-5" /" >"
                        <span className="font-medium">{item.name}</span>
                      </div>""
                      <ChevronRight className="h-4 w-4 group-open:rotate-90 transition-transform" /" >"
                    </summary>""
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.name}
                          to={child.href}""
                          className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover: text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                          onClick={() =" > handleNavigation(child.href)}"
                        >""
                          {child.icon && <child .icon className="h-4 w-4 mr-3" /" >}"
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link to={item.href}""
                    className="flex items-center px-4 py-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                    onClick={() =" > handleNavigation(item.href)}"
                  >""
                    <item .icon className="h-5 w-5 mr-3" /" >"
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* User Actions */}""
        <div className="p-4 border-t border-zion-purple/20 space-y-3">
          {user ? (""
            <div className="text-center">""
              <p className="text-sm text-zion-slate-light mb-2">Welcome back, {user.name}</p>
              <Link ""
                to="/dashboard"
                className="block w-full px-4 py-2 bg-zion-purple text-white text-center rounded-lg hover: bg-zion-purple/80 transition-colors"
                onClick={() =" > handleNavigation('/dashboard')}"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (""
            <div className="space-y-3">
              <Link ""
                to="/login"
                className="block w-full px-4 py-2 border border-zion-purple/30 text-zion-cyan text-center rounded-lg hover:bg-zion-purple/10 transition-colors"
                onClick={() =" > handleNavigation('/login')}"
              >
                Sign In
              </Link>
              <Link ""
                to="/register"
                className="block w-full px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-center rounded-lg hover: from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300"
                onClick={() =" > handleNavigation('/register')}"
              >
                Get Started
              </Link>
            </div>
          )}
          
          {/* Quick Actions */}""
          <div className="pt-3 border-t border-zion-purple/20">
            <Link ""
              to="/request-quote"
              className="flex items-center justify-center space-x-2 px-4 py-2 text-zion-cyan hover: text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              onClick={() =" > handleNavigation('/request-quote')}"
            >""
              <DollarSign className="h-4 w-4" /" >"
              <span>Request Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );,
<<<<<<< HEAD
}""
=======
}"
>>>>>>> main
>>>>>>> main
