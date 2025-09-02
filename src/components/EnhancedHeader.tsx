import React, { useState, useEffect } from &apos;react';
import { Link } from &apos;react-router-dom';
import { motion, AnimatePresence } from &apos;framer-motion';
import {
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud,
  Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen,
  MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star,
  Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool,
  Eye, Server, Smartphone, Database, Network, Clock, ArrowRight,
  PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText, Building2, Car, Share2 } from &apos;lucide-react';&apos;&apos;
export function EnhancedHeader() {}
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<;<;<string | null>(null);
  useEffect(() => {}
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)}
    window.addEventListener(&apos;scroll&apos;, handleScroll);
    return () => window.removeEventListener(&apos;scroll&apos;, handleScroll)}, []);
  useEffect(() => {
    // Close mobile menu when route changes;
    setIsMenuOpen(false);
    setActiveDropdown(null)}, [location.pathname]);&apos;
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`}
  }
;
  const navigation = [
    { name: &apos;Home&apos;, href: &apos;/&apos;, current: true },
    { name: &apos;About&apos;, href: &apos;/about&apos;, current: false },
    { name: &apos;Services&apos;, href: &apos;/services&apos;, current: false },
    { name: &apos;Innovative Services 2028&apos;, href: &apos;/innovative-services-showcase-2028&apos;, current: false },
    { name: &apos;Pricing Guide&apos;, href: &apos;/comprehensive-pricing-guide-2028&apos;, current: false },
    { name: &apos;Solutions&apos;, href: &apos;/solutions&apos;, current: false },
    { name: &apos;Contact&apos;, href: &apos;/contact&apos;, current: false }];
  // Organized services by category;&apos;&apos;
  const servicesCategories = [
    {
      title: &apos;AI & Machine Learning&apos;,
      icon: Brain,
      color: &apos;from-blue-500 to-indigo-500&apos;,
      services: [{ nam,e: &apos;AI Autonomous Business Manager&apos;, href: &apos;/services/ai-autonomous-business-manager&apos;, description: &apos;Fully autonomous business operations&apos; },
        { name: &apos;AI Business Intelligence&apos;, href: &apos;/services/ai-business-intelligence&apos;, description: &apos;Advanced analytics & ML insights&apos; },
        { name: &apos;AI Compliance Assistant&apos;, href: &apos;/services/ai-compliance-assistant&apos;, description: &apos;Automated regulatory compliance&apos; },
        { name: &apos;AI Sales Copilot&apos;, href: &apos;/services/ai-sales-copilot&apos;, description: &apos;Intelligent sales optimization&apos; },
        { name: &apos;AI-Powered SEO&apos;, href: &apos;/services/ai-powered-seo&apos;, description: &apos;Machine learning SEO optimization&apos; },
        { name: &apos;AI Content Marketing Suite&apos;, href: &apos;/services/ai-content-marketing-suite&apos;, description: &apos;AI-powered content creation & optimization&apos; },
        { name: &apos;AI Customer Support&apos;, href: &apos;/services/ai-customer-support-automation&apos;, description: &apos;Intelligent support automation&apos; },
        { name: &apos;AI Project Management&apos;, href: &apos;/services/ai-project-management&apos;, description: &apos;AI-driven project optimization&apos; },
        { name: &apos;AI Financial Analytics&apos;, href: &apos;/services/ai-financial-analytics&apos;, description: &apos;Intelligent financial insights&apos; }]},
    {
      title: &apos;Quantum Computing&apos;,
      icon: Atom,
      color: &apos;from-indigo-500 to-purple-500&apos;,
      services: [
        { nam,e: &apos;Quantum AI Hybrid Platform&apos;, href: &apos;/services/quantum-ai-hybrid-platform&apos;, description: &apos;Revolutionary quantum-AI computing&apos; },
        { name: &apos;Quantum Computing Solutions&apos;, href: &apos;/services/quantum-computing&apos;, description: &apos;Next-generation computing power&apos; },
        { name: &apos;Quantum Financial Trading&apos;, href: &apos;/services/ai-quantum-financial-trading-platform&apos;, description: &apos;Advanced quantum trading&apos; },
        { name: &apos;Quantum Machine Learning&apos;, href: &apos;/services/quantum-machine-learning&apos;, description: &apos;Quantum-enhanced ML algorithms&apos; },
        { name: &apos;AI Quantum Financial Analytics&apos;, href: &apos;/services/ai-quantum-financial-analytics-platform&apos;, description: &apos;Revolutionary quantum AI financial platform&apos; }]},
    {
      title: &apos;Cloud & Infrastructure&apos;,
      icon: Cloud,
      color: &apos;from-cyan-500 to-blue-500&apos;,
      services: [
        { nam,e: &apos;Cloud DevOps&apos;, href: &apos;/services/cloud-devops&apos;, description: &apos;Infrastructure automation & scaling&apos; },
        { name: &apos;IT Infrastructure&apos;, href: &apos;/services/it-infrastructure&apos;, description: &apos;Enterprise infrastructure solutions&apos; },
        { name: &apos;FinOps Advisor&apos;, href: &apos;/services/finops-advisor&apos;, description: &apos;Cloud cost optimization&apos; },
        { name: &apos;Cloud FinOps Optimizer&apos;, href: &apos;/services/cloud-finops-optimizer&apos;, description: &apos;Financial operations automation&apos; }]},
    {
      title: &apos;Cybersecurity&apos;,
      icon: Shield,
      color: &apos;from-red-500 to-orange-500&apos;,
      services: [
        { nam,e: &apos;AI Cybersecurity Platform&apos;, href: &apos;/services/ai-cybersecurity-platform&apos;, description: &apos;Advanced AI-powered security&apos; },
        { name: &apos;AI Cybersecurity Operations&apos;, href: &apos;/services/ai-cybersecurity-operations-center&apos;, description: &apos;Autonomous security operations center&apos; },
        { name: &apos;Security Headers & CSP&apos;, href: &apos;/services/security-headers-csp&apos;, description: &apos;Web security hardening&apos; },
        { name: &apos;DSR Privacy Portal&apos;, href: &apos;/services/dsr-portal&apos;, description: &apos;GDPR/CCPA compliance&apos; },
        { name: &apos;Zero Trust Network Access&apos;, href: &apos;/services/zero-trust-network-access&apos;, description: &apos;Modern security architecture&apos; }]},
    {
      title: &apos;Supply Chain & Logistics&apos;,
      icon: Truck,
      color: &apos;from-green-500 to-blue-600&apos;,
      services: [
        { nam,e: &apos;AI Autonomous Supply Chain&apos;, href: &apos;/services/ai-autonomous-supply-chain-management-platform&apos;, description: &apos;Self-learning supply chain management&apos; },
        { name: &apos;Autonomous Logistics&apos;, href: &apos;/services/autonomous-logistics&apos;, description: &apos;Smart supply chain automation&apos; }]},
    {
      title: &apos;Emerging Technologies&apos;,
      icon: Rocket,
      color: &apos;from-purple-500 to-pink-500&apos;,
      services: [
        { nam,e: &apos;AI Smart City Infrastructure&apos;, href: &apos;/services/ai-smart-city-infrastructure-management&apos;, description: &apos;Intelligent urban management&apos; },
        { name: &apos;AI Autonomous Vehicles&apos;, href: &apos;/services/ai-autonomous-vehicle-management-platform&apos;, description: &apos;Autonomous fleet management&apos; },
        { name: &apos;IoT Edge Computing&apos;, href: &apos;/services/iot-edge-computing&apos;, description: &apos;Connected device intelligence&apos; },
        { name: &apos;Digital Twin Platform&apos;, href: &apos;/services/digital-twin&apos;, description: &apos;Virtual replica technology&apos; },
        { name: &apos;Space Technology&apos;, href: &apos;/space-tech&apos;, description: &apos;Innovative space solutions&apos; }]},
    {
      title: &apos;Smart City & Infrastructure&apos;,
      icon: Building2,
      color: &apos;from-green-500 to-emerald-500&apos;,
      services: [
        { nam,e: &apos;AI Smart City Management&apos;, href: &apos;/services/ai-smart-city-infrastructure-management&apos;, description: &apos;Intelligent urban infrastructure&apos; },
        { name: &apos;Traffic Management&apos;, href: &apos;/services/traffic-management&apos;, description: &apos;AI-powered traffic optimization&apos; },
        { name: &apos;Energy Grid Management&apos;, href: &apos;/services/energy-grid&apos;, description: &apos;Smart energy distribution&apos; },
        { name: &apos;Environmental Monitoring&apos;, href: &apos;/services/environmental-monitoring&apos;, description: &apos;Real-time environmental tracking&apos; }]},
    {
      title: &apos;Autonomous Systems&apos;,
      icon: Car,
      color: &apos;from-blue-500 to-cyan-500&apos;,
      services: [
        { nam,e: &apos;AI Autonomous Vehicle Platform&apos;, href: &apos;/services/ai-autonomous-vehicle-management-platform&apos;, description: &apos;Fleet management & safety&apos; },
        { name: &apos;Drone Management&apos;, href: &apos;/services/drone-management&apos;, description: &apos;Autonomous drone operations&apos; },
        { name: &apos;Robotics Automation&apos;, href: &apos;/services/robotics-automation&apos;, description: &apos;Industrial robotics solutions&apos; }]},
    {
      title: &apos;Micro SaaS Solutions&apos;,
      icon: Code,
      color: &apos;from-green-500 to-emerald-500&apos;,
      services: [
        { nam,e: &apos;AI Email Automation Suite&apos;, href: &apos;/services/ai-email-automation-suite&apos;, description: &apos;Intelligent email management & automation&apos; },
        { name: &apos;AI Social Media Scheduler&apos;, href: &apos;/services/ai-social-media-scheduler&apos;, description: &apos;AI-powered social media automation&apos; },
        { name: &apos;AI Customer Insights Platform&apos;, href: &apos;/services/ai-customer-insights-platform&apos;, description: &apos;Advanced customer analytics & insights&apos; },
        { name: &apos;Micro CRM&apos;, href: &apos;/services/micro-crm&apos;, description: &apos;Lightweight customer management&apos; },
        { name: &apos;Helpdesk Platform&apos;, href: &apos;/services/helpdesk-platform&apos;, description: &apos;Efficient support system&apos; },
        { name: &apos;AI Content Marketing&apos;, href: &apos;/services/ai-content-marketing-suite&apos;, description: &apos;AI-powered content creation&apos; },
        { name: &apos;Customer Support Automation&apos;, href: &apos;/services/ai-customer-support-automation&apos;, description: &apos;Intelligent support automation&apos; },
        { name: &apos;Website Analytics&apos;, href: &apos;/services/website-analytics&apos;, description: &apos;Performance insights&apos; }]},
    {
      title: &apos;DevOps & Automation&apos;,
      icon: Workflow,
      color: &apos;from-blue-500 to-indigo-500&apos;,
      services: [
        { nam,e: &apos;AI-Powered DevOps Automation&apos;, href: &apos;/services/ai-powered-devops-automation&apos;, description: &apos;Intelligent CI/CD & infrastructure automation&apos; },
        { name: &apos;Cloud DevOps&apos;, href: &apos;/services/cloud-devops&apos;, description: &apos;Infrastructure automation & scaling&apos; },
        { name: &apos;IT Infrastructure&apos;, href: &apos;/services/it-infrastructure&apos;, description: &apos;Enterprise infrastructure solutions&apos; },
        { name: &apos;FinOps Advisor&apos;, href: &apos;/services/finops-advisor&apos;, description: &apos;Cloud cost optimization&apos; }]}
  ];
  // Featured services for quick access;&apos;
  const services = [
    {
      name: &apos;AI Email Automation Suite&apos;,
      description: &apos;Intelligent email management & automation&apos;,
      href: &apos;/services/ai-email-automation-suite&apos;,
      icon: Mail,
      color: &apos;from-blue-500 to-indigo-500&apos;,
      featured: true},
    {
      name: &apos;AI Social Media Scheduler&apos;,
      description: &apos;AI-powered social media automation&apos;,
      href: &apos;/services/ai-social-media-scheduler&apos;,
      icon: Share2,
      color: &apos;from-purple-500 to-pink-500&apos;,
      featured: true},
    {
      name: &apos;AI Customer Insights Platform&apos;,
      description: &apos;Advanced customer analytics & insights&apos;,
      href: &apos;/services/ai-customer-insights-platform&apos;,
      icon: Users,
      color: &apos;from-green-500 to-emerald-500&apos;,
      featured: true},
    {
      name: &apos;AI-Powered DevOps Automation&apos;,
      description: &apos;Intelligent CI/CD & infrastructure automation&apos;,
      href: &apos;/services/ai-powered-devops-automation&apos;,
      icon: Workflow,
      color: &apos;from-blue-500 to-indigo-500&apos;,
      featured: true},
    {
      name: &apos;AI Content Creation Studio Pro&apos;,
      description: &apos;Advanced AI-powered content creation platform&apos;,
      href: &apos;/services/AI-Content-Creation-Studio-Pro&apos;,
      icon: PenTool,
      color: &apos;from-purple-500 to-pink-500&apos;,
      featured: true},
    {
      name: &apos;Quantum AI Trading Platform&apos;,
      description: &apos;Revolutionary quantum-enhanced trading system&apos;,
      href: &apos;/services/Quantum-AI-Trading-Platform&apos;,
      icon: BarChart3,
      color: &apos;from-orange-500 to-red-500&apos;,
      featured: true},
    {
      name: &apos;AI Quantum Financial Analytics&apos;,
      description: &apos;Revolutionary quantum AI financial platform&apos;,
      href: &apos;/services/ai-quantum-financial-analytics-platform&apos;,
      icon: BarChart3,
      color: &apos;from-blue-500 to-purple-600&apos;,
      featured: true},
    {
      name: &apos;AI Autonomous Supply Chain&apos;,
      description: &apos;Self-learning supply chain management&apos;,
      href: &apos;/services/ai-autonomous-supply-chain-management-platform&apos;,
      icon: Truck,
      color: &apos;from-green-500 to-blue-600&apos;,
      featured: true},
    {
      name: &apos;AI Cybersecurity Operations&apos;,
      description: &apos;Autonomous security operations center&apos;,
      href: &apos;/services/ai-cybersecurity-operations-center&apos;,
      icon: Shield,
      color: &apos;from-red-500 to-orange-600&apos;,
      featured: true},
    {
      name: &apos;2026 Services Showcase&apos;,
      description: &apos;Latest innovative services showcase&apos;,
      href: &apos;/innovative-services-showcase-2026&apos;,
      icon: Sparkles,
      color: &apos;from-yellow-500 to-orange-500&apos;,
      featured: true}
  ];&apos;
  const solutionsCategories = [
    {
      title: &apos;Industry Solutions&apos;,
      icon: Building,
      color: &apos;from-blue-500 to-purple-500&apos;,
      solutions: [{ nam,e: &apos;Enterprise Solutions&apos;, href: &apos;/solutions/enterprise&apos;, description: &apos;Large-scale business transformation&apos; },
        { name: &apos;Healthcare Solutions&apos;, href: &apos;/solutions/healthcare&apos;, description: &apos;Medical technology innovation&apos; },
        { name: &apos;Financial Solutions&apos;, href: &apos;/financial-solutions&apos;, description: &apos;Fintech and banking solutions&apos; },
        { name: &apos;Manufacturing Solutions&apos;, href: &apos;/manufacturing-solutions&apos;, description: &apos;Industry 4.0 automation&apos; }]},
    {
      title: &apos;Technology Solutions&apos;,
      icon: Cpu,
      color: &apos;from-cyan-500 to-blue-500&apos;,
      solutions: [
        { nam,e: &apos;AI Solutions&apos;, href: &apos;/ai-solutions&apos;, description: &apos;Artificial intelligence integration&apos; },
        { name: &apos;Digital Transformation&apos;, href: &apos;/services/digital-transformation&apos;, description: &apos;Business modernization&apos; },
        { name: &apos;Research & Development&apos;, href: &apos;/research-development&apos;, description: &apos;Innovation and discovery&apos; },
        { name: &apos;Green IT Solutions&apos;, href: &apos;/green-it&apos;, description: &apos;Sustainable technology&apos; }]}
  ];&apos;
  const companyLinks = [
    { name: &apos;About Us&apos;, href: &apos;/about&apos;, description: &apos;Learn about our mission and values&apos; },
    { name: &apos;Our Team&apos;, href: &apos;/team&apos;, description: &apos;Meet our expert professionals&apos; },
    { name: &apos;Leadership&apos;, href: &apos;/leadership&apos;, description: &apos;Executive team and vision&apos; },
    { name: &apos;Careers&apos;, href: &apos;/careers&apos;, description: &apos;Join our growing team&apos; },
    { name: &apos;Partners&apos;, href: &apos;/partners&apos;, description: &apos;Strategic partnerships&apos; },
    { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos;, description: &apos;Success stories and results&apos; }];&apos;
  const resourceLinks = [
    { name: &apos;Blog&apos;, href: &apos;/blog&apos;, description: &apos;Latest insights and updates&apos; },
    { name: &apos;News&apos;, href: &apos;/news&apos;, description: &apos;Company announcements&apos; },
    { name: &apos;Press&apos;, href: &apos;/press&apos;, description: &apos;Media resources&apos; },
    { name: &apos;Webinars&apos;, href: &apos;/webinars&apos;, description: &apos;Educational sessions&apos; },
    { name: &apos;White Papers&apos;, href: &apos;/white-papers&apos;, description: &apos;In-depth research&apos; },
    { name: &apos;Documentation&apos;, href: &apos;/documentation&apos;, description: &apos;Technical guides&apos; }];&apos;
  const supportLinks = [
    { name: &apos;Help Center&apos;, href: &apos;/help&apos;, description: &apos;Find answers and solutions&apos; },
    { name: &apos;FAQ&apos;, href: &apos;/faq&apos;, description: &apos;Frequently asked questions&apos; },
    { name: &apos;Support&apos;, href: &apos;/support&apos;, description: &apos;Technical assistance&apos; },
    { name: &apos;Training&apos;, href: &apos;/training&apos;, description: &apos;Skill development programs&apos; },
    { name: &apos;Contact Support&apos;, href: &apos;/contact&apos;, description: &apos;Get in touch with our team&apos; },
    { name: &apos;Status Page&apos;, href: &apos;/status&apos;, description: &apos;Service availability&apos; }];&apos;
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)}
;
export const EnhancedHeader: React.FC = () => {}
  const;const;const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: &apos;Home&apos;, href: &apos;/&apos; },
    { label: &apos;Services&apos;, href: &apos;/services&apos; },
    { label: &apos;Solutions&apos;, href: &apos;/solutions&apos; },
    { label: &apos;Enterprise&apos;, href: &apos;/enterprise&apos; },
    { label: &apos;Request Quote&apos;, href: &apos;/request-quote&apos; },
    { label: &apos;Case Studies&apos;, href: &apos;/case-studies&apos; },
    { label: &apos;Careers&apos;, href: &apos;/careers&apos; },
    { label: &apos;Contact&apos;, href: &apos;/contact&apos; }
  ]
  return(&apos;&apos;
    <header className=&apos;bg-white shadow-lg&apos;>&apos;'
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>&apos;'
        <div className=&apos;flex justify-between items-center py-6&apos;>&apos;'
          <div className=&apos;flex items-center&apos;>&apos;'
            <a href=&apos;/&apos; className=&apos;text-2xl font-bold text-blue-900&apos;>
              Zion Tech Group&apos;&apos;
            </a>
          </div>
          <nav className=&apos;hidden m,d:flex space-x-8&apos;>
            {navLinks.map((link, index) => (&apos;}
              <a key={index} href={link.href} className=&apos;text-gray-700 hover:text-blue-600&apos;>
                {link.label}&apos;
              </a>
            ))}
          </nav>
          <;<button;
            aria-label=&apos;Toggle navigation';
            onClick={() => setMobileOpen((v) => !v)}
            className=&apos;md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100&apos;
          >&apos;&apos;
            <svg xmlns=&apos;htt,p://www.w3.org/2000/svg&apos; className=&apos;h-6 w-6&apos; fill=&apos;none&apos; viewBox=&apos;0 0 24 24&apos; stroke=&apos;currentColor&apos;>&apos;'
              <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M4 6h16M4 12h16M4 18h16&apos; />&apos;
            </svg>
          </button>
        </div>
      </div>
    </header>
  )}
