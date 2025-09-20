import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {Brain, Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Play, Star, Globe, Cpu} from 'lucide-react';
import {SEO} from '@/components/SEO';
const features = [
    {title: "Cloud-Native Architecture",
        description: "Built on modern cloud infrastructure for scalability, reliability, and global accessibility.",
        icon: Cloud,
        color: "from-blue-500 to-cyan-500"},
    {title: "AI-Powered Intelligence",
        description: "Advanced machine learning algorithms that continuously learn and adapt to your business needs.",
        icon: Brain,
        color: "from-purple-500 to-pink-500"},
    {title: "Real-time Processing",
        description: "Instant data processing and analysis for immediate business insights and decision-making.",
        icon: Zap,
        color: "from-green-500 to-emerald-500"},
    {title: "Enterprise Security",
        description: "Bank-level security with encryption, compliance, and advanced threat protection.",
        icon: Shield,
        color: "from-orange-500 to-red-500"}
];
const benefits = [
    "Scale from startup to enterprise seamlessly",
    "99.9% uptime with global CDN distribution",
    "Real-time collaboration across teams and locations",
    "Advanced analytics and business intelligence",
    "Customizable workflows and automation",
    "Multi-tenant architecture for cost efficiency"
];
const useCases = [
    {title: "Multi-Location Operations",
        description: "Manage business operations across multiple locations with centralized AI intelligence.",
        icon: Globe},
    {title: "Team Collaboration",
        description: "Enable seamless collaboration between distributed teams with AI-powered insights.",
        icon: Users},
    {title: "Data Analytics",
        description: "Comprehensive business analytics with real-time dashboards and reporting.",
        icon: BarChart3},
    {title: "Process Automation",
        description: "Automate complex business processes with intelligent workflow management.",
        icon: Cpu}
];
const testimonials = [
    {content: "The AI Autonomous Business Platform has transformed how we operate. We can now manage our global operations from where with real-time insights.",
        name: "Jennifer Martinez",
        role: "CTO, GlobalTech Solutions",
        rating: 5},
    {content: "This platform is a game-changer. The AI capabilities and cloud architecture give us the flexibility we need to grow rapidly.",
        name: "David Kim",
        role: "VP Engineering, ScaleUp Inc",
        rating: 5}
];
export default function AIAutonomousBusinessPlatform
export {AIAutonomousBusinessPlatform}() {
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      <SEO title="AI Autonomous Business Platform - Zion Tech Group" description="Transform your business with our cloud-native AI platform. Scalable, secure, and intelligent business management for the modern enterprise." keywords="AI business platform, cloud AI platform, autonomous business platform, enterprise AI, business intelligence platform" canonical="https://ziontechgroup.com/ai-services/ai-autonomous-business-platform/" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-cyan-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Cloud-Native AI Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Business Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The ultimate cloud-native AI platform that scales with your business, providing intelligent automation, real-time insights, and seamless collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center">
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
              <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AIAutonomousBusinessPlatform.js;