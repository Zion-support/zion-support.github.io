import React, { useState } from 'react';
import SEO from './seo/Seo';
import { motion } from 'framer-motion';
import {
  // TODO: Implement
}
  Brain, Building, Circle, Monitor, Shield, 
  Check, Phone, Mail, MapPin,
  TrendingUp, Zap, Globe;
} from 'lucide-react';
// Import our new service data;
import { advancedAIServices2025 } from '../data/2025-advanced-ai-services';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
import { advancedITServices2025 } from '../data/2025-advanced-it-services';
const ComprehensiveServicesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');
  // Helper function to get service pricing;
  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (typeof service.price === 'string') return service.price;
    return 'Contact for pricing';
  };

  // Helper function to get service features;
  const getServiceFeatures = (service: any) => {
    return service.keyFeatures || service.features || [];

  // Helper function to get service setup time;
  const getServiceSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime;
    if (service.pricing?.setupTime) return service.pricing.setupTime;
    if (service.price?.setupTime) return service.price.setupTime;
    return 'N/A';

  // Helper function to get service trial days;
  const getServiceTrialDays = (service: any) => {
    if (service.trialDays) return service.trialDays;
    if (service.pricing?.trialDays) return service.pricing.trialDays;
    if (service.price?.trialDays) return service.price.trialDays;

  // All services combined;
  const allServices = [
    ...advancedAIServices2025,
    ...advancedCybersecurityServices2025,
    ...advancedITServices2025;]
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Circle className="w-5 h-5" /> },"
"
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <TrendingUp className="w-5 h-5" /> },"
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-5 h-5" /> },"
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Building className="w-5 h-5" /> },"
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },"
    { id: 'ai-services', name: 'AI Services', icon: <Monitor className="w-5 h-5" /> }"
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">"
</div>
      <SEO;"
        title="2025 Comprehensive Services Showcase - Zion Tech Group"""
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions.""]"
        keywords={["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"]}"
      />
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">"
</section>"
        <div className="absolute inset-0 bg-black/20"></div>""
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">"
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center""
          >
</motion>"
            <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>
            </h1>"
            <p className="text-xl md:text-2xl mb-8 text-blue-100">"
</p>
            </p>"
            <div className="flex flex-wrap justify-center gap-4 text-sm">"
</div>"
              <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">"
</span>
              </span>"
              <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">"
              <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">"
          </motion.div>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">"
            <div className="text-center md:text-left">"
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>""
              <p className="text-blue-100">Get in touch with our experts today</p>"
            <div className="flex flex-col sm:flex-row items-center gap-4">"
              <div className="flex items-center gap-2">"
                <Phone className="w-4 h-4" />"

                <span>+1 302 464 0950</span>
                <Mail className="w-4 h-4" />"

                <span>kleber@ziontechgroup.com</span>
                <MapPin className="w-4 h-4" />"

                <span>Middletown DE 19709</span>
      <section className="py-12 bg-white">"
          <div className="flex flex-wrap justify-center gap-2">"
              <button;
                key={category.id}
                onClick={() => setActiveTab(category.id)}
</button>
      <section className="py-16 bg-gray-50">"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
                key={service.id}
                transition={{ duration: 0.5, delay: index * 0.1 }}"
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100""
                <div className="p-6 border-b border-gray-100">"
                  <div className="flex items-start justify-between mb-4">"
                    <div className="flex-1">"
                      <h3 className="text-xl font-bold text-gray-900 mb-2">"
