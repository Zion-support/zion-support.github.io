import React from 'react';'
import { motion } from 'framer-motion';
import {

  Brain,
  Globe,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,'
  Award} from 'lucide-react';

const highlights = [
  {

    icon: Brain,'
    title: 'AI-Powered Intelligence',
    description:'
      'Advanced machine learning algorithms that continuously learn and adapt to provide smarter solutions.',
    features: ['
      'Predictive Analytics','
      'Smart Recommendations','
      'Automated Workflows',
    ],'
    color: 'from-zion-purple to-zion-purple-dark','
    bgColor: 'bg-zion-purple/10','
    borderColor: 'border-zion-purple/20'},
  {

    icon: Globe,'
    title: 'Global Network',
    description:'
      'Connect with professionals and businesses from over 150 countries worldwide.',
    features: ['
      'Multi-language Support','
      'Local Expertise','
      '24/7 Availability',
    ],'
    color: 'from-zion-cyan to-zion-cyan-dark','
    bgColor: 'bg-zion-cyan/10','
    borderColor: 'border-zion-cyan/20'},
  {

    icon: Shield,'
    title: 'Enterprise Security',
    description:'
      'Bank-grade security with SOC 2 compliance and end-to-end encryption.','
    features: ['Data Protection', 'Access Control', 'Audit Trails'],'
    color: 'from-zion-blue to-zion-blue-dark','
    bgColor: 'bg-zion-blue/10','
    borderColor: 'border-zion-blue/20'},
];
;
const achievements = [
  {

    icon: Award,'
    number: '50+','
    label: 'Industry Awards','
    color: 'text-yellow-400'},
  {

    icon: Users,'
    number: '1M+','
    label: 'Active Users','
    color: 'text-zion-cyan'},
  {

    icon: TrendingUp,'
    number: '300%','
    label: 'Growth Rate','
    color: 'text-green-400'},
  {

    icon: Star,'
    number: '4.9/5','
    label: 'User Rating','
    color: 'text-zion-purple'},
];

const technologies = ['
  'Machine Learning','
  'Blockchain','
  'Cloud Computing','
  'IoT','
  'Cybersecurity','
  'Data Analytics',
];
;
export function FeatureHighlights() {
  const containerVariants = {

    hidden: { opacity: 0 },
    visible: {

      opacity: 1,
      transition: {

        staggerChildren: 0.2,
        delayChildren: 0.1}}};

  const itemVariants = {

    hidden: {

      opacity: 0,
      y: 30,
      scale: 0.95},
    visible: {

      opacity: 1,
      y: 0,
      scale: 1,
      transition: {

        duration: 0.6,'
        ease: 'easeOut'}}};

  const achievementVariants = {

    hidden: {

      opacity: 0,
      scale: 0.8},
    visible: {

      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }}};

  const techVariants = {

    hidden: {

      opacity: 0,
      x: -20},
    visible: {

      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }}};

  return()
    <section className="py-20 bg-gradient-to-b from-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background decorative elements */}"
      <div className="absolute inset-0 opacity-5">"
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>"
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>
"
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div"
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">'
            Why Choose{' '}"
            <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Zion Tech
            </span>
          </h2>"
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge solutions,
            backed by innovation, security, and global expertise.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}"
          initial="hidden""
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => ("
            <motion.div key={index} variants={itemVariants} className="group">
              <div
                className={`${highlight.bgColor} ${highlight.borderColor} border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group-hover:scale-105`}
              >
                <div`
                  className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >"
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">
                  {highlight.title}
                </h3>"
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {highlight.description}
                </p>"
                <ul className="space-y-2 mb-6">
                  {highlight.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}"
                      className="flex items-center text-zion-slate-light"
                    >"
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>"
                <div className="flex items-center text-zion-purple-light font-medium group-hover:text-zion-purple transition-colors duration-200">
                  Learn More"
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div"
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >"
          <h3 className="text-3xl font-bold text-white mb-12">
            Trusted by Millions Worldwide
          </h3>"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={achievementVariants}"
                initial="hidden""
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}"
                className="text-center"
              >
                <div`
                  className={`w-20 h-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <achievement.icon`
                    className={`w-10 h-10 ${achievement.color}`}
                  />
                </div>`
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>"
                <div className="text-zion-slate-light text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div"
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >"
          <h3 className="text-3xl font-bold text-white mb-8">
            Cutting-Edge Technologies
          </h3>"
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={techVariants}"
                initial="hidden""
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}"
                className="px-6 py-3 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-cyan hover:bg-zion-purple/20 hover:border-zion-purple/40 transition-all duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'"`