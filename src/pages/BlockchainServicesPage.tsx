import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link, 
  Coins, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  Network, 
  Wallet, 
  BarChart3,
  Star,
  Award,
  Target,
  Rocket,
  Crown,
  Sparkles,
  ChevronRight,
  Users,
  Clock,
  Check
 } from 'lucide-react';

const BlockchainServicesPage: [any, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blockchainServices = [
    {
        id: "smart-contracts",
        title: "Smart Contract Development",
        description: "Custom smart contract development for DeFi, NFTs, and enterprise blockchain solutions with comprehensive auditing.",
        price: 3500,
        currency: "$",
        period: "/project",
        features: [
            "Custom smart contract development",
            "Security auditing & testing",
            "Gas optimization",
            "Multi-chain deployment",
            "Documentation & training",
            "Ongoing support"
        ],
        icon: <Zap className="h-8 w-8"/>,
        category: "Development",
        badge: "Popular",
        link: "/services",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "defi-platform",
        title: "DeFi Platform Development",
        description: "Complete DeFi platform development including DEX, lending protocols, yield farming, and liquidity management.",
        price: 15000,
        currency: "$",
        period: "/platform",
        features: [
            "DEX development",
            "Lending protocols",
            "Yield farming",
            "Liquidity management",
            "Security audits",
            "UI/UX design"
        ],
        icon: <Coins className="h-8 w-8"/>,
        category: "DeFi",
        badge: "Enterprise",
        link: "/services",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "nft-marketplace",
        title: "NFT Marketplace Development",
        description: "Custom NFT marketplace with minting, trading, auctions, and royalty distribution systems.",
        price: 8000,
        currency: "$",
        period: "/marketplace",
        features: [
            "NFT minting & trading",
            "Auction system",
            "Royalty distribution",
            "Multi-chain support",
            "Admin dashboard",
            "Analytics & reporting"
        ],
        icon: <Database className="h-8 w-8"/>,
        category: "NFTs",
        badge: "Featured",
        link: "/services",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "enterprise-blockchain",
        title: "Enterprise Blockchain Solutions",
        description: "Private blockchain networks for enterprise use cases including supply chain, identity management, and asset tracking.",
        price: 25000,
        currency: "$",
        period: "/solution",
        features: [
            "Private blockchain setup",
            "Consensus mechanisms",
            "Identity management",
            "Supply chain tracking",
            "Integration APIs",
            "Training & support"
        ],
        icon: <Network className="h-8 w-8"/>,
        category: "Enterprise",
        badge: "Custom",
        link: "/services",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "blockchain-security",
        title: "Blockchain Security & Auditing",
        description: "Comprehensive security audits, penetration testing, and vulnerability assessment for blockchain applications.",
        price: 5000,
        currency: "$",
        period: "/audit",
        features: [
            "Smart contract auditing",
            "Penetration testing",
            "Vulnerability assessment",
            "Security best practices",
            "Compliance checking",
            "Remediation guidance"
        ],
        icon: <Shield className="h-8 w-8"/>,
        category: "Security",
        badge: "Critical",
        link: "/services",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "blockchain-consulting",
        title: "Blockchain Strategy Consulting",
        description: "Strategic consulting for blockchain adoption, tokenomics design, and regulatory compliance guidance.",
        price: 3000,
        currency: "$",
        period: "/day",
        features: [
            "Blockchain strategy",
            "Tokenomics design",
            "Regulatory compliance",
            "Technology selection",
            "Implementation roadmap",
            "Risk assessment"
        ],
        icon: <BarChart3 className="h-8 w-8"/>,
        category: "Consulting",
        badge: "Expert",
        link: "/services",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: blockchainServices.length },
    { id: 'Development', name: 'Development', count: blockchainServices.filter(s  => s.category === 'Development').length },
    { id: 'DeFi', name: 'DeFi', count: blockchainServices.filter(s  => s.category === 'DeFi').length },
    { id: 'NFTs', name: 'NFTs', count: blockchainServices.filter(s  => s.category === 'NFTs').length },
    { id: 'Enterprise', name: 'Enterprise', count: blockchainServices.filter(s  => s.category === 'Enterprise').length },
    { id: 'Security', name: 'Security', count: blockchainServices.filter(s  => s.category === 'Security').length },
    { id: 'Interoperability', name: 'Interoperability', count: blockchainServices.filter(s  => s.category === 'Interoperability').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? blockchainServices: anyblockchainServices.filter(service  => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Digital Economy
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. From DeFi platforms to enterprise solutions, 
              we deliver secure, scalable, and innovative blockchain applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service, index)  => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                {/* Service Image */}
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative overflow-hidden">
                  <service.icon className="w-16 h-16 text-zion-cyan z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10"></div>
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      service.badge === 'Popular' ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white' :
                      service.badge === 'Enterprise' ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white' :
                      service.badge === 'Featured' ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white' :
                      service.badge === 'Custom' ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white' :
                      service.badge === 'Essential' ? 'bg-gradient-to-r from-zion-cyan to-zion-green text-white' :
                      'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <span className="text-zion-slate-light">{service.period}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-zion-cyan text-sm font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine deep blockchain expertise with cutting-edge technology to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Security First",
                description: "Enterprise-grade security with comprehensive auditing and testing protocols."
              },
              {
                icon: Rocket,
                title: "Scalable Solutions",
                description: "Built for growth with architecture that scales with your business needs."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Blockchain specialists with years of experience in DeFi, NFTs, and enterprise solutions."
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Agile development process ensuring rapid delivery without compromising quality."
              },
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "Successfully delivered blockchain solutions for companies across industries."
              },
              {
                icon: Globe,
                title: "Multi-Chain Support",
                description: "Experience with Ethereum, Polygon, Solana, and other leading blockchain networks."
              }
            ].map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Blockchain Use Cases</h2>
            <p className="text-zion-slate-light text-lg">
              Discover how blockchain technology can transform your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (<div key={index} className="text-center p-6 border border-zion-blue-light rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple rounded-full mb-4">
                  <div className="text-white">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Blockchain Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Blockchain Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of blockchain solutions designed to address your specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockchainServices.map((service) => (<Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                      {service.category}
                    </Badge>
                    {service.badge && (<Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {service.badge}
                      </Badge>)}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (<li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                        <span>{feature}</span>
                      </li>))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future with Blockchain?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Join the blockchain revolution and transform your business with decentralized technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Blockchain Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Blockchain Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>);
}
