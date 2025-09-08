
<<<<<<< HEAD

import { motion } from 'framer-motion';

import {

//Get unique services by ID const uniqueServices = allServices.filter ( (service, index, self) => index === self.findIndex (s => s.id === service.id) )
//Get all categories const categories = ['All', ...Array.from (new Set (uniqueServices.map (s => Array.isArray (s.category) ? s.category[0] : s.category) ) ) ]
//Price ranges //Filter services const filteredServices = uniqueServices.filter (service => {
  const matchesCategory = selectedCategory === 'All' || (Array.isArray (service.category) ? service.category.includes (selectedCategory) : service.category === selectedCategory)
(selectedPriceRange === 'Under $1K' && price < 1000) || (selectedPriceRange === '$1K - $5K' && price >= 1000 && price < 5000) || (selectedPriceRange === '$5K - $20K' && price >= 5000 && price < 20000) || (selectedPriceRange === '$20K+' && price >= 20000)
const filteredServices = selectedCategory === 'All' ? microSaasServices : microSaasServices.filter (service => service.category === selectedCategory)
return (<UltraFuturisticBackground2029> <Head> <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title> </Head> <UltraFuturisticNavigation2029 /> > <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary 2029 </span> <br /> <span className="text-white" >Technology Pricing</span> </h1> <p className="text-xl text-gray-300 mb-8" > Transparent pricing for our cutting-edge technology services that are already operational and delivering transformative results </p> > {
  categories.map (category => (<option key= {
  category 
}value= {
  category 
}> {
  category 
}</option>) ) 
}</select> <select > {
  priceRanges.map (range => (<option key= {
  range.id 
}value= {
  range.id 
}> {
  range.name 
}</option>) ) 
}</select> </div> </div> </motion.div> </section> Most Popular </span> </div> </div>) 
}) 
}</div> </div> </div> {
  service.rating && (<div> <span className="text-gray-400" >Rating:</span> <span className="text-white ml-2" > {
  service.rating 
}/5</span> </div>) 
}{
  service.customers && (<div> <span className="text-gray-400" >Customers:</span> <span className="text-white ml-2" > {
  service.customers 
}</span> </div>) 
}{
  service.launchDate && (<div> <span className="text-gray-400" >Launched:</span> <span className="text-white ml-2" > {
  new Date (service.launchDate) .getFullYear () 
}</span> </div>) 
}</div> </div> {
  service.marketPosition 
}</p> </div>) 
}<strong>ROI:</strong> {
  service.roi 
}</p> </div>) 
}Learn More <ArrowRight className="w-4 h-4 ml-2" /> </span> </button> </a> <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" /> </div> </div> </motion.div>) ) 
}</div> </motion.div>) ) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}

}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" > Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary Technology?</span> </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" > <Link href="/contact" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" > <Phone className="inline-block w-5 h-5 mr-2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20"> <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3> <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300"> <div className="flex items-center space-x-2"> <Check className="w-4 h-4 text-green-400" /> flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Proven ROI and customer success stories</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Comprehensive support and implementation</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>) 
}
import Link from 'next/link';


  return (

=======
import Link from 'next/link';'

import { motion } from 'framer-motion';'

import { Check, Star, Users, TrendingUp, DollarSign, Clock;
}
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';'
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';'
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';import {'
  }
  Check, Star, Users, TrendingUp, DollarSign, Clock,
Shield, Zap, Rocket, Brain, Atom, Globe, Target;
  ArrowRight, Phone, Mail, MapPin, ExternalLink
 } from 'lucide-react';'
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029','
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029','
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';'

export default function PricingPage() {
  }
  const [selectedCategory, setSelectedCategory] = useState('All');'

const [selectedPriceRange, setSelectedPriceRange] = useState('All');'
  // Combine all services,
const allServices = null;
];

  // Get unique services by ID;

