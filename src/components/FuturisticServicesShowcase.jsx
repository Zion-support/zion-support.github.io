<<<<<<< HEAD
const ServiceCard = ({ service, index, isVisible }) => { const [isHovered, setIsHovered] = useState(false); return() <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative group" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} > {}" <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div> {} <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered" ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]" : "bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30"` }`} >" <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full"> {}" <div className="absolute inset-0 overflow-hidden pointer-events-none"> {[...Array(8)].map((_, i) => ( <motion.div key={i}" className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" animate={{ x: [0, Math.random() * 100 - 50], y: [0, Math.random() * 100 - 50], opacity: [0.6, 0.2, 0.6]}} transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut"}} style={{ ` left: `${20 + Math.random() * 60}%`,` top: `${20 + Math.random() * 60}%`}} /> ))} </div> {}" <div className="relative z-10">" <div className="flex items-start justify-between mb-4">" <div className="flex-1">" <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"> {service.title} </h3>" <div className="flex items-center space-x-2 mb-3">" <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"> {service.category} </span>" <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"> {service.subcategory} </span> </div> </div> {} {service.aiScore && (" <div className="relative">" <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm"> {service.aiScore} </div>" <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>" <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div> </div> )} </div> {}" <p className="text-gray-300 text-sm leading-relaxed mb-4"> {service.description} </p> {}" <div className="grid grid-cols-2 gap-2 mb-4"> {service.features.slice(0, 6).map((feature, idx) => ( <div key={idx}" className="flex items-center space-x-2 text-xs text-gray-400" >" <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>" <span className="truncate">{feature}</span> </div> ))} </div> {}" <div className="mb-4">" <h4 className="text-sm font-semibold text-cyan-400 mb-2"> Key Benefits </h4>" <div className="space-y-1"> {service.benefits.slice(0, 3).map((benefit, idx) => ( <div key={idx}" className="flex items-center space-x-2 text-xs text-gray-300" >" <div className="w-1 h-1 bg-green-400 rounded-full"></div> <span>{benefit}</span> </div> ))} </div> {}" <div className="flex items-center justify-between pt-4 border-t border-gray-700/50"> <div>" <div className="text-2xl font-bold text-white"> {service.currency} {service.price}" <span className="text-sm text-gray-400 font-normal"> /{service.pricingModel} </span> </div>" <div className="text-xs text-gray-500"> {service.marketPrice} </div> </div> " <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"> Get Started </button> </div> {} {service.technologyStack && (" <div className="mt-4 pt-4 border-t border-gray-700/50">" <h4 className="text-sm font-semibold text-purple-400 mb-2"> Tech Stack </h4>" <div className="flex flex-wrap gap-1"> {service.technologyStack.slice(0, 4).map((tech, idx) => ( <span key={idx}" className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30" > {tech} </span> ))} </div> </div> )} {}" <div className="mt-4 pt-4 border-t border-gray-700/50">" <div className="text-xs text-gray-400 space-y-1">" <div className="flex items-center space-x-2">" <span className="text-cyan-400"></span> <span>{service.contactInfo.phone}</span> </div>" <div className="flex items-center space-x-2">" <span className="text-blue-400"></span> <span>{service.contactInfo.email}</span> </div>" <div className="flex items-center space-x-2">" <span className="text-purple-400"></span> <a href={service.contactInfo.website}" className="hover:text-purple-300 transition-colors" > {service.contactInfo.website} </a> </div> </div> </div> </div> {} <motion.div" className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} /> </div> </div> </motion.div> ); }; export const FuturisticServicesShowcase = () => { const [selectedCategory, setSelectedCategory] = useState("all"); const [searchTerm, setSearchTerm] = useState("); const [visibleServices, setVisibleServices] = useState(new Set()); const categories = [";"
=======
<<<<<<< HEAD

const ServiceCard = ({ service, index, isVisible }) => { const [isHovered, setIsHovered] = useState(false); return () <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative group" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} > {}" <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div> {} <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered" ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]" : "bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30"` }`} >" <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full"> {}" <div className="absolute inset-0 overflow-hidden pointer-events-none"> {[...Array(8)].map((_, i) => ( <motion.div key={i}" className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" animate={{ x: [0, Math.random() * 100 - 50], y: [0, Math.random() * 100 - 50], opacity: [0.6, 0.2, 0.6]}} transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut"}} style={{ ` left: `${20 + Math.random() * 60}%`,` top: `${20 + Math.random() * 60}%`}} /> ))} </div> {}" <div className="relative z-10">" <div className="flex items-start justify-between mb-4">" <div className="flex-1">" <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"> {service.title} </h3>" <div className="flex items-center space-x-2 mb-3">" <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"> {service.category} </span>" <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"> {service.subcategory} </span> </div> </div> {} {service.aiScore && (" <div className="relative">" <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm"> {service.aiScore} </div>" <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>" <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div> </div> )} </div> {}" <p className="text-gray-300 text-sm leading-relaxed mb-4"> {service.description} </p> {}" <div className="grid grid-cols-2 gap-2 mb-4"> {service.features.slice(0, 6).map((feature, idx) => ( <div key={idx}" className="flex items-center space-x-2 text-xs text-gray-400" >" <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>" <span className="truncate">{feature}</span> </div> ))} </div> {}" <div className="mb-4">" <h4 className="text-sm font-semibold text-cyan-400 mb-2"> Key Benefits </h4>" <div className="space-y-1"> {service.benefits.slice(0, 3).map((benefit, idx) => ( <div key={idx}" className="flex items-center space-x-2 text-xs text-gray-300" >" <div className="w-1 h-1 bg-green-400 rounded-full"></div> <span>{benefit}</span> </div> ))} </div> {}" <div className="flex items-center justify-between pt-4 border-t border-gray-700/50"> <div>" <div className="text-2xl font-bold text-white"> {service.currency} {service.price}" <span className="text-sm text-gray-400 font-normal"> /{service.pricingModel} </span> </div>" <div className="text-xs text-gray-500"> {service.marketPrice} </div> </div> " <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"> Get Started </button> </div> {} {service.technologyStack && (" <div className="mt-4 pt-4 border-t border-gray-700/50">" <h4 className="text-sm font-semibold text-purple-400 mb-2"> Tech Stack </h4>" <div className="flex flex-wrap gap-1"> {service.technologyStack.slice(0, 4).map((tech, idx) => ( <span key={idx}" className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30" > {tech} </span> ))} </div> </div> )} {}" <div className="mt-4 pt-4 border-t border-gray-700/50">" <div className="text-xs text-gray-400 space-y-1">" <div className="flex items-center space-x-2">" <span className="text-cyan-400"></span> <span>{service.contactInfo.phone}</span> </div>" <div className="flex items-center space-x-2">" <span className="text-blue-400"></span> <span>{service.contactInfo.email}</span> </div>" <div className="flex items-center space-x-2">" <span className="text-purple-400"></span> <a href={service.contactInfo.website}" className="hover:text-purple-300 transition-colors" > {service.contactInfo.website} </a> </div> </div> </div> </div> {} <motion.div" className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} /> </div> </div> </motion.div> ); }; export const FuturisticServicesShowcase = () => { const [selectedCategory, setSelectedCategory] = useState("all"); const [searchTerm, setSearchTerm] = useState("); const [visibleServices, setVisibleServices] = useState(new Set()); const categories = [";";,"});,"})
import React, { useState, useEffect } from 'react';,"});,"})
import { motion, AnimatePresence } from 'framer-motion';,"});,"})
import { ADVANCED_MICRO_SERVICES } from "../data/advancedMicroServices.jsx";,"});,"})
const ServiceCard = ({ service, index, isVisible }) => {;,"});,"})
    const [isHovered, setIsHovered] = useState(false);,"});,"})
    return (<motion.div initial = {;,"});,"})
  { opacity: 0, y: 50,;,"});,"})
  scale: 0.9;,"});,"})
}} animate = {;,"});,"})
  isVisible ? { opacity: 1, y: 0,;,"});,"})
  scale: 1;,"});,"})
} : {}} transition = {;,"});,"})
  { duration: 0.6,;,"});,"})
  delay: index * 0.1;,"});,"})
}} className="relative group" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>;,"});,"})
      {/* Animated Background */}      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>;,"});,"})
      {/* Neon Border Effect */}"});,"})
      <div;,"});,"})
        className={`absolute inset-0 rounded-2xl transition-all duration-500 ${}"});,"})
';,"});,"})
          isHovered'';,"});,"})
            ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]'''`;,"});,"})
            : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30'``;,"});,"})
        }`}""";,"});,"})
      >"""";,"});,"})
        <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full">""";,"});,"})
          {/* Floating Particles */}"""";,"});,"})
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;,"});,"})
            {[...Array(8)].map((_, i) => (;,"});,"})
              <motion.div""";,"});,"})
                key={i}"""";,"});,"})
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60""";,"});,"})
                animate={{}"});,"})
                  x: [0, Math.random() * 100 - 50],;,"});,"})
                  y: [0, Math.random() * 100 - 50],;,"});,"})
                  opacity: [0.6, 0.2, 0.6]}}"});,"})
                transition={{}"});,"})
                  duration: 3 + Math.random() * 2,;,"});,"})
                  repeat: Infinity,';,"});,"})
                  ease: 'easeInOut'}}"});,"})
                style={{}"});,"})
`;,"});,"})
``;,"});,"})
```;,"});,"})
````;,"});,"})
                  left: `${20 + Math.random() * 60}%`,````;,"});,"})
                  top: `${20 + Math.random() * 60}%`}}"});,"})
              />;,"});,"})
            ))}"});,"})
          </div>;,"});,"})
""";,"});,"})
          {/* Service Header */}"""";,"});,"})
          <div className="relative z-10">"""";,"});,"})
            <div className="flex items-start justify-between mb-4">"""";,"});,"})
              <div className="flex-1">"""";,"});,"})
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">;,"});,"})
                  {service.title}""";,"});,"})
                </h3>"""";,"});,"})
                <div className="flex items-center space-x-2 mb-3">"""";,"});,"})
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">;,"});,"})
                    {service.category}""";,"});,"})
                  </span>"""";,"});,"})
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">;,"});,"})
                    {service.subcategory}"});,"})
                  </span>;,"});,"})
                </div>;,"});,"})
              </div>;,"});,"})
              {/* AI Score Badge */}""";,"});,"})
              {service.aiScore && ("""";,"});,"})
                <div className="relative">"""";,"});,"})
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">;,"});,"})
                    {service.aiScore}""";,"});,"})
                  </div>"""";,"});,"})
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>"""";,"});,"})
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>;,"});,"})
                </div>;,"});,"})
              )}"});,"})
            </div>;,"});,"})
""";,"});,"})
            {/* Description */}"""";,"});,"})
            <p className="text-gray-300 text-sm leading-relaxed mb-4">;,"});,"})
              {service.description}"});,"})
            </p>;,"});,"})
""";,"});,"})
            {/* Features Grid */}"""";,"});,"})
            <div className="grid grid-cols-2 gap-2 mb-4">;,"});,"})
              {service.features.slice(0, 6).map((feature, idx) => (;,"});,"})
                <div""";,"});,"})
                  key={idx}"""";,"});,"})
                  className="flex items-center space-x-2 text-xs text-gray-400"""";,"});,"})
                >"""";,"});,"})
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>"""";,"});,"})
                  <span className="truncate">{feature}</span>;,"});,"})
                </div>;,"});,"})
              ))}"});,"})
            </div>;,"});,"})
""";,"});,"})
            {/* Benefits */}"""";,"});,"})
            <div className="mb-4">"""";,"});,"})
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">;,"});,"})
                Key Benefits""";,"});,"})
              </h4>"""";,"});,"})
              <div className="space-y-1">;,"});,"})
                {service.benefits.slice(0, 3).map((benefit, idx) => (;,"});,"})
                  <div""";,"});,"})
                    key={idx}"""";,"});,"})
                    className="flex items-center space-x-2 text-xs text-gray-300"""";,"});,"})
                  >"""";,"});,"})
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>;,"});,"})
                    <span>{benefit}</span>;,"});,"})
                  </div>;,"});,"})
                ))}"});,"})
              </div>;,"});,"})
""";,"});,"})
            {/* Pricing and Contact */}"""";,"});,"})
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">""";,"});,"})
              <div>"""";,"});,"})
                <div className="text-2xl font-bold text-white">;,"});,"})
                  {service.currency}""";,"});,"})
                  {service.price}"""";,"});,"})
                  <span className="text-sm text-gray-400 font-normal">;,"});,"})
                    /{service.pricingModel}"});,"})
                  </span>""";,"});,"})
                </div>"""";,"});,"})
                <div className="text-xs text-gray-500">;,"});,"})
                  {service.marketPrice}"});,"})
                </div>;,"});,"})
              </div>""";,"});,"})
"""";,"});,"})
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">;,"});,"})
                Get Started;,"});,"})
              </button>;,"});,"})
            </div>;,"});,"})
            {/* Technology Stack */}""";,"});,"})
            {service.technologyStack && ("""";,"});,"})
              <div className="mt-4 pt-4 border-t border-gray-700/50">"""";,"});,"})
                <h4 className="text-sm font-semibold text-purple-400 mb-2">;,"});,"})
                  Tech Stack""";,"});,"})
                </h4>"""";,"});,"})
                <div className="flex flex-wrap gap-1">;,"});,"})
                  {service.technologyStack.slice(0, 4).map((tech, idx) => (;,"});,"})
                    <span""";,"});,"})
                      key={idx}"""";,"});,"})
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30""";,"});,"})
                    >;,"});,"})
                      {tech}"});,"})
                    </span>;,"});,"})
                  ))}"});,"})
                </div>;,"});,"})
              </div>;,"});,"})
            )}"});,"})
""";,"});,"})
            {/* Contact Info */}"""";,"});,"})
            <div className="mt-4 pt-4 border-t border-gray-700/50">"""";,"});,"})
              <div className="text-xs text-gray-400 space-y-1">"""";,"});,"})
                <div className="flex items-center space-x-2">"""";,"});,"})
                  <span className="text-cyan-400">📞</span>;,"});,"})
                  <span>{service.contactInfo.phone}</span>""";,"});,"})
                </div>"""";,"});,"})
                <div className="flex items-center space-x-2">"""";,"});,"})
                  <span className="text-blue-400">✉️</span>;,"});,"})
                  <span>{service.contactInfo.email}</span>""";,"});,"})
                </div>"""";,"});,"})
                <div className="flex items-center space-x-2">"""";,"});,"})
                  <span className="text-purple-400">🌐</span>;,"});,"})
                  <a""";,"});,"})
                    href={service.contactInfo.website}"""";,"});,"})
                    className="hover:text-purple-300 transition-colors""";,"});,"})
                  >;,"});,"})
                    {service.contactInfo.website}"});,"})
                  </a>;,"});,"})
                </div>;,"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
          {/* Hover Effects */}""";,"});,"})
          <motion.div"""";,"});,"})
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500""";,"});,"})
            initial={false}"});,"})
          />;,"});,"})
        </div>;,"});,"})
      </div>;,"});,"})
    </motion.div>;,"});,"})
  );,"});,"})
};,"});,"})
export const FuturisticServicesShowcase = () => {}"});,"})
  const [selectedCategory, setSelectedCategory] = useState('all');,"});,"})
  const [searchTerm, setSearchTerm] = useState('');,"});,"})
  const [visibleServices, setVisibleServices] = useState(new Set());,"});,"})
  const categories = [';,"});,"})
';,"});,"})
'';,"});,"})
  const [selectedCategory, setSelectedCategory] = useState('all');'';,"});,"})
  const [searchTerm, setSearchTerm] = useState('');';,"});,"})
  const [visibleServices, setVisibleServices] = useState(new Set());'';,"});,"})
  const categories = [''';,"});,"})
''';,"});,"})
  const [selectedCategory, setSelectedCategory] = useState('all');''';,"});,"})
  const [searchTerm, setSearchTerm] = useState('');'';,"});,"})
  const [visibleServices, setVisibleServices] = useState(new Set());''';,"});,"})
  const categories = ['''';,"});,"})
    'all',;,"});,"})
    ...new Set(ADVANCED_MICRO_SERVICES.map(s => s.category));,"});,"})
  ];,"});,"})
  const filteredServices = ADVANCED_MICRO_SERVICES.filter(service => {}"});,"})
    const matchesSearch =;,"});,"})
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;,"});,"})
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;,"});,"})
      service.tags.some(tag =>;,"});,"})
        tag.toLowerCase().includes(searchTerm.toLowerCase());,"});,"})
      );,"});,"})
    return matchesCategory && matchesSearch;,"});,"})
  });,"});,"})
  // Set all services as visible initially for better UX;,"});,"})
  useEffect(() => {}"});,"})
    const allIndices = new Set(filteredServices.map((_, index) => index));,"});,"})
    setVisibleServices(allIndices);,"});,"})
  }, [filteredServices]);""";,"});,"})
  return ("""";,"});,"})
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20">""";,"});,"})
      {/* Animated Background */}"""";,"});,"})
      <div className="absolute inset-0 overflow-hidden">"""";,"});,"})
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>;,"});,"})
        {[...Array(20)].map((_, i) => (;,"});,"})
          <div""";,"});,"})
            key={i}"""";,"});,"})
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float""";,"});,"})
            style={{}"});,"})
`;,"});,"})
``;,"});,"})
```;,"});,"})
````;,"});,"})
              left: `${Math.random() * 100}%`,````;,"});,"})
              top: `${Math.random() * 100}%`,````;,"});,"})
              animationDelay: `${Math.random() * 5}s`,````;,"});,"})
              animationDuration: `${3 + Math.random() * 4}s`}}"});,"})
          />;,"});,"})
        ))}"});,"})
      </div>""";,"});,"})
"""";,"});,"})
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;,"});,"})
        {/* Header Section */}"});,"})
        <motion.div;,"});,"})
          initial={{ opacity: 0, y: -50 }}"});,"})
          animate={{ opacity: 1, y: 0 }}""";,"});,"})
          transition={{ duration: 0.8 }}"""";,"});,"})
          className="text-center mb-16"""";,"});,"})
        >"""";,"});,"})
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">"""";,"});,"})
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">;,"});,"})
              Advanced Micro SAAS;,"});,"})
            </span>""";,"});,"})
          </h1>"""";,"});,"})
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">;,"});,"})
            Discover cutting-edge micro SAAS solutions powered by AI, quantum;,"});,"})
            computing, and next-generation technologies;,"});,"})
          </p>;,"});,"})
""";,"});,"})
          {/* Search and Filter Controls */}"""";,"});,"})
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-12">""";,"});,"})
            {/* Search Bar */}"""";,"});,"})
            <div className="relative w-full max-w-md">""";,"});,"})
              <input"""";,"});,"})
                type="text"""";,"});,"})
                placeholder="Search services...""";,"});,"})
                value={searchTerm}""";,"});,"})
                onChange={e => setSearchTerm(e.target.value)}"""";,"});,"})
                className="w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"""";,"});,"})
              />"""";,"});,"})
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400">;,"});,"})
                🔍;,"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
""";,"});,"})
            {/* Category Filter */}"""";,"});,"})
            <div className="flex flex-wrap justify-center gap-2">;,"});,"})
              {categories.map(category => (;,"});,"})
                <button;,"});,"})
                  key={category}`;,"});,"})
                  onClick={() => setSelectedCategory(category)}``;,"});,"})
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${}"});,"})
';,"});,"})
'';,"});,"})
'''`;,"});,"})
                    selectedCategory === category'''`'`;,"});,"})
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'''`'`'`;,"});,"})
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'```'`;,"});,"})
                  }`}'';,"});,"})
                >''';,"});,"})
                  {category === 'all' ? 'All Services' : category}"});,"})
                </button>;,"});,"})
              ))}"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        </motion.div>;,"});,"})
