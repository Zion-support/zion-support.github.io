
  AI Solutions': 'from-purple-600 to-pink-600,
  Cybersecurity': 'from-red-600 to-orange-600,
  Space Tech': 'from-blue-600 to-indigo-600,
  Green Tech': 'from-green-600 to-emerald-600,
  FinTech & DeFi': 'from-yellow-600 to-orange-600,
  Metaverse & AR/VR': 'from-purple-600 to-violet-600,
  IoT & Edge': 'from-cyan-600 to-blue-600,
  Blockchain & Web3': 'from-orange-600 to-red-600,
  BioTech & Health': 'from-pink-600 to-rose-600,
  Data & Analytics': 'from-indigo-600 to-purple-600,
  Micro SaaS': 'from-emerald-600 to-teal-600,
  IT Services': 'from-gray-600 to-slate-600,
  Quantum Computing': 'from-violet-600 to-purple-600,
  Digital Twin': 'from-teal-600 to-cyan-600,
  Edge AI': 'from-blue-600 to-cyan-600,
  Sustainability': 'from-green-600 to-blue-600,
  Autonomous Systems': 'from-slate-600 to-gray-600 }  const categoryDescriptions: Record<string, string> = {
  AI Solutions': 'Revolutionary artificial intelligence platforms that transform business operations and decision-making processes.,
  Cybersecurity': 'Next-generation security solutions using neuromorphic computing and AI to protect against advanced threats.,
  Space Tech': Cutting-edge space technology services for satellite management, orbital optimization, and space exploration.,

  FinTech & DeFi': 'Advanced financial technology platforms combining quantum computing with AI for superior trading and risk management.,
  Metaverse & AR/VR': 'Immersive digital experiences and virtual world creation using AI and advanced 3D technologies.,
  IoT & Edge': 'Intelligent IoT ecosystems with autonomous device management and edge AI processing capabilities.,
  Blockchain & Web3': 'Next-generation blockchain solutions with AI-powered governance and automated compliance.,
  BioTech & Health': Revolutionary healthcare platforms combining genomics, AI, and precision medicine for personalized treatment.,
  ,Data & Analytics': 'Quantum-powered analytics engines that process massive datasets and solve complex problems in seconds.,
  Micro SaaS': 'Specialized software-as-a-service solutions designed for specific business needs and workflows.,
  IT Services': 'Comprehensive IT infrastructure and consulting services for modern digital transformation.,
  Quantum Computing': 'Quantum computing solutions that solve previously intractable problems across industries.,
  Digital Twin': 'Digital twin technology for real-time monitoring and optimization of physical systems.,
  Edge AI': 'Edge computing solutions with AI capabilities for real-time processing and decision-making.,
  Sustainability': 'Technology solutions focused on environmental sustainability and green business practices.,

  all')} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${ selectedCategory ===;
  'all' ?
  'bg-blue-600 text-white': 'bg-white/20 text-white hover:bg-white/30 }`} > All Categories </button> {categories.map(category => ( <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${ selectedCategory === category ?,



