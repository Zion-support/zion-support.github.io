import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Zap,
  Globe,
  Server,
  Cpu,
  Network
} from 'lucide-react';

const technologyCategories = [
  {
    category: "Frontend Technologies",
    technologies: [
      { name: "React", icon: "⚛️", proficiency: 95 },
      { name: "Vue.js", icon: "💚", proficiency: 90 },
      { name: "Angular", icon: "🅰️", proficiency: 85 },
      { name: "TypeScript", icon: "📘", proficiency: 95 },
      { name: "Tailwind CSS", icon: "🎨", proficiency: 90 }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend Technologies",
    technologies: [
      { name: "Node.js", icon: "🟢", proficiency: 95 },
      { name: "Python", icon: "🐍", proficiency: 90 },
      { name: "Java", icon: "☕", proficiency: 85 },
      { name: "Go", icon: "🐹", proficiency: 80 },
      { name: "Rust", icon: "🦀", proficiency: 75 }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "TensorFlow", icon: "🧠", proficiency: 90 },
      { name: "PyTorch", icon: "🔥", proficiency: 85 },
      { name: "Scikit-learn", icon: "📊", proficiency: 90 },
      { name: "OpenAI GPT", icon: "🤖", proficiency: 85 },
      { name: "Hugging Face", icon: "🤗", proficiency: 80 }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "☁️", proficiency: 90 },
      { name: "Azure", icon: "🔷", proficiency: 85 },
      { name: "Google Cloud", icon: "🔵", proficiency: 80 },
      { name: "Docker", icon: "🐳", proficiency: 90 },
      { name: "Kubernetes", icon: "⚓", proficiency: 85 }
    ],
    color: "from-orange-500 to-red-500"
  }
];

const emergingTech = [
  { name: "Quantum Computing", icon: "⚛️", status: "Research" },
  { name: "Blockchain", icon: "🔗", status: "Production" },
  { name: "Edge Computing", icon: "🌐", status: "Development" },
  { name: "5G Networks", icon: "📡", status: "Integration" },
  { name: "IoT Platforms", icon: "📱", status: "Production" },
  { name: "AR/VR", icon: "🥽", status: "Research" }
];

export function TechnologyStackSection() {
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
            Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies and industry best practices.
            Our comprehensive tech stack ensures scalability, security, and performance.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {technologyCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-sm">⚡</span>
                </div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.8 + techIndex * 0.1 }}
                        />
                      </div>
                      <span className="text-blue-400 text-sm font-semibold w-8 text-right">
                        {tech.proficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emerging Technologies */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Emerging Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
                  <div className={`w-2 h-2 rounded-full ${
                    tech.status === 'Production' ? 'bg-green-400' :
                    tech.status === 'Development' ? 'bg-yellow-400' :
                    tech.status === 'Integration' ? 'bg-blue-400' : 'bg-purple-400'
                  }`}></div>
                  <span className="text-gray-300 text-sm">{tech.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Philosophy */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Our Technology Philosophy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Innovation First</h4>
                <p className="text-gray-400 text-sm">Always exploring cutting-edge technologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Security Focused</h4>
                <p className="text-gray-400 text-sm">Enterprise-grade security in everything we build</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Performance Driven</h4>
                <p className="text-gray-400 text-sm">Optimized for speed and scalability</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build with Modern Tech?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to help you leverage the latest technologies
              to build scalable, secure, and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project
                <Code className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                View Tech Specs
                <Server className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}