
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureHighlightsProps extends React.HTMLAttributes<HTMLElement> {}

export function FeatureHighlights({ className, style, ...props }: FeatureHighlightsProps) {
  const highlightsData = [
    {
      id: 1,
      title: "Quantum AI Integration",
      description: "Combining quantum computing with artificial intelligence for unprecedented processing power and insights",
      icon: CpuChipIcon,
      stats: "1000x faster",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Edge Computing Network",
      description: "Global edge computing infrastructure delivering ultra-low latency and high availability worldwide",
      icon: CloudIcon,
      stats: "99.99% uptime",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Zero-Trust Security",
      description: "Advanced cybersecurity framework with AI-powered threat detection and automated response systems",
      icon: ShieldCheckIcon,
      stats: "100% secure",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Blockchain Innovation",
      description: "Next-generation blockchain solutions with quantum-resistant cryptography and smart contract automation",
      icon: CubeIcon,
      stats: "1M+ TPS",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Machine learning-powered analytics that predict trends and optimize business decisions in real-time",
      icon: ChartBarIcon,
      stats: "95% accuracy",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Autonomous Systems",
      description: "Self-optimizing infrastructure that automatically scales, heals, and adapts to changing demands",
      icon: RocketLaunchIcon,
      stats: "24/7 operation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      className={cn("py-16 bg-zion-blue", className)}
      style={style}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`h-full p-8 rounded-3xl ${highlight.bgColor} ${highlight.borderColor} border-2 hover:border-opacity-40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {highlight.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {highlight.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 rounded-3xl p-8 md:p-12 border border-zion-blue-light/20 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-zion-slate-light text-lg">
              Our achievements speak volumes about our commitment to excellence
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={achievementVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`inline-flex p-4 rounded-full bg-white/10 mb-4 ${achievement.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-zion-slate-light text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Cutting-Edge Technology Stack
          </h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={techVariants}
                className="px-6 py-3 bg-zion-blue/20 border border-zion-blue-light/30 rounded-full text-zion-cyan hover:bg-zion-blue/30 hover:border-zion-blue-light/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Explore Our Technology
              <ArrowRight className="w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
