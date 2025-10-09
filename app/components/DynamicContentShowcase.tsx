import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const technologies = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for business automation and insights',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Computing', 'Auto-scaling']
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Zero Trust Architecture', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation to streamline business operations',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'RPA Solutions', 'Smart Scheduling', 'Task Optimization']
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 cyber-text neon-pulse">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            We leverage the latest technologies to deliver innovative solutions that drive business growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="cyber-card hologram-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <tech.icon className={`w-12 h-12 ${tech.color} mr-4`} />
                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">{tech.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
