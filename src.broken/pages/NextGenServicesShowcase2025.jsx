import { Brain, Cpu, Shield, Zap, Rocket, Star, ChevronRight, CheckCircle, TrendingUp, Globe, Settings, Users, Play  } from 'lucide-react',
export default function Page() {
,
        {
            title: 'Smart Inventory Optimization System',
            description: 'AI - driven inventory management that predicts demand and automates reordering to prevent stockouts.',
            price: '$299 / month',
            features['Demand forecasting AIAutomated reorder points', 'Multi - location management'],
            category: 'Supply Chain',
            trial: '30 days free'
        },
        {
            title: 'Customer Behavior Prediction Engine',
            description: 'Advanced analytics platform that predicts customer behavior and identifies churn risks.',
            price: '$399 / month',
            features['Churn prediction modelingCustomer lifetime value', 'Behavioral pattern analysis'],
            category: 'Customer Analytics',
            trial: '21 days free'

    ],
    const infrastructureServices = [{
            title: 'Quantum - Secure Cloud Infrastructure',
            description: 'Revolutionary cloud infrastructure protected by quantum - resistant encryption for ultimate security.',
            price: '$25,000 / month',
            features['Post - quantum cryptographyQuantum key distribution', 'Zero - trust security model'],
            category: 'Cloud Security'
        },
        {
            title: 'Autonomous Infrastructure Management',
            description: 'Self - managing IT infrastructure that automatically optimizes performance and resolves issues.',
            price: '$12,000 / month',
            features['Autonomous healing systemsPredictive failure analysis', '24 / 7 automated operations'],
            category: 'Infrastructure Automation'
        },
        {
            title: 'Blockchain Infrastructure as a Service',
            description: 'Complete blockchain platform supporting multiple protocols and enterprise - grade security.',
            price: '$20,000 / month',
            features['Multi - protocol blockchain supportSmart contract deployment', 'DeFi integration platform'],
            category: 'Blockchain Infrastructure'

    ],
    return (<div className="min - h-screen bg-gradient - to - br from - black via - gray - 900 to - blue -900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset - 0 bg-gradient - to - r from - purple - 900 / 20 to - cyan -900 / 20"></div>
        <div className="relative max - w-7xl mx - auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial = {
  { opacity: 0,
  y: 20

}} animate = {
  { opacity: 1,
  y: 0

}} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font - bold text-white mb-6">
              Next - Generation < span className="block bg-gradient - to - r from - cyan - 400 to - purple - 400 bg-clip - text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-gray - 300 mb-8 max - w-3xl mx -auto">
              Discover revolutionary AI, quantum computing, and infrastructure solutions that transform businesses and redefine possibilities in 2025 and beyond.</p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <Link to="/contact" className="inline - flex items - center px-8 py-4 bg-gradient - to - r from - cyan - 500 to - purple - 500 text-white font - semibold rounded-xl hover:from - cyan - 600 hover:to - purple - 600 transition - all duration -300 group">
                Start Your Transformation < ChevronRight className="ml-2 h-5 w-5 group - hover:translate - x-1 transition -transform"/>
              </Link>
              <Link to="/pricing" className="inline - flex items - center px-8 py-4 border-2 border-cyan - 400 text-cyan - 400 font - semibold rounded-xl hover:bg-cyan - 400 hover:text-black transition - all duration -300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Enterprise Services */}
      <section className="py-20">
        <div className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
          <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font - bold text-white mb-4">
              Revolutionary Enterprise Solutions
            </h2>
            <p className="text-xl text-gray - 300 max - w-3xl mx -auto">
              Cutting - edge AI and quantum technologies designed for Fortune 500 companies and innovative enterprises.</p>
          </motion.div>

          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap-8">
            {featuredServices.map ( (service, index) => (<motion.div key={service.id} initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.8,
  delay: index * 0.2

}} className={`relative bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 8 border border-gray - 700 / 50 backdrop - blur - sm group hover:border-cyan - 500 / 50 transition - all duration - 300 ${service.popular ? 'ring - 2 ring - cyan - 400 / 50' : ''}`}>
                {service.popular && (<div className="absolute - top - 3 left -8">
                    <span className="bg-gradient - to - r from - cyan - 500 to - purple - 500 text-white px-4 py-1 rounded-full text-sm font - semibold flex items -center">
                      <Star className="h-4 w-4 mr-1"/>
                      Most Popular
                    </span>
                  </div>) }

                <div className="flex items - center mb-6">
                  <div className={`p - 3 rounded-xl bg-gradient - to - r ${service.gradient} mr-4`}>
                    <service.icon className="h-8 w-8 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-2xl font - bold text-white">{service.title}</h3>
                    <p className="text-cyan - 400 font -semibold">{service.category}</p>
                  </div>
                </div>

                <p className="text-gray - 300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font - semibold mb-3">Key Features:</h4>
                  <ul className="space - y-2">
                    {service.features.map((feature, idx) => (<li key={idx} className="flex items - center text-gray -300">
                        <CheckCircle className="h-4 w-4 text-green - 400 mr-2 flex - shrink -0"/>
                        {feature}
                      </li>) ) }
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font - semibold mb-3">Benefits:</h4>
                  <ul className="space - y-2">
                    {service.benefits.map((benefit, idx) => (<li key={idx} className="flex items - center text-gray -300">
                        <TrendingUp className="h-4 w-4 text-cyan - 400 mr-2 flex - shrink -0"/>
                        {benefit}
                      </li>) ) }
                  </ul>
                </div>

                <div className="flex items - center justify -between">
                  <div>
                    <p className="text-3xl font - bold text-white">{service.price}</p>
                    <p className="text-gray - 400 text-sm">Enterprise pricing</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={service.demoUrl} target="_blank" rel="noopener noreferrer" className="inline - flex items - center px-4 py-2 bg-gray - 700 text-white rounded-lg hover:bg-gray - 600 transition -colors">
                      <Play className="h-4 w-4 mr-2"/>
                      Demo
                    </a>
                    <Link to="/contact" className={`inline - flex items - center px-6 py-2 bg-gradient - to - r ${service.gradient} text-white font - semibold rounded-lg hover:opacity - 90 transition - opacity`}>
                      {service.ctaText}
                    </Link>
                  </div>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 bg-gradient - to - br from - gray - 900 / 50 to - blue -900 / 20">
        <div className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
          <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font - bold text-white mb-4">
              Innovative Micro - SaaS Solutions
            </h2>
            <p className="text-xl text-gray - 300 max - w-3xl mx -auto">
              Powerful, focused solutions for specific business needs with transparent pricing and immediate value.</p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
            {microSaasServices.map((service, index) => (<motion.div key={index} initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.8,
  delay: index * 0.2

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-xl p - 6 border border-gray - 700 / 50 backdrop - blur - sm hover:border-cyan - 500 / 50 transition - all duration -300">
                <div className="mb-4">
                  <span className="inline - block px-3 py-1 bg-cyan - 500 / 20 text-cyan - 400 rounded-full text-sm font - semibold mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font - bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray - 300 text-sm">{service.description}</p>
                </div>

                <div className="mb-4">
                  <ul className="space - y-1">
                    {service.features.map((feature, idx) => (<li key={idx} className="flex items - center text-gray - 300 text-sm">
                        <CheckCircle className="h-3 w-3 text-green - 400 mr-2 flex - shrink -0"/>
                        {feature}
                      </li>) ) }
                  </ul>
                </div>

                <div className="flex items - center justify -between">
                  <div>
                    <p className="text-2xl font - bold text-white">{service.price}</p>
                    {service.trial && (<p className="text-green - 400 text-sm">{service.trial}</p>) }
                  </div>
                  <Link to="/contact" className="inline - flex items - center px-4 py-2 bg-cyan - 500 text-white font - semibold rounded-lg hover:bg-cyan - 600 transition -colors">
                    Get Started
                  </Link>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="py-20">
        <div className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
          <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font - bold text-white mb-4">
              Advanced IT Infrastructure
            </h2>
            <p className="text-xl text-gray - 300 max - w-3xl mx -auto">
              Future - proof infrastructure solutions with quantum security, AI automation, and blockchain integration.</p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
            {infrastructureServices.map((service, index) => (<motion.div key={index} initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition = {
  { duration: 0.8,
  delay: index * 0.2

}} className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-xl p - 6 border border-gray - 700 / 50 backdrop - blur - sm hover:border-purple - 500 / 50 transition - all duration -300">
                <div className="mb-4">
                  <span className="inline - block px-3 py-1 bg-purple - 500 / 20 text-purple - 400 rounded-full text-sm font - semibold mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font - bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray - 300 text-sm">{service.description}</p>
                </div>

                <div className="mb-4">
                  <ul className="space - y-1">
                    {service.features.map((feature, idx) => (<li key={idx} className="flex items - center text-gray - 300 text-sm">
                        <Shield className="h-3 w-3 text-purple - 400 mr-2 flex - shrink -0"/>
                        {feature}
                      </li>) ) }
                  </ul>
                </div>

                <div className="flex items - center justify -between">
                  <div>
                    <p className="text-2xl font - bold text-white">{service.price}</p>
                    <p className="text-gray - 400 text-sm">Enterprise</p>
                  </div>
                  <Link to="/contact" className="inline - flex items - center px-4 py-2 bg-purple - 500 text-white font - semibold rounded-lg hover:bg-purple - 600 transition -colors">
                    Learn More
                  </Link>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient - to - r from - cyan - 900 / 20 to - purple -900 / 20">
        <div className="max - w-4xl mx - auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial = {
  { opacity: 0,
  y: 20

}} whileInView = {
  { opacity: 1,
  y: 0

}} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font - bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray - 300 mb-8">
              Contact our experts to discuss your specific needs and get a customized solution quote.</p>

            <div className="grid grid - cols - 1 md:grid - cols - 3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline - flex items - center justify - center w-12 h-12 bg-cyan - 500 rounded-full mb-4">
                  <Users className="h-6 w-6 text-white"/>
                </div>
                <h3 className="text-white font - semibold mb-2">Expert Consultation</h3>
                <p className="text-gray - 300 text-sm">Get personalized recommendations from our technology experts</p>
              </div>

              <div className="text-center">
                <div className="inline - flex items - center justify - center w-12 h-12 bg-purple - 500 rounded-full mb-4">
                  <Settings className="h-6 w-6 text-white"/>
                </div>
                <h3 className="text-white font - semibold mb-2">Custom Solutions</h3>
                <p className="text-gray - 300 text-sm">Tailored implementations designed for your specific requirements</p>
              </div>

              <div className="text-center">
                <div className="inline - flex items - center justify - center w-12 h-12 bg-green - 500 rounded-full mb-4">
                  <Rocket className="h-6 w-6 text-white"/>
                </div>
                <h3 className="text-white font - semibold mb-2">Rapid Deployment</h3>
                <p className="text-gray - 300 text-sm">Fast implementation with dedicated support throughout the process</p>
              </div>
            </div>

            <div className="bg-gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 rounded-2xl p - 8 border border-gray -700 / 50">
              <h3 className="text-2xl font - bold text-white mb-4">Contact Information</h3>
              <div className="grid grid - cols - 1 md:grid - cols - 3 gap-6 text-left">
                <div>
                  <p className="text-cyan - 400 font - semibold mb-2">📱 Phone</p>
                  <p className="text-white">+1 302 464 0950</p>
                </div>
                <div>
                  <p className="text-cyan - 400 font - semibold mb-2">✉️ Email</p>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p className="text-cyan - 400 font - semibold mb-2">📍 Address</p>
                  <p className="text-white">364 E Main St STE 1008 < br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline - flex items - center px-8 py-4 bg-gradient - to - r from - cyan - 500 to - purple - 500 text-white font - semibold rounded-xl hover:from - cyan - 600 hover:to - purple - 600 transition - all duration -300 group">
                  Get Your Custom Quote < ChevronRight className="ml-2 h-5 w-5 group - hover:translate - x-1 transition -transform"/>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) }
