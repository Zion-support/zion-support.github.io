import React from 'react';
import { Link } from 'react-router-dom';
import { Code, GitBranch, Server, Zap, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

const DevOpsPage: React.FC = () => {
  const services = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated continuous integration and deployment pipelines for faster, more reliable releases.',
      icon: GitBranch,
      color: 'text-blue-400',
      features: [
        'Automated testing and quality gates',
        'Multi-environment deployments',
        'Rollback capabilities',
        'Deployment monitoring'
      ],
      pricing: 'Starting at $1,200/month'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage your infrastructure through code with version control and automated provisioning.',
      icon: Code,
      color: 'text-green-400',
      features: [
        'Terraform and CloudFormation',
        'Version-controlled infrastructure',
        'Automated provisioning',
        'Infrastructure testing'
      ],
      pricing: 'Starting at $1,500/month'
    },
    {
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications with Kubernetes and Docker.',
      icon: Server,
      color: 'text-purple-400',
      features: [
        'Kubernetes cluster management',
        'Docker containerization',
        'Service mesh implementation',
        'Auto-scaling and load balancing'
      ],
      pricing: 'Starting at $2,000/month'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting for your applications and infrastructure.',
      icon: Zap,
      color: 'text-yellow-400',
      features: [
        'Application performance monitoring',
        'Infrastructure monitoring',
        'Log aggregation and analysis',
        'Proactive alerting'
      ],
      pricing: 'Starting at $800/month'
    }
  ];

  const tools = [
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Ansible', category: 'Configuration' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'ELK Stack', category: 'Logging' },
    { name: 'AWS CodePipeline', category: 'CI/CD' },
    { name: 'Azure DevOps', category: 'CI/CD' },
    { name: 'GitHub Actions', category: 'CI/CD' }
  ];

  const benefits = [
    {
      title: 'Faster Deployments',
      description: 'Reduce deployment time from hours to minutes',
      icon: Clock,
      metric: '90% faster'
    },
    {
      title: 'Improved Reliability',
      description: 'Automated testing and rollback capabilities',
      icon: Shield,
      metric: '99.9% uptime'
    },
    {
      title: 'Better Collaboration',
      description: 'Seamless integration between development and operations',
      icon: GitBranch,
      metric: '50% fewer conflicts'
    },
    {
      title: 'Cost Optimization',
      description: 'Automated resource management and scaling',
      icon: Zap,
      metric: '30% cost savings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            DevOps Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your software delivery with our comprehensive DevOps solutions. 
            From CI/CD pipelines to infrastructure automation, we help you build, deploy, and scale faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get DevOps Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/ai-workflow-automation"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              AI Workflow Automation
            </Link>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            DevOps Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <service.icon className={`w-12 h-12 ${service.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold text-lg">{service.pricing}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center w-full justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Tools & Technologies
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              We work with the latest DevOps tools and technologies to deliver cutting-edge solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                  <h3 className="text-white font-semibold mb-1">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            DevOps Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DevOps Process */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Our DevOps Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">Analyze your current development and deployment processes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Design</h3>
                <p className="text-gray-300">Design custom DevOps solutions and automation workflows</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Implement</h3>
                <p className="text-gray-300">Deploy tools, pipelines, and monitoring systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Optimize</h3>
                <p className="text-gray-300">Continuous monitoring and optimization of your DevOps practices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our DevOps experts help you build faster, more reliable software delivery pipelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Start Your DevOps Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/it-services"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              IT Services
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DevOpsPage;