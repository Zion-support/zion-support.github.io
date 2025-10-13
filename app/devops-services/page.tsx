import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Clock,
  BarChart3,
  Settings,
  Database,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const DevOpsServicesPage = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automated continuous integration and deployment pipelines for faster, more reliable software delivery",
      icon: <Code className="w-8 h-8" />,
      features: ["Automated testing", "Deployment automation", "Rollback capabilities", "Multi-environment support"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and scalability",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Terraform/CloudFormation", "Version control", "Environment consistency", "Cost optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management for scalable application deployment",
      icon: <Settings className="w-8 h-8" />,
      features: ["Kubernetes clusters", "Docker containers", "Auto-scaling", "Service mesh"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solutions for application performance and infrastructure health",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Alerting systems", "Log aggregation", "Performance metrics"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Security Integration",
      description: "DevSecOps practices to integrate security throughout the development lifecycle",
      icon: <Shield className="w-8 h-8" />,
      features: ["Security scanning", "Compliance automation", "Secrets management", "Vulnerability assessment"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime and optimized performance",
      icon: <Globe className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Migration planning", "Data transfer", "Cost optimization"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      title: "Faster Deployments",
      description: "Reduce deployment time from hours to minutes with automated CI/CD pipelines",
      icon: <Zap className="w-6 h-6" />,
      stat: "90% faster"
    },
    {
      title: "Improved Reliability",
      description: "Automated testing and rollback capabilities ensure stable releases",
      icon: <CheckCircle className="w-6 h-6" />,
      stat: "99.9% uptime"
    },
    {
      title: "Cost Optimization",
      description: "Right-size resources and eliminate waste with intelligent monitoring",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "40% cost reduction"
    },
    {
      title: "Team Productivity",
      description: "Focus on development while automation handles deployment and monitoring",
      icon: <Users className="w-6 h-6" />,
      stat: "60% efficiency gain"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze current infrastructure and create a comprehensive DevOps roadmap",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Tool Selection",
      description: "Choose the right DevOps tools and technologies for your specific needs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Set up CI/CD pipelines, monitoring, and automation workflows",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Train your team and provide ongoing support for continuous improvement",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DevOps Services - Zion Tech Group | CI/CD, Infrastructure as Code, Cloud Migration</title>
        <meta name="description" content="Professional DevOps services including CI/CD pipeline setup, infrastructure as code, container orchestration, and cloud migration. Accelerate your software delivery with our expert team." />
        <meta name="keywords" content="DevOps services, CI/CD, infrastructure as code, Kubernetes, Docker, cloud migration, automation, monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/devops-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              DevOps Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Accelerate your software delivery with our comprehensive DevOps solutions. 
            From CI/CD pipelines to cloud migration, we help you build, deploy, and scale applications faster and more reliably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive DevOps services designed to streamline your development workflow and accelerate time to market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your development process with measurable improvements in speed, reliability, and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our DevOps Process
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A proven methodology that ensures successful DevOps implementation and adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our DevOps experts help you build faster, more reliable software delivery pipelines. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your DevOps Journey
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              View All Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default DevOpsServicesPage;