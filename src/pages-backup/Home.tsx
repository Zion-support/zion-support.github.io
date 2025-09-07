import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FooterNewsletter from '../components/FooterNewsletter';
import { Button } from '../components/ui/button';

const services = [
  {
    icon: '🧠',
    title: 'AI Services',
    description: 'Leverage cutting-edge AI to automate, analyze, and innovate your business processes.',
    link: '/services/ai-services',
  },
  {
    icon: '💻',
    title: 'IT Solutions',
    description: 'Comprehensive IT support, infrastructure management, and digital transformation strategies.',
    link: '/services/it-services',
  },
  {
    icon: '🚀',
    title: 'Micro SaaS',
    description: 'Scalable, niche software solutions designed to solve specific business problems efficiently.',
    link: '/services/micro-saas',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Protect your assets with robust security measures, threat detection, and compliance.',
    link: '/services/cybersecurity',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Seamless cloud migration, management, and optimization for enhanced flexibility and scale.',
    link: '/services/cloud-solutions',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Craft intuitive and high-performance mobile applications for iOS and Android.',
    link: '/services/mobile-development',
  },
];

const features = [
  {
    icon: '💡',
    title: 'Innovation at Core',
    description: 'We constantly explore new technologies to bring you the best solutions.',
  },
  {
    icon: '🤝',
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We tailor solutions to your unique needs.',
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    description: 'Our services are designed to grow with your business, ensuring long-term value.',
  },
  {
    icon: '🛡️',
    title: 'Robust Security',
    description: 'Implementing industry-leading security practices to protect your data.',
  },
];

const testimonials = [
  {
    quote: "Zion Tech Group transformed our operations with their AI solutions. Highly recommend!",
    author: "Jane Doe, CEO of InnovateCo",
    rating: 5,
  },
  {
    quote: "Their IT support is unparalleled. Quick, efficient, and always on point.",
    author: "John Smith, CTO of GlobalCorp",
    rating: 5,
  },
  {
    quote: "The Micro SaaS product they built for us saved countless hours. Fantastic work!",
    author: "Emily White, Founder of StartupX",
    rating: 4,
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center justify-center text-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Add a subtle pattern or animation here if desired */}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Innovate. Transform. Grow.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Leading the future with cutting-edge AI, robust IT solutions, and scalable Micro SaaS applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Showcase */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Join countless businesses that have achieved remarkable success with Zion Tech Group.
          </motion.p>
          <Link to="/contact">
            <Button className="bg-white text-blue-700 hover:bg-gray-200 px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Footer Newsletter */}
      <FooterNewsletter />
    </div>
  );
};

export default Home;