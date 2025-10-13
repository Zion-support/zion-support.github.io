import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';';';
import Navigation from '../components/Navigation';';';
import Footer from '../components/Footer';';';
import SEOOptimizer from '../components/SEOOptimizer';';'
;
export default function CaseStudiesPage() {;
const [selectedCategory, setSelectedCategory] = useState('all');'
;
const caseStudies = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
id: 1,
      title: 'AI-Powered Supply Chain Optimization','
      client: 'Global Manufacturing Corp','
      industry: 'Manufacturing','
      category: 'ai','
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries','
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system','
      results: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Reduced inventory waste by 45%','
        'Improved delivery times by 60%','
        'Saved $2.3 M annually in operational costs','
        'Increased customer satisfaction by 35%''
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Sensors', 'Cloud Computing'],'
      duration: '6 months','
      teamSize: '8 developers','
      image: '/images/case-studies/supply-chain-ai.webp''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: 'Cloud Migration & Digital Transformation','
      client: 'Regional Bank','
      industry: 'Financial Services','
      category: 'cloud','
      challenge: 'Legacy on-premise systems causing security vulnerabilities and scalability issues','
      solution: 'Complete cloud migration with modern microservices architecture and enhanced security','
      results: [
  // TODO: Add items
]
  // TODO: Add items
]
        '99.9% system uptime achieved','
        '50% reduction in infrastructure costs','
        'Enhanced security compliance','
        '3 x faster application deployment''
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Microservices', 'DevOps'],'
      duration: '8 months','
      teamSize: '12 developers','
      image: '/images/case-studies/cloud-migration.webp''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 3,
      title: 'Mobile Healthcare App Development','
      client: 'MedTech Solutions','
      industry: 'Healthcare','
      category: 'mobile','
      challenge: 'Need for a comprehensive mobile platform connecting patients, doctors, and healthcare providers','
      solution: 'Developed cross-platform mobile app with telemedicine capabilities and health monitoring','
      results: [
  // TODO: Add items
]
  // TODO: Add items
]
        '50,000+ active users in first year','
        '95% user satisfaction rating','
        '40% reduction in hospital visits','
        'Streamlined patient-doctor communication''
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'Health APIs'],'
      duration: '10 months','
      teamSize: '10 developers','
      image: '/images/case-studies/healthcare-mobile.webp''
    }
  ];
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced case studies solutions by Zion Tech Group"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-6"text-xl text-gray-600 mb-8"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
<Navigation />

      {/* Hero Section */}
      <section className="
<div className="max-w-7 xl mx-auto"text-center"
<h1 className="
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"
              Discover how we've helped businesses transform their operations with AI and IT solutions.'
            </p>
          </div></div>
</section>

      {/* Category Filter */}
      <section className="
<div className="max-w-7 xl mx-auto"flex flex-wrap justify-center gap-4 mb-12"
            {categories.map((category) => (
  // TODO: Add parameters
)
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25''
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20''
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div></div>
</section>

      {/* Case Studies Grid */}
      <section className="
<div className="max-w-7 xl mx-auto"grid grid-cols-1 lg:grid-cols-2 gap-8"
            {filteredStudies.map((study) => (
  // TODO: Add parameters
)
              <div key={study.id} className="
<div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
<div className="
<span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"p-8"
<div className="
<span className="flex items-center gap-1"w-4 h-4"
                      {study.client}
                    </span>
<span className="
<Clock className="w-4 h-4"text-2 xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors"
                    {study.title}
                  </h3>
<div className="
<h4 className="text-lg font-semibold text-purple-400 mb-2"text-gray-300 text-sm leading-relaxed mb-4"
<h4 className="
<p className="text-gray-300 text-sm leading-relaxed"mb-6"
<h4 className="
<ul className="space-y-2"flex items-center gap-2 text-gray-300 text-sm"
<CheckCircle className="
                          {result}
                        </li>
                      ))}
                    </ul></div>
<div className="mb-6"text-lg font-semibold text-purple-400 mb-3"
<div className="
                      {study.technologies.map((tech, index) => (
  // TODO: Add parameters
)
                        <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"flex items-center justify-between"
<div className="
<span className="block"block"
<button className="
                      View Details
                      <ArrowRight className="w-4 h-4"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8 backdrop-blur-lg border border-white/10"
<div className="
<div className="text-6 xl font-bold mb-4"text-2 xl font-semibold mb-2"
<div className="
<div className="grid grid-cols-2 gap-6"text-center"
<TrendingUp className="
<div className="text-xl font-bold"text-sm opacity-75"
<div className="
<DollarSign className="w-8 h-8 text-cyan-400 mx-auto mb-2"text-xl font-bold"
<div className="
</div></div>
</div></div>
      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
            {caseStudies.map((study, index) => (
  // TODO: Add parameters
)
              <div key={index} className="cyber-card"grid grid-cols-1 lg:grid-cols-2 gap-8"
<div>
<div className="
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4"text-gray-400 text-sm"
<h2 className="
<p className="text-gray-300 mb-6"mb-6"
<h3 className="
<p className="text-gray-300"mb-6"
<h3 className="
<p className="text-gray-300"text-lg font-semibold text-white mb-4"
<ul className="
                      {study.results.map((result, resultIndex) => (
  // TODO: Add parameters
)
                        <li key={resultIndex} className="flex items-center text-gray-300"w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                          {result}
                        </li>
                      ))}
                    </ul>
<div className="
<blockquote className="text-gray-300 italic mb-4"{study.testimonial.quote}""font-semibold text-white"
<div className="
</div></div>
</div></div>
            ))}
          </div></div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-white"container mx-auto px-4"
<div className="
<div className="grid grid-cols-2 md:grid-cols-4 gap-8"text-center"
<div className="
                    {stat.icon}
                  </div>
<div className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-2"text-gray-600"
                    {stat.label}
                  </div></div>
              ))}
            </div></div>
</div></section>

      {/* Case Studies Grid */}
      <section className="
<div className="container mx-auto px-4"max-w-6 xl mx-auto"
<h2 className="
              Featured Case Studies
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
<div className="
<img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover"p-6"
<div className="
<span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"text-sm text-gray-500"
<h3 className="
                      {caseStudy.title}
                    </h3>
<p className="text-gray-600 mb-4 text-sm"text-gray-600 mb-4 line-clamp-3"
<strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
<div className="
<h4 className="font-semibold text-gray-900 text-sm"space-y-1"
                        {caseStudy.results.slice(0, 2).map((result, index) => (
  // TODO: Add parameters
)
                          <li key={index} className="
<CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"flex items-center justify-between"
<span className="
<Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"w-4 h-4 ml-1"
</div></div>
</div>
              ))}
            </div></div>
</div></section>

      {/* Industries We Serve */}
      <section className="
<div className="container mx-auto px-4"max-w-6 xl mx-auto"
<h2 className="
              Industries We Serve
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
<div className="
<div className="bg-gray-100 p-3 rounded-full"font-semibold text-gray-900 mb-1"
<p className="
              ))}
            </div></div>
</div></section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-gray-900 mb-8 text-center"grid md:grid-cols-4 gap-8"
<div className="
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"text-2 xl font-bold text-blue-600"
<h3 className="
<p className="text-gray-600"text-center"
<div className="
<span className="text-2 xl font-bold text-green-600"text-lg font-semibold text-gray-900 mb-2"
<p className="
<div className="text-center"bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
<span className="
<h3 className="text-lg font-semibold text-gray-900 mb-2"text-gray-600"
<div className="
<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"text-2 xl font-bold text-orange-600"
<h3 className="
<p className="text-gray-600"py-16 px-4 sm:px-6 lg:px-8"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8"
            Let's discuss how we can help transform your business with our AI and IT solutions.'
          </p>
<div className="
<button className="cyber-button"w-5 h-5 mr-2"
              Start Your Project
            </button>
<button className="
<Users className="w-5 h-5 mr-2"
              Schedule Consultation
            </button></div>
</div></section>

      <Footer /></div>
  )
}
;
export default CaseStudiesPage;

