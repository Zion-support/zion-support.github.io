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

export const TechnologyStackSection: React.FC = () => {
  const techCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      technologies: [
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Hugging Face',
        'Keras', 'Pandas', 'NumPy', 'Jupyter', 'MLflow'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Frontend Development',
      technologies: [
        'React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js',
        'Tailwind CSS', 'Material-UI', 'Redux', 'GraphQL', 'Webpack'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      technologies: [
        'Node.js', 'Python', 'Java', 'Go', 'C#',
        'Express.js', 'Django', 'Spring Boot', 'FastAPI', 'ASP.NET Core'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      technologies: [
        'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch',
        'AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'DynamoDB', 'Cassandra'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      technologies: [
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
        'Terraform', 'Jenkins', 'GitLab CI/CD', 'Ansible', 'Prometheus'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      technologies: [
        'OAuth 2.0', 'JWT', 'SAML', 'LDAP', 'MFA',
        'SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption'
      ],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', status: 'Research & Development', icon: Cpu },
    { name: 'Blockchain', status: 'Production Ready', icon: Network },
    { name: 'Edge Computing', status: 'Deployment Ready', icon: Zap },
    { name: '5G Networks', status: 'Implementation', icon: Globe }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies and industry best practices. 
            Our comprehensive tech stack ensures scalability, security, and performance.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => {
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

                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emerging Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Emerging Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTech.map((tech, index) => {
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
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
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
};

export default TechnologyStackSection;
