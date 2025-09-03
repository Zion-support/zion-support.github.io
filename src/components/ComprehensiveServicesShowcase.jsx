<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function ComprehensiveServicesShowcase() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="ComprehensiveServicesShowcase - Zion Tech Group" description="Professional ComprehensiveServicesShowcase services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">ComprehensiveServicesShowcase</h1>
        <p className="text-gray-300 text-lg">
          Professional ComprehensiveServicesShowcase services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import React, { useState } from &apos;
import { motion } from &apos;framer-motion';;react&apos;';
import { motion, AnimatePresence } from &apos;framer-motion';
>>>>>>> main
import {}
  Brain,;
  Shield,;
  Rocket,;
  Globe,;
  Zap,;
  ArrowRight,;
  Star,;
  Users,;
  TrendingUp,;
  CheckCircle,;
  DollarSign,';
<<<<<<< HEAD
  Clock,';
  Target,'';
  Award''} from 'lucide-react';
import { Link } from 'react-router-dom';
;
=======
  Clock,&apos;';
  Target,&apos;&apos;';
  Award&apos;&apos;'&apos;} from &apos;lucide-react&apos;';
import { Link } from &apos;react-router-dom';
=======
<<<<<<< HEAD
import React, { useState } from 'react'';'
<<<<<<< HEAD
""
=======
import { motion, AnimatePresence } from 'framer-motion';
import {}
  Brain, Shield,
  Rocket, Globe,
  Zap, ArrowRight,
  Star, Users,
  TrendingUp, CheckCircle,
  DollarSign, ';'
  Clock, '';
  Target, ''';'
  Award''''} from 'lucide-react'';'
import { Link } from 'react-router-dom';
>>>>>>> main

>>>>>>> main
// Import the new service data;
;&apos;&apos;
const serviceCategories = []{}
<<<<<<< HEAD
';
<<<<<<< HEAD
    id: 'micro-saas','';
    name: 'Micro SAAS Solutions','';
    icon: <Rocket className='w-6 h-6' />,';
    color: 'from-purple-600 to-pink-600',;
    services: revolutionary2027AdvancedMicroSaasServices},;
  {}
';
    id: 'it-infrastructure','';
    name: 'IT Infrastructure & Cybersecurity','';
    icon: <Shield className='w-6 h-6' />,';
    color: 'from-red-600 to-orange-600',;
    services: revolutionary2027ITInfrastructureCybersecurityServices},;
  {}
';
    id: 'ai-innovation','';
    name: 'AI Innovation Services','';
    icon: <Brain className='w-6 h-6' />,';
    color: 'from-blue-600 to-cyan-600',;
=======
    id: &apos;micro-saas&apos;,'&apos;&apos;';
    name: &apos;Micro SAAS Solutions&apos;,'&apos;&apos;';
    icon:&apos;&apos; <Rocket className=&apos;w-6 h-6&apos; />,';
    color: &apos;from-purple-600 to-pink-600&apos;,
    services: revolutionary2027AdvancedMicroSaasServices},
  {}
';
    id: &apos;it-infrastructure&apos;,'&apos;&apos;';
    name: &apos;IT Infrastructure & Cybersecurity&apos;,'&apos;&apos;'
    icon:&apos;&apos; <Shield className=&apos;w-6 h-6&apos; />,';
    color: &apos;from-red-600 to-orange-600&apos;,
    services: revolutionary2027ITInfrastructureCybersecurityServices},
  {}
';
    id: &apos;ai-innovation&apos;,'&apos;&apos;';
    name: &apos;AI Innovation Services&apos;,'&apos;&apos;'
    icon:&apos;&apos; <Brain className=&apos;w-6 h-6&apos; />,';
    color: &apos;from-blue-600 to-cyan-600&apos;,
>>>>>>> main
    services: revolutionary2027AIInnovationServices}
];&apos;&apos;
export function ComprehensiveServicesShowcase() {}
';
<<<<<<< HEAD
';
'';
  const [selectedCategory, setSelectedCategory] = useState('micro-saas');
  const [selectedService, setSelectedService] = useState(null);
  const containerVariants = {}
    hidden: { opacity: 0 },;
    visible: {}
      opacity: 1,;
      transition: {}
        staggerChildren: 0.1,;
        delayChildren: 0.2}
=======
&apos;';
&apos;&apos;';&apos;&apos;
  const [selectedCategory, setSelectedCategory] = useState(&apos;micro-saas&apos;);&apos;
  const [selectedService, setSelectedService] = useState(null);
  const containerVariants = {}
    hidden: { opacit,y: 0 },
    visible: {}
=======
';'
    id: 'micro-saas', '''';
    name: 'Micro SAAS Solutions', '''';
    icon: <Rocket className='w-6 h-6' />, ';'
    color: 'from-purple-600 to-pink-600', services: revolutionary2027AdvancedMicroSaasServices},
  {}
';'
    id: 'it-infrastructure', ''''
    name: 'IT Infrastructure & Cybersecurity', ''''
    icon: <Shield className='w-6 h-6' />,';'
    color: 'from-red-600 to-orange-600', services: revolutionary2027ITInfrastructureCybersecurityServices},
  {}
