import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Target, Zap, Settings, CheckCircle, Star,  Eye,  Target,  Settings } from 'lucide-react';
const AICustomerInsightsPage: React.FC = () => {
<<<<<<< HEAD
    const features = [],
  return (
    {// TODO: Add content
  }
}
=======
};
const features = [];
  return (
    {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ico,
  n: Eye,
      titl,
  e: 'Customer Analytics',
      descriptio,
  n: 'AI-powered customer behavior analysis',
      benefit,
  s: ['Behavior tracking', 'Pattern recognition', 'Insight generation'];
    },
      ico,
  n: Target,
      titl,
  e: 'Segmentation',
      descriptio,
  n: 'Intelligent customer segmentation and targeting',
      benefit,
  s: ['Smart segmentation', 'Persona creation', 'Targeted marketing']
      ico,
  n: Settings,
      titl,
  e: 'Personalization',
      descriptio,
  n: 'AI-driven personalization and recommendations',
      benefit,
  s: ['Personalized experiences', 'Product recommendations', 'Content customization']
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
// AI Customer Insights
=======
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
// AI Customer Insights;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </h1>"
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse"></p>
// Deep Customer Intelligence,
          </p>"
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Understand your customers like never before with AI-powered insights.
            Analyze behavior, predict needs, and deliver personalized experiences.
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
            <a
              href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
// >
//               Get Started
          </a>
              href="tel:+13024640950" className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
<Eye className="w-5 h-5" />
              +1 302 464 0950,
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
//>
//               Get Started;
          </a>
              href="tel:+13024640950" className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
<Eye className="w-5 h-5" />
              +1 302 464 0950;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </div>
        </section>"
        <section className="mb-16"></section>"
          <h2 className="text-3xl,"
  md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
// Customer Insights Features,
          </h2>"
          <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-4 gap-8"></div>)
            {features.map((feature, index) => ()}"
          <div key={index} className="cyber-card p-6,"
  hover:scale-105 transition-all duration-300"></div>"
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"></div>"
                  <feature.icon className="w-8 h-8 text-white" /></feature>"
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text"></h3>
                  {feature.title};
                </h3>"
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed"></p>
                  {feature.description}"
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="flex items-center text-xs text-gray-300"></li>"
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                      {benefit};
                    </li>
                  ))};
                </ul>
      </main>
      <Footer /></Footer>
    </div>
<<<<<<< HEAD
  );
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default PagePage;
