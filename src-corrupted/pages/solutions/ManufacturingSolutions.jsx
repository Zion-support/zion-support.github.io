import {motion} from 'framer-motion';
import { Settings, Brain, Target, BarChart3, Zap, Shield, ArrowRight, CheckCircle, Factory, Cog export default function ManufacturingSolutions
export { ManufacturingSolutions }() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Predictive Maintenance",
            description: "Machine learning models to predict equipment failures and optimize maintenance schedules"
        },
        {icon: BarChart3,
            title: "Real-time Production Analytics",
            description: "Live monitoring and analysis of production metrics and KPIs"},
        {icon: Target,
            title: "Quality Control Automation",
            description: "AI-driven quality inspection and defect detection systems"},
        {icon: Zap,
            title: "Smart Supply Chain Management",
            description: "Intelligent inventory optimization and supply chain automation"},
        {icon: Shield,
            title: "Industrial Cybersecurity",
            description: "Advanced security for connected manufacturing systems and IoT devices"},
        {
            icon: Settings,
            title: "Process Optimization",
            description: "AI-powered process improvement and efficiency optimization"

    ];
    const benefits = [
        "Reduce downtime by 40-60%",
        "Improve product quality by 25-35%",
        "Lower production costs by 20-30%",
        "Increase production efficiency",
        "Better resource utilization",
        "Enhanced safety and compliance"
    ];
    const solutions = [
        {
            title: "Smart Manufacturing",
            description: "IoT-enabled connected manufacturing with real-time monitoring"
        },
        {title: "Predictive Analytics",
            description: "AI-powered forecasting and predictive maintenance solutions"},
        {title: "Quality Management",
            description: "Automated quality control and defect prevention systems"},
        {
            title: "Supply Chain Optimization",
            description: "Intelligent inventory and supply chain management"

    ];
    const industries = [
        "Automotive",
        "Electronics",
        "Pharmaceuticals",
        "Food & Beverage",
        "Aerospace",
        "Textiles",
        "Chemicals",
        "Heavy Machinery"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Factory className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Manufacturing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your manufacturing operations with Industry 4.0 technology. Enhance efficiency,
              quality, and productivity with AI-powered manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default ManufacturingSolutions;