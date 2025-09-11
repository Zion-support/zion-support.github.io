class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const serviceHighlights = [
  {
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent&quot;></div>
        
        <div className=&quot;relative z-10 container mx-auto px-4 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;max-w-4xl mx-auto&quot;
          >
            <div className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8&quot;>
              <Shield className=&quot;w-5 h-5 text-red-400&quot; />
              <span className=&quot;text-red-400 font-medium&quot;>Cybersecurity Services</span>
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 neon-text text-white&quot;>
              <span className=&quot;bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Next-Generation
              </span>
              <br />
              <span className=&quot;text-white&quot;>Cybersecurity</span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Protect your business with cutting-edge cybersecurity solutions. From zero trust security to AI threat intelligence, 
              we provide comprehensive protection that adapts to evolving threats.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link href=&quot;#services&quot; className=&quot;group&quot;>
                <button className=&quot;bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2&quot;>
                  <span>Explore Services</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
              
              <Link href=&quot;/contact&quot; className=&quot;group&quot;>
                <button className=&quot;border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2&quot;>
                  <span>Get Protected</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
    color: 'text-purple-400',
  },];

import { motion } from 'framer-motion';
import {;
  Shield, Lock, Eye, AlertTriangle, Cpu, Globe, Cloud,;
  CheckCircle, ArrowRight, Star, Clock, Target,;
  Zap, Users, BarChart3, Settings, Database;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const serviceHighlights = [;
  {;
    title: 'Zero Trust Security';
    description: 'Never trust, always verify - Advanced zero trust implementation',;
    icon: Shield,;
    color: 'from-red-500 to-pink-600',;
    features: ['Continuous verificationMicro-segmentationAdaptive controlsReal-time monitoring'];
  },;
  {;
    title: 'AI Threat Intelligence',;
    description: 'Predict and prevent cyber threats with AI intelligence',;
    icon: Eye,;
    color: 'from-indigo-500 to-purple-600',;
    features: ['Real-time detectionPredictive analyticsAutomated responseGlobal intelligence'];
  },;
  {;
    title: 'Cloud Security Posture',;
    description: 'Secure your cloud infrastructure with comprehensive posture management',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600',;
    features: ['Multi-cloud monitoringCompliance automationRisk managementSecurity analytics'];
  },;
  {;
    title: 'DevSecOps Security',;
    description: 'Integrate security into your DevOps pipeline seamlessly',;
    icon: Cpu,;
    color: 'from-green-500 to-emerald-600',;
    features: ['Automated testingVulnerability scanningCompliance automationSecurity metrics'];
  },;
  {;
    title: 'IoT Security Platform',;
    description: 'Secure your IoT ecosystem with comprehensive protection',;
    icon: Globe,;
    color: 'from-purple-500 to-violet-600',;
    features: ['Device authenticationNetwork monitoringThreat detectionAutomated response'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const benefits = [;
  {;
    title: '99.99% Threat Detection';
    description: 'Advanced AI algorithms detect threats before they become incidents';
    icon: Shield;
    color: 'text-red-400';
  };
  {;
    title: 'Zero False Positives',;
    description: 'AI-powered analysis eliminates false alarms and alert fatigue',;
    icon: CheckCircle,;
    color: 'text-green-400';
  },;
  {;
    title: '24/7 Security Monitoring',;
    description: 'Round-the-clock protection with automated incident response',;
    icon: Clock,;
    color: 'text-blue-400';
  },;
  {;
    title: 'Compliance Automation',;
    description: 'Automated compliance reporting and audit preparation',;
    icon: BarChart3,;
    color: 'text-purple-400';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
export default function CybersecurityServices() {
  return (
    <Layout>
      <Head>
        <title>
          Cybersecurity Services - Zion Tech Group | Next-Generation Security
          Solutions
        </title>
        <meta
          name='description'
          content='Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions.'
        />
        <meta
          name='keywords'
          content='cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />
        {/* Open Graph */}
        <meta
          property='og:title'
          content='Cybersecurity Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Next-generation cybersecurity solutions for modern enterprises.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/cybersecurity-services'
        />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Cybersecurity Services - Zion Tech Group'
        />
        <meta
          name='twitter:description'
          content='Next-generation cybersecurity solutions for modern enterprises.'
        />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/twitter-image.jpg'
        />
        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />
        <meta name='contact:email' content='kleber@ziontechgroup.com' />
        <meta
          name='contact:address'
          content='364 E Main St STE 1008 Middletown DE 19709'
        />
        <meta name='contact:website' content='https://ziontechgroup.com' />
      </Head>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg'>
        <div className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent'></div>
        <div className='relative z-10 container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'
        <title>Cybersecurity Services - Zion Tech Group | Next-Generation Security Solutions</title>
        <meta name="description" content="Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions." />
        <meta name="keywords" content="cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Next-generation cybersecurity solutions for modern enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cybersecurity-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Twitter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta name="twitter:description" content="Next-generation cybersecurity solutions for modern enterprises." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">Cybersecurity Services</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 neon-text text-white'>
              <span className='bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="text-white">Cybersecurity</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Protect your business with cutting-edge cybersecurity solutions.
              From zero trust security to AI threat intelligence, we provide
              comprehensive protection that adapts to evolving threats.

            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='#services' className='group'>
                <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with cutting-edge cybersecurity solutions. From zero trust security to AI threat intelligence,
              we provide comprehensive protection that adapts to evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href='/contact' className='group'>
                <button className='border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2'>
              <Link href="/contact" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">
                  <span>Get Protected</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>
          <div className='w-4 h-4 bg-red-400 rounded-full'></div>
        {/* Floating Elements */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </section>
      {/* Service Highlights */}
      <section
        id='services'
        className='py-20 bg-gradient-to-b from-black to-gray-900'
      >
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
      {/* Service Highlights */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions that protect your digital assets and ensure business continuity
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='futuristic-card p-6 group hover:scale-105 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="futuristic-card p-6 group hover:scale-105 transition-all duration-300"
=======              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>
                <ul className='space-y-2'>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Detailed Services */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Detailed Services */}
      <section className='py-20 bg-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div

=======

      {/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Security</span> Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of cybersecurity services designed for modern enterprises
            </p>
          </motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {advancedCybersecurityServices2025.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='animated-border'
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedCybersecurityServices2025.map((service, index) => (

              Portfolio;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover our comprehensive range of cybersecurity services;
              designed for modern enterprises;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {advancedCybersecurityServices2025 && advancedCybersecurityServices2025.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}


                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
=======
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                                    <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-red-400">
                      {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Protected
                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={service.link} className="text-red-400 hover:text-red-300 font-medium flex items-center space-x-2 group">
=======
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link href={service.link} className="text-red-400 hover:text-red-300 font-medium flex items-center space-x-2 group">


                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href='/contact'
                      className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105'
                    >                      Get Protected
                    <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Protected


                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Protected
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Link>
                  </div>
                </div>
              </motion.div>
=======
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
=======
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div

=======
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div

=======

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Our Security</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced protection that keeps your business safe and compliant
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
=======

=======
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center group'          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (              <motion.div


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits && benefits.map((benefit, index) => (;
              <motion&& motion.div
                key={benefit && benefit.title}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-full h-full ${benefit.color}`} />
                </div>
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <benefit && benefit.icon className={`w-full h-full ${benefit && benefit.color}`} />;
                </div>;
                <h3 className='text-xl font-bold text-white mb-4'>;
                  {benefit && benefit.title}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;
                  {benefit && benefit.description}
                </p>              </motion && motion.div>;
            ))}
=======
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20'>;
        <div className='container mx-auto px-4 text-center'>          <motion&& motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Start Your Security Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">


              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>
                <div className="text-gray-300">ROI Improvement</div>
=======
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20'>
        <div className='container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}            className='max-w-4xl mx-auto'
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20'>;
        <div className='container mx-auto px-4 text-center'>          <motion&& motion.div

=======

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span>Start Your Security Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
=======

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
              Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;

=======  )
}
=======


=======
  )
}=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <Link href='/contact' className='group'>;
                <button className='bg - gradient - to - r from - red - 500 to - pink - 600 hover:from - red - 600 hover:to - pink - 700 text - white px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center space - x-2'>;
                  <span > Start Your Security Journey</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
              <Link;
                href='/comprehensive - services - showcase - 2025';
                className='group';
              >;
                <button className='border - 2 border - red - 500 / 50 hover:border - red - 400 text - red - 400 hover:text - red - 300 px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 hover:bg - red - 500 / 10 flex items - center space - x-2'>;
                  <span > View All Services</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
            </div>;
            <div className='mt - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center'>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>24 / 7</div>;
                <div className='text - gray - 300'>Security Monitoring</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>;
                  99.99%;
                </div>;
                <div className='text - gray - 300'>Threat Detection</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>450%</div>;
                <div className='text - gray - 300'>ROI Improvement</div>              </div>;
}
    </Layout>
  )
            className="max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Don't wait for a breach to happen. Protect your business today with our advanced cybersecurity solutions;
              and stay one step ahead of evolving threats.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link href="/contact" className="group">;
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">;
                  <span>Start Your Security Journey</span>;
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </button>;
              </Link>;
              <Link href="/comprehensive-services-showcase-2025" className="group">;
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">;
                  <span>View All Services</span>;
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </button>;
              </Link>;
            </div>;
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
              <div>;
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>;
                <div className="text-gray-300">Security Monitoring</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>;
                <div className="text-gray-300">Threat Detection</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>;
                <div className="text-gray-300">ROI Improvement</div>;
              </div>;
=======            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>);
;

    </Layout>);
;
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
