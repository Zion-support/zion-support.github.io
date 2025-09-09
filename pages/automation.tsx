import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Zap, Cpu, Brain, Shield, Rocket, Database, 
  Globe, Users, Award, Clock, CheckCircle, ArrowRight,
  Settings, Workflow, Bot, Play, TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';

const Automation: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Intelligent Process Automation",
      description: "AI-powered automation for complex business processes and workflows",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI-Driven Decision Making",
      description: "Autonomous systems that make intelligent decisions and take actions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "DevOps Automation",
      description: "End-to-end automation of software development and deployment",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security Automation",
      description: "Automated threat detection, response, and security operations",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Pipeline Automation",
      description: "Automated data collection, processing, and analysis workflows",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Infrastructure Automation",
      description: "Self-healing and self-scaling infrastructure management",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const automationStats = [;
    { label: 'Active Automations', value: '227', color: 'text-cyan-400' },;
    { label: 'Pages Generated', value: '2,960+', color: 'text-fuchsia-400' },;
    { label: 'Uptime', value: '99.9%', color: 'text-green-400' },;
    {};
          {/* Automation Statistics */}
          <section className="mb-20">;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
              {};
                <div key={index} className="text-center">;
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>;
                    {stat.value}
                  </div>;
                  <div className="text-white/70 text-sm">;
                    {stat.label}
                  </div>;
                </div>;
              ))}
            </div>;
          </section>;

  const solutions = [
    {
      category: "Business Process Automation",
      items: [
        "Workflow Orchestration",
        "Document Processing",
        "Customer Service Automation",
        "Sales Process Automation",
        "HR Process Automation",
        "Financial Process Automation"
      ]
    },
    {
      category: "IT Operations Automation",
      items: [
        "Infrastructure Provisioning",
        "Configuration Management",
        "Monitoring & Alerting",
        "Incident Response",
        "Backup & Recovery",
        "Performance Optimization"
      ]
    },
    {
      category: "Development Automation",
      items: [
        "CI/CD Pipelines",
        "Code Quality Checks",
        "Testing Automation",
        "Deployment Automation",
        "Environment Management",
        "Release Management"
      ]
    }
  ];

          {/* How It Works */}
          <section className="mb-20">;
            <h2 className="text-3xl font-bold mb-12 text-center text-white">How Autonomous Automation Works</h2>;
            <div className="max-w-6xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                    <span className="text-3xl">🧠</span>;
                  </div>;
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Intelligent Analysis</h3>;
                  <p className="text-white/70">;
                    Our AI systems continuously analyze data, identify patterns, and make intelligent ;
                    decisions about when and how to automate processes.;
                  </p>;
                </div>;

                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                    <span className="text-3xl">⚡</span>;
                  </div>;
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Autonomous Execution</h3>;
                  <p className="text-white/70">;
                    Once decisions are made, systems automatically execute actions, monitor results, ;
                    and adjust strategies in real-time.;
                  </p>;
                </div>;

                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                    <span className="text-3xl">🔄</span>;
                  </div>;
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Continuous Learning</h3>;
                  <p className="text-white/70">;
                    Systems learn from every action, continuously improving performance and adapting ;
                    to changing conditions and requirements.;
                  </p>;
                </div>;
              </div>;
            </div>;
          </section>;

          {/* Benefits */}
          <section className="mb-20">;
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Benefits of Autonomous Automation</h2>;
            <div className="max-w-6xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Operational Efficiency</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• 24/7 operation without human intervention</li>;
                    <li>• Instant response to changing conditions</li>;
                    <li>• Elimination of human error and delays</li>;
                    <li>• Scalable operations that grow with demand</li>;
                  </ul>;
                </div>;

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Cost Optimization</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• Reduced operational costs through efficiency</li>;
                    <li>• Optimal resource utilization</li>;
                    <li>• Predictive maintenance prevents costly failures</li>;
                    <li>• Automated scaling based on actual demand</li>;
                  </ul>;
                </div>;

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Quality & Consistency</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• Consistent quality across all operations</li>;
                    <li>• Continuous monitoring and improvement</li>;
                    <li>• Standardized processes and procedures</li>;
                    <li>• Reduced variability in outcomes</li>;
                  </ul>;
                </div>;

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Innovation & Growth</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• Freed human resources for creative work</li>;
                    <li>• Rapid experimentation and iteration</li>;
                    <li>• Data-driven insights and optimization</li>;
                    <li>• Competitive advantage through automation</li>;
                  </ul>;
                </div>;
              </div>;
            </div>;
          </section>;

          {/* Call to Action */}
          <section className="text-center">;
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">;
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Automate Your Future?</h2>;
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">;
                Join the automation revolution and discover how Zion Tech Group's autonomous systems ;
                can transform your operations and drive unprecedented growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">;
                  Get Started Today;
                </a>;
                <a href="/blog" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300">;
                  Learn More;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </div>;
    </>;
  )}