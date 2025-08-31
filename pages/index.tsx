import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield, Globe } from 'lucide-react';

const Home: NextPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity First",
      description: "Enterprise-grade security and compliance solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern applications"
    }
  ];

  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and machine learning models",
      price: "From $2,500",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or Google Cloud",
      price: "From $5,000",
      features: ["Assessment & Planning", "Data Migration", "Performance Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security audit and implementation",
      price: "From $2,000",
      features: ["Security Audit", "Zero Trust Security", "Compliance Management"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "Their cloud migration expertise saved us months of work and significantly reduced our infrastructure costs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, Enterprise Inc",
      content: "The cybersecurity implementation was seamless and our compliance audit passed with flying colors.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="AI development, cloud migration, cybersecurity, web development, technology consulting, Zion Tech Group" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/services">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services">
                  <span className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <span className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <a 
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;