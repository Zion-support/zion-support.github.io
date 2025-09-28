import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  category: "ai" | "security" | "performance" | "scalability";
}

const ModernFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>("ai-powered");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      id: "ai-powered",
      title: "AI-Powered Solutions",
      description:
        "Leverage cutting-edge artificial intelligence to automate processes and enhance decision-making.",
      icon: <Cpu className="w-8 h-8" />,
      benefits: [
        "Machine Learning Integration",
        "Natural Language Processing",
        "Predictive Analytics",
        "Intelligent Automation",
      ],
      category: "ai",
    },
    {
      id: "security",
      title: "Enterprise Security",
      description:
        "Advanced security protocols and compliance frameworks to protect your data and infrastructure.",
      icon: <Shield className="w-8 h-8" />,
      benefits: [
        "Zero Trust Architecture",
        "End-to-End Encryption",
        "SOC 2 Compliance",
        "24/7 Security Monitoring",
      ],
      category: "security",
    },
    {
      id: "performance",
      title: "High Performance",
      description:
        "Optimized for speed and efficiency with global CDN and advanced caching strategies.",
      icon: <Zap className="w-8 h-8" />,
      benefits: [
        "Global CDN Network",
        "Advanced Caching",
        "Auto-scaling Infrastructure",
        "Real-time Monitoring",
      ],
      category: "performance",
    },
    {
      id: "scalability",
      title: "Infinite Scalability",
      description:
        "Cloud-native architecture that scales automatically with your business needs.",
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "Auto-scaling Resources",
        "Multi-cloud Deployment",
        "Load Balancing",
        "Disaster Recovery",
      ],
      category: "scalability",
    },
  ];

  const activeFeatureData = features.find((f) => f.id === activeFeature);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Modern Technology Stack
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for the Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technologies to deliver
            exceptional performance, security, and scalability for modern
            enterprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-102"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      activeFeature === feature.id
                        ? "bg-blue-500"
                        : "bg-gray-100"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-90">{feature.description}</p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      activeFeature === feature.id ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-blue-100 text-blue-600 rounded-xl">
                    {activeFeatureData?.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activeFeatureData?.title}
                    </h3>
                    <p className="text-gray-600">
                      {activeFeatureData?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Key Benefits:
                </h4>
                {activeFeatureData?.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Learn More About {activeFeatureData?.title}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              label: "Uptime",
              value: "99.9%",
              icon: <Lock className="w-6 h-6" />,
            },
            {
              label: "Performance",
              value: "<100ms",
              icon: <Zap className="w-6 h-6" />,
            },
            {
              label: "Security",
              value: "SOC 2",
              icon: <Shield className="w-6 h-6" />,
            },
            {
              label: "Scalability",
              value: "Global",
              icon: <Globe className="w-6 h-6" />,
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFeatures;