""";,"});,"})
        {/* Services Grid */}"""";,"});,"})
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;,"});,"})
          <AnimatePresence>;,"});,"})
            {filteredServices.map((service, index) => (;,"});,"})
              <ServiceCard;,"});,"})
                key={service.id}"});,"})
                service={service}"});,"})
                index={index}"});,"})
                isVisible={visibleServices.has(index)}"});,"})
              />;,"});,"})
            ))}"});,"})
          </AnimatePresence>;,"});,"})
        </div>;,"});,"})
        {/* Call to Action */}"});,"})
        <motion.div;,"});,"})
          initial={{ opacity: 0, y: 50 }}"});,"})
          animate={{ opacity: 1, y: 0 }}""";,"});,"})
          transition={{ duration: 0.8, delay: 0.5 }}"""";,"});,"})
          className="text-center mt-20"""";,"});,"})
        >"""";,"});,"})
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30">"""";,"});,"})
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;,"});,"})
              Ready to Transform Your Business?""";,"});,"})
            </h2>"""";,"});,"})
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;,"});,"})
              Get in touch with our experts to discuss how these advanced micro;,"});,"})
              SAAS solutions can revolutionize your operations""";,"});,"})
            </p>"""";,"});,"})
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">"""";,"});,"})
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">;,"});,"})
                Schedule Consultation""";,"});,"})
              </button>"""";,"});,"})
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105">;,"});,"})
                View All Services;,"});,"})
              </button>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        </motion.div>;,"});,"})
      </div>;,"});,"})
    </div>;,"});,"})
  );,"});,"})
};'"`;,"});,"})
'"`'"`;,"});,"})
>>>>>>> pr-10728;,"});,"})
=======
<<<<<<< HEAD
const ServiceCard = ({ service, index, isVisible }) => { const [isHovered, setIsHovered] = useState(false) return () <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className='relative group' onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} > {}' <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div> {} <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered' ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]' : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30'` }`} >' <div className='relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full'> {}' <div className='absolute inset-0 overflow-hidden pointer-events-none'> {[...Array(8)].map((_, i) => ( <motion.div key={i}' className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60' animate={{ x: [0, Math.random() * 100 - 50], y: [0, Math.random() * 100 - 50], opacity: [0.6, 0.2, 0.6]}} transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut'}} style={{ ` left: `${20 + Math.random() * 60}%`,` top: `${20 + Math.random() * 60}%`}} /> ))} </div> {}' <div className='relative z-10'>' <div className='flex items-start justify-between mb-4'>' <div className='flex-1'>' <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'> {service.title} </h3>' <div className='flex items-center space-x-2 mb-3'>' <span className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30'> {service.category} </span>' <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30'> {service.subcategory} </span> </div> </div> {} {service.aiScore && (' <div className='relative'>' <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'> {service.aiScore} </div>' <div className='absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse'></div>' <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black'></div> </div> )} </div> {}' <p className='text-gray-300 text-sm leading-relaxed mb-4'> {service.description} </p> {}' <div className='grid grid-cols-2 gap-2 mb-4'> {service.features.slice(0, 6).map((feature, idx) => ( <div key={idx}' className='flex items-center space-x-2 text-xs text-gray-400' >' <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full'></div>' <span className='truncate'>{feature}</span> </div> ))} </div> {}' <div className='mb-4'>' <h4 className='text-sm font-semibold text-cyan-400 mb-2'> Key Benefits </h4>' <div className='space-y-1'> {service.benefits.slice(0, 3).map((benefit, idx) => ( <div key={idx}' className='flex items-center space-x-2 text-xs text-gray-300' >' <div className='w-1 h-1 bg-green-400 rounded-full'></div> <span>{benefit}</span> </div> ))} </div> {}' <div className='flex items-center justify-between pt-4 border-t border-gray-700/50'> <div>' <div className='text-2xl font-bold text-white'> {service.currency} {service.price}' <span className='text-sm text-gray-400 font-normal'> /{service.pricingModel} </span> </div>' <div className='text-xs text-gray-500'> {service.marketPrice} </div> </div> ' <button className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'> Get Started </button> </div> {} {service.technologyStack && (' <div className='mt-4 pt-4 border-t border-gray-700/50'>' <h4 className='text-sm font-semibold text-purple-400 mb-2'> Tech Stack </h4>' <div className='flex flex-wrap gap-1'> {service.technologyStack.slice(0, 4).map((tech, idx) => ( <span key={idx}' className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30' > {tech} </span> ))} </div> </div> )} {}' <div className='mt-4 pt-4 border-t border-gray-700/50'>' <div className='text-xs text-gray-400 space-y-1'>' <div className='flex items-center space-x-2'>' <span className='text-cyan-400'></span> <span>{service.contactInfo.phone}</span> </div>' <div className='flex items-center space-x-2'>' <span className='text-blue-400'></span> <span>{service.contactInfo.email}</span> </div>' <div className='flex items-center space-x-2'>' <span className='text-purple-400'></span> <a href={service.contactInfo.website}' className='hover:text-purple-300 transition-colors' > {service.contactInfo.website} </a> </div> </div> </div> </div> {} <motion.div' className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' initial={false} /> </div> </div> </motion.div> ) } export const FuturisticServicesShowcase = () => { const [selectedCategory, setSelectedCategory] = useState('all') const [searchTerm, setSearchTerm] = useState(') const [visibleServices, setVisibleServices] = useState(new Set()) const categories = ['';
=======
<<<<<<< HEAD
import: React, { useState, useEffect } from 'react'';';';';
import: { motion, AnimatePresence } from 'framer-motion';';';';
import: { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';';';';
const: ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false);
    return: (<motion.div initial = {};
  { opacity:  ,0, y: 5,0,
  scale: 0.,9}} animate: = {};
  isVisible: ? { opacity:  ,1, y:  ,0,;
  scale:  ,1} : {}} transition: = {};
  { duration: 0.,6,;
  delay: index: * 0.1 ''';',;,';';
''''}} className='relative: group' onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>'''{/* Animated Background */}''''';';';
      <div: className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover: blur-2xl: transition-all duration-500'></div>',;,';';
      {/* Neon: Border Effect */}'';';';
      <div: className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered''`;';';`;
            ? 'bg-gradient-to-r: from-cyan-400 via-blue-400 to-purple-400 p-[2px]''`''`;';';`;
            : 'bg-gradient-to-r: from-cyan-500/30 via-blue-500/30 to-purple-500/30'}`}>''''';';`;
        <div: className='relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full'>'''{/* Floating Particles */}''''';';';
          <div: className='absolute inset-0 overflow-hidden pointer-events-none'>''''{[...Array(8)].map((_, i) => (<motion.div key={i} className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60' animate = {}';';';
  {}
                x[0, Math.random() * 100: - 50],
                y[0, Math.random() * 100 - 50],
                opacity[0.6, 0.2, 0.6],
}} transition = {}
  {}
                duration: 3: + Math.random() * ,2,''';';';';
                repeat: Infinit,y,'''';';';';
                ease: 'easeInOut,'}} style={{}';';';
`;`;
``;`;
                left: `${20: + Math.random() * 6,0}%`,``;`;
                top: `${20: + Math.random() * 6,0}%`}}/>))}`;
          </div>
'''{/* Service: Header */}''''';';';
          <div: className='relative z-10'>''''';';';
            <div: className='flex items-start justify-between mb-4'>''''';';';
              <div: className='flex-1'>''''';';';
                <h3: className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'>';';';
                  {service.title}'''';';';
                </h3>''''';';';
                <div: className='flex items-center space-x-2 mb-3'>''''';';';
                  <span: className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30'>';';';
                    {service.category}'''';';';
                  </span>''''';';';
                  <span: className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30'>';';';
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
<<<<<<< HEAD
import React, {useState, useEffect } from 'react'';'
import {motion, AnimatePresence } from 'framer-motion';
import {ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';
const ServiceCard = ({service, index, isVisible }) => {const [isHovered, setIsHovered] = useState(false)
    return (<motion .div initial = {}
=======
<<<<<<< HEAD
import React, { useState, useEffect } from &apos;
import { motion } from &apos;framer-motion';;react&apos;';
import { motion, AnimatePresence } from &apos;framer-motion';
import { ADVANCED_MICRO_SERVICES } from &apos;../data/advancedMicroServices.jsx';&apos;&apos;
const ServiceCard = ({ service, index, isVisible }) => {}    const [isHovered, setIsHovered] = useState(false)
    return (<;<;<motion.div initial = {}
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'';'
<<<<<<< HEAD
const ServiceCard = memo(({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false)
    return (<motion .div initial = {}
=======
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';""
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';
<<<<<<< HEAD
const ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false);
    return (<motion .div initial = {}
=======
const ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false)
    return (<motion .div initial = {}
""
}
=======
>>>>>>> main
import { motion, AnimatePresence } from 'framer-motion';
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';
const ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false);
    return (<motion.div initial = {}
<<<<<<< HEAD
  { opacity: 0, y: 50,;
=======
>>>>>>> main
  { opacity: 0, y: 50,
>>>>>>> main
  scale: 0.9}} animate = {}
  isVisible ? { opacity: 1, y: 0,;
  scale: 1} : {}} transition = {}
<<<<<<< HEAD
  { duration: 0.6,;
  delay: index * 0.1 '';
''}} className='relative group' onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>''{/* Animated Background */}'';
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>;
      {/* Neon Border Effect */}';
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered'`;
            ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]'`'`;
            : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30'}`}>'';
        <div className='relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full'>''{/* Floating Particles */}'';
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>''{[...Array(8)].map((_, i) => (<motion.div key={i} className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60' animate = {}
  {}
                x[0, Math.random() * 100 - 50],;
                y[0, Math.random() * 100 - 50],;
                opacity[0.6, 0.2, 0.6],;
}} transition = {}
  {}
                duration: 3 + Math.random() * 2,'';
                repeat: Infinity,'';
                ease: 'easeInOut'}} style={{}
=======
<<<<<<< HEAD
  { duration: 0.6,
  delay: index * 0.1 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;relative group&apos; onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>&apos;&apos;'{/* Animated Background */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500&apos;>&apos;'</div>
      {/* Neon Border Effect */}&apos;&apos;'
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered&apos;&apos;`;
            ? &apos;bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]&apos;&apos;`&apos;&apos;`;
            : &apos;bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30&apos;}`}>&apos;&apos;'&apos;&apos;'
        <div className=&apos;relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full&apos;>'&apos;&apos;{/* Floating Particles */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;absolute inset-0 overflow-hidden pointer-events-none&apos;>'&apos;&apos;'{[...Array(8)].map((_, i) => (&apos;}&apos;<motion.div key={i} className=&apos;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60&apos; animate = {}
=======
  { duration: 0.6, delay: index * 0.1 ''';'
''''}} className='relative group' onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>'''{/* Animated Background */}'''''
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover: blur-2xl transition-all duration-500'></div>
      {/* Neon Border Effect */}''
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered''`;
            ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]''`''`;'
            : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30'}`}>''''
        <div className='relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full'>'''{/* Floating Particles */}'''''
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>''''{[...Array(8)].map((_, i) => (<motion.div key={i} className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60' animate = {}
>>>>>>> main
  {}
                x[0, Math.random() * 100 - 50], y[0, Math.random() * 100 - 50], opacity[0.6, 0.2, 0.6], }} transition = {}
  {}
<<<<<<< HEAD
                duration: 3 + Math.random() * 2,&apos;&apos;';
                repeat: Infinity,&apos;&apos;'';
                ease: &apos;easeInOut&apos;}} style={{}
>>>>>>> main
`;
``;
                left: `${20 + Math.random() * 60}%`,``;
                top: `${20 + Math.random() * 60}%`}}/>))}&apos;&apos;
          </div>
&apos;&apos;'{/* Service Header */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;relative z-10&apos;>'&apos;&apos;'&apos;&apos;
            <div className=&apos;flex items-start justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
                <h3 className=&apos;text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2&apos;>
                  {service.title}&apos;&apos;'&apos;&apos;
                </h3>&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center space-x-2 mb-3&apos;>'&apos;&apos;'&apos;&apos;
                  <span className=&apos;px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30&apos;>
                    {service.category}&apos;&apos;'&apos;&apos;
                  </span>&apos;&apos;'&apos;&apos;'
                  <span className=&apos;px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30&apos;>
                    {service.subcategory}&apos;
                  </span>
                </div>
              </div>
              &apos;&apos;'{/* AI Score Badge */}&apos;&apos;'&apos;{service.aiScore && (&apos;}&apos;<div className=&apos;relative&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm&apos;>
                    {service.aiScore}&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse&apos;>&apos;'</div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black&apos;>&apos;'</div>
                </div>)}
            </div>
&apos;&apos;'{/* Description */}&apos;&apos;'&apos;&apos;'
            <p className=&apos;text-gray-300 text-sm leading-relaxed mb-4&apos;>
              {service.description}&apos;
            </p>
&apos;&apos;'{/* Features Grid */}&apos;&apos;'&apos;&apos;'
            <div className=&apos;grid grid-cols-2 gap-2 mb-4&apos;>'&apos;&apos;'{service.features.slice(0, 6).map((feature, idx) => (&apos;}&apos;<div key={idx} className=&apos;flex items-center space-x-2 text-xs text-gray-400&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;w-1.5 h-1.5 bg-cyan-400 rounded-full&apos;>&apos;'</div>&apos;&apos;'&apos;&apos;'
                  <span className=&apos;truncate&apos;>{feature}&apos;</span>
                </div>) ) }
            </div>
&apos;&apos;'{/* Benefits */}&apos;&apos;'&apos;&apos;'
            <div className=&apos;mb-4&apos;>'&apos;&apos;'&apos;&apos;
              <h4 className=&apos;text-sm font-semibold text-cyan-400 mb-2&apos;>Key Benefits&apos;</h4>&apos;&apos;'&apos;&apos;'
              <div className=&apos;space-y-1&apos;>'&apos;&apos;'{service.benefits.slice(0, 3).map((benefit, idx) => (&apos;}&apos;<div key={idx} className=&apos;flex items-center space-x-2 text-xs text-gray-300&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;w-1 h-1 bg-green-400 rounded-full&apos;>&apos;'</div>
=======
                duration: 3 + Math.random() * 2, ''';'
                repeat: Infinity, '''';
                ease: 'easeInOut'}} style={{}
`;
``;
                left: `${20 + Math.random() * 60}%`, ``;
                top: `${20 + Math.random() * 60}%`}}/>))}
<<<<<<< HEAD
          </div>;
''{/* Service Header */}'';
          <div className='relative z-10'>'';
            <div className='flex items-start justify-between mb-4'>'';
              <div className='flex-1'>'';
                <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'>;
                  {service.title}'';
                </h3>'';
                <div className='flex items-center space-x-2 mb-3'>'';
                  <span className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30'>;
                    {service.category}'';
                  </span>'';
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30'>;
                    {service.subcategory}
                  </span>;
                </div>;
              </div>;
              ''{/* AI Score Badge */}''{service.aiScore && (<div className='relative'>'';
                  <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>;
                    {service.aiScore}'';
                  </div>'';
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse'></div>'';
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black'></div>;
                </div>)}
            </div>;
''{/* Description */}'';
            <p className='text-gray-300 text-sm leading-relaxed mb-4'>;
              {service.description}
            </p>;
''{/* Features Grid */}'';
            <div className='grid grid-cols-2 gap-2 mb-4'>''{service.features.slice(0, 6).map((feature, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-400'>'';
                  <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full'></div>'';
                  <span className='truncate'>{feature}</span>;
                </div>) ) }
            </div>;
''{/* Benefits */}'';
            <div className='mb-4'>'';
              <h4 className='text-sm font-semibold text-cyan-400 mb-2'>Key Benefits</h4>'';
              <div className='space-y-1'>''{service.benefits.slice(0, 3).map((benefit, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-300'>'';
                    <div className='w-1 h-1 bg-green-400 rounded-full'></div>;
                    <span>{benefit}</span>;
                  </div>) ) }
              </div>;
            </div>;
''{/* Pricing and Contact */}'';
            <div className='flex items-center justify-between pt-4 border-t border-gray-700/50'>'';
              <div>'';
                <div className='text-2xl font-bold text-white'>''{service.currency}{service.price}'';
                  <span className='text-sm text-gray-400 font-normal'>/{service.pricingModel}</span>'';
                </div>'';
                <div className='text-xs text-gray-500'>{service.marketPrice}</div>;
              </div>'';
              '';
              <button className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'>;
                Get Started;
              </button>;
            </div>;
''{/* Technology Stack */}''{service.technologyStack && (<div className='mt-4 pt-4 border-t border-gray-700/50'>'';
                <h4 className='text-sm font-semibold text-purple-400 mb-2'>Tech Stack</h4>'';
                <div className='flex flex-wrap gap-1'>''{service.technologyStack.slice(0, 4).map((tech, idx) => (<span key={idx} className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30'>;
=======
          </div>
'''{/* Service Header */}'''''
          <div className='relative z-10'>''''
            <div className='flex items-start justify-between mb-4'>''''
              <div className='flex-1'>''''
                <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'>
                  {service.title}''''
                </h3>''''
                <div className='flex items-center space-x-2 mb-3'>''''
                  <span className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30'>
                    {service.category}''''
                  </span>''''
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30'>
>>>>>>> main
                    {service.subcategory}
                  </span>
                </div>
              </div>
<<<<<<< HEAD
              '''{/* AI: Score Badge */}''''{service.aiScore && (<div className='relative'>''''';';';
                  <div: className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>';';';
                    {service.aiScore}'''';';';
                  </div>''''';';';
                  <div: className='absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse'></div>''''';';';
                  <div: className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black'></div>';';';
                </div>)}
            </div>
'''{/* Description: */}''''';';';
            <p: className='text-gray-300 text-sm leading-relaxed mb-4'>';';';
              {service.description}
            </p>
'''{/* Features: Grid */}''''';';';
            <div: className='grid grid-cols-2 gap-2 mb-4'>''''{service.features.slice(0, 6).map((feature, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-400'>''''';';';
                  <div: className='w-1.5 h-1.5 bg-cyan-400 rounded-full'></div>''''';';';
                  <span: className='truncate'>{feature}</span>';';';
                </div>) ) }
            </div>
'''{/* Benefits: */}''''';';';
            <div: className='mb-4'>''''';';';
              <h4: className='text-sm font-semibold text-cyan-400 mb-2'>Key Benefits</h4>''''';';';
              <div: className='space-y-1'>''''{service.benefits.slice(0, 3).map((benefit, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-300'>''''';';';
                    <div: className='w-1 h-1 bg-green-400 rounded-full'></div>';';';
=======
              '''{/* AI Score Badge */}''''{service.aiScore && (<div className='relative'>'''''
                  <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                    {service.aiScore}''''
                  </div>''''
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse'></div>''''
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black'></div>
                </div>)}
            </div>
