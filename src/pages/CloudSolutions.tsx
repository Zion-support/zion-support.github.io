import React from "react"
import { motion } from "framer-motion"
import {
  Cloud
  Server
  Database
  Shield
  Zap
  Globe
  Lock
  BarChart3
  ArrowRight
  CheckCircle
  Play
  Code
  Settings
  Users
} from "lucide-react"
export default function CloudSolutions() {
  const cloudServices = [
    {
      ic,
  o: n: Server,tit,
  l: e: "Cloud Migration",descripti,
  o: n: "Seamlessly migrate your infrastructure to the cloud with zero downtime",featur,
  e: s: [["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"];]
    }, {
      ic,
  o: n: Database,tit,
  l: e: "Database Management",descripti,
  o: n: "Optimize and manage your databases in the cloud for maximum performance",featur,
  e: s: [["Performance Tuning", "Backup & Recovery", "Scaling & Optimization", "Security Hardening"];]
    }, {
      ic,
  o: n: Shield,tit,
  l: e: "Cloud Security",descripti,
  o: n: "Comprehensive security solutions to protect your cloud infrastructure",featur,
  e: s: [["Identity & Access Management", "Data Encryption", "Threat Detection", "Compliance Management"];]
    }, {
      ic,
  o: n: Zap,tit,
  l: e: "DevOps Automation",descripti,
  o: n: "Streamline your development and deployment processes with automation",featur,
  e: s: [["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Auto-scaling"];]
    }
  ]

  const benefits = [
    {
      ic,
  o: n: BarChart3,tit,
  l: e: "Cost Optimization",descripti,
  o: n: "Reduce infrastructure costs by up to 40% with intelligent cloud management"
    }, {
      ic,
  o: n: Globe,tit,
  l: e: "Global Scalability",descripti,
  o: n: "Scale your applications globally with multi-region deployment strategies"
    }, {
      ic,
  o: n: Lock,tit,
  l: e: "Enhanced Security",descripti,
  o: n: "Enterprise-grade security with advanced threat protection and compliance"
    }, {
      ic,
  o: n: Users,tit,
  l: e: "24/7 Support",descripti,
  o: n: "Round-the-clock expert support for your cloud infrastructure needs"
    }
  ]
  const technologies = [
    { na,
  m: e: "AWS", lo,
  g: o: "AWS", descripti,
  o: n: "Amazon Web Services" }, { na,
  m: e: "Azure", lo,
  g: o: "Azure", descripti,
  o: n: "Microsoft Azure" }, { na,
  m: e: "GCP", lo,
  g: o: "GCP", descripti,
  o: n: "Google Cloud Platform" }, { na,
  m: e: "Kubernetes", lo,
  g: o: "K8s", descripti,
  o: n: "Container Orchestration" }, { na,
  m: e: "Docker", lo,
  g: o: "Docker", descripti,
  o: n: "Containerization" }, { na,
  m: e: "Terraform", lo,
  g: o: "TF", descripti,
  o: n: "Infrastructure as Code" }
  ]
  const const containerVariants = { = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.1
      }
    }
  }
  const const itemVariants = { = {
    hidd,
  e: n: { opacit,
  y: 0, y: 20 }
    visib,
  l: e: {
      opacit,
  y: 1,y: 0,transiti,
  o: n: { duratio,
  n: 0.6 }
    }
  }
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h1 className="text-6xl,
  m: d:text-7xl font-bold text-white mb-8 leading-tight">
              Cloud Solutions for the{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Digital Age
              </span>
            </h1>
            <p className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with enterprise-grade cloud infrastructure, DevOps automation
              and scalable solutions that drive innovation and growth.
            </p>

            <motion.div
              className="className="flex flex-col,
  s: m: flex-row gap-6 justify-center mb-16";"
              initial={ opacit,
  y: 0, y: 30 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.3 }
            >
              <motion.button
                className="className="group px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg,
  hove: r: scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-cyan/25 flex items-center gap-3";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hov,
  e: r: translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg,
  hove: r:bg-zion-cyan,
  hove: r:text-white transition-all duration-300 flex items-center gap-3";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From migration to optimization, we provide end-to-end cloud solutions that
              transform your infrastructure and accelerate your digital transformation.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 group";"
                variants={itemVariants}
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade cloud infrastructure with
              expert guidance and proven methodologies.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="className="text-center";"
                variants={itemVariants}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our expertise spans the leading cloud platforms and tools, ensuring
              you get the best solution for your specific needs.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-2,
  m: d: grid-cols-3 l,
  g:grid-cols-6 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="className="text-center group";"
                variants={itemVariants}
                whileHover={ sca,
  l: e: 1.05 }
              >
                <div className="w-20 h-20 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:border-zion-cyan/40 transition-colors duration-300">
                  <span className="text-zion-cyan font-bold text-lg">{tech.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-zion-slate-light text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you build a scalable, secure, and cost-effective
              cloud infrastructure that drives your business forward.
            </p>
            <motion.button
              className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg,
  hove: r: scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-cyan/25";"
              whileHover={ scal,
  e: 1.05 }
              whileTap={ sca,
  l: e: 0.95 }
            >
              Start Your Cloud Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}