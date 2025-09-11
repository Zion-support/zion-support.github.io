import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
export default function EmergingTech() {;

  const technologies = [];
},
    {;
      icon: Lock,";
      title: "Blockchain & Web3",";
      description: "Decentralized applications, smart contracts, and blockchain solutions for secure, transparent operations.",";
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Cryptocurrency Integration"];
},
    {;
      icon: Globe,";
      title: "Internet of Things (IoT)",";
      description: "Connected devices and IoT ecosystems for smart homes, cities, and industrial automation.",";
      features: ["Device Management", "Data Analytics", "Remote Monitoring", "Automation Systems"];
},
    {;
      icon: Eye,";
      title: "Augmented & Virtual Reality",";
      description: "Immersive AR/VR experiences for training, entertainment, and business applications.",";
      features: ["AR Applications", "VR Experiences", "Mixed Reality", "3D Visualization"];
},
    {;
      icon: Zap,";
      title: "Edge Computing",";
      description: "Distributed computing solutions that bring processing power closer to data sources.",";
      features: ["Real-time Processing", "Reduced Latency", "Bandwidth Optimization", "Offline Capabilities"];
},
    {;
      icon: Database,";
      title: "Quantum Computing",";
      description: "Next-generation computing solutions leveraging quantum mechanics for complex problem solving.",";
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"];
  ];