</h3>
                      </h3>"
                      <p className="text-gray-600 text-sm mb-3">"
                      <div className="flex items-center gap-2 text-sm text-gray-500">"
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">"
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">"
                <div className="p-6">"
                  <p className="text-gray-700 mb-4 line-clamp-3">"
                  <div className="mb-4">"
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4>""
                    <div className="space-y-1">"
                      <div className="flex justify-between text-sm">"
                        <span className="text-gray-600">Starting at:</span>""
                        <span className="font-semibold text-green-600">"
                      <div className="text-xs text-gray-500">"
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>""
                    <div className="grid grid-cols-2 gap-1">"
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">"
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />"
                          <span className="truncate">{feature}</span>"
                  <div className="mb-4 text-sm">"
                    <div className="flex justify-between mb-1">"
                      <span className="text-gray-600">Market Size:</span>""
                      <span className="font-semibold text-gray-900">{service.marketSize}</span>"
                    <div className="flex justify-between">"
                      <span className="text-gray-600">Target Audience:</span>""
                      <span className="font-semibold text-gray-900">{service.targetAudience}</span>"
                  <div className="flex flex-col gap-2">"
                    <a;"`;
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2""
</a>"

                    </a>
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}`;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2""

            ))}
          <AnimatePresence mode="wait">"

          {/* Services Display */}"
</motion>
              <motion.div;"`;
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup && ziontechgroup.com'}?subject=Inquiry about ${service && service.name}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;"
                      <Mail className="w-4 h-4" />;"

                    </a>;
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;"
                      <Phone className="w-4 h-4" />;"

                  </div>;
              </motion && motion.div>;
          </div>;"
          <AnimatePresence mode="wait">;"

              <motion&& motion.div;
              <motion.div;"
                key="grid""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8""
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100""
</motion>`;
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                      <div className="flex items-center justify-between mb-4">"
                        <span className="text-4xl">{service.icon}</span>""
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">"
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>""
                      <p className="text-blue-100 text-sm">{service.tagline}</p>""
                      <div className="mt-4">"
                        <span className="text-2xl font-bold">"
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>""
                        <span className="text-3xl font-bold text-gray-900">"
                        <span className="text-gray-500">"
                      <div className="mb-6">"
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>""
                        <ul className="space-y-1">"
</ul>"
                            <li key={idx} className="flex items-center text-sm text-gray-600">"
</li>"
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"

                            </li>
                        </ul>
</div>`;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          <span className="ml-1">{service.category}</span>"
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">"
                        <div>
                          <span className="font-medium">Setup:</span> {getServiceSetupTime(service)}"
                          <span className="font-medium">Trial:</span> {getServiceTrialDays(service)} days;"
                        <div className="text-sm">"
                          <span className="text-gray-500">Expected ROI:</span>""
                          <span className="text-green-600 font-semibold ml-1">"
                          <div className="flex items-center gap-1 text-yellow-600">"
                            <Star className="w-4 h-4 fill-current" />"
                            <span className="text-sm font-medium">Popular</span>"
                        <div className="lg:w-1/3">"
                          <div className="text-right mb-4">"
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>""
                            <ul className="space-y-1 text-sm text-gray-600">"
                                <li key={idx} className="flex items-center">"


                        <div>;
                      <div className="flex items-center justify-between mb-4">;"
                        <div className="text-sm">;"
                          <span className="text-gray-500">Expected ROI:</span>;""
                          <span className="text-green-600 font-semibold ml-1">;"
                          </span>;
                          <div className="flex items-center gap-1 text-yellow-600">;"
                            <Star className="w-4 h-4 fill-current" />;"
                            <span className="text-sm font-medium">Popular</span>;"
                        <div className="lg:w-1/3">;"
                          <div className="text-right mb-4">;"
                            <span className="text-3xl font-bold text-gray-900">;"
                            </span>;"
                            <span className="text-gray-500">;"
                          <div className="mb-4">;"
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>;""
                            <ul className="space-y-1 text-sm text-gray-600">;"
                                <li key={idx} className="flex items-center">;"
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;"

                          <div className="flex flex-col items-end space-y-3">"
                            
                            <a;
                              href={service.link}"
                              target="_blank"""
                              rel="noopener noreferrer"""
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center""
                              <ArrowRight className="w-4 h-4 ml-2" />"

            )}
            <div className="text-center py-12">"
              <div className="text-gray-400 mb-4">"
                <Search className="w-16 h-16 mx-auto" />"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>""
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>"
      </section>

                            </ul>;
                          <div className="flex flex-col items-end space-y-3">;"
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                              <span className="ml-1">{service && service.category}</span>;"
                              href={service && service.link}"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">;"
                              <ArrowRight className="w-4 h-4 ml-2" />;"

                            <span className="text - gray - 500">;"
                          <div className="mb - 4">;"
                            <h4 className="font - semibold text - gray - 900 mb - 2">Features:</h4>;""
                            <ul className="space - y-1 text - sm text - gray - 600">;"
                                <li key={idx} className="flex items - center">;"
                                  <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;"

                                </li>))}
                          <div className="flex flex - col items - end space - y-3">;"
                            <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                              <span className="ml - 1">{service.category}</span>;"
                              target="_blank";""
                              rel="noopener noreferrer";""
                              className="bg - blue - 600 text - white py - 2 px - 4 rounded - lg hover:bg - blue - 700 transition - colors text - sm font - medium flex items - center";"
                            >;
                              <ArrowRight className="w - 4 h - 4 ml - 2" />;"

            <div className="text-center py-12">;"
              <div className="text-gray-400 mb-4">;"
                <Search className="w-16 h-16 mx-auto" />;"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;""
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>;"


      <section className="py-20 bg-white">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}"
              className="text-center p-6""
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <Brain className="w-8 h-8 text-blue-600" />"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>""
              <p className="text-gray-600">"

              transition={{ duration: 0.5, delay: 0.1 }}"
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <Shield className="w-8 h-8 text-green-600" />"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>""

              transition={{ duration: 0.5, delay: 0.2 }}"
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <Globe className="w-8 h-8 text-purple-600" />"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>""
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">"
            <div className="text-center">"
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />"
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>""
              <p className="text-blue-100">+1 302 464 0950</p>"
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />"
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>""
              <p className="text-blue-100">kleber@ziontechgroup.com</p>"
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />"
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>""
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
      <section className="py-20 bg-white">;"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;"
            </h2>;"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
            </p>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
              transition={ duration: 0 && 0.5 }"
              className="text-center p-6">;"
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Brain className="w-8 h-8 text-blue-600" />;"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>;""
              <p className="text-gray-600">;"

              transition={{ duration: 0 && 0.5, delay: 0 && 0.1 }}"
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Shield className="w-8 h-8 text-green-600" />;"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>;""

              transition={{ duration: 0 && 0.5, delay: 0 && 0.2 }}"
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Globe className="w-8 h-8 text-purple-600" />;"

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>;""
      </section>;"
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">;"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;"
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;"
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;"
          </p>;"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">;"
            <div className="text-center">;"
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>;""
              <p className="text-blue-100">+1 302 464 0950</p>;"
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>;""
              <p className="text-blue-100">kleber@ziontechgroup && ziontechgroup.com</p>;"
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;""
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>;"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
            <a;"
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"""
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2""
              <Mail className="w-5 h-5" />"

              href="https://ziontechgroup.com"""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2""
              <Globe className="w-5 h-5" />"

      </section>;
    </div>);"

    </div>"`;