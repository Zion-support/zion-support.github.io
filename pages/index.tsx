import type { NextPage } from 'next';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../src/components/Sidebar';
import SEOHead from '../src/components/seo/SEOHead';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu, Server, Smartphone, MapPin } from 'lucide-react';

const Home = memo(() => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);
  
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };
  const stats = [
  { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
  {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: Brain,
      href: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and cloud solutions',
      icon: Server,
      href: '/it-services'
    },
    {
      title: 'Micro SaaS',
      description: 'Custom software-as-a-service applications',
      icon: Smartphone,
      href: '/micro-saas'
    },
    {
      title: 'All Services',
      description: 'Complete technology solutions overview',
      icon: Globe,
      href: '/comprehensive-services'
    }
  ];

  const features = [
  {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise',
    },
  ];

  return (
    <EnhancedLayout>
      <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Zion Tech Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p>Custom AI solutions and machine learning models for your business needs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p>Scalable cloud solutions and infrastructure design for modern applications.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p>End-to-end digital transformation services to modernize your business.</p>
            </div>
          </div>
      </div>
    </EnhancedLayout>
  );
});

Home.displayName = 'Home';

export default Home;