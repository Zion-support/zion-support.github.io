import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  Cloud,;
  Brain,;
  Zap,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Lock,;
  Database,;
  Cpu,;
  Network,;
  BarChart3,;
  FileText,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Building,;
  Video,;
  Eye,;
  Target,;
  Users,;
  ArrowRight,;
  Key,;
  Fingerprint,;
  EyeOff,;
  Server,;
  Globe2,;
  ShieldCheck,;
  Wifi,;
  Smartphone,;
  Activity,;
  Clock,;
  BarChart,;
  PieChart,;
  GitBranch,;
  Code,;
  Package,;
  Play,;
  Settings,;
  MonitorShieldRocket;
} from "lucide-react";
export, default, function CloudDevOps() {
  const features = [;
    {
      icon: Cloud,title: 'Cloud Infrastructure'descriptio,;
    n: 'Scalable, cloud, solutions with, automated, provisioning and management'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      icon: GitBranch,title: 'CI/CD Pipelines',description: 'Automated build, testand, deployment, workflows'color: 'from-green-50o0 to-emerald-50o0';
    };
    {
      icon: Code,title: 'Infrastructure, as, Code'description: 'Version-controlled, infrastructure, with Terraform, and, CloudFormation'colo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    {
      icon: Monitor,title: 'Monitoring & Logging'descriptio,;
    n: 'Comprehensive, observability, and performance monitoring'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
    {
      icon: Shield,title: 'Security & Compliance'descriptio,;
    n: 'Enterprise-grade, security, with automated, compliance, checks'colo,;
  r: 'from-red-50o0 to-pink-50o0';
    },;
    {
      icon: Rockettitle: 'Auto-scaling'descriptio,;
    n: 'Intelligent, resource, scaling based, on, demand and performance'colo,;
  r: 'from-indigo-50o0 to-blue-50o0';
    };
,  ];
  const benefits = [;
    'Deploy, applications, 10x faster, with, automated pipelinesReduce, infrastructure, costs by 40% with, cloud, optimization',;
    'Improve, system, reliability with 99.9% uptimeEnable, rapid, development and, iteration, cycles''Scale, infrastructure, automatically based, on, demandEnsure security, and, compliance with, automated, checks';
,  ],;
  const useCases = [;
    {
      title: 'Web Applications'descriptio,;
    n: 'Scalable, web, apps with, automated, deployment and scaling'ico,;
  n: Globe;
    };
    {
      title: 'Microservices'descriptio,;
    n: 'Containerized, microservices, with orchestration, and, monitoring'ico,;
  n: Package;
    };
    {
      title: 'Data Platforms'descriptio,;
    n: 'Big, data, infrastructure with, automated, processing pipelines'ico,;
  n: Database;
    }{
      title: 'Mobile Backends'descriptio,;
    n: 'Scalable, mobile, app backends, with, real-time updates'ico,;
  n: Smartphone;
    }
,  ];
  const devOpsCapabilities = [;
    {
      name: 'Continuous Integration',description: 'Automated, code, building, testingand, quality, checks'examples: ['Automated, testingCode, quality gates''Build, automation'];
    },;
    {
      name: 'Continuous Deployment',description: 'Automated, deployment, to multiple environments'example,;
  s: ['Staging, deploymentProduction, rollout''Rollback, automation'];
    },;
    {
      name: 'Infrastructure Management',description: 'Version-controlled, infrastructure, with automation'example,;
  s: ['Terraform, scriptsCloudFormation, templates''Resource, provisioning'];
    },;
    {
      name: 'Monitoring & Alerting',description: 'Real-time, system, monitoring and, automated, alerts'example,;
  s: ['Performance, metricsError, tracking''Capacity, planning'];
    }
  ],;
;
  return(<>;
      <SEO;
        title="Cloud DevOps - Zion, Tech, Group";
        description="Revolutionary, cloud, DevOps platform, with, automated CI/CD, infrastructure, as, code, and, comprehensive, monitoring. Transform, your, development and, deployment, processes.";
        keywords="cloud DevOps, CI/CD, infrastructure, as, code, cloud infrastructure, automated deployment, monitoringcloud optimization";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg: py-32">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 30 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50o0/20 to-cyan-50o0/20, border, border-blue-50o0/30 rounded-full text-blue-40o0 text-sm font-medium mb-6">;
                <Cloud className="w-4 h-4" />;
                DevOps Innovation;
              </div>;
              <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6">;
                Cloud;
                <span className="block bg-gradient-to-r from-blue-40o0 via-cyan-40o0 to-indigo-40o0 bg-clip-text text-transparent">;
                  DevOps;
                </span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Transform, your, development and, deployment, processes with, our, revolutionary cloud, DevOps, platform.;
                Automated CI/CD, infrastructure, as, codeand comprehensive, monitoring, that accelerates;
                your, development, cycles and, ensures, reliability.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-cyan-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
                >;
                  Get Started;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-gray-60o0 text-white font-semibold rounded-lg hover: border-gray-50o0 hove,;
  r:bg-gray-80o0/50 transition-all duration-30o0";
                >;
                  View Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
                Revolutionary, DevOps, Features;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, cloud, DevOps platform, combines, cutting-edge, technology, with best practices;
                to, deliver, unprecedented automation, and, efficiency.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {features.map((featureindex) => (;
                <motion.div;
                  key={feature.title}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-blue-50o0/30 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <feature.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-40o0 transition-colors">;
                    {feature.title}
                  </h3>;
                  <p className="text-gray-40o0 leading-relaxed">;
                    {feature.description}
                  </p>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-slate-80o0/30">;
          <div className="container-responsive">;
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 items-center">;
              <motion.div;
                initial={{ opacit,;
    y: 0,;
  x: -30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >;
                <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
                  Transform, Your, Development Process;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                  Our, cloud, DevOps platform, delivers, measurable improvements, in, deployment speed;
                  infrastructure efficiency, and, system, reliability while, reducing, operational;
                  overhead, and, costs.;
                </p>;
                <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">;
                  {benefits.map((benefitindex) => (;
                    <motion.div;
                      key={benefit}
                      initial={{ opacity: 0,;
  x: -20 }};
                      whileInView={{ opacity: 1,;
  x: 0 }}
                      transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3";
                    >;
                      <CheckCircle className="w-5 h-5 text-green-40o0 flex-shrink-0" />;
                      <span className="text-gray-30o0">{benefit}</span>;
                    </motion.div>;
                  ))}
                </div>;
              </motion.div>;
              ;
              <motion.div;
                initial={{ opacity: 0,;
  x: 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative";
              >;
                <div className="bg-gradient-to-br from-blue-50o0/20 to-cyan-50o0/20 rounded-3xl p-8, border, border-blue-50o0/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50o0 to-cyan-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                      <TrendingUp className="w-10 h-10 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      DevOps Impact;
                    </h3>;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-blue-40o0 mb-2">10x</div>;
                        <div className="text-sm text-gray-40o0">Faster Deployment</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-40o0 mb-2">40%</div>;
                        <div className="text-sm text-gray-40o0">Cost Reduction</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-indigo-40o0 mb-2">99.9%</div>;
                        <div className="text-sm text-gray-40o0">Uptime</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-40o0 mb-2">24/7</div>;
                        <div className="text-sm text-gray-40o0">Automation</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* DevOps, Capabilities, Section */}
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
                DevOps Capabilities;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, platform, provides comprehensive, DevOps, capabilities that;
                streamline, your, entire development, and, deployment lifecycle.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
              {devOpsCapabilities.map((capabilityindex) => (;
                <motion.div;
                  key={capability.name}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-blue-50o0/30 transition-all duration-30o0 group";
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,;
  r:text-blue-40o0 transition-colors">;
                    {capability.name}
                  </h3>;
                  <p className="text-gray-40o0 mb-4 leading-relaxed">;
                    {capability.description}
                  </p>;
                  <div className="space-y-2">;
                    {capability.examples.map((exampleidx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-50o0">;
                        <div className="w-1.5 h-1.5 bg-blue-40o0 rounded-full"></div>;
                        {example}
                      </div>;
                    ))}
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Use, Cases, Section */}
        <section className="py-20 bg-slate-80o0/30">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
                Cloud, DevOps, Use Cases;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, DevOps, platform adapts, to, various application, types, and industries;
                providing, tailored, solutions for, different, development needs.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
              {useCases.map((useCaseindex) => (;
                <motion.div;
                  key={useCase.title}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-blue-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50o0 to-cyan-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <useCase.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-blue-40o0 transition-colors">;
                        {useCase.title}
                      </h3>;
                      <p className="text-gray-40o0 leading-relaxed">;
                        {useCase.description}
                      </p>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50o0/10 to-cyan-50o0/10">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
                Ready, to, Transform Your DevOps?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Join, leading, organizations that, are, already using, our, cloud DevOps;
                platform, to, accelerate their, development, and deployment processes.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-cyan-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
                >;
                  Start Today;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-gray-60o0 text-white font-semibold rounded-lg hover: border-gray-50o0 hove,;
  r:bg-gray-80o0/50 transition-all duration-30o0";
                >;
                  Schedule Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
;