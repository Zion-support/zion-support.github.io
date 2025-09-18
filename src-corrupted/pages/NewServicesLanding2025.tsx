<<<<<<< HEAD
import React, { useState } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import { ; Brain,; Atom,; Shield,; Cloud,; Database,; Zap,; Users,; TrendingUp,; CheckCircle,; ArrowRight,; Cpu,; Lock,; Network,; Server,; Globe,; Rocket,; Target,; BarChart3,; Workflow,; Leaf,; Satellite,; Link as LinkIcon,; MessageCircle,; HelpCircle,; Smartphone,; ShoppingCart,; FileText,; Video,; GraduationCap,; TestTube,; Building2,; Car,; Factory,; Heart,; DollarSign,; ShoppingBag,; Plane,; Ship,; Truck,; Phone,; Mail,; MapPin,; ExternalLink,; Star,; Award,; Clock,; Users as UsersIcon,; Globe as GlobeIcon,; TrendingUp as TrendingUpIcon,; ChevronRight,; Play,; Download,; BookOpen,; Lightbulb,; Shield as ShieldIcon,; Zap as ZapIcon,; Globe as GlobeIcon2;  } from 'lucide-react'; import { allEnhancedZionServices2025 } from '../data/enhancedZionServices2025'; ; export default function NewServicesLanding2025(props: any) {; const [activeTab, setActiveTab] = useState<any>('overview'); ; const stats = [ { label: 'New Services', value: '11+', icon: Rocke t, color: 'text-blue-400' }, { label: 'Market Size', value: '$200B+', icon: TrendingU p, color: 'text-green-400' }, { label: 'ROI Range', value: '200-500%', icon: Targe t, color: 'text-purple-400' }, { label: 'Setup Time', value: '2-12 weeks', icon: Cloc k, color: 'text-orange-400' }; ]; ; const highlights = [ {; icon: Brai n,; title: 'AI-Powered Solutions',; description: 'Cutting-edge artificial intelligence and machine learning platforms',; color: 'from-orange-500 to-red-500'; }, {; icon: Shiel d,; title: 'Enterprise Security',; description: 'Quantum-resistant cybersecurity and advanced threat protection',; color: 'from-purple-500 to-pink-500'; }, {; icon: Lea f,; title: 'Sustainability Tech',; description: 'Green technology solutions for environmental compliance',; color: 'from-green-500 to-blue-500'; }, {; icon: Building 2,; title: 'Smart Infrastructure',; description: 'IoT and edge computing for modern city management',; color: 'from-blue-500 to-purple-500'; }; ]; ; return (; <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"> <SEO " title="New Zion Services 2025 - Revolutionary Micro SAAS, IT & AI Solutions" description="Discover Zion Tech Group's latest cutting-edge micro SAAS services, IT infrastructure solutions, and AI-powered platforms.Transform your business with innovative technology solutions." keywords="new services 2025, micro SAAS, IT services, AI services, Zion Tech Group, technology solutions, digital transformation";";"  /> {}" <section className="relative py-20 px-4 overflow-hidden">" <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>" <div className="relative max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 2 0 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }} >" <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">" <span className="text-blue-300 text-sm">🚀 NEW IN 2025</span>" <ChevronRight className="w-4 h-4 text-blue-300"  />;";" </div>;" <h1 className="text-5xl md: tex t-7xl font-bold text-white mb-6">;";" Revolutionary New Services </h1>" <p className="text-xl md: tex t-2xl text-blue-100 mb-8 max-w-4xl mx-auto">;";" Introducing Zion Tech Group's latest micro SAAS, IT infrastructure, and AI services that will transform your business and drive unprecedented growth;";" </p>;" <div className="flex flex-col sm: fle x-row gap-4 justify-center mb-12"> <a" href="https:
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const NewServicesLanding2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>NewServicesLanding2025 | Zion Tech Group</title>
        <meta name="description" content="NewServicesLanding2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">NewServicesLanding2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default NewServicesLanding2025;
