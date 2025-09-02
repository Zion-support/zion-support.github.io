import React, { useState, useEffect } from 'react';'
import React from 'react';'
import { motion, AnimatePresence } from 'framer-motion';"''
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';
const ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false)
    return (<motion .div initial = {}
  { opacity: 0, y: 50, scale: 0.9,
}} animate = {}"
  isVisible ? { opacity: 1, y: 0, scale: 1,"'"
} : {}} transition = {}"'
  { duration: 0.6, delay: index * 0.1 '"
,'"'"
}} className='relative group' onHoverStart={() =" ></motion> setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>'"
      {/* Animated Background */}'"'"
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></di></div>"'"
      {/* Neon Border Effect */}"'"
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered`"`'"'"
            ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]``"`'"'"
            : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30'}`}" ></div>''
        <div className='relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full'></div>'
          {/* Floating Particles */}''
          <div className='absolute inset-0 overflow-hidden pointer-events-none'></div>''
            {[...Array(8)].map((_, i) => (<motion .div key={i} className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60' animate = {}
  {}
                x[0, Math.random() * 100 - 50], y[0, Math.random() * 100 - 50], opacity[0.6, 0.2, 0.6], ,"
}} transition = {}"'"
  {}"'
                duration: 3 + Math.random() * 2,'
                repeat: Infinity,''
                ease: 'easeInOut'}} style={{}`
`
``"
                left: `${20 + Math.random() * 60}%`,``""
                top: `${20 + Math.random() * 60}%`}}/" ></motion>))}"'"
          </div>"'
'
          {/* Service Header */}''
          <div className='relative z-10'></div>''
            <div className='flex items-start justify-between mb-4'></div>''"
              <div className='flex-1'></div>'"'"
                <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'></h3>"'
                  {service.title}'
                </h3>''"
                <div className='flex items-center space-x-2 mb-3'></div>'"'"
                  <span className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30'></span>"'
                    {service.category}'
                  </span>''
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30'></span>
                    {service.subcategory}
                  </span>"
                </div>"'"
              </div>"'
              '
              {/* AI Score Badge */}''"
              {service.aiScore && (<div className='relative'></div>'"'"
                  <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'></div>"'
                    {service.aiScore}'
                  </div>''
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse'></di></div>''
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black'></di></div>"
                </div>)}"'"
            </div>"'
'
            {/* Description */}''
            <p className='text-gray-300 text-sm leading-relaxed mb-4'></p>"
              {service.description}"'"
            </p>"'
'
            {/* Features Grid */}''
            <div className='grid grid-cols-2 gap-2 mb-4'></div>''
              {service.features.slice(0, 6).map((feature, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-400'></div>''
                  <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full'></di></div>''
                  <span className='truncate'></spa>{feature}</span>"
                </div>) ) }"'"
            </div>"'
'
            {/* Benefits */}''
            <div className='mb-4'></div>''
              <h4 className='text-sm font-semibold text-cyan-400 mb-2'></h>Key Benefits</h4>''
              <div className='space-y-1'></div>''
                {service.benefits.slice(0, 3).map((benefit, idx) => (<div key={idx} className='flex items-center space-x-2 text-xs text-gray-300'></div>''
                    <div className='w-1 h-1 bg-green-400 rounded-full'></di></div>
                    <span></spa>{benefit}</span>
                  </div>) ) }"
              </div>"'"
            </div>"'
'
            {/* Pricing and Contact */}''
            <div className='flex items-center justify-between pt-4 border-t border-gray-700/50'></div>'
              <div></div>''
                <div className='text-2xl font-bold text-white'></div>'
                  {service.currency}{service.price}''
                  <span className='text-sm text-gray-400 font-normal'></spa>/{service.pricingModel}</span>'"
                </div>'"'"
                <div className='text-xs text-gray-500'></di>{service.marketPrice}</div>"'
              </div>'
              ''
              <button className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'></button>
                Get Started"
              </button>"'"
            </div>"'
'
            {/* Technology Stack */}''
            {service.technologyStack && (<div className='mt-4 pt-4 border-t border-gray-700/50'></div>''
                <h4 className='text-sm font-semibold text-purple-400 mb-2'></h>Tech Stack</h4>''
                <div className='flex flex-wrap gap-1'></div>''
                  {service.technologyStack.slice(0, 4).map((tech, idx) => (<span key={idx} className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30'></span>
                      {tech}
                    </span>) ) }"
                </div>"'"
              </div>) }"'
