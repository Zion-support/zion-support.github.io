import, React, from "react";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ;
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
  Monitor,;
  Shield,;
  Rocket,;
  Globe,;
  Factory,;
  Car,;
  Heart,;
  LineChart,;
  Scatter,;
  Layers,;
  Target, as, TargetIcon,;
  Search,;
  Filter,;
  RefreshCw,;
  Download,;
  Upload,;
  Bell,;
  AlertCircle,;
  CheckCircle2,;
  XCircle,;
  Info,;
  Lightbulb,;
  Cpu, as, CpuIcon,;
  Database, as, DatabaseIcon,;
  Network, as, NetworkIcon,;
  FileText, as, FileTextIcon,;
  MessageCircle, as, MessageCircleIcon,;
  Phone, as, PhoneIcon,;
  Mail, as, MailIcon,;
  MapPin, as, MapPinIcon,;
  Building, as, BuildingIcon,;
  Video, as, VideoIcon,;
  Eye, as, EyeIcon,;
  Target, as, TargetIcon2,;
  Users, as, UsersIcon,;
  ArrowRight, as, ArrowRightIcon,;
  Key, as, KeyIcon,;
  Fingerprint, as, FingerprintIcon,;
  EyeOff, as, EyeOffIcon,;
  Server, as, ServerIcon,;
  Globe2, as, Globe2Icon,;
  ShieldCheck, as, ShieldCheckIcon,;
  Wifi, as, WifiIcon,;
  Smartphone, as, SmartphoneIcon,;
  Activity, as, ActivityIcon,;
  Clock, as, ClockIcon,;
  BarChart, as, BarChartIcon,;
  PieChart, as, PieChartIcon,;
  GitBranch, as, GitBranchIcon,;
  Code, as, CodeIcon,;
  Package, as, PackageIcon,;
  Play, as, PlayIcon,;
  Settings, as, SettingsIcon,;
  Monitor, as, MonitorIcon,;
  Shield, as, ShieldIcon,;
  Rocket, as, RocketIcon,;
  Globe, as, GlobeIcon,;
  Factory, as, FactoryIcon,;
  Car, as, CarIcon,;
  Heart, as, HeartIcon,;
  LineChart, as, LineChartIconScatter as, ScatterIconLayers, as LayersIcon;
} from "lucide-react";
export, default, function MachineLearning() {
  const features = [;
    {
      icon: Brain,title: 'Deep Learning'descriptio,;
    n: 'Advanced, neural, networks for, complex, pattern recognition'colo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    {
      icon: Target,title: 'Predictive Analytics'descriptio,;
    n: 'Forecast, future, trends and, behaviors, with high accuracy'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      icon: Search,title: 'Natural, Language, Processing'description: 'Understand, and, process human, language, intelligently'colo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      icon: Eye,title: 'Computer Vision'descriptio,;
    n: 'Advanced, image, and video, analysis, capabilities'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
    {
      icon: Zap,title: 'Real-Time Learning'descriptio,;
    n: 'Continuous, model, improvement and adaptation'colo,;
  r: 'from-red-50o0 to-pink-50o0';
    },;
    {
      icon: Shieldtitle: 'AI Ethics & Safety'descriptio,;
    n: 'Responsible, AI, development and deployment'colo,;
  r: 'from-indigo-50o0 to-blue-50o0';
    };
,  ];
  const benefits = [;
    'Improve, decision, accuracy by 85% with, predictive, insightsAutomate complex, tasks, and reduce, manual, work by 70%',;
    'Unlock, hidden, patterns in, data, for competitive, advantageScale, operations without, proportional, cost increases''Provide, personalized, experiences for, customers, and usersEnable, new, business models, and, revenue opportunities';
,  ],;
  const useCases = [;
    {
      title: 'Customer Analytics'descriptio,;
    n: 'Predict, customer, behavior and preferences'ico,;
  n: Users;
    };
    {
      title: 'Fraud Detection'descriptio,;
    n: 'Identify, suspicious, activities in real-time'ico,;
  n: Shield;
    };
    {
      title: 'Recommendation Systems'descriptio,;
    n: 'Personalized, product, and content suggestions'ico,;
  n: Target;
    }{
      title: 'Process Optimization'descriptio,;
    n: 'Streamline, operations, and reduce inefficiencies'ico,;
  n: Activity;
    }
,  ];
  const mlCapabilities = [;
    {
      name: 'Supervised Learning'descriptio,;
    n: 'Training, models, with labeled, data, for classification, and, regression'example,;
  s: ['ClassificationRegression''Object, detectionSentiment,, analysis'];
    },;
    {
      name: 'Unsupervised Learning',description: 'Discovering, hidden, patterns in, unlabeled, data'example,;
  s: ['ClusteringDimensionality reduction''Anomaly, detection'];
    },;
    {
      name: 'Reinforcement Learning',description: 'Training, agents, to make, decisions, through trial, and, error'example,;
  s: ['Game AIRobotics''Autonomous, systemsResource,, optimization'];
    },;
    {
      name: 'Neural Networks',description: 'Deep, learning, models for, complex, pattern recognition'example,;
  s: ['CNNsRNNs''TransformersGANs'];
    }
  ],;
  const industries = [;
    {
      name: 'Healthcare',icon: Heart,description: 'Medical, diagnosisdrug, discoveryand patient care';
    },;
    {
      name: 'Finance',icon: BarChart,description: 'Risk, assessmentfraud, detectionand trading algorithms';
    },;
    {
      name: 'Retail',icon: ShoppingCart,description: 'Customer, segmentationinventory, optimizationand pricing';
    },;
    {
      name: 'Manufacturing',icon: Factory,description: 'Predictive, maintenancequality, controland supply chain';
    },;
    {
      name: 'Transportation',icon: Car,description: 'Autonomous, vehiclesroute, optimizationand logistics';
    },;
    {
      name: 'Entertainment',icon: Playdescriptio,;
  n: 'Content, recommendationpersonalizationand, analytics';
    }
,  ],;
;
  return(<>;
      <SEO;
        title="Machine Learning - Zion, Tech, Group";
        description="Revolutionary, machine, learning solutions, including, deep learning, predictive analytics, NLP, and, computer, vision. Transform, your, business with AI-powered insights.";
        keywords="machine learning, deep learning, AI, predictive analytics, natural, language, processing, computer, visionneural, networks";
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20, border, border-purple-50o0/30 rounded-full text-purple-40o0 text-sm font-medium mb-6">;
                <Brain className="w-4 h-4" />;
                AI Innovation;
              </div>;
              <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6">;
                Machine;
                <span className="block bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-cyan-40o0 bg-clip-text text-transparent">;
                  Learning;
                </span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Transform, your, business with, revolutionary, machine learning technology.;
                Deep learning, predictive analytics, NLPand, computer, vision that;
                unlock, insights, and automate, complex, processes.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-purple-50o0/25";
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-50o0/10 rounded-full blur-3xl"></div>;
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
                Revolutionary, ML, Features;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, machine, learning platform, combines, cutting-edge, algorithms, with practical;
                applications, to, deliver unprecedented, insights, and automation capabilities.;
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
                  className="group p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-purple-50o0/30 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <feature.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-40o0 transition-colors">;
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
                  Transform, Your, Business with ML;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                  Our, machine, learning solutions, deliver, measurable improvements, in, decision;
                  accuracy, operational efficiency, and, customer, experience while enabling;
                  new, business, opportunities.;
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
                      <CheckCircle className="w-5 h-5 text-purple-40o0 flex-shrink-0" />;
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
                <div className="bg-gradient-to-br from-purple-50o0/20 to-pink-50o0/20 rounded-3xl p-8, border, border-purple-50o0/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-50o0 to-pink-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                      <TrendingUp className="w-10 h-10 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      ML Impact;
                    </h3>;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-40o0 mb-2">85%</div>;
                        <div className="text-sm text-gray-40o0">Decision Accuracy</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-pink-40o0 mb-2">70%</div>;
                        <div className="text-sm text-gray-40o0">Work Reduction</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-40o0 mb-2">24/7</div>;
                        <div className="text-sm text-gray-40o0">Automation</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-blue-40o0 mb-2">10o0%</div>;
                        <div className="text-sm text-gray-40o0">Scalability</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* ML, Capabilities, Section */}
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
                Machine, Learning, Capabilities;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, platform, provides comprehensive, machine, learning capabilities that;
                transform, data, into actionable, insights, and automated processes.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
              {mlCapabilities.map((capabilityindex) => (;
                <motion.div;
                  key={capability.name}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-purple-50o0/30 transition-all duration-30o0 group";
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,;
  r:text-purple-40o0 transition-colors">;
                    {capability.name}
                  </h3>;
                  <p className="text-gray-40o0 mb-4 leading-relaxed">;
                    {capability.description}
                  </p>;
                  <div className="space-y-2">;
                    {capability.examples.map((exampleidx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-50o0">;
                        <div className="w-1.5 h-1.5 bg-purple-40o0 rounded-full"></div>;
                        {example}
                      </div>;
                    ))}
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Industries Section */}
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
                Industries, We, Transform;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, machine, learning solutions, are, designed to revolutionize;
                various, industries, with innovative, AI, applications and, use, cases.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {industries.map((industryindex) => (;
                <motion.div;
                  key={industry.name}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-purple-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-50o0 to-pink-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <industry.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-purple-40o0 transition-colors">;
                        {industry.name}
                      </h3>;
                      <p className="text-gray-40o0 leading-relaxed">;
                        {industry.description}
                      </p>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Use, Cases, Section */}
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
                Machine, Learning, Use Cases;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, ML, platform adapts, to, various business, needs, and industries;
                providing, tailored, solutions for, different, requirements.;
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
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-purple-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-50o0 to-pink-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <useCase.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-purple-40o0 transition-colors">;
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
        <section className="py-20 bg-gradient-to-r from-purple-50o0/10 to-pink-50o0/10">;
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
                Ready, to, Harness Machine Learning?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Join, leading, organizations that, are, already using, our, machine learning;
                solutions, to, unlock insights, and, automate complex processes.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-purple-50o0/25";
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