import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {Target, Users, Mail, MessageSquare, TrendingUp, Zap, Brain, Globe, Clock, BarChart3} from 'lucide-react';
const AIMarketingAutomation = (props: any) => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Campaign Optimization",
            description: "Machine learning algorithms that automatically optimize marketing campaigns for maximum performance and ROI",
            benefits: ["Real-time optimization", "A/B testing automation", "Performance prediction", "Budget allocation"]
        },
        {icon: Users,
            title: "Intelligent Customer Segmentation",
            description: "Advanced AI algorithms that automatically segment customers based on behavior, preferences, and engagement patterns",
            benefits: ["Dynamic segmentation", "Behavioral analysis", "Predictive modeling", "Personalization"]},
        {icon: BarChart3,
            title: "Predictive Analytics",
            description: "Forecast customer behavior, campaign performance, and market trends using historical data and AI models",
            benefits: ["Customer lifetime value", "Churn prediction", "Demand forecasting", "Market trends"]},
        {icon: Zap,
            title: "Automated Workflows",
            description: "Intelligent automation of marketing processes, from lead generation to customer retention",
            benefits: ["Lead nurturing", "Email automation", "Social media management", "Content scheduling"]}
    ];
    const solutions = [
        {category: "Email Marketing",
            icon: Mail,
            solutions: [
                "AI-powered email personalization",
                "Send time optimization",
                "Subject line optimization",
                "Content recommendations",
                "Automated drip campaigns"
            ]},
        {category: "Social Media Marketing",
            icon: MessageSquare,
            solutions: [
                "Content performance prediction",
                "Optimal posting times",
                "Audience engagement analysis",
                "Trend identification",
                "Automated content scheduling"
            ]},
        {category: "Search & Display Advertising",
            icon: Target,
            solutions: [
                "Bid optimization",
                "Audience targeting",
                "Ad creative optimization",
                "Performance forecasting",
                "Cross-channel attribution"
            ]},
        {category: "Content Marketing",
            icon: TrendingUp,
            solutions: [
                "Content performance analysis",
                "Topic recommendations",
                "SEO optimization",
                "Content scheduling",
                "ROI measurement"
            ]}
    ];
    const technologies = [
        {name: "Machine Learning",
            description: "Advanced ML algorithms for pattern recognition and prediction",
            icon: Brain},
        {name: "Natural Language Processing",
            description: "AI-powered content analysis and generation",
            icon: MessageSquare},
        {name: "Predictive Analytics",
            description: "Data-driven forecasting and optimization",
            icon: BarChart3},
        {name: "Marketing Automation",
            description: "Intelligent workflow automation",
            icon: Zap},
        {name: "Real-time Analytics",
            description: "Instant performance monitoring and optimization",
            icon: Clock},
        {name: "Multi-channel Integration",
            description: "Seamless integration across all marketing channels",
            icon: Globe}
    ];
    const benefits = [
        {title: "Increased ROI",
            description: "AI optimization typically delivers 20-40% improvement in marketing ROI",
            icon: TrendingUp},
        {title: "Time Savings",
            description: "Automate repetitive tasks and save 15-20 hours per week",
            icon: Clock},
        {title: "Better Targeting",
            description: "Improve conversion rates by 25-35% with AI-powered segmentation",
            icon: Target},
        {title: "Scalable Growth",
            description: "Scale marketing efforts without proportional increase in resources",
            icon: Users}
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                AI Marketing Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your marketing with AI-powered automation that delivers personalized experiences, 
              optimizes campaigns, and maximizes ROI through intelligent decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AIMarketingAutomation;