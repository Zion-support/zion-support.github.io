import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkIcon, DollarSign as Coins, Shield, Zap, Database, Globe, TrendingUp, CheckCircle, ArrowRight, Lock, Network, Wallet, BarChart3 } from "lucide-react";
const blockchainServices = [
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Database,
  Link as LinkIcon,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  TrendingUp,
  Users,
  Lock,
  BarChart3,
  Settings,
  Lightbulb,
  Rocket,
  Coins
} from "lucide-react";
const BlockchainServicesPage = () => {
  const blockchainServices = [
    {
      id: "smart-contracts",
      title: "Smart Contracts",
      description: "Develop and deploy secure, audited smart contracts for various use cases",
      icon: <Database className="w-8 h-8"   />,
      features: ["Contract Development", "Security Auditing", "Testing & Deployment", "Maintenance"],
      useCases: ["DeFi Applications", "NFT Platforms", "Supply Chain", "Voting Systems"],
      pricing: "Starting from $4,500/month"
    },
    {
      id: "defi-solutions",
      title: "DeFi Solutions",
      description: "Build decentralized finance applications and protocols",
      icon: <Coins className="w-8 h-8"   />,
      features: ["DEX Development", "Lending Protocols", "Yield Farming", "Staking Platforms"],
      useCases: ["Cryptocurrency Trading", "Lending & Borrowing", "Asset Management", "Insurance"],
      pricing: "Starting from $6,000/month"
    },
    {
      id: "nft-platforms",
      title: "NFT Platforms",
      description: "Create and manage non-fungible token marketplaces and applications",
      icon: <LinkIcon className="w-8 h-8"   />,
      features: ["Marketplace Development", "Minting Services", "Metadata Management", "Royalty Systems"],
      useCases: ["Digital Art", "Gaming", "Collectibles", "Real Estate"],
      pricing: "Starting from $3,800/month"
    },
    {
      id: "enterprise-blockchain",
      title: "Enterprise Blockchain",
      description: "Private and consortium blockchain solutions for enterprise use",
      icon: <Globe className="w-8 h-8"   />,
      features: ["Private Networks", "Consortium Management", "Permission Systems", "Integration"],
      useCases: ["Supply Chain", "Identity Management", "Asset Tracking", "Compliance"],
      pricing: "Starting from $8,500/month"