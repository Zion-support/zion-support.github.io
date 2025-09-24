import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Rocket,;
  Satellite, ;
  Globe, ;
  Zap, ;
  Shield, ;
  Target, ;
  ArrowRight,;
  CheckCircle,;
  Star,;
  Lock,;
  Activity,;
  BarChart3,;
  Settings,;
  Bell,;
  Download,;
  Upload,;
  RefreshCw,;
  Monitor,;
  Smartphone,;
  Server,;
  Chip,;
  Wifi,;
  Radar,;
  Camera,;
  Video,;
  FileText,;
  Calendar,;
  Tag,;
  TrendingUp,;
  PieChart,;
  LineChart,;
  Scatter,;
  Layers,;
  Cube,;
  Box,;
  Package,;
  Truck,;
  Building,;
  Factory,;
  Warehouse,;
  Home,;
  Car,;
  Plane,;
  Ship,;
  Database,;
  Cloud,;
  Eye,;
  Brain,;
  Network,;
  Cpu;
} from "lucide-react"
export default function SpaceTech() {;
  const features = [;
    {;
      icon: Rocket,title: "Space Launch Systems",description: "Advanced propulsion and launch vehicle technologies",color: "from-red-500 to-orange-500"
    };
    {;
      icon: Satellite,title: "Satellite Technology",description: "Earth observation and communication satellites",color: "from-blue-500 to-cyan-500"
    };
    {;
      icon: Globe,title: "Earth Observation",description: "Remote sensing and environmental monitoring",color: "from-green-500 to-emerald-500"
    };
    {;
      icon: Zap,title: "Space Communications",description: "High-speed data transmission and networking",color: "from-yellow-500 to-orange-500"
    };
    {;
      icon: Shield,title: "Space Security",description: "Cybersecurity and space defense systems",color: "from-purple-500 to-pink-500"
    };
    {;
      icon: Target,title: "Navigation Systems",description: "Precise positioning and navigation technologies",color: "from-indigo-500 to-blue-500"
    };
  ];
  const applications = [;
    {;
      title: "Telecommunications",description: "Global communication networks and internet connectivity",icon: Wifi,benefits: ["Global coverage", "High bandwidth", "Low latency"]
    },;
    {;
      title: "Environmental Monitoring",description: "Climate change tracking and natural disaster prediction",icon: Activity,benefits: ["Climate data", "Disaster response", "Resource management"]
    },;
    {;
      title: "Navigation & GPS",description: "Precise positioning and location services",icon: Target,benefits: ["Global positioning", "Navigation systems", "Timing services"]
    },;
    {;
      title: "Scientific Research",description: "Space exploration and astronomical discoveries",icon: Eye,benefits: ["Astronomy", "Planetary science", "Space physics"]
    };
  ],;

  const technologies = [;
    "Propulsion Systems", "Satellite Design", "Ground Stations", "Launch Vehicles", ;
    "Earth Observation", "Space Communications", "Navigation Systems", "Space Robotics", "Space Mining", "Space Habitats"
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Space Technology;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Explore the final frontier with our cutting-edge space technology solutions. ;
              From satellite systems to space communications, we're pushing the boundaries of what's possible.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <span>Get Started</[^>]*>
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                <span>Explore Services</[^>]*>
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Space Technology Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our comprehensive space technology platform provides everything you need to explore;
              communicate, and operate in the vast expanse of space.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Applications Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Space Applications;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Discover how space technology is transforming industries and improving life on Earth.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {applications.map((application, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-semibold text-white">{application.title}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 mb-6">{application.description}</[^>]*>
                <ul className="space-y-2">;
                  {application.benefits.map((benefit, benefitIndex) => (;
                    <li key={benefitIndex} className="flex items-center text-gray-300">;
                      <[^>]*/>
                      {benefit};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technologies Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Space Technologies;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Built with cutting-edge space technologies for maximum performance, reliability, and innovation.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">;
            {technologies.map((tech, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, scale: 0.8 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <span className="text-white font-medium">{tech}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Reach for the Stars?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Join the space technology revolution with Zion Tech Group. Our space solutions are designed to explore ;
              new frontiers, connect the world, and advance human knowledge beyond Earth's boundaries.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <span>Get Started Today</[^>]*>
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                <span>Explore Services</[^>]*>
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};