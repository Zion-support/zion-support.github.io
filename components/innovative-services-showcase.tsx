
<<<<<<< HEAD

import Head from 'next/head';

=======
import { motion } from 'framer-motion';
import Head from 'next/head';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { motion } from 'framer-motion';


<<<<<<< HEAD
import {

=======
import { Star, TrendingUp, Zap, Brain, Rocket, Shield;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
import { motion  } from 'framer-motion';
import {Star,TrendingUp,Zap,Brain,Rocket,Shield,DollarSign,Users,Clock,CheckCircle,ArrowRight,Phone,Mail,MapPin,ExternalLink,} from 'lucide-react';import {Star, TrendingUp, Zap, Brain, Rocket, Shield,class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
import Head from 'next / head';
import { motion } from 'framer-motion';

import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

<<<<<<< HEAD
import { emergingTechServicesEnhanced2025  } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';



=======
import React from 'react';
const containerVariants = {
  hidden: {
  opacity: 0 
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1, delayChildren: 0.2 
}
}
}
}
}
> <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Innovative </span> <br /> <span className="text-white" >Services Showcase</span> </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" > Experience the future of technology with our most revolutionary and cutting-edge services. These are the innovations that will transform industries and reshape the world. </p> </div> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" > Featured </span> Innovative Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Our most revolutionary services that are pushing the boundaries of what's possible </p> </motion.div> </li>) ) 
}</ul> </div> <div className="flex flex-col sm:flex-row gap-3" > <a > <span>Learn More</span> <ExternalLink className="w-5 h-5" /> </a> <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30" > Get Started </a> </div> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" > Emerging </span> Tech Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover the latest technologies that are emerging and transforming industries </p> </motion.div> <motion.div key= {
  service.id 
}initial= {
  {
  opacity: 0, y: 50 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: index * 0.1 
}
}viewport= {
  {
  once: true 
}
}> > <span>Learn More</span> <ArrowRight className="w-4 h-4" /> </a> </UltraFuturisticCard> </motion.div>) ) 
}</div> <motion.div > <span>View All Emerging Tech</span> <ArrowRight className="w-6 h-6" /> </motion.a> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent" > ArrowRight-Generation </span> AI Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Experience the future of artificial intelligence with our most advanced services </p> </motion.div> <motion.div key= {
  service.id 
}initial= {
  {
  opacity: 0, y: 50 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: index * 0.1 
}
}viewport= {
  {
  once: true 
}
}> > <span>Learn More</span> <ArrowRight className="w-4 h-4" /> </a> </UltraFuturisticCard> </motion.div>) ) 
}</div> <motion.div > <span>Discover All AI Services</span> <ArrowRight className="w-6 h-6" /> </motion.a> </motion.div> </div> </section> <motion.div initial= {
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
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Ready to Experience the Future? </h2> <p className="text-xl text-gray-300 mb-8" > Join the revolution and transform your business with our cutting-edge services </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30" > Get Started Today </a> <a href="/services" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300" > Explore All Services </a> </div> </div> </div> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>) 
}
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Rocket, Shield, 
  DollarSign, Users, Clock, CheckCircle, ArrowRight,

>>>>>>> origin/cursor/delete-old-data-records-6bba
  Phone, Mail, MapPin, ExternalLink
 } from 'lucide-react';'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground','
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';'
import { emergingTechServicesEnhanced2025  } from '../data/emerging-tech-services';'
import { nextGenAIServices } from '../data/next-gen-ai-services';'

const containerVariants = {
    }
    'hidden': { 'opacity': 0
}
    'visible': {
      }
      'opacity': 1,
'transition': {
        }
        'staggerChildren': 0.1,
'delayChildren': 0.2
      }
    }
  };

<<<<<<< HEAD


  return (
    <UltraAdvancedFuturisticBackground>
      <div className='min-h-screen'>


  ];

  return (
    <UltraAdvancedFuturisticBackground>

              initial={{ opacity: 0, y: 30 }}






              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                  Featured;
                </span>{' '}




                Innovative Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Our most revolutionary services that are pushing the boundaries;
                of what's possible;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>              {featuredServices && featuredServices.map((service, index) => (                  Featured;
                </span> Innovative Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our most revolutionary services that are pushing the boundaries of what's possible;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {featuredServices && featuredServices.map((service, index) => (;
                <motion&& motion.div





                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.2 }}
                  viewport={{ once: true }}


                >
                  <div className='mb-6'>
                    <h3 className='text-2xl font-bold text-white mb-4'>

=======
const itemVariants = {
    }
    'hidden': { 'opacity': 0, 'y': 30
},
    'visible': {
      }
      'opacity': 1,
      'y': 0,
      'transition': {

        }

        'duration': 0.6,
'ease': 'easeOut','

const contactInfo = null;

const containerVariants = {}
    hidden: { opacity: 0,}
}
    visible: {
      opacity: 1;
transition: {
        staggerChildren: 0.1,}
delayChildren: 0.2,}

      },
    }}

