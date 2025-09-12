<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '3,500+', label: 'Projects Completed' },
  { number: '95+', label: 'Services & Solutions' },
  { number: '200+', label: 'Expert Team Members' },
  { number: '20+', label: 'Years Experience' }
];

const services = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for your business',
    icon: Brain,
    href: "/ai-services",
    count: "40+ Solutions",
    pricing: "Starting at $1,800/month",
    marketPrice: "$2,500-500,000/month",
    benefits: ["40-95% accuracy improvement", "60-90% automation", "15-90% ROI increase"],
    setupTime: "2-40 weeks"
  },
  {
    title: "IT Services", 
    description: "40+ comprehensive IT services from cloud infrastructure to cybersecurity, DevOps, managed services, compliance, edge computing, quantum-ready infrastructure, 5G implementation, sustainable IT, zero-trust security, and enterprise digital transformation",
    icon: Network,
    href: "/it-services",
    count: "40+ Services",
    pricing: "Starting at $800/month",
    marketPrice: "$1,500-200,000/month",
    benefits: ["99.9% uptime", "30-50% cost reduction", "24/7 support"],
    setupTime: "1-24 weeks"
  },
  {
    title: "Micro SaaS",
    description: "50+ innovative micro SaaS solutions for modern businesses across all industries including AI-powered tools, automation platforms, subscription management, smart contracts, digital twins, edge computing, and specialized business applications with real-time pricing and instant deployment",
    icon: Cloud,
    href: "/micro-saas",
    count: "50+ Solutions",
    pricing: "Starting at $800/month",
    marketPrice: "$1,500-50,000/month",
    benefits: ["80% efficiency improvement", "60-90% cost savings", "10x faster deployment"],
    setupTime: "1-12 weeks"
  }
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for businesses worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group delivers 130+ comprehensive AI services, IT solutions, and innovative micro SAAS platforms 
                to accelerate your digital transformation and drive business growth. From cutting-edge AI and quantum computing 
                to edge computing, 5G networks, and sustainable IT solutions, we provide the technology foundation for tomorrow's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. 
                From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, 
                edge computing, 5G implementation, sustainable IT, and enterprise digital transformation. Our 130+ services cover every aspect of 
                modern technology needs with competitive pricing, real market analysis, and proven results that drive 
                measurable business growth and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {service.count}
                      </span>
                      {service.benefits && service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        {service.marketPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {service.marketPrice}
                          </span>
                        )}
                      </div>
                      {service.marketPrice && (
                        <div className="text-xs text-green-600 font-medium">
                          Save up to 40% vs market rate
                        </div>
                      )}
                    </div>
                    <Link
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

        {/* Featured Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and effective technology solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful projects and satisfied clients</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no hidden costs or surprises</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support and maintenance for your solutions</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
=======
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Comprehensive technology solutions designed to drive your business forward;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {services.map((service, index) => (;
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">;
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">;
                    <service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>;
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>;
                  <Link href={service.href} className="block">;
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">;
                      Learn More;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </div>;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>;
              <p className="text-lg text-gray-600">;
                We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {features.map((feature, index) => (;
                <div key={index} className="text-center">;
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                    <feature.icon className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>;
                  <p className="text-gray-600">{feature.description}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                Get Free Consultation;
              </Link>;
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                Learn More About Us;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer />;
    </>;
  );
});
Home.displayName = 'Home';
export default Home;
>>>>>>> origin/automation-fixes
=======
import React,{ memo } from 'react'; import Link from 'next/link'; import Navigation from '../components/Navigation'; import Footer from '../components/Footer'; import SEOHead from '../components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Phone,Mail,MapPin,Brain,Server,Smartphone,Globe,Zap,Shield,Users } from 'lucide-react'; const Home = memo(() => { const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] } as const; const stats = [ { number: '500+',label: 'Projects Completed' },{ number: '50+',label: 'Happy Clients' },{ number: '99.9%',label: 'Uptime Guarantee' },{ number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brain,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Server,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphone,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Globe,href: '/comprehensive-services' } ] as const; const features = [ { icon: Zap,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality' },{ icon: Shield,title: 'Enterprise Security',description: 'Bank-level security and compliance standards' },{ icon: Users,title: 'Expert Team',description: 'Dedicated professionals with years of experience' },{ icon: Globe,title: 'Global Reach',description: 'Serving clients worldwide with local expertise' } ] as const; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData as unknown as Record<string,unknown>} /> <Navigation /> <main className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" id="hero-heading"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"> Get Started </Link> <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"> View Services </Link> </div> </div> </div> </section> <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive technology solutions designed to drive your business forward</p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"> <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div> <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> <Link href={service.href} className="block"> <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </div> </Link> </div> ))} </div> </div> </section> <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2> <p className="text-lg text-gray-600">We deliver exceptional results through innovation,expertise,and dedication</p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {features.map((feature,index) => ( <div key={index} className="text-center"> <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <feature.icon className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3> <p className="text-gray-600">{feature.description}</p> </div> ))} </div> </div> </section> <section className="py-16 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-12"> <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2> <p className="text-lg text-gray-600">Ready to start your next project? Contact us today.</p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> <div className="text-center"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"> <Phone className="w-6 h-6 text-blue-600" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3> <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">+1 302 464 0950</a> </div> <div className="text-center"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"> <Mail className="w-6 h-6 text-blue-600" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">kleber@ziontechgroup.com</a> </div> <div className="text-center"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"> <MapPin className="w-6 h-6 text-blue-600" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3> <p className="text-gray-600">364 E Main St STE 1008<br />Middletown,DE 19709</p> <Link href="/contact" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"> Contact Us <ArrowRight className="w-4 h-4 ml-1" /> </Link> </div> </div> </div> </section> </main> <Footer /> </> )} export default Home;
>>>>>>> origin/automation-improvements
=======
    <QuantumHolographicMatrixBackground>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
          <meta name="description" content="Discover 500+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms. Achieve 1200% ROI with our innovative services." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, blockchain, cybersecurity, space technology, biotech AI, financial trading, metaverse, IoT, cloud computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="500+ revolutionary micro SaaS services with quantum AI and cutting-edge technology" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
              telephone: '+1 302 464 0950',
              email: 'kleber@ziontechgroup.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '364 E Main St STE 1008',
                addressLocality: 'Middletown',
                addressRegion: 'DE',
                postalCode: '19709',
                addressCountry: 'US'
              },
              sameAs: [
                'https://www.linkedin.com/company/zion-tech-group',
                'https://twitter.com/ziontechgroup'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+1 302 464 0950',
                contactType: 'sales',
                areaServed: 'US'
              }]
            }) }}
          />
        </Head>
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain, Zap, Target, BarChart3, Users, TrendingUp,
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  Building, Award, Lock, Server, Network, Monitor
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>
        <meta name="description" content="Zion Tech Group leads the future with revolutionary quantum AI solutions, autonomous systems, and cutting-edge technology platforms. Transform your business with next-generation technology." />
        <meta name="keywords" content="Zion Tech Group, quantum AI, autonomous systems, technology solutions, AI innovation, quantum computing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/zion-tech-group" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Revolutionary</span>
                    <span className="block text-purple-400">Quantum AI</span>
                    <span className="block">Solutions</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Zion Tech Group leads the future with cutting-edge quantum AI technology, autonomous systems, and revolutionary platforms that transform businesses and industries.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/zion-tech-group" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Technology</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Next-Generation Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                Our cutting-edge technology stack delivers unprecedented performance and capabilities.
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Brain className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Quantum AI Intelligence</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Revolutionary quantum computing algorithms that solve complex problems in seconds, not years.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Autonomous Systems</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Self-learning, self-optimizing systems that continuously improve and adapt to changing environments.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Advanced Security</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Quantum-resistant encryption and AI-powered threat detection for unparalleled security.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Global Scale</p>
                  <p className="mt-2 ml-16 text-base text-gray-300">
                    Distributed quantum networks that operate seamlessly across continents and time zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Transform Your Business?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-100">
              Join the quantum revolution and discover how Zion Tech Group can accelerate your success.
            </p>
            <Link href="/contact" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 sm:w-auto">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/40">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-300 text-base">
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Quantum AI
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Autonomous Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Technology Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2025 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
>>>>>>> origin/automation/changelog
