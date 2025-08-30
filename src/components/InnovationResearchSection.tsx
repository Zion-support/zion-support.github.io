import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Lightbulb, 
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

<<<<<<< HEAD
export const InnovationResearchSection: React.FC = (): JSX.Element => {
  const researchAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advancing the frontiers of machine learning, neural networks, and cognitive computing.',
      focus['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics'],
      publications: '25+',
      patents: '8'
    },
    {
      icon: TestTube,
      title: 'Quantum Computing',
      description: 'Exploring quantum algorithms and quantum-classical hybrid systems.',
      focus['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning', 'Error Correction'],
      publications: '15+',
      patents: '5'
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description: 'Developing next-generation space exploration and satellite technologies.',
      focus['Satellite Systems', 'Space Robotics', 'Propulsion Systems', 'Space Mining'],
      publications: '20+',
      patents: '12'
    },
    {
      icon: Target,
      title: 'Biotechnology',
      description: 'Revolutionizing healthcare through genetic engineering and bioinformatics.',
      focus['CRISPR Technology', 'Drug Discovery', 'Personalized Medicine', 'Bioinformatics'],
      publications: '30+',
      patents: '15'
    },
    {
      icon: Microscope,
      title: 'Nanotechnology',
      description: 'Engineering materials and devices at the molecular and atomic scale.',
      focus['Nano Materials', 'Molecular Electronics', 'Nano Medicine', 'Quantum Dots'],
      publications: '18+',
      patents: '9'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Energy',
      description: 'Creating clean energy solutions for a sustainable future.',
      focus['Solar Technology', 'Energy Storage', 'Smart Grids', 'Carbon Capture'],
      publications: '22+',
      patents: '11'
    };
  ];
=======
const researchAreas = [
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    description: "Advanced AI algorithms and neural network architectures",
    progress: 85,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "⚛️",
    title: "Quantum Computing",
    description: "Quantum algorithms and quantum machine learning",
    progress: 70,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🔗",
    title: "Blockchain Technology",
    description: "Next-generation blockchain and Web3 solutions",
    progress: 90,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "🌐",;
    title: "Edge Computing",;
    description: "Distributed computing and IoT optimization",;
    progress: 80,;
    color: "from-orange-500 to-red-500";
  };
];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

const innovationMetrics = [;
  { label: "Research Papers", value: "30+", icon: "📚" },;
  { label: "Patents Filed", value: "15+", icon: "📋" },;
  { label: "R&D Investment", value: "$2M+", icon: "💰" },;
  { label: "Innovation Awards", value: "8+", icon: "🏆" };
];

export function IconComponent = stat.icon;
            return (
              <div key = {stat.label} className="text-center">
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
            )})}
        </motion.div>

<<<<<<< HEAD
        {/* Research Areas Grid */}
        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((area, index)  => {;
            const IconComponent = area.icon;
            return (
=======
        {/* Research Areas */}
        <motion.div 
          className = "mb-16"
          initial = {
  { opacity: 0,
  y: 30 





}}
          whileInView = {
  { opacity: 1,
  y: 0 





}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.4 





}}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Active Research Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              <motion.div
                key={area.title}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                initial = {
  { opacity: 0,
  y: 30 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 





}}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{area.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Research Progress</span>
                        <span>{area.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${area.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${area.progress}%` }}
                          viewport={{ once: true }}
                          transition = {
  { duration: 1,
  delay: 0.8 + index * 0.1 





}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
        </div>

        {/* Research Highlights */}
        <motion.div 
          className="mb-12"
          initial = {
  { opacity: 0,
  y: 30 





}}
          whileInView = {
  { opacity: 1,
  y: 0 





}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.8 





}}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Latest Research Breakthroughs
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">AI Drug Discovery</h4>
                <p className="text-gray-400 text-sm">Accelerating pharmaceutical research with quantum AI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Quantum Optimization</h4>
                <p className="text-gray-400 text-sm">Solving complex optimization problems 1000x faster</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Sustainable Tech</h4>
                <p className="text-gray-400 text-sm">Green computing and energy-efficient algorithms</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial = {
  { opacity: 0,
  y: 20 





}}
          whileInView = {
  { opacity: 1,
  y: 0 





}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 1.0 





}}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Join the innovation revolution</span>
<<<<<<< HEAD
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>;
  )};

export default InnovationResearchSection;
=======
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default IconComponent;