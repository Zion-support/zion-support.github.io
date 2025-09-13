import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {};
} from 'lucide-react';
;
const GetStarted = () => {};
};
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const gettingStartedPaths = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const onboardingSteps = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const quickStartGuides = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const supportOptions = [;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">;
        <div className="container mx-auto text-center">;
          <div>Broken JSX</div>
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Get Started;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                in Minutes;
              </span>;
            </h1>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Join thousands of developers and businesses already using Zion Tech Group ;
              to build the future with AI. Choose your path and start building today.;
            </p>;

            <div className="flex flex-wrap justify-center gap-4 mb-8">;
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">;
                <span className="font-semibold">Free Trial</span> Available;
              </div>;
              <div className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400">;
                <span className="font-semibold">No Credit Card</span> Required;
              </div>;
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400">;
                <span className="font-semibold">24/7</span> Support;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Getting Started Paths */}
      <section className="py-20 px-6">;
        <div className="container mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Path</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Select the getting started path that best matches your needs and experience level.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                onClick={() => setSelectedPath(path.id)}
              >;
                <div className={`w-20 h-20 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>;
                  <path.icon className="w-10 h-10 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-3">{path.title}</h3>;
                <p className="text-gray-300 mb-4">{path.description}</p>;

                <div className="space-y-2 text-sm mb-6">;
                  <div className="flex items-center justify-center gap-2 text-cyan-400">;
                    <Clock className="w-4 h-4" />;
                    {path.timeToComplete}
                  </div>;
                  <div className="text-gray-400">;
                    Difficulty: {path.difficulty}
                  </div>;
                </div>;
                ;
                <div>Broken JSX</div>
                  onClick={() => setSelectedPath(path.id)}
                  className={};
}`}
                >;
                  {selectedPath === path.id ? 'Selected' : 'Choose This Path'}
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Onboarding Steps */}
      {};
}`}
                  >;
                    {/* Step Connector */}
                    {};
                    )}
                    <div className="flex items-start gap-6">;
                      <div>Broken JSX</div>
                        currentStep >= step.step ;
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600' ;
                          : 'bg-slate-700/50';,
}`}>;
                        {};
                          <span className="text-white font-bold">{step.step}</span>;
                        )}
                      </div>;

                      <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">;
                        <div className="flex items-center justify-between mb-4">;
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>;
                          <div className="flex items-center gap-2 text-sm text-gray-400">;
                            <Clock className="w-4 h-4" />;
                            {step.duration}
                          </div>;
                        </div>;

                        <p className="text-gray-300 mb-4">{step.description}</p>;

                        <ul className="space-y-2">;
                          {};
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">;
                              <CheckCircle className="w-4 h-4 text-cyan-400" />;
                              {action}
                            </li>;
                          ))}
                        </ul>;
                        ;
                        {};
                            onClick={() => setCurrentStep(step.step + 1)}
                            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">;
                            Complete Step {step.step}
                            <ArrowRight className="w-4 h-4" />;
                          </button>;
                        )}
                      </div>;
                    </div>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
          </div>;
        </section>;
      )}

      {/* Quick Start Guides */}
      <section className="py-20 px-6">;
        <div className="container mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">Quick Start Guides</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Jump-start your development with our comprehensive guides and tutorials.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                <h3 className="text-xl font-bold text-white mb-3 text-center">{guide.title}</h3>;
                <p className="text-gray-300 text-center mb-4">{guide.description}</p>;

                <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6">;
                  <span className="flex items-center gap-1">;
                    <Clock className="w-4 h-4" />;
                    {guide.time}
                  </span>;
                  <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">;
                    {guide.difficulty}
                  </span>;
                </div>;
                ;
                <div>Broken JSX</div>
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">;
                  Start Learning;
                  <ArrowRight className="w-4 h-4" />;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Support Options */}
      <section className="py-20 px-6 bg-slate-800/20">;
        <div className="container mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">Need Help Getting Started?</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Our support team is here to help you succeed every step of the way.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>;
                <p className="text-gray-300 text-sm mb-4">{option.description}</p>;

                <div className="space-y-2 text-sm">;
                  <div className="text-cyan-400">;
                    Response: {option.responseTime}
                  </div>;
                  <div className="text-gray-400">;
                    Available: {option.availability}
                  </div>;
                </div>;

                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300">;
                  Get Help;
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 px-6">;
        <div className="container mx-auto text-center">;
          <div>Broken JSX</div>
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50">;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Start Building?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join thousands of developers and businesses already using Zion Tech Group ;
              to transform their ideas into reality.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">;
                Start Free Trial;
                <Rocket className="w-5 h-5" />;
              </button>;
              <div>Broken JSX</div>
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">;
                Talk to Sales;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}
export default GetStarted;