'''{/* Description */}'''''
            <p className='text-gray-300 text-sm leading-relaxed mb-4'>
              {service.description}
            </p>
'''{/* Features Grid */}'''''
            <div className='grid grid-cols-2 gap-2 mb-4'>''''{service.features.slice(0, 6).map((feature, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-400'>''''
                  <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full'></div>''''
                  <span className='truncate'>{feature}</span>
                </div>) ) }
            </div>
'''{/* Benefits */}'''''
            <div className='mb-4'>''''
              <h4 className='text-sm font-semibold text-cyan-400 mb-2'>Key Benefits</h4>''''
              <div className='space-y-1'>''''{service.benefits.slice(0, 3).map((benefit, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-300'>''''
                    <div className='w-1 h-1 bg-green-400 rounded-full'></div>
>>>>>>> main
>>>>>>> main
                    <span>{benefit}</span>
                  </div>) ) }
              </div>
            </div>
<<<<<<< HEAD
'''{/* Pricing: and Contact */}''''';';';
            <div: className='flex items-center justify-between pt-4 border-t border-gray-700/50'>'''';';';
              <div>''''';';';
                <div: className='text-2xl font-bold text-white'>'''{service.currency}{service.price}''''';';';
                  <span: className='text-sm text-gray-400 font-normal'>/{service.pricingModel}</span>'''';';';
                </div>''''';';';
                <div: className='text-xs text-gray-500'>{service.marketPrice}</div>';';';
              </div>''';';';';
              ''''';';';
              <button: className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover: from-cyan-400: hover:to-blue-400: transition-all duration-300 transform hover:scale-105: shadow-lg shadow-cyan-500/30'>',;,';';
                Get: Started
              </button>
            </div>
'''{/* Technology Stack */}''''{service.technologyStack && (<div className='mt-4 pt-4 border-t border-gray-700/50'>''''';';';
                <h4: className='text-sm font-semibold text-purple-400 mb-2'>Tech Stack</h4>''''';';';
                <div: className='flex flex-wrap gap-1'>''''{service.technologyStack.slice(0, 4).map((tech, idx) => (<span key={idx} className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30'>';';';
                      {tech}
                    </span>) ) }
                </div>
              </div>) }
'''{/* Contact: Info */}''''';';';
            <div: className='mt-4 pt-4 border-t border-gray-700/50'>''''';';';
              <div: className='text-xs text-gray-400 space-y-1'>''''';';';
                <div: className='flex items-center space-x-2'>''''';';';
                  <span: className='text-cyan-400'>📞</span>';';';
                  <span>{service.contactInfo.phone}</span>'''';';';
                </div>''''';';';
                <div: className='flex items-center space-x-2'>''''';';';
                  <span: className='text-blue-400'>✉️</span>';';';
                  <span>{service.contactInfo.email}</span>'''';';';
                </div>''''';';';
                <div: className='flex items-center space-x-2'>''''';';';
                  <span: className='text-purple-400'>🌐</span>''''';';';
                  <a: href={service.contactInfo.website} className='hover: text-purple-300: transition-colors'>',;,';';
=======
<<<<<<< HEAD
&apos;&apos;'{/* Pricing and Contact */}&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex items-center justify-between pt-4 border-t border-gray-700/50&apos;>'&apos;&apos;''
              <div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-2xl font-bold text-white&apos;>'&apos;&apos;{service.currency}{service.price}&apos;&apos;'&apos;&apos;'
                  <span className=&apos;text-sm text-gray-400 font-normal&apos;>/{service.pricingModel}&apos;</span>&apos;&apos;'&apos;&apos;
                </div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-xs text-gray-500&apos;>{service.marketPrice}&apos;</div>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <button className=&apos;px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hove,r:scale-105 shadow-lg shadow-cyan-500/30&apos;>
                Get Started&apos;
              </button>
            </div>