const uniqueServices = allServices.filter((service, index, self) => index === self.findIndex(s => { return s.id === service.id))// Get all categories; }

const categories = [;
  'All';'
    ...Array.from(new Set(uniqueServices.map(s =>;
          Array.isArray(s.category) ? s.category[0] : s.category;
        )))];// Price ranges;

const priceRanges = [;
  { 'id': 'All', 'name': 'All Prices', 'range': 'All','
},{ 'id': 'Under $1K', 'name': 'Under $1K/month', 'range': 'Under $1K','
},{ 'id': '$1K - $5K', 'name': '$1K - $5K/month', 'range': '$1K - $5K','
},{ 'id': '$5K - $20K', 'name': '$5K - $20K/month', 'range': '$5K - $20K','
},{ 'id': '$20K+', 'name': '$20K+/month', 'range': '$20K+','
}];
  // Filter services;

const filteredServices = uniqueServices.filter(service => { return  ; }
  const matchesCategory =;
      selectedCategory === 'All' ||;'
      (Array.isArray(service.category)? service.category.includes(selectedCategory): service.category = == selectedCategory)const price = parseFloat(service.price.replace(/[^0-9.]/g, '');'
  const matchesPrice =;
      selectedPriceRange === 'All' |;'
      (selectedPriceRange === 'Under $1K' && price < 1000) |;'
      (selectedPriceRange === '$1K - $5K' && price >= 1000 && price < 5000) |;'
      (selectedPriceRange === '$5K - $20K' && price >= 5000 && price < 20000) |;'
      (selectedPriceRange = == '$20K+' && price >= 20000;'
  return matchesCategory && matchesPrice;

const [selectedPriceRange, setSelectedPriceRange] = useState('All');'
  // Combine all services,
const allServices = null;
];

const uniqueServices = allServices.filter((service, index, self) => index === self.findIndex(s => s.id === service.id))// Get all categories;

  const filteredServices = selectedCategory === 'All' ;
    ? microSaasServices ;
    : microSaasServices && microSaasServices.filter(service => service && service.category === selectedCategory);

  const yearlyDiscount = 0 && 0.2, // 20% discount for yearly billing;

return (;

  // Get unique services by ID
  const uniqueServices = allServices.filter((service, index, self) => 
    index = $2;
  // Get all categories
  const categories = ['All', ...Array.from(new Set(uniqueServices.map(s = $2;
  // Price ranges
  const priceRanges = [
    { id: 'All', name: 'All Prices', range: 'All' },
    { id: 'Under $1K', name: 'Under $1K/month', range: 'Under $1K' },
    { id: '$1K - $5K', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: '$5K - $20K', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: '$20K+', name: '$20K+/month', range: '$20K+' }
  ],

  // Filter services
  const filteredServices = $2;
    const price = parseFloat(service.price.replace(/[^0-9.]/g, '')),
    const matchesPrice = $2;
    return matchesCategory && matchesPrice
  }),

  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Group services by category for better organization
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    const category = $2;
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push($2);
    return acc
  }, {} as Record<string, typeof filteredServices>),

  const faqs = $2;
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all our services offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can be invoiced.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we offer volume discounts for teams and organizations. Contact our sales team for custom pricing.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'
    }
  ],

  const categories = $2;
  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter($2);
  const yearlyDiscount = 0.2, // 20% discount for yearly billing

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>
<meta,
name='description''
          content='Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology.'' />
        <meta,
name='keywords''
          content='technology pricing, AI services pricing, quantum computing pricing, space technology pricing, 2029 technology pricing'' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />'

        {/* Hero Section *
}
        <section className='py-20 px-4 'sm':px-6 'lg':px-8 text-center'>;'
          <motion.div;
            initial={ 'opacity': 0, 'y': 20 
}
            animate={ 'opacity': 1, 'y': 0 }
            transition={ 'duration': 0.8 }

<<<<<<< HEAD
      <main className='relative z-10 pt-20'>;


        {/* Hero Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}


            transition={{ duration: 0 && 0.8 }}
            className='max-w-4xl mx-auto'        <meta name="description" content="Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />;
        <meta name="keywords" content="technology pricing, AI services pricing, quantum computing pricing, space technology pricing, 2029 technology pricing" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/pricing" />;

      <UltraFuturisticNavigation2029 />;

      <main className='relative z-10 pt-20'>;

        {/* Hero Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'>      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0 && 0.8 }}
            className='max-w-4xl mx-auto'>;
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Revolutionary 2029;
              </span>;
              <br />;
              <span className='text-white'>Technology Pricing</span>;
            </h1>;
            <p className='text-xl text-gray-300 mb-8'>;
              Transparent pricing for our cutting-edge technology services that;
              are already operational and delivering transformative results;
            </p>;



            {/* Filter Controls */}
            <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mb-8'>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20'
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}

=======
className='max-w-4xl mx-auto''
          >
            <h1 className='text-5xl 'md':text-6xl font-bold text-white mb-6'>'
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>'
                Revolutionary 2029
              </span>
              <br />
              <span className='text-white'>Technology Pricing</span>'
            </h1>
            <p className='text-xl text-gray-300 mb-8'>'
              Transparent pricing for our cutting-edge technology services that,
are already operational and delivering transformative results
            </p>

            {/* Filter Controls *
}
            <div className='flex flex-col 'lg':flex-row gap-4 justify-center items-center mb-8'>;'
              <select;
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white 'focus': outline-none 'focus':border-cyan-400/40 'focus':ring-2 'focus':ring-cyan-500/20'>'
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {categories.map(category => (<option key={category} value={categor
}>;

<<<<<<< HEAD


              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20'
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>                ))}



    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>


      </Head>

      <UltraFuturisticNavigation2029    />


<main className='relative z-10 pt-20'    />

        {/* Hero Section *,}
}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'    />;
          <motion.div;
            initial={{ opacity: 0, y: 20 ,}
}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

                ))}
              </select>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20">{priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>


<div className='text-center text-gray-400'>'
              <p>
                Showing {filteredServices.length} services in{' '}'
                {Object.keys(servicesByCategory).length} categories
              </p>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
          </motion.div>
        </section>

<<<<<<< HEAD
        {/* Pricing Categories *,}

=======
        {/* Pricing Categories *
}
<section className='py-20 px-4 'sm':px-6 'lg':px-8'>;'
          <div className='max-w-7xl mx-auto'>;'
            {Object.entries(servicesByCategory).map(([category, services], categoryIndex) => (<motion.div;
                  }
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className='mb-20'><div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                      {category} Services
                    </h2>
                    <p className='text-gray-400 text-lg'>
                      {services.length} revolutionary {category.toLowerCase()}{' '}
                      solutions
                    </p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={ 'opacity': 0, 'y': 20 
}
                        whileInView={ 'opacity': 1, 'y': 0 }

                        transition={
                          }
                          'duration': 0.6,
'delay': serviceIndex * 0.1

                        }
                        viewport={ 'once': true 
}
                        className='group cursor-pointer'>;'
                        <div;
                          className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 'hover': border-cyan-400/40 transition-all duration-300 backdrop-blur-sm 'hover':transform 'hover':scale-105 ${service && service.popular ? 'ring-2 ring-yellow-400/50' : ''}`}>`
                          {/* Popular Badge *
}
                          {service && service.popular && (<div className='flex items-center justify-center mb-4'>;'
                              <div className='px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full'>;'
                                <span className='text-sm text-yellow-400 font-medium flex items-center'>;'
                                  <Star className='w-4 h-4 mr-1 fill-current' />;'
                                  }
                                  Most Popular;
                                </span>;
                              </div>;
                            </div>;
                          )}
                          {/* Service Icon */}
                          <div;
                          {/* Service Title and Tagline */}
                          <h3 className='text - xl font - semibold text - white mb - 2'>;'
                            {service.name}
                          </h3>;
                          <p className='text - sm text - cyan - 400 mb - 4'>;'
                            {service.tagline}
                          {/* Price */}
                          <div className='mb-6'>;'
                            <div className='flex items-baseline'>;'
                              <span;
                                className={`${service && service.textColor} font-bold text-3xl`}>`
                                {service && service.price}
                              </span>;
                              <span className='text-gray-400 text-lg ml-2'>;'
                                {service && service.period}
                              </span>;
                            </div>;
                            {service && service.setupTime && (<p className='text-sm text-gray-500 mt-1'>;'
                                }
                                'Setup': {service && service.setupTim
}
                              </p>;
                            )}
                          {/* Key Features */}
                          <div className='mb-6'>;'
                            <h4 className='text-sm font-medium text-gray-400 mb-3'>;'
                              Key 'Features':;
                            </h4>;
                            <div className='space-y-2'>;'
                              {service && service.features;
                                .slice(0, 4).map((feature, idx) => (<div;
                                    }
                                    key={idx}
                                    className='flex items-center space-x-2'>;'
                                    <Check className='w-4 h-4 text-green-400 flex-shrink-0' />;'
                                    <span className='text-sm text-gray-300'>;'
                                      {feature}
                                    </span>;
                                  </div>;
                                ))}
                              {service && service.features.length > 4 && (<span className='text-xs text-gray-500'>;'
                                  +{service && service.features.length - 4} more features;
                                </span>;
                              )}
                          {/* Additional Info */}
                          <div className='mb-6 p-4 bg-gray-800/30 rounded-xl'>;'
                            <div className='grid grid-cols-2 gap-4 text-sm'>;'
                              <div>;
                                <span className='text-gray-400'>'Trial':</span>;'
                                <span className='text-white ml-2'>;'
                                  {service && service.trialDays} days;
                                </span>;
                              </div>;
                              {service && service.rating && (<div>;
                                  <span className='text-gray-400'>'Rating':</span>;'
                                  <span className='text-white ml-2'>;'
                                    {service && service.rating}/5;
                                  </span>;
                                </div>;
                              )}
                              {service && service.customers && (<div>;
                                  <span className='text-gray-400'>;'
                                    }
                                    'Customers':;
                                  </span>;
                                  <span className='text-white ml-2'>;'
                                    {service && service.customers}
                                  </span>;
                                </div>;
                              )}
                              {service && service.launchDate && (<div>;
                                  <span className='text-gray-400'>;'
                                    }
                                    'Launched':;
                                  </span>;
                                  <span className='text-white ml-2'>;'
                                    {new Date(service && service.launchDate).getFullYear()}
                                  </span>;
                                </div>;
                              )}
                          {/* Market Position */}
                          {service && service.marketPosition && (<div className='mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg'>;'
                              <p className='text-xs text-blue-300 leading-relaxed'>;'
                                {service && service.marketPosition}
                              </p>;
                            </div>;
                          )}
                          {/* ROI Information */}
                          {service && service.roi && (<div className='mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg'>;'
                              <p className='text-xs text-green-300 leading-relaxed'>;'
                                <strong>'ROI': </strong> {service && service.ro
}
                              </p>;
                            </div>;
                          )}
                          {/* CTA */}
                          <div className='flex items-center justify-between'>;'


                          {/* Service Title and Tagline */}
                          <h3 className='text - xl font - semibold text - white mb - 2'    />;
                            {service.name}
                          </h3>;
                          <p className='text - sm text - cyan - 400 mb - 4'    />;
                            {service.tagline}

                          {/* Price */}
                          <div className='mb-6'    />;
                            <div className='flex items-baseline'    />;
                              <span;
                                className={`${service && service.textColor} font-bold text-3xl`}    />

                                {service && service.price}
                              </span>;
                              <span className='text-gray-400 text-lg ml-2'    />;
                                {service && service.period}
                              </span>;
                            </div>;
                            {service && service.setupTime && (<p className='text-sm text-gray-500 mt-1'    />;}
                                Setup: {service && service.setupTim,}
}
                              </p>;
                            )}

                          {/* Key Features */}
                          <div className='mb-6'    />;
                            <h4 className='text-sm font-medium text-gray-400 mb-3'    />;
                              Key Features:;
                            </h4>;
                            <div className='space-y-2'    />;
                              {service && service.features;}
                                .slice(0, 4).map((feature, idx) => (<div;}
                                    key={idx}
                                    className='flex items-center space-x-2'    />;
                                    <Check className='w-4 h-4 text-green-400 flex-shrink-0'    />;
                                    <span className='text-sm text-gray-300'    />;
                                      {feature}
                                    </span>;
                                  </div>;
                                ))}
                              {service && service.features.length > 4 && (<span className='text-xs text-gray-500'    />;}
                                  +{service && service.features.length - 4} more features;
                                </span>;
                              )}

                          {/* Additional Info */}
                          <div className='mb-6 p-4 bg-gray-800/30 rounded-xl'    />;
                            <div className='grid grid-cols-2 gap-4 text-sm'    />;
                              <div    />;
                                <span className='text-gray-400'    />Trial:</span>;
                                <span className='text-white ml-2'    />;
                                  {service && service.trialDays} days;
                                </span>;
                              </div>;
                              {service && service.rating && (<div    />;
                                  <span className='text-gray-400'    />Rating:</span>;}
                                  <span className='text-white ml-2'    />;}
                                    {service && service.rating}/5;
                                  </span>;
                                </div>;
                              )}
                              {service && service.customers && (<div    />;
                                  <span className='text-gray-400'    />;
                                    Customers:;
                                  </span>;}
                                  <span className='text-white ml-2'    />;}
                                    {service && service.customers}
                                  </span>;
                                </div>;
                              )}
                              {service && service.launchDate && (<div    />;
                                  <span className='text-gray-400'    />;
                                    Launched:;
                                  </span>;}
                                  <span className='text-white ml-2'    />;}
                                    {new Date(service && service.launchDate).getFullYear()}
                                  </span>;
                                </div>;
                              )}

                          {/* Market Position */}
                          {service && service.marketPosition && (<div className='mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg'    />;}
                              <p className='text-xs text-blue-300 leading-relaxed'    />;}
                                {service && service.marketPosition}
                              </p>;
                            </div>;
                          )}
                          {/* ROI Information */}
                          {service && service.roi && (<div className='mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg'    />;
                              <p className='text-xs text-green-300 leading-relaxed'    />;}
                                <strong    />ROI: </strong> {service && service.ro,}
}
                              </p>;
                            </div>;
                          )}
                          {/* CTA */}

                          <div className='flex items-center justify-between'>;'

                            <Link,
href={service.link |`/services/${service.id}`}`                            >;
                              <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold "hover":from-cyan-600 "hover":to-purple-700 transition-all duration-200 transform "hover":scale-105'>;'
                                <span className='flex items-center'>;'
                                  Learn More;
                                  <ArrowRight className='w-4 h-4 ml-2'    />;
                                </span>;
                              </button>;
                            </Link>;
                            <ExternalLink className='w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          </div>;
                        </div>;
                      </motion.div>;
                    ))}
                  </div>;
                </motion.div>;
              ))}
          </div>;
        </section>;
