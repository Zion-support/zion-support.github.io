import React, { useState } from "react"
import { motion } from "framer-motion"
import {;
  Atom,;
  Cpu,;
  Zap,;
  Brain,;
  CheckCircle,;
  ArrowRight,;
  Target,;
  Network,;
  Database,;
  Shield,;
  Globe,;
  Rocket,;
  Lightbulb,;
  Code,;
  BarChart3,;
  Clock,;
  TrendingUp,;
  Users,;
  Monitor,;
  Server,;
  Cloud,;
  Lock,;
  Eye;
} from "lucide-react"
export default function QuantumTechnology() {;
  const [selectedApplication, setSelectedApplication] = useState('all')
  const [activeTab, setActiveTab] = useState('overview')
  const quantumServices = [;
    {;
      icon: Atom,title: "Quantum Computing",description: "Leverage quantum algorithms for complex computational problems",features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Machine Learning"],;
      color: "from-zion-cyan to-zion-blue"
    };
    {;
      icon: Shield,title: "Quantum Cryptography",description: "Unbreakable encryption using quantum key distribution",features: ["Quantum Key Distribution", "Secure Communication", "Post-Quantum Security", "Quantum Networks"],;
      color: "from-zion-purple to-zion-pink"
    };
    {;
      icon: Network,title: "Quantum Networks",description: "Quantum internet infrastructure for secure data transmission",features: ["Quantum Repeaters", "Entanglement Distribution", "Quantum Routing", "Network Security"],;
      color: "from-zion-green to-zion-emerald"
    };
    {;
      icon: Brain,title: "Quantum Machine Learning",description: "AI algorithms enhanced with quantum computing capabilities",features: ["Quantum Neural Networks", "Feature Selection", "Pattern Recognition", "Optimization"],;
      color: "from-zion-yellow to-zion-orange"
    };
    {;
      icon: Database,title: "Quantum Databases",description: "Quantum-enhanced data storage and retrieval systems",features: ["Quantum Search", "Data Compression", "Quantum Memory", "Fast Retrieval"],;
      color: "from-zion-red to-zion-pink"
    };
    {;
      icon: Zap,title: "Quantum Sensors",description: "Ultra-sensitive detection using quantum phenomena",features: ["Magnetic Sensing", "Gravitational Detection", "Precision Measurement", "Environmental Monitoring"],;
      color: "from-zion-indigo to-zion-purple"
    };
  ];
  const applications = [;
    { id: 'all', name: 'All Applications', icon: Globe };
    { id: 'finance', name: 'Financial Services', icon: BarChart3 };
    { id: 'healthcare', name: 'Healthcare', icon: Monitor };
    { id: 'logistics', name: 'Logistics', icon: Network };
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield };
    { id: 'research', name: 'Research', icon: Lightbulb };
  ];
  const quantumApplications = [;
    {;
      title: "Portfolio Optimization",description: "Quantum algorithms for optimal investment portfolio management",category: "finance",benefits: ["Risk Reduction", "Return Maximization", "Real-time Optimization", "Multi-Asset Management"],;
      icon: BarChart3;
    };
    {;
      title: "Drug Discovery",description: "Quantum simulation for molecular modeling and drug development",category: "healthcare",benefits: ["Faster Discovery", "Accurate Modeling", "Cost Reduction", "Better Efficacy"],;
      icon: Monitor;
    };
    {;
      title: "Supply Chain Optimization",description: "Quantum optimization for logistics and supply chain management",category: "logistics",benefits: ["Route Optimization", "Cost Reduction", "Efficiency", "Real-time Adaptation"],;
      icon: Network;
    };
    {;
      title: "Cryptographic Security",description: "Quantum-resistant encryption and secure communication",category: "cybersecurity",benefits: ["Unbreakable Encryption", "Future-Proof Security", "Quantum Networks", "Secure Communication"],;
      icon: Shield;
    };
    {;
      title: "Climate Modeling",description: "Quantum computing for complex climate simulations",category: "research",benefits: ["Accurate Predictions", "Complex Modeling", "Faster Simulations", "Better Understanding"],;
      icon: Lightbulb;
    };
    {;
      title: "AI Training",description: "Quantum-enhanced machine learning and neural networks",category: "research",benefits: ["Faster Training", "Better Accuracy", "Complex Patterns", "Efficient Learning"],;
      icon: Brain;
    };
  ];
  const quantumTechnologies = [;
    {;
      name: "Superconducting Qubits",description: "Quantum bits using superconducting circuits for computation",advantages: ["Scalability", "Fast Operations", "Error Correction", "Commercial Viability"],;
      icon: Cpu;
    };
    {;
      name: "Trapped Ions",description: "Quantum bits using individual ions for precise control",advantages: ["High Fidelity", "Long Coherence", "Precise Control", "Low Error Rates"],;
      icon: Atom;
    };
    {;
      name: "Topological Qubits",description: "Quantum bits with inherent error protection",advantages: ["Error Protection", "Stability", "Fault Tolerance", "Long Coherence"],;
      icon: Shield;
    };
    {;
      name: "Photonic Qubits",description: "Quantum bits using light particles for communication",advantages: ["Room Temperature", "Fast Transmission", "Low Loss", "Network Ready"],;
      icon: Network;
    };
    {;
      name: "Silicon Qubits",description: "Quantum bits using semiconductor technology",advantages: ["Manufacturing", "Scalability", "Integration", "Cost Effective"],;
      icon: Server;
    };
    {;
      name: "Neutral Atoms",description: "Quantum bits using neutral atoms for computation",advantages: ["Scalability", "Parallel Operations", "High Fidelity", "Flexible Architecture"],;
      icon: Atom;
    };
  ];
  const quantumAdvantages = [;
    { metric: "1000x", label: "Faster Processing", description: "Exponential speedup for specific problems" };
    { metric: "∞", label: "Parallel Processing", description: "Simultaneous computation of multiple states" };
    { metric: "100%", label: "Security", description: "Unbreakable quantum cryptography" };
    { metric: "24/7", label: "Availability", description: "Continuous quantum computing access" };
  ];
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
      opacity: 1,y: 0,transition: { duration: 0.6 };
    };
  };
  const filteredApplications = selectedApplication === 'all'
    ? quantumApplications;
    : quantumApplications.filter(app => app.category === selectedApplication),;

  return (
    <div className="min-h-screen bg-futuristic">;
      {/* Hero Section */};
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-purple-dark to-zion-purple overflow-hidden">;
        <div className="absolute inset-0 opacity-10">;
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-purple rounded-full animate-pulse"></[^>]*>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-pink rounded-full animate-pulse delay-1000"></[^>]*>
        </[^>]*>

        <div className="container mx-auto px-4 text-center relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="flex justify-center mb-8">;
              <div className="w-24 h-24 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">;
              Quantum{' '};
              <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">;
                Technology;
              </[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">;
              Harness the power of quantum mechanics to solve previously impossible problems.;
              From quantum computing to quantum cryptography, we're building the future of technology.;
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                Quantum Consultation;
              </[^>]*>
              <button className="px-8 py-4 border border-zion-purple text-zion-purple rounded-xl font-semibold text-lg hover:bg-zion-purple hover:text-white transition-all duration-300">;
                View Research;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Services Overview */};
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Quantum Technology Services;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our quantum solutions span the entire spectrum of quantum technologies;
              from computing and cryptography to networking and sensing.;
            </[^>]*>
          </[^>]*>

          <motion.div
            className="[^"]*"
            variants={containerVariants};
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }};
          >;
            {quantumServices.map((service, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                variants={itemVariants};
                whileHover={{ y: -5, scale: 1.02 }};
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <[^>]*/>
                </[^>]*>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</[^>]*>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</[^>]*>

                <ul className="space-y-2">;
                  {service.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-center text-zion-slate-light">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Applications */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Quantum Applications by Industry;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Discover how quantum technology is revolutionizing different industries;
              and creating new possibilities for innovation and growth.;
            </[^>]*>
          </[^>]*>

          {/* Application Filter */};
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            {applications.map((app) => {;
              const Icon = app.icon
              return (
                <button;
                  key={app.id};
                  onClick={() => setSelectedApplication(app.id)};
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${;
                    selectedApplication === app.id
                      ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover: bg-zion-slate-dark hover:text-white border border-zion-purple/20'
                  }`};
                >;
                  <[^>]*/>
                  {app.name};
                </[^>]*>
              );
            })};
          </[^>]*>

          {/* Applications Grid */};
          <motion.div
            className="[^"]*"
            variants={containerVariants};
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }};
          >;
            {filteredApplications.map((app, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                variants={itemVariants};
                whileHover={{ y: -5, scale: 1.02 }};
              >;
                <div className="flex items-center gap-4 mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-bold text-white">{app.title}</[^>]*>
                </[^>]*>

                <p className="text-zion-slate-light mb-4 leading-relaxed">{app.description}</[^>]*>

                <div className="space-y-2">;
                  <h4 className="font-semibold text-zion-cyan text-sm">Key Benefits:</[^>]*>
                  <ul className="space-y-1">;
                    {app.benefits.map((benefit, idx) => (;
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">;
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></[^>]*>
                        {benefit};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Technologies */};
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Quantum Computing Technologies;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              We work with cutting-edge quantum computing platforms and technologies;
              to deliver the best solutions for your specific needs.;
            </[^>]*>
          </[^>]*>

          <motion.div
            className="[^"]*"
            variants={containerVariants};
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }};
          >;
            {quantumTechnologies.map((tech, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                variants={itemVariants};
                whileHover={{ y: -5, scale: 1.02 }};
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">;
                  <[^>]*/>
                </[^>]*>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{tech.name}</[^>]*>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{tech.description}</[^>]*>

                <div className="space-y-2">;
                  <h4 className="font-semibold text-zion-cyan text-sm">Advantages:</[^>]*>
                  <ul className="space-y-1">;
                    {tech.advantages.map((advantage, idx) => (;
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">;
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></[^>]*>
                        {advantage};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Advantages */};
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-pink">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Quantum Computing Advantages;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Experience the transformative power of quantum computing with;
              exponential speedups and capabilities beyond classical computing.;
            </[^>]*>
          </[^>]*>

          <motion.div
            className="[^"]*"
            variants={containerVariants};
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }};
          >;
            {quantumAdvantages.map((advantage, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                variants={itemVariants};
              >;
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">;
                  <div className="text-3xl font-bold text-white">{advantage.metric}</[^>]*>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">{advantage.label}</[^>]*>
                <p className="text-zion-slate-light">{advantage.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Implementation Process */};
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Quantum Technology Implementation;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our systematic approach ensures successful quantum technology deployment;
              and maximum value for your organization.;
            </[^>]*>
          </[^>]*>

          <motion.div
            className="[^"]*"
            variants={containerVariants};
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }};
          >;
            {[;
              {;
                step: "01",title: "Quantum Assessment",description: "Evaluate quantum readiness and identify opportunities",icon: Eye;
              };
              {;
                step: "02",title: "Strategy Development",description: "Design quantum roadmap and implementation plan",icon: Target;
              };
              {;
                step: "03",title: "Technology Selection",description: "Choose optimal quantum platforms and solutions",icon: Cpu;
              };
              {;
                step: "04",title: "Deployment & Optimization",description: "Implement and continuously improve quantum solutions",icon: Rocket;
              };
            ].map((phase, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                variants={itemVariants};
              >;
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">;
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">;
                    <[^>]*/>
                  </[^>]*>
                  <div className="text-2xl font-bold text-zion-purple mb-2">{phase.step}</[^>]*>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</[^>]*>
                  <p className="text-zion-slate-light leading-relaxed">{phase.description}</[^>]*>
                </[^>]*>

                {index < 3 && (;&& (; (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">;
                    <[^>]*/>
                  </[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-purple-dark">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Explore Quantum Technology?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Let's discuss how quantum computing and quantum technologies can;
              transform your business and solve previously impossible challenges.;
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                Start Quantum Journey;
              </[^>]*>
              <button className="px-8 py-4 border border-zion-purple text-zion-purple rounded-xl font-semibold text-lg hover: bg-zion-purple hover:text-white transition-all duration-300">;
                Download Quantum Guide;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};