&apos;&apos;'{/* Technology Stack */}&apos;&apos;'&apos;{service.technologyStack && (&apos;}&apos;<div className=&apos;mt-4 pt-4 border-t border-gray-700/50&apos;>'&apos;&apos;'&apos;&apos;
                <h4 className=&apos;text-sm font-semibold text-purple-400 mb-2&apos;>Tech Stack&apos;</h4>&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex flex-wrap gap-1&apos;>'&apos;&apos;'{service.technologyStack.slice(0, 4).map((tech, idx) => (&apos;}&apos;<span key={idx} className=&apos;px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30&apos;>
                      {tech}&apos;
                    </span>) ) }
                </div>
              </div>) }
&apos;&apos;'{/* Contact Info */}&apos;&apos;'&apos;&apos;'
            <div className=&apos;mt-4 pt-4 border-t border-gray-700/50&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;text-xs text-gray-400 space-y-1&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                  <span className=&apos;text-cyan-400&apos;>📞&apos;</span>
                  <span>{service.contactInfo.phone}</span>&apos;&apos;'&apos;&apos;
                </div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                  <span className=&apos;text-blue-400&apos;>✉️&apos;</span>
                  <span>{service.contactInfo.email}</span>&apos;&apos;'&apos;&apos;
                </div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                  <span className=&apos;text-purple-400&apos;>🌐&apos;</span>&apos;&apos;'&apos;&apos;'
                  <a href={service.contactInfo.website} className=&apos;hover:text-purple-300 transition-colors&apos;>
                    {service.contactInfo.website}&apos;
