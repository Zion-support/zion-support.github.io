import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  GitFork, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Smartphone,
  Monitor,
  Code,
  FileText,
  Truck,
  Wrench
} from 'lucide-react';

const cloudDevOpsSolutions = [
  {
    id: 1,
    title: "Cloud Infrastructure Setup",
    description: "Complete cloud infrastructure design and implementation for scalable applications.",
    icon: Cloud,
    features: [
      "Multi-cloud strategy",
      "Auto-scaling setup",
      "Load balancing",
      "High availability"
    ],
    price: "From $15,000",
    timeline: "8-16 weeks",
    category: "Cloud Infrastructure",
    platforms: ["AWS", "Azure", "Google Cloud", "Kubernetes"]
  },
  {
    id: 2,
    title: "CI/CD Pipeline Development",
    description: "Automated continuous integration and deployment pipelines for rapid software delivery.",
    icon: GitFork,
    features: [
      "Automated testing",
      "Build automation",
      "Deployment automation",
      "Rollback capabilities"
    ],
    price: "From $12,000",
    timeline: "6-12 weeks",
    category: "DevOps",
    platforms: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
  },
  {
    id: 3,
    title: "Container Orchestration",
    description: "Kubernetes and Docker implementation for scalable containerized applications.",
    icon: Server,
    features: [
      "Container orchestration",
      "Service mesh setup",
      "Auto-scaling",
      "Monitoring & logging"
    ],
    price: "From $20,000",
    timeline: "10-18 weeks",
    category: "Containerization",
    platforms: ["Kubernetes", "Docker", "Helm", "Istio"]
  },
  {
    id: 4,
    title: "Infrastructure as Code",
    description: "Automated infrastructure provisioning and management using code.",
    icon: Code,
    features: [
      "Terraform implementation",
      "Ansible automation",
      "Version control",
      "Environment management"
    ],
    price: "From $18,000",
    timeline: "8-14 weeks",
    category: "IaC",
    platforms: ["Terraform", "Ansible", "CloudFormation", "ARM Templates"]
  },
  {
    id: 5,
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring and logging solutions for cloud applications.",
    icon: Activity,
    features: [
      "Real-time monitoring",
      "Alert systems",
      "Log aggregation",
      "Performance metrics"
    ],
    price: "From $10,000",
    timeline: "6-10 weeks",
    category: "Monitoring",
    platforms: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
  },
  {
    id: 6,
    title: "Security & Compliance",
    description: "Cloud security implementation and compliance management for enterprise applications.",
    icon: Shield,
    features: [
      "Identity management",
      "Access controls",
      "Security scanning",
      "Compliance reporting"
    ],
    price: "From $25,000",
    timeline: "12-20 weeks",
    category: "Security",
    platforms: ["IAM", "VPC", "Security Groups", "WAF"]
  }
];

const cloudPlatforms = [
  {
    name: "Amazon Web Services",
    description: "Leading cloud platform with comprehensive services",
    icon: Cloud,
    features: ["EC2", "S3", "Lambda", "RDS", "ECS"]
  },
  {
    name: "Microsoft Azure",
    description: "Enterprise cloud platform with strong integration",
    icon: Server,
    features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "AKS"]
  },
  {
    name: "Google Cloud Platform",
    description: "Innovative cloud platform with AI/ML focus",
    icon: Globe,
    features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "GKE"]
  },
  {
    name: "Kubernetes",
    description: "Open-source container orchestration platform",
          icon: GitFork,
    features: ["Auto-scaling", "Load Balancing", "Service Discovery", "Rolling Updates"]
  }
];

const successStories = [
  {
    id: 1,
    company: "Tech Startup",
    industry: "SaaS",
    challenge: "Needed scalable cloud infrastructure for rapid growth",
    solution: "Built auto-scaling cloud platform with CI/CD pipelines",
    results: "10x faster deployments, 99.9% uptime, 60% cost reduction",
    logo: "TS"
  },
  {
    id: 2,
    company: "E-commerce Platform",
    industry: "Retail",
    challenge: "Required containerized microservices architecture",
    solution: "Implemented Kubernetes with automated CI/CD",
    results: "5x faster development cycles, improved scalability, better performance",
    logo: "EP"
  },
  {
    id: 3,
    company: "Financial Services",
    industry: "Finance",
    challenge: "Needed secure, compliant cloud infrastructure",
    solution: "Built secure cloud platform with automated compliance",
    results: "Full compliance, enhanced security, 40% faster time-to-market",
    logo: "FS"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Assessment & Planning",
    description: "Evaluate current infrastructure and plan cloud migration strategy",
    icon: FileText,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Architecture Design",
    description: "Design scalable cloud architecture and DevOps processes",
    icon: Code,
    duration: "2-3 weeks"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Build and deploy cloud infrastructure with automation",
    icon: Wrench,
    duration: "6-20 weeks"
  },
  {
    step: 4,
    title: "Optimization",
    description: "Monitor, optimize, and continuously improve the system",
    icon: Zap,
    duration: "Ongoing"
  }
];

export default function CloudDevOps() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Cloud Infrastructure', 'DevOps', 'Containerization', 'IaC', 'Monitoring', 'Security'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? cloudDevOpsSolutions 
    : cloudDevOpsSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Cloud className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your development and operations with modern cloud infrastructure and DevOps practices. 
              From automated deployments to scalable cloud solutions, we help businesses achieve operational excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Cloud className="w-4 h-4" />
                <span>Cloud Native</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <GitFork className="w-4 h-4" />
                <span>DevOps Automation</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Zap className="w-4 h-4" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cloud Platforms We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading cloud platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{platform.description}</p>
                
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud and DevOps implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cloud & DevOps Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize your infrastructure and development processes
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.platforms.slice(0, 2).map((platform, platIndex) => (
                    <span
                      key={platIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with our cloud and DevOps solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our cloud and DevOps solutions can modernize your infrastructure, 
              automate your processes, and scale your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}