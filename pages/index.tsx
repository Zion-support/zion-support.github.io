import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import EnhancedFooter from '../components/layout/EnhancedFooter';

const Home: NextPage = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      link: "/services/ai-development"
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      link: "/services/cloud-migration"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      link: "/services/cybersecurity"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services/mobile-development"
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      link: "/services/web-development"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics.",
      link: "/services/data-analytics"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CEO",
      content: "Outstanding cloud migration service. They made the complex process seamless and cost-effective.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet LLC",
      role: "Security Director",
      content: "Their cybersecurity expertise helped us achieve full compliance and significantly improved our security posture.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud & Digital Transformation</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence. Call +1 302 464 0950." />
        <meta name="keywords" content="technology solutions, AI development, cloud services, cybersecurity, mobile development, web development, Delaware" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <EnhancedNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Leading technology solutions provider helping businesses transform their digital presence 
                with innovative AI, cloud architecture, and comprehensive development services.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Started Today
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Explore Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and drive digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link key={index} href={feature.link} className="group">
                  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 5 years of experience in delivering cutting-edge technology solutions, 
                  we've helped hundreds of businesses transform their digital presence and achieve 
                  unprecedented growth.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of expert engineers, data scientists, and consultants work tirelessly 
                  to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                    Learn More About Us
                  </Link>
                  <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Free consultation and project assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Custom solutions tailored to your needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>24/7 support and maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Proven track record of success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect technology solution for your needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </div>
  );
};

export default Home;