import React from 'react';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
  CheckIcon,
  BoltIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
  ServerIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  ChartPieIcon,
  DocumentTextIcon,
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  HomeIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  HeartIcon,
  HandThumbUpIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
  BookmarkIcon,
  CalendarIcon,
  ClockIcon,
  TagIcon,
  FireIcon,
  TrophyIcon,
  GiftIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  IdentificationIcon,
  KeyIcon,
  LockClosedIcon,
  FingerPrintIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  TvIcon,
  CameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  PhotoIcon,
  DocumentIcon,
  FolderIcon,
  ArchiveBoxIcon,
  TrashIcon,
  PencilIcon,
  PlusIcon,
  MinusIcon,
  XCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon as InfoIcon,
  ExclamationTriangleIcon as WarningIcon,
  XMarkIcon as CloseIcon,
  Bars3Icon as MenuIcon,
  MagnifyingGlassIcon as SearchIcon,
  HeartIcon as LikeIcon,
  HandThumbUpIcon as ThumbUpIcon,
  EyeIcon as ViewIcon,
  ChatBubbleLeftRightIcon as ChatIcon,
  ShareIcon as ShareButtonIcon,
  BookmarkIcon as BookmarkButtonIcon,
  CalendarIcon as CalendarButtonIcon,
  ClockIcon as TimeIcon,
  TagIcon as TagButtonIcon,
  FireIcon as HotIcon,
  TrophyIcon as AwardIcon,
  GiftIcon as GiftButtonIcon,
  ShoppingCartIcon as CartIcon,
  CreditCardIcon as CardIcon,
  BanknotesIcon as MoneyIcon,
  IdentificationIcon as IDIcon,
  KeyIcon as KeyButtonIcon,
  LockClosedIcon as LockIcon,
  FingerPrintIcon as FingerprintIcon,
  DevicePhoneMobileIcon as MobileIcon,
  ComputerDesktopIcon as DesktopIcon,
  DeviceTabletIcon as TabletIcon,
  TvIcon as TVIcon,
  CameraIcon as CameraButtonIcon,
  MicrophoneIcon as MicIcon,
  SpeakerWaveIcon as SpeakerIcon,
  VideoCameraIcon as VideoIcon,
  PhotoIcon as PhotoButtonIcon,
  DocumentIcon as DocIcon,
  FolderIcon as FolderButtonIcon,
  ArchiveBoxIcon as ArchiveIcon,
  TrashIcon as TrashButtonIcon,
  PencilIcon as EditIcon,
  PlusIcon as AddIcon,
  MinusIcon as RemoveIcon,
  XCircleIcon as XCircleButtonIcon,
  CheckCircleIcon as CheckCircleButtonIcon,
  ExclamationCircleIcon as ExclamationCircleButtonIcon,
  QuestionMarkCircleIcon as QuestionIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              Zion Tech Group
              <span className="relative whitespace-nowrap text-purple-400">
                <span className="relative">AI & IT Solutions</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-blue-100">
              Empowering businesses with cutting-edge AI and IT solutions. 
              Transform your digital infrastructure with our comprehensive suite of services.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
                href="/contact"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-white text-white hover:ring-blue-50 active:ring-blue-200 active:text-blue-100 focus-visible:outline-white"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Comprehensive AI and IT solutions tailored to your business needs
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Services */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CpuChipIcon className="h-8 w-8 text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">AI Solutions</h3>
                  <p className="text-gray-300">Machine learning, automation, and intelligent systems</p>
                </div>
              </div>
            </div>

            {/* IT Services */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ServerIcon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">IT Infrastructure</h3>
                  <p className="text-gray-300">Cloud solutions, networking, and system administration</p>
                </div>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ShieldCheckIcon className="h-8 w-8 text-green-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Cybersecurity</h3>
                  <p className="text-gray-300">Protection, monitoring, and security consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full py-3 px-6 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Contact Us Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}