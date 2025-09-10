<<<<<<< HEAD
import {  import { motion  } from 'framer-motion';
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function TechnologyStackSection("props": "any) {export function TechnologyStackSection("props": any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ";
          className="text-center mb-16";
<<<<<<< HEAD
          initial = {;
=======
          initial = {;
<<<<<<< HEAD:src_backup_temp/components/TechnologyStackSection.tsx
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
>>>>>>> origin/automation-fixes:src/components/TechnologyStackSection.tsx
        >";
          <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-4">;
            Technology Stack;
          </h2>";
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Built with cutting-edge technologies and industry best practices.Our comprehensive tech stack ensures scalability", security, and performance.</p>;
        </motion.div>;
        {/* Technology Categories */}";
        <div className="grid grid-cols-1 "lg": "gri d-cols-2 gap-8 mb-16">;
          {technologyCategories.map((category", index) => (;
            <motion.div;
              key={category.category}";
              className="bg-slate-800 border border-slate-700 rounded-xl p-6";
              initial={{ "opacity": "0", "y": "3 0 "}}
              whileInView={{ "opacity": "1", "y": "0 "}}
              viewport={{ "once": "tru e "}}
              transition={{ "duration": "0.6", "delay": "inde x * 0.1 "}}
            >";
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">;
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>";
                  <span className="text-sm">⚡</span>;
                </div>;
                {category.category}
              </h3>;              <div className="space - y-4">;
                {category.technologies.map((tech, techIndex) => (<div key={tech.name} className="flex items - center justify -between">;
                    <div className="flex items - center gap-3">;
                      <span className="text-xl">{tech.icon}</span>;
                      <span className="text-gray - 300 font -medium">{tech.name}</span>;
                    </div>;
                    <div className="flex items - center gap-2">;
                      <div className="w-20 bg-slate - 700 rounded-full h-2">;
                        <motion.div;
                          className={`h-2 bg-gradient - to - r ${category.color} rounded-full`}
                          initial={{ "width": "0 "}}                          whileInView={{ "width": "`${tech.proficiency"}%` }}
                          viewport={{ "once": "tru e "}}
                          transition = {;
<<<<<<< HEAD:src_backup_temp/components/TechnologyStackSection.tsx
  { "duration": "1",;
  "delay": "0.8 + techIndex * 0.1;
"}}
=======

  { duration: 1,
  delay: 0.8 + techIndex * 0.1;
}}
>>>>>>> origin/automation-fixes:src/components/TechnologyStackSection.tsx
                        />;
                      </div>";
                      <span className="text-blue-400 text-sm font-semibold w-8 text-right">;
                        {tech.proficiency}%;
                      </span>;
                    </div>;
                  </div>) ) }
              </div>;
            </motion.div>) ) }
        </div>;
        {/* Emerging Technologies */}
        <motion.div;
          className="mb-16"          initial = {;
<<<<<<< HEAD:src_backup_temp/components/TechnologyStackSection.tsx
  { "opacity": "0",;
  "y": "3 0;
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
  y: 30;
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
>>>>>>> origin/automation-fixes:src/components/TechnologyStackSection.tsx
        >";
          <h3 className="text-3xl font-bold text-white text-center mb-8">;
            Emerging Technologies;
          </h3>;}}
        >"
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Emerging Technologies
          

          <div className="grid grid - cols - 1 "md": "gri d - cols - 2 "lg": gri d - cols - 3 gap-6">;
            {emergingTech.map((tech", index) => (<motion.div;
                key={tech.name}
                className="bg-slate - 800 border border-slate - 700 rounded-xl p - 6 text-center "hover": "borde r-blue - 500 / 50 transition - all duration - 300 "hover": shado w-lg "hover": shado w-blue -500 / 25"                initial={{ "opacity": 0", "y": "3 0 "}}
                whileInView={{ "opacity": "1", "y": "0 "}}
                viewport={{ "once": "tru e "}}
                transition={{ "duration": "0.6", "delay": "0.6 + index * 0.1 "}}
              >";
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">";
                  <span className="text-2xl">{tech.icon}</span>;
                </div>;
              )})}
          </div>;
<<<<<<< HEAD:src_backup_temp/components/TechnologyStackSection.tsx
        </motion.div> {/* Technology Philosophy */}
        <motion.div;
          className="mb-12"          initial = {;
  { "opacity": "0",;
  "y": "3 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.8;
"}}
=======
        </motion.div>;
        {/* Technology Philosophy */}
        <motion.div;
          className="mb-12"          initial = {;

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
  delay: 0.8;
}}
>>>>>>> origin/automation-fixes:src/components/TechnologyStackSection.tsx
        >";
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold text-white text-center mb-6">;
              Our Technology Philosophy;
            </h3>;}}
        >"
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">"
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Our Technology Philosophy
            

            <div className="grid grid - cols - 1 "md": "gri d - cols - 3 gap-6">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient - to - br from - green - 500 to - emerald - 500 rounded-2xl flex items - center justify - center mx - auto mb-4">;
                  <span className="text-2xl">🚀</span>;
                </div>;
                <h4 className="text-lg font - bold text-white mb-2">Innovation First</h4>;
                <p className="text-gray - 400 text-sm">Always exploring cutting - edge technologies</p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient - to - br from - blue - 500 to - cyan - 500 rounded-2xl flex items - center justify - center mx - auto mb-4">;
                  <span className="text-2xl">🛡️</span>;
                </div>;
                <h4 className="text-lg font - bold text-white mb-2">Security Focused</h4>;
                <p className="text-gray - 400 text-sm">Enterprise - grade security in everything we build</p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient - to - br from - purple - 500 to - pink - 500 rounded-2xl flex items - center justify - center mx - auto mb-4">;
                  <span className="text-2xl">⚡</span>;
                </div>;
                <h4 className="text-lg font - bold text-white mb-2">Performance Driven</h4>;
                <p className="text-gray - 400 text-sm">Optimized for speed and scalability</p>              </div>;
            </div>;
          </div>;
        </motion.div>;
        <motion.div;
          className="text-center"          initial = {;
<<<<<<< HEAD:src_backup_temp/components/TechnologyStackSection.tsx
  { "opacity": 0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "1.0;
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
  delay: 1.0;
}}
>>>>>>> origin/automation-fixes:src/components/TechnologyStackSection.tsx
        >";
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold mb-4">;
              Ready to Build with Modern Tech?;
            </h3>";
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">;
              Our expert team is ready to help you leverage the latest technologies;
              to build scalable, secure, and innovative solutions.</p>";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center">";
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 "hover": b g-gray-100 rounded-lg font-medium transition-colors duration-200">;
                Start Your Project";
                <Code className="ml-2 h-5 w-5"   />;
              </button>";
              <button className="inline-flex items-center px-6 py-3 border border-white text-white "hover": b g-white "hover": tex t-blue-600 rounded-lg font-medium transition-colors duration-200">;
                View Tech Specs";
                <Server className="ml-2 h-5 w-5"   />              </button>;
            </div>;
          </div>;
        </motion.div>;}}
        >"
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">"
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build with Modern Tech?
            "
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to help you leverage the latest technologies
              to build scalable, secure, and innovative solutions.</p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">"
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover: b g-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project"
                <Code className="ml-2 h-5 w-5"   />
              </button>"
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover: b g-white hover: tex t-blue-600 rounded-lg font-medium transition-colors duration-200">
                View Tech Specs"
                <Server className="ml-2 h-5 w-5"   />              </button>
            </div>
          </div>
        </motion.div>
      </div>;
<<<<<<< HEAD:src_backup_temp/components/TechnologyStackSection.tsx
    </section>;) "};
;
=======
    </section>;) };
>>>>>>> origin/automation-fixes:src/components/TechnologyStackSection.tsx
export default TechnologyStackSection;";
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
export default TechnologyStackSection;
export default TechnologyStackSection;
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cloud, Zap, ArrowRight, Star, TrendingUp, Layers, GitBranch, Terminal, Monitor, Server, Brain } from 'lucide-react';
const frontendTechnologies = [
    {
        name: "React",
        category: "Frontend Framework",
        logo: "/logos/react.svg",
        description: "Modern component-based UI library for building interactive user interfaces",
        version: "18.x",
        expertise: "Expert",
        projects: 150,
        rating: 5,
        features: ["Hooks", "Context API", "Suspense", "Concurrent Features"],
        alternatives: ["Vue.js", "Angular", "Svelte"]
    },
    {
        name: "Next.js",
        category: "Full-Stack Framework",
        logo: "/logos/nextjs.svg",
        description: "React framework for production with server-side rendering and static generation",
        version: "14.x",
        expertise: "Expert",
        projects: 120,
        rating: 5,
        features: ["SSR/SSG", "API Routes", "Image Optimization", "Middleware"],
        alternatives: ["Nuxt.js", "Gatsby", "Remix"]
    },
    {
        name: "TypeScript",
        category: "Programming Language",
        logo: "/logos/typescript.svg",
        description: "Typed superset of JavaScript for building scalable applications",
        version: "5.x",
        expertise: "Expert",
        projects: 200,
        rating: 5,
        features: ["Static Typing", "Interfaces", "Generics", "Decorators"],
        alternatives: ["JavaScript", "Flow", "Dart"]
    },
    {
        name: "Tailwind CSS",
        category: "CSS Framework",
        logo: "/logos/tailwind.svg",
        description: "Utility-first CSS framework for rapid UI development",
        version: "3.x",
        expertise: "Expert",
        projects: 180,
        rating: 5,
        features: ["Utility Classes", "Responsive Design", "Dark Mode", "Customization"],
        alternatives: ["Bootstrap", "Material-UI", "Chakra UI"]
    }
];
const backendTechnologies = [
    {
        name: "Node.js",
        category: "Runtime Environment",
        logo: "/logos/nodejs.svg",
        description: "JavaScript runtime for building scalable server-side applications",
        version: "20.x",
        expertise: "Expert",
        projects: 160,
        rating: 5,
        features: ["Event-driven", "Non-blocking I/O", "NPM Ecosystem", "Microservices"],
        alternatives: ["Python", "Java", "Go", "C#"]
    },
    {
        name: "Python",
        category: "Programming Language",
        logo: "/logos/python.svg",
        description: "High-level programming language for AI, ML, and backend development",
        version: "3.11+",
        expertise: "Expert",
        projects: 140,
        rating: 5,
        features: ["AI/ML Libraries", "Web Frameworks", "Data Science", "Automation"],
        alternatives: ["Node.js", "Java", "Go", "Rust"]
    },
    {
        name: "PostgreSQL",
        category: "Database",
        logo: "/logos/postgresql.svg",
        description: "Advanced open-source relational database with ACID compliance",
        version: "15.x",
        expertise: "Expert",
        projects: 130,
        rating: 5,
        features: ["ACID Compliance", "JSON Support", "Extensions", "Partitioning"],
        alternatives: ["MySQL", "MongoDB", "Redis", "SQLite"]
    },
    {
        name: "Redis",
        category: "In-Memory Database",
        logo: "/logos/redis.svg",
        description: "High-performance in-memory data structure store",
        version: "7.x",
        expertise: "Expert",
        projects: 110,
        rating: 5,
        features: ["Caching", "Session Storage", "Real-time", "Pub/Sub"],
        alternatives: ["Memcached", "Hazelcast", "Apache Ignite"]
    }
];
const cloudTechnologies = [
    {
        name: "AWS",
        category: "Cloud Platform",
        logo: "/logos/aws.svg",
        description: "Comprehensive cloud computing platform with 200+ services",
        version: "Latest",
        expertise: "Expert",
        projects: 180,
        rating: 5,
        features: ["EC2", "Lambda", "S3", "RDS", "CloudFormation"],
        alternatives: ["Azure", "Google Cloud", "DigitalOcean", "Heroku"]
    },
    {
        name: "Docker",
        category: "Containerization",
        logo: "/logos/docker.svg",
        description: "Platform for developing, shipping, and running applications in containers",
        version: "24.x",
        expertise: "Expert",
        projects: 160,
        rating: 5,
        features: ["Containerization", "Orchestration", "Microservices", "DevOps"],
        alternatives: ["Podman", "LXC", "rkt", "Kubernetes"]
    },
    {
        name: "Kubernetes",
        category: "Container Orchestration",
        logo: "/logos/kubernetes.svg",
        description: "Open-source container orchestration platform for automating deployment",
        version: "1.28+",
        expertise: "Expert",
        projects: 120,
        rating: 5,
        features: ["Auto-scaling", "Load Balancing", "Service Discovery", "Rolling Updates"],
        alternatives: ["Docker Swarm", "Nomad", "OpenShift", "Rancher"]
    },
    {
        name: "Terraform",
        category: "Infrastructure as Code",
        logo: "/logos/terraform.svg",
        description: "Infrastructure as code tool for building, changing, and versioning infrastructure",
        version: "1.5+",
        expertise: "Expert",
        projects: 100,
        rating: 5,
        features: ["IaC", "Multi-cloud", "State Management", "Modules"],
        alternatives: ["CloudFormation", "Pulumi", "Ansible", "Chef"]
    }
];
const aiTechnologies = [
    {
        name: "TensorFlow",
        category: "Machine Learning",
        logo: "/logos/tensorflow.svg",
        description: "Open-source machine learning framework for research and production",
        version: "2.15+",
        expertise: "Expert",
        projects: 80,
        rating: 5,
        features: ["Deep Learning", "Neural Networks", "GPU Support", "Model Serving"],
        alternatives: ["PyTorch", "Scikit-learn", "Keras", "MXNet"]
    },
    {
        name: "OpenAI",
        category: "AI Services",
        logo: "/logos/openai.svg",
        description: "Advanced AI models and APIs for natural language processing",
        version: "Latest",
        expertise: "Expert",
        projects: 60,
        rating: 5,
        features: ["GPT Models", "DALL-E", "Whisper", "Embeddings"],
        alternatives: ["Anthropic", "Google AI", "Azure OpenAI", "Hugging Face"]
    },
    {
        name: "LangChain",
        category: "AI Framework",
        logo: "/logos/langchain.svg",
        description: "Framework for developing applications with large language models",
        version: "0.1+",
        expertise: "Expert",
        projects: 40,
        rating: 5,
        features: ["LLM Integration", "Chains", "Agents", "Memory"],
        alternatives: ["Semantic Kernel", "AutoGPT", "LlamaIndex", "Haystack"]
    },
    {
        name: "Hugging Face",
        category: "AI Platform",
        logo: "/logos/huggingface.svg",
        description: "Platform for machine learning models, datasets, and applications",
        version: "Latest",
        expertise: "Expert",
        projects: 50,
        rating: 5,
        features: ["Model Hub", "Transformers", "Datasets", "Spaces"],
        alternatives: ["ModelScope", "Replicate", "Gradio", "Streamlit"]
    }
];
const developmentTools = [
    {
        name: "Git",
        category: "Version Control",
        logo: "/logos/git.svg",
        description: "Distributed version control system for tracking changes in source code",
        version: "2.40+",
        expertise: "Expert",
        projects: 300,
        rating: 5,
        features: ["Branching", "Merging", "Stashing", "Rebasing"],
        alternatives: ["SVN", "Mercurial", "Perforce", "GitHub Desktop"]
    },
    {
        name: "VS Code",
        category: "Code Editor",
        logo: "/logos/vscode.svg",
        description: "Lightweight but powerful source code editor with extensive extensions",
        version: "1.80+",
        expertise: "Expert",
        projects: 250,
        rating: 5,
        features: ["IntelliSense", "Debugging", "Extensions", "Git Integration"],
        alternatives: ["WebStorm", "Sublime Text", "Atom", "Vim"]
    },
    {
        name: "Postman",
        category: "API Development",
        logo: "/logos/postman.svg",
        description: "Platform for building and testing APIs with comprehensive tools",
        version: "Latest",
        expertise: "Expert",
        projects: 180,
        rating: 5,
        features: ["API Testing", "Collections", "Mock Servers", "Documentation"],
        alternatives: ["Insomnia", "Thunder Client", "Hoppscotch", "Swagger"]
    },
    {
        name: "Jest",
        category: "Testing Framework",
        logo: "/logos/jest.svg",
        description: "JavaScript testing framework with a focus on simplicity and support",
        version: "29.x",
        expertise: "Expert",
        projects: 200,
        rating: 5,
        features: ["Unit Testing", "Mocking", "Coverage", "Snapshot Testing"],
        alternatives: ["Vitest", "Mocha", "Jasmine", "Cypress"]
    }
];
const technologyStats = [
    { icon: <Code className="w-6 h-6"/>, value: "50+", label: "Technologies" },
    { icon: <Layers className="w-6 h-6"/>, value: "15+", label: "Categories" },
    { icon: <Star className="w-6 h-6"/>, value: "4.9/5", label: "Expertise Rating" },
    { icon: <TrendingUp className="w-6 h-6"/>, value: "1000+", label: "Projects Delivered" },
    { icon: <GitBranch className="w-6 h-6"/>, value: "24/7", label: "Support Available" },
    { icon: <Zap className="w-6 h-6"/>, value: "99.9%", label: "Uptime Guarantee" }
];
export function TechnologyStackSection() {
    const [selectedTech, setSelectedTech] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("frontend");
    const categories = [
        { id: "frontend", name: "Frontend", icon: <Monitor className="w-5 h-5"/>, tech: frontendTechnologies },
        { id: "backend", name: "Backend", icon: <Server className="w-5 h-5"/>, tech: backendTechnologies },
        { id: "cloud", name: "Cloud & DevOps", icon: <Cloud className="w-5 h-5"/>, tech: cloudTechnologies },
        { id: "ai", name: "AI & Machine Learning", icon: <Brain className="w-5 h-5"/>, tech: aiTechnologies },
        { id: "tools", name: "Development Tools", icon: <Terminal className="w-5 h-5"/>, tech: developmentTools }
    ];
    const currentTechnologies = categories.find(cat => cat.id === selectedCategory)?.tech || [];
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
    return (<section className="py-20 bg-gradient-to-br from-zion-purple via-zion-slate-dark to-zion-blue relative overflow-hidden">
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
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive technology stack that powers innovative solutions across 
            frontend, backend, cloud, AI, and development tools. Built for scale, performance, and reliability.
          </p>

          {/* Technology stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {technologyStats.map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                : 'bg-zion-blue-dark/40 text-zion-slate-light hover:bg-zion-blue-dark/60 hover:text-white border border-zion-blue-light/30'}`}>
                {category.icon}
                <span>{category.name}</span>
              </button>))}
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentTechnologies.map((tech, index) => (<motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedTech(selectedTech === index ? null : index)}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <Code className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                          {tech.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{tech.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">v{tech.version}</div>
                      <div className="text-zion-slate-light text-xs">{tech.expertise}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{tech.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{tech.rating}/5</div>
                      <div className="text-zion-slate-light text-xs">Rating</div>
                    </div>
                  </div>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {tech.features.slice(0, 2).map((feature, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feature}
                        </span>))}
                      {tech.features.length > 2 && (<span className="text-zion-cyan/60 text-xs">
                          +{tech.features.length - 2} more
                        </span>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Technology Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedTech === index && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacity: 0, height: 0, y: 10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: 10 }} transition={{ duration: 0.3 }}>
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Features:</h5>
                          <div className="flex flex-wrap gap-1">
                            {tech.features.map((feature, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feature}
                              </span>))}
                          </div>
                        </div>

                        {/* Alternatives */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Alternatives:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {tech.alternatives.join(", ")}
                          </div>
                        </div>

                        {/* Expertise Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{tech.expertise} Level</div>
                          <div className="text-zion-slate-light text-xs">Proven in {tech.projects} projects</div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build with Our Tech Stack?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Leverage our expertise in cutting-edge technologies to build scalable, 
                performant, and innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Start Your Project
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Technology Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
>>>>>>> origin/backup-improvements-20250827-015311
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
