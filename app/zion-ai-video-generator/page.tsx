import { 
  Play, 
  Download, 
  Upload, 
  Settings, 
  Sparkles, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Video,
  Image,
  Music,
  Palette,
  Clock,
  Users,
  Award,
  Shield,
  Globe,
  BarChart3
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiVideoGenerator = () => {
  const features = [
    {
      title: "AI-Powered Script Generation",
      description: "Generate compelling video scripts using advanced AI that understands your brand voice and target audience",
      icon: <Sparkles className="w-6 h-6" />,
      stats: "95% accuracy rate"
    },
    {
      title: "Auto Voice Synthesis",
      description: "Convert text to natural-sounding voiceovers in 50+ languages with emotion and tone control",
      icon: <Music className="w-6 h-6" />,
      stats: "50+ languages"
    },
    {
      title: "Smart Video Editing",
      description: "AI automatically cuts, transitions, and optimizes your videos for maximum engagement",
      icon: <Settings className="w-6 h-6" />,
      stats: "10x faster editing"
    },
    {
      title: "Brand Consistency",
      description: "Maintain consistent branding across all videos with automatic logo placement and color schemes",
      icon: <Palette className="w-6 h-6" />,
      stats: "100% brand compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Video Generator - AI-Powered Video Creation | Zion Tech Group"
        description="Create professional videos instantly with our AI video generator. Transform text, images, and ideas into stunning video content with advanced AI technology."
        keywords="AI video generator, video creation, artificial intelligence, video marketing, content creation, automated video"
        canonical="https://ziontechgroup.com/zion-ai-video-generator"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into stunning videos with our advanced AI-powered video generation platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 text-sm font-medium">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;