';'
    id: 'ai-innovation', ''''
    name: 'AI Innovation Services', ''''
    icon: <Brain className='w-6 h-6' />,';'
    color: 'from-blue-600 to-cyan-600', services: revolutionary2027AIInnovationServices}
];
export function ComprehensiveServicesShowcase() {}
';'
'';
''';'
  const [selectedCategory, setSelectedCategory] = useState('micro-saas');
  const [selectedService, setSelectedService] = useState(null);
  const containerVariants = {}
    hidden: { opacity: 0 }, visible: {}
>>>>>>> main
      opacity: 1,
      transition: {}
        staggerChildren: 0.1, delayChildren: 0.2}
>>>>>>> main
    }
  }
;
  const itemVariants = {}
<<<<<<< HEAD
  hidden: { y: 20,;
  opacity: 0},;
    visible: {}
      y: 0,;
      opacity: 1,;
      transition: {}
'';
        duration: 0.5,'';
        ease: 'easeOut''}
=======
<<<<<<< HEAD
  hidden: { ,y: 20,
  opacity: 0},
=======
  hidden: { y: 20, opacity: 0},
>>>>>>> main
    visible: {}
      y: 0, opacity: 1,
      transition: {}
<<<<<<< HEAD
&apos;&apos;';
        duration: 0.5,&apos;&apos;'';
        ease: &apos;easeOut&apos;&apos;'}
=======
''';'
        duration: 0.5, '''';
        ease: 'easeOut'''}
>>>>>>> main
>>>>>>> main
    }
  }
;&apos;&apos;
  const cardVariants = {}
<<<<<<< HEAD
  hidden: { scale: 0.95,;
  opacity: 0},;
    visible: {}
      scale: 1,;
      opacity: 1,;
      transition: {}
'';
        duration: 0.4,'';
        ease: 'easeOut''}
    }
  }';';
  return ('';
    <section className='py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>'';
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        {/* Header Section */}'';
        <motion.div '';
          className='text-center mb-16'';
          initial = {}
  { opacity: 0,;
  y: 30}}
=======
<<<<<<< HEAD
  hidden: { scal,e: 0.95,
  opacity: 0},
=======
  hidden: { scale: 0.95, opacity: 0},
>>>>>>> main
    visible: {}
      scale: 1, opacity: 1,
      transition: {}
<<<<<<< HEAD
&apos;&apos;';
        duration: 0.4,&apos;&apos;'';
        ease: &apos;easeOut&apos;&apos;'}
    }
  }';';
  return (&apos;&apos;'&apos;&apos;'
    <section className=&apos;py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light&apos;>'&apos;&apos;'&apos;&apos;
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 l,g:px-8&apos;>
        {/* Header Section */}&apos;&apos;'&apos;&apos;
        <motion.div &apos;&apos;'';
          className=&apos;text-center mb-16&apos;&apos;';
=======
''';'
        duration: 0.4, '''';
        ease: 'easeOut'''}
    }
  }';'
  return (''''
    <section className='py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>''''
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
        {/* Header Section */}''''
        <motion.div '''';
          className='text-center mb-16''';
>>>>>>> main
          initial = {}
  { opacity: 0, y: 30}}
>>>>>>> main
          animate = {}
  { opacity: 1,;
  y: 0}}
<<<<<<< HEAD
          transition={{ duration: 0.6 }}''>'';
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
            Revolutionary 2027 Services'';
          </h2>'';
          <p className='text-xl text-zion-cyan-light max-w-3xl mx-auto'>;
            Discover cutting-edge micro SAAS solutions, advanced IT infrastructure, and innovative AI services;
            designed to transform your business and drive exponential growth.;
          </p>;
          ''{/* Contact Information */}'';
          <div className='mt-8 p-6 bg-zion-slate-dark/50 rounded-2xl border border-zion-cyan/20'>'';
            <h3 className='text-2xl font-semibold text-zion-cyan mb-4'>Ready to Transform Your Business?</h3>'';
            <div className='grid md:grid-cols-3 gap-6 text-sm'>'';
              <div className='flex items-center justify-center space-x-2'>'';
                <Clock className='w-5 h-5 text-zion-cyan' />'';
                <span className='text-white'>24/7 Support Available</span>'';
              </div>'';
              <div className='flex items-center justify-center space-x-2'>'';
                <Target className='w-5 h-5 text-zion-cyan' />'';
                <span className='text-white'>Custom Solutions</span>'';
              </div>'';
              <div className='flex items-center justify-center space-x-2'>'';
                <Award className='w-5 h-5 text-zion-cyan' />'';
                <span className='text-white'>Proven Results</span>;
              </div>'';
            </div>'';
            <div className='mt-4 text-center'>'';
              <p className='text-zion-cyan-light'>;
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com'';
              </p>'';
              <p className='text-zion-cyan-light text-sm'>;
                364 E Main St STE 1008 Middletown DE 19709;
              </p>;
            </div>;
          </div>;
        </motion.div>;
        {/* Category Navigation */}'';
        <motion.div '';
          className='flex flex-wrap justify-center gap-4 mb-12'';
          initial = {}
  { opacity: 0,;
  y: 20}}
=======
<<<<<<< HEAD
          transition={{ duration: 0.6 }}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
          <h2 className=&apos;text-4xl md:text-5xl font-bold text-white mb-6&apos;>
            Revolutionary 2027 Services&apos;&apos;'&apos;&apos;
          </h2>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-xl text-zion-cyan-light max-w-3xl mx-auto&apos;>
