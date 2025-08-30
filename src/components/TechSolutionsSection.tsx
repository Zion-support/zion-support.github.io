import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';
import { Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Cpu, 
  Database,
  Lock,
  Network,
  Code,
  Server
 } from 'lucide-react.ts';

export const TechSolutionsSection: React.FC = (): JSX.Element => {
  const solutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for automation, prediction, and intelligent decision-making.',
      features['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Deep Learning'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features['Threat Detection', 'Zero Trust Security', 'Compliance Management', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Serverless Architecture'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      features['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Web & Mobile',
      description: 'Modern web and mobile applications built with cutting-edge technologies.',
      features['Progressive Web Apps', 'Native Mobile Apps', 'Responsive Design', 'Performance Optimization'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Innovation Lab',
      description: 'Research and development of next-generation technologies and solutions.',
      features['Emerging Tech', 'Prototype Development', 'Technology Consulting', 'Innovation Strategy'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

export function TechSolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology Solutions
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index)  => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} mr-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group-hover:translate-x-1"
                >
                  Learn More
                  <Rocket className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )})}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Ready to transform your business?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  )};

export default TechSolutionsSection;
