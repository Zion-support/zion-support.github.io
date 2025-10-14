import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle, Code, Users, Target } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for DeFi, NFTs, and blockchain applications'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'DApp Development',
      description: 'Decentralized applications with seamless Web3 integration and user experience'
    }
}