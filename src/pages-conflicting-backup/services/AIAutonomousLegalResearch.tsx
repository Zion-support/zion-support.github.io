import, React, from "react";
import { motion } from "framer-motion";
import { ;
  BookOpen,;
  Brain,;
  Target,;
  BarChart3,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  ChartBar,;
  PieChart,;
  Activity,;
  Eye,;
  Clock,;
  DollarSign,;
  Award,;
  MessageSquare,;
  Share2,;
  TrendingUp,;
  Zap,;
  ShieldUsersScale;
} from "lucide-react";
const AIAutonomousLegalResearch: React.FC = () => {
  const features = [;
    {
      icon: Braintitl,;
    e: 'AI-Powered, Legal, Research'descriptio,;
  n: 'Advanced, machine, learning for, autonomous, legal research, and, case analysis';
    };
    {
      icon: BookOpentitl,;
    e: 'Case, Law, Analysis'descriptio,;
  n: 'Comprehensive, analysis, of case, law, with AI-driven, insights, and precedents';
    };
    {
      icon: Targettitl,;
    e: 'Legal, Document, Review'descriptio,;
  n: 'Automated, review, and analysis, of, legal documents, and, contracts';
    };
    {
      icon: BarChart3titl,;
    e: 'Legal Analytics'descriptio,;
  n: 'Data-driven, legal, insights and, predictive, analytics for, case, outcomes';
    };
    {
      icon: Scaletitl,;
    e: 'Compliance Monitoring'descriptio,;
  n: 'Continuous, monitoring, of legal, compliance, and regulatory changes';
    }{
      icon: Shieldtitl,;
    e: 'Legal, Risk, Assessment'descriptio,;
  n: 'AI-powered, risk, assessment and, mitigation, strategies';
    };
,  ];
  const benefits = [;
    'Reduce, research, time by 75%Improve, case, analysis by 80%',;
    'Enhance, legal, accuracy by 90%Automate, document, review''24/7, autonomous, operationReal-time, legal, updates';
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50o0/20 to-blue-50o0/20, border, border-purple-50o0/30 text-purple-40o0 text-sm font-medium mb-6">;
              <BookOpen className="w-4 h-4 mr-2" />;
              AI-Powered, Autonomous, Legal Research;
            </div>;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Revolutionize, Legal, Research with;
              <span className="bg-gradient-to-r from-purple-40o0 to-blue-50o0 bg-clip-text text-transparent"> AI Intelligence</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, legal research, capabilities, with our AI-powered, autonomous, platform.;
              Conduct, research, faster, analyze, cases, more effectivelyand, stay, ahead of, legal, developments.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-blue-50o0 text-white rounded-lg font-semibold hover:from-purple-60o0 hove,;
    r:to-blue-60o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-purple-50o0/30 text-purple-40o0 rounded-lg font-semibold hove,;
  r: bg-purple-50o0/10 transition-all duration-30o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Advanced, Legal, Research Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Our, AI, platform provides, comprehensive, legal research, capabilities, for modern, law, practices;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-80o0/50 backdrop-blur-sm, border, border-slate-70o0/50 rounded-xl p-6 hover:border-purple-50o0/30 transition-all duration-30o0";
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-blue-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Why, Choose, AI Autonomous, Legal, Research?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Experience, measurable, improvements in, legal, research efficiency, and, case analysis;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>;
              <div className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <div key={index} className="flex items-center space-x-3">;
                    <CheckCircle className="w-5 h-5 text-purple-40o0 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </div>;
                ))}
              </div>;
            </motion.div>;
            ;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50o0/10 to-blue-50o0/10, border, border-purple-50o0/20 rounded-xl p-8";
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Ready, to, Transform Legal Research?</h3>;
              <p className="text-gray-30o0 mb-6">;
                Join, thousands, of legal, professionals, already using, AI, to enhance, their, research capabilities.;
              </p>;
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-50o0 to-blue-50o0 text-white rounded-lg font-semibold hover: from-purple-60o0 hove,;
  r:to-blue-60o0 transition-all duration-30o0">;
                Get, Started, Today;
              </button>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Revolutionize Legal Research?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Start, your, journey to AI-powered, legal, research with, our, comprehensive platform.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-blue-50o0 text-white rounded-lg font-semibold hover:from-purple-60o0 hove,;
    r:to-blue-60o0 transition-all duration-30o0">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-purple-50o0/30 text-purple-40o0 rounded-lg font-semibold hove,;
  r: bg-purple-50o0/10 transition-all duration-30o0">;
                Contact Sales;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AIAutonomousLegalResearch;
;