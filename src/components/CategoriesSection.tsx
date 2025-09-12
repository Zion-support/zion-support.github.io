
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
];

const specialServices = [
  {
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services"
  },
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Services Pricing",
    description: "Compare pricing and ROI for all our services",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services-pricing",
    color: "from-green-500 to-emerald-600",
    features: ["Transparent Pricing", "ROI Calculator", "Custom Quotes", "Volume Discounts"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and threat protection services",
    icon: <Shield className="w-10 h-10" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
    features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Cost Calculator",
    link: "/service-calculator"
  },
  {
    title: "Service Analytics",
    link: "/service-analytics"
  },
  {
    title: "Service Marketplace",
    link: "/service-marketplace"
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600",
    features: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600",
    features: ["Zero Trust", "Threat Intelligence", "SOC Services"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600",
    features: ["Multi-Cloud", "Infrastructure as Code", "Monitoring"]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Big data, BI, predictive analytics",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics"]
  },
  {
    title: "IoT & Edge Computing",
    icon: <Network className="w-6 h-6" />,
    description: "Connected devices, real-time processing",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-indigo-500 to-purple-600",
    features: ["IoT Platforms", "Edge Computing", "Sensor Networks"]
  },
  {
    title: "Blockchain & Web3",
    icon: <Zap className="w-6 h-6" />,
    description: "Smart contracts, decentralized solutions",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-yellow-500 to-orange-600",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Quantum Computing",
    icon: <Leaf className="w-6 h-6" />,
    description: "Quantum algorithms, optimization",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-teal-500 to-blue-600",
    features: ["Quantum Algorithms", "Optimization", "Simulation"]
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Immersive experiences, virtual worlds",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-pink-500 to-rose-600",
    features: ["Virtual Reality", "Augmented Reality", "3D Modeling"]
  },
  {
    title: "FinTech & Digital Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600",
    features: ["Digital Banking", "Payment Systems", "Lending Platforms"]
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
    title: "Comprehensive Services",
    link: "/comprehensive-services"
=======
    link: "/it-onsite-services",
    description: "Global IT support and consulting"
  },
  {
    title: "Micro SAAS Solutions",
    link: "/micro-saas-services",
    description: "Complete suite of business solutions"
  },
  {
    title: "AI Development",
    link: "/zion-hire-ai",
    description: "Custom AI solutions and platforms"
=======
=======
    title: "Micro SAAS Services",
    link: "/micro-saas-services"
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Services Pricing",
    link: "/services-pricing"
    title: "Enhanced Services",
    link: "/enhanced-services"
=======
    title: "Advanced AI Services",
    link: "/advanced-services"
  },
  {
    title: "Services Comparison",
    link: "/services-comparison"
    title: "AI Development",
    link: "/comprehensive-services"
  },
  {
    title: "Cloud Migration",
    link: "/comprehensive-services"
  },
  {
    title: "Cybersecurity",
    link: "/comprehensive-services"
  }
];

interface CategoriesSectionProps extends React.HTMLAttributes<HTMLElement> {
=======
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation solutions
            </p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
=======
            <GradientHeading>Explore Our Services</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of micro SAAS services, IT solutions, and innovative technology platforms
            </p>
            <div className="mt-6">
              <span className="inline-block bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm border border-zion-purple/30">
                ✨ {categories.length} Service Categories • 73+ Solutions Available
              </span>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
        {/* Featured Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <Link 
                key={category.title} 
                to={category.link} 
                className="group block"
              >
                <div className="rounded-xl overflow-hidden h-full border-2 border-zion-blue-light bg-zion-blue-dark p-8 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed">{category.description}</p>
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-purple-light transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
=======
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularCategories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
=======
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">{category.title}</h3>
                <p className="text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">{category.description}</p>
=======
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-zion-cyan" />
              <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Explore Categories</span>
              <Sparkles className="w-7 h-7 text-zion-cyan" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Discover Our Ecosystem</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div 
                className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20 hover:bg-zion-blue-dark/70"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-purple/20`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light/50 hover:bg-zion-blue-dark/70 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
