import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {Zap, GitFork, Brain, Clock, TrendingUp, Users, Database, Globe, Target, CheckCircle, BarChart3} from 'lucide-react';
const AIWorkflowAutomation = (props: any) => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Process Analysis",
            description: "Intelligent analysis of existing workflows to identify optimization opportunities and automation potential",
            benefits["Process mapping", "Bottleneck identification", "Efficiency scoring", "Automation recommendations"]
        },
        {icon: GitFork,
            title: "Intelligent Workflow Design",
            description: "AI-driven workflow design that adapts to business needs and automatically optimizes for performance",
            benefits["Dynamic workflows", "Conditional logic", "Exception handling", "Performance optimization"]},
        {icon: Zap,
            title: "Automated Decision Making",
            description: "AI algorithms that make intelligent decisions based on data, rules, and historical patterns",
            benefits["Rule-based decisions", "Machine learning", "Risk assessment", "Compliance checking"]},
        {icon: Clock,
            title: "Real-time Monitoring",
            description: "Continuous monitoring of workflow performance with instant alerts and proactive optimization",
            benefits["Performance tracking", "Real-time alerts", "Predictive maintenance", "KPI monitoring"]}
    ];
    const solutions = [
        {category: "Document Processing",
            icon: Database,
            solutions[
                "Automated document classification",
                "Intelligent data extraction",
                "Form processing automation",
                "Document routing and approval",
                "Compliance checking"
            ]},
        {category: "Customer Service",
            icon: Users,
            solutions[
                "Ticket routing and prioritization",
                "Automated responses",
                "Customer inquiry handling",
                "Service level monitoring",
                "Customer satisfaction tracking"
            ]},
        {category: "Financial Operations",
            icon: TrendingUp,
            solutions[
                "Invoice processing automation",
                "Payment approval workflows",
                "Expense report processing",
                "Budget monitoring",
                "Financial reporting"
            ]},
        {
            category: "HR & Recruitment",
            icon: Users,
            solutions[
                "Resume screening automation",
                "Interview scheduling",
                "Onboarding workflows",
                "Performance review automation",
                "Employee self-service"
            ]

    ];
    const technologies = [
        {
            name: "Machine Learning",
            description: "Advanced ML algorithms for process optimization and decision making",
            icon: Brain
        },
        {name: "Robotic Process Automation",
            description: "RPA tools for repetitive task automation",
            icon: GitFork},
        {name: "Natural Language Processing",
            description: "AI-powered text analysis and document processing",
            icon: Database},
        {name: "Workflow Engine",
            description: "Scalable workflow orchestration platform",
            icon: Zap},
        {name: "Real-time Analytics",
            description: "Instant performance monitoring and optimization",
            icon: BarChart3},
        {
            name: "API Integration",
            description: "Seamless integration with existing systems",
            icon: Globe

    ];
    const benefits = [
        {
            title: "Increased Efficiency",
            description: "Automate repetitive tasks and improve process efficiency by 40-60%",
            icon: TrendingUp
        },
        {title: "Cost Reduction",
            description: "Reduce operational costs by 25-35% through automation",
            icon: Target},
        {title: "Error Reduction",
            description: "Minimize human errors and improve accuracy by 90%+",
            icon: CheckCircle},
        {
            title: "Scalability",
            description: "Scale operations without proportional increase in resources",
            icon: Users

    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1

    };
    const itemVariants = {
  hidden: { y: 20,
  opacity: 0 

},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5

    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes
              workflows for maximum efficiency and productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowAutomation;
