import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  Heart,;
  Brain,;
  Shield,;
  Activity,;
  Users,;
  Zap,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Globe,;
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
  BuildingVideoEye;
} from "lucide-react";
export, default, function AIHealthcarePlatform() {
  const features = [;
    {
      icon: Brain,title: 'AI-Powered Diagnostics'descriptio,;
    n: 'Advanced, machine, learning algorithms, for, accurate disease, detection, and diagnosis'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      icon: Heart,title: 'Patient Monitoring'descriptio,;
    n: 'Real-time, health, monitoring with, predictive, analytics and, early, warning systems'colo,;
  r: 'from-red-50o0 to-pink-50o0';
    };
    {
      icon: Shield,title: 'HIPAA, Compliant, Security'description: 'Enterprise-grade, security, with end-to-end, encryption, and compliance standards'colo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      icon: Activity,title: 'Predictive Analytics'descriptio,;
    n: 'Proactive, health, insights using, historical, data and, AI, forecasting models'colo,;
  r: 'from-purple-50o0 to-indigo-50o0';
    };
    {
      icon: Users,title: 'Care, Team, Collaboration'description: 'Seamless, communication, and coordination, between, healthcare providers'colo,;
  r: 'from-orange-50o0 to-red-50o0';
    },;
    {
      icon: Zaptitle: 'Real-time Processing'descriptio,;
    n: 'Instant, data, analysis and, decision, support for, critical, care situations'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
,  ];
  const benefits = [;
    'Reduce, diagnostic, errors by, up, to 85%Improve, patient, outcomes by 40%',;
    'Cut, healthcare, costs by 30%Streamline, administrative, processes''Enhance, patient, engagementEnsure regulatory compliance';
,  ],;
  const useCases = [;
    {
      title: 'Hospital Management'descriptio,;
    n: 'Comprehensive, hospital, information system, with, AI-powered, decision, support'ico,;
  n: Building;
    };
    {
      title: 'Telemedicine Platform'descriptio,;
    n: 'Virtual, care, delivery with AI-assisted, diagnosis, and treatment planning'ico,;
  n: Video;
    };
    {
      title: 'Medical Imaging'descriptio,;
    n: 'AI-enhanced, radiology, and pathology, analysis, for accurate diagnosis'ico,;
  n: Eye;
    }{
      title: 'Patient Records'descriptio,;
    n: 'Intelligent, electronic, health records, with, predictive insights'ico,;
  n: FileText;
    }
,  ];
  return(<>;
      <SEO;
        title="AI, Healthcare, Platform - Zion, Tech, Group";
        description="Revolutionary AI-powered, healthcare, platform with, advanced, diagnostics, patient monitoring, and, predictive, analytics. Transform, healthcare, delivery with cutting-edge technology.";
        keywords="AI healthcare, medical AI, healthcare platform, patient monitoring, predictive, analyticsmedical, diagnostics";
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50o0/20 to-pink-50o0/20, border, border-red-50o0/30 rounded-full text-red-40o0 text-sm font-medium mb-6">;
                <Heart className="w-4 h-4" />;
                Healthcare Innovation;
              </div>;
              <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6">;
                AI-Powered;
                <span className="block bg-gradient-to-r from-red-40o0 via-pink-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                  Healthcare Platform;
                </span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Transform, healthcare, delivery with, our, revolutionary AI platform.;
                Advanced diagnostics, predictive, analyticsand, intelligent patient monitoring;
                that, saves, lives and, improves, outcomes.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-50o0 to-pink-60o0 text-white font-semibold rounded-lg hover: from-red-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-red-50o0/25";
                >;
                  Schedule Demo;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-gray-60o0 text-white font-semibold rounded-lg hover: border-gray-50o0 hove,;
  r:bg-gray-80o0/50 transition-all duration-30o0";
                >;
                  Learn More;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-50o0/10 rounded-full blur-3xl"></div>;
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
                Revolutionary, Healthcare, Features;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, AI, platform combines cutting-edge, technology, with healthcare expertise;
                to, deliver, unprecedented accuracy, and, efficiency.;
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
                  className="group p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-red-50o0/30 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <feature.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-40o0 transition-colors">;
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
                  Transform, Your, Healthcare Delivery;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                  Our, AI, healthcare platform, delivers, measurable improvements, in, patient care;
                  operational efficiency, and, cost, reduction while, maintaining, the highest;
                  standards, of, security and compliance.;
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
                <div className="bg-gradient-to-br from-red-50o0/20 to-pink-50o0/20 rounded-3xl p-8, border, border-red-50o0/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-red-50o0 to-pink-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                      <TrendingUp className="w-10 h-10 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Proven Results;
                    </h3>;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-red-40o0 mb-2">85%</div>;
                        <div className="text-sm text-gray-40o0">Error Reduction</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-pink-40o0 mb-2">40%</div>;
                        <div className="text-sm text-gray-40o0">Better Outcomes</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-40o0 mb-2">30%</div>;
                        <div className="text-sm text-gray-40o0">Cost Savings</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-40o0 mb-2">60%</div>;
                        <div className="text-sm text-gray-40o0">Faster Diagnosis</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
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
                Healthcare, Use, Cases;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, AI, platform adapts, to, various healthcare, settings, and requirements;
                providing, tailored, solutions for, different, medical environments.;
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
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-red-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-red-50o0 to-pink-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <useCase.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-red-40o0 transition-colors">;
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
        <section className="py-20 bg-gradient-to-r from-red-50o0/10 to-pink-50o0/10">;
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
                Ready, to, Transform Healthcare?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Join, leading, healthcare institutions, that, are already, using, our AI platform;
                to, improve, patient care, and, operational efficiency.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-50o0 to-pink-60o0 text-white font-semibold rounded-lg hover: from-red-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-red-50o0/25";
                >;
                  Get, Started, Today;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-gray-60o0 text-white font-semibold rounded-lg hover: border-gray-50o0 hove,;
  r:bg-gray-80o0/50 transition-all duration-30o0";
                >;
                  Contact Sales;
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