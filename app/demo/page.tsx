
const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      rating: 5
    },
    {
      name: 'Michael Chen',
      rating: 5
    }
  ];

        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center"></div></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1></h1>
            See It in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span></span>
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p></p>
            Experience our AI and IT solutions through interactive demos. 
            See exactly how our technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"></button>
              <Play className="w-5 h-5 mr-2" />
              Start Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Schedule Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-12"></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Choose Your Demo</h2>
            <p className="text-xl text-gray-300"></p></p>Select a solution to see it in action</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div></div>
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id</div>
                className="{`p-6" rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center"></div></div>
                  <demo.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2"></h3></h3>{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-3"></p></p>{demo.description}</p>
                <div className="flex items-center justify-between"></div></div>
                  <span className="text-xs text-gray-400"></span></span>{demo.category}</span>
                  <span className="text-xs text-cyan-400"></span></span>{demo.duration}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-16 px-4"></section></section>
        </section>
          <div className="max-w-7xl mx-auto"></div></div>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2"></h4></h4>Interactive Demo</h4>
                    <p className="text-gray-300"></p></p>Click play to experience this solution in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-12"></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>What Our Clients Say</h2>
            <p className="text-xl text-gray-300"></p></p>See how our demos led to successful implementations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 italic"></blockquote>
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white"></div></div>{testimonial.name}</div>
                  <div className="text-sm text-gray-400"></div></div>{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4"></section></section>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Schedule a personalized demo with our experts. We'll show you exactly 
            how our solutions can address your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Schedule Live Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
import React from 'react';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20"&gt;</div&gt;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"&gt;</div&gt;
        <div className="text-center"&gt;</div&gt;
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"&gt;</h1&gt;
            Request <span className="text-cyan-400"&gt;</span&gt;Demo</span&gt;
          </h1&gt;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"&gt;</p&gt;
            See our AI and IT solutions in action with a personalized demo.
          </p&gt;
        </div&gt;
      </div&gt;
    </div&gt;
  );
};

export default DemoPage;
'use client'
import React from 'react'
import Navigation from '../components/Navigation'import Footer from '../components/Footer'
import {  Play, ArrowRight  } from 'lucide-react'const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              See Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></span></span>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Experience our AI and IT solutions in action with interactive demos and live examples.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto"></div></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"></div></div>
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div></div>
              <Play className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2></h2>Interactive Demo</h2>
            <p className="text-gray-300 mb-8"></p></p>
              Try our AI-powered solutions and see how they can transform your business operations.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"></button>
              <Play className="w-5 h-5 mr-2" />
              Start Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Contact us to schedule a personalized demo for your business.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"></button>
            <ArrowRight className="w-5 h-5 mr-2" />
            Schedule Demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DemoPage
