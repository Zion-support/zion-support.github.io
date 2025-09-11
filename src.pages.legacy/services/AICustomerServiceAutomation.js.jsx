import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, Shield, Users, BarChart3, Clock, DollarSign, Smartphone, Globe, Zap, CheckCircle, TrendingUp, Phone, Mail, MessageSquare, Bot } from 'lucide-react';
export default function AICustomerServiceAutomation() {};
  return null;
}
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
}
    ];
    const pricingPlans = [;
        {};
},;
        {};
},;
        {};
}
    ];
    const benefits = [;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
}
    ];
    const channels = [;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
}
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 pt-20">;
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-16">;
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">;
            <MessageCircle className="w-4 h-4 mr-2"/>;
            AI-Powered Customer Service Technology;
          </div>;

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            AI Customer Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Automation</span>;
          </h1>;

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
            Transform your customer service with AI-powered automation. Provide instant, intelligent support across all channels while reducing costs and improving satisfaction.;
          </p>;

          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">;
              Start Free Trial;
            </Link>;
            <Link to="/request-demo" className="px-8 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-200">;
              Request Demo;
            </Link>;
          </div>;
        </div>;

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">;
          <div className="text-center">;
            <div className="text-3xl font-bold text-indigo-400 mb-2">60%</div>;
            <div className="text-gray-400">Cost Reduction</div>;
          </div>;
          <div className="text-center">;
            <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>;
            <div className="text-gray-400">Support</div>;
          </div>;
          <div className="text-center">;
            <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>;
            <div className="text-gray-400">Resolution Rate</div>;
          </div>;
          <div className="text-center">;
            <div className="text-3xl font-bold text-indigo-400 mb-2">&lt;1s</div>;
            <div className="text-gray-400">Response Time</div>;
          </div>;
        </div>;

        {/* Features Grid */}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Advanced Customer Service Features;
          </h2>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, idx) => (<div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">;
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-white"/>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-gray-400">{feature.description}</p>;
              </div>))}
          </div>;
        </div>;

        {/* Support Channels Section */}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Multi-Channel Support;
          </h2>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {channels.map((channel, idx) => (<div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">;
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">;
                  <channel.icon className="w-6 h-6 text-white"/>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>;
                <p className="text-gray-400">{channel.description}</p>;
              </div>))}
          </div>;
        </div>;

        {/* Pricing Section */}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Transparent Pricing Plans;
          </h2>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                : 'border-gray-700'}`}>;
                {};
                  </div>)}
                <div className="text-center mb-6">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="text-4xl font-bold text-indigo-400 mb-1">;
                    {plan.price}
                  </div>;
                  <div className="text-gray-400 mb-4">{plan.period}</div>;
                  <p className="text-gray-300">{plan.description}</p>;
                </div>;

                <ul className="space-y-3 mb-8">;
                  {plan.features.map((feature, featureIdx) => (<li key={featureIdx} className="flex items-center space-x-3">;
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0"/>;
                      <span className="text-gray-300">{feature}</span>;
                    </li>))}
                </ul>;

                <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">;
                  {};
                      {plan.cta}
                    </span>) : (<span className="border border-gray-600 text-gray-300 block hover:border-indigo-500 hover:text-indigo-400">;
                      {plan.cta}
                    </span>)}
                </button>;
              </div>))}
          </div>;
        </div>;

        {/* Benefits Section */}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Why Choose AI Customer Service Automation?;
          </h2>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {benefits.map((benefit, idx) => (<div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">;
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">;
                  <benefit.icon className="w-6 h-6 text-white"/>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                <p className="text-gray-400">{benefit.description}</p>;
              </div>))}
          </div>;
        </div>;

        {/* CTA Section */}
        <div className="text-center">;
          <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-2xl p-8">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Customer Service?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join leading companies who are already leveraging AI to provide exceptional customer experiences while reducing operational costs.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">;
                Start Free Trial Today;
              </Link>;
              <Link to="/request-demo" className="px-8 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-200">;
                Schedule Demo;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>)}


export { AICustomerServiceAutomation }
export { AICustomerServiceAutomation }
export { AICustomerServiceAutomation }
export { AICustomerServiceAutomation }
export { AICustomerServiceAutomation }