import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AdvancedRobotics2026: React.FC = () => {
  const [activeRobot, setActiveRobot] = useState('humanoid');
  const [robotActivity, setRobotActivity] = useState('idle');

  const robotTypes = {
    humanoid: {
      title: "Humanoid Robots",
      icon: "🤖",
      description: "Advanced humanoid robots with human-like capabilities",
      features: [
        "Natural movement patterns",
        "Facial expressions",
        "Voice recognition",
        "Emotional intelligence"
      ],
      applications: ["Healthcare assistance", "Elderly care", "Education", "Customer service"]
    },
    industrial: {
      title: "Industrial Robots",
      icon: "🏭",
      description: "Highly efficient manufacturing and industrial robots",
      features: [
        "Precision manufacturing",
        "24/7 operation",
        "Quality control",
        "Adaptive learning"
      ],
      applications: ["Automotive", "Electronics", "Food production", "Construction"]
    },
    service: {
      title: "Service Robots",
      icon: "🛎️",
      description: "Specialized robots for various service applications",
      features: [
        "Autonomous navigation",
        "Object recognition",
        "Multi-tasking",
        "Human interaction"
      ],
      applications: ["Hospitality", "Retail", "Logistics", "Security"]
    },
    medical: {
      title: "Medical Robots",
      icon: "🏥",
      description: "Revolutionary medical robots for healthcare",
      features: [
        "Surgical precision",
        "Minimally invasive",
        "Real-time imaging",
        "AI diagnostics"
      ],
      applications: ["Surgery", "Rehabilitation", "Diagnostics", "Drug delivery"]
    }
  };

  const robotCapabilities = [
    {
      capability: "Artificial Intelligence",
      icon: "🧠",
      description: "Advanced AI that enables autonomous decision making",
      features: [
        "Machine learning",
        "Natural language processing",
        "Computer vision",
        "Predictive analytics"
      ],
      impact: "Human-level intelligence in robots"
    },
    {
      capability: "Sensory Systems",
      icon: "👁️",
      description: "Advanced sensors that provide superhuman perception",
      features: [
        "360° vision",
        "Tactile feedback",
        "Audio processing",
        "Environmental sensing"
      ],
      impact: "Superior perception capabilities"
    },
    {
      capability: "Mobility",
      icon: "🏃",
      description: "Advanced locomotion systems for any environment",
      features: [
        "Bipedal walking",
        "Flying capabilities",
        "Swimming robots",
        "Climbing abilities"
      ],
      impact: "Access to any environment"
    },
    {
      capability: "Manipulation",
      icon: "✋",
      description: "Precise manipulation with human-like dexterity",
      features: [
        "Fine motor control",
        "Multi-finger grasping",
        "Force feedback",
        "Tool usage"
      ],
      impact: "Human-level dexterity"
    }
  ];

  const industryApplications = [
    {
      industry: "Healthcare",
      icon: "🏥",
      description: "Revolutionary medical robots transforming healthcare",
      applications: [
        "Surgical robots",
        "Rehabilitation assistants",
        "Diagnostic robots",
        "Care robots"
      ],
      impact: "50% reduction in medical errors"
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      description: "Intelligent manufacturing robots boosting productivity",
      applications: [
        "Assembly robots",
        "Quality control",
        "Packaging robots",
        "Maintenance robots"
      ],
      impact: "300% increase in productivity"
    },
    {
      industry: "Agriculture",
      icon: "🌾",
      description: "Agricultural robots revolutionizing food production",
      applications: [
        "Harvesting robots",
        "Planting robots",
        "Crop monitoring",
        "Livestock management"
      ],
      impact: "40% increase in crop yield"
    },
    {
      industry: "Space Exploration",
      icon: "🚀",
      description: "Robots enabling space exploration and colonization",
      applications: [
        "Mars rovers",
        "Space station maintenance",
        "Asteroid mining",
        "Planetary exploration"
      ],
      impact: "Enabling human space colonization"
    }
  ];

  const robotActivities = [
    { name: 'idle', icon: '😴', description: 'Standby mode' },
    { name: 'working', icon: '⚙️', description: 'Active operation' },
    { name: 'learning', icon: '📚', description: 'AI training' },
    { name: 'interacting', icon: '💬', description: 'Human interaction' }
  ];

  // Animate robot activity
  useEffect(() => {
    const interval = setInterval(() => {
      const activities = ['idle', 'working', 'learning', 'interacting'];
      setRobotActivity(activities[Math.floor(Math.random() * activities.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (


        {/* Robot Types */}
    <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-300">🤖 Robot Types</h2>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Revolutionary robots designed for every industry and application
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {Object.entries(robotTypes).map(([key, robot], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeRobot === key ? 'ring-2 ring-gray-400' : ''
                  }`}
                  onClick={() => setActiveRobot(key)}
                >
                  <div className="text-5xl mb-6 text-center animate-pulse">{robot.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-300">{robot.title}</h3>
                  <p className="text-gray-100 mb-6 text-center">{robot.description}</p>
                  <div className="text-center">
                    <div className="text-sm text-gray-200 mb-2">Applications:</div>
                    <div className="text-xs text-gray-300">{robot.applications.join(', ')}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Robot Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRobot}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-gray-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 animate-spin">{robotTypes[activeRobot as keyof typeof robotTypes].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-300 mb-2">
                      {robotTypes[activeRobot as keyof typeof robotTypes].title}
                    </h3>
                    <p className="text-gray-100">
                      {robotTypes[activeRobot as keyof typeof robotTypes].description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-300 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {robotTypes[activeRobot as keyof typeof robotTypes].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-100">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-300 mb-4">Applications:</h4>
                    <ul className="space-y-2">
                      {robotTypes[activeRobot as keyof typeof robotTypes].applications.map((app, index) => (
                        <li key={index} className="flex items-center text-gray-100">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Robot Capabilities */}
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-gray-900/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-300">⚡ Robot Capabilities</h2>
              <p className="text-xl text-slate-100 max-w-3xl mx-auto">
                Advanced capabilities that make our robots superior to human performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {robotCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-600/30 to-gray-600/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30"
                >
                  <div className="text-5xl mb-6 text-center">{capability.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-slate-300">{capability.capability}</h3>
                  <p className="text-slate-100 mb-6 text-center">{capability.description}</p>
                  <ul className="space-y-2 mb-6">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-100 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-sm text-slate-200 mb-2">Impact:</div>
                    <div className="text-sm font-bold text-slate-300">{capability.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>

      </div>
    </>
  );
};


export default AdvancedRobotics2026;
