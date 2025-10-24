import React from 'react';
import { Helmet } from "react-helmet-async";

const ItConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>It Consulting</title>
        <meta
          name="description"
          content="Professional it consulting solutions and services"
        />
        <meta name="keywords" content="it, consulting" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              It Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional it consulting solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}</div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>
            Professional <span className="holographic-text">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow"></p>
            Comprehensive IT solutions designed to optimize your technology infrastructure,
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"></a>
              <Phone className="w-5 h-5 inline mr-2" /></Phone>
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"></a>
              <Mail className="w-5 h-5 inline mr-2" /></Mail>
              Get IT Consultation
            </a>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8"></div>
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            {/* Category Filter */}
            <div className="lg:w-64"></div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                {categories.map((category) => ()
                  <option key={category.id} value={category.id}></option>
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                {categories.map((category) => (}
                  <option key={category.id} value={category.id}></option>
                    {category.name}
                  </option>))}
              </select>
            </div>
          </div>
              </select>
            </div>
          </div>
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8"></div>
            {categories.map((category) => (</div>
              <button}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'}
                }`}
              >
                {category.name}
              </button>))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service) => (</div>
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" /></service>
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1"></ul>
                      {service.features.slice(0, 4).map((feature, idx) => ()
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1"></ul>
                      {service.benefits.slice(0, 2).map((benefit, idx) => ()
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></TrendingUp>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>
                {service.caseStudy && ()
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                )}
                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"></a>
                    Get Free Consultation
  </
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></a>
                    <Phone className="w-4 h-4 inline mr-2" /></Phone>
                    Call for Quote
  </
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse"></h2>
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow"></p>
            Our certified IT professionals deliver reliable, secure, and scalable solutions. 
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"></a>
              <Phone className="w-5 h-5" /></Phone>
              Call (302) 464-0950
  </
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"></a>
              <Mail className="w-5 h-5" /></Mail>
              Get Custom IT Strategy
  </
          </div>
        </div>
      </section>
    </div>
  )}
export default ITConsultingPage
  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service) => (</div>}
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" /></service>
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1"></ul>
                      {service.features.slice(0, 4).map((feature, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                          <span>{feature}</span>
                        </li>))}
                    </ul>
                  </div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1"></ul>
                      {service.benefits.slice(0, 2).map((benefit, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></TrendingUp>
                          <span>{benefit}</span>
                        </li>))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>
                {service.caseStudy && (<div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>}
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>)}

                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"></a>
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></a>
                    <Phone className="w-4 h-4 inline mr-2" /></Phone>
                    Call for Quote
                  </a>
                </div>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse"></h2>
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow"></p>
            Our certified IT professionals deliver reliable, secure, and scalable solutions.
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"></a>
              <Phone className="w-5 h-5" /></Phone>
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"></a>
              <Mail className="w-5 h-5" /></Mail>
              Get Custom IT Strategy
            </a>
          </div>
        </div>
      </section>
    </div>)};export default ITConsultingPage