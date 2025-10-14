
  return (

      {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our ServiceCard?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our servicecard solutions deliver unmatched performance, security, and scalability.
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                {feature.title}
                </h3>
                <p className="text-gray-300"></p>
                {feature.description}
                </p>
                </div>
            ))}
                </div>
        ))
      </section>
                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our servicecard solutions for your business.
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg"></p>
                {benefit}
                </p>
                </div>
            ))}
          ))
        </div>
                </section>
                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8"></p>
              Contact our experts to discuss your servicecard needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
                </div>
          ))
        </div>
                </section>
import {ArrowRight, CheckCircle}}from 'lucide-react';
interface ServiceCardProps {title: string;,}
  description: string;,
  features: string[],
  price?: string;
  popular?: boolean;
  onSelect?: () => void,
  className?: string;}const ServiceCard: React.FC<ServiceCardProps> = ({,
  title,
  description,
  features,
  price,
  popular = false,
  onSelect,
  className = ''}) =>
                {return(<div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300 group ${className,)}${popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''}`}></div>
                {popular && (</div>
        <div className="flex items-center gap-2 mb-4"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
                </div>
      )}
                <div className="mb-4"></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors">,
          {title}
                </h3>
        <p className="text-gray-300 text-sm"></p>
                {description</p>}
                </p>
                </div>
      <div className="space-y-2 mb-6"></div>
                {features.map((feature, index) => (</div>
          <div key={index}className="flex items-center gap-2"></div>
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm"></span>
                {feature</span>}
                </span>
'use client'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
interface ServiceCardProps {
    title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () => void,
  className?: string
  }
const ServiceCard: React.FC<ServiceCardProps> = ()
}) =>
                {
  return (
    </ServiceCardProps>< className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${$2 />
      popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
    }`}>
                {popular && (
        </div><div className="flex items-center gap-2 mb-4"></div>
          </div><div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
                </div>
      )}
                <div className="mb-4"></div>
        </div><h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>
  return ()
      )}
                <div className="mb-4" /></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors" /></h3>
                {title}
                </h3>
        <p className="text-gray-300 text-sm"></p>
                {description}
                </p>
                </div>
      <div className="space-y-2 mb-6"></div>
                {features.map((feature, index) => (
          </div><div key={index} className="flex items-center gap-2"></div>
            </div><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm"></span>
                {feature}
                </span>
                </div>
        ))}
      {price && (
        <div className="mb-6"></div>
      )},
    {onSelect && (
        <button
          onClick={onSelect}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"></button
>
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
                </div>;
  );
};

export default ServiceCard
  </ServiceCardProps>
                </div><div className="text-3xl font-bold text-white mb-1"></div>
                {price}
                </div>
          <div className="text-gray-400 text-sm">per month</div>
                </div>
      )}
      {onSelect && (
        <$2 />
          onClick={onSelect}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">
          Get Started
          </button><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
                </div>
  )
}
export default ServiceCard
  </ServiceCardProps>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
  )
}
export default ServiceCard</div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></p>
                </h3>