const itemVariants = {}
    hidden: { opacity: 0, y: 30,}
},
    visible: {
      opacity: 1,
      y: 0,
      transition: {

        duration: 0.6,}
ease: 'easeOut',}
      },
    }}


const featuredServices = [
    {
      title: '🔐 Quantum Internet Security Platform',
  description:
        'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.',
      price: '$8,999/month',
  marketData: '$150B cybersecurity market, 300% annual growth',
      competitors: 'Traditional cybersecurity solutions',
  savings: 'Quantum-level protection vs. traditional methods',
      features: [


        'Quantum key distribution (QKD)',
        'Post-quantum cryptography',
        'Quantum-resistant VPN tunnels',
        'Real-time threat detection',
        'Zero-trust architecture',
      ],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',}
  color: 'from-indigo-600 to-purple-700',}
    },
    {
      title: '🧬 AI-Powered Quantum Drug Discovery',
  description:
        'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',
      price: '$12,999/month',
  marketData: '$150B AI in healthcare, 400% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
  savings: '100x faster drug discovery vs. traditional methods',
      features: [
        'Quantum molecular simulation',
        'AI-powered drug screening',
        'Protein folding prediction',
        'Drug interaction modeling',
        'Clinical trial optimization',
      ],
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery',}
  color: 'from-emerald-600 to-teal-700',}
    },
    {
      title: '💰 Autonomous Quantum Trading System',
  description:
        'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and;
  returns.',
      price: '$15,999/month',
  marketData: '$15T algorithmic trading, 200% annual growth',
      competitors: 'Renaissance Technologies, Two Sigma, Citadel',
  savings: 'Accessible quantum AI for smaller firms',
      features: [
        'Quantum AI trading algorithms',
        'Nanosecond execution',
        'Real-time market analysis',
        'Risk management',
        'Portfolio optimization',
      ],
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system',}
  color: 'from-yellow-600 to-orange-700',}
    },
    {
      title: '🧠 Neural Interface Development Platform',
  description:
        'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.',
      price: '$19,999/month',
  marketData: '$5B neural interface market, 500% annual growth',
      competitors: 'Basic research tools, Traditional medical devices',
  savings: 'First comprehensive neural interface platform',
      features: [
        'Neural signal processing',
        'Brain activity monitoring',
        'AI-powered interpretation',
        'Real-time communication',
        'Safety protocols',
      ],

      link: 'https://ziontechgroup.com/neural-interface-development-platform',}
  color: 'from-purple-600 to-indigo-700',}
    },
  ];

  return (
    <UltraAdvancedFuturisticBackground    />
<div className = 'min-h-screen'    />
        <Head    />
 ;
  return (
    <UltraAdvancedFuturisticBackground    />
      <div className='min-h-screen'    />
          <title    />
            Innovative Services Showcase - Zion Tech Group | Cutting-Edge;
Technology;
          </title>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <meta;
name='description'
            content='Discover our most innovative and cutting-edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. Contact: +1 302 464 0950'
             />
          <meta;
name='keywords'
            content='innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting-edge technology'
             />
          <meta;
property='og: title'
            content='Innovative Services Showcase - Zion Tech Group'
             />
          <meta;
property='og:description'
            content='Cutting-edge technology services showcase'
             />
          <meta;
property='og:url'
            content='https://ziontechgroup.com/innovative-services-showcase'
             />
          <meta property='og:type' content='website'    />
          <link;
rel='canonical'
            href='https://ziontechgroup.com/innovative-services-showcase'
             />
        </Head>

        {/* Hero Section *,}
}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'    />;
          <div className='max-w-7xl mx-auto text-center'    />;
            <motion.div;
              initial={{ opacity: 0, y: 50 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 1, ease: 'easeOut' ,}
}
                />;
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'    />;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />;
                  Innovative;
                </span>;
                <br    />;
                <span className='text-white'    />Services Showcase</span>;
              </h1>;
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'    />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Experience the future of technology with our most revolutionary;
                and cutting-edge services. These are the innovations that will;
                transform industries and reshape the world.;
              </p>;
              {/* Contact Info */}
<<<<<<< HEAD

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'    />;
                <div className='text-center'    />;
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-3'    />;
                  <div className='text-white font-semibold'    />Phone</div>;
                  <div className='text-gray-400'    />{contactInfo.mobile}</div>;
=======
              <div className='grid grid-cols-1 'md':grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'>;'
                <div className='text-center'>;'
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-3' />;'
                  <div className='text-white font-semibold'>Phone</div>;'
                  <div className='text-gray-400'>{contactInfo.mobile}</div>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>;
                <div className='text-center'>;'
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-3' />;'
                  <div className='text-white font-semibold'>Email</div>;'
                  <div className='text-gray-400'>{contactInfo.email}</div>;'
                </div>;
<<<<<<< HEAD
                <div className='text-center'    />;
                  <MapPin className='w-8 h-8 text-pink-400 mx-auto mb-3'    />;
                  <div className='text-white font-semibold'    />Address</div>;
                  <div className='text-gray-400'    />{contactInfo.address}</div>;

=======
                <div className='text-center'>;'
                  <MapPin className='w-8 h-8 text-pink-400 mx-auto mb-3' />;'
                  <div className='text-white font-semibold'>Address</div>;'
                  <div className='text-gray-400'>{contactInfo.address}</div>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Featured Innovative Services */}

<<<<<<< HEAD

=======
<section className='py-20 px-4 'sm':px-6 'lg':px-8'>'
          <div className='max-w-7xl mx-auto'>'
            <motion.div,
className='text-center mb-16''

              initial={ 'opacity': 0, 'y': 30 
}
              whileInView={ 'opacity': 1, 'y': 0 }
              transition={ 'duration': 0.8 }
              viewport={ 'once': true 
}
            >;
<h2 className='text-4xl 'md':text-5xl font-bold text-white mb-6'>;'
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;'
                  Featured;
                </span>{' '}'

                Innovative Services
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>'
                Our most revolutionary services that are pushing the boundaries,
of what's possible'
              </p>
            </motion.div>

            <div className='grid grid-cols-1 'lg':grid-cols-2 gap-8'>'
              {featuredServices.map((service, index) => (
                <motion.div
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
<section className='py-20 px-4 sm:px-6 lg:px-8'    />
          <div className='max-w-7xl mx-auto'    />
            <motion.div;
className='text-center mb-16'

              initial={{ opacity: 0, y: 30 ,}
}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true ,}
}
                />;
<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'    />;
                  Featured;
                </span>{' '}

                Innovative Services;
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />
                Our most revolutionary services that are pushing the boundaries;
of what's possible;
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />
              {featuredServices.map((service, index) => (}
                <motion.div;}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
key={index}
                  initial={ 'opacity': 0, 'x': index % 2 === 0 ? -50 : 50 
}
                  whileInView={ 'opacity': 1, 'x': 0 
}
                  transition={ 'duration': 0 && 0.8, 'delay': index * 0 && 0.2 }
                  viewport={ 'once': true 
}>;
                  <div className='mb-6'>;'
                    <h3 className='text-2xl font-bold text-white mb-4'>;'
      <div className='min - h-screen'>;'
          <title>Innovative Services Showcase - Zion Tech Group | Cutting - Edge;
            Technology;
          </title>;
          <meta;
            name='description';'
            content='Discover our most innovative and cutting - edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. 'Contact': +1 302 464 0950';' />;
          <meta;
            name='keywords';
            content='innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting - edge technology';
             />;
          <meta;
            property=''og':title';'
            content='Innovative Services Showcase - Zion Tech Group';' />;
          <meta;
            property=''og':description';'
            content='Cutting - edge technology services showcase';' />;
          <meta;
            property=''og':url';'
            content=''https'://ziontechgroup.com / innovative - services - showcase';' />;
          <meta property=''og':type' content='website' />;'
          <link;
            rel='canonical';'
            href=''https'://ziontechgroup.com / innovative - services - showcase';' />;
        </Head>;
        {/* Hero Section */}
        <section className='relative py - 20 px - 4 'sm':px - 6 'lg':px - 8'>;'
          <div className='max - w-7xl mx - auto text - center'>;'
            <motion.div;
              initial={ 'opacity': 0, 'coordinate_y': 50 
}
              animate={ 'opacity': 1, 'coordinate_y': 0 
}
              transition={ 'duration': 1, 'ease': 'ease_out' ,'
}
            >;
              <h1 className='text - 5xl 'md':text - 7xl font - bold text - white mb - 6 leading - tight'>;'
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;'
                  Innovative;
                </span>;
                <br    />;
                <span className='text - white'    />Services Showcase</span>;
              </h1>;
              <p className='text - xl 'md':text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed'>;'
                Experience the future of technology with our most revolutionary;
                and cutting - edge services. These are the innovations that will;
                transform industries and reshape the world.;
              </p>;
              {/* Contact Info */}
              <div className='grid grid - cols - 1 'md':grid - cols - 3 gap - 6 max - w-4xl mx - auto mb - 12'>;'
                <div className='text - center'>;'
                  <Phone className='w - 8 h - 8 text - cyan - 400 mx - auto mb - 3' />;'
                  <div className='text - white font - semibold'>Phone</div>;'
                  <div className='text - gray - 400'>{contact_info.mobile}</div>;'
                </div>;
                <div className='text - center'    />;
                  <Mail className='w - 8 h - 8 text - purple - 400 mx - auto mb - 3'    />;
                  <div className='text - white font - semibold'    />Email</div>;
                  <div className='text - gray - 400'    />{contact_info.email}</div>;
                </div>;
                <div className='text - center'>;'
                  <MapPin className='w - 8 h - 8 text - pink - 400 mx - auto mb - 3' />;'
                  <div className='text - white font - semibold'>Address</div>;'
                  <div className='text - gray - 400'>{contact_info.address}</div>                </div>                <div className='text - center'>;'
                  <MapPin className='w - 8 h - 8 text - pink - 400 mx - auto mb - 3' />;'
                  <div className='text - white font - semibold'>Address</div>;'
                  <div className='text - gray - 400'>{contact_info.address}</div>;'
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Featured Innovative Services */}
        <section className='py - 20 px - 4 'sm':px - 6 'lg':px - 8'>;'
          <div className='max - w-7xl mx - auto'>;'
            <motion.div;
              className='text - center mb - 16'              initial={ 'opacity': 0, 'coordinate_y': 30 ,'
}        <section className='py - 20 px - 4 'sm':px - 6 'lg':px - 8'>;'
          <div className='max - w-7xl mx - auto'>;'
            <motion.div;
              className='text - center mb - 16';'
              whileInView={ 'opacity': 1, 'coordinate_y': 0 }
              transition={ 'duration': 0.8 }
              viewport={ 'once': true 
}
            >;
              <h2 className='text - 4xl 'md':text - 5xl font - bold text - white mb - 6'>;'
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;'
                  Featured;
                </span>{' '}
                Innovative Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'    />;
                Our most revolutionary services that are pushing the boundaries;
                of what's possible;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 'lg':grid - cols - 2 gap - 8'>              {featured_services.map ((service, index) => (                  Featured;'
                </span> Innovative Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;'
                }
                Our most revolutionary services that are pushing the boundaries of what's possible;'
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 'lg':grid - cols - 2 gap - 8'>;'
              {featured_services.map ((service, index) => (<motion.div;
                  }
                  key={index}
                  initial={ 'opacity': 0, 'coordinate_x': index % 2 === 0 ? -50 : 50 
}
                  whileInView={ 'opacity': 1, 'coordinate_x': 0 
}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.2 }}

                  viewport={{ once: true }}
                  className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300'
=======
                  transition={ 'duration': 0.8, 'delay': index * 0.2 }
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  viewport={ 'once': true }

className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 'hover':border-cyan-500/40 transition-all duration-300''
                >
                  <div className='mb-6'>'
                    <h3 className='text-2xl font-bold text-white mb-4'>'

                      {service.titl
}
                    </h3>;
                    <p className='text - gray - 300 mb - 6 leading - relaxed'>;'
                      {service.description}
<<<<<<< HEAD



=======
                        {service.price}
                      </div>;
                      <div className='text - sm text - gray - 400'>;'
                        {service.market_data}
                      </div>;
                      <div className='text - sm text - green - 400 mt - 1'>;'
                        {service.price}
                      </div>;
                      <div className='text - sm text - gray - 400'>;
                        {service.market_data}
                      </div>;
                      <div className='text - sm text - green - 400 mt - 1'>;
                        {service.savings}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.marketData}</div>
                      <div className="text-sm text-green-400 mt-1">{service.savings}</div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />



                        {service.savings}

                      </div>
                    </div>
                    <div className='mb-6'>'
                      <h4 className='text-lg font-semibold text-white mb-3'>'
                        Key 'Features':
                      </h4>
                      <ul className='space-y-2'>'
                        {service.features.map((feature, idx) => (
                          <li
}
key={idx}
                            className='flex items-center text-gray-300'>'

                            <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />;'
                            {feature}
                          </li>;
                        ))}

                      </ul>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3'>
                      <a
                        href={service.link}
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2'
                      >
                        <span>Learn More</span>
                        <ExternalLink className='w-5 h-5' />
                      </a>
                      <a
                        href='/contact'
                        className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'                      >                      <a
                        href={service.link}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2"><span>Learn More</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Get Started

=======

                      >
                        Get Started
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </a>
                    </div>
                  </div>
                </motion.div>


<<<<<<< HEAD
=======
              ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </div>;
          </div>;
        </section>;


<<<<<<< HEAD

        {/* Emerging Tech Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              className="text-center mb-16"


=======
              ))}



        {/* Emerging Tech Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div

              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}


>>>>>>> origin/cursor/delete-old-data-records-6bba
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                  Emerging;
                </span>{' '}





            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {emergingTechServicesEnhanced2025
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
<<<<<<< HEAD


=======
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                  Emerging;
                </span>{' '}
                Tech Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover the latest technologies that are emerging and;
                transforming industries;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              {emergingTechServicesEnhanced2025;
                .slice(0, 6);
                .map((service, index) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <UltraFuturisticCard
                      variant='quantum-holographic'
                      className='p-6'>;
                      <div className='text-4xl mb-4'>{service && service.icon}</div>;
                      <h3 className='text-xl font-bold text-white mb-3'>;
                        {service && service.name}
                      </h3>;
                      <p className='text-gray-300 text-sm mb-4'>;
                        {service && service.description}
                      </p>;
                      <div className='text-2xl font-bold text-cyan-400 mb-2'>;
                        {service && service.price}
                        <span className='text-sm text-gray-400'>;
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='text-sm text-gray-400 mb-4'>;
                        {service && service.marketSize} • {service && service.growthRate}
                      </div>;
                      <a
                        className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30>                      <a
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        href={service && service.link}
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2'>;
                        <span>Learn More</span>;
                        <ExternalLink className='w-5 h-5' />;
                      </a>;

<<<<<<< HEAD

              ))}

=======
              ))}
        {/* Emerging Tech Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
          </div>
        </section>


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Emerging Tech Services *,}
}

<section className='py-20 px-4 sm:px-6 lg:px-8'    />
          <div className='max-w-7xl mx-auto'    />
            <motion.div;
className='text-center mb-16'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              initial={{ opacity: 0, y: 30 ,}
}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}


                />

<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'    />
                  Emerging;
                </span>{' ,}
}
<<<<<<< HEAD
=======
                </span> Tech Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the latest technologies that are emerging and transforming industries
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {emergingTechServicesEnhanced2025.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
            </div>;
            <motion&& motion.div
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}                  Emerging
                </span> Tech Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Discover the latest technologies that are emerging and transforming industries;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                              {emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.slice(0, 6).map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <UltraFuturisticCard variant="quantum-holographic" className="p-6">;
                    <div className="text-4xl mb-4">{service && service.icon}</div>;
                    <h3 className="text-xl font-bold text-white mb-3">{service && service.name}</h3>;
                    <p className="text-gray-300 text-sm mb-4">{service && service.description}</p>;
                    <div className="text-2xl font-bold text-cyan-400 mb-2">;
                      {service && service.price}
                      <span className="text-sm text-gray-400">{service && service.period}</span>;
                    </div>;
                    <div className="text-sm text-gray-400 mb-4">{service && service.marketSize} • {service && service.growthRate}</div>;
                    <a
                      href={service && service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2">;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4" />;
                    </a>;
                  </UltraFuturisticCard>;
                </motion && motion.div>;
              ))}
            </div>;
            <motion&& motion.div

              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}

>>>>>>> origin/cursor/delete-old-data-records-6bba

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


=======
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
href="/services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
<ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>
className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}>;
                <span>View All Emerging Tech</span>;
                <ArrowRight className='w-6 h-6' />              </motion && motion.a>                href="/services";
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2";
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
              >;
                <span>View All Emerging Tech</span>;
                <ArrowRight className='w-6 h-6' />                <ArrowRight className="w-6 h-6" />;
              </motion && motion.a>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* ArrowRight-Gen AI Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              className="text-center mb-16"
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent'>;
                  ArrowRight-Generation;
                </span>{' '}
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* ArrowRight-Gen AI Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  ArrowRight-Generation
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </span> AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of artificial intelligence with our most advanced services
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextGenAIServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                AI Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Experience the future of artificial intelligence with our most;
                advanced services;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {nextGenAIServices && nextGenAIServices.slice(0, 6).map((service, index) => (                  ArrowRight-Generation;
                </span> AI Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Experience the future of artificial intelligence with our most advanced services;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {nextGenAIServices && nextGenAIServices.slice(0, 6).map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


            </div>
            <motion.div

              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <motion&& motion.a
                href='/services'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </div>;

            <motion&& motion.div

              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <motion&& motion.a
                href='/services'

<<<<<<< HEAD


=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
            </div>;
            <motion&& motion.div
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <motion&& motion.a
                href='/services'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}><UltraFuturisticCard variant="quantum-holographic" className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"><span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-center mt-16"
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href='/services'
                className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
                <ArrowRight className='w-6 h-6' />              </motion.a>                href="/services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
                <ArrowRight className='w-6 h-6' />                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>
        {/* ArrowRight-Gen AI Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent'>
                  ArrowRight-Generation
                </span>{' '}
<<<<<<< HEAD

                Tech Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />;

=======
                Tech Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Discover the latest technologies that are emerging and;
                transforming industries;
              </p>;
            </motion.div>;
<<<<<<< HEAD

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />;
              {emergingTechServicesEnhanced2025;}
                .slice(0, 6).map((service, index) => (<motion.div;}

=======
            <div className='grid grid-cols-1 'md':grid-cols-2 'lg':grid-cols-3 gap-8'>;'
              {emergingTechServicesEnhanced2025;
                .slice(0, 6).map((service, index) => (<motion.div;
                    }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />;
              {emergingTechServicesEnhanced2025;}
                .slice(0, 6).map((service, index) => (<motion.div;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    key={service.id}
                    initial={ 'opacity': 0, 'y': 50 
}
                    whileInView={ 'opacity': 1, 'y': 0 
}
                    transition={ 'duration': 0.8, 'delay': index * 0.1 }
                    viewport={ 'once': true 
}
                      />;
                    <UltraFuturisticCard;
<<<<<<< HEAD

                      variant='quantum-holographic';
                      className='p-6'    />

                      <div className='text-4xl mb-4'    />{service.icon}</div>;
                      <h3 className='text-xl font-bold text-white mb-3'    />;
=======
                      variant='quantum-holographic';'
                      className='p-6'>'

                      <div className='text-4xl mb-4'>{service.icon}</div>;'
                      <h3 className='text-xl font-bold text-white mb-3'>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {service.name}
                      </h3>;
                      <p className='text-gray-300 text-sm mb-4'>;'
                        {service.description}
                      </p>;
                      <div className='text-2xl font-bold text-cyan-400 mb-2'>;'
                        {service.price}
                        <span className='text-sm text-gray-400'>;'
                          {service.period}
                        </span>;
                      </div>;
<<<<<<< HEAD
                      <div className='text-sm text-gray-400 mb-4'    />;

=======
                      <div className='text-sm text-gray-400 mb-4'>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {service.marketSize} • {service.growthRate}
                      </div>;
                      <a;
                        href={service.link}
<<<<<<< HEAD

                        className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'    />

                        <span    />Learn More</span>;
                        <ArrowRight className='w-4 h-4'    />;

=======
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold 'hover':from-cyan-400 'hover':to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'>'

                        <span>Learn More</span>;
                        <ArrowRight className='w-4 h-4' />;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </a>;
                    </UltraFuturisticCard>;
                  </motion.div>;
                ))}
<<<<<<< HEAD

              className='text - center mt - 16'              initial={{ opacity: 0, coordinate_y: 30 }}                  Emerging;
                </span> Tech Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Discover the latest technologies that are emerging and transforming industries;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                              {emergingTechServicesEnhanced2025.slice (0, 6).map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 50 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <UltraFuturisticCard variant="quantum - holographic" className="p - 6">;
                    <div className="text - 4xl mb - 4">{service.icon}</div>;
                    <h3 className="text - xl font - bold text - white mb - 3">{service.name}</h3>;
                    <p className="text - gray - 300 text - sm mb - 4">{service.description}</p>;
                    <div className="text - 2xl font - bold text - cyan - 400 mb - 2">;

=======
            </div>;
            <motion.div;

              className='text-center mt-16;
            </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <a;
                  key={service.id}
                  initial={ opacity: 0, y: 50}
                  whileInView={ opacity: 1, y: 0}
                  transition={ duration: 0.8, delay: index * 0.1 }
                  viewport={ once: true}
                >
                  <UltraFuturisticCard
                    variant='quantum-holographic'
                    className='p-6'><div className='text-4xl mb-4'>{service.icon}</div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {service.name}
                    </h3>
                    <p className='text-gray-400 text-sm mb-4'>
                      {service.description}
                    </p>
                    <div className='text-2xl font-bold text-cyan-400 mb-2'>
                      {service.price}
                      <span className='text-sm text-gray-400'>{service.period}</span>
                    </div>
                    <div className='text-sm text-gray-400 mb-4'>{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'
                    >
                      <span>Learn More</span>
                      <ArrowRight className='w-4 h-4' />                    </a>                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"><span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-center mt-16
              initial={{ opacity: 0, y: 30}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true}}
            >
              <motion.a
                href=/services"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover All AI Services</span>


            </div>
            <motion.div;
className='text-center mt-16'

              initial={{ opacity: 0, y: 30 ,}
}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true ,}
}
                />;
              <motion.a;
href='/services';
                className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2';
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                  />
                <span    />View All Emerging Tech</span>
<ArrowRight className='w-6 h-6'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </motion.a>
            </motion.div>
          </div>
        </section>


<<<<<<< HEAD
=======
              </motion.a>
            </motion.div>
          </div>
        </section>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                className='bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 ,}
}>;
                <span    />Discover All AI Services</span>;
                <ArrowRight className='w-6 h-6'    />              </motion && motion.a>                href=\'/services\';
                className=\'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2\';
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 ,}
}
              >;
<<<<<<< HEAD

=======
                <span>Discover All AI Services</span>;


        <section className='py-20 px-4 sm:px-6 lg:px-8'    />;
          <div className='max-w-4xl mx-auto text-center'    />            <motion && motion.div        <section className=\"py-20 px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"max-w-4xl mx-auto text-center\"    />;
            <motion&& motion.div;
        {/* Call to Action */}
        <section className=\"py-20 px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"max-w-4xl mx-auto text-center\"    />;
            <motion.div;
        {/* Call to Action */}
<section className='py-20 px-4 sm:px-6 lg:px-8'    />;
          <div className='max-w-4xl mx-auto text-center'    />;
            <motion.div;
              initial={{ opacity: 0, y: 30 ,}
}


              transition={ 'duration': 0.8 }
              viewport={ 'once': true }
            >
<h2 className='text-4xl 'md':text-5xl font-bold text-white mb-6'>'
                Ready to Experience the Future?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>'
                Join the revolution and transform your business with our,
cutting-edge services
              </p>
              <div className='flex flex-col 'sm':flex-row gap-4 justify-center'>'
                <a,
href='/contact''
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 'hover':from-cyan-400 'hover':to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform 'hover':shadow-xl 'hover':shadow-cyan-500/30''
                >
                  Get Started Today
                </a>
                <a,
href='/services''
                  className='border-2 border-cyan-400 text-cyan-400 'hover':bg-cyan-400 'hover':text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300''
                >
                  Explore All Services
                </a>
              </div>


<div className='mt-12 text-center'>'
                <p className='text-gray-400 mb-4'>Contact us 'directly':</p>'
                <div className='flex flex-col 'sm':flex-row gap-6 justify-center items-center'>'
                  <div className='flex items-center space-x-2'>'
                    <Phone className='w-5 h-5 text-cyan-400' />'
                    <span className='text-white'>{contactInfo.mobile}</span>'
                  </div>
                  <div className='flex items-center space-x-2'>'
                    <Mail className='w-5 h-5 text-purple-400' />'
                    <span className='text-white'>{contactInfo.email}</span>'
                  </div>
                  <div className='flex items-center space-x-2'>'
                    <MapPin className='w-5 h-5 text-pink-400' />'
                    <span className='text-white'>{contactInfo.addres,'
}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
              whileInView={ opacity: 1, y: 0 }<a;
                  href='/contact';
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                  Get Started Today;
                </a>;
                <a;
                  href='/services';
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Join the revolution and transform your business with our cutting-edge services;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'>                Ready to Experience the Future?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Join the revolution and transform your business with our cutting-edge services;
              </p>;
                <a;
                  href='/contact';
              transition={ duration: 0.8 }
              viewport={ once: true }
            >;
<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Call to Action */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div


              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


<<<<<<< HEAD

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;

=======
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Ready to Experience the Future?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Join the revolution and transform your business with our;
                cutting-edge services;
              </p>;
<<<<<<< HEAD

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>;




=======

              <div className='flex flex-col sm:flex-row gap-4 justify-center>;
                <a;
                  href=/contact';
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30;
                >;
                  Get Started Today;
                </a>;
                <a;
href='/services';
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300';
                >;
                  Explore All Services;
                </a>;
              </div>;
                  <div className='flex items-center space-x-2'>;
                    <Mail className='w-5 h-5 text-purple-400' />;
                    <span className='text-white'>{contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-5 h-5 text-pink-400' />;
                    <span className='text-white'>{contactInfo.address}</span>;
<div className='mt-12 text-center'>;
                <p className='text-gray-400 mb-4'>Contact us directly:</p>;
                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>;
                  <div className='flex items-center space-x-2'>;
                    <Phone className='w-5 h-5 text-cyan-400' />;
                    <span className='text-white'>{contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Mail className='w-5 h-5 text-purple-400' />;
                    <span className='text-white'>{contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-5 h-5 text-pink-400' />;
                    <span className='text-white'>{contactInfo.address}</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  )})}

                <a
                  href='/contact'
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                  Get Started Today;
                </a>;
                <a
                  href='/services'
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution and transform your business with our cutting-edge services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'>                Ready to Experience the Future?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join the revolution and transform your business with our cutting-edge services;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Get Started Today
                </a>
                <a
                  href='/services'
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Explore All Services
                </a>
              </div>
              <div className='mt-12 text-center'>
                <p className='text-gray-400 mb-4'>Contact us directly:</p>
                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                  <div className='flex items-center space-x-2'>
                    <Phone className='w-5 h-5 text-cyan-400' />
                    <span className='text-white'>{contactInfo.mobile}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Mail className='w-5 h-5 text-purple-400' />
                    <span className='text-white'>{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='w-5 h-5 text-pink-400' />
                    <span className='text-white'>{contactInfo.address}</span>                  </div>                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-white">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>


);
  );
}
}
  );
}


  );
}
            >;
              <motion.a;
                href='/services';
                className='bg - gradient - to - r from - emerald - 500 to - teal - 600 hover:from - emerald - 400 hover:to - teal - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - emerald - 500 / 25 inline - flex items - center space - x-2'                while_hover={ scale: 1.05 }
                while_tap={ scale: 0.95 }
              >;
                <span > View All Emerging Tech</span>;
                <ArrowRight className='w - 6 h - 6' />              </motion.a>                href='/services';
                className='bg - gradient - to - r from - emerald - 500 to - teal - 600 hover:from - emerald - 400 hover:to - teal - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - emerald - 500 / 25 inline - flex items - center space - x-2';
                while_hover={ scale: 1.05 }
                while_tap={ scale: 0.95 }
              >;
                <span > View All Emerging Tech</span>;
                <ArrowRight className='w - 6 h - 6' />                <ArrowRight className='w - 6 h - 6' />;
              </motion.a>;
            </motion.div>;
          </div>;
        </section>;
        {/* ArrowRight - Gen AI Services */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>;
            <motion.div;
              className='text - center mb - 16'              initial={ opacity: 0, coordinate_y: 30 }        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>;
            <motion.div;
              className='text - center mb - 16';
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - pink - 400 to - rose - 400 bg - clip - text text - transparent'>;
                  ArrowRight - Generation;
                </span>{' '}
                AI Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Experience the future of artificial intelligence with our most;
                advanced services;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>              {nextGenAIServices.slice (0, 6).map ((service, index) => (                  ArrowRight - Generation;
                </span> AI Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Experience the future of artificial intelligence with our most advanced services;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
              {nextGenAIServices.slice (0, 6).map ((service, index) => (<motion.div;
                  key={service.id}
                  initial={ opacity: 0, coordinate_y: 50 }
                  whileInView={ opacity: 1, coordinate_y: 0 }
                  transition={ duration: 0.8, delay: index * 0.1 }
                  viewport={ once: true }
                >;
                  <UltraFuturisticCard;
                    variant='quantum - holographic';
                    className='p - 6';
                  >;
                    <div className='text - 4xl mb - 4'>{service.icon}</div>;
                    <h3 className='text - xl font - bold text - white mb - 3'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 400 text - sm mb - 4'>;
                      {service.description}
                    </p>;
                    <div className='text - 2xl font - bold text - cyan - 400 mb - 2'>;
                      {service.price}
                      <span className='text - sm text - gray - 400'>;
                        {service.period}
                      </span>;
                    </div>;
                    <div className='text - sm text - gray - 400 mb - 4'>;
                      {service.market_size} • {service.growth_rate}
                    </div>;
                    <a;
                      href={service.link}
                      className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - semibold hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 inline - flex items - center space - x-2';
                    >;
                      <span > Learn More</span>;
                      <ArrowRight className='w - 4 h - 4' />                    </a>                      {service.price}
                      <span className='text - sm text - gray - 400'>{service.period}</span>;
                    </div>;
                    <div className='text - sm text - gray - 400 mb - 4'>{service.market_size} • {service.growth_rate}</div>;
                    <a;
                      href={service.link}
                      className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - semibold hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 inline - flex items - center space - x-2';
                    >;
                      <span > Learn More</span>;
                      <ArrowRight className='w - 4 h - 4' />;
                    </a>;
                  </UltraFuturisticCard>;
                </motion.div>))}
            </div>;
            <motion.div;
              className='text - center mt - 16'              initial={ opacity: 0, coordinate_y: 30 }              className='text - center mt - 16';
              initial={ opacity: 0, coordinate_y: 30 }
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >;
              <motion.a;
                href='/services';
                className='bg - gradient - to - r from - pink - 500 to - rose - 600 hover:from - pink - 400 hover:to - rose - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - pink - 500 / 25 inline - flex items - center space - x-2'                while_hover={ scale: 1.05 }
                while_tap={ scale: 0.95 }
              >;
                <span > Discover All AI Services</span>;
                <ArrowRight className='w - 6 h - 6' />              </motion.a>                href='/services';
                className='bg - gradient - to - r from - pink - 500 to - rose - 600 hover:from - pink - 400 hover:to - rose - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - pink - 500 / 25 inline - flex items - center space - x-2';
                while_hover={ scale: 1.05 }
                while_tap={ scale: 0.95 }
              >;
                <span > Discover All AI Services</span>;
                <ArrowRight className='w - 6 h - 6' />                <ArrowRight className='w - 6 h - 6' />;
              </motion.a>;
            </motion.div>;
          </div>;
        </section>;
        {/* Call to Action */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>;
            <motion.div;
              initial={ opacity: 0, coordinate_y: 30 }
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Experience the Future?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Join the revolution and transform your business with our;
                cutting - edge services;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <a;
                  href='/contact';
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30'                >;
                  Get Started Today;
                </a>;
                <a;
                  href='/services';
                  className='border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300'                >                Ready to Experience the Future?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Join the revolution and transform your business with our cutting - edge services;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <a;
                  href='/contact';
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
                >;
                  Get Started Today;
                </a>;
                <a;
                  href='/services';
                  className='border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300'                  href='/services';
                  className='border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300';
                >;
                  Explore All Services;
                </a>;
              </div>;
              <div className='mt - 12 text - center'>;
                <p className='text - gray - 400 mb - 4'>Contact us directly:</p>;
                <div className='flex flex - col sm:flex - row gap - 6 justify - center items - center'>;
                  <div className='flex items - center space - x-2'>;
                    <Phone className='w - 5 h - 5 text - cyan - 400' />;
                    <span className='text - white'>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Mail className='w - 5 h - 5 text - purple - 400' />;
                    <span className='text - white'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <MapPin className='w - 5 h - 5 text - pink - 400' />;
                    <span className='text - white'>{contact_info.address}</span>                  </div>                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Mail className='w - 5 h - 5 text - purple - 400' />;
                    <span className='text - white'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <MapPin className='w - 5 h - 5 text - pink - 400' />;
                    <span className='text - white'>{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
