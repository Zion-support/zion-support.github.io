import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Microchip, 
  Network, 
  Globe2, 
  Eye, 
  ArrowRight,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

interface EmergingTechnology {
  title: string;
  description: string;
  icon: any;
  path: string;
  features: string[];
}

interface EmergingTechnologiesSectionProps {
  technologies: EmergingTechnology[];
}

export const EmergingTechnologiesSection: React.FC<EmergingTechnologiesSectionProps> = ({ technologies }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Emerging Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our cutting-edge technology solutions that are shaping the future of business
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {tech.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {tech.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {tech.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={tech.path}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/emerging-tech"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore All Emerging Technologies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-4 h-4 bg-blue-500 rounded-full opacity-40"></div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float-slow">
        <div className="w-2 h-2 bg-purple-400 rounded-full opacity-50"></div>
      </div>

      {/* CSS animations will be handled by Tailwind classes */}
    </section>
  );
};

export default EmergingTechnologiesSection;