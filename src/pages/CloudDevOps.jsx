import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import {
  Cloud;
  Server,
  GitFork,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star;
  Users;
  Award;
  Globe;
  Lock;
  Activity;
  Clock;
  Eye;
  Database;
  Smartphone;
  Monitor;
  Code;
  FileText;
  Truck;
  Wrench;
}
}
 } from "lucide-react";
const cloudDevOpsSolutions = [
  {
  id: 1,tit,
  l: e: "Cloud Infrastructure Setup",descripti,
  o: n: "Complete cloud infrastructure design and implementation for scalable applications.",ic,
  o: n: Cloud,featur,
  e: s: [
  "Multi-cloud strategy"
      "Auto-scaling setup"
      "Load balancing"
      "High availability"
]
    pric,
  e: "From $15,000"
    timeli,
  n: e: "8-16 weeks",catego,
  r: y: "Cloud Infrastructure",platfor,
  m: s: [["AWS", "Azure", "Google Cloud", "Kubernetes"],
  ],
  },
  {
  id: 2,tit,
  l: e: "CI/CD Pipeline Development",descripti,
  o: n: "Automated continuous integration and deployment pipelines for rapid software delivery.",ic,
  o: n: GitFork,featur,
  e: s: [
  "Automated testing"
      "Build automation"
      "Deployment automation"
      "Rollback capabilities"
]
    pric,
  e: "From $12,000"
    timeli,
  n: e: "6-12 weeks",catego,
  r: y: "DevOps",platfor,
  m: s: [["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"],
  ],
  },
  {
  id: 3,tit,
  l: e: "Container Orchestration",descripti,
  o: n: "Kubernetes and Docker implementation for scalable containerized applications.",ic,
  o: n: Server,featur,
  e: s: [
  "Container orchestration"
      "Service mesh setup"
      "Auto-scaling"
      "Monitoring & logging"
]
    pric,
  e: "From $20,000"
    timeli,
  n: e: "10-18 weeks",catego,
  r: y: "Containerization",platfor,
  m: s: [["Kubernetes", "Docker", "Helm", "Istio"],
  ],
  },
  {
  id: 4,tit,
  l: e: "Infrastructure as Code",descripti,
  o: n: "Automated infrastructure provisioning and management using code.",ic,
  o: n: Code,featur,
  e: s: [
  "Terraform implementation"
      "Ansible automation"
      "Version control"
      "Environment management"
]
    pric,
  e: "From $18,000"
    timeli,
  n: e: "8-14 weeks",catego,
  r: y: "IaC",platfor,
  m: s: [["Terraform", "Ansible", "CloudFormation", "ARM Templates"],
  ],
  },
  {
  id: 5,tit,
  l: e: "Monitoring & Observability",descripti,
  o: n: "Comprehensive monitoring and logging solutions for cloud applications.",ic,
  o: n: Activity,featur,
  e: s: [
  "Real-time monitoring"
      "Alert systems"
      "Log aggregation"
      "Performance metrics"
]
    pric,
  e: "From $10,000"
    timeli,
  n: e: "6-10 weeks",catego,
  r: y: "Monitoring",platfor,
  m: s: [["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  ],
  },
  {
  id: 6,tit,
  l: e: "Security & Compliance",descripti,
  o: n: "Cloud security implementation and compliance management for enterprise applications.",ic,
  o: n: Shield,featur,
  e: s: [
  "Identity management"
      "Access controls"
      "Security scanning"
      "Compliance reporting"
]
    pric,
  e: "From $25,000"
    timeli,
  n: e: "12-20 weeks",catego,
  r: y: "Security",platfor,
  m: s: [["IAM", "VPC", "Security Groups", "WAF"],
  ],
  },
  ]

const cloudPlatforms = [
  {
  na,
  m: e: "Amazon Web Services",descripti,
  o: n: "Leading cloud platform with comprehensive services",ic,
  o: n: Cloud,featur,
  e: s: [["EC2", "S3", "Lambda", "RDS", "ECS"],
  ],
  },
  {
  na,
  m: e: "Microsoft Azure",descripti,
  o: n: "Enterprise cloud platform with strong integration",ic,
  o: n: Server,featur,
  e: s: [["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "AKS"],
  ],
  },
  {
  na,
  m: e: "Google Cloud Platform",descripti,
  o: n: "Innovative cloud platform with AI/ML focus",ic,
  o: n: Globe,featur,
  e: s: [["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "GKE"],
  ],
  },
  {
  na,
  m: e: "Kubernetes",descripti,
  o: n: "Open-source container orchestration platform",ic,
  o: n: GitFork,featur,
  e: s: [["Auto-scaling", "Load Balancing", "Service Discovery", "Rolling Updates"],
  ],
  },
  ]

const successStories = [
  {
  id: 1,compa,
  n: y: "Tech Startup",indust,
  r: y: "SaaS",challen,
  g: e: "Needed scalable cloud infrastructure for rapid growth",soluti,
  o: n: "Built auto-scaling cloud platform with CI/CD pipelines",resul,
  t: s: "10x faster deployments, 99.9% uptime, 60% cost reduction"
    lo,
  g: o: "TS"
},
  {
  id: 2,compa,
  n: y: "E-commerce Platform",indust,
  r: y: "Retail",challen,
  g: e: "Required containerized microservices architecture",soluti,
  o: n: "Implemented Kubernetes with automated CI/CD",resul,
  t: s: "5x faster development cycles, improved scalability, better performance"
    lo,
  g: o: "EP"
},
  {
  id: 3,compa,
  n: y: "Financial Services",indust,
  r: y: "Finance",challen,
  g: e: "Needed secure, compliant cloud infrastructure"
    soluti,
  o: n: "Built secure cloud platform with automated compliance",resul,
  t: s: "Full compliance, enhanced security, 40% faster time-to-market"
    lo,
  g: o: "FS"
},
  ]
const processSteps = [
  {
  st,
  e: p: 1,tit,
  l: e: "Assessment & Planning",descripti,
  o: n: "Evaluate current infrastructure and plan cloud migration strategy",ic,
  o: n: FileText,durati,
  o: n: "1-2 weeks"
},
  {
  st,
  e: p: 2,tit,
  l: e: "Architecture Design",descripti,
  o: n: "Design scalable cloud architecture and DevOps processes",ic,
  o: n: Code,durati,
  o: n: "2-3 weeks"
},
  {
  st,
  e: p: 3,tit,
  l: e: "Implementation",descripti,
  o: n: "Build and deploy cloud infrastructure with automation",ic,
  o: n: Wrench,durati,
  o: n: "6-20 weeks"
},
  {
  st,
  e: p: 4,tit,
  l: e: "Optimization",descripti,
  o: n: "Monitor, optimize, and continuously improve the system"
    ic,
  o: n: Zap,durati,
  o: n: "Ongoing"
},
  ]
export default function CloudDevOps() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSolution, setSelectedSolution] = useState(null)
  const categories = [['AllCloud Infrastructure', 'DevOpsContainerization', 'IaCMonitoring', 'Security'],
  ]
  const filteredSolutions = selectedCategory === 'All' 
    ? cloudDevOpsSolutions;
    : cloudDevOpsSolutions.filter(solution => solution.category === selectedCategory)
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <motion.div;
              initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
              animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              className="className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8";"
            >
              <Cloud className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Cloud & DevOps;
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

      {/* Cloud Platforms */},
  }
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cloud Platforms We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading cloud platforms and technologies;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {cloudPlatforms.map((platform, index) => (
  <motion.div;
                key={platform.name},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
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

      {/* Process Section */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud and DevOps implementation;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
  <motion.div;
                key={step.step},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step},
  }
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration},
  }
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */},
  }
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cloud & DevOps Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize your infrastructure and development processes;
            </p>
          </motion.div>

          {/* Category Filter */},
  }
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
  <button;
                key={category},
  }
                onClick={onClick={() => setSelectedCategory(category)},
  },
  }
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
  selectedCategory === category;
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20,
  hove: r:border-zion-cyan/40'
}`}
              >
                {category},
  }
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
  <motion.div;
                key={solution.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 cursor-pointer";"
                onClick={onClick={() => setSelectedSolution(solution)},
  },
  }
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
  <span;
                      key={platIndex},
  }
                      className="className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30";"
                    >
                      {platform},
  }
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category},
  }
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with our cloud and DevOps solutions;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
  <motion.div;
                key={story.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo},
  }
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

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our cloud and DevOps solutions can modernize your infrastructure;
              automate your processes, and scale your applications.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300,
  transform: hover:scale-105";"
              >
                Start Your Project;
              </a>
              <a;
                href="/contact"
                className="className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                Schedule Consultation;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}