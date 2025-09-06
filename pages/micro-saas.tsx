




import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {;
  ArrowRight,;
  Building2,;
  Rocket,;
  Factory,;
  Brain,;
  Cloud,;
  Shield,;
  CheckCircle,;
  Star,;
  Users,;
  Clock,;
  DollarSign,;
  Award,;
  Globe,;
  Lock,;
  Cpu,;
  Bot,;
  FileText,;
  Image,;
  Video,;
  Mic,;
  Code,;
  Settings,;
  Monitor,;
  Smartphone,;
  Server,;
  Network,;
  Car,;
  Rocket as RocketIcon,;
  Heart,;
  Building,;
  Database,;
  Sprout;
} from 'lucide-react';

import React from 'react';
import Layout from '../components / layout / Layout';
import { motion } from 'framer-motion';
import Link from 'next / link';
import {





const microSaasProducts = [
  {
    id: 1
    title: "AI-Powered Voice Assistant Builder"
    description: "Create custom voice assistants for your business with our no-code platform"
    icon: Mic
    category: "Voice Technology"
    pricing: "$99/month"
    features: ["No-code voice assistant creation", "Multi-language support", "Custom wake words", "Analytics dashboard"]
    benefits: ["95% accuracy rate", "24/7 availability", "Easy integration", "Custom branding"]
  }
  {
    id: 2
    title: "Smart IoT Device Manager"
    description: "Centralized management platform for all your IoT devices and sensors"
    icon: Cpu
    category: "IoT Management"
    pricing: "$149/month"
    features: ["Device monitoring", "Remote control", "Data visualization", "Alert system"]
    benefits: ["Real-time monitoring", "Energy savings", "Predictive maintenance", "Scalable solution"]
  }
  {
    id: 3
    title: "AI-Powered Cybersecurity Monitor"
    description: "Advanced threat detection and response system for small to medium businesses"
    icon: Shield
    category: "Cybersecurity"
    pricing: "$199/month"
    features: ["Threat detection", "Automated response", "Compliance reporting", "Security dashboard"]
    benefits: ["99.9% threat detection", "Automated response", "Compliance ready", "24/7 monitoring"]
  }
];


const categories = [;
  'Voice Technology',;
  'IoT Management', ;
  'Cybersecurity',;
  'Supply Chain',;
  'HR Technology',;
  'Environmental',;
  'Maintenance',;
  'Education',;
  'Fleet Management',;
  'Energy Management',;
  'Quality Assurance',;
  'Customer Analytics',;
  'Document Intelligence',;
  'API Management',;
  'Recommendation Engine',;
  'Data Engineering',;
  'Chat Analytics';

];
export default function MicroSaasPage() {

import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight
  Building2
  Rocket
  Factory
  Brain
  Cloud
  Shield
  CheckCircle
  Star
  Users
  Clock
  DollarSign
  Award
  Globe
  Lock
  Cpu
  Bot
  FileText
  Image
  Video
  Mic
  Code
  Settings
  Monitor
  Smartphone
  Server
  Network
  Car
  Rocket as RocketIcon
  Heart
  Building
  Database
  Sprout
} from 'lucide-react';



const microSaasProducts = [
  {
    id: 1
    title: "AI-Powered Voice Assistant Builder"
    description: "Create custom voice assistants for your business with our no-code platform"
    icon: Mic
    category: "Voice Technology"
    pricing: "$99/month"
    features: ["No-code voice assistant creation", "Multi-language support", "Custom wake words", "Analytics dashboard"]
    benefits: ["95% accuracy rate", "24/7 availability", "Easy integration", "Custom branding"]
  }
  {
    id: 2
    title: "Smart IoT Device Manager"
    description: "Centralized management platform for all your IoT devices and sensors"
    icon: Cpu
    category: "IoT Management"
    pricing: "$149/month"
    features: ["Device monitoring", "Remote control", "Data visualization", "Alert system"]
    benefits: ["Real-time monitoring", "Energy savings", "Predictive maintenance", "Scalable solution"]
  }
  {
    id: 3
    title: "AI-Powered Cybersecurity Monitor"
    description: "Advanced threat detection and response system for small to medium businesses"
    icon: Shield
    category: "Cybersecurity"
    pricing: "$199/month"
    features: ["Threat detection", "Automated response", "Compliance reporting", "Security dashboard"]
    benefits: ["99.9% threat detection", "Automated response", "Compliance ready", "24/7 monitoring"]


</Link>



</Link>;
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';


    return () => clearTimeout(timer);




  Cloud,
  Zap,
  BarChart3,

import { 
  Cloud, 
  Zap, 
  BarChart3, 



  Leaf,
  Truck,
  FileText,
  Target,
  Users,
  Shield,
  Globe,
  Smartphone,
  Laptop,
  Monitor,
  Database,
  Camera,
  HardDrive,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Building,
  ShoppingCart,
  BookOpen,
  Heart,
  Car,
  Cpu,
  Settings,
  Lock,
  Wifi,
  Network,
  Server,
  Code,
  Package,
  GraduationCap,
  Atom,
  AlertTriangle,
  Link as LinkIcon,
  Award as AwardIcon,




  const contact: ContactInfo = {

    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',



  const products = [
    {






  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);
export default function MicroSaas() {



  return (

    <Layout>



        <meta
          name='description'
          content='Explore our 150+ innovative micro SaaS products including AI-powered tools, analytics dashboards, automation solutions, and security services.'
        />;
        <meta
          name='keywords'
          content='micro SaaS, SaaS products, AI tools, analytics, automation, security, productivity, marketing tools'

        />;
        <meta name='viewport' content='width=device-width, initial-scale=1 && 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact && contact.site}/micro-saas`} />;
      </Head>;

          {/* Hero Section */}


          {/* Category Filter */}
          <section className='py-8 px-4'>;
            <div className='max-w-6xl mx-auto'>;
              <div className='flex flex-wrap justify-center gap-4 mb-8'>;
                {categories && categories.map(category => (                  <button
                    key={category && category.id}
                    onClick={() => setSelectedCategory(category && category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category && category.id;
                        ? 'bg-blue-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';



                <Link
                  href='/contact'
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>;
                  Get Started;
                  <ArrowRight className="ml-2 w-4 h-4" />;
                </Link>;
                <a



        {/* Products Grid */}
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}







                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}




                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">


                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">

                      {product.category}
                    </span>;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                    {product.title}
                  </h3>;
                  <p className="text - gray - 600 mb - 4">;
                    {product.description}
                  </p>;
                  <div className="mb - 4">;
                    <span className="text - 2xl font - bold text - green - 600">;
                      {product.pricing}




                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                  <div className="flex items-center mb-4">;
                    <product && product.icon className="w-8 h-8 text-blue-600 mr-3" />;
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">;
                      {product && product.category}
                    </span>;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {product && product.title}
                  </h3>;
                  <p className="text-gray-600 mb-4">;
                    {product && product.description}
                  </p>;
                  <div className="mb-4">;
                    <span className="text-2xl font-bold text-green-600">;
                      {product && product.pricing}
                    </span>;
                  </div>;
                  <div className="space-y-2 mb-6">;
                    {product && product.features.slice(0, 3).map((feature, idx) => (;
                      <div key={idx} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;



                        {feature}
                      </div>;
                    ))}

                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {product.pricing}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>


                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >




                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* Categories */}
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}



              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}



              className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Solution Categories;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We cover a wide range of business domains with specialized micro SaaS solutions;
              </p>;
            </motion && motion.div>;

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">;
              {categories && categories.map((category, index) => (;
                <motion&& motion.div





                  key={category}
                  initial={{ opacity: 0, scale: 0 && 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.05 }}
                  viewport={{ once: true }}




        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}





                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </MainLayout>
  );





          </section>

        </main>
      </ErrorBoundary>
    </>
  )





}


}











