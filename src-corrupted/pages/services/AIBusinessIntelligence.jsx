<<<<<<< HEAD
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {TrendingUp, BarChart3, Activity, Target, Users, Database, Zap, Brain, Globe, Shield, Clock} from 'lucide-react';
const AIBusinessIntelligence = (props: any) => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Analytics",
            description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data",
            benefits: ["Predictive modeling", "Anomaly detection", "Pattern recognition", "Automated insights"]
        },
        {icon: BarChart3,
            title: "Real-time Dashboards",
            description: "Interactive, customizable dashboards that provide instant visibility into key business metrics",
            benefits: ["Live data updates", "Customizable views", "Role-based access", "Mobile responsive"]},
        {icon: TrendingUp,
            title: "Predictive Analytics",
            description: "Forecast future trends and outcomes using historical data and advanced statistical models",
            benefits: ["Sales forecasting", "Demand planning", "Risk assessment", "Trend prediction"]},
        {icon: Target,
            title: "Performance Tracking",
            description: "Monitor and measure business performance against goals and benchmarks in real-time",
            benefits: ["KPI monitoring", "Goal tracking", "Benchmarking", "Performance alerts"]}
    ];
    const solutions = [
        {category: "Sales & Marketing",
            icon: Users,
            solutions: [
                "Customer behavior analysis",
                "Lead scoring and qualification",
                "Campaign performance optimization",
                "Market trend analysis",
                "Customer lifetime value prediction"
            ]},
        {category: "Operations & Supply Chain",
            icon: Activity,
            solutions: [
                "Inventory optimization",
                "Supply chain risk assessment",
                "Operational efficiency analysis",
                "Quality control monitoring",
                "Resource allocation optimization"
            ]},
        {category: "Financial Analytics",
            icon: TrendingUp,
            solutions: [
                "Revenue forecasting",
                "Cost analysis and optimization",
                "Profitability analysis",
                "Cash flow prediction",
                "Investment decision support"
            ]},
        {category: "Human Resources",
            icon: Users,
            solutions: [
                "Employee performance analytics",
                "Talent acquisition insights",
                "Workforce planning",
                "Employee retention prediction",
                "Training effectiveness analysis"
            ]}
    ];
    const technologies = [
        {name: "Machine Learning",
            description: "Advanced ML algorithms for pattern recognition and prediction",
            icon: Brain},
        {name: "Big Data Processing",
            description: "Scalable data processing for large datasets",
            icon: Database},
        {name: "Real-time Analytics",
            description: "Instant data processing and insights delivery",
            icon: Zap},
        {name: "Cloud Infrastructure",
            description: "Scalable cloud-based BI platform",
            icon: Globe},
        {name: "Data Security",
            description: "Enterprise-grade security and compliance",
            icon: Shield},
        {name: "24/7 Monitoring",
            description: "Continuous monitoring and alerting",
            icon: Clock}
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business data into actionable insights with our AI-powered business intelligence platform. 
              Make data-driven decisions with confidence using advanced analytics and predictive modeling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
        </div>
      </div>
    </div>
  );
};

export default AIBusinessIntelligence;
