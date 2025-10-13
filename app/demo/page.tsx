<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';

export default function PagePage() {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
import { Play, CheckCircle, ArrowRight, Star } from 'lucide-react';';'
;
const DemoPage: React.FC = () => {;
const [selectedDemo, setSelectedDemo] = useState('ai-analytics');'
;
const demos = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'ai-analytics','
      title: 'AI Analytics Dashboard','
      description: 'See how our AI-powered analytics can transform your data into actionable insights.','
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'ai-automation','
      title: 'AI Automation Platform','
      description: 'Experience intelligent automation that streamlines your business processes.','
      features: ['Process automation', 'Smart workflows', 'AI chatbots', 'Predictive maintenance']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'cloud-solutions','
      title: 'Cloud Solutions','
      description: 'Explore our comprehensive cloud infrastructure and migration services.','
      features: ['Cloud migration', 'Infrastructure as Code', 'DevOps automation', 'Security monitoring']'
    }
  ];
;
const testimonials = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Sarah Johnson','
      company: 'TechCorp','
      role: 'CEO','
      content: 'The AI dashboard demo showed us exactly how we could transform our data analytics. Incredible insights!','

      rating: 5
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Michael Chen','
company: 'DataFlow Inc','
      role: 'CTO','
      content: 'The quantum computing demo was mind-blowing. We could see immediate applications for our optimization problems.','

      rating: 5
    }
  ];

return (
  // TODO: Add parameters
)
    <>
<Helmet>
<title>Demo - Zion Tech Group | See Our Solutions in Action</title>
<meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />"
<meta name="keywords" content="demo, AI demo, technology demo, Zion Tech Group, interactive demo" /></Helmet>"
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"
                Interactive Demos
              </h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
                Experience our AI and IT solutions firsthand. See how our technology can transform your business.
              </p></div>
</div></section>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />"
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />'"
<div className="relative max-w-7xl mx-auto text-center">"
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">"
            See It in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">"
              Action
            </span></h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">"
            Experience our AI and IT solutions through interactive demos.
            See exactly how our technology can transform your business.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">"
<Play className="w-5 h-5 mr-2" />"
              Start Demo
            </button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">"
              Schedule Live Demo
            </button></div>
</div></section>

      {/* Demo Selection */}
      <section className="py-16 px-4"></section>"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-12">"
<h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>"
<p className="text-xl text-gray-300">Select a solution to see it in action</p></div>"
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
            {demos.map((demo) => (
  // TODO: Add parameters
)
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id</div>
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-purple-500/10''
                    : 'border-white/10 bg-white/5 hover:bg-white/10''
                }`}
              >
<div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">"
<demo.icon className="w-6 h-6 text-white" /></div>"
<h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>"
<p className="text-gray-300 text-sm mb-3">{demo.description}</p>"
<div className="flex items-center justify-between">"
<span className="text-xs text-gray-400">{demo.category}</span>"
<span className="text-xs text-cyan-400">{demo.duration}</span></div>"
</button>
            ))}
          </div></div>
</section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
  // TODO: Add parameters
)
        <section className="py-16 px-4"></section>"
<div className="max-w-7xl mx-auto">"
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"
              {/* Demo List */}
              <div className="space-y-6">"
<h2 className="text-3xl font-bold text-white mb-8">Choose a Demo</h2>"
                {demos.map((demo) => (
  // TODO: Add parameters
)
                  <div
                    key={demo.id}
                    className={`cyber-card p-6 cursor-pointer transition-all ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                      selectedDemo === demo.id ? 'ring-2 ring-cyan-500' : '''
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
<div className="flex items-start justify-between">"
<div className="flex-1">"
<h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>"
<p className="text-gray-300 mb-4">{demo.description}</p>"
<ul className="space-y-2">"
                          {demo.features.map((feature, index) => (
  // TODO: Add parameters
)
                            <li key={index} className="flex items-center text-sm text-gray-400">"
<CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />"
                              {feature}
                            </li>
                          ))}
                        </ul></div>
<div className="ml-4">"
<Play className="w-6 h-6 text-cyan-400" /></div>"
</div>
<h4 className="text-xl font-semibold text-white mb-2">Interactive Demo</h4>"
<p className="text-gray-300">Click play to experience this solution in action</p></div>"
                ))}
              </div>

              {/* Demo Preview */}
              <div className="cyber-card p-8">"
<h3 className="text-2xl font-bold text-white mb-6">"
                  {demos.find(d => d.id === selectedDemo)?.title} Demo
                </h3>
<div className="bg-gray-800 rounded-lg p-8 mb-6 text-center">"
<div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
<Play className="w-8 h-8 text-white" /></div>"
<p className="text-gray-300 mb-4">"
                    Interactive demo coming soon. Contact us to schedule a live demonstration.
                  </p>
<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">"
                    Schedule Live Demo
                  </button></div>
<div className="space-y-4">"
<h4 className="text-lg font-semibold text-white">What you'll see:</h4>'"
<ul className="space-y-2">"
                    {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
  // TODO: Add parameters
)
                      <li key={index} className="flex items-center text-gray-300">"
<Star className="w-4 h-4 text-cyan-400 mr-2" />"
                        {feature}
                      </li>
                    ))}
                  </ul></div>
</div></div>
</div></section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>"
<p className="text-xl text-gray-100 mb-8">"
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">"
<Play className="w-5 h-5 mr-2" />"
                Schedule Demo
              </button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center">"
<ArrowRight className="w-5 h-5 mr-2" />"
                Contact Sales
              </button></div>
</div></section>
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-12">"
<h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>"
<p className="text-xl text-gray-300">See how our demos led to successful implementations</p></div>"
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            {testimonials.map((testimonial, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
<div className="flex items-center mb-4">"
                  {[...Array(testimonial.rating)].map((_, i) => (
  // TODO: Add parameters
)
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />"
                  ))}
                </div>
<blockquote className="text-gray-300 mb-4 italic">"
                  "{testimonial.quote}""
                </blockquote>
<div>
<div className="font-semibold text-white">{testimonial.name}</div>"
<div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div></div>"
</div>
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="py-20 px-4"></section>"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-4xl font-bold text-white mb-6">"
            Ready to See More?
          </h2>
<p className="text-xl text-gray-300 mb-8">"
            Schedule a personalized demo with our experts. We'll show you exactly '
            how our solutions can address your specific business needs.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"
              Schedule Live Demo
            </button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">"
              Contact Sales
            </button></div>
</div></section>
<Footer />

}}})))
>>>>>>> cursor/delete-records-a75e
=======
  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for your business",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and implementation for immediate results",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Advanced  solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced  solutions by Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Interactive demos by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience our solutions through interactive demonstrations.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Chatbot Demo</h3>
              <p className="text-gray-600">
                Try our AI chatbot and see how it can help your business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Explore our analytics dashboard with sample data.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Preview</h3>
              <p className="text-gray-600">
                Preview our mobile applications and their features.
              </p>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
}
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
