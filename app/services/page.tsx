import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Smartphone as Phone, Laptop, Headphones, CheckCircle, Star, Award, Rocket, Sparkles, Eye, Camera, Mic, Palette, Layers, Workflow, GitBranch, Cpu as Processor, Wrench, Search, MessageSquare, Calendar, CreditCard, ShoppingCart, Home, Car, Plane, Heart, BookOpen, GraduationCap, Music, Gamepad2, Video, Image, FileImage, FileVideo, FileAudio, FileCode, FileSpreadsheet, FileText as Document, FilePdf, FileArchive, Download, Upload, Share2, Copy, Edit, Trash2, Save, Plus, Minus, X, Check, AlertTriangle, Info, HelpCircle, ExternalLink, ArrowUp, ArrowDown, ArrowLeft, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Play, Pause, Stop, SkipBack, SkipForward, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, RefreshCw, RefreshCcw, Power, PowerOff, Battery, BatteryCharging, WifiOff, Bluetooth, BluetoothOff, Signal, SignalHigh, SignalLow, SignalZero, SignalMedium, Radio, RadioReceiver, Satellite, SatelliteDish, Antenna, Router, Switch, Hub, Cable, Plug, PlugZap, Lightbulb, LightbulbOff, Sun, Moon, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, CloudHail, Wind, Thermometer, Droplets, Snowflake, Umbrella, Tornado, Hurricane, Earthquake, Volcano, Mountain, TreePine, TreePalm, Flower, Leaf, Sprout, Bug, Fish, Bird, Cat, Dog, Rabbit, Hamster, Squirrel, Whale, Dolphin, Penguin, Octopus, Crab, Lobster, Shrimp, Snail, Bee, Butterfly, Ladybug, Spider, Ant, Mosquito, Fly, Worm, Snake, Lizard, Frog, Turtle, Crocodile, Alligator, Elephant, Giraffe, Lion, Tiger, Bear, Panda, Koala, Kangaroo, Monkey, Gorilla, Chimpanzee, Hippopotamus, Rhinoceros, Zebra, Horse, Cow, Pig, Sheep, Goat, Chicken, Duck, Turkey, Rooster, Owl, Eagle, Hawk, Falcon, Parrot, Peacock, Flamingo, Toucan, Hummingbird, Woodpecker, Robin, Cardinal, BlueJay, Crow, Raven, Magpie, Starling, Finch, Canary, Sparrow, Pigeon, Dove, Swan, Goose, Pelican, Stork, Heron, Crane, Ibis, Spoonbill, Sandpiper, Plover, Oystercatcher, Avocet, Stilt, Godwit, Curlew, Whimbrel, Snipe, Woodcock, Rail, Coot, Gallinule, Moorhen, Jacana, PaintedSnipe, Seedsnipe, PlainsWanderer, Buttonquail, Mesite, Sandgrouse } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Automation Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "AI Customer Service",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "AI Content"
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Cybersecurity",
      popular: true
    },
    {
      title: "5G Network Infrastructure Solutions",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for smart cities and enterprises.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Smart City Solutions", "Private Networks"],
      category: "5G Technology"
    },
    {
      title: "Cloud Infrastructure Management Pro",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with cost optimization.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "Multi-cloud", "DevOps Integration"],
      category: "Cloud Services"
    },
    {
      title: "AI-Powered Data Analytics Platform",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, and interactive dashboards for data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Data Visualization", "Custom Reports"],
      category: "Data Analytics"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Refactoring"],
      category: "Development Tools"
    },
    {
      title: "AI Marketing Automation Hub",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing Automation"
    },
    {
      title: "AI Document Intelligence Suite",
      description: "Intelligent document analysis, extraction, and processing with OCR technology, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Document Classification", "Search & Retrieval"],
      category: "Document Management"
    },
    {
      title: "AI Sales CRM Assistant Pro",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms and sales tools.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      category: "Sales & CRM"
    },
    {
      title: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization", "Market Prediction"],
      category: "Financial Services"
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations for healthcare providers.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-healthcare-diagnostics",
      color: "from-rose-500 to-pink-500",
      price: "Starting at $499/month",
      originalPrice: "$999/month",
      features: ["Medical Imaging", "Symptom Analysis", "Treatment Recommendations", "Patient Monitoring", "Drug Interaction", "Compliance Tracking"],
      category: "Healthcare AI"
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation for manufacturing and retail.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-supply-chain-optimizer",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Cost Analysis"],
      category: "Supply Chain"
    },
    {
      title: "AI Legal Research Assistant",
      description: "Advanced legal research and document analysis with case law search, contract review, and compliance monitoring for law firms and legal departments.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-legal-research",
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $329/month",
      originalPrice: "$659/month",
      features: ["Case Law Search", "Contract Analysis", "Compliance Monitoring", "Document Review", "Legal Research", "Precedent Analysis"],
      category: "Legal Tech"
    },
    {
      title: "AI Energy Management System",
      description: "Smart energy management with consumption optimization, renewable energy integration, and predictive maintenance for utilities and commercial buildings.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-energy-management",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Energy Optimization", "Renewable Integration", "Predictive Maintenance", "Smart Grid", "Cost Analysis", "Carbon Tracking"],
      category: "Energy Management"
    },
    {
      title: "Enterprise Database Management Pro",
      description: "Comprehensive database solutions with optimization, backup, recovery, and performance monitoring for enterprise applications and data warehouses.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Database Optimization", "Backup & Recovery", "Performance Monitoring", "Security Hardening", "Scalability Planning", "Migration Services"],
      category: "Database Services",
      popular: true
    },
    {
      title: "IT Infrastructure Monitoring Suite",
      description: "24/7 infrastructure monitoring with real-time alerts, performance analytics, and automated incident response for servers, networks, and applications.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/infrastructure-monitoring",
      color: "from-green-500 to-teal-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Real-time Monitoring", "Automated Alerts", "Performance Analytics", "Incident Response", "Capacity Planning", "Health Dashboards"],
      category: "Infrastructure"
    },
    {
      title: "Advanced Network Security Solutions",
      description: "Comprehensive network security with firewall management, intrusion detection, VPN solutions, and threat intelligence for enterprise networks.",
      icon: <Lock className="w-8 h-8" />,
      path: "/network-security",
      color: "from-red-500 to-pink-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Threat Intelligence", "Network Segmentation", "Compliance Auditing"],
      category: "Network Security"
    },
    {
      title: "Cloud Migration & Modernization",
      description: "Complete cloud migration services with application modernization, data migration, and cloud-native architecture design for digital transformation.",
      icon: <Server className="w-8 h-8" />,
      path: "/cloud-migration",
      color: "from-purple-500 to-violet-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Application Migration", "Data Migration", "Cloud Architecture", "Performance Optimization", "Cost Optimization", "Security Implementation"],
      category: "Cloud Migration"
    },
    {
      title: "DevOps & CI/CD Pipeline Solutions",
      description: "Complete DevOps implementation with continuous integration, deployment automation, container orchestration, and infrastructure as code.",
      icon: <Settings className="w-8 h-8" />,
      path: "/devops-solutions",
      color: "from-orange-500 to-amber-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Automated Testing", "Deployment Automation", "Monitoring & Logging"],
      category: "DevOps"
    },
    {
      title: "Enterprise Backup & Disaster Recovery",
      description: "Comprehensive backup solutions with automated scheduling, disaster recovery planning, and business continuity services for enterprise data protection.",
      icon: <HardDrive className="w-8 h-8" />,
      path: "/backup-disaster-recovery",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["Automated Backups", "Disaster Recovery", "Data Encryption", "Offsite Storage", "Recovery Testing", "Compliance Reporting"],
      category: "Data Protection"
    },
    {
      title: "Mobile App Development Services",
      description: "Native and cross-platform mobile app development with iOS, Android, and React Native solutions for enterprise and consumer applications.",
      icon: <Phone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Native iOS/Android", "Cross-platform Apps", "UI/UX Design", "API Integration", "App Store Optimization", "Maintenance & Support"],
      category: "Mobile Development"
    },
    {
      title: "Web Application Development",
      description: "Custom web application development with modern frameworks, responsive design, and scalable architecture for business applications and e-commerce.",
      icon: <Laptop className="w-8 h-8" />,
      path: "/web-development",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Custom Web Apps", "Responsive Design", "E-commerce Solutions", "API Development", "Performance Optimization", "SEO Implementation"],
      category: "Web Development"
    },
    {
      title: "IT Support & Help Desk Services",
      description: "24/7 IT support with remote assistance, help desk management, and technical support for end users and IT infrastructure maintenance.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/it-support",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["24/7 Support", "Remote Assistance", "Help Desk Management", "User Training", "Issue Resolution", "Preventive Maintenance"],
      category: "IT Support"
    },
    {
      title: "Network Infrastructure Design",
      description: "Complete network infrastructure design and implementation with LAN, WAN, wireless solutions, and network optimization for enterprise environments.",
      icon: <Network className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Network Design", "LAN/WAN Setup", "Wireless Solutions", "Network Optimization", "Security Implementation", "Performance Tuning"],
      category: "Network Infrastructure"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting with technology roadmaps, digital transformation planning, and technology assessment for business growth and efficiency.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Technology Roadmaps", "Digital Transformation", "IT Assessment", "Strategic Planning", "Technology Selection", "Implementation Guidance"],
      category: "IT Consulting"
    },
    {
      title: "Cybersecurity Audit & Compliance",
      description: "Comprehensive cybersecurity audits with compliance assessment, vulnerability testing, and security recommendations for regulatory requirements.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-audit",
      color: "from-red-500 to-orange-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Security Audits", "Compliance Assessment", "Vulnerability Testing", "Penetration Testing", "Risk Assessment", "Remediation Planning"],
      category: "Cybersecurity"
    },
    {
      title: "Data Center Services & Colocation",
      description: "Secure data center services with colocation, managed hosting, and infrastructure services for enterprise applications and data storage.",
      icon: <Server className="w-8 h-8" />,
      path: "/data-center-services",
      color: "from-slate-600 to-gray-600",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Colocation Services", "Managed Hosting", "Power & Cooling", "Physical Security", "Network Connectivity", "24/7 Monitoring"],
      category: "Data Center"
    },
    {
      title: "IT Asset Management Solutions",
      description: "Complete IT asset management with inventory tracking, lifecycle management, and cost optimization for hardware and software assets.",
      icon: <Settings className="w-8 h-8" />,
      path: "/asset-management",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["Asset Inventory", "Lifecycle Management", "Cost Tracking", "License Management", "Depreciation Tracking", "Compliance Reporting"],
      category: "Asset Management"
    },
    // NEW INNOVATIVE AI SERVICES
    {
      title: "AI Quantum Computing Solutions",
      description: "Revolutionary quantum computing services for complex optimization problems, cryptography, and advanced simulations. Harness quantum supremacy for breakthrough results.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/ai-quantum-computing",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $2,999/month",
      originalPrice: "$5,999/month",
      features: ["Quantum Algorithms", "Cryptography", "Optimization", "Simulation", "Quantum ML", "Research Support"],
      category: "Quantum AI",
      popular: true
    },
    {
      title: "AI Metaverse Development Platform",
      description: "Complete metaverse creation tools with AI-powered avatars, virtual worlds, NFT marketplaces, and immersive experiences for businesses and creators.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-metaverse-platform",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $799/month",
      originalPrice: "$1,599/month",
      features: ["Virtual Worlds", "AI Avatars", "NFT Marketplace", "VR/AR Integration", "Blockchain", "Social Features"],
      category: "Metaverse AI"
    },
    {
      title: "AI Autonomous Vehicle Systems",
      description: "Advanced AI systems for autonomous vehicles including computer vision, sensor fusion, path planning, and real-time decision making for self-driving cars.",
      icon: <Car className="w-8 h-8" />,
      path: "/ai-autonomous-vehicles",
      color: "from-red-500 to-orange-500",
      price: "Starting at $1,499/month",
      originalPrice: "$2,999/month",
      features: ["Computer Vision", "Sensor Fusion", "Path Planning", "Real-time AI", "Safety Systems", "Fleet Management"],
      category: "Autonomous AI"
    },
    {
      title: "AI Space Technology Solutions",
      description: "Cutting-edge AI applications for space exploration, satellite management, space debris tracking, and autonomous space missions with advanced robotics.",
      icon: <Rocket className="w-8 h-8" />,
      path: "/ai-space-technology",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,999/month",
      originalPrice: "$3,999/month",
      features: ["Satellite AI", "Space Robotics", "Debris Tracking", "Mission Planning", "Space Weather", "Astronaut Support"],
      category: "Space AI"
    },
    {
      title: "AI Climate Intelligence Platform",
      description: "Advanced climate modeling and environmental monitoring using AI to predict weather patterns, track climate change, and optimize renewable energy systems.",
      icon: <CloudRain className="w-8 h-8" />,
      path: "/ai-climate-intelligence",
      color: "from-green-500 to-teal-500",
      price: "Starting at $599/month",
      originalPrice: "$1,199/month",
      features: ["Weather Prediction", "Climate Modeling", "Renewable Optimization", "Carbon Tracking", "Environmental Monitoring", "Disaster Prevention"],
      category: "Climate AI"
    },
    {
      title: "AI Brain-Computer Interface",
      description: "Revolutionary brain-computer interface technology enabling direct neural control of devices, thought-to-text conversion, and cognitive enhancement applications.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-brain-interface",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $2,499/month",
      originalPrice: "$4,999/month",
      features: ["Neural Control", "Thought-to-Text", "Cognitive Enhancement", "Medical Applications", "Research Tools", "Accessibility"],
      category: "Neuro AI"
    },
    {
      title: "AI Digital Twin Technology",
      description: "Create digital replicas of physical assets, processes, and systems with real-time monitoring, predictive maintenance, and simulation capabilities.",
      icon: <Layers className="w-8 h-8" />,
      path: "/ai-digital-twins",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $899/month",
      originalPrice: "$1,799/month",
      features: ["3D Modeling", "Real-time Sync", "Predictive Analytics", "Simulation", "IoT Integration", "Performance Optimization"],
      category: "Digital Twins"
    },
    {
      title: "AI Edge Computing Intelligence",
      description: "Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities. Perfect for IoT, autonomous systems, and mobile applications.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/ai-edge-computing",
      color: "from-orange-500 to-red-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Edge AI Models", "Real-time Processing", "Offline Capability", "IoT Integration", "Low Latency", "Resource Optimization"],
      category: "Edge AI"
    },
    {
      title: "AI Synthetic Media Studio",
      description: "Create realistic synthetic media including deepfakes, virtual influencers, AI-generated videos, and voice synthesis for marketing and entertainment.",
      icon: <Video className="w-8 h-8" />,
      path: "/ai-synthetic-media",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $699/month",
      originalPrice: "$1,399/month",
      features: ["Deepfake Technology", "Virtual Influencers", "Voice Synthesis", "Video Generation", "Face Swapping", "Content Creation"],
      category: "Synthetic Media"
    },
    {
      title: "AI Blockchain Intelligence",
      description: "Advanced blockchain analytics and DeFi solutions with AI-powered trading bots, smart contract auditing, and cryptocurrency market analysis.",
      icon: <Layers className="w-8 h-8" />,
      path: "/ai-blockchain-intelligence",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $799/month",
      originalPrice: "$1,599/month",
      features: ["Blockchain Analytics", "DeFi Solutions", "Trading Bots", "Smart Contract Audit", "Market Analysis", "Risk Assessment"],
      category: "Blockchain AI"
    },
    // NEW MICRO SAAS SERVICES
    {
      title: "Zion AI Voice Cloning Studio",
      description: "Professional voice cloning and synthesis platform for creating custom voice assistants, audiobooks, and multilingual content with natural speech patterns.",
      icon: <Mic className="w-8 h-8" />,
      path: "/zion-ai-voice-cloning",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Voice Cloning", "Text-to-Speech", "Multilingual Support", "Emotion Control", "Voice Training", "API Integration"],
      category: "Voice AI"
    },
    {
      title: "Zion AI Image Generation Pro",
      description: "Advanced AI image generation with custom models, style transfer, and professional editing tools for marketing, design, and creative content.",
      icon: <Image className="w-8 h-8" />,
      path: "/zion-ai-image-generation",
      color: "from-pink-500 to-purple-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["AI Image Generation", "Style Transfer", "Custom Models", "Batch Processing", "High Resolution", "Commercial License"],
      category: "Image AI"
    },
    {
      title: "Zion AI Video Editor Pro",
      description: "Intelligent video editing with automatic scene detection, smart cuts, background removal, and AI-powered effects for professional video production.",
      icon: <Video className="w-8 h-8" />,
      path: "/zion-ai-video-editor",
      color: "from-red-500 to-pink-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Auto Scene Detection", "Smart Cuts", "Background Removal", "AI Effects", "Auto Subtitles", "Export Options"],
      category: "Video AI"
    },
    {
      title: "Zion AI Music Composer",
      description: "AI-powered music composition and production tool with genre-specific models, instrument simulation, and professional mixing capabilities.",
      icon: <Music className="w-8 h-8" />,
      path: "/zion-ai-music-composer",
      color: "from-purple-500 to-violet-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["AI Composition", "Genre Models", "Instrument Simulation", "Mixing Tools", "Royalty-Free", "MIDI Export"],
      category: "Music AI"
    },
    {
      title: "Zion AI Game Development Kit",
      description: "Complete game development platform with AI-powered character behavior, procedural content generation, and intelligent game balancing.",
      icon: <Gamepad2 className="w-8 h-8" />,
      path: "/zion-ai-game-dev",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["AI Characters", "Procedural Generation", "Game Balancing", "Physics Simulation", "Multiplayer AI", "Asset Generation"],
      category: "Game AI"
    },
    {
      title: "Zion AI Learning Management System",
      description: "Intelligent learning platform with personalized education paths, automated assessments, and AI tutoring for educational institutions and corporate training.",
      icon: <GraduationCap className="w-8 h-8" />,
      path: "/zion-ai-lms",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Personalized Learning", "AI Tutoring", "Auto Assessments", "Progress Tracking", "Content Generation", "Analytics"],
      category: "Education AI"
    },
    {
      title: "Zion AI Real Estate Assistant",
      description: "Comprehensive real estate platform with property valuation, market analysis, virtual tours, and AI-powered property recommendations.",
      icon: <Home className="w-8 h-8" />,
      path: "/zion-ai-real-estate",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Property Valuation", "Market Analysis", "Virtual Tours", "AI Recommendations", "Investment Analysis", "CRM Integration"],
      category: "Real Estate AI"
    },
    {
      title: "Zion AI Fitness Coach Pro",
      description: "Personal AI fitness trainer with workout generation, form analysis, nutrition planning, and progress tracking for personalized fitness journeys.",
      icon: <Heart className="w-8 h-8" />,
      path: "/zion-ai-fitness-coach",
      color: "from-red-500 to-pink-500",
      price: "Starting at $99/month",
      originalPrice: "$199/month",
      features: ["Workout Generation", "Form Analysis", "Nutrition Planning", "Progress Tracking", "Wearable Integration", "Personalized Plans"],
      category: "Fitness AI"
    },
    {
      title: "Zion AI Travel Planner",
      description: "Intelligent travel planning with personalized itineraries, real-time recommendations, budget optimization, and AI-powered travel assistance.",
      icon: <Plane className="w-8 h-8" />,
      path: "/zion-ai-travel-planner",
      color: "from-cyan-500 to-teal-500",
      price: "Starting at $79/month",
      originalPrice: "$159/month",
      features: ["Personalized Itineraries", "Real-time Updates", "Budget Optimization", "Local Recommendations", "Booking Integration", "Travel Alerts"],
      category: "Travel AI"
    },
    {
      title: "Zion AI E-commerce Optimizer",
      description: "Complete e-commerce optimization suite with AI-powered product recommendations, pricing optimization, inventory management, and customer insights.",
      icon: <ShoppingCart className="w-8 h-8" />,
      path: "/zion-ai-ecommerce-optimizer",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Product Recommendations", "Pricing Optimization", "Inventory Management", "Customer Insights", "A/B Testing", "Conversion Optimization"],
      category: "E-commerce AI"
    },
    // NEW IT SERVICES
    {
      title: "Advanced IoT Solutions",
      description: "Comprehensive Internet of Things implementation with sensor networks, data analytics, and real-time monitoring for smart cities and industrial applications.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/advanced-iot-solutions",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Sensor Networks", "Data Analytics", "Real-time Monitoring", "Smart City Solutions", "Industrial IoT", "Edge Computing"],
      category: "IoT Solutions"
    },
    {
      title: "AR/VR Development Studio",
      description: "Complete augmented and virtual reality development services with immersive experiences, training simulations, and interactive applications.",
      icon: <Eye className="w-8 h-8" />,
      path: "/ar-vr-development-studio",
      color: "from-purple-500 to-violet-500",
      price: "Starting at $599/month",
      originalPrice: "$1,199/month",
      features: ["AR Applications", "VR Experiences", "Training Simulations", "3D Modeling", "Interactive Design", "Hardware Integration"],
      category: "AR/VR Development"
    },
    {
      title: "Blockchain Development Services",
      description: "Complete blockchain solutions including smart contracts, DeFi applications, NFT marketplaces, and cryptocurrency integrations.",
      icon: <Layers className="w-8 h-8" />,
      path: "/blockchain-development-services",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $799/month",
      originalPrice: "$1,599/month",
      features: ["Smart Contracts", "DeFi Applications", "NFT Marketplaces", "Cryptocurrency Integration", "Token Development", "Security Auditing"],
      category: "Blockchain Development"
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Next-generation cybersecurity solutions with AI-powered threat detection, zero-trust architecture, and comprehensive security monitoring.",
      icon: <Shield className="w-8 h-8" />,
      path: "/advanced-cybersecurity-suite",
      color: "from-red-500 to-pink-500",
      price: "Starting at $499/month",
      originalPrice: "$999/month",
      features: ["AI Threat Detection", "Zero-Trust Architecture", "Security Monitoring", "Incident Response", "Compliance Management", "Penetration Testing"],
      category: "Cybersecurity"
    },
    {
      title: "Cloud-Native Development",
      description: "Modern cloud-native application development with microservices, containerization, and serverless architecture for scalable applications.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-native-development",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $699/month",
      originalPrice: "$1,399/month",
      features: ["Microservices", "Containerization", "Serverless Architecture", "Kubernetes", "API Development", "Scalability"],
      category: "Cloud Development"
    },
    {
      title: "AI-Powered DevOps Platform",
      description: "Intelligent DevOps platform with automated testing, deployment, monitoring, and optimization using AI and machine learning.",
      icon: <GitBranch className="w-8 h-8" />,
      path: "/ai-powered-devops",
      color: "from-green-500 to-teal-500",
      price: "Starting at $449/month",
      originalPrice: "$899/month",
      features: ["Automated Testing", "AI Deployment", "Intelligent Monitoring", "Performance Optimization", "Predictive Analytics", "Self-Healing Systems"],
      category: "AI DevOps"
    },
    {
      title: "Edge Computing Solutions",
      description: "Distributed edge computing infrastructure for low-latency applications, IoT processing, and real-time data analytics at the network edge.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/edge-computing-solutions",
      color: "from-orange-500 to-red-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Edge Infrastructure", "Low Latency Processing", "IoT Integration", "Real-time Analytics", "Distributed Computing", "Network Optimization"],
      category: "Edge Computing"
    },
    {
      title: "Quantum Computing Services",
      description: "Quantum computing solutions for optimization problems, cryptography, and advanced simulations with access to quantum hardware and algorithms.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/quantum-computing-services",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $1,999/month",
      originalPrice: "$3,999/month",
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Quantum Simulation", "Research Support", "Hardware Access"],
      category: "Quantum Computing"
    },
    {
      title: "5G Network Optimization",
      description: "Advanced 5G network optimization services with performance tuning, coverage analysis, and capacity planning for maximum efficiency.",
      icon: <Signal className="w-8 h-8" />,
      path: "/5g-network-optimization",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $599/month",
      originalPrice: "$1,199/month",
      features: ["Network Optimization", "Coverage Analysis", "Capacity Planning", "Performance Tuning", "Interference Management", "Quality Assurance"],
      category: "5G Optimization"
    },
    {
      title: "Satellite Communication Systems",
      description: "Complete satellite communication solutions including ground stations, satellite tracking, and global connectivity services for remote locations.",
      icon: <Satellite className="w-8 h-8" />,
      path: "/satellite-communication-systems",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $899/month",
      originalPrice: "$1,799/month",
      features: ["Ground Stations", "Satellite Tracking", "Global Connectivity", "Remote Access", "Data Transmission", "Network Management"],
      category: "Satellite Communications"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI and IT services including business intelligence, customer support automation, content generation, cybersecurity, 5G solutions, and cloud infrastructure. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI services, business intelligence, customer support automation, content generation, cybersecurity, 5G solutions, cloud infrastructure, data analytics, code assistant, marketing automation, document processing, CRM, financial analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation. 
              From intelligent automation to cutting-edge infrastructure, we provide end-to-end technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI & Technology Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered services and cutting-edge technology solutions designed to transform your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
