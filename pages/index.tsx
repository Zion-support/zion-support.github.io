import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState, Service } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
=======
import Link from 'next/link';
import { ErrorBoundary } from '../components/ErrorBoundary';

interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

const contact: ContactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  site: 'https://ziontechgroup.com'
};

>>>>>>> main
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  });
<<<<<<< HEAD
=======

>>>>>>> main
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
<<<<<<< HEAD
=======

>>>>>>> main
  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
<<<<<<< HEAD
          <button
            onClick={() => window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  const featuredServices: Service[] = [
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      category: 'AI Services',
      features: ['Process Automation', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.',
      category: 'Micro SaaS',
      features: ['Rapid Development', 'User-friendly Design', 'API Integration', 'Scalable Architecture']
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="language" content="en-US" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
      </Head>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="min-h-screen bg-slate-950 text-white">
            {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
              <div className="relative container mx-auto px-4 py-20">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                    Zion Tech Group
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up">
                    Pioneering the future with innovative Micro SaaS, AI & IT Solutions
                  </p>
                  <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
                    We deliver cutting-edge technology solutions that transform businesses through intelligent automation,
                    scalable cloud infrastructure, and purpose-built micro applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                    <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Explore Our Services
                    </Link>
                    <Link href="/contact" className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-950 rounded-lg font-semibold transition-all duration-300">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-16 bg-slate-900/50">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="animate-fade-in">
                    <div className="text-4xl font-bold text-blue-400 mb-2">67+</div>
                    <div className="text-gray-300">Services</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Comprehensive technology solutions designed to accelerate your business growth
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service, index) => (
                    <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </li>
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </ul>
                      </div>
                      <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            </section>
            {/* Technology Stack */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-20 bg-slate-900/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
                  <p className="text-xl text-gray-400">Built with cutting-edge technologies</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map((tech, index) => (
                    <div key={tech} className="text-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tech}</div>
                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            </section>
            {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-xl text-gray-400">Ready to transform your business? Let's talk.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">{contact.phone}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">{contact.email}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300 text-sm">{contact.address}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Website</h3>
                    <p className="text-gray-300">{contact.site}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI Services & IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of 150+ micro SaaS products, 100+ AI services, and 100+ IT solutions. Transform your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, quantum computing, blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={contact.site} />
      </Head>

      <ErrorBoundary>
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
            <div className="max-w-4xl mx-auto">
              <h1
                id="hero-title"
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${
                  animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Zion Tech Group
              </h1>
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Innovative Micro SaaS, AI Services & IT Solutions
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
                100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
                to AI automation, quantum computing to blockchain solutions, we help businesses scale 
                efficiently and securely in the digital age.
              </p>
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} role="navigation" aria-label="Main navigation">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-lg"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Pricing
                </Link>
              </div>
              <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                  <p className="text-slate-300">Micro SaaS Products</p>
                </div>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                  <p className="text-slate-300">AI Services</p>
                </div>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                  <p className="text-slate-300">IT Solutions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16 px-4" role="main">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">
                Our Service Categories
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                  <p className="text-slate-300 mb-6">
                    Innovative, focused software solutions designed for modern businesses. 
                    Each product is built with scalability, security, and user experience in mind.
                  </p>
                  <ul className="text-slate-400 space-y-2 mb-6">
                    <li>• AI-Powered Video Clip Maker</li>
                    <li>• Smart Contract Analyzer</li>
                    <li>• Cybersecurity Threat Intelligence</li>
                    <li>• Multi-Language Website Translator</li>
                    <li>• Predictive Inventory Optimizer</li>
                  </ul>
                  <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                    View All Micro SaaS Products →
                  </Link>
                </div>
                <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                  <p className="text-slate-300 mb-6">
                    Advanced artificial intelligence solutions that transform how businesses operate, 
                    from machine learning to quantum AI integration.
                  </p>
                  <ul className="text-slate-400 space-y-2 mb-6">
                    <li>• Autonomous AI Agents</li>
                    <li>• AI-Powered Financial Trading</li>
                    <li>• AI Legal Document Analysis</li>
                    <li>• AI-Powered Voice Analytics</li>
                    <li>• AI-Powered Search & Discovery</li>
                  </ul>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                    Explore AI Services →
                  </Link>
                </div>
                <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                  <p className="text-slate-300 mb-6">
                    Comprehensive IT solutions for enterprise-grade operations, 
                    from cloud migration to quantum computing consulting.
                  </p>
                  <ul className="text-slate-400 space-y-2 mb-6">
                    <li>• Quantum Computing Consulting</li>
                    <li>• Blockchain & Web3 Solutions</li>
                    <li>• DevSecOps & Security Automation</li>
                    <li>• Enterprise Data Platform</li>
                    <li>• High-Performance Computing Solutions</li>
                  </ul>
                  <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                    Discover IT Solutions →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                  Call {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                  Email Us
                </a>
                <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                  Contact Form
                </Link>
              </div>
              <div className="text-slate-400">
                <p>{contact.address}</p>
                <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
>>>>>>> main
}