<<<<<<< HEAD

        {/* Contact CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  {' '}

                  ))}
                </div>
              </motion.div>
            ))}
        </section>
        {/* Contact CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

                />

<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'    />
                Ready to Get Started with;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
                  {' ,}
=======
        {/* Contact CTA Section */}

<section className='py-20 px-4 'sm':px-6 'lg':px-8'>'
          <div className='max-w-4xl mx-auto text-center'>'
            <motion.div,
initial={ 'opacity': 0, 'y': 30 
}
              whileInView={ 'opacity': 1, 'y': 0 }
              transition={ 'duration': 0.8 }
              viewport={ 'once': true }

            >

<h2 className='text-3xl 'sm':text-4xl 'lg':text-5xl font-bold text-white mb-6'>'
                Ready to Get Started with
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>'
                  {' ,'
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
                  Revolutionary Technology?
                </span>
              </h2>
              <p className='text-xl text-gray-300 mb-8'>'
                Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business.
              </p>

<<<<<<< HEAD

                    <span>Cutting-edge 2029 technology</span>

=======
              <div className='flex flex-col 'sm': flex-row gap-4 justify-center items-center mb-8'>'
                <Link href='/contact'>'
                  <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg 'hover':from-cyan-600 'hover':to-purple-700 transition-all duration-200 transform 'hover':scale-105'>'
                    <Phone className='inline-block w-5 h-5 mr-2' />'
                    Schedule Consultation
                  </button>
                </Link>
                <a href={`'mailto':${contactInfo.email}`}>`
<button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg 'hover':bg-cyan-400 'hover':text-black transition-all duration-200 transform 'hover':scale-105'>'
                    <Mail className='inline-block w-5 h-5 mr-2' />'

                <a href={`"mailto":${contactInfo.email}`}>`
<button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg "hover":bg-cyan-400 "hover":text-black transition-all duration-200 transform "hover":scale-105'>'
                    <Mail className='inline-block w-5 h-5 mr-2' />'
                    Get Quote
                  </button>
                </a>
              </div>

              {/* Additional Info *
}
<div className='mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20'>'
                <h3 className='text-xl font-semibold text-white mb-4'>'
                  Why Choose Zion Tech Group?
                </h3>
                <div className='grid grid-cols-1 "md":grid-cols-2 gap-4 text-sm text-gray-300'>'
                  <div className='flex items-center space-x-2'>'
                    <Check className='w-4 h-4 text-green-400' />'
                    <span>All services are operational and market-tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Proven ROI and customer success stories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Comprehensive support and implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />

                  <div className='flex items-center space-x-2'>'
                    <Check className='w-4 h-4 text-green-400' />'
                    <span>Proven ROI and customer success stories</span>
                  </div>
                  <div className='flex items-center space-x-2'>'
                    <Check className='w-4 h-4 text-green-400' />'
                    <span>Comprehensive support and implementation</span>
                  </div>
                  <div className='flex items-center space-x-2'>'
                    <Check className='w-4 h-4 text-green-400' />'
                    <span>Cutting-edge 2029 technology</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
<<<<<<< HEAD


=======
  );

>>>>>>> origin/cursor/delete-old-data-records-6bba
}whileInView= {
  {
  }
  'opacity': 1, 'y': 0
}transition= {
  {
  }
  'duration': 0.8
}viewport= {
  {
<<<<<<< HEAD



=======
            >;
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>;
                Ready to Get Started with;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'> Revolutionary Technology?</span>;
<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>;
                Ready to Get Started with;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  {' '}
                  Revolutionary Technology?;
                </span>;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>;
                <Link href='/contact'>;
                  <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>;
                    <Phone className='inline-block w-5 h-5 mr-2' />;
                    <Mail className='inline-block w-5 h-5 mr-2' />;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>;
                <Link href='/contact'>;
                  <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>;
                    <Phone className='inline-block w-5 h-5 mr-2' />;
                    Schedule Consultation;
                  </button>;
                </Link>;
                <a href={`mailto:${contactInfo.email}`}>;
<button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105'>;
                    <Mail className='inline-block w-5 h-5 mr-2' />;
                    Get Quote;
                  </button>;
                </a>;
              </div>;
                <div className='flex items-center justify-center space-x-2'>;
                  <Mail className='w-5 h-5 text-purple-400' />;
                  <span>{contactInfo.email}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-2'>;
                  <MapPin className='w-5 h-5 text-pink-400' />;
                  <span className='text-sm'>{contactInfo.address}</span>;
                </div>;
              </div>;
              {/* Additional Info */}{/* Contact Information */}
<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300'>;
                <div className='flex items-center justify-center space-x-2'>;
                  <Phone className='w-5 h-5 text-cyan-400' />;
                  <span>{contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-2'>;
                  <Mail className='w-5 h-5 text-purple-400' />;
                  <span>{contactInfo.email}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-2'>;
                  <MapPin className='w-5 h-5 text-pink-400' />;
                  <span className='text-sm'>{contactInfo.address}</span>;
                </div>;
              </div>;
              {/* Additional Info */}
<div className='mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20'>;
                <h3 className='text-xl font-semibold text-white mb-4'>;
                  Why Choose Zion Tech Group?;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300'>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>All services are operational and market-tested</span>;
                  </div>                    <span>All services are operational and market-tested</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Proven ROI and customer success stories</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Proven ROI and customer success stories</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Cutting-edge 2029 technology</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
  )<UltraFuturisticFooter2029 />;
    </UltraFuturisticBackground2029>;
  )}whileInView= {opacity: 1, y: 0;
}transition= {duration: 0.8;
}viewport= {</p>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          </p>;
                          {/* Key Features */}
                          <div className='mb - 6'>;
                            <h4 className='text - sm font - medium text - gray - 400 mb - 3'>;
                              Key Features:;
                            </h4>;
                            <div className='space - y-2'>;
                              {service.features;
                                .slice (0, 4).map ((feature, idx) => (<div;
                                    key={idx}
                                    className='flex items - center space - x-2';
                                  >;
                                    <Check className='w - 4 h - 4 text - green - 400 flex - shrink - 0' />;
                                    <span className='text - sm text - gray - 300'>;
                                      {feature}
                                    </span>;
                                  </div>))}
                              {service.features.length > 4 && (<span className='text - xs text - gray - 500'>;
                                  +{service.features.length - 4} more features;
                                </span>)}
                            </div>;
                          </div>;
                          {/* Additional Info */}
                          <div className='mb - 6 p - 4 bg - gray - 800 / 30 rounded - xl'>;
                            <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                              <div>;
                                <span className='text - gray - 400'>Trial:</span>;
                                <span className='text - white ml - 2'>;
                                  {service.trial_days} days;
                                </span>;
                              </div>;
                              {service.rating && (<div>;
                                  <span className='text - gray - 400'>Rating:</span>;
                                  <span className='text - white ml - 2'>;
                                    {service.rating}/5;
                                  </span>;
                                </div>)}
                              {service.customers && (<div>;
                                  <span className='text - gray - 400'>;
                                    Customers:;
                                  </span>;
                                  <span className='text - white ml - 2'>;
                                    {service.customers}
                                  </span>;
                                </div>)}
                              {service.launch_date && (<div>;
                                  <span className='text - gray - 400'>;
                                    Launched:;
                                  </span>;
                                  <span className='text - white ml - 2'>;
                                    {new Date (service.launch_date).getFullYear ()}
                                  </span>;
                                </div>)}
                            </div>;
                          </div>;
                          {/* Market Position */}
                          {service.market_position && (<div className='mb - 6 p - 3 bg - blue - 900 / 20 border border - blue - 500 / 20 rounded - lg'>;
                              <p className='text - xs text - blue - 300 leading - relaxed'>;
                                {service.market_position}
                              </p>;
                            </div>)}
                          {/* ROI Information */}
                          {service.roi && (<div className='mb - 6 p - 3 bg - green - 900 / 20 border border - green - 500 / 20 rounded - lg'>;
                              <p className='text - xs text - green - 300 leading - relaxed'>;
                                <strong > ROI:</strong> {service.roi}
                              </p>;
                            </div>)}
                          {/* CTA */}
                          <div className='flex items - center justify - between'>;
                            <Link;
                              href={service.link || `/services/${service.id}`}
                            >;
                              <button className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105'>;
                                <span className='flex items - center'>;
                                  Learn More;
                                  <ArrowRight className='w - 4 h - 4 ml - 2' />;
                                </span>;
                              </button>;
                            </Link>;
                            <ExternalLink className='w - 5 h - 5 text - gray - 400 group - hover:text - cyan - 400 transition - colors' />;
                          </div>;
                        </div>;
                      </motion.div>))}
                  </div>;
                </motion.div>))}          </div>;
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
                        {/* Market Position */}
                        {service.market_position && (
                          <div className="mb - 6 p - 3 bg - blue - 900 / 20 border border - blue-500 / 20 rounded-lg">;
                            <p className="text - xs text - blue-300 leading-relaxed">;
                              {service.market_position}
                            </p>;
                          </div>)}
                        {/* ROI Information */}
                        {service.roi && (
                          <div className="mb - 6 p - 3 bg - green - 900 / 20 border border - green-500 / 20 rounded-lg">;
                            <p className="text - xs text - green-300 leading-relaxed">;
                              <strong > ROI:</strong> {service.roi}
                            </p>;
                          </div>)}
                        {/* CTA */}
                        <div className="flex items-center justify-between">;
                          <Link href={service.link || `/services/${service.id}`}>;
                            <button className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration-200 transform hover:scale-105">;
                              <span className="flex items-center">;
                                Learn More;
                                <ArrowRight className="w - 4 h-4 ml-2" />;
                              </span>;
                            </button>;
                          </Link>;
                          <ExternalLink className="w - 5 h - 5 text - gray - 400 group - hover:text - cyan-400 transition-colors" />;
                        </div>;
                      </div>;
                    </motion.div>))}
                </div>;
              </motion.div>))}
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>        <section className="py - 20 px - 4 sm:px-6 lg:px-8">;
          <div className="max - w-4xl mx-auto text-center">;
            <motion.div;
              initial={ opacity: 0, coordinate_y: 30 }
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >;
              <h2 className='text - 3xl sm:text - 4xl lg:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  {' '}
                  Revolutionary Technology?;
                </span>;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Contact our team to discuss pricing, implementation, and how our;
                revolutionary 2029 services can transform your business.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8'>;
                <Link href='/contact'>;
                  <button className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105'>;
                    <Phone className='inline - block w - 5 h - 5 mr - 2' />                    Schedule Consultation;
                  </button>;
                </Link>;
                <a href={`mailto:${contact_info.email}`}>;
                  <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 200 transform hover:scale - 105'>;
                    <Mail className='inline - block w - 5 h - 5 mr - 2' />                    Get Quote;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center items-center mb-8">;
                <Link href="/contact">;
                  <button className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration-200 transform hover:scale-105">;
                    <Phone className="inline - block w - 5 h-5 mr-2" />;
                  </button>;
                </Link>;
                <a href={`mailto:${contact_info.email}`}>;
                  <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 200 transform hover:scale - 105'>;
                    <Mail className='inline - block w - 5 h - 5 mr - 2' />                  <button className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 400 hover:text - black transition - all duration-200 transform hover:scale-105">;
                    <Mail className="inline - block w - 5 h-5 mr-2" />;
                    Get Quote;
                  </button>;
                </a>;
              </div>;
              {/* Contact Information */}
              <div className='grid grid - cols - 1 sm:grid - cols - 3 gap - 6 text - gray - 300'>;
                <div className='flex items - center justify - center space - x-2'>;
                  <Phone className='w - 5 h - 5 text - cyan - 400' />;
                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center justify - center space - x-2'>;
                  <Mail className='w - 5 h - 5 text - purple - 400' />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className='flex items - center justify - center space - x-2'>;
                  <MapPin className='w - 5 h - 5 text - pink - 400' />;
                  <span className='text - sm'>{contact_info.address}</span>                </div>;
              </div>;
              {/* Additional Info */}                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className="flex items - center justify-center space-x-2">;
                  <Mail className="w - 5 h - 5 text-purple-400" />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className="flex items - center justify-center space-x-2">;
                  <MapPin className="w - 5 h - 5 text-pink-400" />;
                  <span className="text-sm">{contact_info.address}</span>;
                </div>;
              </div>;
              {/* Additional Info */}
              <div className='mt - 12 p - 6 bg - gray - 900 / 30 rounded - 2xl border border - cyan - 500 / 20'>;
                <h3 className='text - xl font - semibold text - white mb - 4'>;
                  Why Choose Zion Tech Group?;
                </h3>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4 text - sm text - gray - 300'>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />;
                    <span > All services are operational and market - tested</span>;
                  </div>                    <span > All services are operational and market - tested</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Check className="w - 4 h - 4 text-green-400" />;
                    <span > Proven ROI and customer success stories</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Check className="w - 4 h - 4 text-green-400" />;
                    <span > Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />;
                    <span > Proven ROI and customer success stories</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />;
                    <span > Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />                    <span > Cutting - edge 2029 technology</span>                  <div className="flex items-center space-x-2">;
                    <Check className="w - 4 h - 4 text-green-400" />;
                    <span > Cutting - edge 2029 technology</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
      <UltraFuturisticFooter2029 />;
