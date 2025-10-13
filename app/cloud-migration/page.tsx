
export default function PagePage() {
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudMigrationPage: React.FC = () => {
  return (
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced cloud migration solutions by Zion Tech Group"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 mb-8"description" content=" />
        <meta name="keywords"cloud-migration, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
          <h1 className="text-xl text-gray-300 mb-8 max-w-3 xl">
            Professional cloud migration services by Zion Tech Group.
          </p>
          
          <div className="text-2 xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="container mx-auto px-4 py-16">
        <div className="text-4 xl font-bold text-gray-900 mb-6">
            Cloud Migration
          </h1>
          <p className="py-20 px-4 sm:px-6 lg:px-8"></section>"text-xl font-semibold text-white mb-3"
<p className="
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"
<feature.icon className="
</div></section>
      {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"max-w-7 xl mx-auto"
<div className="
<h2 className="text-3 xl md: text-4 xl font-bold text-white mb-4"text-xl text-gray-300 max-w-3 xl mx-auto"
<div className="
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                Schedule Consultation
              </button></div>
</div>
<div key={index}className="
<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0"text-gray-300"
            ))}
          </div></div>
};
;
export default CloudMigrationPage;
  </button></button>
</h2></section>
</h1></div>
</div>
<section className="
<div className="max-w-7 xl mx-auto"text-center mb-16"
<h2 className="
              Comprehensive Migration Services
            </h2>
<p className="text-xl text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {features.map((feature, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex items-center mb-4"w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4"
<feature.icon className="
<h3 className="text-xl font-bold text-white"text-gray-300 mb-6"
<ul className="
                  {feature.details.map((detail, detailIndex) => (
  // TODO: Add parameters
)
                    <li key={detailIndex} className="flex items-center text-gray-300"w-4 h-4 text-green-400 mr-2"
                      {detail}
                    </li>
                  ))}
                </ul></div>
            ))}
          </div></div>
</section>

      {/* Migration Process Section */}
      <section className="
<div className="max-w-7 xl mx-auto"text-center mb-16"
<h2 className="
              Our Migration Process
            </h2>
<p className="text-xl text-gray-300"grid grid-cols-1 md:grid-cols-5 gap-8"
            {migrationSteps.map((step, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"text-2 xl font-bold text-white"
<h3 className="
<p className="text-gray-300 text-sm"py-16 px-4 sm:px-6 lg:px-8"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Migration Packages
            </h2>
<p className="
              Choose the migration package that fits your needs.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"absolute -top-4 left-1/2 transform -translate-x-1/2"
<span className="
                      Most Popular
                    </span></div>
                )}
                <div className="text-center mb-8"text-2 xl font-bold text-white mb-2"
<p className="
<div className="flex items-baseline justify-center"text-4 xl font-bold text-white"
<span className="
</div>
<ul className="space-y-4 mb-8"flex items-center text-gray-300"
<CheckCircle className="
                      {feature}
                    </li>
                  ))}
                </ul>
<button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' '
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white''
                }`}>
                  {plan.name === 'Enterprise Migration' ? 'Get Quote' : 'Get Started'}'
                </button></div>
            ))}
          </div></div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300"
              See how we've helped companies successfully migrate to the cloud.'
            </p></div>
<div className="
            {testimonials.map((testimonial, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2 xl p-8"flex items-center mb-4"
                  {[...Array(testimonial.rating)].map((_, i) => (
  // TODO: Add parameters
)
                    <Star key={i} className="
                  ))}
                </div>
<p className="text-gray-300 mb-6 italic"</p>"
<div>
<div className="
<div className="text-cyan-400 text-sm"text-gray-400 text-sm"
</div>
            ))}
          </div></div>
</section>

      {/* CTA Section */}
export default PagePage;
          <div className="
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"w-5 h-5 mr-2"
              Get Free Assessment
            </button>
<button className="
              Contact Sales
            </button></div>
</div></section>
<Footer /></div>
  )
}
export default CloudMigrationPage</div></div>;
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</span></button>
</p></p>
</p></p>
</p></h1>
</h2></h2>
</h2></h2>
</h3></section>
</section>

};

export default CloudMigrationPage;
