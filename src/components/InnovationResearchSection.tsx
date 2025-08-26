import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  TestTube, 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp, 
  Rocket, 
  Brain, 
  Microscope, 
  Target 
} from 'lucide-react';

export const InnovationResearchSection: React.FC = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advancing the frontiers of machine learning, neural networks, and cognitive computing.',
      focus: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics'],
      publications: '25+',
      patents: '8'
    },
    {
      icon: TestTube,
      title: 'Quantum Computing',
      description: 'Exploring quantum algorithms and quantum-classical hybrid systems.',
      focus: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning', 'Error Correction'],
      publications: '15+',
      patents: '5'
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description: 'Developing next-generation space exploration and satellite technologies.',
      focus: ['Satellite Systems', 'Space Robotics', 'Propulsion Systems', 'Space Mining'],
      publications: '20+',
      patents: '12'
    },
    {
      icon: Target,
      title: 'Biotechnology',
      description: 'Revolutionizing healthcare through genetic engineering and bioinformatics.',
      focus: ['CRISPR Technology', 'Drug Discovery', 'Personalized Medicine', 'Bioinformatics'],
      publications: '30+',
      patents: '15'
    },
    {
      icon: Microscope,
      title: 'Nanotechnology',
      description: 'Engineering materials and devices at the molecular and atomic scale.',
      focus: ['Nano Materials', 'Molecular Electronics', 'Nano Medicine', 'Quantum Dots'],
      publications: '18+',
      patents: '9'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Energy',
      description: 'Creating clean energy solutions for a sustainable future.',
      focus: ['Solar Technology', 'Energy Storage', 'Smart Grids', 'Carbon Capture'],
      publications: '22+',
      patents: '11'
    }
  ];

  const stats = [
    { label: 'Research Papers', value: '130+', icon: BookOpen },
    { label: 'Patents Filed', value: '60+', icon: Award },
    { label: 'Research Partners', value: '25+', icon: Users },
    { label: 'Innovation Awards', value: '15+', icon: Lightbulb }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research, 
            breakthrough innovations, and collaborative partnerships with leading institutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-indigo-100 rounded-xl mr-4">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {area.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Research Focus:</h4>
                  <div className="space-y-2">
                    {area.focus.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{area.publications}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{area.patents}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join the Innovation Revolution
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Partner with us to explore the frontiers of technology and create 
              solutions that will shape the future of humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Research Partnership
                <Flask className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg font-medium transition-colors duration-200">
                View Publications
                <BookOpen className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationResearchSection;