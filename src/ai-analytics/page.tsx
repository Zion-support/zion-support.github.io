import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {BarChart, Target, Zap, Settings, CheckCircle} from 'lucide-react;

const AIAnalyticsPage: any,
    n: any,
      title: any,
      description: any,
      benefits: any, 'Real-time metrics', 'Instant insights']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Forecasting', 'Risk analysis']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Custom dashboards', 'Scheduled delivery']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Flexible metrics', 'Personalized views']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      ;
      <main className="container mx-auto px-4 py-16 pt-24">";
        <section className="text-center mb-16">";
          <h1 className="text-5xl md: any,>;
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

export default AIAnalyticsPage;'";
import { BarChart, Target, Zap, Settings, CheckCircle } from 'lucide-react';"'";
"'"'";