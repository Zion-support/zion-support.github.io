<<<<<<< HEAD
        </div>,
      </div>,
    </div>,
=======
import {Link} from 'react-router-dom';
import {SEO} from '@/components/SEO';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';

const DigitalTransformation = (props: any) => {
    const transformationServices = [
        {
            title: "Process Automation",
            description: "Streamline operations with intelligent automation solutions",
            features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics"],
            icon: "🤖"
        },
        {title: "Workflow Optimization",
            description: "Redesign and optimize business workflows for maximum efficiency",
            features: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Monitoring"],
            icon: "📊"},
        {title: "Change Management",
            description: "Guide your organization through digital transformation with expert change management",
            features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],
            icon: "🔄"},
        {title: "Business Process Optimization",
            description: "Streamline operations and improve efficiency through digital workflows",
            features: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"],
            icon: "⚡"},
        {title: "Customer Experience Enhancement",
            description: "Create seamless digital experiences that delight your customers",
            features: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems"],
            icon: "🎯"},
        {title: "Data & Analytics Strategy",
            description: "Leverage data insights to drive informed business decisions",
            features: ["Data Collection", "Analytics Platforms", "Business Intelligence", "Predictive Modeling"],
            icon: "📊"},
        {title: "Technology Infrastructure",
            description: "Modernize your technology stack for scalability and performance",
            features: ["Cloud Migration", "API Integration", "Microservices", "DevOps Practices"],
            icon: "🏗️"}
    ];
    const benefits = [
        "Increased operational efficiency by 50%",
        "Enhanced customer experience and satisfaction",
        "Reduced operational costs and waste",
        "Improved decision-making with real-time data",
        "Competitive advantage in the digital marketplace"
    ];
    const transformationApproach = [
        {step: "Assessment", icon: "🔍", description: "Evaluate current state and identify opportunities"},
        {step: "Strategy", icon: "📋", description: "Develop comprehensive transformation roadmap"},
        {step: "Implementation", icon: "🚀", description: "Execute changes with agile methodology"},
        {step: "Optimization", icon: "📈", description: "Continuous improvement and scaling"}
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <SEO title="Digital Transformation - Zion Tech Group" description="Transform your business for the digital age with our comprehensive digital transformation services." keywords="digital transformation, process automation, digital strategy, change management, performance optimization" canonical="https://ziontechgroup.com/services/digital-transformation" />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial = {
  { opacity: 0,
  y: -20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.8 }}>
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Transformation
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embrace the future of business with our comprehensive digital transformation services designed to modernize your operations and drive sustainable growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default DigitalTransformation;