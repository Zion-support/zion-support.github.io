import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Building, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Factory, 
  Truck, 
  CreditCard,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Cpu,
  Database,
  BarChart3
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  href: string;
  color: string;
}
interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}
<<<<<<< HEAD

const stats = [
  { icon: Code, value: '150+', label: 'Micro SaaS Products' },
  { icon: Cpu, value: '100+', label: 'AI Services' },
  { icon: Building, value: '100+', label: 'IT Solutions' },
  { icon: Users, value: '500+', label: 'Happy Clients' }
];

const services: Service[] = [
  {
    title: 'Micro SaaS Solutions',
    description: 'Scalable, cost-effective software solutions designed for specific business needs.',
    icon: Code,
    features: ['Custom Development', 'API Integration', 'Scalable Architecture', '24/7 Support'],
    href: '/services/micro-saas',
    color: 'blue'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
    icon: Cpu,
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    href: '/services/ai-ml',
    color: 'purple'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Robust cloud solutions for scalability, security, and performance optimization.',
    icon: Cloud,
    features: ['Cloud Migration', 'DevOps Automation', 'Security Hardening', 'Cost Optimization'],
    href: '/services/cloud',
    color: 'green'
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    icon: Shield,
    features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    href: '/services/cybersecurity',
    color: 'red'
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale technology solutions for enterprise-level organizations.',
    icon: Building,
    features: ['ERP Systems', 'CRM Integration', 'Data Analytics', 'Process Automation'],
    href: '/services/enterprise',
    color: 'indigo'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
    href: '/services/mobile',
    color: 'yellow'
  }
];

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    content: 'Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'StartupXYZ',
    content: 'Their micro SaaS platform helped us scale from 0 to 10,000 users in just 6 months. Incredible work!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'Enterprise Solutions Ltd.',
    content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to partner for all technology needs.',
    rating: 5
  }
];

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-slate-300 mb-8"
            >
              Innovative Micro SaaS, AI Services & IT Solutions
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
              to AI automation, quantum computing to blockchain solutions, we help businesses scale 
              efficiently and securely in the digital age.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a 
                href="/services" 
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
=======
    <AccessibilityProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <SEOHead 
          title="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions"
          description="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions."
          keywords="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions"
        />
        <Analytics trackingId="G-XXXXXXXXXX" />
        <AccessibilityEnhancer />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse" />
            <div className="relative z-10 max-w-6xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
>>>>>>> 851330fe7bdf0d3f8d25725e98093210baa62046
              >
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Quote
              </a>
              <a 
                href="/about" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Service Categories</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  <service.icon className={`w-12 h-12 mb-6 ${
                    service.color === 'blue' ? 'text-blue-400' :
                    service.color === 'purple' ? 'text-purple-400' :
                    service.color === 'green' ? 'text-green-400' :
                    service.color === 'red' ? 'text-red-400' :
                    service.color === 'yellow' ? 'text-yellow-400' :
                    service.color === 'indigo' ? 'text-indigo-400' :
                    'text-blue-400'
                  }`} />
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-400">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className={`inline-flex items-center font-semibold group-hover:translate-x-1 transition-transform ${
                      service.color === 'blue' ? 'text-blue-400 hover:text-blue-300' :
                      service.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                      service.color === 'green' ? 'text-green-400 hover:text-green-300' :
                      service.color === 'red' ? 'text-red-400 hover:text-red-300' :
                      service.color === 'yellow' ? 'text-yellow-400 hover:text-yellow-300' :
                      service.color === 'indigo' ? 'text-indigo-400 hover:text-indigo-300' :
                      'text-blue-400 hover:text-blue-300'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-slate-400">Trusted by businesses worldwide</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 bg-slate-900/60 rounded-xl border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-400 mb-12">
                Get in touch with our experts to discuss your project requirements and discover 
                how our innovative solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
<<<<<<< HEAD
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
=======
                  Get Quote
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>
              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Service Categories</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to drive your business forward
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                                               <service.icon className={`w-12 h-12 mb-6 ${
                             service.color === 'blue' ? 'text-blue-400' :
                             service.color === 'purple' ? 'text-purple-400' :
                             service.color === 'green' ? 'text-green-400' :
                             service.color === 'red' ? 'text-red-400' :
                             service.color === 'yellow' ? 'text-yellow-400' :
                             service.color === 'indigo' ? 'text-indigo-400' :
                             'text-blue-400'
                           }`} />
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-400">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                                               <Link
                             href={service.href}
                             className={`inline-flex items-center font-semibold group-hover:translate-x-1 transition-transform ${
                               service.color === 'blue' ? 'text-blue-400 hover:text-blue-300' :
                               service.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                               service.color === 'green' ? 'text-green-400 hover:text-green-300' :
                               service.color === 'red' ? 'text-red-400 hover:text-red-300' :
                               service.color === 'yellow' ? 'text-yellow-400 hover:text-yellow-300' :
                               service.color === 'indigo' ? 'text-indigo-400 hover:text-indigo-300' :
                               'text-blue-400 hover:text-blue-300'
                             }`}
                           >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
                <p className="text-xl text-slate-400">Trusted by businesses worldwide</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="p-8 bg-slate-900/60 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-slate-400">{testimonial.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  Get in touch with our experts to discuss your project requirements and discover 
                  how our innovative solutions can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
        <PerformanceMonitor />
      </div>
    </AccessibilityProvider>
  );
}
export default function App() {
  return (
    <main>
      <h1>Hello App</h1>
    </main>
export default function App() {;
  return (
    <ErrorBoundary>;
      <Router>;
        <div className="min-h-screen bg-gray-50">;
          <Header />;
          <Sidebar />;
          <main className="flex-1 lg:ml-80">;
            <Routes>;
              <Route path="/" element={<HomePage />} />;
              <Route path="/about" element={<AboutPage />} />;
              <Route path="/contact" element={<ContactPage />} />;
              <Route path="/services" element={<ServicesPage />} />;
              <Route path="/pricing" element={<PricingPage />} />;
            </Routes>;
          </main>;
          <Footer />;
        </div>;
      </Router>;
    </ErrorBoundary>;
  );
}
;
export default /**
 * App - Function description
 */
function App() {
  return (
    <main>;
      <h1 > Hello App</h1>;
    </main>);
}
>>>>>>> 851330fe7bdf0d3f8d25725e98093210baa62046
