import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, TestTube, Brain, Atom, Target, Award, ArrowRight, TrendingUp, Users, Star, Globe, Shield, Cpu, Network } from 'lucide-react';
const researchAreas = [
    {
        id: 1,
        title: "Artificial Intelligence & Machine Learning",
        icon: <Brain className="w-8 h-8"/>,
        color: "from-zion-purple to-zion-purple-dark",
        description: "Advanced AI research in computer vision, natural language processing, and autonomous systems",
        projects: 25,
        researchers: 18,
        publications: 12,
        patents: 8,
        funding: "$2.5M",
        status: "Active",
        highlights: [
            "Computer Vision Breakthroughs",
            "NLP Model Optimization",
            "Autonomous Systems Research",
            "AI Ethics & Governance"
        ],
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "Custom Frameworks"],
        partners: ["MIT", "Stanford", "Google Research", "Microsoft Research"]
    },
    {
        id: 2,
        title: "Quantum Computing & Cryptography",
        icon: <Atom className="w-8 h-8"/>,
        color: "from-zion-cyan to-zion-blue",
        description: "Pioneering research in quantum algorithms, quantum-safe cryptography, and quantum machine learning",
        projects: 18,
        researchers: 12,
        publications: 8,
        patents: 5,
        funding: "$1.8M",
        status: "Active",
        highlights: [
            "Quantum Algorithm Development",
            "Post-Quantum Cryptography",
            "Quantum Machine Learning",
            "Quantum Error Correction"
        ],
        technologies: ["Qiskit", "Cirq", "Custom Quantum Simulators", "Cryptographic Libraries"],
        partners: ["IBM Quantum", "Google Quantum", "MIT Lincoln Lab", "NIST"]
    },
    {
        id: 3,
        title: "Blockchain & Distributed Systems",
        icon: <Network className="w-8 h-8"/>,
        color: "from-zion-cyan-light to-zion-cyan",
        description: "Research in blockchain scalability, consensus mechanisms, and decentralized applications",
        projects: 22,
        researchers: 15,
        publications: 10,
        patents: 6,
        funding: "$2.1M",
        status: "Active",
        highlights: [
            "Scalability Solutions",
            "Consensus Mechanisms",
            "DeFi Protocols",
            "Cross-Chain Interoperability"
        ],
        technologies: ["Ethereum", "Polkadot", "Solana", "Custom Blockchains"],
        partners: ["Ethereum Foundation", "Polkadot Network", "Cardano", "Chainlink"]
    },
    {
        id: 4,
        title: "Cybersecurity & Privacy",
        icon: <Shield className="w-8 h-8"/>,
        color: "from-zion-purple-light to-zion-purple",
        description: "Advanced research in threat detection, privacy-preserving technologies, and secure systems",
        projects: 20,
        researchers: 14,
        publications: 9,
        patents: 7,
        funding: "$1.9M",
        status: "Active",
        highlights: [
            "Threat Intelligence",
            "Zero-Knowledge Proofs",
            "Secure Multi-Party Computation",
            "Privacy-Preserving ML"
        ],
        technologies: ["Custom Security Tools", "Privacy Frameworks", "Threat Detection", "Encryption"],
        partners: ["DARPA", "NSA", "CISA", "Academic Institutions"]
    },
    {
        id: 5,
        title: "Edge Computing & IoT",
        icon: <Cpu className="w-8 h-8"/>,
        color: "from-zion-cyan to-zion-purple",
        description: "Research in edge computing architectures, IoT security, and distributed intelligence",
        projects: 16,
        researchers: 11,
        publications: 7,
        patents: 4,
        funding: "$1.5M",
        status: "Active",
        highlights: [
            "Edge AI Deployment",
            "IoT Security Protocols",
            "Distributed Computing",
            "Real-time Processing"
        ],
        technologies: ["Kubernetes", "Docker", "Custom Edge Runtime", "IoT Frameworks"],
        partners: ["Intel", "ARM", "Qualcomm", "Industrial Partners"]
    },
    {
        id: 6,
        title: "Sustainable Technology",
        icon: <Globe className="w-8 h-8"/>,
        color: "from-zion-purple to-zion-cyan",
        description: "Research in green computing, renewable energy systems, and sustainable AI",
        projects: 14,
        researchers: 9,
        publications: 6,
        patents: 3,
        funding: "$1.2M",
        status: "Active",
        highlights: [
            "Green AI Algorithms",
            "Energy-Efficient Computing",
            "Renewable Energy Integration",
            "Carbon Footprint Reduction"
        ],
        technologies: ["Energy Monitoring", "Green Computing", "Renewable Systems", "Sustainability Tools"],
        partners: ["DOE", "EPA", "Academic Institutions", "Green Tech Companies"]
    }
];
const innovationStats = [
    { icon: <Lightbulb className="w-6 h-6"/>, value: "120+", label: "Research Projects" },
    { icon: <Users className="w-6 h-6"/>, value: "80+", label: "Researchers" },
    { icon: <Award className="w-6 h-6"/>, value: "50+", label: "Publications" },
    { icon: <Target className="w-6 h-6"/>, value: "30+", label: "Patents Filed" },
    { icon: <TrendingUp className="w-6 h-6"/>, value: "$10M+", label: "Research Funding" },
    { icon: <Star className="w-6 h-6"/>, value: "15+", label: "Industry Partners" }
];
const researchLabs = [
    {
        name: "AI Research Lab",
        location: "San Francisco",
        focus: "Machine Learning & Computer Vision",
        equipment: "High-performance GPUs, Custom AI Infrastructure",
        projects: 12,
        researchers: 8
    },
    {
        name: "Quantum Computing Lab",
        location: "Boston",
        focus: "Quantum Algorithms & Cryptography",
        equipment: "Quantum Simulators, Cryptographic Testing",
        projects: 8,
        researchers: 6
    },
    {
        name: "Blockchain Innovation Lab",
        location: "London",
        focus: "Distributed Systems & DeFi",
        equipment: "Blockchain Testnets, Smart Contract Testing",
        projects: 10,
        researchers: 7
    },
    {
        name: "Cybersecurity Lab",
        location: "Washington DC",
        focus: "Threat Detection & Privacy",
        equipment: "Security Testing Environment, Privacy Tools",
        projects: 9,
        researchers: 5
    }
];
export function InnovationResearchSection() {
    const [selectedResearch, setSelectedResearch] = useState(null);
    const [hoveredLab, setHoveredLab] = useState(null);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

export default InnovationResearchSection;
