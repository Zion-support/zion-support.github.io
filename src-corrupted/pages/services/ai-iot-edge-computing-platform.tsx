import React from 'react';
import { SEO   } from '../../components/SEO';
import { motion   } from 'framer-motion';

const AIIoTEdgeComputingPlatform: Reac t.FC = (): JSX.Element => {
  return (
    <>
      <SEO title="AI-Powered IoT Edge Computing Platform | Zion Tech Group"
        description="Advanced AI-driven IoT edge computing platform. Reduce latency by 90%, lower bandwidth costs by 70%, and process data at the edge with sub-millisecond response times."
        keywords="AI IoT, edge computing, real-time processing, distributed computing, hybrid cloud, edge intelligence, IoT analytics, edge AI"
        canonical="https://ziontechgroup.com/services/ai-iot-edge-computing-platform"
       />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-6">
                AI-Powered IoT Edge Computing Platform
              </h1>
              <p className="text-xl md: tex t-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize IoT with AI-powered edge computing. Process data at the edge with sub-millisecond latency, reduce bandwidth costs by 70%, and enable real-time intelligent decision making.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover: fro m-blue-700 hover: t o-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover: scal e-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover: b g-white hover: tex t-gray-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
                Advanced AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with distributed edge computing to deliver unprecedented IoT performance and intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngri d-cols-2 lg: gri d-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Edge Intelligence",
                  description: "Machine learning models deployed at the edge for real-time decision making and intelligent data processing.",
                  icon: "🧠"
                },
                {
                  title: "Real-Time Data Processing",
                  description: "Sub-millisecond response times with local data processing and intelligent filtering at the edge.",
                  icon: "⚡"
                },
                {
                  title: "Distributed Edge Computing",
                  description: "Scalable edge computing infrastructure with intelligent load balancing and resource optimization.",
                  icon: "🌐"
                },
                {
                  title: "Edge-to-Cloud Orchestration",
                  description: "Seamless integration between edge devices and cloud infrastructure with intelligent data routing.",
                  icon: "☁️"
                },
                {
                  title: "Hybrid Cloud Integration",
                  description: "Support for multi-cloud environments with intelligent workload distribution and data synchronization.",
                  icon: "🔗"
                },
                {
                  title: "Edge Security & Privacy",
                  description: "Built-in security features with local data processing and privacy-preserving AI algorithms.",
                  icon: "🔒"
                }
              ].map((feature, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: inde x * 0.1 

}}
                  viewport={{ once: tru e }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: borde r-white/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform delivers quantifiable results that directly impact your IoT performance and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngri d-cols-2 lg: gri d-cols-3 gap-8">
              {[
                { metric: "90%", description: "Reduction in latency" },
                { metric: "70%", description: "Lower bandwidth costs" },
                { metric: "85%", description: "Faster decision making" },
                { metric: "80%", description: "Reduction in cloud costs" },
                { metric: "95%", description: "Data processing accuracy" },
                { metric: "60%", description: "Improvement in reliability" }
              ].map((benefit, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  scale: 0.9 

}}
                  whileInView = {
  { opacity: 1,
  scale: 1 

}}
                  transition = {
  { duration: 0.6,
  delay: inde x * 0.1 

}}
                  viewport={{ once: tru e }}
                  className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-8 border border-orange-500/30"
                >
                  <div className="text-4xl md: tex t-5xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                  <p className="text-white text-lg">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
                Industry-Specific Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed to address the unique IoT challenges across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngri d-cols-2 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Real-time monitoring and predictive maintenance for industrial IoT with edge AI processing.",
                  features: ["Predictive maintenance", "Quality control", "Production optimization"]
                },
                {
                  industry: "Healthcare",
                  description: "Patient monitoring and medical device management with privacy-preserving edge computing.",
                  features: ["Patient monitoring", "Medical device management", "Privacy protection"]
                },
                {
                  industry: "Smart Cities",
                  description: "Intelligent traffic management and environmental monitoring with distributed edge computing.",
                  features: ["Traffic optimization", "Environmental monitoring", "Public safety"]
                },
                {
                  industry: "Agriculture",
                  description: "Precision farming and crop monitoring with AI-powered edge analytics.",
                  features: ["Crop monitoring", "Soil analysis", "Irrigation optimization"]
                }
              ].map((useCase, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: inde x * 0.1 

}}
                  viewport={{ once: tru e }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-blue-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
                Technology Stack & Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on industry-leading technologies and seamlessly integrates with your existing IoT infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md: unknowngri d-cols-4 gap-6">
              {[
                "TensorFlow Lite", "ONNX Runtime", "Apache Kafka", "MQTT", "Kubernetes Edge", "Docker Edge", "AWS IoT", "Azure IoT",
                "Google Cloud IoT", "Node-RED", "Grafana", "Prometheus", "InfluxDB", "Redis", "PostgreSQL", "MongoDB"
              ].map((tech, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  scale: 0.8 

}}
                  whileInView = {
  { opacity: 1,
  scale: 1 

}}
                  transition = {
  { duration: 0.4,
  delay: inde x * 0.05 

}}
                  viewport={{ once: tru e }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover: borde r-white/40 transition-all duration-300"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your IoT deployment size and edge computing requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngri d-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$299",
                  period: "/month",
                  description: "Perfect for small IoT deployments starting with edge computing",
                  features: [
                    "Up to 100 IoT devices",
                    "Basic edge AI processing",
                    "MQTT support",
                    "Email support",
                    "Standard templates",
                    "Monthly reports"
                  ],
                  popular: fals e
                },
                {
                  name: "Professional",
                  price: "$899",
                  period: "/month",
                  description: "Ideal for growing IoT deployments with advanced edge computing needs",
                  features: [
                    "Up to 1,000 IoT devices",
                    "Advanced edge AI processing",
                    "Multi-protocol support",
                    "Priority support",
                    "Custom integrations",
                    "Real-time monitoring",
                    "Advanced analytics",
                    "Team collaboration tools"
                  ],
                  popular: tru e
                },
                {
                  name: "Enterprise",
                  price: "$2,499",
                  period: "/month",
                  description: "Comprehensive solution for large IoT deployments",
                  features: [
                    "Unlimited IoT devices",
                    "Full edge AI suite",
                    "Custom AI models",
                    "24/7 dedicated support",
                    "White-label solutions",
                    "Advanced compliance",
                    "Custom integrations",
                    "Dedicated IoT consultant"
                  ],
                  popular: fals e
                }
              ].map((plan, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: inde x * 0.1 

}}
                  viewport={{ once: tru e }}
                  className={`relative rounded-xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-600 to-red-600 border-2 border-orange-400' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-orange-600 hover: b g-gray-100'
                      : 'bg-orange-600 text-white hover: b g-orange-700'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition = {
  { duration: 0.8,
  delay: 0.4 

}}
              viewport={{ once: tru e }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-4">
                All plans include a 14-day free trial. Annual plans save 20%.
              </p>
              <p className="text-gray-300">
                Need a custom plan? <span className="text-blue-400 cursor-pointer hover: underlin e">Contact us</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
                Ready to Transform Your IoT with Edge AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations who trust our AI-powered platform to revolutionize their IoT deployments.
              </p>
              
              <div className="grid grid-cols-1 md: gri d-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📱 <span className="text-white">+1 302 464 0950</span></p>
                    <p>✉️ <span className="text-white">kleber@ziontechgroup.com</span></p>
                    <p>📍 <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span></p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover: b g-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Schedule Demo
                    </button>
                    <button className="w-full bg-green-600 hover: b g-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Start Free Trial
                    </button>
                    <button className="w-full bg-orange-600 hover: b g-orange-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Download Case Study
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-300">
                <p>Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover: underlin e">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>;
    </>;
  );
};

export default AIIoTEdgeComputingPlatform;

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</SEO>