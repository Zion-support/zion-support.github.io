import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Brain, Zap, Server, Globe } from 'lucide-react';

export function TechnologyStackSection() {
  const technologyCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      description: "Modern, responsive web applications",
      technologies: [
        { name: "React", level: "Expert", color: "from-blue-500 to-cyan-500" },
        { name: "Vue.js", level: "Advanced", color: "from-green-500 to-emerald-500" },
        { name: "Angular", level: "Advanced", color: "from-red-500 to-pink-500" },
        { name: "TypeScript", level: "Expert", color: "from-blue-600 to-blue-700" },
        { name: "Next.js", level: "Expert", color: "from-gray-800 to-gray-900" },
        { name: "Tailwind CSS", level: "Expert", color: "from-cyan-500 to-blue-500" }
      ]
    },
    {
      icon: Server,
      title: "Backend Technologies",
      description: "Scalable server-side solutions",
      technologies: [
        { name: "Node.js", level: "Expert", color: "from-green-500 to-green-600" },
        { name: "Python", level: "Expert", color: "from-blue-500 to-blue-600" },
        { name: "Java", level: "Advanced", color: "from-orange-500 to-red-500" },
        { name: "Go", level: "Advanced", color: "from-cyan-500 to-blue-500" },
        { name: "C#", level: "Advanced", color: "from-purple-500 to-purple-600" },
        { name: "PHP", level: "Advanced", color: "from-blue-400 to-indigo-500" }
      ]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      description: "Data management and persistence",
      technologies: [
        { name: "PostgreSQL", level: "Expert", color: "from-blue-500 to-blue-600" },
        { name: "MongoDB", level: "Expert", color: "from-green-500 to-green-600" },
        { name: "Redis", level: "Advanced", color: "from-red-500 to-red-600" },
        { name: "MySQL", level: "Advanced", color: "from-orange-500 to-orange-600" },
        { name: "Elasticsearch", level: "Advanced", color: "from-blue-500 to-blue-600" },
        { name: "DynamoDB", level: "Advanced", color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure and deployment",
      technologies: [
        { name: "AWS", level: "Expert", color: "from-orange-500 to-orange-600" },
        { name: "Azure", level: "Expert", color: "from-blue-500 to-blue-600" },
        { name: "Google Cloud", level: "Advanced", color: "from-blue-500 to-blue-600" },
        { name: "Kubernetes", level: "Expert", color: "from-blue-500 to-blue-600" },
        { name: "Docker", level: "Expert", color: "from-blue-500 to-blue-600" },
        { name: "Terraform", level: "Advanced", color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent automation and insights",
      technologies: [
        { name: "TensorFlow", level: "Expert", color: "from-orange-500 to-orange-600" },
        { name: "PyTorch", level: "Expert", color: "from-red-500 to-red-600" },
        { name: "Scikit-learn", level: "Expert", color: "from-orange-500 to-orange-600" },
        { name: "OpenAI API", level: "Advanced", color: "from-green-500 to-green-600" },
        { name: "Hugging Face", level: "Advanced", color: "from-yellow-500 to-yellow-600" },
        { name: "LangChain", level: "Advanced", color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security",
      technologies: [
        { name: "OAuth 2.0", level: "Expert", color: "from-blue-500 to-blue-600" },
        { name: "JWT", level: "Expert", color: "from-purple-500 to-purple-600" },
        { name: "SSL/TLS", level: "Expert", color: "from-green-500 to-green-600" },
        { name: "SOC 2", level: "Advanced", color: "from-blue-500 to-blue-600" },
        { name: "GDPR", level: "Advanced", color: "from-blue-500 to-blue-600" },
        { name: "Zero Trust", level: "Advanced", color: "from-red-500 to-red-600" }
      ]
    }
  ];

  const expertiseLevels = {
    "Expert": { color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" },
    "Advanced": { color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
    "Intermediate": { color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive technology expertise spans the entire modern development stack, 
            from frontend frameworks to AI/ML platforms and cloud infrastructure.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologyCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        expertiseLevels[tech.level as keyof typeof expertiseLevels]?.bg
                      } ${
                        expertiseLevels[tech.level as keyof typeof expertiseLevels]?.color
                      } ${
                        expertiseLevels[tech.level as keyof typeof expertiseLevels]?.border
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Expertise Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(expertiseLevels).map(([level, styles]) => (
                <div key={level} className="flex items-center justify-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${styles.bg} ${styles.border}`}></div>
                  <span className={`font-medium ${styles.color}`}>{level}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-6">
              Our team continuously updates their skills to stay current with the latest 
              technologies and industry best practices.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Specific Technology Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Our expertise spans hundreds of technologies. Let us know what you need, 
              and we'll assemble the perfect tech stack for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Code className="w-5 h-5 mr-2" />
                Discuss Your Tech Stack
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <Zap className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}