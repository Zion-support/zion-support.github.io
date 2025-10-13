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
        'Saved $2.3M annually in operational costs','
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
        '3x faster application deployment''
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Advanced case studies solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced case studies solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
            </p>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="text-center">"
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span></h1>"
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Discover how we've helped businesses transform their operations with AI and IT solutions.'
            </p>
          </div></div>
</section>

      {/* Category Filter */}
      <section className="py-16 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="flex flex-wrap justify-center gap-4 mb-12">"
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
      <section className="py-16 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">"
            {filteredStudies.map((study) => (
  // TODO: Add parameters
)
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">"
<div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">"
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />"
<div className="absolute top-4 left-4">"
<span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">"
                      {study.industry}
                    </span></div>
</div>
<div className="p-8">"
<div className="flex items-center gap-4 text-sm text-gray-400 mb-4">"
<span className="flex items-center gap-1">"
<Building className="w-4 h-4" />"
                      {study.client}
                    </span>
<span className="flex items-center gap-1">"
<Clock className="w-4 h-4" />"
                      {study.duration}
                    </span></div>
<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">"
                    {study.title}
                  </h3>
<div className="mb-6">"
<h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>"
<p className="text-gray-300 text-sm leading-relaxed mb-4">{study.challenge}</p>"
<h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>"
<p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p></div>"
<div className="mb-6">"
<h4 className="text-lg font-semibold text-purple-400 mb-3">Key Results</h4>"
<ul className="space-y-2">"
                      {study.results.map((result, index) => (
  // TODO: Add parameters
)
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">"
<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />"
                          {result}
                        </li>
                      ))}
                    </ul></div>
<div className="mb-6">"
<h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>"
<div className="flex flex-wrap gap-2">"
                      {study.technologies.map((tech, index) => (
  // TODO: Add parameters
)
                        <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">"
                          {tech}
                        </span>
                      ))}
                    </div></div>
<div className="flex items-center justify-between">"
<div className="text-sm text-gray-400">"
<span className="block">Team: {study.teamSize}</span>"
<span className="block">Duration: {study.duration}</span></div>"
<button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">"
                      View Details
                      <ArrowRight className="w-4 h-4" /></button>"
</div></div>
<div className={index % 2 === 1 ? 'lg:col-start-1' : '}>''
<div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">"
<div className="text-center text-white">"
<div className="text-6xl font-bold mb-4">{study.results.roi}</div>"
<div className="text-2xl font-semibold mb-2">Return on Investment</div>"
<div className="text-lg opacity-75 mb-8">{study.company}</div>"
<div className="grid grid-cols-2 gap-6">"
<div className="text-center">"
<TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />"
<div className="text-xl font-bold">{study.results.conversion}</div>"
<div className="text-sm opacity-75">Conversion Rate</div></div>"
<div className="text-center">"
<DollarSign className="w-8 h-8 text-cyan-400 mx-auto mb-2" />"
<div className="text-xl font-bold">{study.results.revenue}</div>"
<div className="text-sm opacity-75">Revenue Increase</div></div>"
</div></div>
</div></div>
      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="space-y-16">"
            {caseStudies.map((study, index) => (
  // TODO: Add parameters
)
              <div key={index} className="cyber-card">"
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">"
<div>
<div className="flex items-center mb-4">"
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">"
                        {study.industry}
                      </span>
<span className="text-gray-400 text-sm">{study.duration}</span></div>"
<h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>"
<p className="text-gray-300 mb-6">{study.description}</p>"
<div className="mb-6">"
<h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>"
<p className="text-gray-300">{study.challenge}</p></div>"
<div className="mb-6">"
<h3 className="text-lg font-semibold text-white mb-2">Solution</h3>"
<p className="text-gray-300">{study.solution}</p></div>"
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-4">Results</h3>"
<ul className="space-y-3 mb-8">"
                      {study.results.map((result, resultIndex) => (
  // TODO: Add parameters
)
                        <li key={resultIndex} className="flex items-center text-gray-300">"
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                          {result}
                        </li>
                      ))}
                    </ul>
<div className="bg-white/5 rounded-lg p-6">"
<blockquote className="text-gray-300 italic mb-4">"
                        "{study.testimonial.quote}""
                      </blockquote>
<div>
<div className="font-semibold text-white">{study.testimonial.author}</div>"
<div className="text-cyan-400 text-sm">{study.testimonial.role}</div></div>"
</div></div>
</div></div>
            ))}
          </div></div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-white">"