=======
'''{/* Pricing and Contact */}'''''
            <div className='flex items-center justify-between pt-4 border-t border-gray-700/50'>''''
              <div>''''
                <div className='text-2xl font-bold text-white'>'''{service.currency}{service.price}'''''
                  <span className='text-sm text-gray-400 font-normal'>/{service.pricingModel}</span>''''
                </div>''''
                <div className='text-xs text-gray-500'>{service.marketPrice}</div>
              </div>''''
              ''''
              <button className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover: from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'>
                Get Started
              </button>
            </div>
'''{/* Technology Stack */}''''{service.technologyStack && (<div className='mt-4 pt-4 border-t border-gray-700/50'>'''''
                <h4 className='text-sm font-semibold text-purple-400 mb-2'>Tech Stack</h4>''''
                <div className='flex flex-wrap gap-1'>''''{service.technologyStack.slice(0, 4).map((tech, idx) => (<span key={idx} className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30'>
>>>>>>> main
                      {tech}
                    </span>) ) }
                </div>;
              </div>) }
<<<<<<< HEAD
''{/* Contact Info */}'';
            <div className='mt-4 pt-4 border-t border-gray-700/50'>'';
              <div className='text-xs text-gray-400 space-y-1'>'';
                <div className='flex items-center space-x-2'>'';
                  <span className='text-cyan-400'>📞</span>;
                  <span>{service.contactInfo.phone}</span>'';
                </div>'';
                <div className='flex items-center space-x-2'>'';
                  <span className='text-blue-400'>✉️</span>;
                  <span>{service.contactInfo.email}</span>'';
                </div>'';
                <div className='flex items-center space-x-2'>'';
                  <span className='text-purple-400'>🌐</span>'';
                  <a href={service.contactInfo.website} className='hover:text-purple-300 transition-colors'>;
                    {service.contactInfo.website}
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>;
''{/* Hover Effects */}'';
          <motion.div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' initial={false}/>;
        </div>;
      </div>;
=======
'''{/* Contact Info */}'''''
            <div className='mt-4 pt-4 border-t border-gray-700/50'>''''
              <div className='text-xs text-gray-400 space-y-1'>''''
                <div className='flex items-center space-x-2'>''''
                  <span className='text-cyan-400'>📞</span>
                  <span>{service.contactInfo.phone}</span>''''
                </div>''''
                <div className='flex items-center space-x-2'>''''
                  <span className='text-blue-400'>✉️</span>
                  <span>{service.contactInfo.email}</span>''''
                </div>''''
                <div className='flex items-center space-x-2'>''''
                  <span className='text-purple-400'>🌐</span>''''
                  <a href={service.contactInfo.website} className='hover: text-purple-300 transition-colors'>
>>>>>>> main
                    {service.contactInfo.website}
>>>>>>> main
                  </a>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
'''{/* Hover: Effects */}''''';';';
          <motion.div: className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover: opacity-100: transition-opacity duration-500' initial={fals,e}/>';';';
=======
<<<<<<< HEAD
&apos;&apos;'{/* Hover Effects */}&apos;&apos;'&apos;&apos;'
          <motion.div className=&apos;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500&apos; initial={false}/>&apos;
=======
'''{/* Hover Effects */}'''''
          <motion.div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' initial={false}/>
>>>>>>> main
>>>>>>> main
        </div>
      </div>
>>>>>>> main
    </motion.div>)}
<<<<<<< HEAD
export: const FuturisticServicesShowcase = () => {};
';';';';
'';';';';
''';';';';
    const: [selectedCategory, setSelectedCategory] = useState('all')';';';';';
    const: [searchTerm, setSearchTerm] = useState('')';';';';
    const: [visibleServices, setVisibleServices] = useState(new Set())';';';';';
    const: categories = ['all', ...new Set(ADVANCED_MICRO_SERVICES.map(s => s.category))]';';';
    const: filteredServices = ADVANCED_MICRO_SERVICES.filter(service => {};
        const: matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.tags.some(tag: => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return: matchesCategory && matchesSearch});
    // Set: all services as visible initially for better UX;
    useEffect(() => {}
        const: allIndices = new Set(filteredServices.map((_, index) => index))';';';';';
        setVisibleServices(allIndices)}, [filteredServices])';''';';';
    return: (<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20'>'''{/* Animated Background */}''''';';';
      <div: className='absolute inset-0 overflow-hidden'>''''';';';
        <div: className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5'></div>''''{[...Array(20)].map((_, i) => (<div key={i} className='absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float' style={{}';';';
`;`;
``;`;
                left: `${Math.random() * 10,0}%`,``;`;
                top: `${Math.random() * 10,0}%`,``;`;
                animationDelay: `${Math.random() * ,5}s`,``;`;
                animationDuration: `${3: + Math.random() * ,4}s`}}/>))}`;
      </div>''';';';';
''''';';';
      <div: className='relative z-10 max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>',;,';';
        {/* Header: Section */}
        <motion.div initial = {}
  { opacity:  ,0,
  y: -5,0}} animate: = {}
  { opacity:  ,1,
  y: 0: ''';',;,';';
''''}} transition={{ duration: 0.8, }} className='text-center: mb-16'>''''';';';
          <h1: className='text-5xl lg: text-7xl: font-bold mb-6'>''''',;,';';
            <span: className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>';';';
              Advanced: Micro SAAS
            </span>'''';';';
          </h1>''''';';';
          <p: className='text-xl lg: text-2xl: text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>',;,';';
            Discover: cutting-edge micro SAAS solutions powered by AI, quantum computing, and next-generation technologies
          </p>
          '''{/* Search and Filter Controls */}''''';';';
          <div: className='flex flex-col lg: flex-row: items-center justify-center space-y-4 lg:space-y-0: lg:space-x-6: mb-12'>'''{/* Search Bar *,/}''''';';';
            <div: className='relative w-full max-w-md'>''''';';';
              <input: type='text' placeholder='Search services...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus: outline-none: focus:border-cyan-400: focus:ring-2: focus:ring-cyan-400/20: transition-all duration-300'/>''''',;,';';
              <div: className='absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400'>';';';
                🔍
              </div>
            </div>
'''{/* Category: Filter */}''`';';`;
            <div: className='flex flex-wrap justify-center gap-2'>`'`{categories.map((category) => (<button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover: scale-105: ${selectedCategory === category''`;',;,';`;
                ? 'bg-gradient-to-r: from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30''`'`';';`;
                : 'bg-black/50: border border-cyan-500/30 text-cyan-400 hover: bg-cyan-500/20,'}`}>'{category: === 'all' ? 'All Services' : category}';';`;
=======
export const FuturisticServicesShowcase = () => {}
<<<<<<< HEAD
';
<<<<<<< HEAD
';
'';
    const [selectedCategory, setSelectedCategory] = useState('all')';';
    const [searchTerm, setSearchTerm] = useState(')';
    const [visibleServices, setVisibleServices] = useState(new Set())';';
    const categories = ['all', ...new Set(ADVANCED_MICRO_SERVICES.map(s => s.category))];
=======
&apos;';
&apos;&apos;';&apos;&apos;
    const [selectedCategory, setSelectedCategory] = useState(&apos;all&apos;)';';&apos;&apos;
    const [searchTerm, setSearchTerm] = useState(&apos;&apos;)';&apos;&apos;
    const [visibleServices, setVisibleServices] = useState(new Set())';';&apos;&apos;
    const categories = [&apos;all&apos;, ...new Set(ADVANCED_MICRO_SERVICES.map(s => s.category))]&apos;
=======
';'
'';
''';'
    const [selectedCategory, setSelectedCategory] = useState('all')';';
    const [searchTerm, setSearchTerm] = useState('')';'
    const [visibleServices, setVisibleServices] = useState(new Set())';';
    const categories = ['all', ...new Set(ADVANCED_MICRO_SERVICES.map(s => s.category))]
>>>>>>> main
>>>>>>> main
    const filteredServices = ADVANCED_MICRO_SERVICES.filter(service => {}
        const;const;const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch});
    // Set all services as visible initially for better UX;
    useEffect(() => {}
        const allIndices = new Set(filteredServices.map((_, index) => index))';';
<<<<<<< HEAD
        setVisibleServices(allIndices)}, [filteredServices])''''
=======
<<<<<<< HEAD
        setVisibleServices(allIndices)}, [filteredServices])';';
    return (<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20'>''{/* Animated Background */}'';
      <div className='absolute inset-0 overflow-hidden'>'';
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5'></div>''{[...Array(20)].map((_, i) => (<div key={i} className='absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float' style={{}
=======
<<<<<<< HEAD
        setVisibleServices(allIndices)}, [filteredServices])';&apos;&apos;
    return (&apos;&apos;<div className=&apos;min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20&apos;>'&apos;&apos;{/* Animated Background */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;absolute inset-0 overflow-hidden&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5&apos;>&apos;'</div>&apos;&apos;'&apos;{[...Array(20)].map((_, i) => (&apos;}&apos;<div key={i} className=&apos;absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float&apos; style={{}
>>>>>>> main
`;
``;
                left: `${Math.random() * 100}%`,``;
                top: `${Math.random() * 100}%`,``;
                animationDelay: `${Math.random() * 5}s`,``;
                animationDuration: `${3 + Math.random() * 4}s`}}/>))}&apos;
      </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
      <div className=&apos;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 l,g:px-8&apos;>
        {/* Header Section */}&apos;
=======
        setVisibleServices(allIndices)}, [filteredServices])';'''
>>>>>>> main
    return (<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20'>'''{/* Animated Background */}'''''
      <div className='absolute inset-0 overflow-hidden'>''''
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5'></div>''''{[...Array(20)].map((_, i) => (<div key={i} className='absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float' style={{}
`;
``;
                left: `${Math.random() * 100}%`, ``;
                top: `${Math.random() * 100}%`, ``;
                animationDelay: `${Math.random() * 5}s`, ``;
                animationDuration: `${3 + Math.random() * 4}s`}}/>))}
