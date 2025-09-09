import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Code, Cloud, Brain, Shield, Zap, Globe } from 'lucide-react';
import AdvancedHero from '../components/AdvancedHero';
import AdvancedServicesShowcase from '../components/AdvancedServicesShowcase';
import AdvancedTestimonials from '../components/AdvancedTestimonials';
import AdvancedContactForm from '../components/AdvancedContactForm';
import AdvancedStats from '../components/AdvancedStats';
import AdvancedFeaturesShowcase from '../components/AdvancedFeaturesShowcase';
import AdvancedPricing from '../components/AdvancedPricing';
import AdvancedTeamShowcase from '../components/AdvancedTeamShowcase';
import AdvancedCaseStudies from '../components/AdvancedCaseStudies';
import AdvancedNewsletter from '../components/AdvancedNewsletter';
import AdvancedFAQ from '../components/AdvancedFAQ';
import AdvancedBlog from '../components/AdvancedBlog';
import AdvancedAnalytics from '../components/AdvancedAnalytics';
import AdvancedCustomerSuccess from '../components/AdvancedCustomerSuccess';
import AdvancedProjectManagement from '../components/AdvancedProjectManagement';
import AdvancedClientPortal from '../components/AdvancedClientPortal';
import AdvancedTimeTracking from '../components/AdvancedTimeTracking';
import AdvancedInvoiceManagement from '../components/AdvancedInvoiceManagement';
import AdvancedTeamScheduling from '../components/AdvancedTeamScheduling';
import AdvancedPerformanceDashboard from '../components/AdvancedPerformanceDashboard';
import AdvancedWorkflowAutomation from '../components/AdvancedWorkflowAutomation';
import AdvancedAnalyticsDashboard from '../components/AdvancedAnalyticsDashboard';
import AdvancedProjectHub from '../components/AdvancedProjectHub';
import AdvancedAIAssistant from '../components/AdvancedAIAssistant';
import AdvancedPerformanceOptimizer from '../components/AdvancedPerformanceOptimizer';
import FinalIntegrationHub from '../components/FinalIntegrationHub';
import EnhancedPerformanceMetrics from '../components/EnhancedPerformanceMetrics';
import EnhancedSecurityDashboard from '../components/EnhancedSecurityDashboard';
import AdvancedDataVisualization from '../components/AdvancedDataVisualization';
import AdvancedNotificationCenter from '../components/AdvancedNotificationCenter';
;
export default function HomePage(...args: any[]): any {;
  const [_isMenuOpen, _setIsMenuOpen] = useState(false);
  const [_activeSection, _setActiveSection] = useState('hero');
  const [_isLoaded, _setIsLoaded] = useState(false);
;
  useEffect(() => {;
    _setIsLoaded(true);
  }, []);
;
;
;
export default function Index(...args[]):  {;
	const features = [;
		{;
			icon: Brain,;
			title: 'AI & Machine Learning',;
			description: 'Multi-agent workflows, RAG systems, and intelligent automation platforms.',;
			href: '/services#ai',;
			color: 'from-purple-600 to-indigo-700';
		},;
		{;
			icon: Cloud,;
			title: 'Cloud & DevOps',;
			description: 'Serverless infrastructure, Kubernetes orchestration, and DevOps automation.',;
			href: '/services#cloud',;
			color: 'from-cyan-600 to-blue-700';
		},;
		{;
			icon: Shield,;
			title: 'Cybersecurity Platform',;
			description: 'Enterprise-grade security with AI threat detection and zero-trust architecture',;
			href: '/services/ai-cybersecurity-platform',;
			color: 'from-red-500 to-orange-600';
		},;
		{;
			icon: Rocket,;
			title: 'Micro SAAS Platform',;
			description: 'Build and launch micro SAAS applications in weeks with our comprehensive platform',;
			href: '/services/micro-saas-platform',;
			color: 'from-purple-500 to-indigo-600';
		};
	];
;
;
  const technologies = [;
    { name: 'React & Next.js', icon: '⚛️' },;
    { name: 'Node.js & Python', icon: '🐍' },;
    { name: 'AWS & Azure', icon: '☁️' },;
    { name: 'Docker & Kubernetes', icon: '🐳' },;
    { name: 'TensorFlow & PyTorch', icon: '🤖' },;
    { name: 'Blockchain & Web3', icon: '⛓️' };
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Zion Tech Group</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Explore Services
            </Link>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-2">
                    <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-purple-400 transition-colors">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6">
                Innovative, focused software solutions that solve specific business problems with minimal overhead.
              </p>
              <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* IT Services */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions for modern businesses.
              </p>
              <Link href="/services/it-services" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* AI Services */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages.
              </p>
              <Link href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology solutions and dedicated support.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Expertise",
                description: "500+ successful projects with industry-leading expertise"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security with 99.9% uptime guarantee"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "24/7 expert support from our experienced team"
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Agile development with rapid deployment capabilities"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a free consultation and discover how our innovative solutions can drive your success.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                details: "+1 302 464 0950",
                link: "tel:+13024640950",
                description: "Speak directly with our experts"
              },
              {
                icon: Mail,
                title: "Email Us",
                details: "kleber@ziontechgroup.com",
                link: "mailto:kleber@ziontechgroup.com",
                description: "Get detailed project information"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                details: "364 E Main St STE 1008, Middletown DE 19709",
                link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
                description: "Our headquarters in Delaware"
              },
              {
                icon: Clock,
                title: "Business Hours",
                details: "Mon-Fri: 9AM-6PM EST",
                link: null,
                description: "Available when you need us"
              }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div 
                  key={contact.title}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2">{contact.description}</p>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {contact.details}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold">{contact.details}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Get Started Today
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

        {/* Services Section */}
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Comprehensive technology solutions designed to drive your business forward;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {};
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
              {};
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
  )});

Home.displayName = 'Home';

export default Home;