=======
          transition={{ duration: 0.6 }}'''>'''''
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Revolutionary 2027 Services''''
          </h2>''''
          <p className='text-xl text-zion-cyan-light max-w-3xl mx-auto'>
<<<<<<< HEAD
            Discover cutting-edge micro SAAS solutions, advanced IT infrastructure, and innovative AI services
            designed to transform your business and drive exponential growth.
=======
>>>>>>> main
            Discover cutting-edge micro SAAS solutions, advanced IT infrastructure, and innovative AI services;
            designed to transform your business and drive exponential growth.&apos;
>>>>>>> main
          </p>
<<<<<<< HEAD
          &apos;&apos;'{/* Contact Information */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;mt-8 p-6 bg-zion-slate-dark/50 rounded-2xl border border-zion-cyan/20&apos;>'&apos;&apos;'&apos;&apos;
            <h3 className=&apos;text-2xl font-semibold text-zion-cyan mb-4&apos;>Ready to Transform Your Business?&apos;</h3>&apos;&apos;'&apos;&apos;'
            <div className=&apos;grid md:grid-cols-3 gap-6 text-sm&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex items-center justify-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                <Clock className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;&apos;'&apos;&apos;'
                <span className=&apos;text-white&apos;>24/7 Support Available&apos;</span>&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center justify-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                <Target className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;&apos;'&apos;&apos;'
                <span className=&apos;text-white&apos;>Custom Solutions&apos;</span>&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center justify-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                <Award className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;&apos;'&apos;&apos;'
                <span className=&apos;text-white&apos;>Proven Results&apos;</span>
              </div>&apos;&apos;'&apos;&apos;
            </div>&apos;&apos;'&apos;&apos;'
            <div className=&apos;mt-4 text-center&apos;>'&apos;&apos;'&apos;&apos;
              <p className=&apos;text-zion-cyan-light&apos;>&apos;'
                <strong>Contac,t:</strong> +1 302 464 0950 | kleber@ziontechgroup.com&apos;&apos;'&apos;&apos;
              </p>&apos;&apos;'&apos;&apos;'
              <p className=&apos;text-zion-cyan-light text-sm&apos;>
                364 E Main St STE 1008 Middletown DE 19709&apos;
=======
          '''{/* Contact Information */}'''''
          <div className='mt-8 p-6 bg-zion-slate-dark/50 rounded-2xl border border-zion-cyan/20'>''''
            <h3 className='text-2xl font-semibold text-zion-cyan mb-4'>Ready to Transform Your Business?</h3>''''
            <div className='grid md: grid-cols-3 gap-6 text-sm'>''''
              <div className='flex items-center justify-center space-x-2'>''''
                <Clock className='w-5 h-5 text-zion-cyan' />''''
                <span className='text-white'>24/7 Support Available</span>''''
              </div>''''
              <div className='flex items-center justify-center space-x-2'>''''
                <Target className='w-5 h-5 text-zion-cyan' />''''
                <span className='text-white'>Custom Solutions</span>''''
              </div>''''
              <div className='flex items-center justify-center space-x-2'>''''
                <Award className='w-5 h-5 text-zion-cyan' />''''
                <span className='text-white'>Proven Results</span>
              </div>''''
            </div>''''
            <div className='mt-4 text-center'>''''
              <p className='text-zion-cyan-light'>
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com''''
              </p>''''
              <p className='text-zion-cyan-light text-sm'>
                364 E Main St STE 1008 Middletown DE 19709
>>>>>>> main
              </p>
            </div>
          </div>
        </motion.div>
<<<<<<< HEAD
        {/* Category Navigation */}&apos;&apos;'&apos;&apos;
        <motion.div &apos;&apos;'&apos;
          className=&apos;flex flex-wrap justify-center gap-4 mb-12&apos;&apos;';
=======
        {/* Category Navigation */}''''
        <motion.div ''''
          className='flex flex-wrap justify-center gap-4 mb-12''';
>>>>>>> main
          initial = {}
  { opacity: 0, y: 20}}
>>>>>>> main
          animate = {}
  { opacity: 1,;
  y: 0}}
          transition = {}
