import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Bot, Cpu, Settings, Shield, CheckCircle, Star,  Bot,  Cpu,  Shield } from 'lucide-react';
const AIRoboticsPage: React.FC = () => {
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
  n: Bot,
      titl,
  e: 'Intelligent Robotics',
      descriptio,
  n: 'AI-powered robots that learn and adapt to their environment',
      benefit,
  s: ['Autonomous operation', 'Learning capabilities', 'Adaptive behavior'];
    },
      ico,
  n: Cpu,
      titl,
  e: 'Advanced Control Systems',
      descriptio,
  n: 'Sophisticated control algorithms for precise robot movement',
      benefit,
  s: ['Precision control', 'Real-time processing', 'Safety systems']
      ico,
  n: Shield,
      titl,
  e: 'Safety & Security',
      descriptio,
  n: 'Built-in safety protocols and security measures',
      benefit,
  s: ['Collision avoidance', 'Emergency stops', 'Data protection']
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
// AI Robotics Platform
=======
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
// AI Robotics Platform;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </h1>"
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse"></p>
            Intelligent Robotics Solutions for Modern Industry,
          </p>"
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Build the future with our AI-powered robotics platform. From autonomous manufacturing to intelligent service robots,
            we provide the technology to create robots that think, learn, and adapt.
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
            <a
              href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
// >
//               Start Building
          </a>
              href="tel:+13024640950" className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
<Bot className="w-5 h-5" />
              +1 302 464 0950,
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
//>
//               Start Building;
          </a>
              href="tel:+13024640950" className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
<Bot className="w-5 h-5" />
              +1 302 464 0950;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </div>
        </section>"
        <section className="mb-16"></section>"
          <h2 className="text-3xl,"
  md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
// Platform Features,
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
export default AiRoboticsPage;
