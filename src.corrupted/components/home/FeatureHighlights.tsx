import { motion } from "framer-motion"
import {;
  Award,;
  Brain,;
  CheckCircle,;
  Globe,;
  Shield,;
  Users;
} from "lucide-react"
import React from "react"
//[^;]*
const containerVariants = {;
  hidden: { opacity: 0 };
  visible: {;
    opacity: 1,transition: {;
      staggerChildren: 0.1;
    };
  };
};
const itemVariants = {;
  hidden: { opacity: 0, y: 20 };
  visible: {;
    opacity: 1,y: 0,transition: {;
      duration: 0.6;
    };
  };
};
const achievementVariants = {;
  hidden: { opacity: 0, scale: 0.8 };
  visible: {;
    opacity: 1,scale: 1,transition: {;
      duration: 0.5;
    };
  };
};
const techVariants = {;
  hidden: { opacity: 0, y: 10 };
  visible: {;
    opacity: 1,y: 0,transition: {;
      duration: 0.4,staggerChildren: 0.1;
    };
  };
};
const achievements = [;
  { icon: Users, number: "10K+", label: "Active Users", color: "text-zion-cyan" };
  { icon: Globe, number: "150+", label: "Countries", color: "text-zion-purple" };
  { icon: Shield, number: "99.9%", label: "Uptime", color: "text-zion-green" };
  { icon: Award, number: "50+", label: "Awards", color: "text-zion-orange" };
];
const technologies = [;
  "React", "TypeScript", "Node.js", "Python", "AI/ML", "Blockchain", "Cloud", "DevOps"
],;

const highlights = [;
  {;
    icon: Brain,title: 'AI-Powered Intelligence',description: 'Advanced machine learning algorithms that continuously learn and adapt to provide smarter solutions.',features: ['Predictive AnalyticsSmart Recommendations', 'Automated Workflows'],;
    color: 'from-zion-purple to-zion-purple-dark',bgColor: 'bg-zion-purple/10',borderColor: 'border-zion-purple/20'
  };
  {;
    icon: Globe,title: 'Global Network',description: 'Connect with professionals and businesses from over 150 countries worldwide.',features: ['Multi-language SupportLocal Expertise', '24/7 Availability'],;
    color: 'from-zion-cyan to-zion-cyan-dark',bgColor: 'bg-zion-cyan/10',borderColor: 'border-zion-cyan/20'
  };
  {;
    icon: Shield,title: 'Enterprise Security',description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',features: ['Data ProtectionAccess Control', 'Audit Trails'],;
    color: 'from-zion-blue to-zion-blue-dark',bgColor: 'bg-zion-blue/10',borderColor: 'border-zion-blue/20'
  };
];
const features = [;
  {;
    icon: "🚀",title: "Cutting-Edge Technology",description: "Leverage the latest advancements in AI, quantum computing, and blockchain technology"
  },;
  {;
    icon: "⚡",title: "Lightning Fast Performance",description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs"
  };
  {;
    icon: "🔒",title: "Enterprise Security",description: "Bank-level security protocols and compliance standards to protect your valuable data"
  };
  {;
    icon: "🌐",title: "Global Scalability",description: "Solutions that scale seamlessly from startup to enterprise across multiple regions"
  };
  {;
    icon: "🤖",title: "AI-Powered Intelligence",description: "Smart automation and predictive analytics that adapt to your business requirements"
  };
  {;
    icon: "📊",title: "Real-Time Analytics",description: "Comprehensive insights and reporting to make data-driven decisions instantly"
  };
];
export function FeatureHighlights() {;
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">;
            <[^>]*/>
            <span>Why Choose Zion</[^>]*>
          </[^>]*>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">;
            Built for the Future of Work;
          </[^>]*>

          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">;
            Experience the next generation of talent marketplace with cutting-edge AI;
            global reach, and enterprise-grade security.;
          </[^>]*>
        </[^>]*>

        {/* Feature Highlights Grid */};
        <motion.div
          variants={containerVariants};
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }};
          className="[^"]*"
        >;
          {highlights.map((highlight, index) => (;
            <motion.div
              key={index};
              variants={itemVariants};
              whileHover={{;
                y: -10,scale: 1.02,transition: { duration: 0.3 };
              }};
              className="[^"]*"
            >;
              <div className={`h-full p-8 rounded-3xl ${highlight.bgColor} ${highlight.borderColor} border-2 hover:border-opacity-40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden`}>;
                {/* Background gradient overlay */};
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></[^>]*>

                <div className="relative z-10">;
                  {/* Icon */};
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                    {React.createElement(highlight.icon, { ;
                      className: "w-8 h-8 text-white" ;
                    })};
                  </[^>]*>

                  {/* Content */};
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">;
                    {highlight.title};
                  </[^>]*>

                  <p className="text-zion-slate-light leading-relaxed mb-6">;
                    {highlight.description};
                  </[^>]*>

                  {/* Features */};
                  <ul className="space-y-3">;
                    {highlight.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center gap-3 text-zion-slate-light">;
                        <[^>]*/>
                        <span className="text-sm">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Core Features Grid */};
        <motion.div
          variants={containerVariants};
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }};
          className="[^"]*"
        >;
          {features.map((feature, index) => (;
            <motion.div
              key={index};
              variants={itemVariants};
              whileHover={{;
                y: -5,scale: 1.02,transition: { duration: 0.3 };
              }};
              className="[^"]*"
            >;
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">;
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">;
                  <span className="text-2xl">{feature.icon}</[^>]*>
                </[^>]*>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">;
                  {feature.title};
                </[^>]*>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">;
                  {feature.description};
                </[^>]*>
              </[^>]*>
              ;
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">;
                {feature.title};
              </[^>]*>
              ;
              <p className="text-gray-400 text-sm leading-relaxed">;
                {feature.description};
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Achievements Section */};
        <motion.div
          variants={containerVariants};
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }};
          className="[^"]*"
        >;
          <h3 className="text-2xl font-bold text-white mb-12">;
            Trusted by Industry Leaders;
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {achievements.map((achievement, index) => (;
              <motion.div
                key={index};
                variants={achievementVariants};
                className="[^"]*"
              >;
                <div className={`inline-flex p-4 rounded-full bg-white/5 mb-4`}>;
                  {React.createElement(achievement.icon, { ;
                    className: `w-8 h-8 ${achievement.color}` ;
                  })};
                </[^>]*>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>;
                  {achievement.number};
                </[^>]*>
                <div className="text-zion-slate-light text-sm">;
                  {achievement.label};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* Technology Stack */};
        <motion.div
          variants={containerVariants};
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }};
          className="[^"]*"
        >;
          <h3 className="text-2xl font-bold text-white mb-8">;
            Cutting-Edge Technology Stack;
          </[^>]*>

          <motion.div
            variants={techVariants};
            className="[^"]*"
          >;
            {technologies.map((tech, index) => (;
              <motion.div
                key={index};
                whileHover={{ scale: 1.05 }};
                className="[^"]*"
              >;
                {tech};
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.4 }};
        >;
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">;
            <span>Experience the difference</[^>]*>
            <span className="text-2xl">→</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};


