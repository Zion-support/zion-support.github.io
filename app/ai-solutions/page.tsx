'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  ShareIcon,
  EnvelopeIcon,
  ArchiveBoxIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CogIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  StarIcon,
  HeartIcon,
  HandThumbUpIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon as CloseIcon,
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
  EnvelopeIcon as EmailIcon,
  GlobeAltIcon as WebIcon,
  LinkIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  PlayIcon,
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
  ArchiveBoxIcon as ArchiveIcon,
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
  DocumentPlayIcon,
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

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      icon: DocumentTextIcon,
      price: '$99/month',
      features: [
        'Natural language processing',
        'Multi-language content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Content templates and styles',
        'Plagiarism detection',
        'Content scheduling',
        'Performance analytics'
      ],
      category: 'Content & Marketing',
      color: 'from-purple-500 to-pink-500',
      href: '/ai-content-generation',
      popular: true,
      useCases: ['Blog writing', 'Social media content', 'Marketing copy', 'Technical documentation']
    },
    {
      id: 'ai-chatbot-development',
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI solutions for customer support, lead generation, and business automation.',
      icon: ChatBubbleLeftRightIcon,
      price: '$149/month',
      features: [
        'Natural language understanding',
        'Multi-channel deployment',
        'Custom training and fine-tuning',
        'Integration with CRM systems',
        'Sentiment analysis',
        'Multi-language support',
        'Analytics and reporting',
        '24/7 availability'
      ],
      category: 'Customer Service',
      color: 'from-green-500 to-emerald-500',
      href: '/ai-chatbot-development',
      popular: true,
      useCases: ['Customer support', 'Lead qualification', 'FAQ automation', 'Sales assistance']
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Machine learning-powered data analysis and business intelligence solutions for data-driven decision making.',
      icon: ChartBarIcon,
      price: '$199/month',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Custom ML models',
        'Data visualization',
        'Automated reporting',
        'Anomaly detection',
        'Trend analysis',
        'ROI optimization'
      ],
      category: 'Analytics & BI',
      color: 'from-cyan-500 to-blue-500',
      href: '/ai-data-analytics',
      popular: false,
      useCases: ['Business intelligence', 'Predictive modeling', 'Risk assessment', 'Performance optimization']
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis solutions for object detection, facial recognition, and visual content processing.',
      icon: EyeIcon,
      price: '$249/month',
      features: [
        'Object detection and recognition',
        'Facial recognition systems',
        'Image classification',
        'Video analysis',
        'OCR text extraction',
        'Quality control automation',
        'Real-time processing',
        'Custom model training'
      ],
      category: 'Computer Vision',
      color: 'from-indigo-500 to-purple-500',
      href: '/ai-computer-vision',
      popular: false,
      useCases: ['Security systems', 'Quality control', 'Medical imaging', 'Autonomous vehicles']
    },
    {
      id: 'ai-process-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions that use AI to streamline business processes and reduce manual work.',
      icon: CogIcon,
      price: '$179/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Data entry automation',
        'Decision making automation',
        'Integration capabilities',
        'Error reduction',
        'Cost optimization'
      ],
      category: 'Automation',
      color: 'from-yellow-500 to-orange-500',
      href: '/ai-process-automation',
      popular: true,
      useCases: ['Document processing', 'Email management', 'Data entry', 'Workflow optimization']
    },
    {
      id: 'ai-predictive-modeling',
      title: 'AI Predictive Modeling',
      description: 'Machine learning models for forecasting, risk assessment, and predictive analytics across various industries.',
      icon: LightBulbIcon,
      price: '$299/month',
      features: [
        'Time series forecasting',
        'Risk assessment models',
        'Demand forecasting',
        'Customer behavior prediction',
        'Market trend analysis',
        'Custom algorithm development',
        'Model validation and testing',
        'Continuous learning'
      ],
      category: 'Predictive Analytics',
      color: 'from-red-500 to-pink-500',
      href: '/ai-predictive-modeling',
      popular: false,
      useCases: ['Financial forecasting', 'Supply chain optimization', 'Customer churn prediction', 'Market analysis']
    },
    {
      id: 'ai-natural-language-processing',
      title: 'AI Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and text summarization.',
      icon: GlobeAltIcon,
      price: '$129/month',
      features: [
        'Text analysis and classification',
        'Sentiment analysis',
        'Language translation',
        'Text summarization',
        'Named entity recognition',
        'Topic modeling',
        'Text generation',
        'Multi-language support'
      ],
      category: 'NLP',
      color: 'from-teal-500 to-green-500',
      href: '/ai-natural-language-processing',
      popular: true,
      useCases: ['Text analysis', 'Language translation', 'Content moderation', 'Customer feedback analysis']
    },
    {
      id: 'ai-recommendation-systems',
      title: 'AI Recommendation Systems',
      description: 'Personalized recommendation engines for e-commerce, content platforms, and service recommendations.',
      icon: StarIcon,
      price: '$159/month',
      features: [
        'Personalized recommendations',
        'Collaborative filtering',
        'Content-based filtering',
        'Real-time recommendations',
        'A/B testing capabilities',
        'Performance metrics',
        'Scalable architecture',
        'Custom algorithms'
      ],
      category: 'Recommendation Systems',
      color: 'from-pink-500 to-rose-500',
      href: '/ai-recommendation-systems',
      popular: false,
      useCases: ['E-commerce recommendations', 'Content suggestions', 'Product recommendations', 'Service matching']
    },
    {
      id: 'ai-speech-recognition',
      title: 'AI Speech Recognition',
      description: 'Advanced speech-to-text and voice recognition solutions for transcription, voice commands, and audio analysis.',
      icon: MicrophoneIcon,
      price: '$189/month',
      features: [
        'Speech-to-text conversion',
        'Voice command recognition',
        'Multi-language support',
        'Noise reduction',
        'Real-time processing',
        'Speaker identification',
        'Audio transcription',
        'Voice analytics'
      ],
      category: 'Speech & Audio',
      color: 'from-blue-500 to-cyan-500',
      href: '/ai-speech-recognition',
      popular: false,
      useCases: ['Voice assistants', 'Transcription services', 'Voice commands', 'Audio analysis']
    },
    {
      id: 'ai-fraud-detection',
      title: 'AI Fraud Detection',
      description: 'Machine learning-powered fraud detection and prevention systems for financial transactions and security.',
      icon: ShieldCheckIcon,
      price: '$349/month',
      features: [
        'Real-time fraud detection',
        'Pattern recognition',
        'Anomaly detection',
        'Risk scoring',
        'Transaction monitoring',
        'Behavioral analysis',
        'False positive reduction',
        'Compliance reporting'
      ],
      category: 'Security & Fraud',
      color: 'from-red-500 to-orange-500',
      href: '/ai-fraud-detection',
      popular: true,
      useCases: ['Payment fraud detection', 'Identity verification', 'Transaction monitoring', 'Risk assessment']
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management solutions using AI for demand forecasting, inventory optimization, and logistics.',
      icon: TruckIcon,
      price: '$399/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Real-time monitoring',
        'Predictive maintenance'
      ],
      category: 'Supply Chain',
      color: 'from-green-500 to-teal-500',
      href: '/ai-supply-chain-optimization',
      popular: false,
      useCases: ['Inventory management', 'Logistics optimization', 'Demand planning', 'Supplier selection']
    },
    {
      id: 'ai-healthcare-solutions',
      title: 'AI Healthcare Solutions',
      description: 'AI-powered healthcare solutions for medical diagnosis, drug discovery, patient monitoring, and treatment optimization.',
      icon: HeartIcon,
      price: '$499/month',
      features: [
        'Medical image analysis',
        'Drug discovery assistance',
        'Patient monitoring',
        'Diagnostic support',
        'Treatment optimization',
        'Clinical decision support',
        'Health data analysis',
        'Compliance management'
      ],
      category: 'Healthcare',
      color: 'from-red-500 to-pink-500',
      href: '/ai-healthcare-solutions',
      popular: false,
      useCases: ['Medical diagnosis', 'Drug discovery', 'Patient monitoring', 'Treatment planning']
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data requirements.',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Deep Learning',
      description: 'Advanced neural networks for complex pattern recognition and decision making.',
      icon: SparklesIcon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, language understanding, and generation capabilities.',
      icon: DocumentTextIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis, object detection, and visual recognition.',
      icon: EyeIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecasting and predictive modeling for business intelligence.',
      icon: ChartBarIcon,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Automation',
      description: 'Intelligent process automation and workflow optimization.',
      icon: CogIcon,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, NLP, computer vision, predictive analytics, AI consulting" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI-powered innovations that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest AI technologies to deliver innovative solutions across various domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400 text-purple-300 py-3 px-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get AI Consultation
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;
