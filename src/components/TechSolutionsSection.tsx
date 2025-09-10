<<<<<<< HEAD
import {  import { motion  } from 'framer-motion';
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function TechSolutionsSection("props": "any) {;
export function TechSolutionsSection("props": any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ";
          className="text-center mb-16";
          initial = {;
<<<<<<< HEAD:src_backup_temp/components/TechSolutionsSection.tsx
  { "opacity": 0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6 "}}
=======

  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
>>>>>>> origin/automation-fixes:src/components/TechSolutionsSection.tsx
        >";
          <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-4">;
            Technology Solutions;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
<<<<<<< HEAD:src_backup_temp/components/TechSolutionsSection.tsx
            Comprehensive technology solutions designed to drive innovation",;
=======
            Comprehensive technology solutions designed to drive innovation,
>>>>>>> origin/automation-fixes:src/components/TechSolutionsSection.tsx
            enhance security, and accelerate your digital transformation journey.</p>;
        </motion.div>;
";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-8">;
          {techSolutions.map((solution", index) => (;
            <motion.div;
              key={solution.title}";
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 "hover": "borde r-blue-500/50 transition-all duration-300 "hover": shado w-lg "hover": shado w-blue-500/25 group";
              initial = {;
<<<<<<< HEAD:src_backup_temp/components/TechSolutionsSection.tsx
  { "opacity": 0",;
  "y": "3 0;
"}}
              whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
              viewport={{ "once": "tru e "}}
              transition = {;
  { "duration": "0.6",;
  "delay": "inde x * 0.1;
"}}
=======

  { opacity: 0,
  y: 30;
}}
              whileInView = {;

  { opacity: 1,
  y: 0;
}}
              viewport={{ once: true }}
              transition = {;

  { duration: 0.6,
  delay: index * 0.1;
}}
>>>>>>> origin/automation-fixes:src/components/TechSolutionsSection.tsx
            >;
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-"hover": "scal e-110 transition-transform duration-300`"}>";
                <span className="text-3xl">{solution.icon}</span>;
              </div>;
              <h3 className="text-xl font - bold text-white mb-3 group - "hover": "tex t-blue - 400 transition - colors duration -200">;
                {solution.title"}
              </h3>;
              <p className="text-gray - 400 text-sm mb-6 leading -relaxed">;              <h3 className="text-xl font - bold text-white mb-3 group - hover: tex t-blue - 400 transition - colors duration -200">
                {solution.title}
              <p className="text-gray - 400 text-sm mb-6 leading -relaxed">
                {solution.description}
              </p>;
              <ul className="space - y-2">;
                {solution.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items - center gap-2 text-sm">;
                    <div className="w-2 h-2 bg-blue - 400 rounded-full"></div>;
                    <span className="text-gray -300">{benefit}</span>;
                  </li>) ) }
              </ul>;
              <div className="mt-6 pt - 4 border-t border-slate -700">;
                <div className="text-blue - 400 text-sm font - semibold group - "hover": "tex t-blue - 300 transition - colors duration -200">                  Learn More →;
                </div>;
";
                <p className="text-gray-600 mb-6 leading-relaxed">;
                  {solution.description"}
                </p>;
";
                <ul className="space-y-3 mb-6">;
                  {solution.features.map((feature, featureIndex) => (";
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">";
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>;
                      {feature}
                    </li>) ) }
                </ul>;
                <Link ";
                  to="/services";
                  className="inline-flex items-center text-blue-600 "hover": "tex t-blue-700 font-medium transition-colors duration-200 group-"hover": translat e-x-1";
                  Learn More";
                  <Rocket className="ml-2 h-4 w-4 transition-transform duration-200 group-"hover": translat e-x-1"    />                </Link>;
              </motion.div>) "}) }
        </div>;
        <motion.div;
          className="mt-16 text-center"          initial = {;
<<<<<<< HEAD:src_backup_temp/components/TechSolutionsSection.tsx
  { "opacity": "0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.4;
"}}
=======

  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.4;
}}
>>>>>>> origin/automation-fixes:src/components/TechSolutionsSection.tsx
        >";
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold text-gray-900 mb-4">;
              Ready to Transform Your Business?;
            </h3>";
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
              Let's discuss how our technology solutions can help you achieve;
              your business goals and stay ahead of the competition.</p>";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center">;
              <Link ";
                to="/contact";
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 "hover": b g-blue-700 transition-colors duration-200";}}
        >"
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">"
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            "
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve
              your business goals and stay ahead of the competition.</p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link "
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover: b g-blue-700 transition-colors duration-200"

                Get Started";
                <Rocket className="ml-2 h-5 w-5"    />;
              </Link>;
              <Link ";
                to="/services";
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white "hover": b g-gray-50 transition-colors duration-200";
                View All Services";
                <Code className="ml-2 h-5 w-5"    />              </Link>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
<<<<<<< HEAD:src_backup_temp/components/TechSolutionsSection.tsx
    </section>;) "};
;
=======
    </section>;) };
>>>>>>> origin/automation-fixes:src/components/TechSolutionsSection.tsx
export default TechSolutionsSection;";
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
export default TechSolutionsSection;
export default TechSolutionsSection;
'"`;
</motion>;
</motion>;
</motion>
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cloud, Shield, Database, Globe, Smartphone, Cpu, Lock, TrendingUp, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
const solutions = [
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Cutting-edge artificial intelligence and machine learning solutions',
        icon: <Brain className="w-8 h-8"/>,
        color: 'from-zion-purple to-zion-purple-dark',
        bgColor: 'from-zion-purple/20 to-zion-purple-dark/20',
        features: [
            'Custom AI model development',
            'Natural language processing',
            'Computer vision solutions',
            'Predictive analytics',
            'Automated decision making'
        ],
        benefits: [
            'Increase efficiency by 300%',
            'Reduce operational costs by 40%',
            'Improve accuracy by 95%'
        ],
        useCases: ['Healthcare', 'Finance', 'Retail', 'Manufacturing'],
        rating: 4.9,
        projects: 150,
        category: 'Emerging Tech'
    },
    {
        id: 'cloud-infrastructure',
        title: 'Cloud Infrastructure',
        description: 'Scalable and secure cloud solutions for modern businesses',
        icon: <Cloud className="w-8 h-8"/>,
        color: 'from-zion-cyan to-zion-blue',
        bgColor: 'from-zion-cyan/20 to-zion-blue/20',
        features: [
            'Multi-cloud architecture',
            'Auto-scaling solutions',
            'Disaster recovery',
            'Performance optimization',
            'Cost management'
        ],
        benefits: [
            'Reduce infrastructure costs by 60%',
            'Improve uptime to 99.99%',
            'Scale resources automatically'
        ],
        useCases: ['E-commerce', 'SaaS', 'Enterprise', 'Startups'],
        rating: 4.8,
        projects: 200,
        category: 'Infrastructure'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your digital assets',
        icon: <Shield className="w-8 h-8"/>,
        color: 'from-zion-cyan-light to-zion-cyan',
        bgColor: 'from-zion-cyan-light/20 to-zion-cyan/20',
        features: [
            'Threat detection & response',
            'Vulnerability assessment',
            'Identity & access management',
            'Data encryption',
            'Compliance management'
        ],
        benefits: [
            'Prevent 99.9% of cyber attacks',
            'Meet industry compliance standards',
            'Protect customer data integrity'
        ],
        useCases: ['Banking', 'Healthcare', 'Government', 'Education'],
        rating: 4.9,
        projects: 120,
        category: 'Security'
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Transform raw data into actionable business insights',
        icon: <Database className="w-8 h-8"/>,
        color: 'from-zion-purple-light to-zion-purple',
        bgColor: 'from-zion-purple-light/20 to-zion-purple/20',
        features: [
            'Real-time data processing',
            'Advanced reporting dashboards',
            'Predictive modeling',
            'Data visualization',
            'Business intelligence'
        ],
        benefits: [
            'Make data-driven decisions',
            'Identify new business opportunities',
            'Optimize operational processes'
        ],
        useCases: ['Marketing', 'Operations', 'Sales', 'Research'],
        rating: 4.7,
        projects: 180,
        category: 'Analytics'
    },
    {
        id: 'iot-solutions',
        title: 'IoT Solutions',
        description: 'Connected devices and smart systems for the modern world',
        icon: <Cpu className="w-8 h-8"/>,
        color: 'from-zion-cyan to-zion-purple',
        bgColor: 'from-zion-cyan/20 to-zion-purple/20',
        features: [
            'Device connectivity management',
            'Real-time monitoring',
            'Data collection & analysis',
            'Remote control systems',
            'Predictive maintenance'
        ],
        benefits: [
            'Monitor assets in real-time',
            'Reduce maintenance costs by 30%',
            'Improve operational efficiency'
        ],
        useCases: ['Manufacturing', 'Smart Cities', 'Agriculture', 'Healthcare'],
        rating: 4.6,
        projects: 90,
        category: 'Connected Devices'
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile solutions for all devices',
        icon: <Smartphone className="w-8 h-8"/>,
        color: 'from-zion-purple to-zion-cyan',
        bgColor: 'from-zion-purple/20 to-zion-cyan/20',
        features: [
            'iOS & Android development',
            'Cross-platform solutions',
            'UI/UX design',
            'Performance optimization',
            'App store deployment'
        ],
        benefits: [
            'Reach customers on all devices',
            'Improve user engagement',
            'Increase brand visibility'
        ],
        useCases: ['Retail', 'Entertainment', 'Education', 'Healthcare'],
        rating: 4.8,
        projects: 250,
        category: 'Mobile'
    }
];
const industries = [
    { name: 'Healthcare', icon: <Shield className="w-5 h-5"/>, projects: 80 },
    { name: 'Finance', icon: <TrendingUp className="w-5 h-5"/>, projects: 120 },
    { name: 'Retail', icon: <Globe className="w-5 h-5"/>, projects: 95 },
    { name: 'Manufacturing', icon: <Cpu className="w-5 h-5"/>, projects: 75 },
    { name: 'Education', icon: <Users className="w-5 h-5"/>, projects: 60 },
    { name: 'Government', icon: <Lock className="w-5 h-5"/>, projects: 45 }
];
export function TechSolutionsSection() {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [hoveredSolution, setHoveredSolution] = useState(null);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>

          {/* Industry stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (<motion.div key={industry.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-3 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {industry.icon}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{industry.name}</div>
                <div className="text-zion-slate-light text-xs">{industry.projects} projects</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {solutions.map((solution, index) => (<motion.div key={solution.id} variants={itemVariants} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }} className="relative" onHoverStart={() => setHoveredSolution(solution.id)} onHoverEnd={() => setHoveredSolution(null)}>
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {/* Rating and projects */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <span className="text-white text-sm font-semibold">{solution.rating}</span>
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      {solution.projects} projects
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${solution.bgColor} border border-zion-cyan/30 mb-4`}>
                    <span className="text-zion-cyan text-xs font-medium">{solution.category}</span>
                  </div>
                </div>

                {/* Features preview */}
                <div className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0"/>
                      <span>{feature}</span>
                    </div>))}
                  {solution.features.length > 3 && (<div className="text-zion-cyan/60 text-xs text-center">
                      +{solution.features.length - 3} more features
                    </div>)}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                    Learn More
                  </span>
                  <ArrowRight className="w-5 h-5 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300"/>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {selectedSolution === solution.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacity: 0, height: 0, y: 10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: 10 }} transition={{ duration: 0.3 }}>
                      <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Benefits:</h4>
                      <div className="space-y-2 mb-4">
                        {solution.benefits.map((benefit, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{benefit}</span>
                          </motion.div>))}
                      </div>

                      <h4 className="text-zion-cyan font-semibold text-sm mb-3">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (<motion.span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}>
                            {useCase}
                          </motion.span>))}
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Let our technology experts help you implement the right solutions for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
>>>>>>> origin/backup-improvements-20250827-015311
