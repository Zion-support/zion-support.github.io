import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

<<<<<<< HEAD
const Home: NextPage = () => {
  const featuredServices = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI models, NLP solutions, and intelligent automation",
      icon: "🤖",
      link: "/services",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Cloud migration, DevOps, and scalable architecture",
      icon: "☁️",
      link: "/services",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Web & Mobile Development",
      description: "Full-stack applications and cross-platform mobile apps",
      icon: "🌐",
      link: "/services",
      color: "from-green-500 to-green-600"
    }
  ];

  const featuredProducts = [
    {
      title: "ZionAI Analytics Platform",
      description: "Enterprise AI-powered analytics and business intelligence",
      icon: "📊",
      link: "/products",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "SmartBot Builder",
      description: "No-code chatbot development with advanced NLP",
      icon: "💬",
      link: "/products",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "CloudCost Optimizer",
      description: "Intelligent cloud cost management and optimization",
      icon: "💰",
      link: "/products",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare & Life Sciences",
      description: "AI-powered medical imaging, telemedicine, and analytics",
      icon: "🏥",
      link: "/solutions"
    },
    {
      title: "Financial Services",
      description: "Risk assessment, blockchain payments, and compliance",
      icon: "🏦",
      link: "/solutions"
    },
    {
      title: "Manufacturing 4.0",
      description: "IoT platforms, AI quality control, and digital twins",
      icon: "🏭",
      link: "/solutions"
    }
  ];

=======
export default function HomePage() {
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="technology solutions, AI development, cloud architecture, blockchain, data analytics, web development, mobile development" />
      </Head>
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Our Services
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive technology solutions that drive business growth and digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Development</h3>
              <p className="text-gray-600 mb-6">Custom AI solutions and machine learning models tailored to your business needs and objectives.</p>
              <Link href="/services/ai-development" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cloud Architecture</h3>
              <p className="text-gray-600 mb-6">Scalable cloud solutions and infrastructure design for modern, high-performance applications.</p>
              <Link href="/services/cloud-services" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">End-to-end digital transformation services to modernize and optimize your business operations.</p>
              <Link href="/solutions" className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Years Experience</h3>
              <p className="text-gray-600">Decades of combined expertise in technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Projects Delivered</h3>
              <p className="text-gray-600">Successfully completed projects across industries</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Support Available</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">99%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Client Satisfaction</h3>
              <p className="text-gray-600">Consistently high satisfaction rates from our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
=======
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems that drive digital transformation and innovation across industries." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems that drive digital transformation and innovation across industries." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-slate-950 text-white relative">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Features Section */}
          <FeaturesSection />
          
          {/* Latest Content Section */}
          <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
            </div>
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Latest Autonomous Content
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Fresh insights and updates generated by our autonomous systems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0406",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0406",
                    color: "from-cyan-500 to-blue-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0405",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0405",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0404",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0404",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0111",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0111",
                    color: "from-orange-500 to-red-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0403",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0403",
                    color: "from-indigo-500 to-purple-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0402",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0402",
                    color: "from-yellow-500 to-orange-600"
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/75 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                        Read More <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-6 h-6 border border-white/30 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Ready to Innovate?
                </span>
              </h2>
                               <p className="text-xl text-white/80 mb-8 leading-relaxed">
                   Join the future of technology with Zion Tech Group. Let&apos;s build something extraordinary together.
                 </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <Link
                   href="/contact"
                   className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                 >
                   Start Your Journey
                 </Link>
                 <Link
                   href="/case-studies"
                   className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-xl"
                 >
                   View Our Work
                 </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
