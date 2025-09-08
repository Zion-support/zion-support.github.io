import React, { useState } from 'react';
import { motion  } from 'framer-motion.ts';
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

const BlockchainServicesPage[, React.Dispatch<React.SetStateAction<any>>] = () => {
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
const blockchainBenefits = [
    {
        title: "Transparency",
        description: "Immutable, transparent records that build trust and enable verifiable transactions",
        icon: <Globe className="h-6 w-6"/>
    },
    {
        title: "Security",
        description: "Cryptographic security and decentralized architecture protect against fraud and attacks",
        icon: <Lock className="h-6 w-6"/>
    },
    {
        title: "Efficiency",
        description: "Automated smart contracts reduce intermediaries and streamline complex processes",
        icon: <Zap className="h-6 w-6"/>
    },
    {
        title: "Innovation",
        description: "Enable new business models and revenue streams through tokenization and DeFi",
        icon: <TrendingUp className="h-6 w-6"/>
    }
];
const useCases = [
    {
        title: "Supply Chain Management",
        description: "Track products from origin to consumer with immutable records and real-time visibility",
        icon: <LinkIcon className="h-6 w-6"/>
    },
    {
        title: "Digital Identity",
        description: "Self-sovereign identity solutions for secure, privacy-preserving authentication",
        icon: <Shield className="h-6 w-6"/>
    },
    {
        title: "Asset Tokenization",
        description: "Convert real-world assets into digital tokens for fractional ownership and trading",
        icon: <Coins className="h-6 w-6"/>
    },
    {
        title: "Decentralized Finance",
        description: "Build financial services without intermediaries using smart contracts and DeFi protocols",
        icon: <Wallet className="h-6 w-6"/>
    }
];
export default function BlockchainServicesPage() {
    return (<div className="min-h-screen bg-background">
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


