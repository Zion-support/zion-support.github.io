import { Wifi, Zap, Shield, Globe, BarChart3, Users, Cpu, Network } from 'lucide-react';

const FiveGEnterpriseNetwork: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G speeds for enterprise applications"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-low latency for real-time applications and IoT"
import { 
  Wifi, 
  Shield, 
  Zap, 
  Building, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Cpu
} from 'lucide-react';

export default function FiveGEnterpriseNetwork() {
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Lightning-fast 5G networks with ultra-low latency for enterprise applications"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols for enterprise networks"
      description: "Worldwide 5G network coverage and roaming"
      title: "Enterprise-Grade 5G Network",
      description: "Dedicated 5G network infrastructure designed specifically for enterprise needs."
    },
    {
      icon: Network,
      title: "Network Slicing",
      description: "Custom network slices for different business applications and security requirements."
    },
    {
      icon: Shield,
      title: "Private Network Security",
      description: "Isolated network segments with enterprise-grade security and compliance."
      description: "Real-time network performance monitoring and predictive analytics."
    },
    {
      icon: Server,
      title: "Edge Computing Integration",
      description: "Seamless integration with edge computing for low-latency applications."
    },
    {
      icon: Users,
      title: "Multi-Tenant Support",
      description: "Support for multiple business units with isolated network segments."
      title: "Smart Manufacturing",
      description: "5G-powered IoT networks for industrial automation and real-time monitoring."
    },
    {
      title: "Healthcare Networks",
      description: "Secure 5G networks for telemedicine and remote patient monitoring."
    },
    {
      title: "Financial Services",
      description: "Ultra-low latency networks for high-frequency trading and financial applications."
    },
    {
      title: "Transportation & Logistics",
      description: "Connected vehicle networks and smart logistics management."
    },
    {
      title: "Retail & Hospitality",
      description: "Enhanced customer experiences with AR/VR and smart retail solutions."
    },
    {
      title: "Government & Defense",
      description: "Secure, reliable networks for critical government operations."
      metric: "99.99%",
      label: "Network Uptime",
      description: "Enterprise-grade reliability and availability"
    },
    {
      metric: "1ms",
      label: "Ultra-Low Latency",
      description: "Near-instantaneous response times"
    },
    {
      metric: "10Gbps",
      label: "Peak Speeds",
      description: "Lightning-fast data transfer capabilities"
    },
    {
      metric: "1000+",
      label: "Connected Devices",
      description: "Massive IoT device support per network slice"
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Wifi className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              5G Enterprise Network Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your enterprise with cutting-edge 5G network infrastructure. 
              Experience lightning-fast connectivity, ultra-low latency, and enterprise-grade security.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Enterprise-Grade 5G Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G solutions are designed specifically for enterprise needs, 
              providing the performance, security, and reliability your business demands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and enabling new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Network Performance Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unlock the full potential of 5G technology for your enterprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30">
            <Star className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Experience the Future of Enterprise Connectivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that are already leveraging our 5G solutions 
              to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Network Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
};

export default FiveGEnterpriseNetwork;
}
