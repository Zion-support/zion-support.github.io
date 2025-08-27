import React from 'react';
  {
    title: "Comprehensive Services",
    description: "Micro SAAS, IT services, and AI solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    gradient: "from-zion-purple/20 to-zion-purple-dark/20",
    features: ["24/7 Support", "Expert Team", "Custom Solutions"],
    stats: "500+ Services"
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-blue",
    gradient: "from-zion-cyan/20 to-zion-blue/20",
    features: ["AI Experts", "Global Network", "Verified Profiles"],
    stats: "10K+ Experts"
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-zion-cyan-light to-zion-cyan",
    gradient: "from-zion-cyan-light/20 to-zion-cyan/20",
    features: ["High-Performance", "Flexible Rental", "24/7 Monitoring"],
    stats: "1000+ Devices"
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-zion-purple-light to-zion-purple",
    gradient: "from-zion-purple-light/20 to-zion-purple/20",
    features: ["Latest Tech", "AI Solutions", "Future-Ready"],
    stats: "100+ Innovations"
  }
];
const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Shield className="w-5 h-5" />,
    description: "Professional on-site technical support"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services",
    icon: <Rocket className="w-5 h-5" />,
    description: "End-to-end technology solutions"
  },
  {
    title: "AI Integration",
    link: "/ai-integration",
    icon: <Sparkles className="w-5 h-5" />,
    description: "Seamless AI implementation"
  },
  {
    title: "Cloud Solutions",
    link: "/cloud-solutions",
    icon: <Zap className="w-5 h-5" />,
    description: "Scalable cloud infrastructure"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading
            title="Explore Our Categories"
            subtitle="Discover comprehensive solutions across all technology domains"
            description="From AI-powered services to on-site IT support, we've got everything you need to transform your business"
          />
        </div>

        {/* Main Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                to={category.link}
                className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-zion-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="text-sm font-semibold text-zion-blue mb-4">
                  {category.stats}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-zion-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>))}
        </motion.div>

        {/* Special Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Specialized Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our specialized offerings designed to meet your unique business needs
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={service.link}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-blue">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-zion-blue transition-colors">
                    {service.title}
                  </h3>
=======
import { Link } from 'react-router-dom';

export function CategoriesSection() {
  const categories = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence and machine learning solutions",
      icon: "🤖",
      link: "/services/ai",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security and compliance solutions",
      icon: "🔒",
      link: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and DevOps solutions",
      icon: "☁️",
      link: "/services/cloud",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business process modernization",
      icon: "⚡",
      link: "/services/transformation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-zion-slate-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Service Categories
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover comprehensive solutions across multiple domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <Link to={category.link} className="group block h-full">
                <div className="rounded-2xl overflow-hidden h-full border border-zion-purple/30 bg-zion-slate p-8 transition-all duration-500 hover:border-zion-cyan/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-cyan/20">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white text-3xl">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            to="/services" 
            className="group inline-flex items-center gap-3 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan/80 transition-colors text-lg font-medium py-2"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);
}
