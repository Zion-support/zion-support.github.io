
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
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

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Stats */}
                <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="text-sm font-semibold text-blue-400">
                    {highlight.stats}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-slate-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-slate-300">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-slate-300">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-slate-300">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300">
            <span>Want to learn more about our technology?</span>
            <a href="/contact" className="text-blue-400 hover:text-blue-300 font-medium">
              Schedule a technical deep-dive
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}