<<<<<<< HEAD

    </UltraFuturisticBackground2029>);
;
      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
);
  );

}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}viewport= {
  {



=======
    </UltraFuturisticBackground2029>)}whileInView= {opacity: 1, coordinate_y: 0;
}transition= {duration: 0.8;
}viewport= {once: true;
}> <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6' > Ready to Get Started with <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' > Revolutionary Technology?</span> </h2> <p className='text-xl text-gray-300 mb-8' > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8' > <Link href='/contact' > <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105' > <Phone className='inline-block w-5 h-5 mr-2' /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className='mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20'> <h3 className='text-xl font-semibold text-white mb-4'>Why Choose Zion Tech Group?</h3> <div className='grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300'> <div className='flex items-center space-x-2'> <Check className='w-4 h-4 text-green-400' /> flex items-center space-x-2'> <Check className=' w-4 h-4 text-green-400'/> <span>Proven ROI and customer success stories</span> </div> <div className=' flex items-center space-x-2'> <Check className=' w-4 h-4 text-green-400'/> <span>Comprehensive support and implementation</span> </div> <div className=' flex items-center space-x-2'> <Check className=' w-4 h-4 text-green-400' /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>) }
}

>>>>>>> origin/cursor/delete-old-data-records-6bba

  once: true }
