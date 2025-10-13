import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
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

const ZionAICrmProPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI CRM Pro - AI-Powered Customer Relationship Management | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. Boost your sales performance by 40%."
        />
        <meta
          name="keywords"
          content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales forecasting, CRM software"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse"></div>
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                Zion AI CRM Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. 
              Boost your sales performance by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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

export default ZionAICrmProPage;