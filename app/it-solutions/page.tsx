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

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure setup, migration, and management services for AWS, Azure, and Google Cloud.',
      icon: CloudIcon,
      price: '$199/month',
      features: [
        'Cloud architecture design',
        'Migration and deployment',
        'Auto-scaling configuration',
        'Load balancing setup',
        'Disaster recovery planning',
        'Cost optimization',
        'Security implementation',
        '24/7 monitoring'
      ],
      category: 'Cloud Computing',
      color: 'from-blue-500 to-cyan-500',
      href: '/cloud-infrastructure',
      popular: true,
      useCases: ['Cloud migration', 'Infrastructure setup', 'Scalability planning', 'Cost optimization']
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services including threat detection, vulnerability assessment, and security compliance.',
      icon: ShieldCheckIcon,
      price: '$299/month',
      features: [
        'Security assessment',
        'Threat detection and response',
        'Vulnerability scanning',
        'Penetration testing',
        'Security compliance (SOC2, ISO27001)',
        'Incident response planning',
        'Security training',
        'Ongoing monitoring'
      ],
      category: 'Security',
      color: 'from-red-500 to-orange-500',
      href: '/cybersecurity-solutions',
      popular: true,
      useCases: ['Security audit', 'Threat protection', 'Compliance management', 'Incident response']
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management solutions for enterprise-grade connectivity.',
      icon: WifiIcon,
      price: '$149/month',
      features: [
        'Network design and planning',
        'Router and switch configuration',
        'Wireless network setup',
        'VPN implementation',
        'Network monitoring',
        'Performance optimization',
        'Security configuration',
        'Troubleshooting support'
      ],
      category: 'Networking',
      color: 'from-green-500 to-emerald-500',
      href: '/network-infrastructure',
      popular: false,
      useCases: ['Network setup', 'Performance optimization', 'Security configuration', 'Troubleshooting']
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Comprehensive database administration, optimization, and migration services for all major database systems.',
      icon: DocumentCodeIcon,
      price: '$179/month',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Migration services',
        'Security hardening',
        'Monitoring and maintenance',
        'Query optimization',
        'Disaster recovery'
      ],
      category: 'Database',
      color: 'from-purple-500 to-pink-500',
      href: '/database-management',
      popular: false,
      useCases: ['Database optimization', 'Migration planning', 'Performance tuning', 'Backup strategies']
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Complete DevOps implementation including CI/CD pipelines, infrastructure as code, and automated deployment.',
      icon: CogIcon,
      price: '$249/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Automated testing',
        'Deployment automation',
        'Monitoring and logging',
        'Security integration',
        'Performance optimization'
      ],
      category: 'DevOps',
      color: 'from-yellow-500 to-orange-500',
      href: '/devops-automation',
      popular: true,
      useCases: ['CI/CD implementation', 'Infrastructure automation', 'Deployment optimization', 'Monitoring setup']
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting Services',
      description: 'Strategic IT consulting to help align technology with business goals and optimize IT investments.',
      icon: LightBulbIcon,
      price: '$199/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Cost-benefit analysis',
        'Vendor evaluation',
        'Implementation planning',
        'Change management',
        'Ongoing support'
      ],
      category: 'Consulting',
      color: 'from-indigo-500 to-purple-500',
      href: '/it-consulting',
      popular: false,
      useCases: ['Strategic planning', 'Technology assessment', 'Digital transformation', 'Vendor selection']
    },
    {
      id: 'help-desk-support',
      title: 'Help Desk Support',
      description: '24/7 technical support and help desk services for end-users and IT infrastructure issues.',
      icon: ChatBubbleLeftRightIcon,
      price: '$99/month',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Issue tracking and resolution',
        'Knowledge base management',
        'User training',
        'Hardware support',
        'Software installation',
        'Performance monitoring'
      ],
      category: 'Support',
      color: 'from-teal-500 to-green-500',
      href: '/help-desk-support',
      popular: true,
      useCases: ['Technical support', 'Issue resolution', 'User training', 'Hardware maintenance']
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup, disaster recovery, and business continuity solutions.',
      icon: ArchiveBoxIcon,
      price: '$129/month',
      features: [
        'Automated backup solutions',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Compliance management',
        'Cloud backup integration',
        'Ransomware protection',
        'Business continuity planning'
      ],
      category: 'Data Management',
      color: 'from-cyan-500 to-blue-500',
      href: '/data-backup-recovery',
      popular: false,
      useCases: ['Data protection', 'Disaster recovery', 'Business continuity', 'Compliance management']
    },
    {
      id: 'software-development',
      title: 'Custom Software Development',
      description: 'Custom software development services for web applications, mobile apps, and enterprise solutions.',
      icon: DocumentCodeIcon,
      price: '$149/hour',
      features: [
        'Custom web applications',
        'Mobile app development',
        'API development',
        'Database design',
        'UI/UX design',
        'Testing and QA',
        'Deployment and maintenance',
        'Ongoing support'
      ],
      category: 'Development',
      color: 'from-pink-500 to-rose-500',
      href: '/software-development',
      popular: true,
      useCases: ['Custom applications', 'Mobile development', 'API integration', 'System integration']
    },
    {
      id: 'system-integration',
      title: 'System Integration',
      description: 'Integration services to connect disparate systems and create seamless data flow across your organization.',
      icon: LinkIcon,
      price: '$199/hour',
      features: [
        'API integration',
        'Data synchronization',
        'Legacy system integration',
        'Cloud integration',
        'Real-time data flow',
        'Error handling',
        'Performance optimization',
        'Security implementation'
      ],
      category: 'Integration',
      color: 'from-orange-500 to-red-500',
      href: '/system-integration',
      popular: false,
      useCases: ['System connectivity', 'Data synchronization', 'API integration', 'Legacy modernization']
    },
    {
      id: 'it-audit-compliance',
      title: 'IT Audit & Compliance',
      description: 'IT audit services and compliance management for various industry standards and regulations.',
      icon: DocumentCheckIcon,
      price: '$249/hour',
      features: [
        'IT audit and assessment',
        'Compliance management',
        'Risk assessment',
        'Policy development',
        'Regulatory compliance',
        'Documentation review',
        'Remediation planning',
        'Ongoing monitoring'
      ],
      category: 'Compliance',
      color: 'from-red-500 to-pink-500',
      href: '/it-audit-compliance',
      popular: false,
      useCases: ['Compliance audit', 'Risk assessment', 'Policy development', 'Regulatory compliance']
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services including infrastructure management, monitoring, and support.',
      icon: CogIcon,
      price: '$399/month',
      features: [
        'Infrastructure management',
        '24/7 monitoring',
        'Proactive maintenance',
        'Security management',
        'Backup and recovery',
        'Software updates',
        'Performance optimization',
        'Strategic planning'
      ],
      category: 'Managed Services',
      color: 'from-purple-500 to-indigo-500',
      href: '/managed-it-services',
      popular: true,
      useCases: ['Infrastructure management', 'Proactive monitoring', 'Security management', 'Strategic planning']
    }
  ];

  const itCapabilities = [
    {
      title: 'Cloud Computing',
      description: 'Comprehensive cloud solutions including migration, architecture, and management.',
      icon: CloudIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade networking solutions for optimal connectivity and performance.',
      icon: WifiIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration and optimization services.',
      icon: DocumentCodeIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps',
      description: 'Complete DevOps implementation for streamlined development and deployment.',
      icon: CogIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Software Development',
      description: 'Custom software development and system integration services.',
      icon: DocumentCodeIcon,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  ];
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and software development. Expert IT services for modern businesses." />
        <meta name="keywords" content="IT solutions, cloud computing, cybersecurity, network infrastructure, software development, IT consulting" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, and optimize performance. From cloud computing to cybersecurity, we deliver expert IT services.
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

        {/* IT Capabilities */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive IT solutions across all major technology domains to support your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCapabilities.map((capability, index) => (
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

        {/* IT Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to address your specific technology needs and business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
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
                    <div className="text-gray-400 text-sm">
                      {service.price.includes('/hour') ? 'per hour' : 'per month'}
                    </div>
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
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our IT solutions can help you optimize your technology stack and achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get IT Consultation
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

      </div>"""
        <meta name=description content=Comprehensive IT solutions including infrastructure management, cloud migration, cybersecurity, database management, and more. Expert IT services for modern businesses. />"""
        <meta name=keywords content=IT solutions, infrastructure management, cloud migration, cybersecurity, database management, IT support, network security />""
      </Helmet>

      {/* Hero Section */}

              IT Solutions
            </h1>"""
            <p className=text-xl text-gray-300 mb-8 leading-relaxed>
              Comprehensive IT solutions to power your business infrastructure
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">"""
              From infrastructure management to cybersecurity, our expert IT solutions 
              ensure your technology infrastructure is secure, scalable, and optimized for performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

      {/* IT Services Grid */}

            {itServices.map((service, index) => {;
const Icon = service.icon;
              return ("
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}></div>`"
                    <Icon className="w-8 h-8 text-white" />"
                  </div>
"""
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>"""
                  <p className="text-gray-300 mb-6 leading-relaxed">""
                    { service.description }

                  </p>

                  {/* Pricing */}"""
                  <div className=mb-6></div>"""
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>"""
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
))}
                    </ul>
                  </div>

                  {/* Benefits */}

                        </span>
))}
                    </div>
                  </div>

                  {/* Use Cases */}

                        </span>
))}
                    </div>
                  </div>
"""
                  <div className="flex gap-2">"
                    <Link
                      to={ service.href }"""
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"""

                    >"""
                      Learn More <ArrowRightIcon className="w-4 h-4" />"""
                    </Link>
                    <Link"""
                      to="/contact"""""
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold""""
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )
});
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Solutions */}

              Why Choose Our IT Solutions?
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"""
              Expert IT services backed by years of experience and cutting-edge technology
            </p>
          </div>"""
          <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto></div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <ServerIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>""""
              <p className="text-gray-300">"""
                Certified IT professionals with extensive experience in enterprise infrastructure and cloud technologies.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <ClockIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>""""
              <p className="text-gray-300">"""
                Round-the-clock monitoring and support to ensure your IT infrastructure runs smoothly at all times.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <ShieldCheckIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>""""
              <p className="text-gray-300">"""
                Bank-level security measures and compliance standards to protect your critical business data.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <CogIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>""""
              <p className="text-gray-300">"""
                Flexible IT solutions that grow with your business and adapt to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}

              Our IT Implementation Process
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"""
              A systematic approach to delivering reliable and efficient IT solutions
            </p>
          </div>"""
          <div className=grid md:grid-cols-4 gap-8 max-w-6xl mx-auto></div>"""
            <div className=text-center></div>"""
              <div className=w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <span className="text-white font-bold text-xl">1</span>"""
              </div>"""
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>""""
              <p className="text-gray-300">"""
                We assess your current IT infrastructure and develop a comprehensive implementation plan.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <span className="text-white font-bold text-xl">2</span>"""
              </div>"""
              <h3 className="text-xl font-bold text-white mb-4">Design & Configuration</h3>""""
              <p className="text-gray-300">"""
                We design and configure your IT solutions according to best practices and your requirements.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <span className="text-white font-bold text-xl">3</span>"""
              </div>"""
              <h3 className="text-xl font-bold text-white mb-4">Implementation & Testing</h3>""""
              <p className="text-gray-300">"""
                We implement the solutions and conduct thorough testing to ensure everything works perfectly.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <span className="text-white font-bold text-xl">4</span>"""
              </div>"""
              <h3 className="text-xl font-bold text-white mb-4">Monitoring & Support</h3>""""
              <p className="text-gray-300">"""
                We provide ongoing monitoring, maintenance, and support to keep your systems running optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

              Let's discuss how our IT solutions can enhance your business operations and security'
            </p>"""
            <div className=flex flex-col sm:flex-row gap-4 justify-center mb-12></div>
              <Link"""
                to="/contact"""""
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2""""
              >
                Get Free IT Consultation"""
                <ArrowRightIcon className="w-5 h-5" />"""
              </Link>
              <Link"""
                to="/demo"""""
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2""""
              >
                Schedule IT Demo"""
                <ArrowRightIcon className="w-5 h-5" />"""
              </Link>
            </div>"""
            <div className=flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300></div>"""
              <div className=flex items-center gap-3></div>"""
                <PhoneIcon className="w-6 h-6 text-purple-400" />"""
                <span>+1-302-464-0950</span>
              </div>"""
              <div className=flex items-center gap-3></div>"""
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />"""
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ITSolutionsPage;
}
export default ITSolutionsPage;
