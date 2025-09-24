import React from "react"
import { motion } from "framer-motion"
import {;
  Lightbulb,;
  TestTube,;
  BookOpen,;
  Award,;
  Users,;
  TrendingUp,;
  Rocket,;
  Brain,;
  Microscope,;
  Target;
} from "lucide-react"
const researchAreas = [;
  {;
    icon: "🧠",title: "Artificial Intelligence",description: "Advanced AI algorithms and neural network architectures",progress: 85,color: "from-purple-500 to-pink-500"
  };
  {;
    icon: "⚛️",title: "Quantum Computing",description: "Quantum algorithms and quantum machine learning",progress: 70,color: "from-blue-500 to-cyan-500"
  };
  {;
    icon: "🔗",title: "Blockchain Technology",description: "Next-generation blockchain and Web3 solutions",progress: 90,color: "from-green-500 to-emerald-500"
  };
  {;
    icon: "🌐",title: "Edge Computing",description: "Distributed computing and IoT optimization",progress: 80,color: "from-orange-500 to-red-500"
  };
];
const innovationMetrics = [;
  { label: "Research Papers", value: "30+", icon: "📚" };
  { label: "Patents Filed", value: "15+", icon: "📋" };
  { label: "R&D Investment", value: "$2M+", icon: "💰" };
  { label: "Innovation Awards", value: "8+", icon: "🏆" };
];
export function InnovationResearchSection() {;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6 }};
        >;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">;
            Innovation & Research;
          </[^>]*>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Pushing the boundaries of technology through cutting-edge research;
            breakthrough innovations, and collaborative partnerships with leading institutions.;
          </[^>]*>
        </[^>]*>

        {/* Innovation Metrics */};
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 30 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.2 }};
        >;
          {innovationMetrics.map((metric, index) => (;
            <div key={metric.label} className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">{metric.icon}</[^>]*>
              </[^>]*>
              <div className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</[^>]*>
              <div className="text-gray-300 text-sm">{metric.label}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Research Areas */};
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 30 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.4 }};
        >;
          <h3 className="text-3xl font-bold text-white text-center mb-12">;
            Active Research Areas;
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {researchAreas.map((area, index) => (;
              <motion.div
                key={area.title};
                className="[^"]*"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }};
              >;
                <div className="flex items-start gap-4">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>;
                    <span className="text-2xl">{area.icon}</[^>]*>
                  </[^>]*>
                  ;
                  <div className="flex-1">;
                    <h4 className="text-xl font-bold text-white mb-2">{area.title}</[^>]*>
                    <p className="text-gray-400 text-sm mb-4">{area.description}</[^>]*>
                    ;
                    <div className="mb-2">;
                      <div className="flex justify-between text-sm text-gray-300 mb-1">;
                        <span>Research Progress</[^>]*>
                        <span>{area.progress}%</[^>]*>
                      </[^>]*>
                      <div className="w-full bg-slate-700 rounded-full h-2">;
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${area.color} rounded-full`};
                          initial={{ width: 0 }};
                          whileInView={{ width: `${area.progress}%` }};
                          viewport={{ once: true }};
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }};
                        />;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* Research Highlights */};
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 30 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.8 }};
        >;
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">;
            <h3 className="text-2xl font-bold text-white text-center mb-6">;
              Latest Research Breakthroughs;
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl">🔬</[^>]*>
                </[^>]*>
                <h4 className="text-lg font-bold text-white mb-2">AI Drug Discovery</[^>]*>
                <p className="text-gray-400 text-sm">Accelerating pharmaceutical research with quantum AI</[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl">⚡</[^>]*>
                </[^>]*>
                <h4 className="text-lg font-bold text-white mb-2">Quantum Optimization</[^>]*>
                <p className="text-gray-400 text-sm">Solving complex optimization problems 1000x faster</[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl">🌱</[^>]*>
                </[^>]*>
                <h4 className="text-lg font-bold text-white mb-2">Sustainable Tech</[^>]*>
                <p className="text-gray-400 text-sm">Green computing and energy-efficient algorithms</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 1.0 }};
        >;
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">;
            <h3 className="text-2xl font-bold mb-4">;
              Join the Innovation Revolution;
            </[^>]*>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">;
              Partner with us to explore the frontiers of technology and create;
              solutions that will shape the future of humanity.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">;
                Research Partnership;
                <[^>]*/>
              </[^>]*>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg font-medium transition-colors duration-200">;
                View Publications;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};