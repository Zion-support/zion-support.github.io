<<<<<<< HEAD
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
=======

const TechnologyStackSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">TechnologyStackSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default TechnologyStackSection;
