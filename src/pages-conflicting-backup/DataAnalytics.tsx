import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  BarChart3,;
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
  LineChartScatterLayers;
} from "lucide-react";
export, default, function DataAnalytics() {
  const features = [;
    {
      icon: BarChart3,title: 'Advanced Analytics'descriptio,;
    n: 'Comprehensive, data, analysis with, machine, learning and AI'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      icon: Brain,title: 'AI-Powered Insights'descriptio,;
    n: 'Intelligent, data, processing and, predictive, analytics'colo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    {
      icon: Database,title: 'Big, Data, Processing'description: 'Handle, massive, datasets with, distributed, computing'colo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      icon: LineChart,title: 'Real-Time Analytics'descriptio,;
    n: 'Live, data, streaming and, instant, insights'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
    {
      icon: Shield,title: 'Data Security'descriptio,;
    n: 'Enterprise-grade, security, and compliance'colo,;
  r: 'from-red-50o0 to-pink-50o0';
    },;
    {
      icon: Globetitle: 'Data Visualization'descriptio,;
    n: 'Interactive, dashboards, and beautiful charts'colo,;
  r: 'from-indigo-50o0 to-blue-50o0';
    };
,  ];
  const benefits = [;
    'Unlock, insights, from 10o0% of, your, data with, AI, analysisReduce decision-making, time, by 80% with real-time analytics',;
    'Improve, business, performance by 35% with data-driven, insightsAutomate, reporting and, eliminate, manual data processing''Scale, analytics, to handle, any, data volume, or, velocityEnsure data, quality, and accuracy, with, automated validation';
,  ],;
  const useCases = [;
    {
      title: 'Business Intelligence'descriptio,;
    n: 'Comprehensive, BI, dashboards and reporting'ico,;
  n: BarChart3;
    };
    {
      title: 'Customer Analytics'descriptio,;
    n: 'Deep, customer, insights and, behavior, analysis'ico,;
  n: Users;
    };
    {
      title: 'Financial Analytics'descriptio,;
    n: 'Risk, assessment, and financial, performance, analysis'ico,;
  n: TrendingUp;
    }{
      title: 'Operational Analytics'descriptio,;
    n: 'Process, optimization, and performance monitoring'ico,;
  n: Activity;
    }
,  ];
  const analyticsCapabilities = [;
    {
      name: 'Data Processing'descriptio,;
    n: 'Advanced, ETL, and data, transformation, capabilities'example,;
  s: ['Data, cleaningTransformation''Aggregation'];
    },;
    {
      name: 'Machine Learning',description: 'AI-powered, predictive, analytics and modeling'example,;
  s: ['Predictive, modelsClassification''Clustering'];
    },;
    {
      name: 'Real-Time Streaming',description: 'Live, data, processing and, instant, analytics'example,;
  s: ['Stream, processingEvent, analytics''Live, dashboards'];
    },;
    {
      name: 'Data Visualization',description: 'Interactive, charts, and comprehensive dashboards'example,;
  s: ['Custom, chartsInteractive, dashboards''Mobile, views'];
    }
  ],;
;
  return(<>;
      <SEO;
        title="Data Analytics - Zion, Tech, Group";
        description="Revolutionary, data, analytics platform, with, AI-powered insights, real-time processing, and, comprehensive, visualization. Transform, your, data into, actionable, business intelligence.";
        keywords="data analytics, business intelligence, AI analytics, big data, predictive analytics, data visualizationreal-time analytics";
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50o0/20 to-purple-50o0/20, border, border-indigo-50o0/30 rounded-full text-indigo-40o0 text-sm font-medium mb-6">;
                <BarChart3 className="w-4 h-4" />;
                Analytics Innovation;
              </div>;
              <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6">;
                Data;
                <span className="block bg-gradient-to-r from-indigo-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">;
                  Analytics;
                </span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Transform, your, data into, actionable, insights with, our, revolutionary analytics platform.;
                AI-powered analysis, real-time, processingand, beautiful visualizations that;
                drive, better, business decisions, and, outcomes.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-indigo-60o0 hover:to-purple-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-indigo-50o0/25";
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-50o0/10 rounded-full blur-3xl"></div>;
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
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
                Revolutionary, Analytics, Features;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, data, analytics platform, combines, cutting-edge, technology, with practical;
                applications, to, deliver unprecedented, insights, and intelligence.;
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
                  className="group p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-indigo-50o0/30 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <feature.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-40o0 transition-colors">;
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
                  Transform, Your, Data Strategy;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                  Our, data, analytics platform, delivers, measurable improvements, in, decision-making;
                  speed, business performance, and, operational, efficiency while providing;
                  comprehensive, insights, from all, your, data sources.;
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
                <div className="bg-gradient-to-br from-indigo-50o0/20 to-purple-50o0/20 rounded-3xl p-8, border, border-indigo-50o0/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-50o0 to-purple-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                      <TrendingUp className="w-10 h-10 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Analytics Impact;
                    </h3>;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-indigo-40o0 mb-2">10o0%</div>;
                        <div className="text-sm text-gray-40o0">Data Utilization</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-40o0 mb-2">80%</div>;
                        <div className="text-sm text-gray-40o0">Faster Decisions</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-pink-40o0 mb-2">35%</div>;
                        <div className="text-sm text-gray-40o0">Performance Gain</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-40o0 mb-2">24/7</div>;
                        <div className="text-sm text-gray-40o0">Real-Time</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Analytics, Capabilities, Section */}
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
                Analytics Capabilities;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, platform, provides comprehensive, analytics, capabilities that;
                transform, raw, data into, actionable, business intelligence.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
              {analyticsCapabilities.map((capabilityindex) => (;
                <motion.div;
                  key={capability.name}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-indigo-50o0/30 transition-all duration-30o0 group";
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,;
  r:text-indigo-40o0 transition-colors">;
                    {capability.name}
                  </h3>;
                  <p className="text-gray-40o0 mb-4 leading-relaxed">;
                    {capability.description}
                  </p>;
                  <div className="space-y-2">;
                    {capability.examples.map((exampleidx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-50o0">;
                        <div className="w-1.5 h-1.5 bg-indigo-40o0 rounded-full"></div>;
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
                Data, Analytics, Use Cases;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, analytics, platform adapts, to, various business, needs, and industries;
                providing, tailored, solutions for, different, analytical requirements.;
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
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-indigo-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50o0 to-purple-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <useCase.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-indigo-40o0 transition-colors">;
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
        <section className="py-20 bg-gradient-to-r from-indigo-50o0/10 to-purple-50o0/10">;
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
                Ready, to, Transform Your Data?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Join, leading, organizations that, are, already using, our, data analytics;
                platform, to, unlock insights, and, drive better, business, decisions.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-indigo-60o0 hover:to-purple-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-indigo-50o0/25";
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