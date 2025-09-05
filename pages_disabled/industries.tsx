
const industries = [;
  {}
    title: 'Healthcare,',
    icon: Heart,
    description: 'AI-powered diagnostics, medical imaging, drug discovery, and patient care solutions.',',
    color: 'from-red-500 to-pink-500,',
    services: [;
      'AI Medical Imaging Analysis,',
      'Drug Discovery Platform',',
      'Patient Data Analytics',',
      'Telemedicine Solutions',',
      'Clinical Decision Support',',
      'Healthcare IoT Management'';
    ],
    benefits: [;
      'Improved Patient Outcomes,',
      'Reduced Diagnostic Time',',
      'Enhanced Treatment Accuracy',',
      'Cost-effective Care Delivery'';
    ],
    caseStudy: 'Reduced diagnostic time by 60% for a major hospital network,',
    pricing: 'Starting at $15,000/project',
  },
  {}
    title: 'Finance,',
    icon: Building,
    description: 'Fraud detection, risk assessment, algorithmic trading, and financial planning solutions.',',
    color: 'from-green-500 to-emerald-500,',
    services: [;
      'AI Fraud Detection,',
      'Algorithmic Trading',',
      'Risk Assessment Models',',
      'Financial Planning Tools',',
      'Regulatory Compliance',',
      'Blockchain Solutions'';
    ],
    benefits: [;
      'Enhanced Security,',
      'Reduced Financial Risk',',
      'Improved Compliance',',
      'Automated Trading'';
    ],
    caseStudy: 'Prevented $2M+ in fraudulent transactions for a major bank,',
    pricing: 'Starting at $10,000/setup',
  },
  {}
    title: 'E-commerce,',
    icon: ShoppingCart,
    description: 'Personalized recommendations, inventory optimization, and customer experience enhancement.',',
    color: 'from-blue-500 to-cyan-500,',
    services: [;
      'AI Recommendation Engine,',
      'Inventory Optimization',',
      'Customer Analytics',',
      'Price Optimization',',
      'Chatbot Support',',
      'Visual Search'';
    ],
    benefits: [;
      'Increased Sales,',
      'Better Customer Experience',',
      'Optimized Inventory',',
      'Reduced Cart Abandonment'';
    ],
    caseStudy: 'Increased conversion rates by 35% for an online retailer,',
    pricing: 'Starting at $3,000/setup',
  },
  {}
    title: 'Manufacturing,',
    icon: Settings,
    description: 'Predictive maintenance, quality control, supply chain optimization, and smart factory solutions.',',
    color: 'from-orange-500 to-yellow-500,',
    services: [;
      'Predictive Maintenance,',
      'Quality Control AI',',
      'Supply Chain Optimization',',
      'Smart Factory Solutions',',
      'IoT Integration',',
      'Energy Optimization'';
    ],
    benefits: [;
      'Reduced Downtime,',
      'Improved Quality',',
      'Cost Optimization',',
      'Enhanced Efficiency'';
    ],
    caseStudy: 'Reduced equipment downtime by 40% for a manufacturing plant,',
    pricing: 'Starting at $20,000/project',
  },
  {}
    title: 'Education,',
    icon: BookOpen,
    description: 'Personalized learning, automated assessment, and educational content generation.',',
    color: 'from-purple-500 to-indigo-500,',
    services: [;
      'Personalized Learning,',
      'Automated Assessment',',
      'Content Generation',',
      'Student Analytics',',
      'Virtual Tutoring',',
      'Learning Management'';
    ],
    benefits: [;
      'Personalized Education,',
      'Improved Learning Outcomes',',
      'Automated Grading',',
      'Enhanced Engagement'';
    ],
    caseStudy: 'Improved student performance by 25% in a university program,',
    pricing: 'Starting at $5,000/setup',
  },
  {}
    title: 'Government,',
    icon: Shield,
    description: 'Citizen services, data analytics, cybersecurity, and digital transformation solutions.',',
    color: 'from-gray-600 to-slate-600,',
    services: [;
      'Citizen Services Portal,',
      'Data Analytics Platform',',
      'Cybersecurity Solutions',',
      'Digital Transformation',',
      'Compliance Management',',
      'Public Safety AI'';
    ],
    benefits: [;
      'Improved Citizen Services,',
      'Enhanced Security',',
      'Better Data Insights',',
      'Streamlined Operations'';
    ],
    caseStudy: 'Streamlined citizen services for a state government,',
    pricing: 'Starting at $25,000/project',
  }
;];

