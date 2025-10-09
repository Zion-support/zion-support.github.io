import React from 'react';
import Navigation from '../components/Navigation';
import {Search, Target, Zap, Settings, CheckCircle, Star} from 'lucide-react;

const AISEOOptimizerPage: any,
    n: any,
      title: any,
      description: any,
      benefits: any, 'On-page optimization', 'Technical SEO']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Keyword density', 'Readability']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Performance monitoring', 'Alert system']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Competitor analysis', 'Performance reports']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md: any,>";
    e="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Boost your search engine rankings with AI-powered SEO optimization. 
            Analyze, optimize, and monitor your website's SEO performance automatically.
          </p>;
          ;
          <div className="flex flex-col sm: any,>;
    g: any;
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover: any,>
    e="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>;
      </main>;
;
      <Footer />;
    </div>;
  );
};

export default AISEOOptimizerPage;'";
import Footer from '../components/Footer';"'";
"'"'";