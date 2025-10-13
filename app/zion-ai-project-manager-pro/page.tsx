import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
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
  Database,
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

const ZionAIProjectManagerProPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Project Manager Pro - AI-Powered Project Management | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Complete projects 30% faster with better outcomes."
        />
        <meta
          name="keywords"
          content="AI project management, project management software, task automation, resource allocation, project planning, team collaboration"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 animate-pulse"></div>
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                Zion AI Project Manager Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. 
              Complete projects 30% faster with better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-violet-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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

export default ZionAIProjectManagerProPage;