,}
}> <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6\"     /> Ready to Get Started with <span className=\"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\"     /> Revolutionary Technology?</span> </h2> <p className=\"text-xl text-gray-300 mb-8\"     /> Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className=\"flex flex-col sm:flex-row gap-4 justify-center items-center mb-8\"     /> <Link href=\"/contact\"     /> <button className=\"px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105\"     /> <Phone className=\"inline-block w-5 h-5 mr-2\"    /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className=\"mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20\"    /> <h3 className=\"text-xl font-semibold text-white mb-4\"    />Why Choose Zion Tech Group?</h3> <div className=\"grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300\"    /> <div className=\"flex items-center space-x-2\"    /> <Check className=\"w-4 h-4 text-green-400\"    /> flex items-center space-x-2\"> <Check className=\" w-4 h-4 text-green-400\"   /> <span    />Proven ROI and customer success stories</span> </div> <div className=\" flex items-center space-x-2\"    /> <Check className=\" w-4 h-4 text-green-400\"   /> <span    />Comprehensive support and implementation</span> </div> <div className=\" flex items-center space-x-2\"    /> <Check className=\" w-4 h-4 text-green-400\"    /> <span    />Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029    /> </UltraFuturisticBackground2029>)

<<<<<<< HEAD





=======
}> <h2 className="text-3xl "sm":text-4xl "lg":text-5xl font-bold text-white mb-6" > Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary Technology?</span> </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex-col "sm":flex-row gap-4 justify-center items-center mb-8" > <Link href="/contact" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg "hover":from-cyan-600 "hover":to-purple-700 transition-all duration-200 transform "hover":scale-105" > <Phone className="inline-block w-5 h-5 mr-2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20"> <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3> <div className="grid grid-cols-1 "md": grid-cols-2 gap-4 text-sm text-gray-300"> <div className="flex items-center space-x-2"> <Check className="w-4 h-4 text-green-400" /> flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Proven ROI and customer success stories</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Comprehensive support and implementation</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>)"

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