'
            {/* Contact Info */}''
            <div className='mt-4 pt-4 border-t border-gray-700/50'></div>''
              <div className='text-xs text-gray-400 space-y-1'></div>''"
                <div className='flex items-center space-x-2'></div>'"'"
                  <span className='text-cyan-400'></spa>📞</span>"'
                  <span></spa>{service.contactInfo.phone}</span>'
                </div>''"
                <div className='flex items-center space-x-2'></div>'"'"
                  <span className='text-blue-400'></spa>✉️</span>"'
                  <span></spa>{service.contactInfo.email}</span>'
                </div>''
                <div className='flex items-center space-x-2'></div>''
                  <span className='text-purple-400'></spa>🌐</span>''
                  <a href={service.contactInfo.website} className='hover:text-purple-300 transition-colors'></a>
                    {service.contactInfo.website}
                  </a>
                </div>
              </div>"
            </div>"'"
          </div>"'
'"
          {/* Hover Effects */}'"'"
          <motion .div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' initial={false}/" ></motion>
        </div>
      </div>"
    </motion.div>)}"'"
export const FuturisticServicesShowcase = () => {}"'
'"
;'"'"
';"''
    const [selectedCategory, setSelectedCategory] = useState('all')';'
    const [searchTerm, setSearchTerm] = useState()';''
    const [visibleServices, setVisibleServices] = useState(new Set())';'
    const categories = ['all', ...new Set(ADVANCED_MICRO_SERVICES.map(s => s.category))]
    const filteredServices = ADVANCED_MICRO_SERVICES.filter(service => {}
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        return matchesCategory && matchesSearch})"
    // Set all services as visible initially for better UX"'"
    useEffect(() => {}";''
        const allIndices = new Set(filteredServices.map((_, index) => index))';'
        setVisibleServices(allIndices)}, [filteredServices])';''
    return (<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20'></div>'
      {/* Animated Background */}''
      <div className='absolute inset-0 overflow-hidden'></div>''
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5'></di></div>''
        {[...Array(20)].map((_, i) => (<div key={i} className='absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float' style={{}`
`
``
                left: `${Math.random() * 100}%`,``
                top: `${Math.random() * 100}%`,``"
                animationDelay: `${Math.random() * 5}s`,``"'"
                animationDuration: `${3 + Math.random() * 4}s`}}/" ></div>))}"'
      </div>'
''
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'></div>
        {/* Header Section */}
        <motion.div initial = {}"
  { opacity: 0, y: -50,"'"
}} animate = {}"'
  { opacity: 1, y: 0 '
,''
}} transition={{ duration: 0.8 }} className='text-center mb-16'></motion>''
          <h1 className='text-5xl lg:text-7xl font-bold mb-6'></h1>''"
            <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'></span>"'"
              Advanced Micro SAAS"'
            </span>'
          </h1>''
          <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'></p>"
            Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and next-generation technologies"'"
          </p>"'
          '
          {/* Search and Filter Controls */}''
          <div className='flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-12'></div>'
            {/* Search Bar */}''"
            <div className='relative w-full max-w-md'></div>'"'"
              <input type='text' placeholder='Search services...' value={searchTerm} onChange={(e) =" ></input> setSearchTerm(e.target.value)} className='w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'/>''
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400'></div>
                🔍"
              </div>"'"
            </div>"''"
'`'"'"
            {/* Category Filter */}`"`'"'"
            <div className='flex flex-wrap justify-center gap-2'></div>`'`"`'"'"
              {categories.map((category) => (<button key={category} onClick={() =" ></button> setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category`"`'"'"
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30`'`"`''
                : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'}`}>'
                  {category === 'all' ? 'All Services' : category}
                </button>) ) }
            </div>"
          </div>"'"
        </motion.div>"'
'
        {/* Services Grid */}''
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'></div>"
          <AnimatePresence></AnimatePresence>""
            {filteredServices.map((service, index) => (<ServiceCard key={service.id} service={service} index={index} isVisible={visibleServices.has(index) }/" ></ServiceCard>) ) }
          </AnimatePresence>
        </div>
        {/* Call to Action */}
        <motion.div initial = {}
  { opacity: 0, y: 50,
}} animate = {}"
  { opacity: 1, y: 0,"'"
}} transition = {}"'
  { duration: 0.8, delay: 0.5 '
,''
}} className='text-center mt-20'></motion>''"
          <div className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30'></div>'"'"
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'></h2>"'
              Ready to Transform Your Business?'"
            </h2>'"'"
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'></p>"'
              Get in touch with our experts to discuss how these advanced micro SAAS solutions can revolutionize your operations'
            </p>''"
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'></div>'"'"
              <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30'></button>"'
                Schedule Consultation'
              </button>''
              <button className='px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105'></button>
                View All Services
              </button>
            </div>
          </div>"
        </motion.div>"'"
      </div>"`'"'"
    </div>)}`"`'"'"
`'"`"`'"'"