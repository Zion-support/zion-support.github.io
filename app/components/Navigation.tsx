'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Home, Leaf, ChefHat, Moon, Newspaper, Receipt, BookOpen, GraduationCap, Award, Briefcase, Gift, PartyPopper, Shirt, Activity, Stethoscope, Pill, Droplets, Apple, Dumbbell, Footprints, Bike, Waves, Golf, Tennis, Soccer, Basketball, Music, Palette, Camera, Video, Feather, Book, Edit, Share2, Star, Image, Gamepad2, Headphones, Film, Scissors, Search, Type, Grid, Repeat, Layers, Lightbulb, Gem, Atom, Mountain, Building, Sofa, TreePine, Chair, Car, Plane, Ship, Bot, Drone, Satellite, Rocket, Orbit, Anchor, Snowflake, Flame, Circle, ArrowUp, Train, Volume2, Hand, AlertTriangle, Scale, Gauge, Wind, Sun, Thermometer, Compass, ArrowDown, RefreshCw, X, Wrench, Ruler, Map, Clipboard, Scan, Microscope, Baby, Wheelchair, Navigation, Trophy, Lungs, Network, GitBranch, Bird, Toggle, MousePointer, Key, Columns } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare, description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart, description: 'ML forecasting' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Box, description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu, description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle, description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText, description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention' },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart, description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', href: '/ai-voice-assistant', icon: Mic, description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation' },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing', icon: Atom, description: 'Quantum AI algorithms' },
    { name: 'AI Neural Interface', href: '/ai-neural-interface', icon: Brain, description: 'Brain-computer interfaces' },
    { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence', icon: Heart, description: 'Emotion recognition & response' },
    { name: 'AI Creative Writing', href: '/ai-creative-writing', icon: Feather, description: 'AI-assisted creative writing' },
    { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music, description: 'AI-generated music & scores' },
    { name: 'AI Art Generation', href: '/ai-art-generation', icon: Palette, description: 'AI-created visual art' },
    { name: 'AI Video Production', href: '/ai-video-production', icon: Video, description: 'Automated video creation' },
    { name: 'AI Podcast Generation', href: '/ai-podcast-generation', icon: Mic, description: 'AI-generated podcasts' },
    { name: 'AI Game Development', href: '/ai-game-development', icon: Gamepad2, description: 'AI-powered game creation' },
    { name: 'AI Virtual Assistant', href: '/ai-virtual-assistant', icon: Bot, description: 'Advanced personal assistant' },
    { name: 'AI Language Translation', href: '/ai-language-translation', icon: Globe, description: 'Real-time translation' },
    { name: 'AI Speech Recognition', href: '/ai-speech-recognition', icon: Mic, description: 'Advanced voice recognition' },
    { name: 'AI Text-to-Speech', href: '/ai-text-to-speech', icon: Volume2, description: 'Natural voice synthesis' },
    { name: 'AI Image Generation', href: '/ai-image-generation', icon: Image, description: 'AI-created images' },
    { name: 'AI 3D Modeling', href: '/ai-3d-modeling', icon: Box, description: 'Automated 3D creation' },
    { name: 'AI Animation', href: '/ai-animation', icon: Film, description: 'AI-generated animations' },
    { name: 'AI Virtual Reality', href: '/ai-virtual-reality', icon: Headphones, description: 'AI-powered VR experiences' },
    { name: 'AI Augmented Reality', href: '/ai-augmented-reality', icon: Eye, description: 'AR enhancement & overlay' },
    { name: 'AI Mixed Reality', href: '/ai-mixed-reality', icon: Monitor, description: 'MR environment creation' },
    { name: 'AI Holographic Display', href: '/ai-holographic-display', icon: Sparkles, description: '3D holographic content' },
    { name: 'AI Gesture Recognition', href: '/ai-gesture-recognition', icon: Hand, description: 'Hand & body gesture AI' },
    { name: 'AI Facial Recognition', href: '/ai-facial-recognition', icon: User, description: 'Advanced face detection' },
    { name: 'AI Object Detection', href: '/ai-object-detection', icon: Search, description: 'Real-time object identification' },
    { name: 'AI Scene Understanding', href: '/ai-scene-understanding', icon: Eye, description: 'Contextual scene analysis' },
    { name: 'AI Motion Capture', href: '/ai-motion-capture', icon: Activity, description: 'Human movement tracking' },
    { name: 'AI Pose Estimation', href: '/ai-pose-estimation', icon: User, description: 'Body pose detection' },
    { name: 'AI Depth Estimation', href: '/ai-depth-estimation', icon: Layers, description: '3D depth perception' },
    { name: 'AI Optical Flow', href: '/ai-optical-flow', icon: ArrowRight, description: 'Motion vector analysis' },
    { name: 'AI Super Resolution', href: '/ai-super-resolution', icon: Image, description: 'Image enhancement & upscaling' },
    { name: 'AI Style Transfer', href: '/ai-style-transfer', icon: Palette, description: 'Artistic style application' },
    { name: 'AI Colorization', href: '/ai-colorization', icon: Palette, description: 'Black & white to color' },
    { name: 'AI Inpainting', href: '/ai-inpainting', icon: Edit, description: 'Image restoration & completion' },
    { name: 'AI Denoising', href: '/ai-denoising', icon: Shield, description: 'Noise reduction & cleanup' },
    { name: 'AI Upscaling', href: '/ai-upscaling', icon: ArrowUp, description: 'Image resolution enhancement' },
    { name: 'AI Compression', href: '/ai-compression', icon: Package, description: 'Intelligent file compression' },
    { name: 'AI Watermarking', href: '/ai-watermarking', icon: Shield, description: 'Digital watermark protection' },
    { name: 'AI Steganography', href: '/ai-steganography', icon: Lock, description: 'Hidden data embedding' },
    { name: 'AI Cryptography', href: '/ai-cryptography', icon: Lock, description: 'AI-enhanced encryption' },
    { name: 'AI Blockchain', href: '/ai-blockchain', icon: Link, description: 'Smart contract AI' },
    { name: 'AI NFT Generator', href: '/ai-nft-generator', icon: Gem, description: 'AI-created NFTs' },
    { name: 'AI Metaverse', href: '/ai-metaverse', icon: Globe, description: 'Virtual world creation' },
    { name: 'AI Digital Twin', href: '/ai-digital-twin', icon: Monitor, description: 'Digital replica creation' },
    { name: 'AI Simulation', href: '/ai-simulation', icon: Cpu, description: 'Complex system simulation' },
    { name: 'AI Optimization', href: '/ai-optimization', icon: Zap, description: 'Multi-objective optimization' },
    { name: 'AI Scheduling', href: '/ai-scheduling', icon: Calendar, description: 'Intelligent task scheduling' },
    { name: 'AI Resource Allocation', href: '/ai-resource-allocation', icon: Settings, description: 'Optimal resource distribution' },
    { name: 'AI Load Balancing', href: '/ai-load-balancing', icon: Scale, description: 'Dynamic load distribution' },
    { name: 'AI Auto Scaling', href: '/ai-auto-scaling', icon: ArrowUp, description: 'Automatic system scaling' },
    { name: 'AI Performance Tuning', href: '/ai-performance-tuning', icon: Gauge, description: 'System performance optimization' },
    { name: 'AI Capacity Planning', href: '/ai-capacity-planning', icon: BarChart, description: 'Infrastructure capacity prediction' },
    { name: 'AI Cost Optimization', href: '/ai-cost-optimization', icon: DollarSign, description: 'Cloud cost reduction' },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap, description: 'Power consumption optimization' },
    { name: 'AI Carbon Footprint', href: '/ai-carbon-footprint', icon: Leaf, description: 'Environmental impact tracking' },
    { name: 'AI Sustainability', href: '/ai-sustainability', icon: TreePine, description: 'Green technology solutions' },
    { name: 'AI Climate Modeling', href: '/ai-climate-modeling', icon: Cloud, description: 'Climate change prediction' },
    { name: 'AI Weather Prediction', href: '/ai-weather-prediction', icon: Cloud, description: 'Advanced weather forecasting' },
    { name: 'AI Disaster Prediction', href: '/ai-disaster-prediction', icon: AlertTriangle, description: 'Natural disaster forecasting' },
    { name: 'AI Emergency Response', href: '/ai-emergency-response', icon: Shield, description: 'Crisis management AI' },
    { name: 'AI Search & Rescue', href: '/ai-search-rescue', icon: Search, description: 'Emergency search operations' },
    { name: 'AI Medical Diagnosis', href: '/ai-medical-diagnosis', icon: Stethoscope, description: 'AI-powered medical diagnosis' },
    { name: 'AI Drug Discovery', href: '/ai-drug-discovery', icon: Pill, description: 'Pharmaceutical research AI' },
    { name: 'AI Gene Analysis', href: '/ai-gene-analysis', icon: Dna, description: 'Genetic data analysis' },
    { name: 'AI Protein Folding', href: '/ai-protein-folding', icon: Atom, description: 'Protein structure prediction' },
    { name: 'AI Drug Interaction', href: '/ai-drug-interaction', icon: Pill, description: 'Medication interaction analysis' },
    { name: 'AI Clinical Trials', href: '/ai-clinical-trials', icon: Clipboard, description: 'Trial design & analysis' },
    { name: 'AI Patient Monitoring', href: '/ai-patient-monitoring', icon: Heart, description: 'Real-time health monitoring' },
    { name: 'AI Surgery Assistant', href: '/ai-surgery-assistant', icon: Scissors, description: 'Surgical procedure assistance' },
    { name: 'AI Radiology', href: '/ai-radiology', icon: Scan, description: 'Medical imaging analysis' },
    { name: 'AI Pathology', href: '/ai-pathology', icon: Microscope, description: 'Disease tissue analysis' },
    { name: 'AI Dermatology', href: '/ai-dermatology', icon: Eye, description: 'Skin condition diagnosis' },
    { name: 'AI Ophthalmology', href: '/ai-ophthalmology', icon: Eye, description: 'Eye disease detection' },
    { name: 'AI Cardiology', href: '/ai-cardiology', icon: Heart, description: 'Heart condition analysis' },
    { name: 'AI Neurology', href: '/ai-neurology', icon: Brain, description: 'Brain disorder diagnosis' },
    { name: 'AI Psychiatry', href: '/ai-psychiatry', icon: Brain, description: 'Mental health assessment' },
    { name: 'AI Pediatrics', href: '/ai-pediatrics', icon: Baby, description: 'Child health monitoring' },
    { name: 'AI Geriatrics', href: '/ai-geriatrics', icon: User, description: 'Elderly care optimization' },
    { name: 'AI Rehabilitation', href: '/ai-rehabilitation', icon: Activity, description: 'Physical therapy AI' },
    { name: 'AI Prosthetics', href: '/ai-prosthetics', icon: Hand, description: 'Smart prosthetic control' },
    { name: 'AI Wheelchair Control', href: '/ai-wheelchair-control', icon: Wheelchair, description: 'Intelligent mobility assistance' },
    { name: 'AI Hearing Aid', href: '/ai-hearing-aid', icon: Volume2, description: 'Smart hearing enhancement' },
    { name: 'AI Vision Aid', href: '/ai-vision-aid', icon: Eye, description: 'Visual impairment assistance' },
    { name: 'AI Memory Aid', href: '/ai-memory-aid', icon: Brain, description: 'Cognitive assistance' },
    { name: 'AI Communication Aid', href: '/ai-communication-aid', icon: MessageCircle, description: 'Speech & language assistance' },
    { name: 'AI Mobility Aid', href: '/ai-mobility-aid', icon: Navigation, description: 'Navigation assistance' },
    { name: 'AI Daily Living Aid', href: '/ai-daily-living-aid', icon: Home, description: 'Independent living support' },
    { name: 'AI Social Interaction', href: '/ai-social-interaction', icon: Users, description: 'Social skills development' },
    { name: 'AI Emotional Support', href: '/ai-emotional-support', icon: Heart, description: 'Mental health support' },
    { name: 'AI Therapy Assistant', href: '/ai-therapy-assistant', icon: Brain, description: 'Therapeutic intervention' },
    { name: 'AI Counseling', href: '/ai-counseling', icon: MessageCircle, description: 'AI-powered counseling' },
    { name: 'AI Meditation Guide', href: '/ai-meditation-guide', icon: Brain, description: 'Mindfulness & meditation' },
    { name: 'AI Sleep Therapy', href: '/ai-sleep-therapy', icon: Moon, description: 'Sleep disorder treatment' },
    { name: 'AI Anxiety Management', href: '/ai-anxiety-management', icon: Heart, description: 'Anxiety reduction techniques' },
    { name: 'AI Depression Support', href: '/ai-depression-support', icon: Heart, description: 'Depression management' },
    { name: 'AI PTSD Therapy', href: '/ai-ptsd-therapy', icon: Shield, description: 'Trauma recovery support' },
    { name: 'AI Addiction Recovery', href: '/ai-addiction-recovery', icon: Shield, description: 'Substance abuse support' },
    { name: 'AI Eating Disorder', href: '/ai-eating-disorder', icon: Apple, description: 'Eating disorder support' },
    { name: 'AI Autism Support', href: '/ai-autism-support', icon: Brain, description: 'Autism spectrum assistance' },
    { name: 'AI ADHD Management', href: '/ai-adhd-management', icon: Zap, description: 'Attention disorder support' },
    { name: 'AI Learning Disability', href: '/ai-learning-disability', icon: BookOpen, description: 'Learning support' },
    { name: 'AI Dyslexia Support', href: '/ai-dyslexia-support', icon: BookOpen, description: 'Reading assistance' },
    { name: 'AI Speech Therapy', href: '/ai-speech-therapy', icon: Mic, description: 'Speech improvement' },
    { name: 'AI Occupational Therapy', href: '/ai-occupational-therapy', icon: Hand, description: 'Daily activity support' },
    { name: 'AI Physical Therapy', href: '/ai-physical-therapy', icon: Activity, description: 'Movement rehabilitation' },
    { name: 'AI Sports Medicine', href: '/ai-sports-medicine', icon: Trophy, description: 'Athletic injury prevention' },
    { name: 'AI Nutrition Planning', href: '/ai-nutrition-planning', icon: Apple, description: 'Personalized nutrition' },
    { name: 'AI Fitness Coaching', href: '/ai-fitness-coaching', icon: Dumbbell, description: 'Personal training AI' },
    { name: 'AI Weight Management', href: '/ai-weight-management', icon: Scale, description: 'Weight loss & gain' },
    { name: 'AI Diabetes Management', href: '/ai-diabetes-management', icon: Droplets, description: 'Blood sugar control' },
    { name: 'AI Hypertension Control', href: '/ai-hypertension-control', icon: Heart, description: 'Blood pressure management' },
    { name: 'AI Cholesterol Monitoring', href: '/ai-cholesterol-monitoring', icon: Heart, description: 'Cardiovascular health' },
    { name: 'AI Cancer Detection', href: '/ai-cancer-detection', icon: Shield, description: 'Early cancer screening' },
    { name: 'AI Treatment Planning', href: '/ai-treatment-planning', icon: Clipboard, description: 'Personalized treatment' },
    { name: 'AI Side Effect Prediction', href: '/ai-side-effect-prediction', icon: AlertTriangle, description: 'Medication side effects' },
    { name: 'AI Dosage Optimization', href: '/ai-dosage-optimization', icon: Pill, description: 'Optimal medication dosing' },
    { name: 'AI Drug Allergy Detection', href: '/ai-drug-allergy-detection', icon: AlertTriangle, description: 'Allergy risk assessment' },
    { name: 'AI Medication Adherence', href: '/ai-medication-adherence', icon: CheckCircle, description: 'Medication compliance' },
    { name: 'AI Prescription Management', href: '/ai-prescription-management', icon: FileText, description: 'Prescription optimization' },
    { name: 'AI Insurance Claims', href: '/ai-insurance-claims', icon: FileText, description: 'Healthcare billing AI' },
    { name: 'AI Medical Records', href: '/ai-medical-records', icon: FileText, description: 'Electronic health records' },
    { name: 'AI Telemedicine', href: '/ai-telemedicine', icon: Video, description: 'Remote healthcare delivery' },
    { name: 'AI Remote Monitoring', href: '/ai-remote-monitoring', icon: Monitor, description: 'Home health monitoring' },
    { name: 'AI Emergency Detection', href: '/ai-emergency-detection', icon: AlertTriangle, description: 'Medical emergency alerts' },
    { name: 'AI Fall Detection', href: '/ai-fall-detection', icon: AlertTriangle, description: 'Elderly fall prevention' },
    { name: 'AI Seizure Detection', href: '/ai-seizure-detection', icon: AlertTriangle, description: 'Epilepsy monitoring' },
    { name: 'AI Heart Attack Prediction', href: '/ai-heart-attack-prediction', icon: Heart, description: 'Cardiac event prediction' },
    { name: 'AI Stroke Detection', href: '/ai-stroke-detection', icon: AlertTriangle, description: 'Stroke risk assessment' },
    { name: 'AI Sepsis Detection', href: '/ai-sepsis-detection', icon: AlertTriangle, description: 'Infection detection' },
    { name: 'AI Pneumonia Detection', href: '/ai-pneumonia-detection', icon: Lungs, description: 'Respiratory infection' },
    { name: 'AI COVID Detection', href: '/ai-covid-detection', icon: Shield, description: 'Viral infection screening' },
    { name: 'AI Flu Prediction', href: '/ai-flu-prediction', icon: Thermometer, description: 'Influenza forecasting' },
    { name: 'AI Allergy Prediction', href: '/ai-allergy-prediction', icon: AlertTriangle, description: 'Allergic reaction prediction' },
    { name: 'AI Food Safety', href: '/ai-food-safety', icon: Apple, description: 'Food contamination detection' },
    { name: 'AI Water Quality', href: '/ai-water-quality', icon: Droplets, description: 'Water safety monitoring' },
    { name: 'AI Air Quality', href: '/ai-air-quality', icon: Wind, description: 'Air pollution monitoring' },
    { name: 'AI Noise Monitoring', href: '/ai-noise-monitoring', icon: Volume2, description: 'Sound pollution tracking' },
    { name: 'AI Light Monitoring', href: '/ai-light-monitoring', icon: Sun, description: 'Light exposure tracking' },
    { name: 'AI Temperature Monitoring', href: '/ai-temperature-monitoring', icon: Thermometer, description: 'Environmental temperature' },
    { name: 'AI Humidity Monitoring', href: '/ai-humidity-monitoring', icon: Droplets, description: 'Moisture level tracking' },
    { name: 'AI Pressure Monitoring', href: '/ai-pressure-monitoring', icon: Gauge, description: 'Atmospheric pressure' },
    { name: 'AI Radiation Monitoring', href: '/ai-radiation-monitoring', icon: Atom, description: 'Radiation exposure tracking' },
    { name: 'AI Magnetic Field', href: '/ai-magnetic-field', icon: Compass, description: 'Magnetic field analysis' },
    { name: 'AI Gravitational Field', href: '/ai-gravitational-field', icon: ArrowDown, description: 'Gravity measurement' },
    { name: 'AI Electromagnetic Field', href: '/ai-electromagnetic-field', icon: Zap, description: 'EM field analysis' },
    { name: 'AI Quantum Field', href: '/ai-quantum-field', icon: Atom, description: 'Quantum field theory' },
    { name: 'AI String Theory', href: '/ai-string-theory', icon: Atom, description: 'Theoretical physics AI' },
    { name: 'AI Relativity', href: '/ai-relativity', icon: Clock, description: 'Space-time analysis' },
    { name: 'AI Thermodynamics', href: '/ai-thermodynamics', icon: Thermometer, description: 'Heat & energy analysis' },
    { name: 'AI Fluid Dynamics', href: '/ai-fluid-dynamics', icon: Waves, description: 'Liquid & gas flow' },
    { name: 'AI Solid Mechanics', href: '/ai-solid-mechanics', icon: Box, description: 'Material stress analysis' },
    { name: 'AI Electromagnetics', href: '/ai-electromagnetics', icon: Zap, description: 'Electric & magnetic fields' },
    { name: 'AI Optics', href: '/ai-optics', icon: Eye, description: 'Light behavior analysis' },
    { name: 'AI Acoustics', href: '/ai-acoustics', icon: Volume2, description: 'Sound wave analysis' },
    { name: 'AI Vibrations', href: '/ai-vibrations', icon: Activity, description: 'Mechanical vibration' },
    { name: 'AI Control Systems', href: '/ai-control-systems', icon: Settings, description: 'Automated control' },
    { name: 'AI Signal Processing', href: '/ai-signal-processing', icon: Zap, description: 'Digital signal analysis' },
    { name: 'AI Image Processing', href: '/ai-image-processing', icon: Image, description: 'Digital image analysis' },
    { name: 'AI Video Processing', href: '/ai-video-processing', icon: Video, description: 'Video stream analysis' },
    { name: 'AI Audio Processing', href: '/ai-audio-processing', icon: Volume2, description: 'Sound analysis' },
    { name: 'AI Text Processing', href: '/ai-text-processing', icon: FileText, description: 'Natural language processing' },
    { name: 'AI Data Processing', href: '/ai-data-processing', icon: Database, description: 'Big data analysis' },
    { name: 'AI Machine Learning', href: '/ai-machine-learning', icon: Brain, description: 'ML algorithm development' },
    { name: 'AI Deep Learning', href: '/ai-deep-learning', icon: Brain, description: 'Neural network training' },
    { name: 'AI Reinforcement Learning', href: '/ai-reinforcement-learning', icon: Target, description: 'Reward-based learning' },
    { name: 'AI Transfer Learning', href: '/ai-transfer-learning', icon: ArrowRight, description: 'Knowledge transfer' },
    { name: 'AI Meta Learning', href: '/ai-meta-learning', icon: Brain, description: 'Learning to learn' },
    { name: 'AI Few-Shot Learning', href: '/ai-few-shot-learning', icon: Target, description: 'Minimal data learning' },
    { name: 'AI Zero-Shot Learning', href: '/ai-zero-shot-learning', icon: Target, description: 'No example learning' },
    { name: 'AI One-Shot Learning', href: '/ai-one-shot-learning', icon: Target, description: 'Single example learning' },
    { name: 'AI Multi-Task Learning', href: '/ai-multi-task-learning', icon: CheckSquare, description: 'Multiple task training' },
    { name: 'AI Multi-Modal Learning', href: '/ai-multi-modal-learning', icon: Eye, description: 'Multiple data type learning' },
    { name: 'AI Cross-Modal Learning', href: '/ai-cross-modal-learning', icon: ArrowRight, description: 'Cross-domain learning' },
    { name: 'AI Self-Supervised Learning', href: '/ai-self-supervised-learning', icon: Brain, description: 'Unsupervised feature learning' },
    { name: 'AI Semi-Supervised Learning', href: '/ai-semi-supervised-learning', icon: Target, description: 'Partial label learning' },
    { name: 'AI Unsupervised Learning', href: '/ai-unsupervised-learning', icon: Brain, description: 'Pattern discovery' },
    { name: 'AI Supervised Learning', href: '/ai-supervised-learning', icon: Target, description: 'Labeled data training' },
    { name: 'AI Online Learning', href: '/ai-online-learning', icon: Zap, description: 'Real-time learning' },
    { name: 'AI Batch Learning', href: '/ai-batch-learning', icon: Package, description: 'Batch data processing' },
    { name: 'AI Incremental Learning', href: '/ai-incremental-learning', icon: ArrowUp, description: 'Progressive learning' },
    { name: 'AI Continual Learning', href: '/ai-continual-learning', icon: RefreshCw, description: 'Lifelong learning' },
    { name: 'AI Catastrophic Forgetting', href: '/ai-catastrophic-forgetting', icon: AlertTriangle, description: 'Memory retention' },
    { name: 'AI Knowledge Distillation', href: '/ai-knowledge-distillation', icon: Brain, description: 'Model compression' },
    { name: 'AI Model Pruning', href: '/ai-model-pruning', icon: Scissors, description: 'Network optimization' },
    { name: 'AI Quantization', href: '/ai-quantization', icon: Package, description: 'Model compression' },
    { name: 'AI Sparsification', href: '/ai-sparsification', icon: Grid, description: 'Sparse network design' },
    { name: 'AI Regularization', href: '/ai-regularization', icon: Shield, description: 'Overfitting prevention' },
    { name: 'AI Dropout', href: '/ai-dropout', icon: X, description: 'Neural network regularization' },
    { name: 'AI Batch Normalization', href: '/ai-batch-normalization', icon: Scale, description: 'Training stabilization' },
    { name: 'AI Layer Normalization', href: '/ai-layer-normalization', icon: Layers, description: 'Layer-wise normalization' },
    { name: 'AI Group Normalization', href: '/ai-group-normalization', icon: Users, description: 'Group-wise normalization' },
    { name: 'AI Instance Normalization', href: '/ai-instance-normalization', icon: User, description: 'Instance-wise normalization' },
    { name: 'AI Weight Normalization', href: '/ai-weight-normalization', icon: Scale, description: 'Weight scaling' },
    { name: 'AI Spectral Normalization', href: '/ai-spectral-normalization', icon: Zap, description: 'Spectral constraint' },
    { name: 'AI Gradient Clipping', href: '/ai-gradient-clipping', icon: Scissors, description: 'Gradient stabilization' },
    { name: 'AI Learning Rate Scheduling', href: '/ai-learning-rate-scheduling', icon: Clock, description: 'Adaptive learning rates' },
    { name: 'AI Optimizer Selection', href: '/ai-optimizer-selection', icon: Settings, description: 'Optimization algorithm' },
    { name: 'AI Loss Function Design', href: '/ai-loss-function-design', icon: Target, description: 'Custom loss functions' },
    { name: 'AI Activation Function', href: '/ai-activation-function', icon: Zap, description: 'Neural activation' },
    { name: 'AI Architecture Search', href: '/ai-architecture-search', icon: Search, description: 'Neural architecture optimization' },
    { name: 'AI Hyperparameter Tuning', href: '/ai-hyperparameter-tuning', icon: Settings, description: 'Parameter optimization' },
    { name: 'AI Feature Selection', href: '/ai-feature-selection', icon: CheckSquare, description: 'Relevant feature identification' },
    { name: 'AI Feature Engineering', href: '/ai-feature-engineering', icon: Wrench, description: 'Feature creation' },
    { name: 'AI Feature Extraction', href: '/ai-feature-extraction', icon: Package, description: 'Automatic feature learning' },
    { name: 'AI Feature Learning', href: '/ai-feature-learning', icon: Brain, description: 'Representation learning' },
    { name: 'AI Representation Learning', href: '/ai-representation-learning', icon: Brain, description: 'Data representation' },
    { name: 'AI Embedding Learning', href: '/ai-embedding-learning', icon: Package, description: 'Vector embeddings' },
    { name: 'AI Dimensionality Reduction', href: '/ai-dimensionality-reduction', icon: ArrowDown, description: 'Data compression' },
    { name: 'AI Clustering', href: '/ai-clustering', icon: Circle, description: 'Data grouping' },
    { name: 'AI Classification', href: '/ai-classification', icon: Target, description: 'Category prediction' },
    { name: 'AI Regression', href: '/ai-regression', icon: TrendingUp, description: 'Value prediction' },
    { name: 'AI Anomaly Detection', href: '/ai-anomaly-detection', icon: AlertTriangle, description: 'Outlier identification' },
    { name: 'AI Outlier Detection', href: '/ai-outlier-detection', icon: AlertTriangle, description: 'Anomaly identification' },
    { name: 'AI Novelty Detection', href: '/ai-novelty-detection', icon: Star, description: 'New pattern discovery' },
    { name: 'AI Change Point Detection', href: '/ai-change-point-detection', icon: ArrowRight, description: 'Change identification' },
    { name: 'AI Concept Drift', href: '/ai-concept-drift', icon: RefreshCw, description: 'Model adaptation' },
    { name: 'AI Covariate Shift', href: '/ai-covariate-shift', icon: ArrowRight, description: 'Distribution shift' },
    { name: 'AI Label Shift', href: '/ai-label-shift', icon: Target, description: 'Label distribution change' },
    { name: 'AI Prior Shift', href: '/ai-prior-shift', icon: Scale, description: 'Prior distribution change' },
    { name: 'AI Domain Adaptation', href: '/ai-domain-adaptation', icon: Globe, description: 'Cross-domain learning' },
    { name: 'AI Domain Generalization', href: '/ai-domain-generalization', icon: Globe, description: 'Multi-domain learning' },
    { name: 'AI Multi-Domain Learning', href: '/ai-multi-domain-learning', icon: Globe, description: 'Cross-domain training' },
    { name: 'AI Cross-Domain Learning', href: '/ai-cross-domain-learning', icon: ArrowRight, description: 'Domain transfer' },
    { name: 'AI Zero-Shot Domain Adaptation', href: '/ai-zero-shot-domain-adaptation', icon: Target, description: 'No target domain data' },
    { name: 'AI Few-Shot Domain Adaptation', href: '/ai-few-shot-domain-adaptation', icon: Target, description: 'Minimal target data' },
    { name: 'AI Unsupervised Domain Adaptation', href: '/ai-unsupervised-domain-adaptation', icon: Brain, description: 'No target labels' },
    { name: 'AI Supervised Domain Adaptation', href: '/ai-supervised-domain-adaptation', icon: Target, description: 'Target domain labels' },
    { name: 'AI Semi-Supervised Domain Adaptation', href: '/ai-semi-supervised-domain-adaptation', icon: Target, description: 'Partial target labels' },
    { name: 'AI Multi-Source Domain Adaptation', href: '/ai-multi-source-domain-adaptation', icon: Globe, description: 'Multiple source domains' },
    { name: 'AI Multi-Target Domain Adaptation', href: '/ai-multi-target-domain-adaptation', icon: Globe, description: 'Multiple target domains' },
    { name: 'AI Adversarial Domain Adaptation', href: '/ai-adversarial-domain-adaptation', icon: Shield, description: 'Adversarial training' },
    { name: 'AI Optimal Transport', href: '/ai-optimal-transport', icon: ArrowRight, description: 'Distribution matching' },
    { name: 'AI Wasserstein Distance', href: '/ai-wasserstein-distance', icon: Ruler, description: 'Distribution distance' },
    { name: 'AI Maximum Mean Discrepancy', href: '/ai-maximum-mean-discrepancy', icon: Scale, description: 'Distribution difference' },
    { name: 'AI Correlation Alignment', href: '/ai-correlation-alignment', icon: ArrowRight, description: 'Feature alignment' },
    { name: 'AI Subspace Alignment', href: '/ai-subspace-alignment', icon: Grid, description: 'Subspace matching' },
    { name: 'AI Geodesic Flow', href: '/ai-geodesic-flow', icon: ArrowRight, description: 'Manifold learning' },
    { name: 'AI Manifold Learning', href: '/ai-manifold-learning', icon: Circle, description: 'Non-linear dimensionality reduction' },
    { name: 'AI Isomap', href: '/ai-isomap', icon: Map, description: 'Isometric mapping' },
    { name: 'AI Locally Linear Embedding', href: '/ai-locally-linear-embedding', icon: Circle, description: 'Local linear structure' },
    { name: 'AI Laplacian Eigenmaps', href: '/ai-laplacian-eigenmaps', icon: Zap, description: 'Spectral embedding' },
    { name: 'AI t-SNE', href: '/ai-t-sne', icon: Circle, description: 'Non-linear visualization' },
    { name: 'AI UMAP', href: '/ai-umap', icon: Circle, description: 'Uniform manifold approximation' },
    { name: 'AI Autoencoders', href: '/ai-autoencoders', icon: Package, description: 'Unsupervised representation learning' },
    { name: 'AI Variational Autoencoders', href: '/ai-variational-autoencoders', icon: Package, description: 'Probabilistic autoencoders' },
    { name: 'AI Beta-VAE', href: '/ai-beta-vae', icon: Package, description: 'Disentangled representation' },
    { name: 'AI WAE', href: '/ai-wae', icon: Package, description: 'Wasserstein autoencoders' },
    { name: 'AI AAE', href: '/ai-aae', icon: Package, description: 'Adversarial autoencoders' },
    { name: 'AI VQ-VAE', href: '/ai-vq-vae', icon: Package, description: 'Vector quantized VAE' },
    { name: 'AI VQ-VAE-2', href: '/ai-vq-vae-2', icon: Package, description: 'Hierarchical VQ-VAE' },
    { name: 'AI NVAE', href: '/ai-nvae', icon: Package, description: 'Neural VAE' },
    { name: 'AI VAE-GAN', href: '/ai-vae-gan', icon: Package, description: 'VAE-GAN hybrid' },
    { name: 'AI BiGAN', href: '/ai-bigan', icon: Package, description: 'Bidirectional GAN' },
    { name: 'AI ALI', href: '/ai-ali', icon: Package, description: 'Adversarially learned inference' },
    { name: 'AI BigBiGAN', href: '/ai-bigbigan', icon: Package, description: 'Large scale BiGAN' },
    { name: 'AI InfoGAN', href: '/ai-infogan', icon: Package, description: 'Information maximizing GAN' },
    { name: 'AI AC-GAN', href: '/ai-ac-gan', icon: Package, description: 'Auxiliary classifier GAN' },
    { name: 'AI SAGAN', href: '/ai-sagan', icon: Package, description: 'Self-attention GAN' },
    { name: 'AI BigGAN', href: '/ai-biggan', icon: Package, description: 'Large scale GAN' },
    { name: 'AI StyleGAN', href: '/ai-stylegan', icon: Package, description: 'Style-based GAN' },
    { name: 'AI StyleGAN2', href: '/ai-stylegan2', icon: Package, description: 'Improved StyleGAN' },
    { name: 'AI StyleGAN3', href: '/ai-stylegan3', icon: Package, description: 'Latest StyleGAN' },
    { name: 'AI ProGAN', href: '/ai-progan', icon: Package, description: 'Progressive GAN' },
    { name: 'AI PGGAN', href: '/ai-pggan', icon: Package, description: 'Progressive growing GAN' },
    { name: 'AI DCGAN', href: '/ai-dcgan', icon: Package, description: 'Deep convolutional GAN' },
    { name: 'AI WGAN', href: '/ai-wgan', icon: Package, description: 'Wasserstein GAN' },
    { name: 'AI WGAN-GP', href: '/ai-wgan-gp', icon: Package, description: 'WGAN with gradient penalty' },
    { name: 'AI LSGAN', href: '/ai-lsgan', icon: Package, description: 'Least squares GAN' },
    { name: 'AI BEGAN', href: '/ai-began', icon: Package, description: 'Boundary equilibrium GAN' },
    { name: 'AI EBGAN', href: '/ai-ebgan', icon: Package, description: 'Energy-based GAN' },
    { name: 'AI MMD-GAN', href: '/ai-mmd-gan', icon: Package, description: 'Maximum mean discrepancy GAN' },
    { name: 'AI Cramér GAN', href: '/ai-cramer-gan', icon: Package, description: 'Cramér distance GAN' },
    { name: 'AI Fisher GAN', href: '/ai-fisher-gan', icon: Package, description: 'Fisher GAN' },
    { name: 'AI MMD GAN', href: '/ai-mmd-gan', icon: Package, description: 'MMD GAN' },
    { name: 'AI SNGAN', href: '/ai-sngan', icon: Package, description: 'Spectral normalization GAN' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management' },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar, description: 'Professional project management' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers' },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: Link, description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart, description: 'Online store platforms' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
    { name: 'Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link, description: 'System integration' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle, description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
    { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure', icon: Atom, description: 'Quantum computing setup' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions', icon: Cpu, description: 'Distributed edge processing' },
    { name: 'IoT Platform Development', href: '/iot-platform-development', icon: Wifi, description: 'Internet of Things platforms' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure', icon: Link, description: 'Distributed ledger systems' },
    { name: '5G Network Implementation', href: '/5g-network-implementation', icon: Zap, description: 'Next-gen wireless networks' },
    { name: 'AI Infrastructure Setup', href: '/ai-infrastructure-setup', icon: Brain, description: 'AI/ML infrastructure' },
    { name: 'High-Performance Computing', href: '/high-performance-computing', icon: Cpu, description: 'HPC cluster management' },
    { name: 'Green IT Solutions', href: '/green-it-solutions', icon: Leaf, description: 'Sustainable technology' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, description: 'Business modernization' },
    { name: 'Legacy System Modernization', href: '/legacy-system-modernization', icon: RefreshCw, description: 'System upgrade & migration' },
    { name: 'Microservices Architecture', href: '/microservices-architecture', icon: Package, description: 'Scalable service design' },
    { name: 'Serverless Computing', href: '/serverless-computing', icon: Cloud, description: 'Function-as-a-Service' },
    { name: 'Container Orchestration', href: '/container-orchestration', icon: Package, description: 'Kubernetes & Docker' },
    { name: 'Service Mesh Implementation', href: '/service-mesh-implementation', icon: Network, description: 'Microservice communication' },
    { name: 'API Gateway Management', href: '/api-gateway-management', icon: Shield, description: 'API security & routing' },
    { name: 'Event-Driven Architecture', href: '/event-driven-architecture', icon: Zap, description: 'Asynchronous messaging' },
    { name: 'CQRS Implementation', href: '/cqrs-implementation', icon: Database, description: 'Command Query Responsibility Segregation' },
    { name: 'Event Sourcing', href: '/event-sourcing', icon: FileText, description: 'Event-based data storage' },
    { name: 'Domain-Driven Design', href: '/domain-driven-design', icon: Target, description: 'Complex domain modeling' },
    { name: 'Hexagonal Architecture', href: '/hexagonal-architecture', icon: Circle, description: 'Ports & adapters pattern' },
    { name: 'Clean Architecture', href: '/clean-architecture', icon: Layers, description: 'SOLID principles implementation' },
    { name: 'Test-Driven Development', href: '/test-driven-development', icon: CheckCircle, description: 'TDD methodology' },
    { name: 'Behavior-Driven Development', href: '/behavior-driven-development', icon: Users, description: 'BDD methodology' },
    { name: 'Domain-Driven Development', href: '/domain-driven-development', icon: Target, description: 'DDD methodology' },
    { name: 'Agile Development', href: '/agile-development', icon: Zap, description: 'Agile methodology' },
    { name: 'Scrum Implementation', href: '/scrum-implementation', icon: Calendar, description: 'Scrum framework' },
    { name: 'Kanban Implementation', href: '/kanban-implementation', icon: Columns, description: 'Kanban methodology' },
    { name: 'DevOps Culture', href: '/devops-culture', icon: Users, description: 'Development & operations integration' },
    { name: 'Site Reliability Engineering', href: '/site-reliability-engineering', icon: Shield, description: 'SRE practices' },
    { name: 'Chaos Engineering', href: '/chaos-engineering', icon: AlertTriangle, description: 'System resilience testing' },
    { name: 'Observability Platform', href: '/observability-platform', icon: Eye, description: 'Monitoring & logging' },
    { name: 'Distributed Tracing', href: '/distributed-tracing', icon: Search, description: 'Request flow tracking' },
    { name: 'Application Performance Monitoring', href: '/application-performance-monitoring', icon: Gauge, description: 'APM solutions' },
    { name: 'Infrastructure as Code', href: '/infrastructure-as-code', icon: Code, description: 'IaC automation' },
    { name: 'GitOps Implementation', href: '/gitops-implementation', icon: GitBranch, description: 'Git-based operations' },
    { name: 'Continuous Integration', href: '/continuous-integration', icon: RefreshCw, description: 'CI pipeline setup' },
    { name: 'Continuous Deployment', href: '/continuous-deployment', icon: ArrowUp, description: 'CD pipeline setup' },
    { name: 'Blue-Green Deployment', href: '/blue-green-deployment', icon: Circle, description: 'Zero-downtime deployment' },
    { name: 'Canary Deployment', href: '/canary-deployment', icon: Bird, description: 'Gradual rollout strategy' },
    { name: 'Feature Flags', href: '/feature-flags', icon: Toggle, description: 'Feature toggle management' },
    { name: 'A/B Testing Platform', href: '/ab-testing-platform', icon: BarChart, description: 'Experiment management' },
    { name: 'Load Testing', href: '/load-testing', icon: Gauge, description: 'Performance testing' },
    { name: 'Stress Testing', href: '/stress-testing', icon: Zap, description: 'System limit testing' },
    { name: 'Security Testing', href: '/security-testing', icon: Shield, description: 'Vulnerability assessment' },
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Target, description: 'Ethical hacking' },
    { name: 'Vulnerability Management', href: '/vulnerability-management', icon: AlertTriangle, description: 'Security risk management' },
    { name: 'Threat Modeling', href: '/threat-modeling', icon: Shield, description: 'Security design analysis' },
    { name: 'Security Code Review', href: '/security-code-review', icon: Eye, description: 'Secure coding practices' },
    { name: 'Static Application Security Testing', href: '/static-application-security-testing', icon: Search, description: 'SAST implementation' },
    { name: 'Dynamic Application Security Testing', href: '/dynamic-application-security-testing', icon: Zap, description: 'DAST implementation' },
    { name: 'Interactive Application Security Testing', href: '/interactive-application-security-testing', icon: MousePointer, description: 'IAST implementation' },
    { name: 'Software Composition Analysis', href: '/software-composition-analysis', icon: Package, description: 'Dependency vulnerability scanning' },
    { name: 'Container Security', href: '/container-security', icon: Shield, description: 'Container vulnerability scanning' },
    { name: 'Cloud Security Posture Management', href: '/cloud-security-posture-management', icon: Cloud, description: 'CSPM implementation' },
    { name: 'Cloud Access Security Broker', href: '/cloud-access-security-broker', icon: Shield, description: 'CASB implementation' },
    { name: 'Zero Trust Architecture', href: '/zero-trust-architecture', icon: Lock, description: 'Zero trust security model' },
    { name: 'Identity and Access Management', href: '/identity-and-access-management', icon: Key, description: 'IAM solutions' },
    { name: 'Multi-Factor Authentication', href: '/multi-factor-authentication', icon: Shield, description: 'MFA implementation' },
    { name: 'Single Sign-On', href: '/single-sign-on', icon: Key, description: 'SSO solutions' },
    { name: 'OAuth Implementation', href: '/oauth-implementation', icon: Key, description: 'OAuth 2.0 & OpenID Connect' },
    { name: 'SAML Implementation', href: '/saml-implementation', icon: Key, description: 'SAML 2.0 integration' },
    { name: 'LDAP Integration', href: '/ldap-integration', icon: Database, description: 'Directory services' },
    { name: 'Active Directory', href: '/active-directory', icon: Database, description: 'Windows domain services' },
    { name: 'Azure Active Directory', href: '/azure-active-directory', icon: Cloud, description: 'Microsoft identity platform' },
    { name: 'AWS IAM', href: '/aws-iam', icon: Cloud, description: 'Amazon identity management' },
    { name: 'Google Cloud Identity', href: '/google-cloud-identity', icon: Cloud, description: 'Google identity platform' },
    { name: 'Okta Integration', href: '/okta-integration', icon: Key, description: 'Okta identity management' },
    { name: 'Auth0 Integration', href: '/auth0-integration', icon: Key, description: 'Auth0 identity platform' },
    { name: 'Ping Identity', href: '/ping-identity', icon: Key, description: 'Ping identity solutions' },
    { name: 'ForgeRock', href: '/forgerock', icon: Key, description: 'ForgeRock identity platform' },
    { name: 'CyberArk', href: '/cyberark', icon: Shield, description: 'Privileged access management' },
    { name: 'BeyondTrust', href: '/beyondtrust', icon: Shield, description: 'Privileged access management' },
    { name: 'SailPoint', href: '/sailpoint', icon: Key, description: 'Identity governance' },
    { name: 'RSA SecurID', href: '/rsa-securid', icon: Shield, description: 'Two-factor authentication' },
    { name: 'Duo Security', href: '/duo-security', icon: Shield, description: 'Multi-factor authentication' },
    { name: 'YubiKey Integration', href: '/yubikey-integration', icon: Key, description: 'Hardware security keys' },
    { name: 'FIDO2 Implementation', href: '/fido2-implementation', icon: Key, description: 'WebAuthn & FIDO2' },
    { name: 'WebAuthn Implementation', href: '/webauthn-implementation', icon: Key, description: 'Web authentication API' },
    { name: 'PKI Implementation', href: '/pki-implementation', icon: Key, description: 'Public key infrastructure' },
    { name: 'Certificate Management', href: '/certificate-management', icon: FileText, description: 'SSL/TLS certificate lifecycle' },
    { name: 'Let\'s Encrypt Integration', href: '/lets-encrypt-integration', icon: Shield, description: 'Free SSL certificates' },
    { name: 'DigiCert Integration', href: '/digicert-integration', icon: Shield, description: 'SSL certificate authority' },
    { name: 'Symantec Integration', href: '/symantec-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'GlobalSign Integration', href: '/globalsign-integration', icon: Shield, description: 'SSL certificate authority' },
    { name: 'Comodo Integration', href: '/comodo-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'Sectigo Integration', href: '/sectigo-integration', icon: Shield, description: 'SSL certificate authority' },
    { name: 'Entrust Integration', href: '/entrust-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'Thawte Integration', href: '/thawte-integration', icon: Shield, description: 'SSL certificate authority' },
    { name: 'GeoTrust Integration', href: '/geotrust-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'RapidSSL Integration', href: '/rapidssl-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'AlphaSSL Integration', href: '/alphassl-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'PositiveSSL Integration', href: '/positivessl-integration', icon: Shield, description: 'SSL certificate solutions' },
    { name: 'Wildcard SSL', href: '/wildcard-ssl', icon: Shield, description: 'Wildcard certificate solutions' },
    { name: 'Multi-Domain SSL', href: '/multi-domain-ssl', icon: Shield, description: 'SAN certificate solutions' },
    { name: 'Extended Validation SSL', href: '/extended-validation-ssl', icon: Shield, description: 'EV SSL certificates' },
    { name: 'Organization Validated SSL', href: '/organization-validated-ssl', icon: Shield, description: 'OV SSL certificates' },
    { name: 'Domain Validated SSL', href: '/domain-validated-ssl', icon: Shield, description: 'DV SSL certificates' },
    { name: 'Code Signing Certificates', href: '/code-signing-certificates', icon: Shield, description: 'Software signing certificates' },
    { name: 'Email Certificates', href: '/email-certificates', icon: Mail, description: 'S/MIME certificates' },
    { name: 'Client Certificates', href: '/client-certificates', icon: Key, description: 'Client authentication certificates' },
    { name: 'Server Certificates', href: '/server-certificates', icon: Server, description: 'Server authentication certificates' },
    { name: 'Root Certificates', href: '/root-certificates', icon: Shield, description: 'Root CA certificates' },
    { name: 'Intermediate Certificates', href: '/intermediate-certificates', icon: Shield, description: 'Intermediate CA certificates' },
    { name: 'Cross-Signed Certificates', href: '/cross-signed-certificates', icon: Shield, description: 'Cross-signed CA certificates' },
    { name: 'Self-Signed Certificates', href: '/self-signed-certificates', icon: Shield, description: 'Self-signed certificate generation' },
    { name: 'Certificate Authority', href: '/certificate-authority', icon: Shield, description: 'Private CA setup' },
    { name: 'Certificate Revocation', href: '/certificate-revocation', icon: X, description: 'CRL & OCSP implementation' },
    { name: 'Certificate Transparency', href: '/certificate-transparency', icon: Eye, description: 'CT log monitoring' },
    { name: 'HSTS Implementation', href: '/hsts-implementation', icon: Shield, description: 'HTTP Strict Transport Security' },
    { name: 'CSP Implementation', href: '/csp-implementation', icon: Shield, description: 'Content Security Policy' },
    { name: 'CORS Configuration', href: '/cors-configuration', icon: Globe, description: 'Cross-Origin Resource Sharing' },
    { name: 'CSP Configuration', href: '/csp-configuration', icon: Shield, description: 'Content Security Policy' },
    { name: 'XSS Protection', href: '/xss-protection', icon: Shield, description: 'Cross-site scripting prevention' },
    { name: 'CSRF Protection', href: '/csrf-protection', icon: Shield, description: 'Cross-site request forgery prevention' },
    { name: 'SQL Injection Prevention', href: '/sql-injection-prevention', icon: Shield, description: 'SQL injection protection' },
    { name: 'LDAP Injection Prevention', href: '/ldap-injection-prevention', icon: Shield, description: 'LDAP injection protection' },
    { name: 'NoSQL Injection Prevention', href: '/nosql-injection-prevention', icon: Shield, description: 'NoSQL injection protection' },
    { name: 'Command Injection Prevention', href: '/command-injection-prevention', icon: Shield, description: 'Command injection protection' },
    { name: 'Path Traversal Prevention', href: '/path-traversal-prevention', icon: Shield, description: 'Directory traversal protection' },
    { name: 'File Upload Security', href: '/file-upload-security', icon: Shield, description: 'Secure file upload handling' },
    { name: 'Input Validation', href: '/input-validation', icon: Shield, description: 'Data validation & sanitization' },
    { name: 'Output Encoding', href: '/output-encoding', icon: Shield, description: 'Data encoding & escaping' },
    { name: 'Session Management', href: '/session-management', icon: Key, description: 'Secure session handling' },
    { name: 'Cookie Security', href: '/cookie-security', icon: Shield, description: 'Secure cookie configuration' },
    { name: 'HTTP Security Headers', href: '/http-security-headers', icon: Shield, description: 'Security header implementation' },
    { name: 'Rate Limiting', href: '/rate-limiting', icon: Gauge, description: 'API rate limiting' },
    { name: 'DDoS Protection', href: '/ddos-protection', icon: Shield, description: 'Distributed denial of service protection' },
    { name: 'WAF Implementation', href: '/waf-implementation', icon: Shield, description: 'Web Application Firewall' },
    { name: 'API Security', href: '/api-security', icon: Shield, description: 'API protection & authentication' },
    { name: 'GraphQL Security', href: '/graphql-security', icon: Shield, description: 'GraphQL API security' },
    { name: 'REST API Security', href: '/rest-api-security', icon: Shield, description: 'RESTful API security' },
    { name: 'SOAP API Security', href: '/soap-api-security', icon: Shield, description: 'SOAP API security' },
    { name: 'gRPC Security', href: '/grpc-security', icon: Shield, description: 'gRPC API security' },
    { name: 'WebSocket Security', href: '/websocket-security', icon: Shield, description: 'WebSocket security' },
    { name: 'Server-Sent Events Security', href: '/server-sent-events-security', icon: Shield, description: 'SSE security' },
    { name: 'WebRTC Security', href: '/webrtc-security', icon: Shield, description: 'WebRTC security' },
    { name: 'P2P Security', href: '/p2p-security', icon: Shield, description: 'Peer-to-peer security' },
    { name: 'Blockchain Security', href: '/blockchain-security', icon: Shield, description: 'Cryptocurrency & smart contract security' },
    { name: 'Smart Contract Security', href: '/smart-contract-security', icon: Shield, description: 'Smart contract auditing' },
    { name: 'DeFi Security', href: '/defi-security', icon: Shield, description: 'Decentralized finance security' },
    { name: 'NFT Security', href: '/nft-security', icon: Shield, description: 'Non-fungible token security' },
    { name: 'DAO Security', href: '/dao-security', icon: Shield, description: 'Decentralized autonomous organization security' },
    { name: 'DApp Security', href: '/dapp-security', icon: Shield, description: 'Decentralized application security' },
    { name: 'Wallet Security', href: '/wallet-security', icon: Shield, description: 'Cryptocurrency wallet security' },
    { name: 'Exchange Security', href: '/exchange-security', icon: Shield, description: 'Cryptocurrency exchange security' },
    { name: 'Mining Security', href: '/mining-security', icon: Shield, description: 'Cryptocurrency mining security' },
    { name: 'Staking Security', href: '/staking-security', icon: Shield, description: 'Cryptocurrency staking security' },
    { name: 'Yield Farming Security', href: '/yield-farming-security', icon: Shield, description: 'Yield farming security' },
    { name: 'Liquidity Pool Security', href: '/liquidity-pool-security', icon: Shield, description: 'Liquidity pool security' },
    { name: 'Flash Loan Security', href: '/flash-loan-security', icon: Shield, description: 'Flash loan security' },
    { name: 'Arbitrage Security', href: '/arbitrage-security', icon: Shield, description: 'Arbitrage security' },
    { name: 'MEV Security', href: '/mev-security', icon: Shield, description: 'Maximal extractable value security' },
    { name: 'Front-Running Protection', href: '/front-running-protection', icon: Shield, description: 'Front-running prevention' },
    { name: 'Sandwich Attack Protection', href: '/sandwich-attack-protection', icon: Shield, description: 'Sandwich attack prevention' },
    { name: 'Rug Pull Protection', href: '/rug-pull-protection', icon: Shield, description: 'Rug pull prevention' },
    { name: 'Honeypot Detection', href: '/honeypot-detection', icon: Shield, description: 'Honeypot contract detection' },
    { name: 'Reentrancy Protection', href: '/reentrancy-protection', icon: Shield, description: 'Reentrancy attack prevention' },
    { name: 'Integer Overflow Protection', href: '/integer-overflow-protection', icon: Shield, description: 'Integer overflow prevention' },
    { name: 'Integer Underflow Protection', href: '/integer-underflow-protection', icon: Shield, description: 'Integer underflow prevention' },
    { name: 'Buffer Overflow Protection', href: '/buffer-overflow-protection', icon: Shield, description: 'Buffer overflow prevention' },
    { name: 'Stack Overflow Protection', href: '/stack-overflow-protection', icon: Shield, description: 'Stack overflow prevention' },
    { name: 'Heap Overflow Protection', href: '/heap-overflow-protection', icon: Shield, description: 'Heap overflow prevention' },
    { name: 'Format String Protection', href: '/format-string-protection', icon: Shield, description: 'Format string attack prevention' },
    { name: 'Race Condition Protection', href: '/race-condition-protection', icon: Shield, description: 'Race condition prevention' },
    { name: 'Deadlock Prevention', href: '/deadlock-prevention', icon: Shield, description: 'Deadlock prevention' },
    { name: 'Livelock Prevention', href: '/livelock-prevention', icon: Shield, description: 'Livelock prevention' },
    { name: 'Starvation Prevention', href: '/starvation-prevention', icon: Shield, description: 'Resource starvation prevention' },
    { name: 'Priority Inversion Prevention', href: '/priority-inversion-prevention', icon: Shield, description: 'Priority inversion prevention' },
    { name: 'Aging Prevention', href: '/aging-prevention', icon: Shield, description: 'Process aging prevention' },
    { name: 'Thrashing Prevention', href: '/thrashing-prevention', icon: Shield, description: 'Memory thrashing prevention' },
    { name: 'Fragmentation Prevention', href: '/fragmentation-prevention', icon: Shield, description: 'Memory fragmentation prevention' },
    { name: 'Leak Prevention', href: '/leak-prevention', icon: Shield, description: 'Memory leak prevention' },
    { name: 'Corruption Prevention', href: '/corruption-prevention', icon: Shield, description: 'Data corruption prevention' },
    { name: 'Tampering Prevention', href: '/tampering-prevention', icon: Shield, description: 'Data tampering prevention' },
    { name: 'Spoofing Prevention', href: '/spoofing-prevention', icon: Shield, description: 'Identity spoofing prevention' },
    { name: 'Phishing Prevention', href: '/phishing-prevention', icon: Shield, description: 'Phishing attack prevention' },
    { name: 'Social Engineering Prevention', href: '/social-engineering-prevention', icon: Shield, description: 'Social engineering prevention' },
    { name: 'Whaling Prevention', href: '/whaling-prevention', icon: Shield, description: 'Whaling attack prevention' },
    { name: 'Vishing Prevention', href: '/vishing-prevention', icon: Shield, description: 'Voice phishing prevention' },
    { name: 'Smishing Prevention', href: '/smishing-prevention', icon: Shield, description: 'SMS phishing prevention' },
    { name: 'Spear Phishing Prevention', href: '/spear-phishing-prevention', icon: Shield, description: 'Spear phishing prevention' },
    { name: 'Clone Phishing Prevention', href: '/clone-phishing-prevention', icon: Shield, description: 'Clone phishing prevention' },
    { name: 'Evil Twin Prevention', href: '/evil-twin-prevention', icon: Shield, description: 'Evil twin attack prevention' },
    { name: 'Man-in-the-Middle Prevention', href: '/man-in-the-middle-prevention', icon: Shield, description: 'MITM attack prevention' },
    { name: 'Man-in-the-Browser Prevention', href: '/man-in-the-browser-prevention', icon: Shield, description: 'MITB attack prevention' },
    { name: 'Man-in-the-Cloud Prevention', href: '/man-in-the-cloud-prevention', icon: Shield, description: 'MITC attack prevention' },
    { name: 'Side-Channel Attack Prevention', href: '/side-channel-attack-prevention', icon: Shield, description: 'Side-channel attack prevention' },
    { name: 'Timing Attack Prevention', href: '/timing-attack-prevention', icon: Shield, description: 'Timing attack prevention' },
    { name: 'Power Analysis Prevention', href: '/power-analysis-prevention', icon: Shield, description: 'Power analysis attack prevention' },
    { name: 'Electromagnetic Analysis Prevention', href: '/electromagnetic-analysis-prevention', icon: Shield, description: 'EM analysis attack prevention' },
    { name: 'Acoustic Analysis Prevention', href: '/acoustic-analysis-prevention', icon: Shield, description: 'Acoustic analysis attack prevention' },
    { name: 'Cache Attack Prevention', href: '/cache-attack-prevention', icon: Shield, description: 'Cache attack prevention' },
    { name: 'Branch Prediction Attack Prevention', href: '/branch-prediction-attack-prevention', icon: Shield, description: 'Branch prediction attack prevention' },
    { name: 'Spectre Prevention', href: '/spectre-prevention', icon: Shield, description: 'Spectre attack prevention' },
    { name: 'Meltdown Prevention', href: '/meltdown-prevention', icon: Shield, description: 'Meltdown attack prevention' },
    { name: 'Foreshadow Prevention', href: '/foreshadow-prevention', icon: Shield, description: 'Foreshadow attack prevention' },
    { name: 'ZombieLoad Prevention', href: '/zombieload-prevention', icon: Shield, description: 'ZombieLoad attack prevention' },
    { name: 'RIDL Prevention', href: '/ridl-prevention', icon: Shield, description: 'RIDL attack prevention' },
    { name: 'Fallout Prevention', href: '/fallout-prevention', icon: Shield, description: 'Fallout attack prevention' },
    { name: 'L1TF Prevention', href: '/l1tf-prevention', icon: Shield, description: 'L1TF attack prevention' },
    { name: 'MDS Prevention', href: '/mds-prevention', icon: Shield, description: 'MDS attack prevention' },
    { name: 'SWAPGS Prevention', href: '/swapgs-prevention', icon: Shield, description: 'SWAPGS attack prevention' },
    { name: 'TAA Prevention', href: '/taa-prevention', icon: Shield, description: 'TAA attack prevention' },
    { name: 'ITM Prevention', href: '/itm-prevention', icon: Shield, description: 'ITM attack prevention' },
    { name: 'SRSB Prevention', href: '/srsb-prevention', icon: Shield, description: 'SRSB attack prevention' },
    { name: 'CrossTalk Prevention', href: '/crosstalk-prevention', icon: Shield, description: 'CrossTalk attack prevention' },
    { name: 'Snoop Prevention', href: '/snoop-prevention', icon: Shield, description: 'Snoop attack prevention' },
    { name: 'LazyFP Prevention', href: '/lazyfp-prevention', icon: Shield, description: 'LazyFP attack prevention' },
    { name: 'Foreshadow-NG Prevention', href: '/foreshadow-ng-prevention', icon: Shield, description: 'Foreshadow-NG attack prevention' },
    { name: 'L1 Terminal Fault Prevention', href: '/l1-terminal-fault-prevention', icon: Shield, description: 'L1TF attack prevention' },
    { name: 'Microarchitectural Data Sampling Prevention', href: '/microarchitectural-data-sampling-prevention', icon: Shield, description: 'MDS attack prevention' },
    { name: 'Speculative Store Bypass Prevention', href: '/speculative-store-bypass-prevention', icon: Shield, description: 'SSB attack prevention' },
    { name: 'Branch Target Injection Prevention', href: '/branch-target-injection-prevention', icon: Shield, description: 'BTI attack prevention' },
    { name: 'Return Stack Buffer Prevention', href: '/return-stack-buffer-prevention', icon: Shield, description: 'RSB attack prevention' },
    { name: 'Indirect Branch Restricted Speculation Prevention', href: '/indirect-branch-restricted-speculation-prevention', icon: Shield, description: 'IBRS attack prevention' },
    { name: 'Single Thread Indirect Branch Predictors Prevention', href: '/single-thread-indirect-branch-predictors-prevention', icon: Shield, description: 'STIBP attack prevention' },
    { name: 'Speculative Store Bypass Disable Prevention', href: '/speculative-store-bypass-disable-prevention', icon: Shield, description: 'SSBD attack prevention' },
    { name: 'L1 Data Cache Flush Prevention', href: '/l1-data-cache-flush-prevention', icon: Shield, description: 'L1D_FLUSH attack prevention' },
    { name: 'Architectural MSR Prevention', href: '/architectural-msr-prevention', icon: Shield, description: 'Architectural MSR attack prevention' },
    { name: 'Control Flow Integrity Prevention', href: '/control-flow-integrity-prevention', icon: Shield, description: 'CFI attack prevention' },
    { name: 'Return Address Stack Prevention', href: '/return-address-stack-prevention', icon: Shield, description: 'RAS attack prevention' },
    { name: 'Indirect Branch Predictor Prevention', href: '/indirect-branch-predictor-prevention', icon: Shield, description: 'IBP attack prevention' },
    { name: 'Branch Target Buffer Prevention', href: '/branch-target-buffer-prevention', icon: Shield, description: 'BTB attack prevention' },
    { name: 'Return Stack Buffer Prevention', href: '/return-stack-buffer-prevention', icon: Shield, description: 'RSB attack prevention' },
    { name: 'Indirect Branch Restricted Speculation Prevention', href: '/indirect-branch-restricted-speculation-prevention', icon: Shield, description: 'IBRS attack prevention' },
    { name: 'Single Thread Indirect Branch Predictors Prevention', href: '/single-thread-indirect-branch-predictors-prevention', icon: Shield, description: 'STIBP attack prevention' },
    { name: 'Speculative Store Bypass Disable Prevention', href: '/speculative-store-bypass-disable-prevention', icon: Shield, description: 'SSBD attack prevention' },
    { name: 'L1 Data Cache Flush Prevention', href: '/l1-data-cache-flush-prevention', icon: Shield, description: 'L1D_FLUSH attack prevention' },
    { name: 'Architectural MSR Prevention', href: '/architectural-msr-prevention', icon: Shield, description: 'Architectural MSR attack prevention' },
    { name: 'Control Flow Integrity Prevention', href: '/control-flow-integrity-prevention', icon: Shield, description: 'CFI attack prevention' },
    { name: 'Return Address Stack Prevention', href: '/return-address-stack-prevention', icon: Shield, description: 'RAS attack prevention' },
    { name: 'Indirect Branch Predictor Prevention', href: '/indirect-branch-predictor-prevention', icon: Shield, description: 'IBP attack prevention' },
    { name: 'Branch Target Buffer Prevention', href: '/branch-target-buffer-prevention', icon: Shield, description: 'BTB attack prevention' }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance monitoring' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation' },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'Intelligent code review' },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics' },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar, description: 'Meeting automation' },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target, description: 'SEO optimization' },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database, description: 'Data cleaning & validation' },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText, description: 'Contract analysis' },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare, description: 'Intelligent surveys' },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign, description: 'AI accounting' },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users, description: 'AI recruitment' },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield, description: 'Content moderation' },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings, description: 'Equipment maintenance' },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap, description: 'Energy optimization' },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box, description: 'Supply chain AI' },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection' },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare, description: 'Advanced customer service' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing AI' },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText, description: 'Document processing' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Real-time BI & Analytics' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Brain, description: 'No-code Chatbot Platform' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Automated Email Campaigns' },
    { name: 'Social Media AI', href: '/social-media-ai', icon: Globe, description: 'AI Social Management' },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Settings, description: 'Smart Project Tracking' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Target, description: 'Automated SEO Tools' },
    { name: 'AI Sales CRM', href: '/ai-sales-crm', icon: TrendingUp, description: 'Intelligent CRM System' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Code, description: 'AI Design Tools' },
    { name: 'AI Inventory Manager', href: '/ai-inventory-manager', icon: Database, description: 'Smart Inventory Tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: Users, description: 'Automated Invoicing' },
    { name: 'AI Document Processor', href: '/ai-document-processor', icon: Zap, description: 'Document AI Processing' },
    { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: Cpu, description: 'Intelligent Lead Qualification' },
    { name: 'Zion AI Legal Assistant', href: '/zion-ai-legal-assistant', icon: FileText, description: 'Legal document analysis & compliance' },
    { name: 'Zion AI Real Estate Pro', href: '/zion-ai-real-estate-pro', icon: Home, description: 'Property valuation & market analysis' },
    { name: 'Zion AI Fitness Coach', href: '/zion-ai-fitness-coach', icon: Heart, description: 'Personalized fitness & nutrition plans' },
    { name: 'Zion AI Travel Planner', href: '/zion-ai-travel-planner', icon: Globe, description: 'Smart travel itinerary & booking' },
    { name: 'Zion AI Language Tutor', href: '/zion-ai-language-tutor', icon: MessageCircle, description: 'AI-powered language learning' },
    { name: 'Zion AI Stock Trader', href: '/zion-ai-stock-trader', icon: TrendingUp, description: 'Automated trading & portfolio management' },
    { name: 'Zion AI Home Automation', href: '/zion-ai-home-automation', icon: Settings, description: 'Smart home control & optimization' },
    { name: 'Zion AI Pet Care', href: '/zion-ai-pet-care', icon: Heart, description: 'Pet health monitoring & care plans' },
    { name: 'Zion AI Garden Assistant', href: '/zion-ai-garden-assistant', icon: Leaf, description: 'Plant care & gardening guidance' },
    { name: 'Zion AI Recipe Generator', href: '/zion-ai-recipe-generator', icon: ChefHat, description: 'Personalized recipe creation' },
    { name: 'Zion AI Sleep Optimizer', href: '/zion-ai-sleep-optimizer', icon: Moon, description: 'Sleep pattern analysis & improvement' },
    { name: 'Zion AI Meditation Guide', href: '/zion-ai-meditation-guide', icon: Brain, description: 'Personalized meditation sessions' },
    { name: 'Zion AI Weather Pro', href: '/zion-ai-weather-pro', icon: Cloud, description: 'Advanced weather forecasting & alerts' },
    { name: 'Zion AI Crypto Tracker', href: '/zion-ai-crypto-tracker', icon: DollarSign, description: 'Cryptocurrency analysis & trading' },
    { name: 'Zion AI News Curator', href: '/zion-ai-news-curator', icon: Newspaper, description: 'Personalized news aggregation' },
    { name: 'Zion AI Habit Tracker', href: '/zion-ai-habit-tracker', icon: CheckSquare, description: 'Smart habit formation & tracking' },
    { name: 'Zion AI Time Manager', href: '/zion-ai-time-manager', icon: Clock, description: 'Intelligent time tracking & optimization' },
    { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker', icon: Receipt, description: 'Smart expense categorization & budgeting' },
    { name: 'Zion AI Goal Setter', href: '/zion-ai-goal-setter', icon: Target, description: 'AI-powered goal planning & tracking' },
    { name: 'Zion AI Memory Palace', href: '/zion-ai-memory-palace', icon: Brain, description: 'Advanced memory training & techniques' },
    { name: 'Zion AI Speed Reader', href: '/zion-ai-speed-reader', icon: BookOpen, description: 'Reading speed & comprehension training' },
    { name: 'Zion AI Focus Booster', href: '/zion-ai-focus-booster', icon: Zap, description: 'Concentration & productivity enhancement' },
    { name: 'Zion AI Stress Monitor', href: '/zion-ai-stress-monitor', icon: Heart, description: 'Stress detection & management' },
    { name: 'Zion AI Mood Tracker', href: '/zion-ai-mood-tracker', icon: Smile, description: 'Emotional wellness & mood analysis' },
    { name: 'Zion AI Learning Path', href: '/zion-ai-learning-path', icon: GraduationCap, description: 'Personalized learning curriculum' },
    { name: 'Zion AI Skill Assessor', href: '/zion-ai-skill-assessor', icon: Award, description: 'Skills evaluation & development' },
    { name: 'Zion AI Career Advisor', href: '/zion-ai-career-advisor', icon: Briefcase, description: 'Career planning & job matching' },
    { name: 'Zion AI Network Analyzer', href: '/zion-ai-network-analyzer', icon: Users, description: 'Professional network optimization' },
    { name: 'Zion AI Event Planner', href: '/zion-ai-event-planner', icon: Calendar, description: 'Smart event organization & management' },
    { name: 'Zion AI Gift Finder', href: '/zion-ai-gift-finder', icon: Gift, description: 'Personalized gift recommendations' },
    { name: 'Zion AI Date Planner', href: '/zion-ai-date-planner', icon: Heart, description: 'Romantic date ideas & planning' },
    { name: 'Zion AI Party Organizer', href: '/zion-ai-party-organizer', icon: PartyPopper, description: 'Event planning & coordination' },
    { name: 'Zion AI Home Designer', href: '/zion-ai-home-designer', icon: Home, description: 'Interior design & space planning' },
    { name: 'Zion AI Fashion Stylist', href: '/zion-ai-fashion-stylist', icon: Shirt, description: 'Personal style & outfit recommendations' },
    { name: 'Zion AI Beauty Advisor', href: '/zion-ai-beauty-advisor', icon: Sparkles, description: 'Skincare & beauty routine optimization' },
    { name: 'Zion AI Health Monitor', href: '/zion-ai-health-monitor', icon: Activity, description: 'Comprehensive health tracking' },
    { name: 'Zion AI Symptom Checker', href: '/zion-ai-symptom-checker', icon: Stethoscope, description: 'AI-powered health assessment' },
    { name: 'Zion AI Medicine Reminder', href: '/zion-ai-medicine-reminder', icon: Pill, description: 'Medication tracking & reminders' },
    { name: 'Zion AI Water Tracker', href: '/zion-ai-water-tracker', icon: Droplets, description: 'Hydration monitoring & optimization' },
    { name: 'Zion AI Calorie Counter', href: '/zion-ai-calorie-counter', icon: Apple, description: 'Smart nutrition & calorie tracking' },
    { name: 'Zion AI Workout Planner', href: '/zion-ai-workout-planner', icon: Dumbbell, description: 'Personalized exercise routines' },
    { name: 'Zion AI Yoga Instructor', href: '/zion-ai-yoga-instructor', icon: Heart, description: 'AI-guided yoga & meditation' },
    { name: 'Zion AI Running Coach', href: '/zion-ai-running-coach', icon: Footprints, description: 'Running training & performance' },
    { name: 'Zion AI Cycling Pro', href: '/zion-ai-cycling-pro', icon: Bike, description: 'Cycling performance & route planning' },
    { name: 'Zion AI Swimming Coach', href: '/zion-ai-swimming-coach', icon: Waves, description: 'Swimming technique & training' },
    { name: 'Zion AI Golf Pro', href: '/zion-ai-golf-pro', icon: Golf, description: 'Golf swing analysis & improvement' },
    { name: 'Zion AI Tennis Coach', href: '/zion-ai-tennis-coach', icon: Tennis, description: 'Tennis technique & strategy' },
    { name: 'Zion AI Soccer Trainer', href: '/zion-ai-soccer-trainer', icon: Soccer, description: 'Soccer skills & tactics' },
    { name: 'Zion AI Basketball Coach', href: '/zion-ai-basketball-coach', icon: Basketball, description: 'Basketball training & strategy' },
    { name: 'Zion AI Martial Arts', href: '/zion-ai-martial-arts', icon: Shield, description: 'Martial arts training & techniques' },
    { name: 'Zion AI Dance Instructor', href: '/zion-ai-dance-instructor', icon: Music, description: 'Dance lessons & choreography' },
    { name: 'Zion AI Music Teacher', href: '/zion-ai-music-teacher', icon: Music, description: 'Music theory & instrument learning' },
    { name: 'Zion AI Art Creator', href: '/zion-ai-art-creator', icon: Palette, description: 'AI-generated art & creativity' },
    { name: 'Zion AI Photo Editor', href: '/zion-ai-photo-editor', icon: Camera, description: 'Advanced photo editing & enhancement' },
    { name: 'Zion AI Video Creator', href: '/zion-ai-video-creator', icon: Video, description: 'AI-powered video production' },
    { name: 'Zion AI Podcast Producer', href: '/zion-ai-podcast-producer', icon: Mic, description: 'Podcast creation & editing' },
    { name: 'Zion AI Song Writer', href: '/zion-ai-song-writer', icon: Music, description: 'AI-generated music & lyrics' },
    { name: 'Zion AI Story Teller', href: '/zion-ai-story-teller', icon: BookOpen, description: 'Interactive storytelling & narratives' },
    { name: 'Zion AI Poetry Generator', href: '/zion-ai-poetry-generator', icon: Feather, description: 'AI-created poetry & literature' },
    { name: 'Zion AI Script Writer', href: '/zion-ai-script-writer', icon: FileText, description: 'Screenplay & script writing' },
    { name: 'Zion AI Novel Writer', href: '/zion-ai-novel-writer', icon: Book, description: 'AI-assisted novel writing' },
    { name: 'Zion AI Blog Writer', href: '/zion-ai-blog-writer', icon: Edit, description: 'Automated blog content creation' },
    { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager', icon: Share2, description: 'Social media content & scheduling' },
    { name: 'Zion AI Influencer Assistant', href: '/zion-ai-influencer-assistant', icon: Star, description: 'Influencer marketing & management' },
    { name: 'Zion AI Brand Manager', href: '/zion-ai-brand-manager', icon: Award, description: 'Brand identity & strategy' },
    { name: 'Zion AI Logo Designer', href: '/zion-ai-logo-designer', icon: Image, description: 'AI-generated logos & branding' },
    { name: 'Zion AI Website Builder', href: '/zion-ai-website-builder', icon: Globe, description: 'No-code website creation' },
    { name: 'Zion AI App Builder', href: '/zion-ai-app-builder', icon: Smartphone, description: 'Mobile app development platform' },
    { name: 'Zion AI Game Developer', href: '/zion-ai-game-developer', icon: Gamepad2, description: 'AI-powered game creation' },
    { name: 'Zion AI VR Creator', href: '/zion-ai-vr-creator', icon: Headphones, description: 'Virtual reality experiences' },
    { name: 'Zion AI AR Designer', href: '/zion-ai-ar-designer', icon: Eye, description: 'Augmented reality applications' },
    { name: 'Zion AI 3D Modeler', href: '/zion-ai-3d-modeler', icon: Box, description: '3D modeling & animation' },
    { name: 'Zion AI Animation Studio', href: '/zion-ai-animation-studio', icon: Film, description: 'AI-generated animations' },
    { name: 'Zion AI Voice Cloner', href: '/zion-ai-voice-cloner', icon: Mic, description: 'Voice synthesis & cloning' },
    { name: 'Zion AI Face Swapper', href: '/zion-ai-face-swapper', icon: User, description: 'AI face replacement technology' },
    { name: 'Zion AI Background Remover', href: '/zion-ai-background-remover', icon: Scissors, description: 'Automatic background removal' },
    { name: 'Zion AI Object Detector', href: '/zion-ai-object-detector', icon: Search, description: 'Image recognition & classification' },
    { name: 'Zion AI Color Palette Generator', href: '/zion-ai-color-palette-generator', icon: Palette, description: 'Smart color scheme creation' },
    { name: 'Zion AI Font Matcher', href: '/zion-ai-font-matcher', icon: Type, description: 'Font pairing & typography' },
    { name: 'Zion AI Layout Designer', href: '/zion-ai-layout-designer', icon: Grid, description: 'Automated layout generation' },
    { name: 'Zion AI Icon Generator', href: '/zion-ai-icon-generator', icon: Star, description: 'Custom icon creation' },
    { name: 'Zion AI Pattern Creator', href: '/zion-ai-pattern-creator', icon: Repeat, description: 'Seamless pattern generation' },
    { name: 'Zion AI Texture Generator', href: '/zion-ai-texture-generator', icon: Layers, description: 'Procedural texture creation' },
    { name: 'Zion AI Gradient Maker', href: '/zion-ai-gradient-maker', icon: Palette, description: 'Advanced gradient generation' },
    { name: 'Zion AI Shadow Creator', href: '/zion-ai-shadow-creator', icon: Sun, description: 'Realistic shadow generation' },
    { name: 'Zion AI Lighting Designer', href: '/zion-ai-lighting-designer', icon: Lightbulb, description: '3D lighting optimization' },
    { name: 'Zion AI Material Designer', href: '/zion-ai-material-designer', icon: Gem, description: 'PBR material creation' },
    { name: 'Zion AI Particle System', href: '/zion-ai-particle-system', icon: Sparkles, description: 'Advanced particle effects' },
    { name: 'Zion AI Physics Simulator', href: '/zion-ai-physics-simulator', icon: Atom, description: 'Realistic physics simulation' },
    { name: 'Zion AI Fluid Simulator', href: '/zion-ai-fluid-simulator', icon: Waves, description: 'Liquid & gas simulation' },
    { name: 'Zion AI Cloth Simulator', href: '/zion-ai-cloth-simulator', icon: Shirt, description: 'Fabric simulation & draping' },
    { name: 'Zion AI Hair Simulator', href: '/zion-ai-hair-simulator', icon: Scissors, description: 'Realistic hair rendering' },
    { name: 'Zion AI Skin Simulator', href: '/zion-ai-skin-simulator', icon: User, description: 'Subsurface scattering' },
    { name: 'Zion AI Weather Simulator', href: '/zion-ai-weather-simulator', icon: Cloud, description: 'Dynamic weather systems' },
    { name: 'Zion AI Terrain Generator', href: '/zion-ai-terrain-generator', icon: Mountain, description: 'Procedural landscape creation' },
    { name: 'Zion AI City Builder', href: '/zion-ai-city-builder', icon: Building, description: 'Urban planning & design' },
    { name: 'Zion AI Architecture Designer', href: '/zion-ai-architecture-designer', icon: Home, description: 'Building design & visualization' },
    { name: 'Zion AI Interior Designer', href: '/zion-ai-interior-designer', icon: Sofa, description: 'Room layout & decoration' },
    { name: 'Zion AI Landscape Designer', href: '/zion-ai-landscape-designer', icon: TreePine, description: 'Garden & outdoor design' },
    { name: 'Zion AI Furniture Designer', href: '/zion-ai-furniture-designer', icon: Chair, description: 'Custom furniture creation' },
    { name: 'Zion AI Product Designer', href: '/zion-ai-product-designer', icon: Package, description: 'Industrial design & prototyping' },
    { name: 'Zion AI Jewelry Designer', href: '/zion-ai-jewelry-designer', icon: Gem, description: 'Custom jewelry creation' },
    { name: 'Zion AI Fashion Designer', href: '/zion-ai-fashion-designer', icon: Shirt, description: 'Clothing design & pattern making' },
    { name: 'Zion AI Shoe Designer', href: '/zion-ai-shoe-designer', icon: Footprints, description: 'Footwear design & engineering' },
    { name: 'Zion AI Watch Designer', href: '/zion-ai-watch-designer', icon: Clock, description: 'Timepiece design & mechanics' },
    { name: 'Zion AI Car Designer', href: '/zion-ai-car-designer', icon: Car, description: 'Automotive design & aerodynamics' },
    { name: 'Zion AI Aircraft Designer', href: '/zion-ai-aircraft-designer', icon: Plane, description: 'Aerospace engineering & design' },
    { name: 'Zion AI Ship Designer', href: '/zion-ai-ship-designer', icon: Ship, description: 'Marine vessel design' },
    { name: 'Zion AI Robot Designer', href: '/zion-ai-robot-designer', icon: Bot, description: 'Robotic system design' },
    { name: 'Zion AI Drone Designer', href: '/zion-ai-drone-designer', icon: Drone, description: 'UAV design & optimization' },
    { name: 'Zion AI Satellite Designer', href: '/zion-ai-satellite-designer', icon: Satellite, description: 'Spacecraft design & engineering' },
    { name: 'Zion AI Rocket Designer', href: '/zion-ai-rocket-designer', icon: Rocket, description: 'Launch vehicle design' },
    { name: 'Zion AI Space Station Designer', href: '/zion-ai-space-station-designer', icon: Orbit, description: 'Orbital habitat design' },
    { name: 'Zion AI Mars Colony Designer', href: '/zion-ai-mars-colony-designer', icon: Globe, description: 'Extraterrestrial settlement planning' },
    { name: 'Zion AI Moon Base Designer', href: '/zion-ai-moon-base-designer', icon: Moon, description: 'Lunar habitat design' },
    { name: 'Zion AI Underwater City Designer', href: '/zion-ai-underwater-city-designer', icon: Waves, description: 'Subaquatic architecture' },
    { name: 'Zion AI Floating City Designer', href: '/zion-ai-floating-city-designer', icon: Anchor, description: 'Floating urban design' },
    { name: 'Zion AI Underground City Designer', href: '/zion-ai-underground-city-designer', icon: Mountain, description: 'Subterranean urban planning' },
    { name: 'Zion AI Sky City Designer', href: '/zion-ai-sky-city-designer', icon: Cloud, description: 'Aerial urban development' },
    { name: 'Zion AI Tree City Designer', href: '/zion-ai-tree-city-designer', icon: TreePine, description: 'Arboreal urban design' },
    { name: 'Zion AI Crystal City Designer', href: '/zion-ai-crystal-city-designer', icon: Gem, description: 'Crystalline architecture' },
    { name: 'Zion AI Ice City Designer', href: '/zion-ai-ice-city-designer', icon: Snowflake, description: 'Polar urban design' },
    { name: 'Zion AI Desert City Designer', href: '/zion-ai-desert-city-designer', icon: Sun, description: 'Arid environment planning' },
    { name: 'Zion AI Jungle City Designer', href: '/zion-ai-jungle-city-designer', icon: Leaf, description: 'Tropical urban design' },
    { name: 'Zion AI Mountain City Designer', href: '/zion-ai-mountain-city-designer', icon: Mountain, description: 'Alpine urban planning' },
    { name: 'Zion AI Island City Designer', href: '/zion-ai-island-city-designer', icon: Anchor, description: 'Island urban development' },
    { name: 'Zion AI Canyon City Designer', href: '/zion-ai-canyon-city-designer', icon: Mountain, description: 'Canyon urban design' },
    { name: 'Zion AI Volcano City Designer', href: '/zion-ai-volcano-city-designer', icon: Flame, description: 'Volcanic urban planning' },
    { name: 'Zion AI Glacier City Designer', href: '/zion-ai-glacier-city-designer', icon: Snowflake, description: 'Glacial urban design' },
    { name: 'Zion AI Cave City Designer', href: '/zion-ai-cave-city-designer', icon: Mountain, description: 'Cavernous urban planning' },
    { name: 'Zion AI Cloud City Designer', href: '/zion-ai-cloud-city-designer', icon: Cloud, description: 'Atmospheric urban design' },
    { name: 'Zion AI Space Elevator Designer', href: '/zion-ai-space-elevator-designer', icon: ArrowUp, description: 'Orbital transportation design' },
    { name: 'Zion AI Hyperloop Designer', href: '/zion-ai-hyperloop-designer', icon: Train, description: 'High-speed transportation' },
    { name: 'Zion AI Flying Car Designer', href: '/zion-ai-flying-car-designer', icon: Car, description: 'Aerial vehicle design' },
    { name: 'Zion AI Hoverboard Designer', href: '/zion-ai-hoverboard-designer', icon: Zap, description: 'Levitation technology' },
    { name: 'Zion AI Teleporter Designer', href: '/zion-ai-teleporter-designer', icon: Zap, description: 'Quantum transportation' },
    { name: 'Zion AI Time Machine Designer', href: '/zion-ai-time-machine-designer', icon: Clock, description: 'Temporal transportation' },
    { name: 'Zion AI Portal Designer', href: '/zion-ai-portal-designer', icon: Circle, description: 'Dimensional gateway design' },
    { name: 'Zion AI Wormhole Designer', href: '/zion-ai-wormhole-designer', icon: Circle, description: 'Spacetime tunnel design' },
    { name: 'Zion AI Stargate Designer', href: '/zion-ai-stargate-designer', icon: Circle, description: 'Interstellar gateway design' },
    { name: 'Zion AI Dyson Sphere Designer', href: '/zion-ai-dyson-sphere-designer', icon: Sun, description: 'Stellar megastructure design' },
    { name: 'Zion AI Ring World Designer', href: '/zion-ai-ring-world-designer', icon: Circle, description: 'Orbital habitat design' },
    { name: 'Zion AI Death Star Designer', href: '/zion-ai-death-star-designer', icon: Circle, description: 'Battle station design' }
  ]

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum processing power' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All AI Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[450px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-purple-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Complete technology infrastructure solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All IT Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-green-400 neon-text-enhanced">Micro SAAS Solutions</h3>
                    <p className="text-sm text-gray-400">Ready-to-use business tools with AI and automation</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-green-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <Link
                      to="/micro-saas"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-orange-400 neon-text-enhanced">Emerging Technologies</h3>
                    <p className="text-sm text-gray-400">Cutting-edge technology solutions for the future</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto custom-scrollbar">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-orange-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Tutorials
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/tutorials" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Tutorials
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
