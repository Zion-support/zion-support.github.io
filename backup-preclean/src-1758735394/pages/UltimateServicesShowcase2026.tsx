import React from "react"
import { motion } from "framer-motion"
import { ;
  Star,;
  Rocket, ;
  Brain, ;
  Cloud, ;
  Shield, ;
  Zap, ;
  Atom, ;
  Cpu, ;
  Network, ;
  Database,;
  TrendingUp,;
  Users,;
  Target,;
  Globe,;
  Code,;
  Lock,;
  Eye,;
  Heart,;
  ShoppingCart,;
  MessageCircle,;
  BarChart3,;
  HelpCircle,;
  FileText,;
  Truck,;
  Mail,;
  Smartphone,;
  DollarSign,;
  CheckCircle,;
  ArrowRight,;
  Sparkles,;
  Award,;
  GitFork,;
  Server,;
  Building,;
  Leaf,;
  Satellite,;
  Gamepad2,;
  Coins,;
  GraduationCap,;
  Activity,;
  Briefcase,;
  Newspaper,;
  BookOpen,;
  ExternalLink;
} from "lucide-react"
export default function UltimateServicesShowcase2026() {;
  const services = [;
    {;
      category: 'AI & Machine Learning',icon: Brain,services: [;
        {;
          name: 'AI Workflow Orchestrator',description: 'Intelligent process automation and workflow management',href: '/services/ai-workflow-orchestrator',features: ['Process AutomationWorkflow Optimization', 'AI Decision MakingIntegration Hub']
        },;
        {;
          name: 'AI Data Governance Platform',description: 'Comprehensive data management and compliance',href: '/services/ai-data-governance-platform',features: ['Data QualityCompliance Management', 'Privacy ProtectionAudit Trails']
        },;
        {;
          name: 'AI Customer Experience Analytics',description: 'Deep insights into customer behavior and satisfaction',href: '/services/ai-customer-experience-analytics',features: ['Behavior AnalysisSentiment Analysis', 'Predictive InsightsPersonalization']
        };
      ];
    },;
    {;
      category: 'Cloud & Infrastructure',icon: Cloud,services: [;
        {;
          name: 'Cloud DevOps',description: 'Streamlined development and operations',href: '/services/cloud-devops',features: ['CI/CD PipelinesInfrastructure as Code', 'MonitoringAutomation']
        },;
        {;
          name: 'FinOps Advisor',description: 'Cloud cost optimization and management',href: '/services/finops-advisor',features: ['Cost AnalysisResource Optimization', 'Budget ManagementROI Tracking']
        };
      ];
    },;
    {;
      category: 'Cybersecurity',icon: Shield,services: [;
        {;
          name: 'AI Cybersecurity Platform',description: 'AI-powered threat detection and response',href: '/services/ai-cybersecurity-platform',features: ['Threat DetectionAutomated Response', 'Risk AssessmentCompliance']
        },;
        {;
          name: 'Zero Trust Network Access',description: 'Secure access control and network security',href: '/services/zero-trust-network-access',features: ['Identity VerificationAccess Control', 'Network SegmentationMonitoring']
        };
      ];
    },;
    {;
      category: 'Emerging Technologies',icon: Atom,services: [;
        {;
          name: 'Quantum Computing Solutions',description: 'Next-generation quantum computing services',href: '/services/quantum-computing',features: ['Quantum AlgorithmsOptimization', 'SimulationResearch']
        },;
        {;
          name: 'IoT Edge Computing',description: 'Smart device networks and edge processing',href: '/services/iot-edge-computing',features: ['Device ManagementEdge Processing', 'Real-time AnalyticsConnectivity']
        };
      ];
    },;
    {;
      category: 'Micro SaaS Solutions',icon: ShoppingCart,services: [;
        {;
          name: 'Micro CRM',description: 'Customer relationship management for small businesses',href: '/services/micro-crm',features: ['Contact ManagementSales Tracking', 'Customer InsightsAutomation']
        },;
        {;
          name: 'Website Analytics',description: 'Privacy-first analytics for small businesses',href: '/services/website-analytics',features: ['Visitor TrackingPerformance Metrics', 'Privacy ComplianceInsights']
        };
      ];
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">;
                2026 Ultimate Services;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Showcase</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Discover our cutting-edge AI, cloud, and emerging technology solutions designed to transform your business in 2026 and beyond.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                Explore Services;
              </[^>]*>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">;
                Get Started;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Comprehensive Service Portfolio;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              From AI-powered solutions to cutting-edge quantum computing, we offer the full spectrum of modern technology services.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {services.map((category, categoryIndex) => (;
              <motion.div
                key={category.category};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.1 * categoryIndex }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-semibold text-white">{category.category}</[^>]*>
                </[^>]*>
                ;
                <div className="space-y-4">;
                  {category.services.map((service, serviceIndex) => (;
                    <div key={service.name} className="border-l-2 border-blue-500 pl-4">;
                      <h4 className="text-lg font-medium text-white mb-2">{service.name}</[^>]*>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</[^>]*>
                      <div className="flex flex-wrap gap-2 mb-3">;
                        {service.features.map((feature, featureIndex) => (;
                          <span;
                            key={featureIndex};
                            className="[^"]*"
                          >;
                            {feature};
                          </[^>]*>
                        ))};
                      </[^>]*>
                      <a;
                        href={service.href};
                        className="[^"]*"
                      >;
                        Learn More <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join the future of technology with our comprehensive suite of AI, cloud, and emerging technology solutions.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                Start Your Journey;
              </[^>]*>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">;
                Contact Us;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};