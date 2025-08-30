import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain,
  Zap,
  Globe,
  Server,
  Cpu,
  Network
 } from 'lucide-react.ts';

export const TechnologyStackSection: React.FC = (): JSX.Element => {
  const techCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      technologies[
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Hugging Face',
        'Keras', 'Pandas', 'NumPy', 'Jupyter', 'MLflow'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Frontend Development',
      technologies[
        'React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js',
        'Tailwind CSS', 'Material-UI', 'Redux', 'GraphQL', 'Webpack'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      technologies[
        'Node.js', 'Python', 'Java', 'Go', 'C#',
        'Express.js', 'Django', 'Spring Boot', 'FastAPI', 'ASP.NET Core'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      technologies[
        'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch',
        'AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'DynamoDB', 'Cassandra'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      technologies[
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
        'Terraform', 'Jenkins', 'GitLab CI/CD', 'Ansible', 'Prometheus'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      technologies[
        'OAuth 2.0', 'JWT', 'SAML', 'LDAP', 'MFA',
        'SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption'
      ],
      color: 'from-red-500 to-pink-500'
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
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cutting-edge technologies and tools that power our innovative solutions
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index)  => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {category.title}
                  </h3>
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
                  ))}
                </div>
              </motion.div>
            )})}
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
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTech.map((tech, index)  => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{tech.name}</h4>
                  <p className="text-sm text-gray-400">{tech.status}</p>
                </div>
              )})}
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
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Ready to leverage cutting-edge tech?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  )};

export default TechnologyStackSection;
