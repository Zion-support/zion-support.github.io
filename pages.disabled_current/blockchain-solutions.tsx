import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { Shield, Zap, Globe, Lock, Database, ArrowRight, CheckCircle, Users, Award } from "lucide-react";
const BlockchainSolutions: NextPage = () => {
  const services = [
    {
      icon: Shield,
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
      features: ["Solidity development", "Security auditing", "Gas optimization", "Testing frameworks"]
},
    {
      icon: Zap,
      title: "DeFi Solutions",
      description: "Decentralized finance platforms including DEXs, lending protocols, and yield farming",
      features: ["DEX development", "Lending protocols", "Yield farming", "Liquidity pools"]
},
    {
      icon: Globe,
      title: "Cross-Chain Integration",
      description: "Multi-blockchain solutions for seamless asset transfers and interoperability",
      features: ["Bridge development", "Cross-chain swaps", "Multi-chain wallets", "Interoperability protocols"]
},
    {
      icon: Lock,
      title: "Security Audits",
      description: "Comprehensive security audits for smart contracts and blockchain applications",
      features: ["Code review", "Vulnerability assessment", "Penetration testing", "Compliance checks"]