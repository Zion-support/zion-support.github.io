import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {,
  Brain;
  Zap;
  Rocket;
  Shield;
  Cpu;
  Eye;
  Star;
  TrendingUp;
  Users;
  Award;
  Clock;
  CheckCircle;
  ArrowRight;
  Sparkles,
} from 'lucide-react';
import { ADVANCED_AI_SERVICES_2026 } from '@/data/advancedAIServices2026';
const UltimateServicesShowcase2026: React.FC = () => {,
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const categories = [,
    { id: 'all', name: 'All Services', icon: Sparkles ,};
    { id: 'AI Consciousness', name: 'AI Consciousness', icon: Brain ,};
    { id: 'Quantum AI', name: 'Quantum AI', icon: Zap ,};
    { id: 'Neural Interface', name: 'Neural Interface', icon: Eye ,};
    { id: 'Autonomous AI', name: 'Autonomous AI', icon: Rocket ,};
    { id: 'Holographic AI', name: 'Holographic AI', icon: Cpu ,};
    { id: 'Predictive AI', name: 'Predictive AI', icon: TrendingUp ,}
  ];
  const filteredServices = selectedCategory === 'all',
    ? ADVANCED_AI_SERVICES_2026,
    : ADVANCED_AI_SERVICES_2026.filter(service => service.category === selectedCategory);
  const getCategoryIcon = (category: string) => {,
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || Sparkles,
  };
  const getCategoryColor = (category: string) => {,
    const colors: { [key: string]: string ,} = {,
      'AI Consciousness': 'from-purple-600 to-pink-600Quantum AI': 'from-cyan-600 to-blue-600Neural Interface': 'from-green-600 to-teal-600Autonomous AI': 'from-orange-600 to-red-600Holographic AI': 'from-indigo-600 to-purple-600Predictive AI': 'from-emerald-600 to-green-600',
    };
    return colors[category] || 'from-gray-600 to-gray-700';
  return (,
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">,
      <div className="container mx-auto px-4">,
        {/* Header */}
        <div className="text-center mb-12">,
          <motion.div,
            initial={{ opacity: 0, y: 20 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.6 ,}}
          >,
            <h2 className="text-4xl lg: text-5xl font-bold text-gray-900 mb-6">,
              Revolutionary AI Services 2026,
            </h2>,
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">,
              Discover the most advanced AI solutions that are transforming industries and reshaping the future of technology.,
            </p>,
          </motion.div>,
          {/* Category Filter */,}
          <div className="flex flex-wrap justify-center gap-4 mb-8">,
            {categories.map((category) => {,
              const IconComponent = category.icon;
              return (,
                <button,
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${,
                    selectedCategory === category.id,
                      ? 'bg-blue-600 text-white shadow-lg',
                      : 'bg-white text-gray-700 hover: bg-blue-50 border border-gray-200',}`}
                >,
                  <IconComponent className="w-5 h-5" />,
                  <span>{category.name}</span>,
                </button>,
              );
            })}
          </div>,
        </div>,
        {/* Services Grid */}
        <motion.div,
          layout,
          className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8",
        >,
          {filteredServices.map((service, index) => {,
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            return (,
              <motion.div,
                key={service.id}
                layout,
                initial={{ opacity: 0, y: 20 ,}}
                animate={{ opacity: 1, y: 0 ,}}
                transition={{ duration: 0.5, delay: index * 0.1 ,}}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative",
              >,
                <div className="bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">,
                  {/* Service Image */,}
                  <div className={`h-48 bg-gradient-to-br ${categoryColor} relative overflow-hidden`}>,
                    <div className="absolute inset-0 bg-black/20"></div>,
                    <div className="absolute top-4 left-4 flex items-center space-x-2">,
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">,
                        <CategoryIcon className="w-6 h-6 text-white" />,
                      </div>,
                      {service.isNew && (,
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">,
                          NEW,
                        </span>,
                      )}
                    </div>,
                    <div className="absolute bottom-4 left-4 right-4">,
                      <div className="flex items-center justify-between">,
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">,
                          {service.category}
                        {service.discount && (,
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">,
                            {service.discount} OFF,
                          </span>,
                        )}
                  </div>,
                  {/* Service Content */}
                  <div className="p-6">,
                    <div className="flex items-start justify-between mb-4">,
                      <h3 className="text-xl font-bold text-gray-900 group-hover: text-blue-600 transition-colors">,
                        {service.title,}
                      </h3>,
                      <div className="flex items-center space-x-1">,
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />,
                        <span className="text-sm font-semibold text-gray-600">,
                          {service.aiScore}
                    <p className="text-gray-600 mb-4 line-clamp-3">,
                      {service.description}
                    </p>,
                    {/* Features */}
                    <div className="mb-4">,
                      <div className="flex flex-wrap gap-2">,
                        {service.features.slice(0, 3).map((feature, idx) => (,
                          <span,
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium",
                          >,
                            {feature}
                        ))}
                        {service.features.length > 3 && (,
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">,
                            +{service.features.length - 3} more,
                    {/* Benefits */}
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits: </h4>,
                      <ul className="space-y-1">,
                        {service.benefits.slice(0, 2).map((benefit, idx) => (,
                          <li key={idx} className="flex items-center text-sm text-gray-600">,
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />,
                            {benefit}
                          </li>,
                      </ul>,
                    {/* Price and Info */}
                    <div className="flex items-center justify-between mb-4">,
                      <div>,
                        <div className="flex items-center space-x-2">,
                          <span className="text-2xl font-bold text-gray-900">,
                            {service.price}
                          <span className="text-sm text-gray-500">,
                            {service.deliveryTime}
                        </div>,
                        <div className="flex items-center space-x-4 text-sm text-gray-500">,
                          <div className="flex items-center space-x-1">,
                            <Users className="w-4 h-4" />,
                            <span>{service.reviews.count} reviews</span>,
                          </div>,
                            <Clock className="w-4 h-4" />,
                            <span>{service.deliveryTime}</span>,
                    {/* CTA Button */}
                    <Link,
                      to={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group",
                    >,
                      <span>Learn More</span>,
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />,
                    </Link>,
                    {/* Urgency Badge */,}
                    {service.urgency && (,
                      <div className="mt-3 text-center">,
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">,
                          {service.urgency}
                    )}
                </div>,
                {/* Hover Effect Overlay */}
                {hoveredService === service.id && (,
                  <motion.div,
                    initial={{ opacity: 0 ,}}
                    animate={{ opacity: 1 ,}}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl pointer-events-none",
                  />,
                )}
              </motion.div>,
            );
          })}
        </motion.div>,
        {/* Bottom CTA */}
          initial={{ opacity: 0, y: 20 ,}}
          animate={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.6, delay: 0.3 ,}}
          className="text-center mt-12",
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">,
            <h3 className="text-3xl font-bold mb-4">,
              Ready to Transform Your Business?,
            </h3>,
            <p className="text-xl mb-6 text-blue-100">,
              Join thousands of companies already using our revolutionary AI solutions,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link,
                to="/contact",
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105",
                Get Started Today,
              </Link>,
                to="/pages/ComprehensiveServices2026",
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300",
                View All Services,
            </div>,
      </div>,
    </div>,
  ),};
export default UltimateServicesShowcase2026;
}}})))