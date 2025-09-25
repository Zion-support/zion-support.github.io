import { motion } from "framer-motion"
import {;
  Award,;
  Brain,;
  CheckCircle,;
  Clock,;
  Cloud,;
  ExternalLink,;
  Mail,;
  MapPin,;
  Phone,;
  Rocket,;
  Search,;
  Server,;
  Shield,;
  Sparkles,;
  TrendingUp;
} from "lucide-react"
import React, { useState } from "react"
import { ADVANCED_AI_SERVICES_2028 } from "../data/advancedAIServices2028"
import { COMPREHENSIVE_IT_INFRASTRUCTURE_2028 } from "../data/comprehensiveITInfrastructure2028"
import { comprehensivePricingGuide2028 } from "../data/comprehensivePricingGuide2028"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from "../data/innovativeMicroSaasServices2028"
const ComprehensiveServicesLanding2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai'),;
  const [searchTerm, setSearchTerm] = useState(''),;

  const serviceCategories = [;
    {;
      id: 'ai',name: 'AI & Machine Learning',description: 'Revolutionary AI solutions that transform business operations',icon: Brain,services: ADVANCED_AI_SERVICES_2028,color: 'from-blue-600 to-purple-600',bgColor: 'bg-blue-500/10',borderColor: 'border-blue-500/30'
    };
    {;
      id: 'infrastructure',name: 'IT Infrastructure',description: 'Next-generation infrastructure solutions for modern businesses',icon: Server,services: COMPREHENSIVE_IT_INFRASTRUCTURE_2028,color: 'from-green-600 to-emerald-600',bgColor: 'bg-green-500/10',borderColor: 'border-green-500/30'
    };
    {;
      id: 'saas',name: 'Micro SAAS',description: 'Innovative micro SAAS solutions for every business need',icon: Cloud,services: INNOVATIVE_MICRO_SAAS_SERVICES_2028,color: 'from-purple-600 to-pink-600',bgColor: 'bg-purple-500/10',borderColor: 'border-purple-500/30'
    };
  ];
  const activeServices = serviceCategories.find(cat => cat.id === activeTab)?.services || []
  const filteredServices = activeServices.filter(service =>;
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
    service.category.toLowerCase().includes(searchTerm.toLowerCase());
  ),;

  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1,transition: {;
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 };
    visible: {;
      y: 0,opacity: 1,transition: {;
        duration: 0.5;
      };
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">;
              <[^>]*/>
              Comprehensive Services 2028;
            </[^>]*>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                Transform Your Business;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">With Cutting-Edge Technology</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Discover our comprehensive suite of AI, IT infrastructure, and micro SAAS solutions designed to revolutionize ;
              your business operations and drive unprecedented growth in 2028 and beyond.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now: +1 302 464 0950;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Free Consultation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information Banner */};
      <section className="bg-white/10 backdrop-blur-sm py-6 px-4">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
            <div className="flex items-center justify-center space-x-2 text-white">;
              <[^>]*/>
              <span>+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex items-center justify-center space-x-2 text-white">;
              <[^>]*/>
              <span>kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex items-center justify-center space-x-2 text-white">;
              <[^>]*/>
              <span>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Categories Tabs */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Comprehensive Service Categories;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Explore our diverse range of innovative solutions across multiple domains and industries;
            </[^>]*>
          </[^>]*>

          <div className="flex flex-wrap justify-center gap-4 mb-12">;
            {serviceCategories.map((category) => (;
              <button;
                key={category.id};
                onClick={() => setActiveTab(category.id)};
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 ${;
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`};
              >;
                {React.createElement(category.icon, { className: "w-5 h-5" })};
                <span className="font-medium">{category.name}</[^>]*>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">;
                  {category.services.length};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* Search Bar */};
          <div className="max-w-md mx-auto mb-8">;
            <div className="relative">;
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
              <[^>]*/>
            </[^>]*>
          </[^>]*>

          {/* Services Grid */};
          <motion.div
            variants={containerVariants};
            initial="hidden"
            animate="visible"
            className="[^"]*"
          >;
            {filteredServices.map((service, index) => (;
              <motion.div
                key={service.id};
                variants={itemVariants};
                className="[^"]*"
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</[^>]*>
                    <p className="text-gray-400 text-sm mb-3">{service.category} • {service.subcategory}</[^>]*>
                  </[^>]*>
                  <div className="text-right">;
                    <div className="text-2xl font-bold text-green-400">{service.currency}{service.price.toLocaleString()}</[^>]*>
                    <div className="text-sm text-gray-400">per month</[^>]*>
                  </[^>]*>
                </[^>]*>

                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</[^>]*>

                <div className="space-y-3 mb-6">;
                  <div className="flex items-center text-sm text-gray-400">;
                    <[^>]*/>
                    <span>ROI: {service.roi}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center text-sm text-gray-400">;
                    <[^>]*/>
                    <span>Delivery: {service.estimatedDelivery}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center text-sm text-gray-400">;
                    <[^>]*/>
                    <span>Market: {service.marketPrice}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.tags.slice(0, 3).map((tag) => (;
                    <span;
                      key={tag};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>

                <div className="flex space-x-2">;
                  <a;
                    href={`tel:+13024640950`};
                    className="[^"]*"
                  >;
                    Get Started;
                  </[^>]*>
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Market Analysis Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Market Analysis & Competitive Intelligence;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Stay ahead of the competition with our comprehensive market insights and competitive analysis;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {comprehensivePricingGuide2028.map((item, index) => (;
              <motion.div
                key={item.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.2 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</[^>]*>
                ;
                <div className="space-y-4 mb-6">;
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-400">Market Size:</[^>]*>
                    <span className="text-white font-medium">{item.marketInfo.marketSize}</[^>]*>
                  </[^>]*>
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-400">Growth Rate:</[^>]*>
                    <span className="text-white font-medium">{item.marketInfo.growthRate}</[^>]*>
                  </[^>]*>
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-400">Average Price:</[^>]*>
                    <span className="text-white font-medium">{item.marketInfo.averageMarketPrice}</[^>]*>
                  </[^>]*>
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-400">ROI:</[^>]*>
                    <span className="text-white font-medium">{item.marketInfo.roi}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Top Competitors:</[^>]*>
                  <div className="flex flex-wrap gap-2">;
                    {item.marketInfo.competitors.slice(0, 3).map((competitor) => (;
                      <span;
                        key={competitor};
                        className="[^"]*"
                      >;
                        {competitor};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=Detailed pricing for ${item.title}`};
                  className="[^"]*"
                >;
                  Get Detailed Pricing;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Why Choose Us Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Why Choose Zion Tech Group?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We deliver cutting-edge technology solutions with unmatched expertise and proven results;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {[;
              {;
                icon: Award,title: "Industry Expertise",description: "20+ years of experience in cutting-edge technology solutions",color: "from-blue-600 to-purple-600"
              };
              {;
                icon: Rocket,title: "Fast Implementation",description: "Get up and running in weeks, not months with our proven methodology",;
                color: "from-purple-600 to-pink-600"
              };
              {;
                icon: TrendingUp,title: "Proven ROI",description: "See measurable results within 90 days with our data-driven approach",color: "from-pink-600 to-red-600"
              };
              {;
                icon: Shield,title: "Enterprise Security",description: "Bank-grade security and compliance for your peace of mind",color: "from-red-600 to-orange-600"
              };
            ].map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>;
                  {React.createElement(feature.icon, { className: "w-10 h-10 text-white" })};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-400">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Call to Action Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join the future of technology with our innovative services. Get started today and experience the power of AI;
              advanced infrastructure, and cutting-edge micro SAAS solutions.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now: +1 302 464 0950;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Schedule Free Consultation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Footer Contact Information */};
      <footer className="bg-white/5 backdrop-blur-sm py-12 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</[^>]*>
              <div className="space-y-2 text-gray-300">;
                <p>+1 302 464 0950</[^>]*>
                <p>kleber@ziontechgroup.com</[^>]*>
                <p>364 E Main St STE 1008</[^>]*>
                <p>Middletown DE 19709</[^>]*>
              </[^>]*>
            </[^>]*>
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</[^>]*>
              <div className="space-y-2">;
                <a href="https://[^;]*
                  Main Website;
                </[^>]*>
                <a href="mailto:kleber@ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">;
                  Get Quote;
                </[^>]*>
                <a href="tel:+13024640950" className="block text-gray-300 hover:text-white transition-colors">;
                  Call Support;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Services</[^>]*>
              <div className="space-y-2">;
                <span className="block text-gray-300">AI Services</[^>]*>
                <span className="block text-gray-300">IT Infrastructure</[^>]*>
                <span className="block text-gray-300">Micro SAAS</[^>]*>
                <span className="block text-gray-300">Consulting</[^>]*>
              </[^>]*>
            </[^>]*>
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</[^>]*>
              <div className="flex space-x-4">;
                <a;
                  href="https://ziontechgroup.com"
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          <div className="border-t border-white/10 mt-8 pt-8 text-center">;
            <p className="text-gray-400">;
              © 2028 Zion Tech Group. All rights reserved. Transforming businesses through innovative technology solutions.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ComprehensiveServicesLanding2028;