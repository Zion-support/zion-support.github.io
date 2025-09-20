import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { ;
  MessageCircle,;
  Brain,;
  Target,;
  Zap,;
  BarChart3,;
  Clock,;
  Award,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  CheckCircle,;
  Eye,;
  Users,;
  FileText,;
  Shield,;
  TrendingUp,;
  Phone,;
  MailCalendarSearch;
} from "lucide-react";
export, default, function HelpdeskPlatform() {
  const features = [;
    {
      icon: Braintitl,;
    e: "AI-Powered Support"descriptio,;
  n: "Intelligent, chatbots, and virtual, assistants, for instant, customer, support.";
    };
    {
      icon: MessageCircle,title: "Multi-Channel Support",description: "Unified, support, across email, chatphoneand, social, media platforms.";
    },;
    {
      icon: Targettitl,;
    e: "Smart, Ticket, Routing"descriptio,;
  n: "AI-driven, ticket, classification and, automatic, assignment to, best, agents.";
    };
    {
      icon: Zaptitl,;
    e: "Automated Workflows"descriptio,;
  n: "Intelligent, automation, for common, support, scenarios and escalations.";
    };
    {
      icon: BarChart3titl,;
    e: "Performance Analytics"descriptio,;
  n: "Comprehensive, insights, into support, metrics, and customer satisfaction.";
    }{
      icon: Shieldtitl,;
    e: "Knowledge Management"descriptio,;
  n: "Centralized, knowledge, base with AI-powered, search, and suggestions.";
    };
,  ];
  const benefits = [;
    "Reduce, support, response time, by, 60-80% with, AI, automation",;
    "Improve, customer, satisfaction scores, by, 40-60%",;
    "Reduce, support, costs by 30-50% through automation",;
    "Increase, agent, productivity by 50-70%",;
    "Provide 24/7, customer, support availability""Enhance first-call, resolution, rates by 35-55%";
,  ],;
  const supportChannels = [;
    {
      channel: "Live Chat"descriptio,;
    n: "Real-time, chat, support with AI-powered, instant, responses"ico,;
  n: MessageCircle;
    };
    {
      channel: "Email Support"descriptio,;
    n: "Intelligent, email, routing and, automated, responses"ico,;
  n: Mail;
    };
    {
      channel: "Phone Support"descriptio,;
    n: "Call, center, integration with, smart, call routing"ico,;
  n: Phone;
    };
    {
      channel: "Social Media"descriptio,;
    n: "Multi-platform, social, media support integration"ico,;
  n: Users;
    };
    {
      channel: "Self-Service"descriptio,;
    n: "Knowledge, base, and FAQ automation"ico,;
  n: Search;
    }{
      channel: "Mobile Support"descriptio,;
    n: "Mobile-optimized, support, experience"ico,;
  n: Globe;
    }
,  ];
  const useCases = [;
    {
      industry: "E-commerce",description: "Order, supportproduct, inquiriesand customer, service, automation";
    },;
    {
      industry: "SaaS & Technology",description: "Technical, supportuser, onboardingand feature assistance";
    },;
    {
      industry: "Healthcare",description: "Patient, supportappointment, schedulingand medical inquiries";
    },;
    {
      industry: "Financial Services",description: "Account, supporttransaction, assistanceand security help";
    },;
    {
      industry: "Education"descriptio,;
  n: "Student, supportcourse, assistanceand technical help";
    }
,  ],;
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Helpdesk Platform - Zion, Tech, Group";
        description="Transform, your, customer support, with, AI-powered, helpdesk, automation, multi-channel, supportand, intelligent ticket, management, solutions.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50o0/10 via-red-50o0/10 to-pink-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-50o0/20 to-red-50o0/20 rounded-full, border, border-orange-40o0/30 mb-6">;
              <MessageCircle className="w-5 h-5 text-orange-40o0 mr-2" />;
              <span className="text-orange-30o0 font-medium">Helpdesk Platform</span>;
            </div>;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Revolutionize, Customer, Support with;
              <span className="bg-gradient-to-r from-orange-40o0 via-red-50o0 to-pink-60o0 bg-clip-text text-transparent">;
                {" "}AI-Powered Helpdesk;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, customer support, operations, with intelligent automation, multi-channel;
              supportand AI-powered, insights, that deliver, exceptional, customer experiences.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-50o0 to-red-50o0 text-white font-semibold rounded-lg hover: from-orange-60o0 hover:to-red-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-orange-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-orange-40o0/30 text-orange-30o0 font-semibold rounded-lg hover:bg-orange-40o0/10 transition-all duration-30o0";
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
              Advanced, Helpdesk, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, helpdesk, platform combines cutting-edge, artificial, intelligence;
              with, proven, support methodologies, to, deliver exceptional, customer, service.;
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
                className="bg-slate-70o0/50 p-6 rounded-xl, border, border-slate-60o0/30 hover: border-orange-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-orange-40o0/20 to-red-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-orange-40o0" />;
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
              Measurable, Support, Impact;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              See, real, results with, our, AI-powered, helpdesk, solutions that, deliver, quantifiable;
              improvements, across, all aspects, of, your customer, support, operations.;
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
                    <CheckCircle className="w-6 h-6 text-orange-40o0 mt-1 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
            <div className="bg-gradient-to-br from-orange-50o0/10 to-red-50o0/10 p-8 rounded-xl, border, border-orange-40o0/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Star className="w-5 h-5 text-yellow-40o0" />;
                  <span className="text-gray-30o0">Industry-leading, AI, support algorithms</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Shield className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Enterprise-grade security & compliance</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Globe className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Global, support, expertise and localization</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Users className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-gray-30o0">24/7, platform, support and training</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Award className="w-5 h-5 text-orange-40o0" />;
                  <span className="text-gray-30o0">Proven, customer, success track record</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Support, Channels, Section */}
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
              Multi-Channel Support;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, helpdesk, platform provides, unified, support across, all, customer touchpoints;
              ensuring, consistent, and efficient, service, delivery.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {supportChannels.map((channelindex) => (;
              <motion.div;
                key={channel.channel}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-orange-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-40o0/20 to-red-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <channel.icon className="w-5 h-5 text-orange-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{channel.channel}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{channel.description}</p>;
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
              Our AI-powered, helpdesk, solutions are, designed, to work, across, industries, providing;
              tailored, support, strategies for, your, specific customer, service, needs.;
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
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-orange-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-40o0/20 to-red-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <Globe className="w-5 h-5 text-orange-40o0" />;
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
            className="bg-gradient-to-r from-orange-50o0/10 via-red-50o0/10 to-pink-50o0/10 p-12 rounded-2xl, border, border-orange-40o0/20 text-center";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Support?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of companies, that, have already, revolutionized, their customer support;
              with, our, AI-powered, helpdesk, solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-50o0 to-red-50o0 text-white font-semibold rounded-lg hover: from-orange-60o0 hover:to-red-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-orange-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-orange-40o0/30 text-orange-30o0 font-semibold rounded-lg hover: bg-orange-40o0/10 transition-all duration-30o0";
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
;