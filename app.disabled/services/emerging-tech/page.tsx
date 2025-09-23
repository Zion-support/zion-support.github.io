export const metadata = {
  title: 'Emerging Technologies | Zion Tech Group',
  description: 'Cutting-edge solutions in Quantum Computing, IoT, AR/VR, Edge Computing, and other emerging technologies for next-generation applications.'
};

export default function EmergingTechPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Emerging Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with cutting-edge solutions in Quantum Computing, IoT, AR/VR, 
            Edge Computing, and other emerging technologies that will define the future.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Next-Generation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Quantum Computing"
              description="Harness the power of quantum mechanics for complex problem solving"
              features={["Quantum algorithm development", "Quantum simulation", "Quantum machine learning", "Quantum cryptography", "Quantum optimization", "Hardware integration"]}
              price="Starting at $50k"
              icon="⚛️"
            />
            <ServiceCard
              title="Internet of Things (IoT)"
              description="Connect and manage smart devices across your ecosystem"
              features={["IoT device development", "Sensor integration", "Edge computing", "Real-time analytics", "Device management", "Security protocols"]}
              price="Starting at $20k"
              icon="🌐"
            />
            <ServiceCard
              title="Augmented & Virtual Reality"
              description="Immersive experiences that transform user interaction"
              features={["AR/VR application development", "3D modeling", "Spatial computing", "Gesture recognition", "Cross-platform deployment", "Performance optimization"]}
              price="Starting at $25k"
              icon="🥽"
            />
            <ServiceCard
              title="Edge Computing"
              description="Process data closer to the source for faster, more efficient operations"
              features={["Edge infrastructure design", "Distributed processing", "Real-time analytics", "Low-latency applications", "Edge AI deployment", "Network optimization"]}
              price="Starting at $18k"
              icon="⚡"
            />
            <ServiceCard
              title="5G & Network Innovation"
              description="Next-generation connectivity solutions for ultra-fast communication"
              features={["5G network design", "Network slicing", "Ultra-low latency", "Massive IoT support", "Edge integration", "Performance optimization"]}
              price="Starting at $30k"
              icon="📡"
            />
            <ServiceCard
              title="Digital Twins"
              description="Create virtual replicas of physical systems for simulation and optimization"
              features={["Digital twin development", "Real-time synchronization", "Predictive modeling", "Simulation environments", "Data integration", "Analytics dashboards"]}
              price="Starting at $35k"
              icon="🔄"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Blockchain & Web3"
              description="Decentralized solutions for the next generation of the internet"
              features={["Smart contract development", "DeFi protocols", "NFT marketplaces", "DAO governance", "Cross-chain integration", "Security auditing"]}
              price="Starting at $22k"
              icon="⛓️"
            />
            <ServiceCard
              title="Computer Vision"
              description="Advanced image and video processing with AI capabilities"
              features={["Object detection", "Facial recognition", "Image classification", "Video analytics", "Real-time processing", "Custom model training"]}
              price="Starting at $16k"
              icon="👁️"
            />
            <ServiceCard
              title="Natural Language Processing"
              description="Intelligent text and speech processing solutions"
              features={["Text analysis", "Sentiment analysis", "Language translation", "Speech recognition", "Chatbot development", "Content generation"]}
              price="Starting at $14k"
              icon="🗣️"
            />
            <ServiceCard
              title="Robotics & Automation"
              description="Intelligent robots and automated systems for various industries"
              features={["Robot programming", "Automation workflows", "Sensor integration", "Machine learning", "Safety systems", "Human-robot interaction"]}
              price="Starting at $40k"
              icon="🤖"
            />
            <ServiceCard
              title="Biometric Systems"
              description="Secure authentication and identification solutions"
              features={["Fingerprint recognition", "Iris scanning", "Voice authentication", "Behavioral analysis", "Multi-modal systems", "Privacy protection"]}
              price="Starting at $19k"
              icon="🔐"
            />
            <ServiceCard
              title="Green Technology"
              description="Sustainable and environmentally friendly technology solutions"
              features={["Energy optimization", "Carbon tracking", "Sustainable computing", "Green data centers", "Renewable integration", "Environmental monitoring"]}
              price="Starting at $17k"
              icon="🌱"
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  features,
  price,
  icon
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Get Started
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Innovation Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Technology Assessment"
          price="$8k–$15k"
          duration="2–3 weeks"
          features={["Emerging tech evaluation", "ROI analysis", "Implementation roadmap", "Risk assessment", "Technology selection"]}
          popular={false}
        />
        <Plan
          name="Proof of Concept"
          price="$25k–$60k"
          duration="6–12 weeks"
          features={["MVP development", "Technology validation", "Performance testing", "User feedback", "Scalability planning"]}
          popular={true}
        />
        <Plan
          name="Full Implementation"
          price="$75k+"
          duration="12–24 weeks"
          features={["Production deployment", "Integration services", "Team training", "Ongoing support", "Performance optimization"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  duration,
  features,
  popular
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 ${
      popular ? 'border-blue-500' : 'border-gray-200'
    } relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Lead with Emerging Technologies?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Let's explore how cutting-edge technologies can give your business a competitive advantage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📞</span>
          <div>
            <div className="font-semibold text-gray-900">Phone</div>
            <div className="text-gray-600">+1 302 464 0950</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">✉️</span>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-gray-600">kleber@ziontechgroup.com</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📍</span>
          <div>
            <div className="font-semibold text-gray-900">Address</div>
            <div className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</div>
          </div>
        </div>
      </div>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Start Your Innovation Journey
      </a>
    </div>
  );
}