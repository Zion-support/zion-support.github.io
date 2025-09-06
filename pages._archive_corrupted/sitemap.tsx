
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: any
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: any
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: any
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: any
import React from 'react'; import Link from 'next/link'; const routes = [ { name: 'Home',href: '/' },{ name: 'Solutions',href: '/solutions' },{ name: 'Services',href: '/services' },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Blog',href: '/blog' },{ name: 'Contact',href: '/contact' },{ name: 'Docs',href: '/docs' },{ name: 'Privacy',href: '/privacy' },{ name: 'Terms',href: '/terms' },{ name: 'Cookies',href: any