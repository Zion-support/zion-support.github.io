import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced demo solutions by Zion Tech Group"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 mb-8"description" content=" />"
<meta name=" content="demo, AI demo, technology demo, Zion Tech Group, interactive demo"
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"pt-20 pb-16 px-4"
<div className="
<div className="text-center mb-16"text-5 xl md:text-6 xl font-bold text-white mb-6"
                Interactive Demos
              </h1>
<p className="
                Experience our AI and IT solutions firsthand. See how our technology can transform your business.
              </p></div>
</div></section>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse"absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
<div className="
<h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6 leading-tight"block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              Action
            </span></h1>
<p className="
            Experience our AI and IT solutions through interactive demos.
            See exactly how our technology can transform your business.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
<Play className="
              Start Demo
            </button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"py-16 px-4"
<div className="
<div className="text-center mb-12"text-4 xl font-bold text-white mb-4"
<p className="
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center"
<demo.icon className="
<h3 className="text-lg font-semibold text-white mb-2"text-gray-300 text-sm mb-3"
<div className="
<span className="text-xs text-gray-400"text-xs text-cyan-400"
</button>
            ))}
          </div></div>
</section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
  // TODO: Add parameters
)
        <section className="
<div className="max-w-7 xl mx-auto"grid grid-cols-1 lg:grid-cols-2 gap-12"
              {/* Demo List */}
              <div className="
<h2 className="text-3 xl font-bold text-white mb-8"flex items-start justify-between"
<div className="
<h3 className="text-xl font-semibold text-white mb-2"text-gray-300 mb-4"
<ul className="
                          {demo.features.map((feature, index) => (
  // TODO: Add parameters
)
                            <li key={index} className="flex items-center text-sm text-gray-400"w-4 h-4 text-cyan-400 mr-2"
                              {feature}
                            </li>
                          ))}
                        </ul></div>
<div className="
<Play className="w-6 h-6 text-cyan-400"text-xl font-semibold text-white mb-2"
<p className="
                ))}
              </div>

              {/* Demo Preview */}
              <div className="cyber-card p-8"text-2 xl font-bold text-white mb-6"
                  {demos.find(d => d.id === selectedDemo)?.title} Demo
                </h3>
<div className="
<div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<p className="
                    Interactive demo coming soon. Contact us to schedule a live demonstration.
                  </p>
<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"space-y-4"
<h4 className="
<ul className="space-y-2"flex items-center text-gray-300"
<Star className="
                        {feature}
                      </li>
                    ))}
                  </ul></div>
</div></div>
</div></section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600"max-w-4 xl mx-auto text-center"
<h2 className="
<p className="text-xl text-gray-100 mb-8"flex flex-col sm:flex-row gap-4 justify-center"
<button className="
<Play className="w-5 h-5 mr-2"border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center"
<ArrowRight className="
                Contact Sales
              </button></div>
</div></section>
<div className="max-w-7 xl mx-auto"text-center mb-12"
<h2 className="
<p className="text-xl text-gray-300"grid grid-cols-1 md:grid-cols-3 gap-8"
            {testimonials.map((testimonial, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex items-center mb-4"w-5 h-5 text-yellow-400 fill-current"
                  ))}
                </div>
<blockquote className="
                  "{testimonial.quote}"
                </blockquote>
<div>
<div className="font-semibold text-white"text-sm text-gray-400"
</div>
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="
<div className="max-w-4 xl mx-auto text-center"text-4 xl font-bold text-white mb-6"
            Ready to See More?
          </h2>
<p className="
            Schedule a personalized demo with our experts. We'll show you exactly '
            how our solutions can address your specific business needs.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              Schedule Live Demo
            </button>
<button className="
              Contact Sales
            </button></div>
</div></section>
<Footer />

}}})))
  const features = [
    {
      title: "Advanced Technology"Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="Secure & Reliable",
      description: ",
      icon: <Shield className="w-8 h-8",
      description: "Quick deployment and implementation for immediate results"w-8 h-8"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"description" content=" />
      </Helmet>
      
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Advanced  solutions by Zion Tech Group
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">{feature.title}</h3>
              <p className="text-gray-300">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        <div className="text-center">
            Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced demo solutions by Zion Tech Group.
          </p>

        </div>
      </div>
    </div>
  );

