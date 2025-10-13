import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FileText, 
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

const ZionAIContentStudioPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Content Studio - AI-Powered Content Creation | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered content creation platform with automated writing, SEO optimization, and multi-format publishing. Create 10x more content with consistent quality."
        />
        <meta
          name="keywords"
          content="AI content creation, content generation, SEO optimization, content marketing, automated writing, content studio"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                Zion AI Content Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered content creation platform with automated writing, SEO optimization, and multi-format publishing. 
              Create 10x more content with consistent quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-500/25 hover:scale-105"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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

export default ZionAIContentStudioPage;