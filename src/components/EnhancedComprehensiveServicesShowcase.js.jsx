import React from 'react';'
 const EnhancedComprehensiveServicesShowcase = () => { const [activeCategory, setActiveCategory] = useState ('all')  const [searchTerm, setSearchTerm] = useState (')  const [selectedService, setSelectedService] = useState (null)  const allServices = [ ...advancedInnovativeServicesExpansionV3.map (service => ({ ...service, type: 'Advanced AI & Innovation', displayPrice: service.price}) ) , ...specializedEnterpriseSolutions2025.map (service => ({ ...service, type: 'Specialized Enterprise', displayPrice: service.price}) ) ] const filteredServices = allServices.filter (service => { const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.category.toLowerCase () .includes (searchTerm.toLowerCase () )  return matchesCategory && matchesSearch })  const categories = [' { id: 'all', name: 'All Services', count: allServices.length }, { id: 'Advanced AI & Innovation', name: 'Advanced AI & Innovation', count: advancedInnovativeServicesExpansionV3.length}, { id: 'Specialized Enterprise', name: 'Specialized Enterprise', count: specializedEnterpriseSolutions2025.length}] const handleServiceClick = service => { setSelectedService (service)  } const closeModal = () => { setSelectedService (null)  } return () <div className='min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text - white'></di> {}' <section className='py - 20 px - 4 sm: px - 6 lg:px - 8'></sectio>' <div className='max - w-7xl mx - auto text - center'></di>' <h1 className='text - 4xl md:text - 6xl font - bold mb - 6'></h> Zion Tech Group' <span className='text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400'></spa> {'} Innovative Services 2025 </span> </h1>' <p className='text - xl text - gray - 300 mb - 8 max - w-4xl mx - auto'> Discover our cutting - edge portfolio of micro SAAS solutions, IT services, and AI - powered innovations designed to transform your business and drive competitive advantage in the digital age </p> {}' <div className='grid grid - cols - 1 md: grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 12'></di>' <div className='bg - white / 10 backdrop - blur - lg rounded - lg p - 6 border border - white / 20'></di>' <div className='text - 3xl font - bold text - blue - 400 mb - 2'></di> {allServices.length}+ </div>' <div className='text - sm text - gray - 300'></di>Innovative Services</div> </div>' <div className='bg - white / 10 backdrop - blur - lg rounded - lg p - 6 border border - white / 20'></di>' <div className='text - 3xl font - bold text - cyan - 400 mb - 2'></di>15+</div>' <div className='text - sm text - gray - 300'></di>Technology Categories</div> </div>' <div className='bg - white / 10 backdrop - blur - lg rounded - lg p - 6 border border - white / 20'></di>' <div className='text - 3xl font - bold text - green - 400 mb - 2'></di>99%</div>' <div className='text - sm text - gray - 300'></di>Client Satisfaction</div> </div>' <div className='bg - white / 10 backdrop - blur - lg rounded - lg p - 6 border border - white / 20'></di>' <div className='text - 3xl font - bold text - purple - 400 mb - 2'></di> 24 / 7 </div>' <div className='text - sm text - gray - 300'></di>Support Available</div> </div> </div> {}' <div className='max - w-2xl mx - auto mb - 8'></di>' <div className='relative'></di> <input ' type='text' placeholder='Search services, features, or technologies...' value={searchTerm} onChange={e = / / /" ></input> setSearchTerm (e.target.value) }' className='w - full px - 4 py - 3 bg - white / 10 backdrop - blur - lg border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:border - blue - 400' /> <svg ' className='absolute right - 3 top - 3 h - 6 w - 6 text - gray - 400' fill='none' stroke='currentColor' viewBox='0 0 24 24'" ></sv> <path ' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}' d='M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z' /" ></path> </svg> </div> </div> {}' <div className='flex flex - wrap justify - center gap - 4 mb - 12'></di> {categories.map (category => (<button key={category.id} onClick={ () =" ></butto> setActiveCategory (category.id) } className={`px - 6 py - 3 rounded - lg font - semibold transition - all duration - 300 ${ activeCategory === category.id' ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white' : 'bg - white / 10 backdrop - blur - lg border border - white / 20 text - gray - 300 hover:bg - white / 20'` }`} > {category.name} ({category.count}) </button>) ) } </div> </div> </section> {}' <section className='py - 20 px - 4 sm: px - 6 lg:px - 8'></sectio>' <div className='max - w-7xl mx - auto'></di>' <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'></di> {filteredServices.map ( (service, index) => (<div key={service.id} onClick={ () =" ></di> handleServiceClick (service) }' className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20 hover: border - white / 40 transition - all duration - 300 hover:transform hover:scale - 105 cursor - pointer' >' <div className='text - 4xl mb - 4'></di>{service.icon}</div>' <h3 className='text - xl font - semibold text - white mb - 3'></h> {service.name} </h3>' <p className='text - gray - 300 mb - 4 line - clamp - 3'> {service.description} </p> ' <div className='mb - 4'></di>' <span className='inline - block px - 3 py - 1 bg - blue - 600 / 20 text - blue - 400 text - sm rounded - full border border - blue - 600 / 30'></spa> {service.category} </span> </div> ' <div className='mb - 6'></di>' <div className='text - 2xl font - bold text - green - 400 mb - 2'></di> {service.price} </div>' <div className='text - sm text - gray - 400'></di>{service.period}</div> </div> ' <div className='mb - 6'></di>' <h4 className='text - sm font - semibold text - blue - 400 mb - 2'></h> Key Features: </h4>' <ul className='space - y-1'></u> {service.features.slice (0, 3) .map ( (feature, idx) => (<li key={idx}' className='text - sm text - gray - 300 flex items - center'" ></l>' <span className='w - 2 h - 2 bg - blue - 400 rounded - full mr - 2'></spa></span> {feature} </li>) ) } {service.features.length > 3 && (' <li className='text - sm text - gray - 400 flex items - center'></l>' <span className='w - 2 h - 2 bg - gray - 400 rounded - full mr - 2'></spa></span> +{service.features.length - 3} more features </li>) } </ul> </div> ' <div className='flex items - center justify - between'></di>' <div className='flex items - center space - x-2'></di>' <div className='flex text - yellow - 400'></di> {[...Array (5) ].map ( (_, i) => (<svg key={i}'` className={`w - 4 h - 4 ${i < Math.floor (service.rating) ? 'fill - current' : 'fill - gray - 600'}`}' viewBox='0 0 20 20'" ></sv>' <path d='M10 15l - 5.878 3.09 1.123 - 6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955 - 4.756 4.635 1.123 6.545z' /" ></path> </svg>) ) } </div>' <span className='text - sm text - gray - 400'></spa> ({service.reviews}) </span> </div>' <button className='text - blue - 400 hover: text - blue - 300 transition - colors duration - 300'></butto> Learn More </button> </div> </div>) ) } </div> </div> </section> {}' <section className='py - 20 px - 4 sm: px - 6 lg:px - 8 bg - white / 5'></sectio>' <div className='max - w-7xl mx - auto'></di>' <div className='text - center mb - 16'></di>' <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 4'></h> Why Choose Zion Tech Group? </h2>' <p className='text - xl text - gray - 300 max - w-3xl mx - auto'> We combine cutting - edge technology with proven business expertise to deliver solutions that drive real results </p> </div> ' <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'></di>' <div className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20'></di>' <div className='text - 4xl mb - 4'></di></div>' <h3 className='text - xl font - semibold text - white mb - 3'></h> Innovation First </h3>' <p className='text - gray - 300'> We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions </p> </div> ' <div className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20'></di>' <div className='text - 4xl mb - 4'></di></div>' <h3 className='text - xl font - semibold text - white mb - 3'></h> Business Focused </h3>' <p className='text - gray - 300'> Every solution is designed with ROI in mind, ensuring measurable business impact and value creation </p> </div> ' <div className='bg - white / 10 backdrop - blur - lg rounded - xl p - 6 border border - white / 20'></di>' <div className='text - 4xl mb - 4'></di></div>' <h3 className='text - xl font - semibold text - white mb - 3'></h> Enterprise Grade </h3>' <p className='text - gray - 300'> Built with security, scalability, and compliance in mind for enterprise - level reliability </p> </div> </div> </div> </section> {}' <section className='py - 20 bg - gradient - to - r from - blue - 900 / 50 to - cyan - 900 / 50'></sectio>' <div className='max - w-4xl mx - auto text - center'></di>' <h2 className='text - 3xl md: text - 4xl font - bold text - white mb - 6'></h> Ready to Transform Your Business? </h2>' <p className='text - xl text - gray - 300 mb - 8'> Let & quot;s discuss how our innovative services can help drive your digital transformation and competitive advantage </p>' <div className='flex flex - col sm: flex - row gap - 4 justify - center'></di> <a ' href='mailto:kleber@ziontechgroup.com' className='inline - flex items - center px - 8 py - 3 bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300'" > Get Custom Quote </a> <a ' href='tel:+13024640950' className='inline - flex items - center px - 8 py - 3 border border - gray - 600 text - white font - semibold rounded - lg hover:bg - gray - 800 transition - all duration - 300'" > Call Us: +1 302 464 0950 </a> </div> </div> </section> {} {selectedService && (' <div className='fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 50 flex items - center justify - center p - 4'></di>' <div className='bg - slate - 800 rounded - xl max - w-4xl w - full max - h-[90vh] overflow - y-auto'></di>' <div className='p - 6'></di>' <div className='flex justify - between items - start mb - 6'></di> <div></di>' <div className='text - 4xl mb - 4'></di>{selectedService.icon}</div>' <h2 className='text - 3xl font - bold text - white mb - 2'></h> {selectedService.name} </h2>' <p className='text - xl text - gray - 300 mb - 4'> {selectedService.tagline} </p> </div> <button onClick={closeModal}' className='text - gray - 400 hover: text - white transition - colors duration - 300'" ></butto> <svg ' className='w - 8 h - 8' fill='none' stroke='currentColor' viewBox='0 0 24 24'" ></sv> <path ' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}' d='M6 18L18 6M6 6l12 12' /" ></path> </svg> </button> </div> ' <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'></di> <div></di>' <h3 className='text - xl font - semibold text - white mb - 4'></h> Service Overview </h3>' <p className='text - gray - 300 mb - 6'> {selectedService.description} </p> ' <div className='mb - 6'></di>' <h4 className='text - lg font - semibold text - white mb - 3'></h> Key Features </h4>' <ul className='space - y-2'></u> {selectedService.features.map ( (feature, idx) => (<li key={idx}' className='text - gray - 300 flex items - center'" ></l>' <span className='w - 2 h - 2 bg - blue - 400 rounded - full mr - 3'></spa></span> {feature} </li>) ) } </ul> </div> ' <div className='mb - 6'></di>' <h4 className='text - lg font - semibold text - white mb - 3'></h> Technology Stack </h4>' <div className='flex flex - wrap gap - 2'></di> {selectedService.technology.map ( (tech, idx) => (<span key={idx}' className='px - 3 py - 1 bg - blue - 600 / 20 text - blue - 400 text - sm rounded - full border border - blue - 600 / 30'" ></spa> {tech} </span>) ) } </div> </div> </div> <div></di>' <div className='bg - white / 10 rounded - lg p - 6 mb - 6'></di>' <h4 className='text - lg font - semibold text - white mb - 4'></h> Pricing & Plans </h4>' <div className='text - 3xl font - bold text - green - 400 mb - 2'></di> {selectedService.price} </div>' <div className='text - gray - 400 mb - 4'></di> {selectedService.period} </div> {selectedService.setupFee && (' <div className='mb - 2'></di>' <span className='text - gray - 400'></spa>Setup Fee: </span>' <span className='text - white'></spa> {selectedService.setupFee} </span> </div>) } {selectedService.annualDiscount && (' <div className='mb - 2'></di>' <span className='text - gray - 400'></spa>Annual Discount: </span>' <span className='text - white'></spa> {selectedService.annualDiscount} </span> </div>) } </div> ' <div className='bg - white / 10 rounded - lg p - 6 mb - 6'></di>' <h4 className='text - lg font - semibold text - white mb - 4'></h> Business Impact </h4>' <div className='mb - 4'></di>' <h5 className='text - blue - 400 font - semibold mb - 2'></h>ROI</h5>' <p className='text - gray - 300 text - sm'> {selectedService.roi} </p> </div>' <div className='mb - 4'></di>' <h5 className='text - blue - 400 font - semibold mb - 2'></h> Market Position </h5>' <p className='text - gray - 300 text - sm'> {selectedService.marketPosition} </p> </div> <div></di>' <h5 className='text - blue - 400 font - semibold mb - 2'></h> Target Audience </h5>' <p className='text - gray - 300 text - sm'> {selectedService.targetAudience} </p> </div> </div> ' <div className='bg - white / 10 rounded - lg p - 6'></di>' <h4 className='text - lg font - semibold text - white mb - 4'></h> Get Started </h4>' <div className='space - y-3'></di> <a ` href={`mailto: ${selectedService.contactInfo.email}?subject = Inquiry about ${selectedService.name}`}' className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300'" > Request Demo </a> <a ` href={`tel:${selectedService.contactInfo.mobile}`}' className='block w - full text - center px - 6 py - 3 border border - gray - 600 text - white font - semibold rounded - lg hover:bg - gray - 800 transition - all duration - 300'" > Call Us: {selectedService.contactInfo.mobile} </a> </div> </div> </div> </div> </div> </div> </div>) } </div>)  } export default EnhancedComprehensiveServicesShowcase'` ;'`;import React, { useState } from 'react';"
