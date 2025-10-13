import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Database, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Zap, 
  Globe, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  Brain,
  Settings,
  Clock,
  Award,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Eye,
  Cpu,
  Shield
} from "lucide-react";

const ZionAIDataSyncPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Data Sync - Intelligent Data Synchronization | Zion Tech Group</title>
        <meta
          name="description"
          content="Intelligent data synchronization platform that connects all your business applications with real-time updates and conflict resolution. Keep your data consistent across all systems."
        />
        <meta
          name="keywords"
          content="data synchronization, data integration, real-time sync, data consistency, API integration, data management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                Zion AI Data Sync
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent data synchronization platform that connects all your business applications with real-time updates and conflict resolution. 
              Keep your data consistent across all systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIDataSyncPage;