import React from 'react';'
import { CheckCircle, Shield, Zap, Users, Clock, Award, Bot, Globe, TrendingDown  } from 'lucide-react';'

interface Benefit {
  }
  "title": string;
  "description": string;
  "icon": React.ReactNode;

}

const "BenefitsSection": React.FC = () => ;
  const "benefits": Benefit[] = [;
    {"icon": <CheckCircle className="w-8 h-8 text-green-500" />,"title": 'Proven Results',"description": 'We deliver measurable results with a 98% client satisfaction rate and proven ROI.';'
    },{"icon": <Shield className="w-8 h-8 text-blue-500" />,"title": 'Enterprise Security',"description": 'Bank-level security with SOC 2 compliance and advanced threat protection.';'
    },{"icon": <Bot className="w-8 h-8 text-purple-500" />,"title": 'AI-Powered Solutions',"description": 'Our advanced AI algorithms provide cutting-edge solutions tailored to your specific needs.';'
    },{"icon": <Globe className="w-8 h-8 text-indigo-500" />,"title": 'Global Reach',"description": 'Access a worldwide network of skilled professionals and cutting-edge services.';'
    },{"icon": <Clock className="w-8 h-8 text-orange-500" />,"title": '24/7 Support',"description": 'Round-the-clock assistance from our dedicated team to ensure your success.';'
    },{"icon": <TrendingDown className="w-8 h-8 text-red-500" />,"title": 'Cost Reduction',"description": 'Save up to 40% on your projects through direct connections and competitive pricing.';'
    }
  ];return (<section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">;"
      <div className="container mx-auto px-4">;"
        <div className="text-center mb-16">;"
          <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
            Why Choose Zion Tech?;
          </h2>;
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;"
            We combine cutting-edge technology with exceptional service to deliver;
            solutions that drive real business value.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 max-w-6xl mx-auto">;"
          {benefits.map((benefit, index) => (<div;
              }
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg "hover":shadow-xl transition-all duration-300 "hover":-translate-y-2">"

              <div className="text-blue-600 mb-4 flex justify-center">;"
                {benefit.icon}
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">;"
                {benefit.title}
              </h3>;
              <p className="text-gray-600 text-center">;"
                {benefit.description}
              </p>;
            </div>;
          ))}
        </div>;
        <div className="mt-16 text-center">;"
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">;"
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>;"
            <p className="text-xl mb-6 opacity-90">;"
              Join hundreds of companies that trust Zion Tech for their technology needs.;
            </p>;
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors">;"
                Start Your Project;
              </button>;
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-600 transition-colors">;"
                Schedule a Demo;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  )}

export default BenefitsSection;