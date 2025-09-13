import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services';

import React from 'react',;
import Layout from '../components/layout/Layout',;
import Layout from '../components/layout/Layout',;
import SEO from '../components/SEO',;
import SEO from '../components/SEO',;
import { motion } from 'framer-motion',;
import { 

import React from 'react',
import Layout from '../components / layout / Layout',
import Layout from '../components / layout / Layout',
import SEO from '../components / SEO',
import SEO from '../components / SEO',
import React from 'react',;
import Layout from '../components/layout/Layout',;
import Layout from '../components/layout/Layout',;
import SEO from '../components/SEO',;
import SEO from '../components/SEO',;
import { motion } from 'framer-motion',;
import { 
import React from 'react',
import Layout from '../components/layout/Layout',
import Layout from '../components/layout/Layout',
import SEO from '../components/SEO',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import {



import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services',;

const Solutions: NextPage = () => {
  const industrySolutions = [
    {
      id: 'healthcare',
      name: 'Healthcare Solutions',
      description: 'AI-powered healthcare technology solutions',
      features: ['Patient Care Optimization', 'Diagnostic AI', 'Healthcare Analytics', 'Compliance Management'],
      price: '$3,999',
      period: 'month',
      popular: true,
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: 'financial',
      name: 'Financial Solutions',
      description: 'Advanced financial technology and services',
      features: ['Risk Management', 'Fraud Detection', 'Trading Systems', 'Compliance Automation'],
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Solutions',
      description: 'Smart manufacturing and Industry 4.0',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'IoT Integration'],
      price: '$2,799',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'retail',
      name: 'Retail Solutions',
      description: 'Digital transformation for retail businesses',
      features: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Omnichannel Solutions'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      id: 'government',
      name: 'Government Solutions',
      description: 'Technology solutions for public sector',
      features: ['Digital Services', 'Security & Compliance', 'Data Management', 'Citizen Engagement'],
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 'education',
      name: 'Education Solutions',
      description: 'Innovative educational technology',
      features: ['Learning Platforms', 'Student Analytics', 'Administrative Systems', 'Virtual Classrooms'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <BookOpenCheck className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: 'Solutions Deployed', value: '500+', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '99.9%', icon: <Star className="w-6 h-6" /> },
    { label: 'Global Reach', value: '50+ Countries', icon: <Globe className="w-6 h-6" /> },
    { label: 'Users Experts', value: '100+', icon: <Users className="w-6 h-6" /> }
  ];





  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Solutions - Zion Tech Group | Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Discover Zion Tech Group's comprehensive solutions portfolio including Micro SaaS platforms, AI-powered tools, Business Intelligence, Process Automation, and Cloud platforms." />
        </Head>


            

            
      icon: <Heart className="w-8 h-8" />
      icon: <TrendingUp className="w-8 h-8" />
      icon: <Settings className="w-8 h-8" />
      icon: <ShoppingCart className="w-8 h-8" />
      icon: <Building className="w-8 h-8" />
      icon: <BookOpenCheck className="w-8 h-8" />
      icon: <Briefcase className="w-6 h-6" />
      icon: <Code className="w-6 h-6" />
      icon: <Network className="w-6 h-6" />
      icon: <Brain className="w-6 h-6" />
      icon: <Shield className="w-6 h-6" />
      icon: <BarChart3 className="w-6 h-6" />


                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-orange-500/20 rounded-full mb-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="text-3xl font-bold text-orange-400 mb-2">


                      <span className="text-lg text-gray-400">/{solution.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 




                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Ready for Industry Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to build industry-specific solutions that drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">






                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
};

export default Solutions;
    </UltraAdvancedFuturisticBackground>);
export default Solutions,


