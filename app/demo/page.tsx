import React from "react";
"use client";
const DemoPage: React.FC = () => {
  
  const [selectedDemo, setSelectedDemo] = useState("ai");

  const _demos = [
    {

  ];

  const _testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content:
        "The AI demo was incredible. We could see exactly how it would integrate with our existing systems.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CEO",
      content:
        "The cloud infrastructure demo showed us the scalability we needed. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "SecureTech Ltd.",
      role: "Security Director",
      content:
        "The security demo gave us confidence in their capabilities. The threat detection was impressive.",
      rating: 5,
    },
  ];

  const _currentDemo =
    demos.find((demo) => demo.id === selectedDemo) || demos[0];
  return (
    <>
        </div>
      </div>
        </section>

        {/* Demo Selection */}
        
    </><section className="py-20 px-4">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of interactive demonstrations to see our
                solutions in action.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
          </div><div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <demo.icon className="w-8 h-8" />
          <h1 className="text-xl font-bold mb-2">{demo.title}</h3>
          
          </div><p className="text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center gap-4 text-sm">
        
          </div><div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{demo.duration}</span>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {demo.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        
          </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
          </div><div>
          <h1 className="text-2xl font-bold text-white mb-4">
                    {currentDemo.title}
                  </h3>
          
          </div><p className="text-gray-300 mb-6">
                    {currentDemo.description}
                  </p>

                  <div className="space-y-4 mb-8">
          <h1 className="text-lg font-semibold text-white">
                      Key Features:
                    </h4>
            
          </div><ul className="space-y-2">
                      {currentDemo.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Launch Demo
                  </button>
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl p-8 flex items-center justify-center">
        
          </div><div className="text-center">
        
          </div><div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <currentDemo.icon className="w-12 h-12 text-white" />
          <h1 className="text-xl font-bold text-white mb-2">
                      Interactive Demo
                    </h4>
          
          </div><p className="text-gray-300">
                      Click to start the demonstration
                    </p>
        </div>
      </div>
        </div>
      </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white/5">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
          
          </div><p className="text-xl text-gray-300">
                See what industry leaders think about our solutions.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          </div><div className="flex items-center mb-4">

                    ))}
          
          </div><p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
        
          </div><div className="font-semibold text-white">
                      {testimonial.name}
        
          </div><div className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
        </div>
      </div>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our
              solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default Page;

export default DemoPage;
