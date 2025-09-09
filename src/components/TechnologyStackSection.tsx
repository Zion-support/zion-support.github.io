import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Brain, Zap, Globe, Lock, Server, Cpu } from 'lucide-react';

const technologyCategories = [
  {
    name: 'Frontend Technologies',
    icon: Code,
    technologies: [
      { name: 'React', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
      { name: 'Vue.js', level: 'Advanced', color: 'from-green-500 to-emerald-500' },
      { name: 'Angular', level: 'Advanced', color: 'from-red-500 to-pink-500' },
      { name: 'TypeScript', level: 'Expert', color: 'from-blue-600 to-indigo-600' },
      { name: 'Next.js', level: 'Expert', color: 'from-gray-700 to-black' },
      { name: 'Tailwind CSS', level: 'Expert', color: 'from-cyan-500 to-blue-500' }
    ]
  },
  {
    name: 'Backend Technologies',
    icon: Server,
    technologies: [
      { name: 'Node.js', level: 'Expert', color: 'from-green-600 to-green-800' },
      { name: 'Python', level: 'Expert', color: 'from-yellow-500 to-blue-600' },
      { name: 'Java', level: 'Advanced', color: 'from-red-600 to-orange-600' },
      { name: 'Go', level: 'Advanced', color: 'from-blue-500 to-cyan-500' },
      { name: 'Rust', level: 'Intermediate', color: 'from-orange-500 to-red-500' },
      { name: 'C#', level: 'Advanced', color: 'from-purple-600 to-purple-800' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    technologies: [
      { name: 'AWS', level: 'Expert', color: 'from-orange-500 to-yellow-500' },
      { name: 'Azure', level: 'Advanced', color: 'from-blue-600 to-blue-800' },
      { name: 'Google Cloud', level: 'Advanced', color: 'from-blue-500 to-green-500' },
      { name: 'Docker', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
      { name: 'Kubernetes', level: 'Advanced', color: 'from-blue-600 to-indigo-600' },
      { name: 'Terraform', level: 'Advanced', color: 'from-purple-500 to-pink-500' }
    ]
  },
  {
    name: 'Databases',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', level: 'Expert', color: 'from-blue-600 to-blue-800' },
      { name: 'MongoDB', level: 'Expert', color: 'from-green-500 to-green-700' },
      { name: 'Redis', level: 'Advanced', color: 'from-red-500 to-red-700' },
      { name: 'MySQL', level: 'Advanced', color: 'from-blue-500 to-blue-700' },
      { name: 'Elasticsearch', level: 'Advanced', color: 'from-green-600 to-blue-600' },
      { name: 'Cassandra', level: 'Intermediate', color: 'from-blue-500 to-indigo-500' }
    ]
  },
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    technologies: [
      { name: 'TensorFlow', level: 'Expert', color: 'from-orange-500 to-red-500' },
      { name: 'PyTorch', level: 'Expert', color: 'from-red-500 to-orange-500' },
      { name: 'Scikit-learn', level: 'Expert', color: 'from-orange-500 to-yellow-500' },
      { name: 'OpenAI API', level: 'Advanced', color: 'from-green-500 to-blue-500' },
      { name: 'Hugging Face', level: 'Advanced', color: 'from-yellow-500 to-orange-500' },
      { name: 'LangChain', level: 'Advanced', color: 'from-blue-500 to-purple-500' }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    technologies: [
      { name: 'OWASP', level: 'Expert', color: 'from-orange-500 to-red-500' },
      { name: 'Penetration Testing', level: 'Advanced', color: 'from-red-500 to-pink-500' },
      { name: 'Zero Trust', level: 'Advanced', color: 'from-blue-500 to-cyan-500' },
      { name: 'SIEM Tools', level: 'Advanced', color: 'from-green-500 to-emerald-500' },
      { name: 'Threat Intelligence', level: 'Advanced', color: 'from-purple-500 to-pink-500' },
      { name: 'Compliance Frameworks', level: 'Expert', color: 'from-indigo-500 to-purple-500' }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'text-green-400 bg-green-400/10 border-green-400/30';
    case 'Advanced':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
    case 'Intermediate':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
  }
};

export function TechnologyStackSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our comprehensive technology expertise spans the entire software development 
            stack, from frontend frameworks to cutting-edge AI and cloud solutions.
          </p>
        </motion.div>

        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technologyCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                          <span className="text-zion-slate-light text-sm">{tech.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(tech.level)}`}>
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stats */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-zion-slate-light">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-zion-slate-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-zion-slate-light">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Specific Technology Solution?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Our team has deep expertise in a wide range of technologies. 
              Let's discuss how we can leverage the right tech stack for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Discuss Your Tech Needs
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}