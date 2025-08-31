<<<<<<< HEAD
import React from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
<<<<<<< HEAD
import { Briefcase, HardDrive, Lightbulb, Users, Brain, ArrowRight const categories = [
=======
import { Briefcase, HardDrive, Lightbulb, Users, Brain, ArrowRight  } from 'lucide-react.ts';

const categories = [
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  {
    title: "Comprehensive Services",
    description: "Micro SAAS, IT services, and AI solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/comprehensive-services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-solutions",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "AI Services",
    description: "Cutting-edge AI solutions, chatbots, and machine learning",
    icon: "🤖",
    link: "/ai-services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Micro SAAS",
    description: "Cloud-based software solutions for modern businesses",
    icon: "☁️",
    link: "/micro-saas",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "⚡",
    link: "/all-services",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: "📈",
    link: "/all-services",
    color: "from-emerald-500 to-green-600",
  },
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
];

const specialServices = [
  {
<<<<<<< HEAD
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services"
  },
  {
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
<<<<<<< HEAD
    title: "AI Development",
    link: "/ai-development"
  },
  {
    title: "Cloud Migration",
    link: "/cloud-migration"
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity"

=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Services Comparison",
    link: "/services-comparison"
  }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
];

interface CategoriesSectionProps extends React.PropsWithChildren<{}> {
  showTitle?: boolean;
<<<<<<< HEAD

export function CategoriesSection(...args: any[]): any {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1


  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"


  };

  const cardVariants = {
    hidden: { 
      scale: 0.95,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"


  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

=======
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8ab1f3 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Categories
            </h2>
<<<<<<< HEAD
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation.
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
=======
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: anytrue }}

          {categories.map((category, index)  => (
            <motion.div
              key={category.title}
              variants={itemVariants}
<<<<<<< HEAD
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}

              <Link to={category.link} className="group block h-full">
                <motion.div
                  className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}

                  {/* Icon with enhanced background */}
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
=======
              className="group block"
            >
              <Link to={category.link} className="block">
                <div className="rounded-lg overflow-hidden h-full border border-blue-600 bg-slate-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/25">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              </Link>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD

        {/* Special Services Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}

          <h3 className="text-center text-2xl font-bold text-white mb-8">Premium Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
=======
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            {specialServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
<<<<<<< HEAD
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-2xl text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm"

                {service.title}
=======
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 border border-blue-500/20 hover:border-blue-400/50 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                {service.title}
                <span className="text-sm">→</span>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              </Link>
            ))}
          </div>
        </motion.div>
<<<<<<< HEAD

        {/* CTA Section */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
<<<<<<< HEAD

=======
        >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors text-lg font-medium py-2"

            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
=======
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="text-cyan-400 border-b border-cyan-400 hover:border-cyan-300 transition-colors flex items-center gap-2"
          >
            View All Categories
            <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </Link>
        </motion.div>
      </div>
    </section>
  );
}}}}}}}}}}