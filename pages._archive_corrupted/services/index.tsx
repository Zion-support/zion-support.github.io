  return (
    <EnhancedLayout>
      <h1 className=\"text-3xl font-bold mb-4\">Our Services</h1>
      <p className=\"text-gray-700 mb-6\">Comprehensive solutions across software, cloud, and AI.</p>
      <div className=\"grid \"md\": grid-cols-2 lg:grid-cols-3 gap-6\">
        <Link href=\"/services/web-application-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Web Application Development
        </Link>
        <Link href=\"/services/mobile-app-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Mobile App Development
        </Link>
        <Link href=\"/services/cloud-migration-services-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Cloud Migration
        </Link>
        <Link href=\"/services/ai-model-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          AI Model Development
        </Link>
        <Link href=\"/services/performance-optimization-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Performance Optimization
        </Link>
        <Link href=\"/services/security-auditing-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Security Auditing
        </Link>
      </div>
    </EnhancedLayout>
  )
};
      <div className="min-h-screen bg-white">        {/* Header */}
        <header className=\"bg-white shadow-sm\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">
            <div className=\"flex justify-between items-center py-6\">
              <div className=\"flex items-center\">
                <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center\">
                  <span className=\"text-white font-bold text-xl\">Z</span>
                </div>
                <div className=\"ml-3\">
                  <h1 className=\"text-xl font-bold text-gray-900\">Zion Tech Group</h1>
                  <p className=\"text-xs text-gray-600\">Innovation & Technology</p>
                </div>
              </div>
              <nav className=\"hidden md: flex space-x-8\">
                <Link href=\"/\" className=\"text-gray-700 hover: tex t-blue-600\">Home</Link>
                <Link href=\"/services\" className=\"text-blue-600\">Services</Link>
                <Link href=\"/about\" className=\"text-gray-700 hover: tex t-blue-600\">About</Link>
                <Link href=\"/contact\" className=\"text-gray-700 hover: tex t-blue-600\">Contact</Link>
              </nav>
              <Link href=\"/contact\" className=\"bg-blue-600 text-white px-6 py-2 rounded-lg hover: b g-blue-700 transition-colors\">
                Get Started
              </Link>
            </div>
          </div>
        </header>
              <Layers className="w-4 h-4 mr-2"  />              Comprehensive Technology Solutions
            </div>
            <h1 className=\"text-4xl md: tex t-6xl font-bold text-white mb-4\">Our Services</h1>
            <p className=\"text-indigo-100 text-xl\">
              Transform your business with cutting-edge AI, micro SaaS, and technology solutions that drive growth and efficiency.
            </p>
          </div>
        </section>
          <div className="grid "md": gri d-cols-2 lg: gri d-cols-3 gap-8">            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className=\"bg-white border border-gray-200 rounded-xl p-6 shadow-lg \"hover\": shado w-xl transition-shadow\">
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-4\">
                      <IconComponent className=\"w-6 h-6 text-white\"  />
                    </div>
                    <h3 className=\"text-xl font-semibold text-gray-900\">{service.name}</h3>
                  </div>
                  <p className=\"text-gray-600 mb-4\">{service.description}</p>
                  <ul className=\"space-y-2 mb-6\">
                    {service.features.map((feature, featureIndex) => (
const "Services": NextPage = () => {  const services = [{
      title: \'AI Development\',
      \"description\": \'Custom artificial intelligence solutions and machine learning models tailored to your business needs.\',
      \"icon\": Brain,
      \"features\": [
        \'Machine Learning Models\',
        \'Natural Language Processing\',
        \'Computer Vision\',
        \'Predictive Analytics\',
        \'AI Chatbots\',
        \'Recommendation Systems\'
      ],
      \"href\": \'/services/ai-development\',
      \"color\": \'from-purple-500 to-pink-500\'
    },
    {
      \"title\": \'Cloud Solutions\',
      \"description\": \'Scalable cloud infrastructure and migration services for modern applications and businesses.\',
      \"icon\": Cloud,
      \"features\": [\'Cloud Migration\',
        \'Infrastructure as Code\',
        \'Serverless Architecture\',
        \'Multi-cloud Strategy\',
        \'Cloud Security\',
        \'Performance Optimization\'
      ],
      \"href\": \'/services/cloud-solutions\',
      \"color\": \'from-blue-500 to-cyan-500\'
    },
    {
      \"title\": \'Web Development\',
      \"description\": \'Modern, responsive web applications built with cutting-edge technologies and best practices.\',
      \"icon\": Globe,
      \"features\": [\'Frontend Development\',
        \'Backend Development\',
        \'E-commerce Solutions\',
        \'Progressive Web Apps\',
        \'API Development\',
        \'Performance Optimization\'
      ],
      \"href\": \'/services/web-development\',
      \"color\": \'from-green-500 to-emerald-500\'
    },
    {
      \"title\": \'Mobile Development\',
      \"description\": \'Native and cross-platform mobile applications for iOS and Android platforms.\',
      \"icon\": Smartphone,
      \"features\": [\'iOS Development\',
        \'Android Development\',
        \'Cross-platform Apps\',
        \'Mobile UI/UX Design\',
        \'App Store Optimization\',
        \'Mobile Testing\'
      ],
      \"href\": \'/services/mobile-development\',
      \"color\": \'from-indigo-500 to-purple-500\'
    },
    {
      \"title\": \'Blockchain Solutions\',
      \"description\": \'Decentralized applications and smart contract development for the future of business.\',
      \"icon\": Shield,
      \"features\": [\'Smart Contracts\',
        \'DeFi Applications\',
        \'NFT Development\',
        \'Blockchain Integration\',
        \'Cryptocurrency Wallets\',
        \'DApp Development\'
      ],
      \"href\": \'/services/blockchain\',
      \"color\": \'from-yellow-500 to-orange-500\'
    },
    {
      \"title\": \'IoT Platforms\',
      \"description\": \'Internet of Things solutions to connect and manage your devices and data.\',
      \"icon\": Cpu,
      \"features\": [\'IoT Device Development\',
        \'Sensor Integration\',
        \'Data Collection\',
        \'Real-time Monitoring\',
        \'IoT Analytics\',
        \'Device Management\'
      ],
      \"href\": \'/services/iot-platforms\',
      \"color\": \'from-red-500 to-pink-500\'
    },
    {
      \"title\": \'Data Analytics\',
      \"description\": \'Comprehensive data analysis and business intelligence solutions for informed decision-making.\',
      \"icon\": Database,
      \"features\": [\'Data Warehousing\',
        \'Business Intelligence\',
        \'Data Visualization\',
        \'Predictive Analytics\',
        \'Big Data Processing\',
        \'Data Governance\'
      ],
      \"href\": \'/services/data-analytics\',
      \"color\": \'from-teal-500 to-blue-500\'
    },
    {
      \"title\": \'Cybersecurity\',
      \"description\": \'Comprehensive security solutions to protect your digital assets and infrastructure.\',
      \"icon\": Shield,
      \"features\": [\'Security Audits\',
        \'Penetration Testing\',
        \'Security Monitoring\',
        \'Incident Response\',
        \'Compliance Management\',
        \'Security Training\'
      ],
      \"href\": \'/services/cybersecurity\',
      \"color\": \'from-gray-500 to-slate-500\'
    }
  ];
  const process = [{
      \"step\": \'01\',
      \"title\": \'Discovery & Planning\',
      \"description\": \'We start by understanding your business needs, goals, and technical requirements.\'
    },
    {
      \"step\": \'02\',
      \"title\": \'Design & Architecture\',
      \"description\": \'Our team creates detailed technical specifications and system architecture.\'
    },
    {
      \"step\": \'03\',
      \"title\": \'Development & Testing\',
      \"description\": \'We build your solution using agile methodologies with continuous testing.\'
    },
    {


                Let's discuss your project requirements and how we can help you               </p>
              <div className=\"space-y-4\">
                <Link
                  href=\"/contact\"
                  className=\"block w-full bg-blue-600 \"hover\": bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors\"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href=\"/about\"


