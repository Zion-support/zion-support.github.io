import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  BarChart3,;
  TrendingUp, ;
  PieChart, ;
  Activity, ;
  Database, ;
  Zap, ;
  Shield, ;
  Users, ;
  CheckCircle, ;
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
  LineChart,;
  AreaChart,;
  ScatterPlot;
} from "lucide-react"
import SEO from "../components/SEO"
const Analytics: React.FC = () => {
  const analyticsFeatures = [;
    {;
      title: "Real-time Monitoring",description: "Monitor your business metrics and performance indicators in real-time",icon: Activity,color: "from-green-400 to-emerald-500"
    };
    {;
      title: "Advanced Visualizations",description: "Interactive charts, graphs, and dashboards for better insights",;
      icon: BarChart3,color: "from-blue-400 to-cyan-500"
    };
    {;
      title: "Predictive Analytics",description: "AI-powered forecasting and trend analysis for strategic planning",icon: TrendingUp,color: "from-purple-400 to-pink-500"
    };
    {;
      title: "Custom Dashboards",description: "Build personalized dashboards tailored to your business needs",icon: Target,color: "from-orange-400 to-red-500"
    };
  ];
  const analyticsTypes = [;
    {;
      name: "Business Intelligence",description: "Comprehensive business analytics and reporting",icon: BarChart3,features: ["KPI tracking", "Performance metrics", "Business reports", "Executive dashboards"],;
      path: "/services/ai-business-intelligence"
    };
    {;
      name: "Website Analytics",description: "Track website performance and user behavior",icon: Globe,features: ["Traffic analysis", "User engagement", "Conversion tracking", "SEO insights"],;
      path: "/services/website-analytics"
    };
    {;
      name: "AI Data Analytics",description: "Advanced AI-powered data analysis and insights",icon: Zap,features: ["Machine learning", "Pattern recognition", "Predictive modeling", "Automated insights"],;
      path: "/services/ai-data-analytics"
    };
    {;
      name: "Financial Analytics",description: "Financial performance tracking and optimization",icon: DollarSign,features: ["Revenue analysis", "Cost optimization", "Profit margins", "Financial forecasting"],;
      path: "/services/ai-financial-analytics"
    };
  ];
  const metrics = [;
    { icon: Users, value: "10K+", label: "Active Users", description: "Monthly active users" };
    { icon: TrendingUp, value: "95%", label: "Uptime", description: "System reliability" };
    { icon: Globe, value: "25+", label: "Countries", description: "Global reach" };
    { icon: Zap, value: "1M+", label: "Data Points", description: "Processed daily" };
  ];
  const integrations = [;
    { name: "Google Analytics", icon: "🔍", description: "Website traffic and user behavior" };
    { name: "Salesforce", icon: "☁️", description: "CRM data and sales metrics" };
    { name: "Stripe", icon: "💳", description: "Payment and revenue data" };
    { name: "Slack", icon: "💬", description: "Team communication metrics" };
    { name: "HubSpot", icon: "🎯", description: "Marketing and lead data" };
    { name: "AWS", icon: "☁️", description: "Cloud infrastructure metrics" };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Analytics - Zion Tech Group"
        description="Transform your data into actionable insights with our comprehensive analytics solutions. Real-time monitoring, AI-powered analysis, and custom dashboards."
        keywords="analytics, business intelligence, data analysis, AI analytics, Zion Tech Group"
      />;

      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="relative z-10 container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="flex items-center justify-center mb-6">;
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">;
                <[^>]*/>
              </[^>]*>
              <h1 className="text-4xl font-bold text-white">Analytics</[^>]*>
            </[^>]*>
            ;
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">;
              Data-Driven;
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Insights;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">;
              Transform your raw data into actionable insights with our comprehensive analytics platform. ;
              Monitor performance, track trends, and make informed decisions with real-time data.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                Explore Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Metrics Section */};
      <section className="py-16 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {metrics.map((metric, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</[^>]*>
                <div className="text-cyan-400 font-semibold mb-1">{metric.label}</[^>]*>
                <div className="text-sm text-slate-400">{metric.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Powerful <span className="text-cyan-400">Analytics Features</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Our analytics platform provides everything you need to understand your data ;
              and make informed business decisions.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {analyticsFeatures.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-slate-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Analytics Types Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Analytics <span className="text-cyan-400">Solutions</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Choose from our comprehensive range of analytics solutions designed to meet ;
              every aspect of your business intelligence needs.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {analyticsTypes.map((type, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</[^>]*>
                <p className="text-slate-300 mb-6">{type.description}</[^>]*>
                ;
                <div className="space-y-3 mb-6">;
                  {type.features.map((feature, featureIndex) => (;
                    <div key={featureIndex} className="flex items-center text-slate-400">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
                ;
                <Link;
                  to={type.path};
                  className="[^"]*"
                >;
                  Learn More;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Integrations Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Seamless <span className="text-cyan-400">Integrations</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Connect with your favorite tools and platforms to centralize all your data ;
              and get a complete view of your business.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;
            {integrations.map((integration, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, scale: 0.8 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="text-4xl mb-3">{integration.icon}</[^>]*>
                <h3 className="text-white font-medium mb-2">{integration.name}</[^>]*>
                <p className="text-sm text-slate-400">{integration.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Unlock Your Data?;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">;
              Start transforming your data into actionable insights today. ;
              Our analytics platform will help you make better decisions and drive growth.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Start Your Analytics Journey;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/request-quote"
                className="[^"]*"
              >;
                Get Custom Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Analytics;