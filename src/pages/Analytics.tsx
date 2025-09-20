import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  BarChart3
  TrendingUp, 
  PieChart, 
  Activity, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight
  Star
  Globe
  Target
  Clock
  Eye
  Download
  Filter
  Search
  Settings
  RefreshCw
  Calendar
  DollarSign
  ShoppingCart
  Heart
  MessageCircle
  Bell
  Wifi
  Cpu
  Server
  Network
  Lock
  Key
  FileText
  BarChart
  LineChart
  AreaChart
  ScatterPlot
} from "lucide-react"
import SEO from "../components/SEO"
const,
  Analytic: s: React.FC = () () => {
  const analyticsFeatures = [
    {
      titl,
  e: "Real-time Monitoring",descripti,
  o: n: "Monitor your business metrics and performance indicators in real-time",ic,
  o: n: Activity,col,
  o: r: "from-green-400 to-emerald-500"
    }, {
      tit,
  l: e: "Advanced Visualizations",descripti,
  o: n: "Interactive charts, graphs, and dashboards for better insights"
      ic,
  o: n: BarChart3,col,
  o: r: "from-blue-400 to-cyan-500"
    }, {
      tit,
  l: e: "Predictive Analytics",descripti,
  o: n: "AI-powered forecasting and trend analysis for strategic planning",ic,
  o: n: TrendingUp,col,
  o: r: "from-purple-400 to-pink-500"
    }, {
      tit,
  l: e: "Custom Dashboards",descripti,
  o: n: "Build personalized dashboards tailored to your business needs",ic,
  o: n: Target,col,
  o: r: "from-orange-400 to-red-500"
    }
  ]
  const analyticsTypes = [
    {
      na,
  m: e: "Business Intelligence",descripti,
  o: n: "Comprehensive business analytics and reporting",ic,
  o: n: BarChart3,featur,
  e: s: ["KPI tracking", "Performance metrics", "Business reports", "Executive dashboards"]
      pa,
  t: h: "/services/ai-business-intelligence"
    }, {
      na,
  m: e: "Website Analytics",descripti,
  o: n: "Track website performance and user behavior",ic,
  o: n: Globe,featur,
  e: s: ["Traffic analysis", "User engagement", "Conversion tracking", "SEO insights"]
      pa,
  t: h: "/services/website-analytics"
    }, {
      na,
  m: e: "AI Data Analytics",descripti,
  o: n: "Advanced AI-powered data analysis and insights",ic,
  o: n: Zap,featur,
  e: s: ["Machine learning", "Pattern recognition", "Predictive modeling", "Automated insights"]
      pa,
  t: h: "/services/ai-data-analytics"
    }, {
      na,
  m: e: "Financial Analytics",descripti,
  o: n: "Financial performance tracking and optimization",ic,
  o: n: DollarSign,featur,
  e: s: ["Revenue analysis", "Cost optimization", "Profit margins", "Financial forecasting"]
      pa,
  t: h: "/services/ai-financial-analytics"
    }
  ]
  const metrics = [
    { ic,
  o: n: Users, val,
  u: e: "10K+", lab,
  e: l: "Active Users", descripti,
  o: n: "Monthly active users" }, { ic,
  o: n: TrendingUp, val,
  u: e: "95%", lab,
  e: l: "Uptime", descripti,
  o: n: "System reliability" }, { ic,
  o: n: Globe, val,
  u: e: "25+", lab,
  e: l: "Countries", descripti,
  o: n: "Global reach" }, { ic,
  o: n: Zap, val,
  u: e: "1M+", lab,
  e: l: "Data Points", descripti,
  o: n: "Processed daily" }
  ]
  const integrations = [
    { na,
  m: e: "Google Analytics", ic,
  o: n: "🔍", descripti,
  o: n: "Website traffic and user behavior" }, { na,
  m: e: "Salesforce", ic,
  o: n: "☁️", descripti,
  o: n: "CRM data and sales metrics" }, { na,
  m: e: "Stripe", ic,
  o: n: "💳", descripti,
  o: n: "Payment and revenue data" }, { na,
  m: e: "Slack", ic,
  o: n: "💬", descripti,
  o: n: "Team communication metrics" }, { na,
  m: e: "HubSpot", ic,
  o: n: "🎯", descripti,
  o: n: "Marketing and lead data" }, { na,
  m: e: "AWS", ic,
  o: n: "☁️", descripti,
  o: n: "Cloud infrastructure metrics" }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Analytics - Zion Tech Group"
        description="Transform your data into actionable insights with our comprehensive analytics solutions. Real-time monitoring, AI-powered analysis, and custom dashboards."
        keywords="analytics, business intelligence, data analysis, AI analytics, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Analytics</h1>
            </div>
            
            <h2 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6 leading-tight">
              Data-Driven
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            
            <p className="text-xl m,
  d:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transform your raw data into actionable insights with our comprehensive analytics platform. 
              Monitor performance, track trends, and make informed decisions with real-time data.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/25";"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-cyan-400 font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful <span className="text-cyan-400">Analytics Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our analytics platform provides everything you need to understand your data 
              and make informed business decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-cyan-400/30 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Analytics <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of analytics solutions designed to meet 
              every aspect of your business intelligence needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-8,
  hove: r:border-cyan-400/30 transition-all duration-300";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                <p className="text-slate-300 mb-6">{type.description}</p>
                
                <div className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to={type.path}
                  className="className="inline-flex items-center text-cyan-400,
  hove: r:text-cyan-300 font-medium transition-colors";"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Seamless <span className="text-cyan-400">Integrations</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms to centralize all your data 
              and get a complete view of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2,
  m: d: grid-cols-3 l,
  g:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 }
                whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r: border-cyan-400/30 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-white font-medium mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-400">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start transforming your data into actionable insights today. 
              Our analytics platform will help you make better decisions and drive growth.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/25";"
              >
                Start Your Analytics Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Analytics