<div className="container mx-auto px-4">"
<div className="max-w-6xl mx-auto">"
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
              {stats.map((stat, index) => (
  // TODO: Add parameters
)
                <div key={index} className="text-center">"
<div className="flex justify-center mb-4">"
                    {stat.icon}
                  </div>
<div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">"
                    {stat.number}
                  </div>
<div className="text-gray-600">"
                    {stat.label}
                  </div></div>
              ))}
            </div></div>
</div></section>

      {/* Case Studies Grid */}
      <section className="py-16">"
<div className="container mx-auto px-4">"
<div className="max-w-6xl mx-auto">"
<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
              Featured Case Studies
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {caseStudies.map((caseStudy) => (
  // TODO: Add parameters
)
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">"
<div className="aspect-w-16 aspect-h-9">"
<img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover""
                    /></div>
<div className="p-6">"
<div className="flex items-center justify-between mb-3">"
<span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">"
                        {caseStudy.industry}
                      </span>
<span className="text-sm text-gray-500">{caseStudy.duration}</span></div>"
<h3 className="text-xl font-semibold text-gray-900 mb-2">"
                      {caseStudy.title}
                    </h3>
<p className="text-gray-600 mb-4 text-sm">"
<strong>Client:</strong> {caseStudy.client}
                    </p>
<p className="text-gray-600 mb-4 line-clamp-3">"
<strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
<div className="space-y-2 mb-4">"
<h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>"
<ul className="space-y-1">"
                        {caseStudy.results.slice(0, 2).map((result, index) => (
  // TODO: Add parameters
)
                          <li key={index} className="flex items-center text-sm text-gray-600">"
<CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                            {result}
                          </li>
                        ))}
                      </ul></div>
<div className="flex items-center justify-between">"
<span className="text-sm text-gray-500">Team: {caseStudy.team}</span>"
<Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm""
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" /></Link>"
</div></div>
</div>
              ))}
            </div></div>
</div></section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">"
<div className="container mx-auto px-4">"
<div className="max-w-6xl mx-auto">"
<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
              Industries We Serve
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">"
              {industries.map((industry, index) => (
  // TODO: Add parameters
)
                <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">"
<div className="flex justify-center mb-3">"
<div className="bg-gray-100 p-3 rounded-full">"
                      {industry.icon}
                    </div></div>
<h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>"
<p className="text-sm text-gray-600">{industry.count} projects</p></div>"
              ))}
            </div></div>
</div></section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">"
<div className="container mx-auto px-4">"
<div className="max-w-6xl mx-auto">"
<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
              Our Process
            </h2>
<div className="grid md:grid-cols-4 gap-8">"
<div className="text-center">"
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-blue-600">1</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>"
<p className="text-gray-600">We analyze your current challenges and identify opportunities for improvement.</p></div>"
<div className="text-center">"
<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-green-600">2</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>"
<p className="text-gray-600">We develop a comprehensive strategy tailored to your specific needs and goals.</p></div>"
<div className="text-center">"
<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-purple-600">3</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>"
<p className="text-gray-600">Our expert team implements the solution with minimal disruption to your operations.</p></div>"
<div className="text-center">"
<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-orange-600">4</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>"
<p className="text-gray-600">We continuously monitor and optimize the solution to ensure maximum performance.</p></div>"
            ))}
          </div>
  );
};
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
            Ready to Write Your Success Story?
          </h2>
<p className="text-xl text-gray-300 mb-8">"
            Let's discuss how we can help transform your business with our AI and IT solutions.'
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="cyber-button">"
<ArrowRight className="w-5 h-5 mr-2" />"
              Start Your Project
            </button>
<button className="cyber-button-secondary">"
<Users className="w-5 h-5 mr-2" />"
              Schedule Consultation
            </button></div>
</div></section>

      <Footer /></div>
  )
}
;
export default CaseStudiesPage;

}
}