"'"
const EnhancedComprehensiveServicesShowcase = () => {"'"'"
    const [activeCategory, setActiveCategory] = useState('all')"'
    const [searchTerm, setSearchTerm] = useState()
    const [selectedService, setSelectedService] = useState(null)"
    const allServices = ["'"
        ...advancedInnovativeServicesExpansionV3.map(service => ({"''"
            ...service, type: 'Advanced AI & Innovation', displayPrice: service.price,"'"
})), ...specializedEnterpriseSolutions2025.map(service => ({"''
            ...service, type: 'Specialized Enterprise', displayPrice: service.price,
})),
]
    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.category.toLowerCase().includes(searchTerm.toLowerCase())"
        return matchesCategory && matchesSearch})"'"
    const categories = ["''
        { id: 'all', name: 'All Services', count: allServices.length }, { id: 'Advanced AI & Innovation', name: 'Advanced AI & Innovation', count: advancedInnovativeServicesExpansionV3.length }, { id: 'Specialized Enterprise', name: 'Specialized Enterprise', count: specializedEnterpriseSolutions2025.length }
    ]
    const handleServiceClick = (service) => {
        setSelectedService(service)}"
    const closeModal = () => {"'"
        setSelectedService(null)}"''"
    return (<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'></div>"'"
      {/* Header Section */}"'"'"
      <section className='py-20 px-4 sm:px-6 lg:px-8'></section>"'"'"
        <div className='max-w-7xl mx-auto text-center'></div>"''"
          <h1 className='text-4xl md:text-6xl font-bold mb-6'></h1>"'"
            Zion Tech Group"'"'"
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'></span>"''"
              {' '}Innovative Services 2025"'"
            </span>"''
          </h1>          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'></p>
            Discover our cutting-edge portfolio of micro SAAS solutions, IT
            services, and AI-powered innovations designed to transform your"
            business and drive competitive advantage in the digital age"'"
          </p>"'
'
          {/* Key Statistics */}''
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'></div>''"
            <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20'></div>'"'"
              <div className='text-3xl font-bold text-blue-400 mb-2'></div>"'
                {allServices.length}+'
              </div>''
              <div className='text-sm text-gray-300'></di>Innovative Services</div>'
            </div>''
            <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20'></div>''
              <div className='text-3xl font-bold text-cyan-400 mb-2'></di>15+</div>''
              <div className='text-sm text-gray-300'></di>Technology Categories</div>'
            </div>''
            <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20'></div>''
              <div className='text-3xl font-bold text-green-400 mb-2'></di>99%</div>''
              <div className='text-sm text-gray-300'></di>Client Satisfaction</div>'
            </div>''"
            <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20'></div>'"'"
              <div className='text-3xl font-bold text-purple-400 mb-2'></div>"'
                24/7'
              </div>''
              <div className='text-sm text-gray-300'></di>Support Available</div>"
            </div>"'"
          </div>"'
'
          {/* Search and Filter */}''
          <div className='max-w-2xl mx-auto mb-8'></div>''
            <div className='relative'></div>'
              <input ''
                type='text''
                placeholder='Search services, features, or technologies..."
                value={searchTerm}"'"
                onChange={e =" ></input> setSearchTerm(e.target.value)}''
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400
              />'
              <svg ''
                className='absolute right-3 top-3 h-6 w-6 text-gray-400''
                fill='none''"
                stroke='currentColor'"'"
                viewBox='0 0 24 24'" ></svg>'
                <path ''
                  strokeLinecap='round''
                  strokeLinejoin='round''
                  strokeWidth={2}''"
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'""
                /" ></path>
              </svg>"
            </div>"'"
          </div>"'
'
          {/* Category Filter */}''
          <div className='flex flex-wrap justify-center gap-4 mb-12'></div>
            {categories.map(category => ("
              <button key={category.id}""
                onClick={() =" ></button> setActiveCategory(category.id)}`"'"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${}"'
'"
`'"'"
'`"`'"'"
                  activeCategory === category.id'`'`"`'"'"
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'`'`'`"`''
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'````,`
}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>"
        </div>"'"
      </section>"'
'
      {/* Services Grid */}''
      <section className='py-20 px-4 sm:px-6 lg:px-8'></section>''
        <div className='max-w-7xl mx-auto'></div>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>"
            {filteredServices.map((service, index) => ("'"
              <div "'"
                key={service.id}"'"
                onClick={() =" ></div> handleServiceClick(service)}''
                className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer''
              >''"
                <div className='text-4xl mb-4'></di>{service.icon}</div>'"'"
                <h3 className='text-xl font-semibold text-white mb-3'></h3>"'
                  {service.name}'
                </h3>''"
                <p className='text-gray-300 mb-4 line-clamp-3'></p>"'"
                  {service.description}"'
                </p>'
''
                <div className='mb-4'></div>''
                  <span className='inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30'></span>"
                    {service.category}"'"
                  </span>"'
                </div>'
''"
                <div className='mb-6'></div>'"'"
                  <div className='text-2xl font-bold text-green-400 mb-2'></div>"'
                    {service.price}'"
                  </div>'"'"
                  <div className='text-sm text-gray-400'></di>{service.period}</div>"'
                </div>'
''"
                <div className='mb-6'></div>'"'"
                  <h4 className='text-sm font-semibold text-blue-400 mb-2'></h4>"'
                    Key Features:'
                  </h4>''"
                  <ul className='space-y-1'></ul>"'"
                    {service.features.slice(0, 3).map((feature, idx) => ("'
                      <li '"
                        key={idx}'"'"
                        className='text-sm text-gray-300 flex items-center" ></li>''
                        <span className='w-2 h-2 bg-blue-400 rounded-full mr-2'></spa></span>"
                        {feature}"'"
                      </li>"'
                    ))}'
                    {service.features.length > 3 && (''
                      <li className='text-sm text-gray-400 flex items-center'></li>''
                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-2'></spa></span>
                        +{service.features.length-3} more features
                      </li>"
                    )}"'"
                  </ul>"'
                </div>'
''
                <div className='flex items-center justify-between'></div>''
                  <div className='flex items-center space-x-2'></div>''"
                    <div className='flex text-yellow-400'></div>"'"
                      {[...Array(5)].map((_, i) => ("`'"'"
                        <svg '`"`'"'"
                          key={i}'``"`''"
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`}'"'"
                          viewBox='0 0 20 20" ></svg>'"'"
                          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' /" ></path>"'"
                        </svg>"'
                      ))}'
                    </div>''"
                    <span className='text-sm text-gray-400'></span>"'"
                      ({service.reviews})"'
                    </span>'
                  </div>''
                  <button className='text-blue-400 hover:text-blue-300 transition-colors duration-300'></button>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>"
        </div>"'"
      </section>"'
'
      {/* Why Choose Zion Tech Group */}''
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white/5'></section>''
        <div className='max-w-7xl mx-auto'></div>''"
          <div className='text-center mb-16'></div>'"'"
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'></h2>"'
              Why Choose Zion Tech Group?'
            </h2>''
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
              We combine cutting-edge technology with proven business expertise"
              to deliver solutions that drive real results"'"
            </p>"'
          </div>'
''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>''
            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'></div>''"
              <div className='text-4xl mb-4'></di>🚀</div>'"'"
              <h3 className='text-xl font-semibold text-white mb-3'></h3>"'
                Innovation First'
              </h3>''
              <p className='text-gray-300'></p>"
                We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions"'"
              </p>"'
            </div>'
''
            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'></div>''"
              <div className='text-4xl mb-4'></di>💼</div>'"'"
              <h3 className='text-xl font-semibold text-white mb-3'></h3>"'
                Business Focused'
              </h3>''
              <p className='text-gray-300'></p>
                Every solution is designed with ROI in mind, ensuring measurable"
                business impact and value creation"'"
              </p>"'
            </div>'
''
            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'></div>''"
              <div className='text-4xl mb-4'></di>🔒</div>'"'"
              <h3 className='text-xl font-semibold text-white mb-3'></h3>"'
                Enterprise Grade'
              </h3>''
              <p className='text-gray-300'></p>
                Built with security, scalability, and compliance in mind for
                enterprise-level reliability
              </p>
            </div>
          </div>"
        </div>"'"
      </section>"'
'
      {/* CTA Section */}''
      <section className='py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50'></section>''"
        <div className='max-w-4xl mx-auto text-center'></div>'"'"
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'></h2>"'
            Ready to Transform Your Business?'
          </h2>''"
          <p className='text-xl text-gray-300 mb-8'></p>"'"
            Let's discuss how our innovative services can help drive your"'
            digital transformation and competitive advantage'
          </p>''
          <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>'
            <a''
              href='mailto:kleber@ziontechgroup.com''"
              className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 '></a>"'"
              Get Custom Quote"'
            </a>'
            <a''
              href='tel:+13024640950''
              className='inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 '></a>
              Call Us: +1 302 464 0950
            </a>
          </div>"
        </div>"'"
      </section>"'
      {/* Service Detail Modal */}'
      {selectedService && (''
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'></div>''
          <div className='bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'></div>''
            <div className='p-6'></div>''
              <div className='flex justify-between items-start mb-6'></div>'
                <div></div>''"
                  <div className='text-4xl mb-4'></di>{selectedService.icon}</div>'"'"
                  <h2 className='text-3xl font-bold text-white mb-2'></h2>"'
                    {selectedService.name}'
                  </h2>''
                  <p className='text-xl text-gray-300 mb-4'></p>
                    {selectedService.tagline}"
                  </p>"'"
                </div>"'
                <button'
                  onClick={closeModal}''
                  className='text-gray-400 hover:text-white transition-colors duration-300 '></button>'
                  <svg ''
                    className='w-8 h-8''
                    fill='none''"
                    stroke='currentColor'"'"
                    viewBox='0 0 24 24'" ></svg>'
                    <path ''
                      strokeLinecap='round''
                      strokeLinejoin='round''
                      strokeWidth={2}''"
                      d='M6 18L18 6M6 6l12 12'""
                    /" ></path>"
                  </svg>"'"
                </button>"'
              </div>'
''
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'></div>'"
                <div></div>'"'"
                  <h3 className='text-xl font-semibold text-white mb-4'></h3>"'
                    Service Overview'
                  </h3>''"
                  <p className='text-gray-300 mb-6'></p>"'"
                    {selectedService.description}"'
                  </p>'
''"
                  <div className='mb-6'></div>'"'"
                    <h4 className='text-lg font-semibold text-white mb-3'></h4>"'
                      Key Features'
                    </h4>''"
                    <ul className='space-y-2'></ul>"'"
                      {selectedService.features.map((feature, idx) => ("'
                        <li '"
                          key={idx}'"'"
                          className='text-gray-300 flex items-center" ></li>''
                          <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></spa></span>
                          {feature}
                        </li>"
                      ))}"'"
                    </ul>"'
                  </div>'
''"
                  <div className='mb-6'></div>'"'"
                    <h4 className='text-lg font-semibold text-white mb-3'></h4>"'
                      Technology Stack'
                    </h4>''"
                    <div className='flex flex-wrap gap-2'></div>"'"
                      {selectedService.technology.map((tech, idx) => ("'
                        <span'
                          key={idx}''
                          className='px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30 '></span>
                          {tech}
                        </span>
                      ))}
                    </div>"
                  </div>"'"
                </div>"'
'
                <div></div>''"
                  <div className='bg-white/10 rounded-lg p-6 mb-6'></div>'"'"
                    <h4 className='text-lg font-semibold text-white mb-4'></h4>"'
                      Pricing & Plans'"
                    </h4>'"'"
                    <div className='text-3xl font-bold text-green-400 mb-2'></div>"'
                      {selectedService.price}'
                    </div>''
                    <div className='text-gray-400 mb-4'></div>"
                      {selectedService.period}"'"
                    </div>"'
'
                    {selectedService.setupFee && (''
                      <div className='mb-2'></div>''
                        <span className='text-gray-400'></spa>Setup Fee: </span>''
                        <span className='text-white'></span>
                          {selectedService.setupFee}
                        </span>"
                      </div>"'"
                    )}"'
'
                    {selectedService.annualDiscount && (''
                      <div className='mb-2'></div>''
                        <span className='text-gray-400'></spa>Annual Discount: </span>''
                        <span className='text-white'></span>
                          {selectedService.annualDiscount}
                        </span>"
                      </div>"'"
                    )}"'
                  </div>'
''"
                  <div className='bg-white/10 rounded-lg p-6 mb-6'></div>'"'"
                    <h4 className='text-lg font-semibold text-white mb-4'></h4>"'
                      Business Impact'
                    </h4>''
                    <div className='mb-4'></div>''
                      <h5 className='text-blue-400 font-semibold mb-2'></h>ROI</h5>''"
                      <p className='text-gray-300 text-sm'></p>"'"
                        {selectedService.roi}"'
                      </p>'
                    </div>''"
                    <div className='mb-4'></div>'"'"
                      <h5 className='text-blue-400 font-semibold mb-2'></h5>"'
                        Market Position'
                      </h5>''
                      <p className='text-gray-300 text-sm'></p>"
                        {selectedService.marketPosition}"'"
                      </p>"'
                    </div>'"
                    <div></div>'"'"
                      <h5 className='text-blue-400 font-semibold mb-2'></h5>"'
                        Target Audience'
                      </h5>''
                      <p className='text-gray-300 text-sm'></p>
                        {selectedService.targetAudience}"
                      </p>"'"
                    </div>"'
                  </div>'
''"
                  <div className='bg-white/10 rounded-lg p-6'></div>'"'"
                    <h4 className='text-lg font-semibold text-white mb-4'></h4>"'
                      Get Started'"
                    </h4>`'"'"
                    <div className='space-y-3'></div>`"`'"'"
                      <a`'`"`''
                        href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`}''
                        className='block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 '></a>"
                        Request Demo`"'"
                      </a>`"`'"'"
                      <a`'`"`''"
                        href={`tel:${selectedService.contactInfo.mobile}`}'"'"
                        className='block w-full text-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 "></a>
                        Call Us: {selectedService.contactInfo.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </div>)}
export default EnhancedComprehensiveServicesShowcase

export { EnhancedComprehensiveServicesShowcase }

export { EnhancedComprehensiveServicesShowcase }

export { EnhancedComprehensiveServicesShowcase }

export { EnhancedComprehensiveServicesShowcase }
;"
export { EnhancedComprehensiveServicesShowcase };"'"
;"`'"'"