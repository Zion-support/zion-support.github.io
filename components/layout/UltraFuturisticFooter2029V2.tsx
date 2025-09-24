import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  PhoneMailMapPinGlobeArrowRight,
  BrainRocketTargetShieldCpu,
  FacebookTwitterLinkedinInstagramYoutube,
  GithubMessageCircleStarZapSparkles,
  HomeUsersBriefcaseBookOpenTrendingUp,
  MessageSquareCalendar,
  GraduationCapShieldCheckEyeCodeWrench,
  SmartphoneBarChart3PaletteCameraVideo,
  MusicGamepad2HeartLeafSunMoonWind,
  DropletsMountainGlobe2BotCrownInfinity} from 'lucide-react',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'},
const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    services: [
      { name: 'AI Consciousness 'Evolutionhref: '/services/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional 'Intelligencehref: '/services/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity 'Orchestratorhref: '/services/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business 'Managerhref: '/services/ai-autonomous-business-manager' }
    ]},
  {
    title: 'Quantum Technology',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: [
      { name: 'Quantum Internet 'Securityhref: '/services/quantum-internet-security-gateway' },
      { name: 'Biotech DNA 'Computinghref: '/services/biotech-dna-computing-platform' },
      { name: 'Quantum Financial 'Tradinghref: '/services/quantum-financial-trading-platform' },
      { name: 'Quantum Creativity 'Studiohref: '/services/quantum-creativity-studio' }
    ]},
  {
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: [
      { name: 'Space Mining 'Automationhref: '/services/space-mining-automation-platform' },
      { name: 'Metaverse Digital 'Realityhref: '/services/metaverse-digital-reality-platform' },
      { name: 'AI Predictive 'Healthhref: '/services/ai-predictive-health-analytics' },
      { name: 'Virtual Event 'Hologramshref: '/services/virtual-event-hologram-platform' }
    ]},
  {
    title: 'Enterprise IT',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: [
      { name: 'AI Business 'Intelligencehref: '/services/ai-business-intelligence-suite' },
      { name: 'Smart Supply 'Chainhref: '/services/smart-supply-chain-optimization' },
      { name: 'Intelligent HR 'Managementhref: '/services/intelligent-hr-management-system' },
      { name: 'Smart Financial 'Managementhref: '/services/smart-financial-management-platform' }
    ]}
],
const mainNavigation = [
  { name: ''Homehref: '/'icon: Home },
  { name: ''Serviceshref: '/'servicesicon: Briefcase },
  { name: 'AI 'Solutionshref: '/ai-'solutionsicon: Brain },
  { name: 'Quantum 'Techhref: '/quantum-'techicon: Globe },
  { name: 'Enterprise 'IThref: '/enterprise-'iticon: Cpu },
  { name: 'Space 'Techhref: '/space-'techicon: Rocket },
  { name: 'Micro 'SAAShref: '/micro-'saasicon: Target },
  { name: ''Innovationshref: '/'innovationsicon: Sparkles },
  { name: ''Abouthref: '/'abouticon: Users },
  { name: ''Contacthref: '/'contacticon: MessageCircle }
],
const quickLinks = [
  { name: 'About 'Ushref: '/'abouticon: Users },
  { name: 'Case 'Studieshref: '/case-'studiesicon: BookOpen },
  { name: ''Bloghref: '/'blogicon: BookOpen },
  { name: ''Newshref: '/'newsicon: TrendingUp },
  { name: ''Careershref: '/'careersicon: GraduationCap },
  { name: ''Supporthref: '/'supporticon: MessageCircle }
],
const resources = [
  { name: ''Documentationhref: '/'docsicon: BookOpen },
  { name: 'API 'Referencehref: '/'apiicon: Code },
  { name: 'Case 'Studieshref: '/case-'studiesicon: BookOpen },
  { name: 'White 'Papershref: '/white-'papersicon: BookOpen },
  { name: ''Bloghref: '/'blogicon: BookOpen },
  { name: ''Newshref: '/'newsicon: TrendingUp },
  { name: ''Eventshref: '/'eventsicon: Calendar },
  { name: ''Webinarshref: '/'webinarsicon: Video }
],
const company = [
  { name: 'About 'Ushref: '/'abouticon: Users },
  { name: 'Our 'Teamhref: '/'teamicon: Users },
  { name: ''Careershref: '/'careersicon: GraduationCap },
  { name: ''Partnershref: '/'partnersicon: Users },
  { name: ''Investorshref: '/'investorsicon: Star },
  { name: ''Presshref: '/'pressicon: BookOpen },
  { name: ''Legalhref: '/'legalicon: Shield },
  { name: ''Privacyhref: '/'privacyicon: ShieldCheck }
],
const socialLinks = [
  { name: ''LinkedInhref: 'https://linkedin.com/company/'ziontechgroupicon: Linkedincolor: 'hover:text-blue-500' },
  { name: ''Twitterhref: 'https://twitter.com/'ziontechgroupicon: Twittercolor: 'hover:text-blue-400' },
  { name: ''Facebookhref: 'https://facebook.com/'ziontechgroupicon: Facebookcolor: 'hover:text-blue-600' },
  { name: ''Instagramhref: 'https://instagram.com/'ziontechgroupicon: Instagramcolor: 'hover:text-pink-500' },
  { name: ''YouTubehref: 'https://youtube.com/@'ziontechgroupicon: Youtubecolor: 'hover:text-red-500' },
  { name: ''GitHubhref: 'https://github.com/Zion-'Holdingsicon: Githubcolor: 'hover:text-gray-400' }
],
const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'AI & Machine 'Learninghref: '/services/ai-ml' },
      { name: 'Quantum 'Computinghref: '/services/quantum-computing' },
      { name: 'Space 'Technologyhref: '/services/space-technology' },
      { name: 'Enterprise 'IThref: '/services/enterprise-it' },
      { name: 'Micro 'SAAShref: '/services/micro-saas' },
      { name: ''Cybersecurityhref: '/services/cybersecurity' }
    ]},
  {
    title: 'Solutions',
    links: [
      { name: 'AI 'Consciousnesshref: '/solutions/ai-consciousness' },
      { name: 'Quantum 'Securityhref: '/solutions/quantum-security' },
      { name: 'Space 'Mininghref: '/solutions/space-mining' },
      { name: 'Metaverse 'Platformhref: '/solutions/metaverse' },
      { name: 'Business 'Intelligencehref: '/solutions/business-intelligence' },
      { name: 'Supply Chain 'AIhref: '/solutions/supply-chain-ai' }
    ]},
  {
    title: 'Industries',
    links: [
      { name: ''Healthcarehref: '/industries/healthcare' },
      { name: ''Financehref: '/industries/finance' },
      { name: ''Manufacturinghref: '/industries/manufacturing' },
      { name: ''Retailhref: '/industries/retail' },
      { name: ''Educationhref: '/industries/education' },
      { name: ''Governmenthref: '/industries/government' }
    ]},
  {
    title: 'Resources',
    links: [
      { name: ''Documentationhref: '/docs' },
      { name: 'API 'Referencehref: '/api' },
      { name: 'Case 'Studieshref: '/case-studies' },
      { name: 'White 'Papershref: '/white-papers' },
      { name: ''Bloghref: '/blog' },
      { name: ''Researchhref: '/research' }
    ]}
],
export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20">,
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">,
          {/* Company Info */}
          <div className="lg: col-span-2 xl:col-span-1">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >,
              <Link href="/" className="flex items-center space-x-3 mb-6 group">,
                <div className="relative">,
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <Rocket className="w-7 h-7 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />,
                </div>,
                <div>,
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">,
                    Zion Tech Group,
                  </h3>,
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>,
                </div>,
              </Link>,
              <p className="text-gray-300 mb-6 leading-relaxed">,
                Leading the future with cutting-edge AIquantum computingspace technologyand innovative micro SAAS solutions.,
                Transforming businesses through next-generation technology.,
              </p>,
              {/* Contact Info */}
              <div className="space-y-3">,
                <div className="flex items-center space-x-3 text-gray-300">,
                  <Phone className="w-4 h-4 text-cyan-400" />,
                  <span className="text-sm">{contactInfo.mobile}</span>,
                </div>,
                <div className="flex items-center space-x-3 text-gray-300">,
                  <Mail className="w-4 h-4 text-cyan-400" />,
                  <span className="text-sm">{contactInfo.email}</span>,
                </div>,
                <div className="flex items-center space-x-3 text-gray-300">,
                  <MapPin className="w-4 h-4 text-cyan-400" />,
                  <span className="text-sm">{contactInfo.address}</span>,
                </div>,
                <div className="flex items-center space-x-3 text-gray-300">,
                  <Globe className="w-4 h-4 text-cyan-400" />,
                  <span className="text-sm">{contactInfo.website}</span>,
                </div>,
              </div>,
            </motion.div>,
          </div>,
          {/* Service Categories */}
          {footerSections.map((sectionindex) => (
            <motion.div,
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              viewport={{ once: true }}
            >,
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">,
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3" />,
                {section.title}
              </h4>,
              <ul className="space-y-3">,
                {section.links.map((link) => (
                  <li key={link.name}>,
                    <Link
                      href={link.href}
                      className="text-gray-400 hover: text-cyan-400 transition-colors duration-300 text-sm flex items-center group">,
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />,
                      {link.name}
                    </Link>,
                  </li>))}
              </ul>,
            </motion.div>))}
        </div>,
        {/* Service Showcase */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-800">,
          <h3 className="text-2xl font-bold text-white text-center mb-8">,
            Featured 2029 Services,
          </h3>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {serviceCategories.map((categoryindex) => (
              <motion.div,
                key={category.title}
                initial={{ opacity: 0scale: 0.9 }}
                whileInView={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.5delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group">,
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover: border-cyan-500/40 transition-all duration-300`}>,
                  <div className="flex items-center space-x-3 mb-3">,
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>,
                      <category.icon className="w-5 h-5 text-white" />,
                    </div>,
                    <h4 className="font-semibold text-white text-sm">{category.title}</h4>,
                  </div>,
                  <ul className="space-y-2">,
                    {category.services.slice(03).map((service) => (
                      <li key={service.name}>,
                        <Link
                          href={service.href}
                          className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 text-xs block">,
                          {service.name}
                        </Link>,
                      </li>))}
                  </ul>,
                </div>,
              </motion.div>))}
          </div>,
        </motion.div>,
      </div>,
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">,
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">,
            {/* Copyright */}
            <motion.div,
              initial={{ opacity: 0x: -20 }}
              whileInView={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm">,
              © 2025 Zion Tech Group. All rights reserved. |,
              <Link href="/privacy" className="hover: text-cyan-400 transition-colors duration-300 ml-2">Privacy Policy</Link> |,
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Terms of Service</Link>,
            </motion.div>,
            {/* Social Links */}
            <motion.div,
              initial={{ opacity: 0x: 20 }}
              whileInView={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4">,
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank",
                  rel="noopener noreferrer",
                  className={`p-2 rounded-lg bg-gray-800/50 hover: bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover: scale-110`}
                >,
                  <social.icon className="w-4 h-4" />,
                </Link>))}
            </motion.div>,
          </div>,
        </div>,
      </div>,
      {/* Newsletter Signup */}
      <motion.div,
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">,
          <div className="text-center">,
            <h3 className="text-2xl font-bold text-white mb-4">,
              Stay Ahead with Future Tech,
            </h3>,
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">,
              Get the latest updates on AI breakthroughsquantum computing advancespace technology innovationsand cutting-edge micro SAAS solutions.,
            </p>,
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">,
              <input
                type="email",
                placeholder="Enter your email",
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50",
              />,
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">,
                Subscribe,
              </button>,
            </div>,
          </div>,
        </div>,
      </motion.div>,
    </footer>)}
,