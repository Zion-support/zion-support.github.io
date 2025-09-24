import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Smartphone,;
  Download, ;
  Zap, ;
  Shield, ;
  Cloud, ;
  Users, ;
  CheckCircle, ;
  ArrowRight,;
  Star,;
  Globe,;
  Lock,;
  Wifi,;
  Battery,;
  Settings,;
  Bell,;
  Search,;
  Home,;
  User,;
  BarChart3,;
  MessageCircle,;
  ShoppingCart,;
  Calendar,;
  FileText,;
  Heart,;
  Bookmark,;
  Share2,;
  Play,;
  Pause,;
  SkipBack,;
  SkipForward,;
  Volume2,;
  Maximize2,;
  RotateCcw,;
  Wifi as WifiIcon,;
  Battery as BatteryIcon,;
  Signal;
} from "lucide-react"
import SEO from "../components/SEO"
const MobileLaunch: React.FC = () => {
  const features = [;
    {;
      title: "AI-Powered Insights",description: "Get intelligent recommendations and insights powered by our advanced AI algorithms",icon: Zap,color: "from-cyan-400 to-blue-500"
    };
    {;
      title: "Real-time Sync",description: "Seamlessly sync data across all your devices with cloud-based synchronization",icon: Cloud,color: "from-blue-400 to-purple-500"
    };
    {;
      title: "Secure & Private",description: "Enterprise-grade security with end-to-end encryption and privacy controls",icon: Shield,color: "from-green-400 to-emerald-500"
    };
    {;
      title: "Smart Notifications",description: "Intelligent alerts that adapt to your preferences and schedule",icon: Bell,color: "from-orange-400 to-red-500"
    };
  ];
  const appScreens = [;
    {;
      name: "Dashboard",description: "Overview of your business metrics and key performance indicators",icon: Home,features: ["Real-time metrics", "Customizable widgets", "Quick actions"]
    },;
    {;
      name: "AI Assistant",description: "Your personal AI companion for business insights and automation",icon: Zap,features: ["Natural language queries", "Smart recommendations", "Automated tasks"]
    },;
    {;
      name: "Analytics",description: "Comprehensive data visualization and business intelligence tools",icon: BarChart3,features: ["Interactive charts", "Custom reports", "Data export"]
    },;
    {;
      name: "Services",description: "Access to all Zion Tech Group services and solutions",icon: Settings,features: ["Service catalog", "Quick setup", "Support access"]
    };
  ],;

  const downloadOptions = [;
    {;
      platform: "iOS App Store",icon: "🍎",description: "Download for iPhone and iPad",link: "#",featured: true;
    };
    {;
      platform: "Google Play Store",icon: "🤖",description: "Download for Android devices",link: "#",featured: true;
    };
    {;
      platform: "Web App",icon: "🌐",description: "Access via browser",link: "/",featured: false;
    };
  ];
  const systemRequirements = [;
    { requirement: "iOS 14.0+", icon: "🍎" };
    { requirement: "Android 8.0+", icon: "🤖" };
    { requirement: "2GB RAM", icon: "💾" };
    { requirement: "100MB Storage", icon: "💿" };
    { requirement: "Internet Connection", icon: "🌐" };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Mobile App - Zion Tech Group"
        description="Take Zion Tech Group with you on the go! Download our mobile app for iOS and Android to access AI services, analytics, and business solutions anywhere."
        keywords="mobile app, iOS app, Android app, Zion Tech Group mobile, business app"
      />;

      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="relative z-10 container mx-auto px-4">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -30 }};
              animate={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <div className="flex items-center mb-6">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">;
                  <[^>]*/>
                </[^>]*>
                <h1 className="text-4xl font-bold text-white">Mobile App</[^>]*>
              </[^>]*>
              ;
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">;
                Take Zion;
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                  Everywhere;
                </[^>]*>
              </[^>]*>
              ;
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">;
                Access your business solutions, AI services, and analytics on the go with our ;
                powerful mobile application. Available for iOS and Android devices.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4">;
                <Link;
                  to="#download"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Download Now;
                </[^>]*>
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Learn More;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            ;
            <motion.div
              initial={{ opacity: 0, x: 30 }};
              animate={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              {/* Mock Phone */};
              <div className="relative mx-auto w-80 h-96 bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl">;
                {/* Phone Screen */};
                <div className="absolute inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-[2rem] overflow-hidden">;
                  {/* Status Bar */};
                  <div className="flex justify-between items-center px-6 py-2 text-white text-sm">;
                    <span>9:41</[^>]*>
                    <div className="flex items-center space-x-1">;
                      <[^>]*/>
                      <[^>]*/>
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                  ;
                  {/* App Content */};
                  <div className="p-6">;
                    <div className="text-center mb-6">;
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">;
                        <[^>]*/>
                      </[^>]*>
                      <h3 className="text-white font-bold text-lg">Zion Tech</[^>]*>
                      <p className="text-cyan-300 text-sm">AI-Powered Business</[^>]*>
                    </[^>]*>
                    ;
                    {/* Quick Actions */};
                    <div className="grid grid-cols-2 gap-3 mb-6">;
                      <div className="bg-white/10 rounded-lg p-3 text-center">;
                        <[^>]*/>
                        <span className="text-white text-xs">Analytics</[^>]*>
                      </[^>]*>
                      <div className="bg-white/10 rounded-lg p-3 text-center">;
                        <[^>]*/>
                        <span className="text-white text-xs">AI Chat</[^>]*>
                      </[^>]*>
                      <div className="bg-white/10 rounded-lg p-3 text-center">;
                        <[^>]*/>
                        <span className="text-white text-xs">Services</[^>]*>
                      </[^>]*>
                      <div className="bg-white/10 rounded-lg p-3 text-center">;
                        <[^>]*/>
                        <span className="text-white text-xs">Profile</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              {/* Floating Elements */};
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">;
                <[^>]*/>
              </[^>]*>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Powerful <span className="text-cyan-400">Mobile Features</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Experience the full power of Zion Tech Group's services in the palm of your hand ;
              with our feature-rich mobile application.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-slate-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* App Screens Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              App <span className="text-cyan-400">Screens</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Explore the intuitive interface and powerful features available in our mobile application.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {appScreens.map((screen, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-2xl font-bold text-white mb-4">{screen.name}</[^>]*>
                <p className="text-slate-300 mb-6">{screen.description}</[^>]*>
                ;
                <div className="space-y-3">;
                  {screen.features.map((feature, featureIndex) => (;
                    <div key={featureIndex} className="flex items-center text-slate-400">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Download Section */};
      <section id="download" className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Download <span className="text-cyan-400">Now</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Get started with Zion Tech Group's mobile app today. Available on all major platforms.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">;
            {downloadOptions.map((option, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className={`bg-slate-800/50 border rounded-xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${;
                  option.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
                }`};
              >;
                {option.featured && (;&& (; (
                  <div className="flex items-center justify-center mb-4">;
                    <[^>]*/>
                    <span className="text-yellow-400 text-sm font-semibold">Recommended</[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-6xl mb-4">{option.icon}</[^>]*>
                <h3 className="text-2xl font-bold text-white mb-3">{option.platform}</[^>]*>
                <p className="text-slate-300 mb-6">{option.description}</[^>]*>
                ;
                <Link;
                  to={option.link};
                  className="[^"]*"
                >;
                  Download;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* System Requirements */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              System <span className="text-cyan-400">Requirements</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Ensure your device meets the requirements for optimal performance and experience.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">;
            {systemRequirements.map((req, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, scale: 0.8 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="text-4xl mb-3">{req.icon}</[^>]*>
                <p className="text-white font-medium">{req.requirement}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Go Mobile?;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">;
              Download our mobile app today and take Zion Tech Group's powerful solutions ;
              with you wherever you go.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="#download"
                className="[^"]*"
              >;
                <[^>]*/>
                Download App;
              </[^>]*>
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Support;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default MobileLaunch;