<<<<<<< HEAD
  { duration: 0.6,;
=======
<<<<<<< HEAD
  { duration: 0.6,
>>>>>>> main
  delay: 0.2}}
        >{serviceCategories.map ( (category) => (&apos;}&apos;<button;
=======
  { duration: 0.6, delay: 0.2}}
        >{serviceCategories.map ( (category) => (<button;
>>>>>>> main
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${}
`;
<<<<<<< HEAD
`'`;'
`'`'`;
                selectedCategory === category.id`'`'`'`'
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`''`'`'`
                  : 'bg-zion-slate-dark text-zion-cyan-light hover:bg-zion-slate hover:text-zion-cyan border border-zion-cyan/30'````}`}
            >{category.icon}
=======
<<<<<<< HEAD
`&apos;`;
`&apos;`&apos;`;
                selectedCategory === category.id`&apos;`&apos;`&apos;`;
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`&apos;&apos;`&apos;`&apos;`
                  : &apos;bg-zion-slate-dark text-zion-cyan-light hover:bg-zion-slate hove,r:text-zion-cyan border border-zion-cyan/30&apos;````}`}
            >{category.icon}&apos;&apos;
>>>>>>> main
              <span>{category.name}</span>
            </button>) ) }
        </motion.div>
        {/* Services Grid */}&apos;&apos;'&apos;&apos;
        <motion.div&apos;&apos;'&apos;
          className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&apos;&apos;'';
          variants={containerVariants}&apos;&apos;'';
          initial=&apos;hidden&apos;&apos;'';
          animate=&apos;visible&apos;&apos;'>{currentServices.map((service) => (&apos;}&apos;
            <motion.div&apos;&apos;';
              key={service.id}&apos;&apos;'';
              className=&apos;group cursor-pointer&apos;&apos;';
              variants={itemVariants}
              onClick={ () => setSelectedService (service) }
            >&apos;&apos;'&apos;&apos;
              <motion.div&apos;&apos;'';
                className=&apos;bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full&apos;&apos;';
                variants={cardVariants}
                whileHover = {}
  {}
&apos;&apos;';
                  y: -8,&apos;&apos;'';
                  boxShadow: &apos;0 20px 40px rgba(0, 0, 0,&apos;&apos;'';
  0.3)&apos;}}
              >&apos;&apos;'{/* Service Header */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-start justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;text-4xl&apos;>{service.icon}&apos;</div>&apos;&apos;'{service.popular && (&apos;&apos;'&apos;&apos;}'
                    <div className=&apos;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium&apos;>
                      Popular&apos;
                    </div>) }
                </div>
&apos;&apos;'{/* Service Info */}&apos;&apos;'&apos;&apos;'
                <h3 className=&apos;text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors&apos;>
                  {service.name}&apos;&apos;'&apos;&apos;
                </h3>&apos;&apos;'&apos;&apos;'
                <p className=&apos;text-zion-cyan-light text-sm mb-4 line-clamp-2&apos;>
                  {service.tagline}&apos;
                </p>
&apos;&apos;'{/* Pricing */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                    <DollarSign className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-2xl font-bold text-white&apos;>{service.price}&apos;</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-zion-cyan-light&apos;>{service.period}&apos;</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-center space-x-1&apos;>'&apos;&apos;'&apos;&apos;
                    <Star className=&apos;w-4 h-4 text-yellow-400 fill-current&apos; />&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-white text-sm&apos;>{service.rating}&apos;</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-zion-cyan-light text-sm&apos;>({service.reviews})&apos;</span>
                  </div>
                </div>
&apos;&apos;'{/* Features Preview */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex flex-wrap gap-2&apos;>
                    {service.features.slice(0, 3).map((feature, index) => (&apos;}
                      <span&apos;&apos;'
                        key={index}&apos;&apos;'';
                        className=&apos;bg-zion-slate/50 text-zion-cyan-light text-xs px-2 py-1 rounded-full &apos;>{feature}&apos;&apos;
                      </span>
                    ))}&apos;&apos;'{service.features.length > 3 && (&apos;&apos;'&apos;&apos;}'
                      <span className=&apos;bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full&apos;>
                        +{service.features.length-3} more&apos;
                      </span>) }
                  </div>
                </div>
&apos;&apos;'{/* Market Info */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;mb-4 p-3 bg-zion-slate/30 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex items-center justify-between text-xs&apos;>'&apos;&apos;'&apos;&apos;
                    <span className=&apos;text-zion-cyan-light&apos;>Market Size:&apos;</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-white font-medium&apos;>{service.marketSize}&apos;</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-center justify-between text-xs mt-1&apos;>'&apos;&apos;'&apos;&apos;
                    <span className=&apos;text-zion-cyan-light&apos;>Growth Rate:&apos;</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-green-400 font-medium&apos;>{service.growthRate}&apos;</span>
                  </div>
                </div>
&apos;&apos;'{/* CTA Button */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center justify-between&apos;>&apos;'
                  <Link&apos;&apos;';
                    to={service.link}&apos;&apos;'';
                    className=&apos;flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 &apos;>'&apos;&apos;''
                    <span>Learn More</span>&apos;&apos;'&apos;&apos;'
                    <ArrowRight className=&apos;w-4 h-4 group-hove,r:translate-x-1 transition-transform&apos; />&apos;&apos;'&apos;&apos;
                  </Link>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;text-xs text-zion-cyan-light&apos;>
                    {service.trialDays} day trial&apos;
=======
`'`;'
`'`'`;
<<<<<<< HEAD
                selectedCategory === category.id`'`'`'`;
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`'`'`'`;
=======
                selectedCategory === category.id`'`'`'`;'
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`''`'`'`
>>>>>>> main
                  : 'bg-zion-slate-dark text-zion-cyan-light hover:bg-zion-slate hover:text-zion-cyan border border-zion-cyan/30'````}`}
            >{category.icon}
              <span>{category.name}</span>;
            </button>) ) }
<<<<<<< HEAD
        </motion.div>;
        {/* Services Grid */}'';
        <motion.div'';
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'';
          variants={containerVariants}'';
          initial='hidden'';
          animate='visible''>{currentServices.map((service) => (;
            <motion.div'';
              key={service.id}'';
              className='group cursor-pointer'';
              variants={itemVariants}
              onClick={ () => setSelectedService (service) }
            >'';
              <motion.div'';
                className='bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full'';
                variants={cardVariants}
                whileHover = {}
  {}
'';
                  y: -8,'';
                  boxShadow: '0 20px 40px rgba(0, 0, 0,'';
  0.3)'}}
              >''{/* Service Header */}'';
                <div className='flex items-start justify-between mb-4'>'';
                  <div className='text-4xl'>{service.icon}</div>''{service.popular && ('';
                    <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium'>;
                      Popular;
                    </div>) }
                </div>;
''{/* Service Info */}'';
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors'>;
                  {service.name}'';
                </h3>'';
                <p className='text-zion-cyan-light text-sm mb-4 line-clamp-2'>;
                  {service.tagline}
                </p>;
''{/* Pricing */}'';
                <div className='flex items-center justify-between mb-4'>'';
                  <div className='flex items-center space-x-2'>'';
                    <DollarSign className='w-5 h-5 text-zion-cyan' />'';
                    <span className='text-2xl font-bold text-white'>{service.price}</span>'';
                    <span className='text-zion-cyan-light'>{service.period}</span>'';
                  </div>'';
                  <div className='flex items-center space-x-1'>'';
                    <Star className='w-4 h-4 text-yellow-400 fill-current' />'';
                    <span className='text-white text-sm'>{service.rating}</span>'';
                    <span className='text-zion-cyan-light text-sm'>({service.reviews})</span>;
                  </div>;
                </div>;
''{/* Features Preview */}'';
                <div className='mb-4'>'';
                  <div className='flex flex-wrap gap-2'>;
                    {service.features.slice(0, 3).map((feature, index) => (;
                      <span'';
                        key={index}'';
                        className='bg-zion-slate/50 text-zion-cyan-light text-xs px-2 py-1 rounded-full '>{feature}
                      </span>;
                    ))}''{service.features.length > 3 && ('';
                      <span className='bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full'>;
                        +{service.features.length-3} more;
                      </span>) }
                  </div>;
                </div>;
''{/* Market Info */}'';
                <div className='mb-4 p-3 bg-zion-slate/30 rounded-lg'>'';
                  <div className='flex items-center justify-between text-xs'>'';
                    <span className='text-zion-cyan-light'>Market Size:</span>'';
                    <span className='text-white font-medium'>{service.marketSize}</span>'';
                  </div>'';
                  <div className='flex items-center justify-between text-xs mt-1'>'';
                    <span className='text-zion-cyan-light'>Growth Rate:</span>'';
                    <span className='text-green-400 font-medium'>{service.growthRate}</span>;
                  </div>;
                </div>;
''{/* CTA Button */}'';
                <div className='flex items-center justify-between'>;
                  <Link'';
                    to={service.link}'';
                    className='flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 '>'';
                    <span>Learn More</span>'';
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />'';
                  </Link>'';
                  <div className='text-xs text-zion-cyan-light'>;
                    {service.trialDays} day trial;
                  </div>;
                </div>;
              </motion.div>;
            </motion.div>) ) }
        </motion.div>;
        {/* Call to Action */}'';
        <motion.div '';
          className='text-center mt-16'';
          initial = {}
  { opacity: 0,;
  y: 30}}
=======
        </motion.div>
        {/* Services Grid */}''''
        <motion.div''''
          className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'''';'
          variants={containerVariants}'''';
          initial='hidden'''';'
          animate='visible'''>{currentServices.map((service) => (
            <motion.div''';'
              key={service.id}'''';
              className='group cursor-pointer''';
              variants={itemVariants}
              onClick={ () => setSelectedService (service) }
            >''''
              <motion.div'''';
                className='bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover: border-zion-cyan/40 transition-all duration-300 h-full''';
                variants={cardVariants}
                whileHover = {}
  {}
''';'
                  y: -8, '''';
                  boxShadow: '0 20px 40px rgba(0, 0, 0, '''';'
  0.3)'}}'
              >'''{/* Service Header */}'''''
                <div className='flex items-start justify-between mb-4'>''''
                  <div className='text-4xl'>{service.icon}</div>'''{service.popular && ('''''
                    <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium'>
                      Popular
                    </div>) }
                </div>
'''{/* Service Info */}'''''
                <h3 className='text-xl font-bold text-white mb-2 group-hover: text-zion-cyan transition-colors'>
                  {service.name}''''
                </h3>''''
                <p className='text-zion-cyan-light text-sm mb-4 line-clamp-2'>
                  {service.tagline}
                </p>
'''{/* Pricing */}'''''
                <div className='flex items-center justify-between mb-4'>''''
                  <div className='flex items-center space-x-2'>''''
                    <DollarSign className='w-5 h-5 text-zion-cyan' />''''
                    <span className='text-2xl font-bold text-white'>{service.price}</span>''''
                    <span className='text-zion-cyan-light'>{service.period}</span>''''
                  </div>''''
                  <div className='flex items-center space-x-1'>''''
                    <Star className='w-4 h-4 text-yellow-400 fill-current' />''''
                    <span className='text-white text-sm'>{service.rating}</span>''''
                    <span className='text-zion-cyan-light text-sm'>({service.reviews})</span>
                  </div>
                </div>
'''{/* Features Preview */}'''''
                <div className='mb-4'>''''
                  <div className='flex flex-wrap gap-2'>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span''''
                        key={index}'''';
                        className='bg-zion-slate/50 text-zion-cyan-light text-xs px-2 py-1 rounded-full '>{feature}
                      </span>
                    ))}'''{service.features.length > 3 && ('''''
                      <span className='bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full'>
                        +{service.features.length-3} more
                      </span>) }
                  </div>
                </div>
'''{/* Market Info */}'''''
                <div className='mb-4 p-3 bg-zion-slate/30 rounded-lg'>''''
                  <div className='flex items-center justify-between text-xs'>''''
                    <span className='text-zion-cyan-light'>Market Size: </span>''''
                    <span className='text-white font-medium'>{service.marketSize}</span>''''
                  </div>''''
                  <div className='flex items-center justify-between text-xs mt-1'>''''
                    <span className='text-zion-cyan-light'>Growth Rate:</span>''''
                    <span className='text-green-400 font-medium'>{service.growthRate}</span>
                  </div>
                </div>
'''{/* CTA Button */}'''''
                <div className='flex items-center justify-between'>
                  <Link''';'
                    to={service.link}'''';
                    className='flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover: shadow-lg transition-all duration-300 group-hover:scale-105 '>''''
                    <span>Learn More</span>''''
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />''''
                  </Link>''''
                  <div className='text-xs text-zion-cyan-light'>
                    {service.trialDays} day trial
>>>>>>> main
                  </div>
                </div>
              </motion.div>
            </motion.div>) ) }
        </motion.div>
<<<<<<< HEAD
        {/* Call to Action */}&apos;&apos;'&apos;&apos;
        <motion.div &apos;&apos;'';
          className=&apos;text-center mt-16&apos;&apos;';
=======
        {/* Call to Action */}''''
        <motion.div '''';
          className='text-center mt-16''';
>>>>>>> main
          initial = {}
  { opacity: 0, y: 30}}
>>>>>>> main
          animate = {}
  { opacity: 1,;
  y: 0}}
          transition = {}
<<<<<<< HEAD
  { duration: 0.6,;
  delay: 0.4}}''>'';
          <div className='bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 p-8 rounded-2xl border border-zion-cyan/30'>'';
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Ready to Get Started?'';
            </h3>'';
            <p className='text-zion-cyan-light mb-6 max-w-2xl mx-auto'>;
              Join thousands of businesses already transforming their operations with our revolutionary services.;
              Get expert consultation and custom implementation tailored to your needs.'';
            </p>'';
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>'';
              <Link'';
                to='/contact'';
                className='bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 '>;
                Schedule Consultation;
              </Link>'';
              <a'';
                href='tel:+13024640950'';
                className='bg-zion-slate-dark text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover:bg-zion-slate hover:border-zion-cyan/50 transition-all duration-300 '>;
                Call Now: +1 302 464 0950;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && ('';
          <motion.div'';
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'';
=======
<<<<<<< HEAD
  { duration: 0.6,
  delay: 0.4}}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
          <div className=&apos;bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 p-8 rounded-2xl border border-zion-cyan/30&apos;>'&apos;&apos;'&apos;&apos;
            <h3 className=&apos;text-2xl font-bold text-white mb-4&apos;>
              Ready to Get Started?&apos;&apos;'&apos;&apos;
            </h3>&apos;&apos;'&apos;&apos;'
            <p className=&apos;text-zion-cyan-light mb-6 max-w-2xl mx-auto&apos;>
              Join thousands of businesses already transforming their operations with our revolutionary services.;
              Get expert consultation and custom implementation tailored to your needs.&apos;&apos;'&apos;&apos;
            </p>&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>'&apos;&apos;''
              <Link&apos;&apos;'&apos;
                to=&apos;/contact&apos;&apos;'';
                className=&apos;bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 &apos;>
                Schedule Consultation&apos;&apos;
              </Link>&apos;&apos;'&apos;&apos;
              <a&apos;&apos;'&apos;
                href=&apos;tel:+13024640950&apos;&apos;'';
                className=&apos;bg-zion-slate-dark text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover:bg-zion-slate hover:border-zion-cyan/50 transition-all duration-300 &apos;>
                Call No,w: +1 302 464 0950&apos;&apos;
=======
  { duration: 0.6, delay: 0.4}}'''>'''''
          <div className='bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 p-8 rounded-2xl border border-zion-cyan/30'>''''
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Get Started?''''
            </h3>''''
            <p className='text-zion-cyan-light mb-6 max-w-2xl mx-auto'>
              Join thousands of businesses already transforming their operations with our revolutionary services.
              Get expert consultation and custom implementation tailored to your needs.''''
            </p>''''
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>''''
              <Link''''
                to='/contact'''';'
                className='bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover: shadow-lg transition-all duration-300 hover:scale-105 '>
                Schedule Consultation
              </Link>''''
              <a''''
                href='tel:+13024640950'''';'
                className='bg-zion-slate-dark text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover: bg-zion-slate hover:border-zion-cyan/50 transition-all duration-300 '>
                Call Now: +1 302 464 0950
>>>>>>> main
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Service Detail Modal */}
      <AnimatePresence>
<<<<<<< HEAD
        {selectedService && (&apos;&apos;'&apos;}&apos;
          <motion.div&apos;&apos;'';
            className=&apos;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4&apos;&apos;';
=======
        {selectedService && (''''
          <motion.div'''';
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4''';
>>>>>>> main
>>>>>>> main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setSelectedService (null) }
<<<<<<< HEAD
          >'';
            <motion.div'';
              className='bg-zion-slate-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto'';
              initial = {}
  { scale: 0.9,;
  opacity: 0}}
=======
<<<<<<< HEAD
          >&apos;&apos;'&apos;&apos;
            <motion.div&apos;&apos;'';
              className=&apos;bg-zion-slate-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto&apos;&apos;';
=======
          >''''
            <motion.div'''';
              className='bg-zion-slate-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto''';
>>>>>>> main
              initial = {}
  { scale: 0.9, opacity: 0}}
>>>>>>> main
              animate = {}
  { scale: 1,;
  opacity: 1}}
              exit = {}
<<<<<<< HEAD
  { scale: 0.9,;
  opacity: 0}}
              onClick={(e) => e.stopPropagation()}''>'';
              <div className='flex items-start justify-between mb-6'>'';
                <div className='text-6xl'>{selectedService.icon}</div>;
                <button'';
                  onClick={() => setSelectedService(null)}'';
                  className='text-zion-cyan-light hover:text-white transition-colors '>;
                  ✕;
                </button>;
              </div>'';
'';
              <h2 className='text-3xl font-bold text-white mb-4'>{selectedService.name}</h2>'';
              <p className='text-zion-cyan-light text-lg mb-6'>{selectedService.description}</p>'';
'';
              <div className='grid md:grid-cols-2 gap-8'>'';
                <div>'';
                  <h3 className='text-xl font-semibold text-white mb-4'>Features</h3>'';
                  <ul className='space-y-2'>''{selectedService.features.map((feature, index) => ('';
                      <li key={index} className='flex items-center space-x-2'>'';
                        <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />'';
                        <span className='text-zion-cyan-light'>{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
'';
                <div>'';
                  <h3 className='text-xl font-semibold text-white mb-4'>Service Details</h3>'';
                  <div className='space-y-3'>'';
                    <div className='flex justify-between'>'';
                      <span className='text-zion-cyan-light'>Price:</span>'';
                      <span className='text-white font-medium'>{selectedService.price}{selectedService.period}</span>'';
                    </div>'';
                    <div className='flex justify-between'>'';
                      <span className='text-zion-cyan-light'>Setup Time:</span>'';
                      <span className='text-white font-medium'>{selectedService.setupTime}</span>'';
                    </div>'';
                    <div className='flex justify-between'>'';
                      <span className='text-zion-cyan-light'>Trial:</span>'';
                      <span className='text-white font-medium'>{selectedService.trialDays} days</span>'';
                    </div>'';
                    <div className='flex justify-between'>'';
                      <span className='text-zion-cyan-light'>Customers:</span>'';
                      <span className='text-white font-medium'>{selectedService.customers.toLocaleString()}+</span>'';
                    </div>'';
                    <div className='flex justify-between'>'';
                      <span className='text-zion-cyan-light'>Rating:</span>'';
                      <span className='text-white font-medium'>{selectedService.rating}/5 ({selectedService.reviews} reviews)</span>;
                    </div>;
                  </div>'';
'';
                  <div className='mt-6'>'';
                    <h4 className='text-lg font-semibold text-white mb-2'>ROI</h4>'';
                    <p className='text-zion-cyan-light text-sm'>{selectedService.roi}</p>;
                  </div>;
                </div>;
              </div>'';
'';
              <div className='mt-8 pt-6 border-t border-zion-cyan/20'>'';
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                  <Link'';
                    to={selectedService.link}'';
                    className='bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center '>;
                    Get Started Now;
                  </Link>'';
                  <a'';
                    href='tel:+13024640950'';
                    className='bg-zion-slate text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover:bg-zion-slate-dark transition-all duration-300 text-center '>;
                    Call for Consultation;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>) }
      </AnimatePresence>;
    </section>;
  )}'`;
'`'"`
=======
<<<<<<< HEAD
  { scale: 0.9,
  opacity: 0}}
              onClick={(e) => e.stopPropagation()}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-start justify-between mb-6&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;text-6xl&apos;>{selectedService.icon}&apos;</div>
                <button&apos;&apos;';
                  onClick={() => setSelectedService(null)}&apos;&apos;'';
                  className=&apos;text-zion-cyan-light hover:text-white transition-colors &apos;>
                  ✕&apos;&apos;
                </button>
              </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
              <h2 className=&apos;text-3xl font-bold text-white mb-4&apos;>{selectedService.name}&apos;</h2>&apos;&apos;'&apos;&apos;'
              <p className=&apos;text-zion-cyan-light text-lg mb-6&apos;>{selectedService.description}&apos;</p>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
              <div className=&apos;grid md:grid-cols-2 gap-8&apos;>'&apos;&apos;''
                <div>&apos;&apos;'&apos;&apos;'
                  <h3 className=&apos;text-xl font-semibold text-white mb-4&apos;>Features&apos;</h3>&apos;&apos;'&apos;&apos;'
                  <ul className=&apos;space-y-2&apos;>'&apos;&apos;{selectedService.features.map((feature, index) => (&apos;&apos;'&apos;&apos;}'
                      <li key={index} className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                        <CheckCircle className=&apos;w-5 h-5 text-green-400 flex-shrink-0&apos; />&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-zion-cyan-light&apos;>{feature}&apos;</span>
