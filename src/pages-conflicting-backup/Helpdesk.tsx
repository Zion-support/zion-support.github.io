import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  MessageCircle,;
  Users,;
  Ticket,;
  Clock,;
  CheckCircle,;
  AlertCircle,;
  Search,;
  Filter,;
  ArrowRight,;
  Star,;
  Globe,;
  Cpu,;
  Shield,;
  Cloud,;
  Zap,;
  Target,;
  Activity,;
  BarChart3,;
  Settings,;
  Bell,;
  Download,;
  Upload,;
  RefreshCw,;
  Eye,;
  Lock,;
  Database,;
  Network,;
  Smartphone,;
  Monitor,;
  Headphones,;
  Mail,;
  Phone,;
  Video,;
  FileText,;
  Calendar,;
  Tag,;
  UserCheck,;
  UserX,;
  TrendingUpPieChartLineChart;
} from "lucide-react";
export, default, function Helpdesk() {
  const features = [;
    {
      icon: Ticket,title: "Ticket Management"descriptio,;
    n: "Comprehensive, ticket, tracking and, resolution, workflow"colo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      icon: Users,title: "Team Collaboration"descriptio,;
    n: "Multi-agent, support, with role-based, access, control"colo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      icon: Clock,title: "SLA Management"descriptio,;
    n: "Service, level, agreement monitoring, and, alerts"colo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      icon: Search,title: "Knowledge Base"descriptio,;
    n: "Self-service, portal, with intelligent search"colo,;
  r: "from-orange-50o0 to-red-50o0";
    };
    {
      icon: BarChart3,title: "Analytics & Reporting"descriptio,;
    n: "Performance, metrics, and customer, satisfaction, tracking"colo,;
  r: "from-indigo-50o0 to-blue-50o0";
    },;
    {
      icon: Shieldtitle: "Security & Compliance"descriptio,;
    n: "Enterprise-grade, security, and data protection"colo,;
  r: "from-red-50o0 to-pink-50o0";
    };
,  ];
  const capabilities = [;
    {
      title: "Multi-Channel Support",description: "Handle, support, requests across email, chat, phone, and, social, media",;
      icon: Globebenefit,;
  s: ["Unified inbox""Channel routing""Response, templates"];
    },;
    {
      title: "AI-Powered Automation",description: "Intelligent, ticket, routing and, automated, responses",icon: Cpu,benefits: ["Smart categorization""Auto-assignment""Predictive, analytics"];
    },;
    {
      title: "Customer Self-Service",description: "Empower, customers, with knowledge, base, and FAQ systems",icon: Users,benefits: ["Knowledge management""Community forums""Video, tutorials"];
    },;
    {
      title: "Performance Analytics",description: "Monitor, team, performance and, customer, satisfaction metrics",icon: TrendingUp,benefits: ["Response, time, tracking""Resolution rates""CSAT, scores"];
    }
  ],;
  const integrations = [;
    "Slack", "Microsoft Teams", "Zendesk", "Salesforce", "Jira",;
    "ServiceNow", "HubSpot", "Intercom", "Freshdesk""Help Scout";
,  ],;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Helpdesk Platform;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Streamline, customer, support operations, with, our comprehensive, helpdesk, platform.;
              Deliver, exceptional, customer experiences, with, intelligent automation, and, powerful analytics.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 text-white font-bold rounded-xl transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-cyan-50o0/25, flex, items-center space-x-2";
              >;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
  r:border-cyan-40o0/50, flex, items-center space-x-2";
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
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
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Powerful, Helpdesk, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, comprehensive, helpdesk platform, provides, everything you, need, to deliver, exceptional, customer support.;
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
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl p-6 hover: bg-white/10 hove,;
  r:border-cyan-40o0/40 transition-all duration-30o0";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl, flex, items-center justify-center mb-6`}>;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Platform Capabilities;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Discover, how, our helpdesk, platform, can transform, your, customer support operations.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-8">;
            {capabilities.map((capabilityindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl p-8 hover: bg-white/10 hove,;
  r:border-cyan-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-xl, flex, items-center justify-center mr-4">;
                    <capability.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{capability.description}</p>;
                <ul className="space-y-2">;
                  {capability.benefits.map((benefitbenefitIndex) => (;
                    <li key={benefitIndex} className="flex items-center text-gray-30o0">;
                      <CheckCircle className="w-5 h-5 text-cyan-40o0 mr-3 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Connect, with, your existing, tools, and workflows, for, maximum efficiency.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-2 m,;
  d: grid-cols-5 gap-6">;
            {integrations.map((integrationindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0scal,;
  e: 0.8 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-xl p-4 text-center hover: bg-white/10 hove,;
  r:border-cyan-40o0/40 transition-all duration-30o0";
              >;
                <span className="text-white font-medium">{integration}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Support?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Join, the, customer support, revolution, with Zion, Tech, Group. Our, helpdesk, platform is, designed, to drive efficiency;
              improve, customer, satisfaction, and, scale, your support operations.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 text-white font-bold rounded-xl transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-cyan-50o0/25, flex, items-center space-x-2";
              >;
                <span>Get, Started, Today</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
  r:border-cyan-40o0/50, flex, items-center space-x-2";
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;