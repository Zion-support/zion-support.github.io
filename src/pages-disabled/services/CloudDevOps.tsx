import React from 'react';
import { Helmet } from 'react-helmet-async';
const CloudDevOps = () => {
    const features = [
        {
            icon: Cloud,
            title: "Cloud Migration",
            description: "Seamless migration to cloud platforms with minimal downtime",
            features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Multi-cloud Strategy"],
            icon: "☁️"
        },
        {
            title: "DevOps Automation",
            description: "Streamline development and operations with automated pipelines",
            features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
            icon: "⚡"
        },
        {
            title: "Container Orchestration",
            description: "Manage and scale containerized applications efficiently",
            features: ["Kubernetes", "Docker", "Service Mesh", "Microservices Architecture"],
            icon: "📦",
            import: { Link }, from, 'react-router-dom': ,
            import: { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield }, from, 'lucide-react': ,
            const: CloudDevOps, React, : .FC = () => {
                const cloudServices = [
                    {
                        icon: Cloud,
                        title: "Cloud Migration",
                        description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
                        features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
                    },
                    {
                        icon: Server,
                        title: "Infrastructure as Code",
                        description: "Automated infrastructure provisioning and management using modern DevOps practices.",
                        features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes"]
                    },
                    {
                        icon: GitBranch,
                        title: "CI/CD Pipelines",
                        description: "Version-controlled infrastructure management and deployment",
                        features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure Automation"],
                        description: "Seamless migration to cloud platforms with minimal downtime",
                        features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"],
                        icon: "☁️"
                    },
                    {
                        title: "DevOps Implementation",
                        description: "Streamline development and operations with modern DevOps practices",
                        features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Monitoring & Logging"],
                        icon: "🔄"
                    },
                    {
                        title: "Container Orchestration",
                        description: "Manage containerized applications at scale with Kubernetes",
                        features: ["Cluster Management", "Service Discovery", "Load Balancing", "Auto-scaling"],
                        icon: "📦"
                    },
                    {
                        title: "Infrastructure Management",
                        description: "Automate and manage cloud infrastructure efficiently",
                        features: ["Terraform/CloudFormation", "Cost Optimization", "Security Hardening", "Backup & Recovery"],
                        icon: "🏗️"
                    }
                ];
                const cloudPlatforms = [
                    { name: "AWS", features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"] },
                    { name: "Azure", features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates"] },
                    { name: "Google Cloud", features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager"] }
                ];
                const devOpsTools = [
                    { category: "CI/CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"] },
                    { category: "Infrastructure", tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"] },
                    { category: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
                    { category: "Security", tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"] }
                ];
                return (<>
      <Helmet>
        <title>Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services</title>
        <meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."/>
        <meta property="og:title" content="Cloud & DevOps — Zion Tech Group"/>
        <meta property="og:description" content="Expert cloud migration and DevOps implementation services for modern infrastructure."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/cloud-devops"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops"/>
      </Helmet>

      description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",
      features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
    },
    {icon}: Database,
      title: "Database Management",
      description: "Scalable database solutions with high availability and disaster recovery.",
      features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]
    }
  ];

  const platforms = [
    {name}: "AWS",
      description: "Amazon Web Services cloud platform solutions",
      icon: "☁️"
    },
    {name}: "Azure",
      description: "Microsoft Azure cloud services and solutions",
      icon: "🔷"
    },
    {name}: "Google Cloud",
      description: "Google Cloud Platform infrastructure and services",
      icon: "🔵"
    },
    {name}: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategy implementation",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2"/>
              Cloud & DevOps
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with modern cloud solutions and DevOps practices. 
              Accelerate delivery, improve reliability, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </Link>
              <Link to="/request-quote" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud & DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to modernize your infrastructure and accelerate your development lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expertise across major cloud providers to give you flexibility and choice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300">{platform.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Cloud & DevOps?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-3 h-3 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Faster Deployment</h3>
                    <p className="text-gray-300">Automated pipelines reduce deployment time from days to minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Improved Security</h3>
                    <p className="text-gray-300">Built-in security features and compliance with industry standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-3 h-3 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Global Scalability</h3>
                    <p className="text-gray-300">Scale your applications globally with cloud-native solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-3 h-3 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Cost Optimization</h3>
                    <p className="text-gray-300">Pay only for what you use with automated resource management</p>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud & DevOps
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with modern cloud solutions and DevOps practices. 
                Accelerate delivery, improve reliability, and scale with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Started
                </Link>
                <Link to="/request-quote" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}DevOps
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with cloud migration and modern DevOps practices. 
              Scale efficiently, deploy faster, and maintain reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Your Cloud Journey
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Cloud Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud and DevOps solutions to modernize your infrastructure and accelerate development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Deep expertise across major cloud providers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (<div key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </div>))}
                  </div>
                </div>))}
            </div>
          </div>
        </section>

        {/* DevOps Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Structured approach to implementing modern DevOps practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                        { step: "Assessment", icon: "🔍", description: "Evaluate current processes and identify improvement opportunities" },
                        { step: "Planning", icon: "📋", description: "Design DevOps strategy and toolchain architecture" },
                        { step: "Implementation", icon: "🚀", description: "Deploy tools and establish CI/CD pipelines" },
                        { step: "Optimization", icon: "⚡", description: "Continuous improvement and performance tuning" }
                    ].map((phase, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.step}</h3>
                  <p className="text-sm text-gray-300">{phase.description}</p>
                </div>))}
            </div>
          </div>
        </section>

        {/* DevOps Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Toolchain
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Industry-leading tools for modern DevOps practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools & Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Tools & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the tools and technologies that power modern DevOps practices and cloud-native applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((toolCategory, index) => (
                <motion.div
                  key={toolCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{toolCategory.category}</h3>
                  <div className="space-y-2">
                    {toolCategory.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Cloud & DevOps
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your development and operations for better results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                        { title: "Faster Deployment", description: "Reduce time-to-market with automated CI/CD pipelines", icon: "⚡" },
                        { title: "Improved Reliability", description: "Enhanced stability and reduced downtime through automation", icon: "🛡️" },
                        { title: "Cost Optimization", description: "Optimize cloud costs and resource utilization", icon: "💰" },
                        { title: "Better Collaboration", description: "Foster teamwork between development and operations", icon: "🤝" },
                        { title: "Scalability", description: "Easily scale applications based on demand", icon: "📈" },
                        { title: "Security", description: "Built-in security practices and compliance", icon: "🔒" }
                    ].map((benefit, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from our cloud and DevOps implementations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  Migrated from on-premise to AWS with Kubernetes orchestration, achieving 99.9% uptime and 60% faster deployments through automated CI/CD pipelines.
                </p>
                <div className="text-blue-400 text-sm">
                  <strong>Results:</strong> 99.9% uptime, 60% faster deployments
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services App</h3>
                <p className="text-gray-300 mb-4">
                  Implemented comprehensive DevOps practices with Azure DevOps, reducing deployment time from days to hours and achieving 95% test automation coverage.
                </p>
                <div className="text-blue-400 text-sm">
                  <strong>Results:</strong> Hours vs days deployment, 95% test coverage
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud and DevOps experts help you modernize your infrastructure, 
              implement best practices, and accelerate your development cycles.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Start Your Cloud Journey
            </Link>
          </div>
        </section>
      </div>
    </>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how cloud and DevOps can accelerate your digital transformation 
            and improve your development efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </Link>
            <Link to="/case-studies" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>);
                div >
                ;
            }
        }
    ];
};

export default CloudDevOps;