=======
  { scale: 0.9, opacity: 0}}
              onClick={(e) => e.stopPropagation()}'''>'''''
              <div className='flex items-start justify-between mb-6'>''''
                <div className='text-6xl'>{selectedService.icon}</div>
                <button''';'
                  onClick={() => setSelectedService(null)}''''
                  className='text-zion-cyan-light hover: text-white transition-colors '>
                  ✕
                </button>
              </div>''''
''''
              <h2 className='text-3xl font-bold text-white mb-4'>{selectedService.name}</h2>''''
              <p className='text-zion-cyan-light text-lg mb-6'>{selectedService.description}</p>''''
''''
              <div className='grid md: grid-cols-2 gap-8'>''''
                <div>''''
                  <h3 className='text-xl font-semibold text-white mb-4'>Features</h3>''''
                  <ul className='space-y-2'>'''{selectedService.features.map((feature, index) => ('''''
                      <li key={index} className='flex items-center space-x-2'>''''
                        <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />''''
                        <span className='text-zion-cyan-light'>{feature}</span>
>>>>>>> main
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
&apos;&apos;'&apos;&apos;
                <div>&apos;&apos;'&apos;&apos;'
                  <h3 className=&apos;text-xl font-semibold text-white mb-4&apos;>Service Details&apos;</h3>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-zion-cyan-light&apos;>Price:&apos;</span>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-white font-medium&apos;>{selectedService.price}{selectedService.period}&apos;</span>&apos;&apos;'&apos;&apos;
                    </div>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-zion-cyan-light&apos;>Setup Time:&apos;</span>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-white font-medium&apos;>{selectedService.setupTime}&apos;</span>&apos;&apos;'&apos;&apos;
                    </div>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-zion-cyan-light&apos;>Trial:&apos;</span>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-white font-medium&apos;>{selectedService.trialDays} days&apos;</span>&apos;&apos;'&apos;&apos;
                    </div>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-zion-cyan-light&apos;>Customers:&apos;</span>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-white font-medium&apos;>{selectedService.customers.toLocaleString()}+&apos;</span>&apos;&apos;'&apos;&apos;
                    </div>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-zion-cyan-light&apos;>Rating:&apos;</span>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-white font-medium&apos;>{selectedService.rating}/5 ({selectedService.reviews} reviews)&apos;</span>
                    </div>
                  </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                  <div className=&apos;mt-6&apos;>'&apos;&apos;'&apos;&apos;
                    <h4 className=&apos;text-lg font-semibold text-white mb-2&apos;>ROI&apos;</h4>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-zion-cyan-light text-sm&apos;>{selectedService.roi}&apos;</p>
                  </div>
                </div>
              </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
              <div className=&apos;mt-8 pt-6 border-t border-zion-cyan/20&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>&apos;'
                  <Link&apos;&apos;'
                    to={selectedService.link}&apos;&apos;'';
                    className=&apos;bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center &apos;>
                    Get Started Now&apos;&apos;
                  </Link>&apos;&apos;'&apos;&apos;
                  <a&apos;&apos;'&apos;
                    href=&apos;tel:+13024640950&apos;&apos;'';
                    className=&apos;bg-zion-slate text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hove,r:bg-zion-slate-dark transition-all duration-300 text-center &apos;>
                    Call for Consultation&apos;&apos;
=======
''''
                <div>''''
                  <h3 className='text-xl font-semibold text-white mb-4'>Service Details</h3>''''
                  <div className='space-y-3'>''''
                    <div className='flex justify-between'>''''
                      <span className='text-zion-cyan-light'>Price: </span>''''
                      <span className='text-white font-medium'>{selectedService.price}{selectedService.period}</span>''''
                    </div>''''
                    <div className='flex justify-between'>''''
                      <span className='text-zion-cyan-light'>Setup Time:</span>''''
                      <span className='text-white font-medium'>{selectedService.setupTime}</span>''''
                    </div>''''
                    <div className='flex justify-between'>''''
                      <span className='text-zion-cyan-light'>Trial:</span>''''
                      <span className='text-white font-medium'>{selectedService.trialDays} days</span>''''
                    </div>''''
                    <div className='flex justify-between'>''''
                      <span className='text-zion-cyan-light'>Customers:</span>''''
                      <span className='text-white font-medium'>{selectedService.customers.toLocaleString()}+</span>''''
                    </div>''''
                    <div className='flex justify-between'>''''
                      <span className='text-zion-cyan-light'>Rating: </span>''''
                      <span className='text-white font-medium'>{selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                    </div>
                  </div>''''
''''
                  <div className='mt-6'>''''
                    <h4 className='text-lg font-semibold text-white mb-2'>ROI</h4>''''
                    <p className='text-zion-cyan-light text-sm'>{selectedService.roi}</p>
                  </div>
                </div>
              </div>''''
''''
              <div className='mt-8 pt-6 border-t border-zion-cyan/20'>''''
                <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                  <Link''''
                    to={selectedService.link}'''';
                    className='bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover: shadow-lg transition-all duration-300 text-center '>
                    Get Started Now
                  </Link>''''
                  <a''''
                    href='tel:+13024640950'''';'
                    className='bg-zion-slate text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover: bg-zion-slate-dark transition-all duration-300 text-center '>
                    Call for Consultation
>>>>>>> main
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </section>
<<<<<<< HEAD
  )}''`
''`'"`'"
=======
<<<<<<< HEAD
  )}&apos;&apos;`;
&apos;&apos;`&apos;&quot;`&quot;"
=======
  )}''`;
''`'"`'"
=======
import React, { useState }  from 'react;'
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
