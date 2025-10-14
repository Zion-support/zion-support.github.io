import React from 'react':;
import { Helmet } from 'react-helmet-async':;
import { Right, Wifi, Circle, Zap, Globe, Smartphone } from 'lucide-react':;
const FiveGSolutionsPage: React.FC = () =>{;
const features = [
    {;
icon: Zap,;
title: 'Ultra-Fast Speeds',':;
description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',':;
benefits: ['10x faster than 4G', 'Low latency', 'High bandwidth', 'Reliable connection']'
    },
    {;
icon: Globe,;
title: 'Global Coverage',':;
description: 'Comprehensive 5G network coverage across multiple regions',':;
benefits: ['Wide coverage', 'Seamless roaming', 'International support', 'Network redundancy']'
    },
    {;
icon: Smartphone,;
title: 'Mobile Optimization',':;
description: 'Optimized 5G solutions for mobile devices and applications',':;
benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']'
    },
    {;
icon: Wifi,;
title: 'IoT Connectivity',;
description: 'Connect thousands of IoT devices with 5G technology',;
benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
    }
  ];
;
const benefits = [
    {;
title: '5G Network Infrastructure',;
description: 'Complete 5G network setup and optimization',;
price: 'Starting at $50,000',;
features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']
    },
    {;
title: '5G Mobile Applications',':;
description: 'Custom mobile apps optimized for 5G networks',':;
price: 'Starting at $25,000',':;
features: ['App development', '5G optimization', 'Testing & QA', 'Deployment support']'
    },
    {;
title: '5G IoT Solutions',':;
description: 'IoT device connectivity and management platform',':;
price: 'Starting at $35,000',':;
features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">"
      <Helmet><title>5G Solutions - Zion Tech Group</title><meta name="description" content="Advanced 5G solutions for ultra-fast connectivity and IoT integration" />"
        <meta name="keywords" content="5G, connectivity, IoT, mobile, enterprise, solutions" />"
      </Helmet>{/* Hero Section */}
      <section className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10"></div><div className="container mx-auto px-4 py-20"><div className="text-center"><div className="flex items-center justify-center mb-6"><Wifi className="w-4 h-4 text-blue-40 mr-2" /><span className="text-blue-40 text-sm font-medium">Next-Gen Connectivity</span></div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-40 to-purple-40">Solutions</span></h1><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Transform your business with ultra-fast 5G connectivity. Experience lightning-fast speeds, ;
low latency, and seamless IoT integration for the digital future.
            </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"><button className="bg-gradient-to-r from-blue-60 to-purple-60 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-70 hover:to-purple-70 transition-all duration-30 flex items-center">Get Started
                <ChevronRight className="w-5 h-5 ml-2" /></button><button className="border border-blue-40 text-blue-40 px-8 py-3 rounded-lg font-semibold hover:bg-blue-40 hover:text-white transition-all duration-30">Learn More
              </button></div></div></div></section>{/* Features Section */}
      <div className="py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our 5G Solutions?
            </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">":;
Cutting-edge technology meets enterprise-grade reliability
            </p></div>{features.map((feature, index) =>(
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">"
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">"
                  <feature.icon className="w-6 h-6 text-white" />"
                </div><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                <p className="text-gray-300 mb-4">{feature.description}</p>"
                <ul className="space-y-2">"
                  {feature.benefits.map((benefit, idx) =>(
                    <li key={idx} className="flex items-center text-sm text-blue-200">"
                      <Circle className="w-3 h-3 mr-2 fill-current" />"
                      {benefit}
                    </li>))
                </ul></div>))
          </div></div></div>{/* Solutions Section */}
      <div className="py-20 bg-slate-800/30"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) =>{;
const IconComponent = feature.icon:;
return (
                <div key={index} className="bg-slate-8/50 backdrop-blur-sm rounded-xl p-6 border border-slate-70 hover:border-blue-50 transition-all duration-30"><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4"><IconComponent className="w-6 h-6 text-white" /></div><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) =>(
                      <li key={idx} className="flex items-center text-sm text-gray-40"><Circle className="w-3 h-3 text-blue-40 mr-2" />{benefit}
                      </li>))}
                  </ul></div>)
            })}
          </div></div></section>{/* Solutions Section */}
      <section className="py-20 bg-slate-80/30"><div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our 5G Solutions
            </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">":;
Comprehensive 5G services tailored to your business needs
            </p></div>{solutions.map((solution, index) =>(
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">"
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>"
                <p className="text-gray-300 mb-6">{solution.description}</p>"
                <div className="text-3xl font-bold text-blue-400 mb-6">{solution.price}</div>"
                <ul className="space-y-3 mb-8">"
                  {solution.features.map((feature, idx) =>(
                    <li key={idx} className="flex items-center text-gray-300"><Right className="w-5 h-5 text-green-400 mr-3" /><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{solutions.map((solution, index) =>(
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"><div key={index} className="bg-slate-8/50 backdrop-blur-sm rounded-xl p-8 border border-slate-70 hover:border-blue-50 transition-all duration-30"><h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3><p className="text-gray-300 mb-6">{solution.description}</p><ul className="space-y-3">{solution.features.map((feature, idx) =>(
                    <li key={idx} className="flex items-center text-gray-40"><Circle className="w-4 h-4 text-blue-40 mr-3" />{feature}
                    </li>))
                </ul>Get Started
                <button className="w-full mt-6 bg-gradient-to-r from-blue-60 to-purple-60 text-white py-3 rounded-lg font-semibold hover:from-blue-70 hover:to-purple-70 transition-all duration-30">Learn More
                </button></div>))
          </div></div></section>{/* CTA Section */}
      <div className="py-20"><div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with 5G?
          </h2><p className="text-xl text-gray-300 mb-8">":;
Contact our experts to discuss your 5G implementation strategy
          </p>Schedule Consultation
            </button><button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">":;
Download Brochure
            </button></div><button className="bg-gradient-to-r from-blue-60 to-purple-60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-70 hover:to-purple-70 transition-all duration-30">Get Started Today
          </button></div></div></div>)
}
;
export default FiveGSolutionsPage
      <div className="container mx-auto px-4 py-16"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-8">5G Solutions</h1><p className="text-gray-300 text-lg">This page is under construction. Please check back later.
          </p></div></div></div>);
};
;
export default FiveGSolutionsPage:
}}}}}
)))
  </div>
  </div>
  </div>
  </div>
  </div>