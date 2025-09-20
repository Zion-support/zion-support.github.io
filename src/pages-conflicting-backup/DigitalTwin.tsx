import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  Globe,;
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
  Cloud,;
  Activity,;
  Clock,;
  BarChart,;
  PieChart,;
  Cube,;
  Layers,;
  Monitor,;
  Smartphone,;
  FactoryCarHeart;
} from "lucide-react";
export, default, function DigitalTwin() {
  const features = [;
    {
      icon: Globe,title: 'Virtual Replicas'descriptio,;
    n: 'Create, accurate, digital representations, of, physical assets, and, systems'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      icon: Brain,title: 'AI-Powered Analytics'descriptio,;
    n: 'Intelligent, insights, and predictive, modeling, for optimization'colo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    {
      icon: Zap,title: 'Real-Time Monitoring'descriptio,;
    n: 'Live, data, synchronization and, instant, status updates'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
    {
      icon: Cube,title: '3D Visualization'descriptio,;
    n: 'Immersive, 3D, models and, interactive, simulations'colo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      icon: Network,title: 'IoT Integration'descriptio,;
    n: 'Seamless, connection, with sensors, and, connected devices'colo,;
  r: 'from-red-50o0 to-pink-50o0';
    },;
    {
      icon: BarChart3title: 'Performance Analytics'descriptio,;
    n: 'Comprehensive, metrics, and optimization insights'colo,;
  r: 'from-indigo-50o0 to-blue-50o0';
    };
,  ];
  const benefits = [;
    'Reduce, operational, costs by 30% with, predictive, maintenanceImprove asset, performance, by 25% through optimization',;
    'Minimize, downtime, with real-time, monitoring, and alertsEnable, remote, operations and, virtual, collaboration''Optimize, resource, allocation and, energy, efficiencyAccelerate decision-making, with, data-driven insights';
,  ],;
  const useCases = [;
    {
      title: 'Manufacturing'descriptio,;
    n: 'Digital, twins, for production, lines, and industrial processes'ico,;
  n: Factory;
    };
    {
      title: 'Smart Cities'descriptio,;
    n: 'Urban, infrastructure, monitoring and management'ico,;
  n: Building;
    };
    {
      title: 'Healthcare'descriptio,;
    n: 'Patient, monitoring, and medical, device, management'ico,;
  n: Heart;
    }{
      title: 'Transportation'descriptio,;
    n: 'Vehicle, fleet, management and, infrastructure, optimization'ico,;
  n: Car;
    }
,  ];
  const digitalTwinCapabilities = [;
    {
      name: 'Real-Time Monitoring'descriptio,;
    n: 'Live, data, synchronization and, instant, status updates'example,;
  s: ['Live, sensor, dataPerformance metrics''Status, monitoring'];
    },;
    {
      name: 'Predictive Analytics',description: 'AI-powered, forecasting, and predictive maintenance'example,;
  s: ['Failure, predictionPerformance, optimization''Trend, analysis'];
    },;
    {
      name: '3D Visualization',description: 'Immersive, 3D, models and, interactive, simulations'example,;
  s: ['Virtual, walkthroughsInteractive, models''Spatial, analysis'];
    },;
    {
      name: 'Simulation & Testing',description: 'Virtual, testing, and scenario modeling'example,;
  s: ['What-if, scenariosPerformance, testing''Risk, assessment'];
    }
  ],;
;
  return(<>;
      <SEO;
        title="Digital, Twin, Platform - Zion, Tech, Group";
        description="Revolutionary, digital, twin platform, with, real-time monitoring, AI analytics, and, 3D, visualization. Transform, your, assets with, virtual, replicas and, predictive, insights.";
        keywords="digital twin, virtual replicas, IoT monitoring, predictive analytics, 3D visualization, asset optimizationreal-time monitoring";
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20, border, border-cyan-50o0/30 rounded-full text-cyan-40o0 text-sm font-medium mb-6">;
                <Globe className="w-4 h-4" />;
                Digital Innovation;
              </div>;
              <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6">;
                Digital Twin;
                <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-indigo-40o0 bg-clip-text text-transparent">;
                  Platform;
                </span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Transform, your, physical assets, with, our revolutionary, digital, twin platform.;
                Create, virtual, replicas, monitor, performance, in real-timeand optimize;
                operations, with, AI-powered, insights, and predictive analytics.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-cyan-50o0/25";
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
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
                Revolutionary, Digital, Twin Features;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, digital, twin platform, combines, cutting-edge, technology, with practical;
                applications, to, deliver unprecedented, insights, and optimization capabilities.;
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
                  className="group p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-cyan-50o0/30 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <feature.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-40o0 transition-colors">;
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
                  Transform, Your, Asset Management;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                  Our, digital, twin platform, delivers, measurable improvements, in, operational;
                  efficiency, cost reduction, and, performance, optimization while enabling;
                  predictive, maintenance, and data-driven, decision, making.;
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
                <div className="bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20 rounded-3xl p-8, border, border-cyan-50o0/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                      <TrendingUp className="w-10 h-10 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Digital, Twin, Impact;
                    </h3>;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-40o0 mb-2">30%</div>;
                        <div className="text-sm text-gray-40o0">Cost Reduction</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-blue-40o0 mb-2">25%</div>;
                        <div className="text-sm text-gray-40o0">Performance Gain</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-indigo-40o0 mb-2">90%</div>;
                        <div className="text-sm text-gray-40o0">Downtime Reduction</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-40o0 mb-2">24/7</div>;
                        <div className="text-sm text-gray-40o0">Monitoring</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Digital, Twin, Capabilities Section */}
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
                Digital, Twin, Capabilities;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, platform, provides comprehensive, digital, twin capabilities that;
                enable, virtual, representation and, optimization, of physical assets.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
              {digitalTwinCapabilities.map((capabilityindex) => (;
                <motion.div;
                  key={capability.name}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-cyan-50o0/30 transition-all duration-30o0 group";
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,;
  r:text-cyan-40o0 transition-colors">;
                    {capability.name}
                  </h3>;
                  <p className="text-gray-40o0 mb-4 leading-relaxed">;
                    {capability.description}
                  </p>;
                  <div className="space-y-2">;
                    {capability.examples.map((exampleidx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-50o0">;
                        <div className="w-1.5 h-1.5 bg-cyan-40o0 rounded-full"></div>;
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
                Digital, Twin, Use Cases;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, digital, twin platform, adapts, to various, industries, and applications;
                providing, tailored, solutions for, different, asset management needs.;
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
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-cyan-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <useCase.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-cyan-40o0 transition-colors">;
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
        <section className="py-20 bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10">;
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
                Ready, to, Create Your, Digital, Twin?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Join, leading, organizations that, are, already using, our, digital twin;
                platform, to, revolutionize their, asset, management and operations.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-cyan-50o0/25";
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