const technologies = [;
  { name: 'AI & Machine Learning, icon: Brain, description: 'Advanced AI solutions for every industry' },',
  { name: 'Cloud Infrastructure, icon: Cloud, description: 'Scalable and secure cloud solutions' },',
  { name: 'Cybersecurity, icon: Shield, description: 'Enterprise-grade security solutions' },',
  { name: 'Data Analytics, icon: BarChart3, description: 'Insights-driven decision making' },',
  { name: 'IoT & Edge Computing, icon: Network, description: 'Connected and intelligent systems' },',
  { name: 'Blockchain, icon: Globe, description: 'Secure and transparent solutions' }',
;];

export default function IndustriesPage() {
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <Head>;
        <title>Industry Solutions - Zion Tech Group</title>;
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, e-commerce, manufacturing, education, and government sectors." />"
        <meta name="keywords" content="industry solutions, healthcare AI, fintech, e-commerce technology, manufacturing automation, education technology, government solutions" />"
      </Head>;

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
        <div className="absolute inset-0">";
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
        </div>;

        <div className="container mx-auto px-4 relative z-10">";
          <motion.div);
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center""
          >;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">";
              Industry-Specific{' '}',
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                Solutions;
              </span>;
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.';
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                Get Industry Consultation;
              </Link>;
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">";
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">"
        <div className="container mx-auto px-4">";
          <motion.div;
            className="text-center mb-16"";
  Cloud
} from 'lucide-react';
const industries = [
  {
    title: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnostics, medical imaging, drug discovery, and patient care solutions.',
    color: 'from-red-500 to-pink-500',
    services: [
      'AI Medical Imaging Analysis',
      'Drug Discovery Platform',
      'Patient Data Analytics',
      'Telemedicine Solutions',
      'Clinical Decision Support',
      'Healthcare IoT Management'
    ],
    benefits: [
      'Improved Patient Outcomes',
      'Reduced Diagnostic Time',
      'Enhanced Treatment Accuracy',
      'Cost-effective Care Delivery'
    ],
    caseStudy: 'Reduced diagnostic time by 60% for a major hospital network',
    pricing: 'Starting at $15,000/project'
  },
  {
    title: 'Finance',
    icon: Building,
    description: 'Fraud detection, risk assessment, algorithmic trading, and financial planning solutions.',
    color: 'from-green-500 to-emerald-500',
    services: [
      'AI Fraud Detection',
      'Algorithmic Trading',
      'Risk Assessment Models',
      'Financial Planning Tools',
      'Regulatory Compliance',
      'Blockchain Solutions'
    ],
    benefits: [
      'Enhanced Security',
      'Reduced Financial Risk',
      'Improved Compliance',
      'Automated Trading'
    ],
    caseStudy: 'Prevented $2M+ in fraudulent transactions for a major bank',
    pricing: 'Starting at $10,000/setup'
  },
  {
    title: 'E-commerce',
    icon: ShoppingCart,
    description: 'Personalized recommendations, inventory optimization, and customer experience enhancement.',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'AI Recommendation Engine',
      'Inventory Optimization',
      'Customer Analytics',
      'Price Optimization',
      'Chatbot Support',
      'Visual Search'
    ],
    benefits: [
      'Increased Sales',
      'Better Customer Experience',
      'Optimized Inventory',
      'Reduced Cart Abandonment'
    ],
    caseStudy: 'Increased conversion rates by 35% for an online retailer',
    pricing: 'Starting at $3,000/setup'
  },
  {
    title: 'Manufacturing',
    icon: Settings,
    description: 'Predictive maintenance, quality control, supply chain optimization, and smart factory solutions.',
    color: 'from-orange-500 to-yellow-500',
    services: [
      'Predictive Maintenance',
      'Quality Control AI',
      'Supply Chain Optimization',
      'Smart Factory Solutions',
      'IoT Integration',
      'Energy Optimization'
    ],
    benefits: [
      'Reduced Downtime',
      'Improved Quality',
      'Cost Optimization',
      'Enhanced Efficiency'
    ],
    caseStudy: 'Reduced equipment downtime by 40% for a manufacturing plant',
    pricing: 'Starting at $20,000/project'
  },
  {
    title: 'Education',
    icon: BookOpen,
    description: 'Personalized learning, automated assessment, and educational content generation.',
    color: 'from-purple-500 to-indigo-500',
    services: [
      'Personalized Learning',
      'Automated Assessment',
      'Content Generation',
      'Student Analytics',
      'Virtual Tutoring',
      'Learning Management'
    ],
    benefits: [
      'Personalized Education',
      'Improved Learning Outcomes',
      'Automated Grading',
      'Enhanced Engagement'
    ],
    caseStudy: 'Improved student performance by 25% in a university program',
    pricing: 'Starting at $5,000/setup'
  },
  {
    title: 'Government',
    icon: Shield,
    description: 'Citizen services, data analytics, cybersecurity, and digital transformation solutions.',
    color: 'from-gray-600 to-slate-600',
    services: [
      'Citizen Services Portal',
      'Data Analytics Platform',
      'Cybersecurity Solutions',
      'Digital Transformation',
      'Compliance Management',
      'Public Safety AI'
    ],
    benefits: [
      'Improved Citizen Services',
      'Enhanced Security',
      'Better Data Insights',
      'Streamlined Operations'
    ],
    caseStudy: 'Streamlined citizen services for a state government',
    pricing: 'Starting at $25,000/project'
  }
];
const technologies = [
  { name: 'AI & Machine Learning', icon: Brain, description: 'Advanced AI solutions for every industry' },
  { name: 'Cloud Infrastructure', icon: Cloud, description: 'Scalable and secure cloud solutions' },
  { name: 'Cybersecurity', icon: Shield, description: 'Enterprise-grade security solutions' },
  { name: 'Data Analytics', icon: BarChart3, description: 'Insights-driven decision making' },
  { name: 'IoT & Edge Computing', icon: Network, description: 'Connected and intelligent systems' },
  { name: 'Blockchain', icon: Globe, description: 'Secure and transparent solutions' }
];
export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, e-commerce, manufacturing, education, and government sectors." />
        <meta name="keywords" content="industry solutions, healthcare AI, fintech, e-commerce technology, manufacturing automation, education technology, government solutions" />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Industry Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
              Industries We Serve;
            </h2>;
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
              We understand the unique challenges and opportunities in each industry. Our solutions are designed to address specific sector needs while driving innovation and growth.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">";
            {industries.map((industry, index) => {}
              const IconComponent = industry.icon;
              return (;
                <motion.div);
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We understand the unique challenges and opportunities in each industry. Our solutions are designed to address specific sector needs while driving innovation and growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >,
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>,
                    <IconComponent className="w-8 h-8 text-white" />";
                  </div>;
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">";
                    {industry.title}
                  </h3>,
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">";
                    {industry.description}
                  </p>,

                  <div className="mb-6">";
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>";
                    <ul className="space-y-2">";
                      {industry.services.map((service, serviceIndex) => (,
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                          {service}
                        </li>,
                      ))}
                    </ul>,
                  </div>;

                  <div className="mb-6">";
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>";
                    <ul className="space-y-2">";
                      {industry.benefits.map((benefit, benefitIndex) => (,
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">"
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />";
                          {benefit}
                        </li>,
                      ))}
                    </ul>,
                  </div>;

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">";
                    <p className="text-sm text-gray-600 italic">";
                      <strong>Case Study:</strong> {industry.caseStudy}
                    </p>,
                  </div>;

                  <div className="flex items-center justify-between">";
                    <span className="text-lg font-semibold text-blue-600">{industry.pricing}</span>"
                    <Link;
                      href="/contact"";
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"";
                    >;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                    </Link>;
                  </div>;
                </motion.div>;
              );
            })}
          </div>,
        </div>;
      </section>;

      {/* Technologies Section */}
      <section className="py-20 bg-white">"
        <div className="container mx-auto px-4">";
          <motion.div;
            className="text-center mb-16"";
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      <strong>Case Study:</strong> {industry.caseStudy}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">{industry.pricing}</span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">";
              Technologies We Use;
            </h2>;
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">";
              We leverage cutting-edge technologies to deliver innovative solutions across all industries.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {technologies.map((tech, index) => {}
              const IconComponent = tech.icon;
              return (;
                <motion.div);
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors""
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver innovative solutions across all industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >,
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <IconComponent className="w-8 h-8 text-blue-600" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-2">";
                    {tech.name}
                  </h3>,
                  <p className="text-gray-600">";
                    {tech.description}
                  </p>,
                </motion.div>;
              );
            })}
          </div>,
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
        <div className="container mx-auto px-4 text-center">";
          <motion.div;
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Ready to Transform Your Industry?;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Let our industry experts help you implement the right technology solutions for your specific sector.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                Get Industry Consultation;
              </Link>;
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                Learn About Our Expertise;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our industry experts help you implement the right technology solutions for your specific sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Industry Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Our Expertise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}