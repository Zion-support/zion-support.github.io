import React from "react"
import { motion } from "framer-motion"
import { ;
  Rocket,;
  Satellite, ;
  CheckCircle, ;
  Users, ;
  Clock, ;
  ArrowRight,;
  Play,;
  Settings,;
  Target,;
  Activity,;
  Sparkles,;
  Search,;
  Zap,;
  Globe,;
  Building,;
  DollarSign,;
  BarChart3,;
  TrendingUp,;
  Key,;
  Fingerprint,;
  Monitor,;
  AlertTriangle,;
  ShieldCheck,;
  Globe2,;
  Server,;
  Database,;
  Smartphone,;
  Code,;
  FileText,;
  AlertCircle,;
  CheckSquare,;
  Calculator,;
  PieChart,;
  LineChart,;
  Target2,;
  Wallet,;
  PiggyBank,;
  CreditCard,;
  Receipt,;
  Cloud,;
  Zap2,;
  Gauge,;
  BarChart4,;
  TrendingUp2,;
  Lightbulb,;
  Briefcase,;
  Strategy,;
  Brain,;
  Compass,;
  Shield,;
  RefreshCw,;
  TrendingUp3,;
  Layers,;
  Workflow,;
  Scale,;
  Award,;
  Lock,;
  Wifi,;
  Bluetooth,;
  Radio,;
  Sensor,;
  Chip,;
  Circuit,;
  Orbit,;
  Planet,;
  Star,;
  Telescope,;
  Antenna,;
  Signal,;
  Navigation,;
  Earth,;
  Moon,;
  Sun;
} from "lucide-react"
const SpaceTech = () => {;
  const features = [;
    {;
      icon: Satellite,title: 'Satellite Technology',description: 'Advanced satellite design, deployment, and management solutions'
    },;
    {;
      icon: Orbit,title: 'Orbital Mechanics',description: 'Precise orbital calculations and trajectory optimization'
    };
    {;
      icon: Antenna,title: 'Ground Station Systems',description: 'Earth-based communication and control infrastructure'
    };
    {;
      icon: Signal,title: 'Space Communications',description: 'Reliable data transmission between space and ground'
    };
    {;
      icon: Navigation,title: 'Space Navigation',description: 'Advanced positioning and navigation systems for space missions'
    };
    {;
      icon: Telescope,title: 'Space Observation',description: 'Earth observation and space monitoring capabilities'
    };
  ];
  const benefits = [;
    'Enable global connectivity and coverageProvide critical Earth observation data',;
    'Support space exploration missionsEnable advanced navigation systems',;
    'Support disaster response and monitoringDrive innovation in space technology'
  ],;

  const services = [;
    {;
      icon: Rocket,title: 'Launch Services',description: 'Satellite launch coordination and mission planning'
    };
    {;
      icon: Planet,title: 'Earth Observation',description: 'Satellite imagery and environmental monitoring'
    };
    {;
      icon: Star,title: 'Space Research',description: 'Scientific research and space exploration support'
    };
    {;
      icon: Globe2,title: 'Global Communications',description: 'Satellite communications and internet services'
    };
  ];
  const useCases = [;
    {;
      industry: 'Telecommunications',description: 'Global satellite communications and internet services'
    };
    {;
      industry: 'Environmental Monitoring',description: 'Climate change tracking and natural disaster monitoring'
    };
    {;
      industry: 'Agriculture',description: 'Crop monitoring and precision agriculture support'
    };
    {;
      industry: 'Defense & Security',description: 'Surveillance and national security applications'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">;
              <[^>]*/>
              Space Technology Solutions;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Space;
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Technology</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Explore the final frontier with cutting-edge space technology solutions;
              that push the boundaries of innovation and discovery.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center">;
                <[^>]*/>
                Launch Space Project;
              </[^>]*>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200 flex items-center justify-center">;
                <[^>]*/>
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced Space Technology Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Comprehensive space technology solutions designed to advance;
              exploration and innovation beyond Earth's atmosphere.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Core Space Technology Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Cutting-edge technologies and platforms to build robust;
              reliable space systems and solutions.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {spaceTechnologies.map((tech, index) => (;
              <motion.div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover: border-purple-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Why Choose Space Technology?;
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                Space technology provides unprecedented opportunities to explore;
                monitor, and understand our world and beyond.;
              </[^>]*>
              <ul className="space-y-3">;
                {benefits.map((benefit, index) => (;
                  <li key={index} className="flex items-center text-gray-300">;
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></[^>]*>
                    {benefit};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">;
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-2xl font-bold text-white mb-2">Space Innovation</[^>]*>
                <p className="text-gray-300 mb-6">;
                  Our team has deep expertise in space technology and;
                  is committed to advancing the frontiers of exploration.;
                </[^>]*>
                <div className="text-sm text-gray-400">;
                  <p>• Space technology experts</[^>]*>
                  <p>• Innovation leadership</[^>]*>
                  <p>• Proven methodologies</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Reach for the Stars?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8">;
            Let's discuss how space technology can advance your mission;
            and push the boundaries of what's possible.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
              Get Started;
            </[^>]*>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
              View All Services;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">;
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Launch Your Space Project Today;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join organizations worldwide that use our space technology solutions to ;
              explore new frontiers and solve global challenges.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center">;
                Get Started Today;
                <[^>]*/>
              </[^>]*>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default SpaceTech;