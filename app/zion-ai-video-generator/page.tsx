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
