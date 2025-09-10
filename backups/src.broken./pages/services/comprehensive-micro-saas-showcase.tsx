import React from 'react';
import Link from 'next/link';
import {};
} from 'lucide-react';
import { REAL_MICRO_SAAS_SERVICES_2025 } from '../../data/realMicroSaasServices2025';
;
const ComprehensiveMicroSaasShowcase: React.FC = () => {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const featuredServices = REAL_MICRO_SAAS_SERVICES_2025.filter(service => service.featured).slice(0, 6);

  return (;
    <div className="min-h-screen bg-white">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Revolutionary AI Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Comprehensive AI Micro SAAS Solutions
          </h1>
          <p className="text-indigo-100 text-xl mb-8">
            Discover our complete suite of {stats.totalServices} cutting-edge AI micro SAAS services. 
            From business intelligence to cybersecurity, we provide real solutions with proven ROI.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{stats.totalServices}</div>
              <div className="text-indigo-100 text-sm">AI Services</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{stats.averageRating}</div>
              <div className="text-indigo-100 text-sm">Average Rating</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{stats.totalReviews}</div>
              <div className="text-indigo-100 text-sm">Total Reviews</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">${stats.averagePrice}</div>
              <div className="text-indigo-100 text-sm">Avg. Price/Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="https://ziontechgroup.com" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="reviewCount">Sort by Reviews</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredServices.length} of {REAL_MICRO_SAAS_SERVICES_2025.length} services
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-600">{service.category}</span>
                      {service.subcategory && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{service.subcategory}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {service.featured && (
                    <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>;
              )})}
          </div>;
        </div>;
      </section>;

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>

                {/* Rating and Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({service.reviewCount})</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 text-indigo-500" />
                    <span className="ml-1 text-sm font-medium">{service.aiScore}%</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-indigo-600">
                        {service.currency}{service.price}/{service.pricingModel}
                      </div>
                      <div className="text-sm text-gray-600">{service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">AI Score</div>
                      <div className="text-lg font-bold text-indigo-600">{service.aiScore}%</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={service.website}
                    className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailto:${service.contactEmail}?subject=Interest in ${service.title}`}
                    className="flex-1 border border-indigo-600 text-indigo-600 text-center py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <h2 className="text-4xl md:text-5xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-indigo-100 mb-8">;
            Join hundreds of companies already using our AI solutions to drive growth and innovation;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
              <Phone className="w-5 h-5 mr-2" />;
              Call +1 302 464 0950;
            </Link>;
            <div>Broken JSX</div>
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">;
              <Mail className="w-5 h-5 mr-2" />;
              Email Us;
            </Link>;
          </div>;
          <div className="mt-8 text-indigo-200">;
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
            <p>🌐 <Link href="https://ziontechgroup.com" className="hover:text-white">ziontechgroup.com</Link></p>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
export default ComprehensiveMicroSaasShowcase;