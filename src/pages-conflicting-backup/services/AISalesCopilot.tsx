import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { ;
  Users,;
  TrendingUp,;
  Target,;
  Zap,;
  MessageCircle,;
  BarChart3,;
  Clock,;
  Award,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  Search,;
  Filter,;
  Download,;
  Share2,;
  Phone,;
  Mail,;
  Calendar,;
  CheckCircleShieldFileText;
} from "lucide-react";
const AISalesCopilot = () => {
  const features = [;
    {
      icon: Userstitl,;
    e: "Lead Scoring & Qualification"descriptio,;
  n: "AI-powered, lead, analysis and, prioritization, to focus, on, high-value prospects.";
    };
    {
      icon: MessageCircletitl,;
    e: "Intelligent, Conversation, AI"descriptio,;
  n: "Natural, language, processing for, personalized, customer interactions, and, support.";
    };
    {
      icon: TrendingUptitl,;
    e: "Sales Forecasting"descriptio,;
  n: "Predictive, analytics, for accurate, revenue, forecasting and, pipeline, management.";
    };
    {
      icon: Targettitl,;
    e: "Opportunity Management"descriptio,;
  n: "Smart, tracking, and optimization, of, sales opportunities, throughout, the funnel.";
    };
    {
      icon: Zaptitl,;
    e: "Automated Follow-ups"descriptio,;
  n: "Intelligent, scheduling, and automated follow-up, sequences, for better conversion.";
    },;
    {
      icon: BarChart3,title: "Performance Analytics"descriptio,;
  n: "Comprehensive, insights, into sales, performancetrendsand, optimization opportunities.";
    }
,  ],;
  const benefits = [;
    "Increase, sales, revenue by 25-40% with AI-powered insights",;
    "Reduce, sales, cycle time, by, 30-50% through automation",;
    "Improve, lead, conversion rates, by, 35-60%",;
    "Enhance, customer, engagement and, satisfaction, by 45%",;
    "Reduce, manual, sales tasks, by, 70%""Optimize, pricing, strategies with AI-driven recommendations";
,  ],;
  const salesProcess = [;
    {
      stage: "Lead Generation"descriptio,;
    n: "AI-powered, prospecting, and lead identification"ico,;
  n: Search;
    };
    {
      stage: "Qualification"descriptio,;
    n: "Intelligent, lead, scoring and prioritization"ico,;
  n: Target;
    };
    {
      stage: "Engagement"descriptio,;
    n: "Personalized, communication, and relationship building"ico,;
  n: MessageCircle;
    };
    {
      stage: "Proposal"descriptio,;
    n: "AI-generated, proposals, and pricing optimization"ico,;
  n: FileText;
    };
    {
      stage: "Closing"descriptio,;
    n: "Smart, negotiation, support and, deal, acceleration"ico,;
  n: CheckCircle;
    }{
      stage: "Retention"descriptio,;
    n: "Customer, success, and expansion opportunities"ico,;
  n: Users;
    }
,  ];
  const useCases = [;
    {
      industry: "B2B Software",description: "Enterprise, sales, automationlead qualificationand, customer, success management";
    },;
    {
      industry: "Financial Services",description: "Investment, advisoryloan, processingand financial, product, sales optimization";
    },;
    {
      industry: "Healthcare",description: "Medical, device, salespharmaceutical marketingand, healthcare, service optimization";
    },;
    {
      industry: "Manufacturing",description: "Industrial, equipment, salessupply chain, optimizationand, B2B relationship management";
    },;
    {
      industry: "Real Estate"descriptio,;
  n: "Property, sales, automationlead managementand, client, relationship optimization";
    }
,  ],;
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Sales, Copilot - Zion, Tech, Group";
        description="Transform, your, sales process, with, AI-powered automation, lead, optimizationand, intelligent sales insights. Boost, revenue, and efficiency.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50o0/10 via-indigo-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50o0/20 to-indigo-50o0/20 rounded-full, border, border-blue-40o0/30 mb-6">;
              <Users className="w-5 h-5 text-blue-40o0 mr-2" />;
              <span className="text-blue-30o0 font-medium">AI, Sales, Copilot</span>;
            </div>;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Supercharge, Your, Sales with;
              <span className="bg-gradient-to-r from-blue-40o0 via-indigo-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                {" "}AI-Powered Intelligence;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, sales process, with, intelligent automation, predictive analyticsand;
              AI-driven, insights, that help, your, team close, more, deals and, grow, revenue faster.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-indigo-50o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-indigo-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hover:bg-blue-40o0/10 transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Intelligent, Sales, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, Sales Copilot, combines, cutting-edge, artificial, intelligence with, proven, sales;
              methodologies, to, deliver unprecedented, results, and efficiency.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/50 p-6 rounded-xl, border, border-slate-60o0/30 hover: border-blue-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-blue-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Measurable, Sales, Impact;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              See, real, results with, our, AI Sales, Copilot, that delivers, quantifiable, improvements;
              across, all, aspects of, your, sales operations.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
            <div className="space-y-6">;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>;
              <div className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0,;
  x: -20 }};
                    whileInView={{ opacity: 1,;
  x: 0 }}
                    transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                    className="flex items-start space-x-3";
                  >;
                    <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
            <div className="bg-gradient-to-br from-blue-50o0/10 to-indigo-50o0/10 p-8 rounded-xl, border, border-blue-40o0/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Star className="w-5 h-5 text-yellow-40o0" />;
                  <span className="text-gray-30o0">Industry-leading, AI, sales algorithms</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Shield className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Enterprise-grade security & privacy</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Globe className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Global, sales, methodology support</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Users className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-gray-30o0">24/7, sales, support & training</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Award className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Proven, sales, transformation track record</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Sales, Process, Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              End-to-End, Sales, Process;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, Sales Copilot, optimizes, every stage, of, your sales funnel, from initial;
              lead, generation, to customer, retention, and expansion.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {salesProcess.map((stageindex) => (;
              <motion.div;
                key={stage.stage}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-blue-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <stage.icon className="w-5 h-5 text-blue-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{stage.stage}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{stage.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, Sales Copilot, is, designed to, work, across industries, providing tailored;
              sales, optimization, solutions for, your, specific business needs.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={useCase.industry}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-blue-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <Globe className="w-5 h-5 text-blue-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50o0/10 via-indigo-50o0/10 to-purple-50o0/10 p-12 rounded-2xl, border, border-blue-40o0/20 text-center";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Sales?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of sales, teams, that have, already, revolutionized their operations;
              with, our, AI-powered, sales, copilot.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-indigo-50o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-indigo-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hover: bg-blue-40o0/10 transition-all duration-30o0";
              >;
                Contact Sales;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AISalesCopilot;
;