<<<<<<< HEAD
      </div>''''
=======
<<<<<<< HEAD
      </div>'';
'';
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
=======
      </div>''';'
>>>>>>> main
''''
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
>>>>>>> main
        {/* Header Section */}
>>>>>>> main
        <motion.div initial = {}
<<<<<<< HEAD
  { opacity: 0,;
  y: -50}} animate = {}
  { opacity: 1,;
  y: 0 '';
''}} transition={{ duration: 0.8 }} className='text-center mb-16'>'';
          <h1 className='text-5xl lg:text-7xl font-bold mb-6'>'';
            <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>;
              Advanced Micro SAAS;
            </span>'';
          </h1>'';
          <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
            Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and next-generation technologies;
          </p>;
          ''{/* Search and Filter Controls */}'';
          <div className='flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-12'>''{/* Search Bar */}'';
            <div className='relative w-full max-w-md'>'';
              <input type='text' placeholder='Search services...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'/>'';
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400'>;
                🔍;
              </div>;
            </div>;
''{/* Category Filter */}'`;
            <div className='flex flex-wrap justify-center gap-2'>`'`{categories.map((category) => (<button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category'`;
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'`'`;
                : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'}`}>'{category === 'all' ? 'All Services' : category}
                </button>) ) }
            </div>;
          </div>;
        </motion.div>;
''{/* Services Grid */}'';
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>;
          <AnimatePresence>;
            {filteredServices.map((service, index) => (<ServiceCard key={service.id} service={service} index={index} isVisible={visibleServices.has(index) }/>) ) }
          </AnimatePresence>;
        </div>;
        {/* Call to Action */}
        <motion.div initial = {}
  { opacity: 0,;
  y: 50}} animate = {}
  { opacity: 1,;
  y: 0}} transition = {}
  { duration: 0.8,;
  delay: 0.5 '';
''}} className='text-center mt-20'>'';
          <div className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30'>'';
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?'';
            </h2>'';
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Get in touch with our experts to discuss how these advanced micro SAAS solutions can revolutionize your operations'';
            </p>'';
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>'';
              <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'>;
                Schedule Consultation'';
              </button>'';
              <button className='px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105'>;
                View All Services;
              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>)}'`;
'`'"`
=======
  { opacity: 0, y: -50}} animate = {}
  { opacity: 1,
<<<<<<< HEAD
  y: 0 &apos;&apos;';
&apos;&apos;'&apos;}} transition={{ duration: 0.8 }} className=&apos;text-center mb-16&apos;>'&apos;&apos;'&apos;&apos;
          <h1 className=&apos;text-5xl lg:text-7xl font-bold mb-6&apos;>'&apos;&apos;'&apos;&apos;
            <span className=&apos;bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&apos;>
              Advanced Micro SAAS&apos;
            </span>&apos;&apos;'&apos;&apos;
          </h1>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-xl l,g:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&apos;>
            Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and next-generation technologies&apos;
          </p>
          &apos;&apos;'{/* Search and Filter Controls */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 l,g:space-x-6 mb-12&apos;>'&apos;&apos;{/* Search Bar */}&apos;&apos;'&apos;&apos;'
            <div className=&apos;relative w-full max-w-md&apos;>'&apos;&apos;'&apos;&apos;
              <input type=&apos;text&apos; placeholder=&apos;Search services...&apos; value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className=&apos;w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focu,s:ring-cyan-400/20 transition-all duration-300&apos;/>&apos;&apos;'&apos;&apos;'
              <div className=&apos;absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400&apos;>
                🔍&apos;
              </div>
            </div>
&apos;&apos;'{/* Category Filter */}&apos;&apos;`&apos;&apos;
            <div className=&apos;flex flex-wrap justify-center gap-2&apos;>`&apos;`{categories.map((category) => (&apos;}<button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category&apos;&apos;`;
                ? &apos;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30&apos;&apos;`&apos;`
                : &apos;bg-black/50 border border-cyan-500/30 text-cyan-400 hove,r:bg-cyan-500/20&apos;}`}>&apos;{category === &apos;all&apos; ? &apos;All Services&apos; : category}&apos;&apos;
=======
  y: 0 ''';'
