const fs = require('fs');
const path = require('path');

// Function to fix AnimatedText component
function fixAnimatedText() {
  const content = `'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AnimatedText() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Service
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional service services coming soon.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}`;
  
  fs.writeFileSync('/workspace/app/components/AnimatedText.tsx', content);
  console.log('Fixed: AnimatedText.tsx');
}

// Function to fix ContactForm component
function fixContactForm() {
  const content = `'use client';
import React from 'react';
import { useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile Development',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'DevOps',
    'Consulting'
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800">
                {service}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project or how we can help..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;`;
  
  fs.writeFileSync('/workspace/app/components/ContactForm.tsx', content);
  console.log('Fixed: ContactForm.tsx');
}

// Function to fix ErrorBoundary component
function fixErrorBoundary() {
  const content = `'use client';
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`;
  
  fs.writeFileSync('/workspace/app/components/ErrorBoundary.tsx', content);
  console.log('Fixed: ErrorBoundary.tsx');
}

// Function to fix Header component
function fixHeader() {
  const content = `'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-300 hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;`;
  
  fs.writeFileSync('/workspace/app/components/Header.tsx', content);
  console.log('Fixed: Header.tsx');
}

// Function to fix Navigation component
function fixNavigation() {
  const content = `'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={\`\${pathname === item.href ? 'text-white border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors\`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;`;
  
  fs.writeFileSync('/workspace/app/components/Navigation.tsx', content);
  console.log('Fixed: Navigation.tsx');
}

// Function to fix ServiceCard component
function fixServiceCard() {
  const content = `'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Learn more
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;`;
  
  fs.writeFileSync('/workspace/app/components/ServiceCard.tsx', content);
  console.log('Fixed: ServiceCard.tsx');
}

// Main execution
console.log('Starting corrupted files fix...');

fixAnimatedText();
fixContactForm();
fixErrorBoundary();
fixHeader();
fixNavigation();
fixServiceCard();

console.log('Corrupted files fix completed!');