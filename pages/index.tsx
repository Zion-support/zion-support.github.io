import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const services = [
    {
      title: "AI Meeting Assistant",
      description: "Revolutionary AI meeting platform with real-time transcription and intelligent summaries.",
      icon: "🤖",
      link: "/services/ai-meeting-assistant",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Smart Invoice Generator",
      description: "AI-powered invoice automation with smart templates and payment tracking.",
      icon: "📊",
      link: "/services/smart-invoice-generator",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: "💻",
      link: "/services/web-development",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services for optimal performance.",
      icon: "☁️",
      link: "#",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      link: "#",
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions.",
      icon: "📈",
      link: "#",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const features = [
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      icon: "⚡"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and data protection",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: "📞"
    },
    {
      title: "Custom Solutions",
      description: "Tailored solutions for your specific business needs",
      icon: "🎯"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="technology solutions, web development, AI integration, cloud services, mobile apps, data analytics, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Zion Tech Group - Technology Solutions" />
        <meta property="og:description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Leading technology solutions provider specializing in web development, 
                mobile applications, AI integration, and cloud services. Transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions to help your business thrive in the digital age.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.link}>
                    <button className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:shadow-lg transform hover:scale-105`}>
                      Learn More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl text-white">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}