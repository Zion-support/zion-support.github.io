>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';

import Link from 'next/link';
import {
  CheckCircle
  ArrowRight
  Star
  TrendingUp
  Phone
  Zap
  DollarSign
  Shield
  Mail
  MapPin
  Rocket
  Brain
  Sparkles
  Globe
  Atom
  Heart
  Leaf
  Car
  GraduationCap
  Scale
  Building
  Factory
  Camera
  Video
  Music
  Gamepad2
  Crown
  Award
  Target
  Users
  Clock
  Globe2;} from 'lucide-react';import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap

=======import { motion } from 'framer-motion';

import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 

=======
import {  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Phone,
  Zap,
  DollarSign,
  Shield,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Sparkles,
  Globe,
  Atom,
  Heart,
  Leaf,
  Car,
  GraduationCap,
  Scale,
  Building,
  Factory,
  Camera,
  Video,
  Music,
  Gamepad2,
  Crown,
  Award,
  Target,
  Users,
  Clock,;
  Globe2,;} from 'lucide-react';import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2

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
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {;
  CheckCircle,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Phone,;
  Zap,;
  DollarSign,;
  Shield,;
  Mail,;
  MapPin,;
  Rocket,;
  Brain,;
  Sparkles,;
  Globe,;
  Atom,;
  Heart,;
  Leaf,;
  Car,;
  GraduationCap,;
  Scale,;
  Building,;
  Factory,;
  Camera,;
  Video,;
  Music,;
  Gamepad2,;
  Crown,;
  Award,;
  Target,;
  Users,;
  Clock,;
  Globe2,;} from 'lucide-react';import { ;
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2;

import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

=======

const pricingTiers = [
  {
    name: 'Starter'
    price: '$299'
    period: '/month'
    description: 'Perfect for small businesses and startups'
    features: [

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Phone,
  Zap,
  DollarSign,
  Shield,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Sparkles,
  Globe,
  Atom,
  Heart,
  Leaf,
  Car,
  GraduationCap,
  Scale,
  Building,
  Factory,
  Camera,
  Video,
  Music,
  Gamepad2,
  Crown,
  Award,
  Target,
  Users,

  Clock,;
  Globe2,;} from 'lucide-react';import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;


  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2;
import UltraFuturisticNavigation2028 from '../components / layout / UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components / layout / UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data / 2028 - futuristic - innovations';
import { emergingTech2028Services } from '../data / 2028 - emerging - tech - services';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',  website: 'https://ziontechgroup.com';
}
;
const pricing_tiers = [;
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    href: '/contact';
  }

    features: [;      'Advanced AI capabilities',
      'Priority support',
      'Full feature access',
      'Phone & email support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Training & onboarding',
    ],
    popular: true,
    color: 'from - purple - 600 to - pink - 600',
    cta: 'Start Free Trial',
    href: '/contact',
  },  {      'Advanced AI capabilities_priority support_full feature access_phone & email support_advanced analyticsAPI access_custom integrations_training & onboarding';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    ];
    popular: true,
    color: 'from - purple - 600 to - pink - 600',
    cta: 'Start Free Trial',
    href: '/contact';
  }

    features: [;      'Custom AI development',
      'Dedicated support team',
      'White - label solutions',
      '24 / 7 phone support',
      'Custom analytics',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantees',
      'On - premise deployment',
    ],
    popular: false,
    color: 'from - indigo - 600 to - purple - 600',
    cta: 'Contact Sales',
    href: '/contact',
  }, ];      'Custom AI development_dedicated support team_white - label solutions24 / 7 phone support_custom analytics_full API access_custom integrations_dedicated account manager';
      'SLA guarantees_on - premise deployment';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    ];
    popular: false,
    color: 'from - indigo - 600 to - purple - 600',
    cta: 'Contact Sales',
    href: '/contact';
  }
    category: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice(0, 6)
  };




