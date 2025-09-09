import Head from 'next/head';
import Link from 'next/link';
import EnhancedHero from '../components/ui/EnhancedHero';
import ServiceCard from '../components/ui/ServiceCard';
import EnhancedCard from '../components/ui/EnhancedCard';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Shield, Zap, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', icon: <Zap className="w-6 h-6" />, color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" />, color: 'text-fuchsia-400' },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6" />, color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', icon: <Star className="w-6 h-6" />, color: 'text-green-400' },
    { value: '$100B+', label: 'Combined Market Value', icon: <Users className="w-6 h-6" />, color: 'text-yellow-400' },
    { value: '1200%+', label: 'Average ROI', icon: <Zap className="w-6 h-6" />, color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence systems for business automation and decision-making',
      link: '/services/ai-solutions',
      icon: '🤖',
      category: 'Artificial Intelligence',
      features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics'],
      rating: 4.9,
      users: 2500,
      trialDays: 30,
      popular: true
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-native platforms and infrastructure solutions',
      link: '/services/cloud-infrastructure',
      icon: '☁️',
      category: 'Cloud Computing',
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
      rating: 4.8,
      users: 1800,
      trialDays: 30
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for modern digital threats',
      link: '/services/cybersecurity',
      icon: '🔒',
      category: 'Security',
      features: ['Threat Detection', 'Zero Trust', 'Compliance'],
      rating: 4.9,
      users: 3200,
      trialDays: 30
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing and optimization services',
      link: '/services/quantum-computing',
      icon: '⚛️',
      category: 'Quantum Technology',
      features: ['Quantum Algorithms', 'Optimization', 'Simulation'],
      rating: 4.7,
      users: 800,
      trialDays: 30
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group — AI, Cloud, and Cybersecurity Solutions</title>
        <meta name="description" content="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group — AI, Cloud, and Cybersecurity Solutions" />
        <meta property="og:description" content="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business." />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group — AI, Cloud, and Cybersecurity Solutions" />
        <meta name="twitter:description" content="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com/',
              logo: 'https://ziontechgroup.com/favicon.svg',
              sameAs: ['https://www.linkedin.com/company/zion-technologies/'],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: contactInfo.mobile,
                email: contactInfo.email,
                contactType: 'customer service'
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: contactInfo.address
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <EnhancedHero
          title="Zion Tech Group"
          subtitle="Leading Technology Innovation"
          description="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business."
          primaryCTA={{
            text: "Explore Services",
            href: "/services",
            variant: "primary"
          }}
          secondaryCTA={{
            text: "Get Started",
            href: "/contact",
            variant: "outline"
          }}
          stats={heroStats}
          background="gradient"
        />

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge technology solutions designed to accelerate your business transformation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ServiceCard
                    service={service}
                    variant={service.popular ? 'featured' : 'default'}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mb-8 text-blue-100">
              Join the future of technology with Zion Tech Group's cutting-edge solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8">
              Get in Touch
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <EnhancedCard className="text-center p-6" glassmorphism={true}>
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-blue-400 font-semibold mb-2">Phone</div>
                  <div className="text-gray-300">{contactInfo.mobile}</div>
                </EnhancedCard>
              </motion.div>
              <motion.div variants={itemVariants}>
                <EnhancedCard className="text-center p-6" glassmorphism={true}>
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-blue-400 font-semibold mb-2">Email</div>
                  <div className="text-gray-300">{contactInfo.email}</div>
                </EnhancedCard>
              </motion.div>
              <motion.div variants={itemVariants}>
                <EnhancedCard className="text-center p-6" glassmorphism={true}>
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-blue-400 font-semibold mb-2">Address</div>
                  <div className="text-gray-300">{contactInfo.address}</div>
                </EnhancedCard>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
