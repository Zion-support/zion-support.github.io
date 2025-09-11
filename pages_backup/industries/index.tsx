
=======
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


=======import { ;
  Heart, ;
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Heart, ;
  DollarSign, ;
  Settings, ;
  ShoppingCart, ;
  BookOpen, ;

} from 'lucide-react';


origin/cursor/integrate-build-improve-and-re-verify-c7b5
import SimpleLayout from '../../components/SimpleLayout';
  Brain;
} from 'lucide-react';
import Layout from '../../components/Layout';';
=======const industries = [;
  {;
    name: 'Healthcare',;
    description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.',;
    icon: Heart,;
    href: '/industries/healthcare',;
    features: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],;
    color: 'from-red-500 to-pink-500';

  {
    name: 'Finance',
    description: 'Secure financial services with blockchain technology, fraud detection, and automated trading systems.',
    icon: DollarSign,
=======
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    href: '/industries/finance,',
    features: ['Blockchain Solutions, 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],',
    color: 'from-green-500 to-emerald-500'';
  },
  {
    name: 'Manufacturing',
    description: 'Optimize production with IoT sensors, predictive maintenance, and smart factory solutions.',
    icon: Settings,
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    href: '/industries/manufacturing,',
    features: ['IoT Integration, 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],',
    color: 'from-blue-500 to-cyan-500'';
  },
  {
    name: 'Retail',
    description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    href: '/industries/retail,',
    features: ['Personalization, 'Inventory Management', 'Omnichannel', 'Customer Analytics'],',
    color: 'from-purple-500 to-violet-500'';
  },
  {
    name: 'Education',
    description: 'Revolutionize learning with AI tutoring, virtual classrooms, and personalized education platforms.',
    icon: BookOpen,
    href: '/industries/education',
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    color: 'from-orange-500 to-yellow-500'
    href: '/industries/education',
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    color: 'from-orange-500 to-yellow-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/education',
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    color: 'from-orange-500 to-yellow-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    href: '/industries/education,',
    features: ['AI Tutoring, 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],',
    color: 'from-orange-500 to-yellow-500'';
  },
  {
    name: 'Government',
    description: 'Modernize public services with secure citizen portals, data analytics, and digital transformation.',
    icon: Building,
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    href: '/industries/government',
    features: ['Citizen Portals', 'Data Analytics', 'Digital Services', 'Security Compliance'],
    color: 'from-gray-500 to-slate-500'
  }
];
const stats = [
  { number: '500+', label: 'Industry Projects' },
  { number: '50+', label: 'Fortune 500 Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Industry Support' }
];


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    href: '/industries/government,',
    features: ['Citizen Portals, 'Data Analytics', 'Digital Services', 'Security Compliance'],',
    color: 'from-gray-500 to-slate-500'';
  }
;];
const stats = [;
  { number: '500+, label: 'Industry Projects' },',
  { number: '50+, label: 'Fortune 500 Clients' },',
  { number: '99.9%, label: 'Uptime Guarantee' },',
  { number: '24/7, label: 'Industry Support' }',
;];



origin/cursor/integrate-build-improve-and-re-verify-c7b5
export default function IndustriesPage() {
  return (;
    <Layout);
      title="Industry Solutions - Zion Tech Group"";
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
import Layout from '../../components/Layout';
const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with innovative technology solutions',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'AI Diagnostics']
  },
  {
    title: 'Finance',
    description: 'Secure and scalable financial technology solutions',
    icon: DollarSign,
    href: '/industries/finance',
    features: ['Digital Banking', 'Payment Processing', 'Risk Management']
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0',
    icon: Settings,
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control']
  },
  {
    title: 'Retail',
    description: 'Enhance customer experience with retail technology',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics']
  },
  {
    title: 'Education',
    description: 'Modernize education with technology solutions',
    icon: Users,
    href: '/industries/education',
    features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics']
  },
  {
    title: 'Government',
    description: 'Secure government technology solutions',
    icon: Globe,
    href: '/industries/government',
    features: ['Citizen Services', 'Data Security', 'Digital Transformation']
  }

=======];

const benefits = [
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements',
    icon: Brain
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions designed for your specific industry needs',
    icon: Settings
  },
  {
    title: 'Compliance Ready',
    description: 'Solutions built with industry regulations and compliance in mind',
    icon: Shield
  },
  {
    title: 'Scalable Technology',
    description: 'Solutions that grow with your business and adapt to changing needs',
    icon: Cloud
  }
];

export default function IndustriesPage() {
  return (
    <Layout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges 
                and drive measurable business outcomes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Industries We Serve;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges;
                and drive measurable business outcomes.;
              </p>;
            </motion.div>;
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We provide specialized technology solutions across various industries, helping organizations leverage technology to achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {industries.map((industry, index) => {}
                const IconComponent = industry.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    <p className="text-gray-600 mb-6 leading-relaxed">";
                  >
                    <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                    <div className="mb-6">";
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>";
                      <div className="flex flex-wrap gap-2">";
                        {industry.features.map((feature, idx) => (,
                          <span}),
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full""
                          >;
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                      </div>,
                    </div>;
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>;
          </div>;
        </section>;
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"";
                    >;
                      <span>Learn More</span>,;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform" />", </Link>,;
                  </motion && motion.div>;
                    <div className="space-y-2 mb-6">;
                      {industry && industry.features.map((feature, idx) => (;
                        <div key={idx} className="flex items-center text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                          <span className="text-sm">{feature}</span>;
                        </div>;
                      ))}
                    </div>;
                    <Link href={industry && industry.href}>;
                      <a className="inline-flex items-center text-blue-400 hover: text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">;
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
                      </a>;
                    </Link>;
                  </motion && motion.div>;
                ),;
              })}
            </div>,
          </div>;
        </section>;
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"

ursor/fix-syntax-push-and-merge-to-main-40de
=======


=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Why Choose Our Industry Solutions?;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.;
              </p>;
            </motion.div>;

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >,
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
                <p className="text-gray-600">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              >,
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Users className="w-8 h-8 text-blue-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>";
                <p className="text-gray-600">";
                  Our team includes specialists with deep experience in each industry we serve, 
                  ensuring solutions that address real-world challenges.
                </p>
              </motion.div>
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >,
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Shield className="w-8 h-8 text-green-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>";
                <p className="text-gray-600">";
                  We ensure all solutions meet industry-specific regulatory requirements and;
                  maintain the highest security standards.;
                </p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
        {/* Stats Section */}
        <section className="py-20 bg-gray-50">"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              >,
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Cloud className="w-8 h-8 text-purple-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>";
                <p className="text-gray-600">";
                  Our solutions are designed to grow with your business, from startup to enterprise scale, 
                  with flexible deployment options.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Stats Section */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={index}
                  className="text-center""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Industry Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our industry-specific approach ensures that our solutions are perfectly tailored to your needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

                >,
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">";
                    {stat.number}
                  </div>,
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Transform Your Industry?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                Let our industry experts help you leverage technology to solve your sector-specific challenges.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  Explore Solutions;
                </Link>;
              </div>;
            >,;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">";
                Ready to Transform Your Industry?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">";
                Let our industry experts help you leverage technology to solve your sector-specific challenges.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  Explore Solutions;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
<<<<<<< HEAD
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can help your organization achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
=======
    </SimpleLayout>
    </Layout>

  );