''''}} transition={{ duration: 0.8 }} className='text-center mb-16'>''''
          <h1 className='text-5xl lg:text-7xl font-bold mb-6'>''''
            <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Advanced Micro SAAS
            </span>''''
          </h1>''''
          <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and next-generation technologies
          </p>
          '''{/* Search and Filter Controls */}'''''
          <div className='flex flex-col lg: flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-12'>'''{/* Search Bar */}'''''
            <div className='relative w-full max-w-md'>''''
              <input type='text' placeholder='Search services...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'/>''''
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400'>
                🔍
              </div>
            </div>
'''{/* Category Filter */}''`'
            <div className='flex flex-wrap justify-center gap-2'>`'`{categories.map((category) => (<button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover: scale-105 ${selectedCategory === category''`'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30''`'`
                : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'}`}>'{category === 'all' ? 'All Services' : category}'
>>>>>>> main
>>>>>>> main
                </button>) ) }
            </div>
          </div>
        </motion.div>
<<<<<<< HEAD
'''{/* Services: Grid */}''''';';';
        <div: className='grid grid-cols-1 lg: grid-cols-2: xl:grid-cols-3: gap-8'>',;,';';
          <AnimatePresence>
            {filteredServices.map((service, index) => (<ServiceCard: key={service.id} service={service} index={index} isVisible={visibleServices.has(index) }/>) ) }
=======
<<<<<<< HEAD
&apos;&apos;'{/* Services Grid */}&apos;&apos;'&apos;&apos;'
        <div className=&apos;grid grid-cols-1 lg:grid-cols-2 x,l:grid-cols-3 gap-8&apos;>&apos;'
=======
'''{/* Services Grid */}'''''
        <div className='grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8'>
>>>>>>> main
          <AnimatePresence>
            {filteredServices.map((service, index) => (}<ServiceCard key={service.id} service={service} index={index} isVisible={visibleServices.has(index) }/>) ) }
>>>>>>> main
          </AnimatePresence>
        </div>
        {/* Call to Action */}
        <motion.div initial = {}
<<<<<<< HEAD
  { opacity:  ,0,
  y: 5,0}} animate: = {}
  { opacity:  ,1,
  y:  ,0}} transition: = {}
  { duration: 0.,8,
  delay: 0.5: ''';',;,';';
''''}} className='text-center: mt-20'>''''';';';
          <div: className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30'>''''';';';
            <h2: className='text-3xl lg: text-4xl: font-bold text-white mb-6'>',;,';';
              Ready: to Transform Your Business?'''';';';
            </h2>''''';';';
            <p: className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>';';';
              Get: in touch with our experts to discuss how these advanced micro SAAS solutions can revolutionize your operations'''';';';
            </p>''''';';';
            <div: className='flex flex-col sm: flex-row: items-center justify-center space-y-4 sm:space-y-0: sm:space-x-6'>''''',;,';';
              <button: className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover: from-cyan-400: hover:to-blue-400: transition-all duration-300 transform hover:scale-105: shadow-lg shadow-cyan-500/30'>',;,';';
                Schedule: Consultation'''';';';
              </button>''''';';';
              <button: className='px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover: bg-cyan-500/20: transition-all duration-300 transform hover:scale-105'>',;,';';
                View: All Services
=======
  { opacity: 0, y: 50}} animate = {}
  { opacity: 1,
  y: 0}} transition = {}
<<<<<<< HEAD
  { duration: 0.8,
  delay: 0.5 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;text-center mt-20&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30&apos;>'&apos;&apos;'&apos;&apos;
            <h2 className=&apos;text-3xl lg:text-4xl font-bold text-white mb-6&apos;>
              Ready to Transform Your Business?&apos;&apos;'&apos;&apos;
            </h2>&apos;&apos;'&apos;&apos;'
            <p className=&apos;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&apos;>
              Get in touch with our experts to discuss how these advanced micro SAAS solutions can revolutionize your operations&apos;&apos;'&apos;&apos;
            </p>&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&apos;>'&apos;&apos;'&apos;&apos;
              <button className=&apos;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30&apos;>
                Schedule Consultation&apos;&apos;'&apos;&apos;
              </button>&apos;&apos;'&apos;&apos;'
              <button className=&apos;px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hove,r:scale-105&apos;>
                View All Services&apos;
=======
  { duration: 0.8, delay: 0.5 ''';'
''''}} className='text-center mt-20'>''''
          <div className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30'>''''
            <h2 className='text-3xl lg: text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?''''
            </h2>''''
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Get in touch with our experts to discuss how these advanced micro SAAS solutions can revolutionize your operations''''
            </p>''''
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>''''
              <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'>
                Schedule Consultation''''
              </button>''''
              <button className='px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105'>
                View All Services
>>>>>>> main
>>>>>>> main
              </button>
            </div>
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD
    </div>)}''`;';';`;
''`'"`";";`;
=======
<<<<<<< HEAD
    </div>)}''`
''`'"`'"
=======
<<<<<<< HEAD
    </div>)}&apos;&apos;`;
&apos;&apos;`&apos;&quot;`&quot;"
=======
    </div>)}''`;
''`'"`'"
=======
import React, { useState, useEffect }  from 'react;'
import { motion, AnimatePresence } from 'framer-motion
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';
const ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false)
    return (<motion .div initial = {}
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
