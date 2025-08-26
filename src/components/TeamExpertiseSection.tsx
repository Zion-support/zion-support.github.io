import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target, CheckCircle, Star } from 'lucide-react';

const expertise = [
  {
    icon: Users,
    title: 'Expert Team',
    description: '150+ certified professionals with deep industry expertise',
    metric: '150+',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Multiple awards and certifications for excellence',
    metric: '25+',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Years of Experience',
    description: 'Decades of combined experience in technology solutions',
    metric: '15+',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Success Rate',
    description: 'Proven track record of successful project delivery',
    metric: '98%',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: CheckCircle,
    title: 'Projects Completed',
    description: 'Successfully delivered projects across various industries',
    metric: '500+',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Star,
    title: 'Client Satisfaction',
    description: 'Consistently high ratings from our valued clients',
    metric: '4.9/5',
    color: 'from-yellow-500 to-orange-500'
  }
];

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    image: '👩‍💻',
    achievements: ['PhD in Computer Science', 'Ex-Google AI', '50+ AI Projects']
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Cybersecurity',
    expertise: 'Security & Compliance',
    experience: '12+ years',
    image: '👨‍💼',
    achievements: ['CISSP Certified', 'Ex-Microsoft Security', 'Zero Breach Record']
  },
  {
    name: 'Dr. Emily Watson',
    role: 'VP of Engineering',
    expertise: 'Cloud & DevOps',
    experience: '18+ years',
    image: '👩‍🔬',
    achievements: ['AWS Solutions Architect', 'Ex-Amazon', '100+ Cloud Migrations']
  },
  {
    name: 'James Kim',
    role: 'Director of Data Science',
    expertise: 'Analytics & BI',
    experience: '14+ years',
    image: '👨‍💻',
    achievements: ['PhD in Statistics', 'Ex-Netflix', 'Big Data Expert']
  }
];

export function TeamExpertiseSection() {
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
            Team <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our world-class team brings together decades of experience from leading tech companies, 
            delivering innovative solutions that drive real business results.
          </p>
        </motion.div>

        {/* Expertise Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 max-w-6xl mx-auto">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Leadership
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                  <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-zion-cyan font-medium mb-1">{member.role}</p>
                  <p className="text-zion-slate-light text-sm mb-3">{member.expertise}</p>
                  <p className="text-zion-slate-light text-xs mb-4">{member.experience}</p>
                  
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center justify-center text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Let's discuss how our expertise can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}