=======
];
export default function Revolutionary2028Pricing() {

  return (

export default function Revolutionary2028Pricing() {
  return (
==============    <>
      <Head>
        <title>2028 Revolutionary Pricing - Zion Tech Group</title>
        <meta name="description" content="Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions." />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <meta name="keywords" content="2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing" />
        <meta property="og:title" content="2028 Revolutionary Pricing - Zion Tech Group" />
        <meta property="og:description" content="Competitive pricing for our cutting-edge 2028 services with transparent plans and flexible options." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2028-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2028-pricing" />
      </Head>


                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'>;
                <span>View Services</span>;
                <Rocket className='w-5 h-5' />              </Link>;
            </div>;
            {/* Pricing Stats */}          >;
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">;
              <DollarSign className="w-4 h-4" />;
              <span>Transparent Pricing</span>;
            </div>;
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">;
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">;
                Revolutionary;
              </span>;
              <br />;
              <span className="text-white">2028 Pricing</span>;
            </h1>;
            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">;
              Experience cutting-edge technology at competitive prices. Our transparent pricing model ;
              ensures you get maximum value for your investment in the future.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link
                href="/2028-services-showcase"

                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2">;
                <span>View Services</span>;
                <Rocket className="w-5 h-5" />;
              </Link>;
            </div>;
            {/* Pricing Stats */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 pt-16'>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-purple-400'>30%</div>;
                <div className='text-purple-300'>Lower than Market</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-blue-400'>99 && 99.9%</div>;
                <div className='text-blue-300'>Uptime Guarantee</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-pink-400'>24/7</div>;
                <div className='text-pink-300'>Expert Support</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-cyan-400'>30-Day</div>;
                <div className='text-cyan-300'>Free Trial</div>              </div>              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-blue-400">99 && 99.9%</div>;
                <div className="text-blue-300">Uptime Guarantee</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-pink-400">24/7</div>;
                <div className="text-pink-300">Expert Support</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-cyan-400">30-Day</div>;
                <div className="text-cyan-300">Free Trial</div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
      {/* Pricing Tiers */}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


=======                    <div className="mb-8">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-purple-300">{tier.period}</span>
                      </div>
                      {tier.name === 'Enterprise' && (
                        <p className="text-sm text-purple-300 mt-2">Contact us for custom pricing</p>
                      )}

                    <ul className="space-y-3 mb-8">;
                      {tier && tier.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center space-x-3">;
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />;
                          <span className="text-purple-200">{feature}</span>;
                        </li>;
                      ))}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-purple-200">{feature}</span>
                        </li>
                      ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Link
                      href={tier && tier.href}
                      className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${tier && tier.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>;
                      {tier && tier.cta}
                    </Link>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
                        </li>

                      ))}
                    </ul>

                    <Link
                      href={tier.href}
                      className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${tier.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
=======          </div>
        </div>
      </section>


=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Service Pricing */}
      <section className='py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Service{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Pricing
              </span>
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Detailed pricing for our individual services. Mix and match to
              create your perfect solution.            </p>
          </div>
          {servicePricing.map((category, categoryIndex) => (      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Detailed pricing for our individual services. Mix and match to create your perfect solution.


      {/* Service Pricing */}
      <section className='py - 20 bg - gradient - to - br from - purple - 900 / 10 to - blue - 900 / 10'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Service{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                Pricing;
              </span>;
            </h2>;
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
              Detailed pricing for our individual services. Mix and match to;
              create your perfect solution.            </p>;
          </div>;
          {service_pricing.map ((category, category_index) => (      <section className="py - 20 bg - gradient - to - br from - purple - 900 / 10 to - blue - 900 / 10">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
              Service <span className="bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent">Pricing</span>;
            </h2>;
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">;
              Detailed pricing for our individual services. Mix and match to create your perfect solution.;
          </div>;
          {service_pricing.map ((category, category_index) => (
            <div key={category.category} className='mb - 16'>;
              <h3 className='text - 3xl font - bold text - white mb - 8 text - center'>;
            <div key={category.category} className='mb-16'>
              <h3 className='text-3xl font-bold text-white mb-8 text-center'>
                {category.category}
              </h3>;
              <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                Pricing;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>;
              Detailed pricing for our individual services. Mix and match to;
              create your perfect solution.            </p>;
          </div>;
          {servicePricing && servicePricing.map((category, categoryIndex) => (      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>;
            </h2>;
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">;
              Detailed pricing for our individual services. Mix and match to create your perfect solution.;
          </div>;
          {servicePricing && servicePricing.map((category, categoryIndex) => (;
            <div key={category && category.category} className='mb-16'>;
              <h3 className='text-3xl font-bold text-white mb-8 text-center'>;
                {category && category.category}
              </h3>;
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
                {category && category.services.map((service, serviceIndex) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{
=======

          </div>;
        </div>;
      </section>;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Service Pricing */}


                    initial={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      opacity: 0,
                      coordinate_x: service_index % 2 === 0 ? -30 : 30,
                    }}
                    whileInView={{ opacity: 1, coordinate_x: 0 }}
                    transition={{ duration: 0.6, delay: service_index * 0.1 }}
                    viewport={{ once: true }}
                    className='group relative';
                  >;
                    <div className='relative p - 6 bg - black / 40 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105'>;
                      <div className='absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300'></div>;
                      <div className='relative z - 10'>;
                        <div className='flex items - start justify - between mb - 4'>;
                          <div className='text - 3xl'>{service.icon}</div>;
                          <div className='text - right'>;
                            <div className='text - xl font - bold text - purple - 400'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                              {service.price}
                            </div>;
                            <div className='text - sm text - purple - 300'>;
                              {service.period}
                    className='group relative'>;
                    <div className='relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105'>;
                      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>;
                      <div className='relative z-10'>;
                        <div className='flex items-start justify-between mb-4'>;
                          <div className='text-3xl'>{service && service.icon}</div>;
                          <div className='text-right'>;
                            <div className='text-xl font-bold text-purple-400'>;
                              {service && service.price}
                            </div>;
                            <div className='text-sm text-purple-300'>;
                              {service && service.period}
                            </div>;
                          </div>;
                        </div>;                        <h4 className='text-xl font-bold text-white mb-2'>;
                          {service && service.name}
                        </h4>;
                        <p className='text-purple-300 mb-4 text-sm'>;
                          {service && service.description}
                        </p>;
                    className="group relative">;
                    <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105">;
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>;

                      <div className="relative z-10">;
                        <div className="flex items-start justify-between mb-4">;
                          <div className="text-3xl">{service && service.icon}</div>;
                          <div className="text-right">;
                            <div className="text-xl font-bold text-purple-400">{service && service.price}</div>;
                            <div className="text-sm text-purple-300">{service && service.period}</div>;
                          </div>;
                        </div>;

                        <h4 className="text-xl font-bold text-white mb-2">{service && service.name}</h4>;
                        <p className="text-purple-300 mb-4 text-sm">{service && service.description}</p>;

                        <div className="flex items-center justify-between">;
                          <Link
                            href={service.link}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
                          >
                            Learn More
                          </Link>
                          <div className="text-right">
                            <div className="text-xs text-purple-300">Trial</div>
                            <div className="text-white font-medium">{service.trialDays} days</div>
                        <div className="flex items-center justify-between">;

                          <Link

=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
      {/* Value Proposition */}
      <section className='py-20 bg-black/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Why Choose{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Our Pricing
              </span>




      {/* Value Proposition */}


==============

==============



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Value Proposition */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              We offer the best value in the market with transparent pricing and
              unmatched features.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We offer the best value in the market with transparent pricing and unmatched features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div

              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                Our Pricing;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>;
                        </p>;
                        <div className='mb - 4'>;
                          <div className='flex items - center space - x-2 mb - 2'>;
                            <Star className='w - 4 h - 4 text - yellow - 400' />;
                            <span className='text - white font - medium'>;
                              {service.rating}
                            </span>;
                            <span className='text - purple - 300 text - sm'>;
                              ({service.reviews} reviews);
                            </span>;
                          </div>;
                          <div className='text - sm text - purple - 300'>;
                            <span className='font - medium'>Setup:</span>{' '}
                            {service.setup_time}
                          </div>;
                        </div>;
                        <div className='flex items - center justify - between'>;
                          <Link;
                            href={service.link}
                            className='px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 text - sm';
                          >;
                            Learn More;
                          </Link>;
                          <div className='text - right'>;
                            <div className='text - xs text - purple - 300'>Trial</div>;
                            <div className='text - white font - medium'>;
                              {service.trial_days} days;
                            </div>                          </div>                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_x: service_index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, coordinate_x: 0 }}
                    transition={{ duration: 0.6, delay: service_index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative";
                  >;
                    <div className="relative p - 6 bg - black / 40 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105">;
                      <div className="absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300"></div>;
                      <div className="relative z - 10">;
                        <div className="flex items - start justify - between mb - 4">;
                          <div className="text - 3xl">{service.icon}</div>;
                          <div className="text - right">;
                            <div className="text - xl font - bold text - purple - 400">{service.price}</div>;
                            <div className="text - sm text - purple - 300">{service.period}</div>;
                          </div>;
                        </div>;
                        <h4 className="text - xl font - bold text - white mb - 2">{service.name}</h4>;
                        <p className="text - purple - 300 mb - 4 text - sm">{service.description}</p>;
                        <div className="mb - 4">;
                          <div className="flex items - center space - x-2 mb - 2">;
                            <Star className="w - 4 h - 4 text - yellow - 400" />;
                            <span className="text - white font - medium">{service.rating}</span>;
                            <span className="text - purple - 300 text - sm">({service.reviews} reviews)</span>;
                          </div>;
                          <div className="text - sm text - purple - 300">;
                            <span className="font - medium">Setup:</span> {service.setup_time}
                          </div>;
                        </div>;
                        <div className="flex items - center justify - between">;
                          <Link;
                            href={service.link}
                            className="px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 text - sm";
                          >;
                            Learn More;
                          </Link>;
                          <div className="text - right">;
                            <div className="text - xs text - purple - 300">Trial</div>;
                            <div className="text - white font - medium">{service.trial_days} days</div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>;
            </div>))}
        </div>;
      </section>;
      {/* Value Proposition */}
      <section className='py - 20 bg - black / 50'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Why Choose{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                Our Pricing;
              </span>;
            </h2>;
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              We offer the best value in the market with transparent pricing and;
              unmatched features.;
            </p>;
          </div>;


              className="text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl"
            >
=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
==============
              className='text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <Target className='w-16 h-16 text-green-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Competitive Pricing
              </h3>
              <p className='text-purple-300 mb-6'>
                Our prices are 30% lower than market average while providing
                superior technology and features.
              </p>
              <div className='text-3xl font-bold text-green-400'>30%</div>
              <div className='text-purple-300'>Lower than Market</div>            </motion.div>            >
              <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Pricing</h3>
              <p className="text-purple-300 mb-6">
                Our prices are 30% lower than market average while providing
                superior technology and features.
              </p>
              <div className="text-3xl font-bold text-green-400">30%</div>
              <div className="text-purple-300">Lower than Market</div>
            </motion.div>
            <motion.div

==============
              className='text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <Shield className='w-16 h-16 text-blue-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                No Hidden Costs
              </h3>
              <p className='text-blue-300 mb-6'>
                Transparent pricing with no surprise fees. What you see is what
                you pay, with clear value for every dollar.
              </p>
              <div className='text-3xl font-bold text-blue-400'>100%</div>
              <div className='text-blue-300'>Transparent Pricing</div>            </motion.div>            >
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">No Hidden Costs</h3>
              <p className="text-blue-300 mb-6">
                Transparent pricing with no surprise fees. What you see is what you pay
                with clear value for every dollar.
              </p>
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-blue-300">Transparent Pricing</div>
            </motion.div>
            <motion.div

==============
              className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <Award className='w-16 h-16 text-pink-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Premium Quality
              </h3>
              <p className='text-pink-300 mb-6'>
                Enterprise-grade technology with premium support and features
                that justify every penny of investment.
              </p>
              <div className='text-3xl font-bold text-pink-400'>5x</div>
              <div className='text-pink-300'>ROI Guarantee</div>            </motion.div>            >
              <Award className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-pink-300 mb-6">
                Enterprise-grade technology with premium support and features
                that justify every penny of investment.
              </p>
              <div className="text-3xl font-bold text-pink-400">5x</div>
              <div className="text-pink-300">ROI Guarantee</div>
            </motion.div>
          </div>
        </div>
      </section>

              className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'>;
              <Award className='w-16 h-16 text-pink-400 mx-auto mb-6' />;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                Premium Quality;
              </h3>;
              <p className='text-pink-300 mb-6'>;
                Enterprise-grade technology with premium support and features;
                that justify every penny of investment.;
              </p>;
              <div className='text-3xl font-bold text-pink-400'>5x</div>;
              <div className='text-pink-300'>ROI Guarantee</div>            </motion && motion.div>            >;
              <Award className="w-16 h-16 text-pink-400 mx-auto mb-6" />;
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>;
              <p className="text-pink-300 mb-6">;
                Enterprise-grade technology with premium support and features ;
                that justify every penny of investment.;
              </p>;
              <div className="text-3xl font-bold text-pink-400">5x</div>;
              <div className="text-pink-300">ROI Guarantee</div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion && motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion&& motion.div

=======




=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}
=======
            className='space-y-8'
=======

          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              Ready to{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Get Started
              </span>
              ?
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Join hundreds of companies already leveraging our futuristic
              services to gain competitive advantages and drive innovation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'
              >
                <span>Start Free Trial</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                href='/contact'
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'
              >
                <span>Schedule Demo</span>
                <Clock className='w-5 h-5' />
              </Link>
            </div>
            <div className='flex items-center justify-center space-x-8 text-purple-300'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>30-Day Free Trial</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>No Credit Card Required</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>Cancel Anytime</span>              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <UltraFuturisticFooter2028 />
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            <motion.div            </h2>;
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">;
              We offer the best value in the market with transparent pricing and unmatched features.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text - center p - 8 bg - gradient - to - br from - purple - 900 / 20 to - blue - 900 / 20 border border - purple - 500 / 30 rounded - 2xl';
            >;
              <Target className='w - 16 h - 16 text - green - 400 mx - auto mb - 6' />;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Competitive Pricing;
              </h3>;
              <p className='text - purple - 300 mb - 6'>;
                Our prices are 30% lower than market average while providing;
                superior technology and features.;
              </p>;
              <div className='text - 3xl font - bold text - green - 400'>30%</div>;
              <div className='text - purple - 300'>Lower than Market</div>            </motion.div>            >;
              <Target className="w - 16 h - 16 text - green - 400 mx - auto mb - 6" />;
              <h3 className="text - 2xl font - bold text - white mb - 4">Competitive Pricing</h3>;
              <p className="text - purple - 300 mb - 6">;
                Our prices are 30% lower than market average while providing;
                superior technology and features.;
              </p>;
              <div className="text - 3xl font - bold text - green - 400">30%</div>;
              <div className="text - purple - 300">Lower than Market</div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text - center p - 8 bg - gradient - to - br from - blue - 900 / 20 to - cyan - 900 / 20 border border - blue - 500 / 30 rounded - 2xl';
            >;
              <Shield className='w - 16 h - 16 text - blue - 400 mx - auto mb - 6' />;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                No Hidden Costs;
              </h3>;
              <p className='text - blue - 300 mb - 6'>;
                Transparent pricing with no surprise fees. What you see is what;
                you pay, with clear value for every dollar.;
              </p>;
              <div className='text - 3xl font - bold text - blue - 400'>100%</div>;
              <div className='text - blue - 300'>Transparent Pricing</div>            </motion.div>            >;
              <Shield className="w - 16 h - 16 text - blue - 400 mx - auto mb - 6" />;
              <h3 className="text - 2xl font - bold text - white mb - 4">No Hidden Costs</h3>;
              <p className="text - blue - 300 mb - 6">;
                Transparent pricing with no surprise fees. What you see is what you pay,
                with clear value for every dollar.;
              </p>;
              <div className="text - 3xl font - bold text - blue - 400">100%</div>;
              <div className="text - blue - 300">Transparent Pricing</div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text - center p - 8 bg - gradient - to - br from - pink - 900 / 20 to - rose - 900 / 20 border border - pink - 500 / 30 rounded - 2xl';
            >;
              <Award className='w - 16 h - 16 text - pink - 400 mx - auto mb - 6' />;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Premium Quality;
              </h3>;
              <p className='text - pink - 300 mb - 6'>;
                Enterprise - grade technology with premium support and features;
                that justify every penny of investment.;
              </p>;
              <div className='text - 3xl font - bold text - pink - 400'>5x</div>;
              <div className='text - pink - 300'>ROI Guarantee</div>            </motion.div>            >;
              <Award className="w - 16 h - 16 text - pink - 400 mx - auto mb - 6" />;
              <h3 className="text - 2xl font - bold text - white mb - 4">Premium Quality</h3>;
              <p className="text - pink - 300 mb - 6">;
                Enterprise - grade technology with premium support and features;
                that justify every penny of investment.;
              </p>;
              <div className="text - 3xl font - bold text - pink - 400">5x</div>;
              <div className="text - pink - 300">ROI Guarantee</div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - purple - 900 / 30 to - blue - 900 / 30'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div      <section className="py - 20 bg - gradient - to - r from - purple - 900 / 30 to - blue - 900 / 30">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Get Started;
              </span>;
              ?;
            </h2>;
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Start Free Trial</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2&quot;
              >
                <span>Schedule Demo</span>
                <Clock className=&quot;w-5 h-5&quot; />
              </a>
            </div>

            <div className=&quot;flex items-center justify-center space-x-8 text-purple-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>30-Day Free Trial</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>No Credit Card Required</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />

            className='space-y-8'

          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Get Started
              </span>
              ?
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Join hundreds of companies already leveraging our futuristic
              services to gain competitive advantages and drive innovation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'
              >
                <span>Start Free Trial</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                href='/contact'
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'
              >
                <span>Schedule Demo</span>
                <Clock className='w-5 h-5' />
              </Link>
            </div>
            <div className='flex items-center justify-center space-x-8 text-purple-300'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>30-Day Free Trial</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>No Credit Card Required</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>Cancel Anytime</span>              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
=======


=======
  );
=======
  );
    </>;
);}
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
              Join hundreds of companies already leveraging our futuristic;
              services to gain competitive advantages and drive innovation.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - xl hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - 2xl hover:shadow - purple - 500 / 25 flex items - center space - x-2';
              >;
                <span > Start Free Trial</span>;
                <ArrowRight className='w - 5 h - 5' />;
              </Link>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 border border - purple - 500 / 30 text - purple - 300 rounded - xl hover:bg - purple - 900 / 30 transition - all duration - 300 flex items - center space - x-2';
              >;
                <span > Schedule Demo</span>;
                <Clock className='w - 5 h - 5' />;
              </Link>;
            </div>;
            <div className='flex items - center justify - center space - x-8 text - purple - 300'>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />                <span > 30 - Day Free Trial</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                <span > No Credit Card Required</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />                <span > Cancel Anytime</span>              <div className="flex items - center space - x-2">;
                <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                <span > Cancel Anytime</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <UltraFuturisticFooter2028 />;
    </>);
=======
  );

=======
  );
=======

  );

=======
    </>
  );

}
}
    </>
  );
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
