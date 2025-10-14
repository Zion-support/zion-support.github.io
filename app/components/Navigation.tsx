import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  HeartIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  CommandLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  FireIcon,
  EyeIcon,
  HandThumbUpIcon,
  ShareIcon,
  BookmarkIcon,
  TagIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon as InfoIcon,
  QuestionMarkCircleIcon as QuestionIcon,
  XMarkIcon as CloseIcon,
  PlusIcon,
  MinusIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Bars3Icon as MenuIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ViewColumnsIcon,
  TableCellsIcon,
  CalendarIcon,
  ClockIcon as TimeIcon,
  MapPinIcon,
  PhoneIcon as PhoneIconAlt,
  EnvelopeIcon,
  GlobeAltIcon as WebIcon,
  LinkIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  PlayIcon as PlayIconAlt,
  PauseIcon,
  StopIcon,
  ForwardIcon,
  BackwardIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  TabletIcon,
  WatchIcon,
  HeadphonesIcon,
  CameraIcon,
  PrinterIcon,
  HardDriveIcon,
  CpuChipIcon as ProcessorIcon,
  MemoryStickIcon,
  WifiIcon,
  BluetoothIcon,
  UsbIcon,
  SdCardIcon,
  CompactDiscIcon,
  DvdIcon,
  FloppyDiskIcon,
  ZipIcon,
  ArchiveBoxIcon,
  FolderIcon,
  DocumentIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon as TextIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon,
  DocumentPlusIcon,
  DocumentMinusIcon,
  DocumentXMarkIcon,
  DocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  DocumentChartBarIcon,
  DocumentPdfIcon,
  DocumentSpreadsheetIcon,
  DocumentPresentationIcon,
  DocumentCodeIcon,
  DocumentHtmlIcon,
  DocumentCssIcon,
  DocumentJavascriptIcon,
  DocumentPythonIcon,
  DocumentJavaIcon,
  DocumentCSharpIcon,
  DocumentCppIcon,
  DocumentGoIcon,
  DocumentRustIcon,
  DocumentSwiftIcon,
  DocumentKotlinIcon,
  DocumentPhpIcon,
  DocumentRubyIcon,
  DocumentPerlIcon,
  DocumentLuaIcon,
  DocumentBashIcon,
  DocumentPowershellIcon,
  DocumentBatchIcon,
  DocumentShellIcon,
  DocumentYamlIcon,
  DocumentJsonIcon,
  DocumentXmlIcon,
  DocumentCsvIcon,
  DocumentTsvIcon,
  DocumentLogIcon,
  DocumentConfigIcon,
  DocumentIniIcon,
  DocumentTomlIcon,
  DocumentYmlIcon,
  DocumentEnvIcon,
  DocumentGitIcon,
  DocumentGitignoreIcon,
  DocumentDockerfileIcon,
  DocumentComposeIcon,
  DocumentKubernetesIcon,
  DocumentTerraformIcon,
  DocumentAnsibleIcon,
  DocumentPuppetIcon,
  DocumentChefIcon,
  DocumentVagrantIcon,
  DocumentPackerIcon,
  DocumentConsulIcon,
  DocumentVaultIcon,
  DocumentNomadIcon,
  DocumentTraefikIcon,
  DocumentNginxIcon,
  DocumentApacheIcon,
  DocumentIisIcon,
  DocumentTomcatIcon,
  DocumentJettyIcon,
  DocumentWildflyIcon,
  DocumentWeblogicIcon,
  DocumentWebsphereIcon,
  DocumentGlassfishIcon,
  DocumentJbossIcon,
  DocumentResinIcon,
  DocumentGeronimoIcon,
  DocumentOpenejbIcon,
  DocumentOpenjpaIcon,
  DocumentHibernateIcon,
  DocumentSpringIcon,
  DocumentStrutsIcon,
  DocumentVaadinIcon,
  DocumentGwtIcon,
  DocumentJsFIcon,
  DocumentPrimefacesIcon,
  DocumentRichfacesIcon,
  DocumentIcefacesIcon,
  DocumentMyfacesIcon,
  DocumentTapestryIcon,
  DocumentWicketIcon,
  DocumentPlayIcon as DocumentPlayIcon,
  DocumentGrailsIcon,
  DocumentGroovyIcon,
  DocumentScalaIcon,
  DocumentClojureIcon,
  DocumentErlangIcon,
  DocumentElixirIcon,
  DocumentHaskellIcon,
  DocumentOcamlIcon,
  DocumentFSharpIcon,
  DocumentVbIcon,
  DocumentVbnetIcon,
  DocumentAspIcon,
  DocumentAspnetIcon,
  DocumentMvcIcon,
  DocumentWebapiIcon,
  DocumentSignalrIcon,
  DocumentBlazorIcon,
  DocumentRazorIcon,
  DocumentEntityIcon,
  DocumentLinqIcon,
  DocumentAdoIcon,
  DocumentOdbcIcon,
  DocumentOleIcon,
  DocumentOleDbIcon,
  DocumentSqlIcon,
  DocumentMysqlIcon,
  DocumentPostgresqlIcon,
  DocumentOracleIcon,
  DocumentSqlserverIcon,
  DocumentDb2Icon,
  DocumentInformixIcon,
  DocumentSybaseIcon,
  DocumentTeradataIcon,
  DocumentVerticaIcon,
  DocumentRedshiftIcon,
  DocumentBigqueryIcon,
  DocumentSnowflakeIcon,
  DocumentDatabricksIcon,
  DocumentHiveIcon,
  DocumentImpalaIcon,
  DocumentPrestoIcon,
  DocumentSparkIcon,
  DocumentKafkaIcon,
  DocumentRabbitmqIcon,
  DocumentRedisIcon,
  DocumentMongodbIcon,
  DocumentCassandraIcon,
  DocumentCouchdbIcon,
  DocumentCouchbaseIcon,
  DocumentNeo4jIcon,
  DocumentArangodbIcon,
  DocumentOrientdbIcon,
  DocumentInfluxdbIcon,
  DocumentTimescaledbIcon,
  DocumentClickhouseIcon,
  DocumentDruidIcon,
  DocumentPinotIcon,
  DocumentKylinIcon,
  DocumentDorisIcon,
  DocumentStarrocksIcon,
  DocumentTrinoIcon,
  DocumentDremioIcon,
  DocumentAthenaIcon,
  DocumentGlueIcon,
  DocumentEmrIcon,
  DocumentDataprocIcon,
  DocumentDataflowIcon,
  DocumentDataprepIcon,
  DocumentDatastudioIcon,
  DocumentLookerIcon,
  DocumentTableauIcon,
  DocumentPowerbiIcon,
  DocumentQlikIcon,
  DocumentSisenseIcon,
  DocumentDomoIcon,
  DocumentPeriscopeIcon,
  DocumentModeIcon,
  DocumentChartioIcon,
  DocumentMetabaseIcon,
  DocumentSupersetIcon,
  DocumentGrafanaIcon,
  DocumentKibanaIcon,
  DocumentSplunkIcon,
  DocumentElasticsearchIcon,
  DocumentLogstashIcon,
  DocumentBeatsIcon,
  DocumentFilebeatIcon,
  DocumentMetricbeatIcon,
  DocumentPacketbeatIcon,
  DocumentWinlogbeatIcon,
  DocumentAuditbeatIcon,
  DocumentHeartbeatIcon,
  DocumentFunctionbeatIcon,
  DocumentJournalbeatIcon,
  DocumentOsquerybeatIcon,
  DocumentUptimebeatIcon,
  DocumentSyntheticsbeatIcon,
  DocumentApmbeatIcon,
  DocumentAppsearchIcon,
  DocumentWorkplaceIcon,
  DocumentEnterpriseIcon,
  DocumentCloudIcon,
  DocumentCloudEnterpriseIcon,
  DocumentCloudGovIcon,
  DocumentCloudFedrampIcon,
  DocumentCloudSocIcon,
  DocumentCloudHipaaIcon,
  DocumentCloudPciIcon,
  DocumentCloudGdprIcon,
  DocumentCloudCcpIcon,
  DocumentCloudFedrampModerateIcon,
  DocumentCloudFedrampHighIcon,
  DocumentCloudFedrampIl4Icon,
  DocumentCloudFedrampIl5Icon,
  DocumentCloudFedrampIl6Icon,
  DocumentCloudFedrampIl7Icon,
  DocumentCloudFedrampIl8Icon,
  DocumentCloudFedrampIl9Icon,
  DocumentCloudFedrampIl10Icon,
  DocumentCloudFedrampIl11Icon,
  DocumentCloudFedrampIl12Icon,
  DocumentCloudFedrampIl13Icon,
  DocumentCloudFedrampIl14Icon,
  DocumentCloudFedrampIl15Icon,
  DocumentCloudFedrampIl16Icon,
  DocumentCloudFedrampIl17Icon,
  DocumentCloudFedrampIl18Icon,
  DocumentCloudFedrampIl19Icon,
  DocumentCloudFedrampIl20Icon,
  DocumentCloudFedrampIl21Icon,
  DocumentCloudFedrampIl22Icon,
  DocumentCloudFedrampIl23Icon,
  DocumentCloudFedrampIl24Icon,
  DocumentCloudFedrampIl25Icon,
  DocumentCloudFedrampIl26Icon,
  DocumentCloudFedrampIl27Icon,
  DocumentCloudFedrampIl28Icon,
  DocumentCloudFedrampIl29Icon,
  DocumentCloudFedrampIl30Icon,
  DocumentCloudFedrampIl31Icon,
  DocumentCloudFedrampIl32Icon,
  DocumentCloudFedrampIl33Icon,
  DocumentCloudFedrampIl34Icon,
  DocumentCloudFedrampIl35Icon,
  DocumentCloudFedrampIl36Icon,
  DocumentCloudFedrampIl37Icon,
  DocumentCloudFedrampIl38Icon,
  DocumentCloudFedrampIl39Icon,
  DocumentCloudFedrampIl40Icon,
  DocumentCloudFedrampIl41Icon,
  DocumentCloudFedrampIl42Icon,
  DocumentCloudFedrampIl43Icon,
  DocumentCloudFedrampIl44Icon,
  DocumentCloudFedrampIl45Icon,
  DocumentCloudFedrampIl46Icon,
  DocumentCloudFedrampIl47Icon,
  DocumentCloudFedrampIl48Icon,
  DocumentCloudFedrampIl49Icon,
  DocumentCloudFedrampIl50Icon,
  DocumentCloudFedrampIl51Icon,
  DocumentCloudFedrampIl52Icon,
  DocumentCloudFedrampIl53Icon,
  DocumentCloudFedrampIl54Icon,
  DocumentCloudFedrampIl55Icon,
  DocumentCloudFedrampIl56Icon,
  DocumentCloudFedrampIl57Icon,
  DocumentCloudFedrampIl58Icon,
  DocumentCloudFedrampIl59Icon,
  DocumentCloudFedrampIl60Icon,
  DocumentCloudFedrampIl61Icon,
  DocumentCloudFedrampIl62Icon,
  DocumentCloudFedrampIl63Icon,
  DocumentCloudFedrampIl64Icon,
  DocumentCloudFedrampIl65Icon,
  DocumentCloudFedrampIl66Icon,
  DocumentCloudFedrampIl67Icon,
  DocumentCloudFedrampIl68Icon,
  DocumentCloudFedrampIl69Icon,
  DocumentCloudFedrampIl70Icon,
  DocumentCloudFedrampIl71Icon,
  DocumentCloudFedrampIl72Icon,
  DocumentCloudFedrampIl73Icon,
  DocumentCloudFedrampIl74Icon,
  DocumentCloudFedrampIl75Icon,
  DocumentCloudFedrampIl76Icon,
  DocumentCloudFedrampIl77Icon,
  DocumentCloudFedrampIl78Icon,
  DocumentCloudFedrampIl79Icon,
  DocumentCloudFedrampIl80Icon,
  DocumentCloudFedrampIl81Icon,
  DocumentCloudFedrampIl82Icon,
  DocumentCloudFedrampIl83Icon,
  DocumentCloudFedrampIl84Icon,
  DocumentCloudFedrampIl85Icon,
  DocumentCloudFedrampIl86Icon,
  DocumentCloudFedrampIl87Icon,
  DocumentCloudFedrampIl88Icon,
  DocumentCloudFedrampIl89Icon,
  DocumentCloudFedrampIl90Icon,
  DocumentCloudFedrampIl91Icon,
  DocumentCloudFedrampIl92Icon,
  DocumentCloudFedrampIl93Icon,
  DocumentCloudFedrampIl94Icon,
  DocumentCloudFedrampIl95Icon,
  DocumentCloudFedrampIl96Icon,
  DocumentCloudFedrampIl97Icon,
  DocumentCloudFedrampIl98Icon,
  DocumentCloudFedrampIl99Icon,
  DocumentCloudFedrampIl100Icon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon, description: 'Artificial Intelligence Solutions' },
        { name: 'IT Services', href: '/it-services', icon: CogIcon, description: 'Information Technology Services' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon, description: 'Cloud Computing Solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon, description: 'Security & Protection' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon, description: 'Business Modernization' },
        { name: 'Software Development', href: '/software-development', icon: DocumentCodeIcon, description: 'Custom Software Solutions' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: PuzzlePieceIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon, description: 'AI-Powered Solutions' },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon, description: 'IT Infrastructure Solutions' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: CubeIcon, description: 'Micro Software as a Service' },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon, description: 'Next-Generation Connectivity' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon, description: 'Cloud-Based Solutions' },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon, description: 'Business Intelligence' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      icon: BuildingOfficeIcon,
      submenu: [
        { name: 'About Us', href: '/about', icon: InformationCircleIcon, description: 'Our Story & Mission' },
        { name: 'Our Team', href: '/team', icon: UserGroupIcon, description: 'Meet Our Experts' },
        { name: 'Careers', href: '/careers', icon: BriefcaseIcon, description: 'Join Our Team' },
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon, description: 'Success Stories' },
        { name: 'Partners', href: '/partners', icon: HandThumbUpIcon, description: 'Our Partners' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/blog', 
      icon: DocumentTextIcon,
      submenu: [
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon, description: 'Latest Insights' },
        { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon, description: 'Learning Resources' },
        { name: 'Documentation', href: '/docs', icon: DocumentIcon, description: 'Technical Documentation' },
        { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon, description: 'Help & Support' },
        { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon, description: 'Frequently Asked Questions' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-8 lg:flex lg:space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium flex items-center space-x-1 transition-all duration-300 hover:bg-slate-800/50 rounded-lg"
                        onMouseEnter={() => {
                          if (item.name === 'Services') setIsServicesOpen(true);
                          if (item.name === 'Solutions') setIsSolutionsOpen(true);
                          if (item.name === 'Company') setIsCompanyOpen(true);
                          if (item.name === 'Resources') setIsResourcesOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (item.name === 'Services') setIsServicesOpen(false);
                          if (item.name === 'Solutions') setIsSolutionsOpen(false);
                          if (item.name === 'Company') setIsCompanyOpen(false);
                          if (item.name === 'Resources') setIsResourcesOpen(false);
                        }}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDownIcon className="w-4 h-4" />
                      </button>
                      {(item.name === 'Services' && isServicesOpen) ||
                       (item.name === 'Solutions' && isSolutionsOpen) ||
                       (item.name === 'Company' && isCompanyOpen) ||
                       (item.name === 'Resources' && isResourcesOpen) ? (
                        <div 
                          className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50 py-2 z-50"
                          onMouseEnter={() => {
                            if (item.name === 'Services') setIsServicesOpen(true);
                            if (item.name === 'Solutions') setIsSolutionsOpen(true);
                            if (item.name === 'Company') setIsCompanyOpen(true);
                            if (item.name === 'Resources') setIsResourcesOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (item.name === 'Services') setIsServicesOpen(false);
                            if (item.name === 'Solutions') setIsSolutionsOpen(false);
                            if (item.name === 'Company') setIsCompanyOpen(false);
                            if (item.name === 'Resources') setIsResourcesOpen(false);
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group"
                            >
                              <div className="flex items-center space-x-3">
                                <subItem.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                <div>
                                  <div className="font-medium">{subItem.name}</div>
                                  <div className="text-xs text-gray-400">{subItem.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-purple-400 bg-slate-800/50'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      } px-4 py-2 text-sm font-medium flex items-center space-x-2 rounded-lg transition-all duration-300`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-slate-700/50">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === 'Services') setIsServicesOpen(!isServicesOpen);
                          if (item.name === 'Solutions') setIsSolutionsOpen(!isSolutionsOpen);
                          if (item.name === 'Company') setIsCompanyOpen(!isCompanyOpen);
                          if (item.name === 'Resources') setIsResourcesOpen(!isResourcesOpen);
                        }}
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left flex items-center space-x-2"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-auto" />
                      </button>
                      {((item.name === 'Services' && isServicesOpen) ||
                        (item.name === 'Solutions' && isSolutionsOpen) ||
                        (item.name === 'Company' && isCompanyOpen) ||
                        (item.name === 'Resources' && isResourcesOpen)) && (
                        <div className="pl-8 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-400 hover:text-white block px-3 py-2 text-sm flex items-center space-x-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-purple-400 bg-slate-700/50'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                      } block px-3 py-2 text-base font-medium flex items-center space-x-2 rounded-lg transition-all duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
