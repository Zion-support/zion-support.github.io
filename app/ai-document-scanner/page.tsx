'use client';
import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  FileText, 
  Upload, 
  Download, 
  Search, 
  Filter, 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Database, 
  Cloud, 
  Eye, 
  Edit, 
  Trash2, 
  Share, 
  Lock, 
  Unlock, 
  Folder, 
  Image, 
  File, 
  Archive,
  BarChart,
  PieChart,
  TrendingUp,
  Target,
  Award,
  Sparkles,
  Bot,
  Cpu,
  Wifi,
  Battery,
  Signal,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Tag,
  Bookmark,
  Copy,
  Move,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  MoreHorizontal,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Link,
  Link2,
  Unlink,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Key,
  KeyRound,
  Fingerprint,
  ScanLine,
  QrCode,
  Barcode,
  Camera,
  Video,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Headphones,
  Speaker,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  HardDrive,
  Cpu as CpuIcon,
  MemoryStick,
  Wifi as WifiIcon,
  Bluetooth,
  Usb,
  Plug,
  Power,
  Battery as BatteryIcon,
  Signal as SignalIcon,
  WifiOff,
  BluetoothOff,
  UsbOff,
  PlugOff,
  PowerOff,
  BatteryLow,
  SignalLow,
  WifiLow,
  BluetoothLow,
  UsbLow,
  PlugLow,
  PowerLow,
  BatteryEmpty,
  SignalEmpty,
  WifiEmpty,
  BluetoothEmpty,
  UsbEmpty,
  PlugEmpty,
  PowerEmpty,
  BatteryCharging,
  SignalCharging,
  WifiCharging,
  BluetoothCharging,
  UsbCharging,
  PlugCharging,
  PowerCharging,
  BatteryFull,
  SignalFull,
  WifiFull,
  BluetoothFull,
  UsbFull,
  PlugFull,
  PowerFull
} from 'lucide-react';

const AIDocumentScannerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Scan,
      title: 'Advanced OCR Technology',
      description: '99% accuracy OCR with support for 100+ languages and handwriting recognition',
      stats: '99% accuracy'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process 1000+ documents per hour with instant results and batch processing',
      stats: '1000+ docs/hour'
    },
    {
      icon: Brain,
      title: 'AI Data Extraction',
      description: 'Intelligent data extraction with smart field recognition and validation',
      stats: 'Smart extraction'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption with SOC 2 compliance and audit trails',
      stats: 'SOC 2 compliant'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure cloud storage with automatic backup and version control',
      stats: 'Unlimited storage'
    },
    {
      icon: Globe,
      title: 'API Integration',
      description: 'RESTful API for seamless integration with existing workflows',
      stats: 'RESTful API'
    }
  ];

  const capabilities = [
    {
      category: 'Document Types',
      items: [
        'Invoices and receipts',
        'Contracts and agreements',
        'Forms and applications',
        'Business cards',
        'Handwritten notes',
        'Technical drawings',
        'Medical records',
        'Legal documents'
      ]
    },
    {
      category: 'Data Extraction',
      items: [
        'Text and numbers',
        'Tables and charts',
        'Signatures and stamps',
        'Barcodes and QR codes',
        'Dates and amounts',
        'Names and addresses',
        'Product information',
        'Custom fields'
      ]
    },
    {
      category: 'Processing Features',
      items: [
        'Batch processing',
        'Auto-categorization',
        'Quality enhancement',
        'Noise reduction',
        'Perspective correction',
        'Color adjustment',
        'Text recognition',
        'Format conversion'
      ]
    },
    {
      category: 'Integration',
      items: [
        'Cloud storage sync',
        'CRM integration',
        'ERP systems',
        'Accounting software',
        'Email automation',
        'Workflow automation',
        'API webhooks',
        'Custom connectors'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '1,000 scans/month',
        '5 languages',
        'Basic OCR',
        'Cloud storage (10GB)',
        'Email support',
        'Mobile app access',
        'PDF export',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '10,000 scans/month',
        '25 languages',
        'Advanced OCR',
        'Cloud storage (100GB)',
        'Priority support',
        'API access',
        'Multiple formats',
        'Advanced analytics',
        'Team collaboration',
        'Custom fields'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited scans',
        '100+ languages',
        'AI-powered extraction',
        'Unlimited storage',
        '24/7 support',
        'Custom integrations',
        'On-premise deployment',
        'Advanced security',
        'White-label options',
        'Dedicated support'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Office Manager',
      company: 'Legal Firm Inc',
      content: 'We process hundreds of legal documents daily. This AI scanner has reduced our processing time by 80% and improved accuracy significantly.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'CFO',
      company: 'Retail Corp',
      content: 'The invoice processing automation has been a game-changer. We can now process thousands of invoices in minutes instead of hours.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Operations Director',
      company: 'Healthcare Group',
      content: 'HIPAA compliance was crucial for us. The security features and audit trails give us complete confidence in our document processing.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically extract data from invoices, validate information, and integrate with accounting systems',
      icon: FileText,
      benefits: ['90% time reduction', '99% accuracy', 'Auto-validation']
    },
    {
      title: 'Contract Management',
      description: 'Scan and analyze contracts, extract key terms, and track important dates and obligations',
      icon: Shield,
      benefits: ['Risk mitigation', 'Compliance tracking', 'Auto-alerts']
    },
    {
      title: 'Form Processing',
      description: 'Process application forms, surveys, and questionnaires with intelligent data extraction',
      icon: Edit,
      benefits: ['Instant processing', 'Data validation', 'Workflow automation']
    },
    {
      title: 'Receipt Management',
      description: 'Capture and categorize receipts for expense tracking and reimbursement processing',
      icon: Receipt,
      benefits: ['Auto-categorization', 'Expense tracking', 'Tax preparation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">{/* Animated Background </div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">*</div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">/</div>}</div>
     <//div> <//div><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
   </div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /> </div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /> </div> </div>
               <//div> <//div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >{/* Floating Particles </div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >*</div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >/</div>}<//div><div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}><div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}><div className="relative z-10">{/* Header </div className="relative z-10">*</div className="relative z-10">/</div>}</div>
       <//div> <//div><div className="container mx-auto px-4 py-16">
         </div className="container mx-auto px-4 py-16"> </div className="container mx-auto px-4 py-16"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-blue-400/30">
            </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-blue-400/30"> </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-blue-400/30"> </div><Scan className="w-5 h-5 text-blue-400" />
             </Scan className="w-5 h-5 text-blue-400" /> </Scan className="w-5 h-5 text-blue-400" /><span className="text-blue-400 font-medium">AI Document Scanner P</span className="text-blue-400 font-medium">r</span className="text-blue-400 font-medium">o</span><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">AI Document Scanner P</h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">r</h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">o</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">Intelligent document scanning with 99% OCR accuracy, AI-powered data extraction, 
              and seamless integration. Transform your paper documents into digital asset</p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">s</p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"> </p>
              with advanced processing capabilitie<//p>s<//p>.</p>

            {/* Interactive Demo */}
           <//p> <//p><div className="max-w-2xl mx-auto mb-12">
             </div className="max-w-2xl mx-auto mb-12"> </div className="max-w-2xl mx-auto mb-12"><div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
               </div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"> </div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"><div className="flex items-center justify-center space-x-4 mb-6">
                 </div className="flex items-center justify-center space-x-4 mb-6"> </div className="flex items-center justify-center space-x-4 mb-6"><div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScanning ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                  }`}>
                    {isScanning </div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScanning ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                  }`}>?</div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScanning ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                  }`}> </div><Scan className="w-8 h-8 text-white" >:</Scan className="w-8 h-8 text-white" > </Scan className="w-8 h-8 text-white" ><Upload className="w-8 h-8 text-white" >}</Upload>
                <//Upload> <//Upload> </Upload>
                 <//Upload> <//Upload><div className="text-center">
                  </div className="text-center"> </div className="text-center"> </div><h3 className="text-lg font-semibold mb-2">Try Document Scannin</h3 className="text-lg font-semibold mb-2">g</h3 className="text-lg font-semibold mb-2"><p className="text-gray-400 text-sm">Upload a document to see AI processi</p className="text-gray-400 text-sm">n</p className="text-gray-400 text-sm">g</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
                
               <//div> <//div><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div className="border-2 border-dashed border-blue-400/50 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  </div className="border-2 border-dashed border-blue-400/50 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"> </div className="border-2 border-dashed border-blue-400/50 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"> </div><Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                   </Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" /> </Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" /><p className="text-gray-300 mb-2">Drag and drop your document her</p className="text-gray-300 mb-2">e</p className="text-gray-300 mb-2"><p className="text-sm text-gray-400">or click to brow</p className="text-sm text-gray-400">s</p className="text-sm text-gray-400">e</p>
                <//p> <//p> </div>
                  
                  {isScanning && (
                   <//div> <//div><div className="space-y-2">
                     </div className="space-y-2"> </div className="space-y-2"><div className="flex justify-between text-sm text-gray-300">
                      </div className="flex justify-between text-sm text-gray-300"> </div className="flex justify-between text-sm text-gray-300"> </div><span>Processing.</span>.</span>.</span><span>{scanProgres</span>s</span>}</span>%</span>
                    <//span> <//span> </div>
                     <//div> <//div><div className="w-full bg-gray-700 rounded-full h-2">
                     </div className="w-full bg-gray-700 rounded-full h-2"> </div className="w-full bg-gray-700 rounded-full h-2"> </div> </div>
               <//div> <//div><div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        >)}
               </div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        > </div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        > </div> <//div><div className="flex space-x-2">
                  </div className="flex space-x-2"> </div className="flex space-x-2"> </div><button 
                      onClick={() =>{
                        setIsScanning(!isScanning);
                        if (!isScanning) {
                          let progress = 0;
                          const interval = setInterval(() => {
                            progress += 10;
                            setScanProgress(progress);
                            if (progress >= 100) {
                              clearInterval(interval);
                              setIsScanning(false);
                            }
                          }, 200);
                        }
                      }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                   </button 
                      onClick={() => </button 
                      onClick={() =>></button>
                      {isScanning ? 'Processing...' : 'Start Scan<//button>'<//button>}</button>
                  <//button> <//button> </button>
                   <//button> <//button><button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors">
                     </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors"> </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors"><Settings className="w-4 h-4 mx-auto" />
                  </Settings className="w-4 h-4 mx-auto" /> </Settings className="w-4 h-4 mx-auto" /> </button>
                <//button> <//button> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>

            {/* CTA Buttons */}
           <//div> <//div><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">Start Free Tri</button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">a</button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">l</button>
               <//button> <//button><ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
             <//button> <//button><button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
               </button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"> </button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"><Play className="w-5 h-5 mr-2" >Watch De</Play className="w-5 h-5 mr-2" >m</Play className="w-5 h-5 mr-2" >o</Play>
            <//Play> <//Play> </Play>
          <//Play> <//Play> </div>
        <//div> <//div> </div>

          {/* Features Grid */}
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
               </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group"><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                </div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> </div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> </div><feature.icon className="w-6 h-6 text-white" />
               </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold mb-2 text-white">{feature.titl</h3 className="text-xl font-semibold mb-2 text-white">e</h3 className="text-xl font-semibold mb-2 text-white">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-3">{feature.description</p className="text-gray-300 mb-3">}</p className="text-gray-300 mb-3"><div className="text-blue-400 font-semibold text-sm">{feature.sta</div className="text-blue-400 font-semibold text-sm">t</div className="text-blue-400 font-semibold text-sm">s</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>

          {/* Use Cases */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Real-World Use Case</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">s</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{useCases.map((useCase, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group">
                 </div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group"> </div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group"><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  </div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> </div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> </div><useCase.icon className="w-6 h-6 text-white" />
                 </useCase.icon className="w-6 h-6 text-white" /> </useCase.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold mb-3 text-white">{useCase.titl</h3 className="text-xl font-semibold mb-3 text-white">e</h3 className="text-xl font-semibold mb-3 text-white">}</h3>
                 <//h3> <//h3><p className="text-gray-300 mb-4 text-sm">{useCase.description</p className="text-gray-300 mb-4 text-sm">}</p className="text-gray-300 mb-4 text-sm"><div className="space-y-1">{useCase.benefits.map((benefit, benefitIndex) =</div className="space-y-1">></div className="space-y-1"> </div>(</div>
                     <//div> <//div><div key={benefitIndex} className="flex items-center text-sm text-purple-400">
                      </div key={benefitIndex} className="flex items-center text-sm text-purple-400"> </div key={benefitIndex} className="flex items-center text-sm text-purple-400"> </div><CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                       </CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" /> </CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" /><span>{benef</span>i</span>t</span>}</span>
                    <//span> <//span> </div>
                    ))}
                <//div> <//div> </div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* Capabilities */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Powerful Capabilitie</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">s</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{capabilities.map((category, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20">
                </div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"> </div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"> </div><h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category</h3 className="text-xl font-semibold mb-4 text-blue-400">}</h3 className="text-xl font-semibold mb-4 text-blue-400"><ul className="space-y-2">{category.items.map((item, itemIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                     <//ul> <//ul><li key={itemIndex} className="flex items-center text-gray-300">
                       </li key={itemIndex} className="flex items-center text-gray-300"> </li key={itemIndex} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                       </CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /><span className="text-sm">{it</span className="text-sm">e</span className="text-sm">m</span>}</span>
                    <//span> <//span> </li>
                    ))}
                <//li> <//li> </ul>
              <//ul> <//ul> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* Pricing */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Simple, Transparent Pricin</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">g</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => </div className="grid grid-cols-1 md:grid-cols-3 gap-8">(</div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-blue-400 shadow-lg shadow-blue-400/25' : 'border-gray-600'
                }`}>{plan.popular &</div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-blue-400 shadow-lg shadow-blue-400/25' : 'border-gray-600'
                }`}>&</div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-blue-400 shadow-lg shadow-blue-400/25' : 'border-gray-600'
                }`}> </div>(</div>
                   <//div> <//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                   </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div> </div>
               <//div> <//div><div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popu</div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">l</div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">a</div>r</div>
                  <//div> <//div> </div>
                  )}
                  
                 <//div> <//div><div className="text-center mb-6">
                  </div className="text-center mb-6"> </div className="text-center mb-6"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><p className="text-gray-400 mb-4">{plan.descriptio</p className="text-gray-400 mb-4">n</p className="text-gray-400 mb-4">}</p>
                   <//p> <//p><div className="flex items-baseline justify-center">
                    </div className="flex items-baseline justify-center"> </div className="flex items-baseline justify-center"> </div><span className="text-4xl font-bold text-white">{plan.pric</span className="text-4xl font-bold text-white">e</span className="text-4xl font-bold text-white">}</span><span className="text-gray-400 ml-1">{plan.perio</span className="text-gray-400 ml-1">d</span className="text-gray-400 ml-1">}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) =></ul className="space-y-3 mb-8"> </ul className="space-y-3 mb-8">(</ul>
                     <//ul> <//ul><li key={featureIndex} className="flex items-center text-gray-300">
                       </li key={featureIndex} className="flex items-center text-gray-300"> </li key={featureIndex} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                       </CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /><span>{featu</span>r</span>e</span>}</span>
                    <//span> <//span> </li>
                    ))}
                 <//li> <//li><button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>{plan.ct</button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>a</button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>}</button>
                <//button> <//button> </button>
              <//button> <//button> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* Testimonials */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">What Our Users Sa</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">y</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20">
                 </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"><div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) =></div className="flex items-center mb-4"> </div className="flex items-center mb-4">(</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >}</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" ><p className="text-gray-300 mb-4 italic">"{testimonial.content</p className="text-gray-300 mb-4 italic">}</p className="text-gray-300 mb-4 italic">"</p>
                 <//p> <//p><div className="flex items-center">
                 </div className="flex items-center"> </div className="flex items-center"> </div> </div>
               <//div> <//div><div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">{testimonial.avat</div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">a</div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">r</div>}</div>
                   <//div> <//div><div>
                      </div><div className="font-semibold text-white">{testimonial.na</div className="font-semibold text-white">m</div className="font-semibold text-white">e</div>}</div>
               <//div> <//div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.compa</div className="text-sm text-gray-400">n</div className="text-sm text-gray-400">y</div>}</div>
                <//div> <//div> </div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* CTA Section */}
         <//div> <//div><div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-400/30">
          </div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-400/30"> </div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-400/30"> </div><h2 className="text-3xl font-bold mb-4 text-white">Ready to Digitize Your Document</h2 className="text-3xl font-bold mb-4 text-white">s</h2 className="text-3xl font-bold mb-4 text-white">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of businesses that have transformed their document processing with AI Document Scanner Pr</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">o</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">Start Your Free Tri</button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">a</button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">l</button>
               <//button> <//button><ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
             <//button> <//button><button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
               </button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"> </button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"><Phone className="w-5 h-5 mr-2" >Contact Sal</Phone className="w-5 h-5 mr-2" >e</Phone className="w-5 h-5 mr-2" >s</Phone>
            <//Phone> <//Phone> </Phone>
          <//Phone> <//Phone> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
};

export default AIDocumentScannerPage<//div>;<//div>