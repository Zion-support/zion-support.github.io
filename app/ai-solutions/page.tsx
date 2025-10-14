import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  StarIcon,
  HeartIcon,
  HandThumbUpIcon,
  FireIcon,
  BoltIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  TvIcon,
  SpeakerWaveIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  CameraIcon,
  PhotoIcon,
  FilmIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  PencilIcon,
  ScissorsIcon,
  ClipboardDocumentIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  ArchiveBoxIcon,
  TrashIcon,
  ShareIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  LinkIcon,
  QrCodeIcon,
  KeyIcon,
  LockClosedIcon,
  LockOpenIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  MinusIcon,
  XCircleIcon,
  CheckIcon,
  NoSymbolIcon,
  PauseIcon,
  PlayIcon,
  StopIcon,
  ForwardIcon,
  BackwardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon as ArrowRightIcon2,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  HomeIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  BuildingBankIcon,
  BuildingTowerIcon,
  BuildingSkyscraperIcon,
  BuildingFactoryIcon,
  BuildingWarehouseIcon,
  BuildingApartmentIcon,
  BuildingHouseIcon,
  BuildingVillaIcon,
  BuildingCastleIcon,
  BuildingChurchIcon,
  BuildingMosqueIcon,
  BuildingSynagogueIcon,
  BuildingTempleIcon,
  BuildingHospitalIcon,
  BuildingSchoolIcon,
  BuildingUniversityIcon,
  BuildingMuseumIcon,
  BuildingTheaterIcon,
  BuildingCinemaIcon,
  BuildingStadiumIcon,
  BuildingArenaIcon,
  BuildingGymIcon,
  BuildingPoolIcon,
  BuildingParkIcon,
  BuildingGardenIcon,
  BuildingFarmIcon,
  BuildingRanchIcon,
  BuildingLodgeIcon,
  BuildingCabinIcon,
  BuildingTentIcon,
  BuildingCaravanIcon,
  BuildingTrailerIcon,
  BuildingMobileIcon,
  BuildingPortableIcon,
  BuildingTemporaryIcon,
  BuildingPermanentIcon,
  BuildingResidentialIcon,
  BuildingCommercialIcon,
  BuildingIndustrialIcon,
  BuildingAgriculturalIcon,
  BuildingRecreationalIcon,
  BuildingEducationalIcon,
  BuildingHealthcareIcon,
  BuildingReligiousIcon,
  BuildingGovernmentIcon,
  BuildingMilitaryIcon,
  BuildingSecurityIcon,
  BuildingEmergencyIcon,
  BuildingFireIcon,
  BuildingPoliceIcon,
  BuildingAmbulanceIcon,
  BuildingHospitalIcon as HospitalIcon,
  BuildingSchoolIcon as SchoolIcon,
  BuildingUniversityIcon as UniversityIcon,
  BuildingMuseumIcon as MuseumIcon,
  BuildingTheaterIcon as TheaterIcon,
  BuildingCinemaIcon as CinemaIcon,
  BuildingStadiumIcon as StadiumIcon,
  BuildingArenaIcon as ArenaIcon,
  BuildingGymIcon as GymIcon,
  BuildingPoolIcon as PoolIcon,
  BuildingParkIcon as ParkIcon,
  BuildingGardenIcon as GardenIcon,
  BuildingFarmIcon as FarmIcon,
  BuildingRanchIcon as RanchIcon,
  BuildingLodgeIcon as LodgeIcon,
  BuildingCabinIcon as CabinIcon,
  BuildingTentIcon as TentIcon,
  BuildingCaravanIcon as CaravanIcon,
  BuildingTrailerIcon as TrailerIcon,
  BuildingMobileIcon as MobileIcon,
  BuildingPortableIcon as PortableIcon,
  BuildingTemporaryIcon as TemporaryIcon,
  BuildingPermanentIcon as PermanentIcon,
  BuildingResidentialIcon as ResidentialIcon,
  BuildingCommercialIcon as CommercialIcon,
  BuildingIndustrialIcon as IndustrialIcon,
  BuildingAgriculturalIcon as AgriculturalIcon,
  BuildingRecreationalIcon as RecreationalIcon,
  BuildingEducationalIcon as EducationalIcon,
  BuildingHealthcareIcon as HealthcareIcon,
  BuildingReligiousIcon as ReligiousIcon,
  BuildingGovernmentIcon as GovernmentIcon,
  BuildingMilitaryIcon as MilitaryIcon,
  BuildingSecurityIcon as SecurityIcon,
  BuildingEmergencyIcon as EmergencyIcon,
  BuildingFireIcon as FireIcon2,
  BuildingPoliceIcon as PoliceIcon,
  BuildingAmbulanceIcon as AmbulanceIcon
} from "@heroicons/react/24/outline";
import FuturisticBackground from "../components/FuturisticBackground";

const AiSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and intelligent automation.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Chatbot Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: EyeIcon,
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and visual intelligence.",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ChartBarIcon,
      title: "Business Intelligence",
      description: "AI-powered analytics and reporting solutions for data-driven decision making.",
      features: ["Data Visualization", "Predictive Analytics", "Automated Reporting", "Performance Metrics"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "AI Security Solutions",
      description: "Advanced security solutions powered by AI for threat detection and prevention.",
      features: ["Threat Detection", "Fraud Prevention", "Security Monitoring", "Risk Assessment"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: CloudIcon,
      title: "Cloud AI Services",
      description: "Scalable AI solutions deployed on cloud infrastructure for maximum performance.",
      features: ["Scalable Infrastructure", "Auto-scaling", "Global Deployment", "Cost Optimization"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    "Increased Efficiency",
    "Cost Reduction",
    "Improved Accuracy",
    "24/7 Availability",
    "Scalable Solutions",
    "Real-time Insights"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and business intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, business intelligence, AI consulting" />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed for the modern enterprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                Explore Solutions
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <StarIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ready to Implement AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our AI experts help you choose and implement the perfect solutions for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiSolutionsPage;