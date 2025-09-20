import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  BarChart3,;
  TrendingUp,;
  PieChart,;
  Activity,;
  Database,;
  Zap,;
  Shield,;
  Users,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Globe,;
  Target,;
  Clock,;
  Eye,;
  Download,;
  Filter,;
  Search,;
  Settings,;
  RefreshCw,;
  Calendar,;
  DollarSign,;
  ShoppingCart,;
  Heart,;
  MessageCircle,;
  Bell,;
  Wifi,;
  Cpu,;
  Server,;
  Network,;
  Lock,;
  Key,;
  FileText,;
  BarChart,;
  LineChartAreaChartScatterPlot;
} from "lucide-react";
import, SEO, from "../components/SEO";
const Analytics: React.FC = () => {
  const analyticsFeatures = [;
    {
      titl,;
  e: "Real-time Monitoring",description: "Monitor, your, business metrics, and, performance indicators, in, real-time"icon: Activitycolo,;
  r: "from-green-40o0 to-emerald-50o0";
    };
    {
      title: "Advanced Visualizations",description: "Interactive charts, graphs, and, dashboards, for better insights"icon: BarChart3colo,;
  r: "from-blue-40o0 to-cyan-50o0";
    };
    {
      title: "Predictive Analytics",description: "AI-powered, forecasting, and trend, analysis, for strategic planning"icon: TrendingUpcolo,;
  r: "from-purple-40o0 to-pink-50o0";
    },;
    {
      title: "Custom Dashboards"descriptio,;
    n: "Build, personalized, dashboards tailored, to, your business needs"icon: Targetcolo,;
  r: "from-orange-40o0 to-red-50o0";
    };
,  ];
  const analyticsTypes = [;
    {
      name: "Business Intelligence",description: "Comprehensive, business, analytics and reporting",icon: BarChart3,features: ["KPI tracking", "Performance metrics""Business reports""Executive, dashboards"]path: "/services/ai-business-intelligence";
    };
    {
      name: "Website Analytics",description: "Track, website, performance and, user, behavior",icon: Globe,features: ["Traffic analysis", "User engagement""Conversion tracking""SEO, insights"]path: "/services/website-analytics";
    };
    {
      name: "AI, Data, Analytics",description: "Advanced AI-powered, data, analysis and insights",icon: Zap,features: ["Machine learning", "Pattern recognition""Predictive modeling""Automated, insights"]path: "/services/ai-data-analytics";
    };
    {
      name: "Financial Analytics",description: "Financial, performance, tracking and optimization",icon: DollarSign,features: ["Revenue analysis", "Cost optimization""Profit margins""Financial, forecasting"]path: "/services/ai-financial-analytics";
    };
  ];
  const metrics = [;
    { icon: Users, value: "10K+"labe,;
    l: "Active Users"descriptio,;
  n: "Monthly, active, users" };
    { icon: TrendingUp, value: "95%"labe,;
    l: "Uptime"descriptio,;
  n: "System reliability" };
    { icon: Globe, value: "25+"labe,;
    l: "Countries"descriptio,;
  n: "Global reach" },;
    { icon: Zapvalue: "1M+"labe,;
    l: "Data Points"descriptio,;
  n: "Processed daily" };
,  ];
  const integrations = [;
    { name: "Google Analytics"ico,;
    n: "🔍"descriptio,;
  n: "Website, traffic, and user behavior" };
    { name: "Salesforce"ico,;
    n: "☁️"descriptio,;
  n: "CRM, data, and sales metrics" };
    { name: "Stripe"ico,;
    n: "💳"descriptio,;
  n: "Payment, and, revenue data" };
    { name: "Slack"ico,;
    n: "💬"descriptio,;
  n: "Team, communication, metrics" };
    { name: "HubSpot"ico,;
    n: "🎯"descriptio,;
  n: "Marketing, and, lead data" }{ name: "AWS"ico,;
    n: "☁️"descriptio,;
  n: "Cloud, infrastructure, metrics" };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Analytics - Zion, Tech, Group";
        description="Transform, your, data into, actionable, insights with, our, comprehensive analytics solutions. Real-time monitoring, AI-powered analysis, and, custom, dashboards.";
        keywords="analytics, business intelligence, data analysis, AI, analyticsZion, Tech Group";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="relative z-10, container, mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="flex items-center justify-center mb-6">;
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-40o0 to-blue-50o0 rounded-2xl, flex, items-center justify-center mr-4">;
                <BarChart3 className="w-8 h-8 text-white" />;
              </div>;
              <h1 className="text-4xl font-bold text-white">Analytics</h1>;
            </div>;
            <h2 className="text-5xl md: text-6xl font-bold text-white mb-6 leading-tight">;
              Data-Driven;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Insights;
              </span>;
            </h2>;
            <p className="text-xl m,;
  d: text-2xl text-slate-30o0 mb-8 leading-relaxed">;
              Transform, your, raw data, into, actionable insights, with, our comprehensive, analytics, platform.;
              Monitor performance, track, trendsand, make informed, decisions, with real-time data.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-cyan-50o0/25";
              >;
                Get Started;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0";
              >;
                Explore Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Metrics Section */}
      <section className="py-16 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">;
            {metrics.map((metricindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <metric.icon className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>;
                <div className="text-cyan-40o0 font-semibold mb-1">{metric.label}</div>;
                <div className="text-sm text-slate-40o0">{metric.description}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Powerful <span className="text-cyan-40o0">Analytics Features</span>;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              Our, analytics, platform provides, everything, you need, to, understand your data;
              and, make, informed business decisions.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {analyticsFeatures.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-cyan-40o0/30 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg, flex, items-center justify-center mb-4`}>;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>;
                <p className="text-slate-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Analytics, Types, Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Analytics <span className="text-cyan-40o0">Solutions</span>;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              Choose, from, our comprehensive, range, of analytics, solutions, designed to meet;
              every, aspect, of your, business, intelligence needs.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {analyticsTypes.map((typeindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30, border, border-slate-60o0/30 rounded-xl p-8 hover:border-cyan-40o0/30 transition-all duration-30o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <type.icon className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>;
                <p className="text-slate-30o0 mb-6">{type.description}</p>;
                <div className="space-y-3 mb-6">;
                  {type.features.map((featurefeatureIndex) => (;
                    <div key={featureIndex} className="flex items-center text-slate-40o0">;
                      <CheckCircle className="w-4 h-4 text-cyan-40o0 mr-3 flex-shrink-0" />;
                      {feature}
                    </div>;
                  ))}
                </div>;
                ;
                <Link;
                  to={type.path}
                  className="inline-flex items-center text-cyan-40o0 hover: text-cyan-30o0 font-medium transition-colors";
                >;
                  Learn More;
                  <ArrowRight className="ml-2 w-4 h-4" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Seamless <span className="text-cyan-40o0">Integrations</span>;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              Connect, with, your favorite, tools, and platforms, to, centralize all, your, data;
              and, get, a complete, view, of your business.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-2 md: grid-cols-3 l,;
  g:grid-cols-6 gap-6">;
            {integrations.map((integrationindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0scal,;
  e: 0.8 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center hover: border-cyan-40o0/30 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="text-4xl mb-3">{integration.icon}</div>;
                <h3 className="text-white font-medium mb-2">{integration.name}</h3>;
                <p className="text-sm text-slate-40o0">{integration.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Unlock Your Data?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-2xl mx-auto">;
              Start, transforming, your data, into, actionable insights today.;
              Our, analytics, platform will, help, you make, better, decisions and, drive, growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-cyan-50o0/25";
              >;
                Start, Your, Analytics Journey;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="/request-quote";
                className="inline-flex items-center px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0";
              >;
                Get, Custom, Quote;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, Analytics;
;