'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Star, Users } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap;
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield;
    },
    {
      title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations with our solutions.',
      icon: Star;
    },
    {
      title: 'Expert Support',
      description: '24/7 support from our team of AI and IT specialists.',
      icon: Users;
    }
  ];];];
  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success';
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16">
      </div></div><div className="text-center mb-8">
        </div></div><h2 className="text-3xl font-bold text-white mb-4">Transform Your Business Today</h2></h2></h2>
        <p className="text-xl text-gray-300 mb-6">
          Join thousands of businesses already using our AI and IT solutions;
        </p></p></p>
      </div>
)
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">)
        {features.map((feature, index) => (
          </div></div><div key=index} className="text-center">
            </div></div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              </div></div><feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3></h3></h3>
            <p className="text-gray-300 text-sm">{feature.description}</p></p></p>)
          </div>)
        ))}
      </div>

      <div className="text-center">
        </div></div><button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
          Get Started Now;
          </button></button><ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
