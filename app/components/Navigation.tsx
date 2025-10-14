import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Home } from 'lucide-react';
import { Code } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Star } from 'lucide-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Database } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Search } from 'lucide-react';
import { Filter } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';
import { Stop } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { VolumeX } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Flag } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { Info } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { User } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Key } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Package } from 'lucide-react';
import { Truck } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Timer } from 'lucide-react';
import { Bell } from 'lucide-react';
import { BellOff } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Type } from 'lucide-react';
import { Bold } from 'lucide-react';
import { Italic } from 'lucide-react';
import { Underline } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import { AlignCenter } from 'lucide-react';
import { AlignRight } from 'lucide-react';
import { List } from 'lucide-react';
import { Grid } from 'lucide-react';
import { Layout } from 'lucide-react';
import { Sidebar } from 'lucide-react';
import { Maximize } from 'lucide-react';
import { Minimize } from 'lucide-react';
import { Move } from 'lucide-react';
import { RotateCw } from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { FlipHorizontal } from 'lucide-react';
import { FlipVertical } from 'lucide-react';
import { Crop } from 'lucide-react';
import { Scissors } from 'lucide-react';
import { Copy } from 'lucide-react';
import { Paste } from 'lucide-react';
import { Cut } from 'lucide-react';
import { Undo } from 'lucide-react';
import { Redo } from 'lucide-react';
import { Save } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Archive } from 'lucide-react';
import { Folder } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { File } from 'lucide-react';
import { FileImage } from 'lucide-react';
import { FileVideo } from 'lucide-react';
import { FileAudio } from 'lucide-react';
import { FileCode } from 'lucide-react';
import { FileText } from 'lucide-react';
import { FileSpreadsheet } from 'lucide-react';
import { FilePdf } from 'lucide-react';
import { FileZip } from 'lucide-react';
import { FileCheck } from 'lucide-react';
import { FileX } from 'lucide-react';
import { FilePlus } from 'lucide-react';
import { FileMinus } from 'lucide-react';
import { FileEdit } from 'lucide-react';
import { FileSearch } from 'lucide-react';
import { FileDownload } from 'lucide-react';
import { FileUpload } from 'lucide-react';
import { FileLock } from 'lucide-react';
import { FileUnlock } from 'lucide-react';
import { FileShield } from 'lucide-react';
import { FileWarning } from 'lucide-react';
import { FileAlert } from 'lucide-react';
import { FileInfo } from 'lucide-react';
import { FileQuestion } from 'lucide-react';
import { FileHeart } from 'lucide-react';
import { FileStar } from 'lucide-react';
import { FileBookmark } from 'lucide-react';
import { FileFlag } from 'lucide-react';
import { FileTag } from 'lucide-react';
import { FileLabel } from 'lucide-react';
import { FileBadge } from 'lucide-react';
import { FileAward } from 'lucide-react';
import { FileGift } from 'lucide-react';
import { FileMusic } from 'lucide-react';
import { FilePlay } from 'lucide-react';
import { FilePause } from 'lucide-react';
import { FileStop } from 'lucide-react';
import { FileRecord } from 'lucide-react';
import { FileMic } from 'lucide-react';
import { FileCamera } from 'lucide-react';
import { FileScan } from 'lucide-react';
import { FileBarChart } from 'lucide-react';
import { FilePieChart } from 'lucide-react';
import { FileLineChart } from 'lucide-react';
import { FileAreaChart } from 'lucide-react';
import { FileRadarChart } from 'lucide-react';
import { FileScatterChart } from 'lucide-react';
import { FileBubbleChart } from 'lucide-react';
import { FileDoughnutChart } from 'lucide-react';
import { FilePolarChart } from 'lucide-react';
import { FileTreemapChart } from 'lucide-react';
import { FileSunburstChart } from 'lucide-react';
import { FileSankeyChart } from 'lucide-react';
import { FileFunnelChart } from 'lucide-react';
import { FileGaugeChart } from 'lucide-react';
import { FileHeatmapChart } from 'lucide-react';
import { FileWaterfallChart } from 'lucide-react';
import { FileCandlestickChart } from 'lucide-react';
import { FileBoxPlotChart } from 'lucide-react';
import { FileViolinChart } from 'lucide-react';
import { FileHistogramChart } from 'lucide-react';
import { FileDensityChart } from 'lucide-react';
import { FileContourChart } from 'lucide-react';
import { FileSurfaceChart } from 'lucide-react';
import { FileMeshChart } from 'lucide-react';
import { FileVolumeChart } from 'lucide-react';
import { FileStockChart } from 'lucide-react';
import { FileCryptoChart } from 'lucide-react';
import { FileForexChart } from 'lucide-react';
import { FileCommodityChart } from 'lucide-react';
import { FileBondChart } from 'lucide-react';
import { FileDerivativeChart } from 'lucide-react';
import { FileOptionChart } from 'lucide-react';
import { FileFutureChart } from 'lucide-react';
import { FileSwapChart } from 'lucide-react';
import { FileForwardChart } from 'lucide-react';
import { FileInterestRateChart } from 'lucide-react';
import { FileYieldChart } from 'lucide-react';
import { FileCreditChart } from 'lucide-react';
import { FileDebtChart } from 'lucide-react';
import { FileEquityChart } from 'lucide-react';
import { FileMutualFundChart } from 'lucide-react';
import { FileETFChart } from 'lucide-react';
import { FileHedgeFundChart } from 'lucide-react';
import { FilePrivateEquityChart } from 'lucide-react';
import { FileVentureCapitalChart } from 'lucide-react';
import { FileRealEstateChart } from 'lucide-react';
import { FileREITChart } from 'lucide-react';
import { FileMLPChart } from 'lucide-react';
import { FileBDCChart } from 'lucide-react';
import { FileCEFChart } from 'lucide-react';
import { FileUITChart } from 'lucide-react';
import { FileSPACChart } from 'lucide-react';
import { FileIPOChart } from 'lucide-react';
import { FileMergerChart } from 'lucide-react';
import { FileAcquisitionChart } from 'lucide-react';
import { FileDivestitureChart } from 'lucide-react';
import { FileSpinOffChart } from 'lucide-react';
import { FileSplitChart } from 'lucide-react';
import { FileReverseSplitChart } from 'lucide-react';
import { FileDividendChart } from 'lucide-react';
import { FileStockSplitChart } from 'lucide-react';
import { FileRightsOfferingChart } from 'lucide-react';
import { FileWarrantChart } from 'lucide-react';
import { FileConvertibleChart } from 'lucide-react';
import { FilePreferredChart } from 'lucide-react';
import { FileCommonChart } from 'lucide-react';
import { FileClassAChart } from 'lucide-react';
import { FileClassBChart } from 'lucide-react';
import { FileClassCChart } from 'lucide-react';
import { FileClassDChart } from 'lucide-react';
import { FileClassEChart } from 'lucide-react';
import { FileClassFChart } from 'lucide-react';
import { FileClassGChart } from 'lucide-react';
import { FileClassHChart } from 'lucide-react';
import { FileClassIChart } from 'lucide-react';
import { FileClassJChart } from 'lucide-react';
import { FileClassKChart } from 'lucide-react';
import { FileClassLChart } from 'lucide-react';
import { FileClassMChart } from 'lucide-react';
import { FileClassNChart } from 'lucide-react';
import { FileClassOChart } from 'lucide-react';
import { FileClassPChart } from 'lucide-react';
import { FileClassQChart } from 'lucide-react';
import { FileClassRChart } from 'lucide-react';
import { FileClassSChart } from 'lucide-react';
import { FileClassTChart } from 'lucide-react';
import { FileClassUChart } from 'lucide-react';
import { FileClassVChart } from 'lucide-react';
import { FileClassWChart } from 'lucide-react';
import { FileClassXChart } from 'lucide-react';
import { FileClassYChart } from 'lucide-react';
import { FileClassZChart } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const location = useLocation();
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', href: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: <PieChart className="w-4 h-4" /> },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', href: '/ai-marketing', icon: <Target className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', href: '/web-development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Mobile Development', href: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', href: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> }
  ];

  const fiveGServices = [
    { name: '5G Implementation', href: '/5g-implementation', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Smart City', href: '/5g-smart-city-solutions', icon: <Building2 className="w-4 h-4" /> }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* AI Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleAIServices}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isAIServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )})}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Code className="w-4 h-4" />
                  <span>IT Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isITServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isMicroSaasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5G Solutions Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggle5GServices}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <Wifi className="w-4 h-4" />
                  <span>5G Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {is5GServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )};

export default Navigation;
