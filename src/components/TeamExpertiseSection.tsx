import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Award, 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  Star,
  CheckCircle,
  Globe,
  Rocket
 } from 'lucide-react';

export const TeamExpertiseSection: React.FC = (): JSX.Element => {
  const expertise = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep expertise in neural networks, natural language processing, and predictive analytics.',
      certifications['AWS Machine Learning', 'Google Cloud AI', 'Microsoft Azure AI'],
      experience: '8+ years',
      projects: '150+'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Expert security professionals with certifications in ethical hacking and compliance.',
      certifications['CISSP', 'CEH', 'CompTIA Security+', 'ISO 27001'],
      experience: '10+ years',
      projects: '200+'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Certified cloud architects specializing in multi-cloud and hybrid solutions.',
      certifications['AWS Solutions Architect', 'Azure Solutions Architect', 'Google Cloud Architect'],
      experience: '12+ years',
      projects: '300+'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic consultants with proven track records in business transformation.',
      certifications['PMP', 'ITIL', 'Six Sigma Black Belt', 'Change Management'],
      experience: '15+ years',
      projects: '500+'
    },
    {
      icon: Globe,
      title: 'Web & Mobile Development',
      description: 'Full-stack developers with expertise in modern frameworks and technologies.',
      certifications['React', 'Node.js', 'Flutter', 'AWS Developer'],
      experience: '6+ years',
      projects: '100+'
    },
    {
      icon: Rocket,
      title: 'Innovation & R&D',
      description: 'Research scientists and engineers pushing the boundaries of technology.',
      certifications['PhD Computer Science', 'Patent Holders', 'Research Publications'],
      experience: '20+ years',
      projects: '50+'
    }
  ];

const coreExpertise = [
  "Artificial Intelligence & Machine Learning",
  "Quantum Computing & Algorithms",
  "Blockchain & Web3 Technologies",
  "Cloud Infrastructure & DevOps",
  "Cybersecurity & Compliance",
  "Data Science & Analytics",
  "IoT & Edge Computing",
  "Mobile & Web Development"
];

export function TeamExpertiseSection() {
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
            Team Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our world-class team brings together decades of experience in cutting-edge technologies
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index)  => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )})}
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertise.map((item, index)  => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl mr-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold text-gray-900">{item.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Projects:</span>
                    <span className="font-semibold text-gray-900">{item.projects}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )})}
        </div>

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Core Technology Expertise
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We specialize in the most advanced and in-demand technologies that drive business transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {coreExpertise.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="text-white font-medium text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Ready to work with experts?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  )};

export default TeamExpertiseSection;
