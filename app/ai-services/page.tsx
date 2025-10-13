import { Helmet , Link  } from "react-helmet-async";
import { ArrowRight, Zap } from "lucide-react";
const AIServicesPage = () => {
;
<>
      <Helmet>
;
  return (
    <>
      </Helmet><Helmet /><title>AI Services - Zion Tech Group</title>
<meta name="description" content="Comprehensive AI services including chatbots, analytics, computer vision, content generation, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, computer vision" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4" /><div className="max-w-7xl mx-auto text-center" /><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI </h1><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From chatbots to computer vision, we deliver intelligent solutions that drive results.</p>
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8" /><div className="relative" /><input;
                  type="text"
                  placeholder="Search AI services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>
<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400" /><span className="flex items-center" /><CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                500+ Projects Completed;
              </span>
              <span className="flex items-center" /><Star className="w-4 h-4 mr-2 text-yellow-400" />
                95% Client Satisfaction;
              </span>
              <span className="flex items-center" /><TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                60% Cost Reduction;
            </div>
          </div>
        </section>
{/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/30" /><div className="max-w-7xl mx-auto" /><div className="grid gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                </div><div key={index} className="text-center" /><div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Category Filter */}
        <section className="py-8 px-4" /><div className="max-w-7xl mx-auto" /><div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                </div><button;
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category;
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}</button>
                </button>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 px-4" /><div className="max-w-7xl mx-auto" /><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                </div><div;
                  key={service.id}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 ${
                    service.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {service.popular && (
                    </div><div className="flex items-center mb-4" /><Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4" /><service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6" /><h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300" /><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mb-6" /><h4 className="text-sm font-medium text-gray-300">Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300" /><TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4" /><span className="text-cyan-400 font-semibold">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between" /><span className="text-sm text-gray-500 bg-slate-700 px-3 py-1 rounded-full">
                      {service.category}</span>
                    </span>
                    <Link;
                      to={`/ai-services/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      Learn More;
                      </Link><ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
{filteredServices.length === 0 && (
              <div className="text-center py-12" /><Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-4">No AI services found matching your search.</p>
                <button;
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters</button>
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><Link;
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started;
                </Link><ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                View Demos;
                </Link><Brain className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><EnhancedSEO;
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, content generation, customer support, cybersecurity, and workflow automation."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI content generation, AI customer support, AI cybersecurity, workflow automation"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation across all industries.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              </div><div;
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group"
               /><div className="flex items-center mb-4" /><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}</h3>
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}</p>
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center text-sm text-gray-300" /><CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More;
                  </Link><ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-16" /><h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify the best opportunities for AI implementation ;
              in your organization and create a customized solution that drives real results.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today;
                </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link;
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule a Demo;
                </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
;