import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Users, CheckCircle, ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const services = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"]
    },
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with AI",
      icon: Users,
      color: "from-green-500 to-teal-500",
      link: "https://ziontechgroup.com/ai-customer-experience",
      price: "$399/month",
      features: ["Customer journey mapping", "AI personalization", "Sentiment analysis"]
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration",
      icon: Network,
      link: "https://ziontechgroup.com/edge-computing-orchestration",
      price: "$349/month",
      features: ["Edge node management", "IoT device management", "Real-time monitoring"]
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge technology solutions",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      link: "https://ziontechgroup.com/space-technology",
      price: "$2,499/month",
      features: ["Satellite management", "AI mission planning", "Quantum communication"]
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with neural interfaces",
      color: "from-pink-500 to-rose-500",
      link: "https://ziontechgroup.com/neural-interface",
      price: "$899/month",
      features: ["BCI development tools", "Neural signal processing", "AI pattern recognition"]
    }
  ];
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
const HomePage: React.FC = () => {
  return (
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Home from '@/pages/Home';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ErrorBanner } from '@/components/talent/ErrorBanner';
import { logWarn, logError } from '@/utils/productionLogger';
const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' }
];
const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    pricing: "Starting at $2,000/month",
    count: "25+ AI Solutions",
    popular: true
  },
    title: "IT Services",
    description: "Comprehensive IT solutions to power your digital transformation",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "Cybersecurity", "Infrastructure Management", "Digital Transformation"],
    pricing: "Starting at $1,500/month",
    count: "30+ IT Solutions",
    title: "Micro SaaS",
    description: "Innovative software as a service solutions for specialized business needs",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Custom Applications", "API Development", "Database Solutions", "Integration Services", "Workflow Automation", "Lead Management", "AI-Powered Tools", "Smart Contracts", "Content Moderation", "Energy Management"],
    pricing: "Starting at $29/month",
    count: "45+ Products",
  }
const benefits = [
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience"
    icon: Star,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes"
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
    icon: Award,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment"
  const { t } = useTranslation(); // Added this line
    <Layout
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."
      keywords="AI services, technology consulting, cloud solutions, digital transformation, machine learning, software development"
    >
      {t('test_error_button_text')}
    </button>
  );
};
const IndexPage: React.FC<HomePageProps> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const showDebug = router.query.debug === 'true';
  const showButton = process.env.NODE_ENV === 'development' || showDebug;
    <>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg={props.errorMessage || t('home_page_load_error')} />
        </div>
      </section>
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven track record speaks for itself
              </p>
              <Link href="/services">
                <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-700 mb-6">
                Scalable cloud infrastructure, migration services, and DevOps automation to optimize your operations.
                <span className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer inline-flex items-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
                End-to-end digital transformation services to modernize your business processes and technology stack.
                <span className="text-green-600 hover:text-green-700 font-semibold cursor-pointer inline-flex items-center">
          </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2">{contact.description}</p>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {contact.details}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold">{contact.details}</p>
                  )}
                </motion.div>
              ))}
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                  Get Started
                </Link>
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                  View Services
            </motion.div>
