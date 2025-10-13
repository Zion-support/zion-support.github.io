<<<<<<< HEAD
=======
import { 
  ArrowRight, 
  Package, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Eye, 
  Heart, 
  MessageSquare, 
  Star, 
  CheckCircle, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Globe, 
  Award, 
  Shield, 
  Lock, 
  Cloud, 
  Database, 
  Settings, 
  Headphones, 
  ExternalLink, 
  ChevronRight, 
  RefreshCw, 
  RotateCcw, 
  Save, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Menu, 
  MoreHorizontal, 
  MoreVertical, 
  Grid, 
  List, 
  Layout, 
  Maximize, 
  Minimize, 
  Move, 
  Copy, 
  Scissors, 
  Clipboard, 
  Bookmark, 
  Tag, 
  Flag, 
  Bell, 
  BellOff, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryLow, 
  Signal, 
  SignalLow, 
  SignalZero, 
  SignalHigh, 
  SignalMedium,
  DollarSign,
  CreditCard,
  Receipt,
  Calculator,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  Play,
  Pause,
  Stop,
  ThumbsUp,
  Share,
  Download,
  Upload,
  Edit,
  Zap,
  Clock,
  Users,
  Truck,
  Warehouse,
  ShoppingCart,
  Store
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionSmartInventoryOptimizerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'Demand Forecasting',
      description: 'AI-powered demand forecasting with 95% accuracy to predict inventory needs',
      icon: <TrendingUp className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Auto Reordering',
      description: 'Automatically reorder products when stock levels reach optimal thresholds',
      icon: <RefreshCw className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Cost Optimization',
      description: 'Minimize inventory costs while maintaining optimal stock levels',
      icon: <DollarSign className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Multi-location Support',
      description: 'Manage inventory across multiple warehouses and retail locations',
      icon: <Warehouse className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Supplier Management',
      description: 'Track supplier performance and optimize procurement strategies',
      icon: <Truck className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on inventory performance and trends',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Seasonal Adjustments',
      description: 'Automatically adjust inventory levels based on seasonal patterns',
      icon: <Calendar className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Dead Stock Detection',
      description: 'Identify and manage slow-moving or obsolete inventory',
      icon: <AlertCircle className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Integration APIs',
      description: 'Connect with e-commerce platforms, POS systems, and accounting software',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Mobile App',
      description: 'Manage inventory on-the-go with our mobile application',
      icon: <Smartphone className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Real-time Alerts',
      description: 'Get instant notifications about stock levels and potential issues',
      icon: <Bell className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$249',
      originalPrice: '$499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 products',
        'Basic forecasting',
        'Email support',
        'Standard reports',
        '5GB storage'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$499',
      originalPrice: '$999',
      period: '/month',
      description: 'Ideal for growing businesses and retail chains',
      features: [
        '10,000 products',
        'Advanced forecasting',
        'Priority support',
        'Custom reports',
        '25GB storage',
        'Multi-location',
        'Supplier management'
      ],
      popular: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$999',
      originalPrice: '$1,999',
      period: '/month',
      description: 'For large organizations and enterprise retailers',
      features: [
        'Unlimited products',
        'Full forecasting suite',
        '24/7 support',
        'Advanced reporting',
        'Unlimited storage',
        'Custom integrations',
        'API access',
        'Team collaboration',
        'Dedicated manager'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Optimize inventory for online stores and marketplaces',
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ['Demand forecasting', 'Stock optimization', 'Multi-channel sync', 'Seasonal planning']
    },
    {
      title: 'Retail Chains',
      description: 'Manage inventory across multiple store locations',
      icon: <Store className="w-8 h-8" />,
      examples: ['Multi-location management', 'Centralized control', 'Store transfers', 'Performance analytics']
    },
    {
      title: 'Manufacturing',
      description: 'Optimize raw materials and finished goods inventory',
      icon: <Package className="w-8 h-8" />,
      examples: ['Raw material planning', 'Production scheduling', 'Quality control', 'Supplier optimization']
    },
    {
      title: 'Wholesale',
      description: 'Manage large-scale inventory and distribution',
      icon: <Warehouse className="w-8 h-8" />,
      examples: ['Bulk inventory management', 'Distribution optimization', 'Supplier relationships', 'Cost analysis']
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Zion Smart Inventory Optimizer - Coming Soon | Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory optimization coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Zion Smart Inventory Optimizer</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
}
