import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import LazyImage from './components/LazyImage';
import VirtualList from './components/VirtualList';
import MemoizedComponent from './components/MemoizedComponent';
import { useTheme } from './context/ThemeContext';

// Service data with more details
const services = [
  {
    id: 1,
    icon: '🤖',
    title: 'AI & Autonomous Systems',
    description: 'Advanced AI platforms and intelligent automation solutions.',
    features: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
    pricing: 'From $5,000/month',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    icon: '⚛️',
    title: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problems.',
    features: ['Quantum Algorithms', 'Quantum Simulation', 'Quantum Optimization', 'Quantum ML'],
    pricing: 'From $10,000/month',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Space Technology',
    description: 'Satellite systems and advanced aerospace solutions.',
    features: ['Satellite Design', 'Launch Services', 'Space Analytics', 'Orbital Mechanics'],
    pricing: 'From $50,000/month',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    icon: '🏢',
    title: 'Enterprise IT',
    description: 'Infrastructure management and digital transformation services.',
    features: ['Cloud Migration', 'DevOps', 'Security', 'Monitoring'],
    pricing: 'From $2,000/month',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    content: 'Zion Tech Group transformed our AI capabilities. Their solutions are cutting-edge and reliable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'QuantumLabs',
    content: 'The quantum computing solutions provided by Zion have revolutionized our research capabilities.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP Engineering',
    company: 'SpaceX',
    content: 'Outstanding space technology solutions. Zion delivered exactly what we needed for our satellite program.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

// Stats data
const stats = [
  { label: 'Projects Completed', value: '500+', color: 'var(--primary-color)' },
  { label: 'Happy Clients', value: '200+', color: 'var(--secondary-color)' },
  { label: 'Years Experience', value: '10+', color: 'var(--accent-color)' },
  { label: 'Team Members', value: '50+', color: 'var(--purple-color)' }
];

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Performance monitoring
  useEffect(() => {
    // Add performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('Performance entry:', entry);
      });
    });
    observer.observe({ entryTypes: ['measure', 'navigation'] });
    
    return () => observer.disconnect();
  }, []);
  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Contact form handlers
  const handleContactSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactData);
    // In a real app, you would send this to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setContactData({ name: '', email: '', company: '', message: '' });
    setShowContactForm(false);
  }, [contactData]);

  const handleContactChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  }, []);

  // Memoized components for performance
  const ServiceCard = useMemo(() => 
    React.memo(({ service }: { service: typeof services[0] }) => (
      <div className="service-card interactive-card">
        <LazyImage
          src={service.image}
          alt={service.title}
          className="service-image"
        />
        <div className="service-icon">{service.icon}</div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index} className="feature-item">✓ {feature}</li>
          ))}
        </ul>
        <div className="service-pricing">
          <span className="price">{service.pricing}</span>
        </div>
        <button className="service-btn">Learn More</button>
      </div>
    )), []
