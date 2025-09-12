import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { Server, Network, Database, Shield, Zap, Monitor, Wifi, Cloud } from "lucide-react";
const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
      title: "Network Infrastructure"
      description: "Design, implement, and maintain robust network solutions"
      features: ["Network Design", "Wireless Solutions", "VPN Implementation", "Network Security"]
      icon: Network;
    }
    {
      title: "Server Management"
      description: "Comprehensive server infrastructure and management services"
      features: ["Server Setup", "Virtualization", "Performance Optimization", "Backup Solutions"]
      icon: Server;
    }
    {
      title: "Storage Solutions"
      description: "Scalable storage infrastructure for growing businesses"
      features: ["Storage Design", "Data Backup", "Disaster Recovery", "Cloud Storage"]
      icon: Database;
    }
    {
      title: "Security Infrastructure"
      description: "Multi-layered security infrastructure protection"
      features: ["Firewall Management", "Intrusion Detection", "Access Control", "Security Monitoring"]
      icon: Shield;
    }
  ];
  const infrastructureAreas = [
    { area: "Hardware Infrastructure", solutions: ["Servers", "Storage systems", "Network equipment", "Workstations"] }
    { area: "Software Infrastructure", solutions: ["Operating systems", "Virtualization platforms", "Database systems", "Management tools"] }
    { area: "Network Infrastructure", solutions: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"] }
    { area: "Storage Infrastructure", solutions: ["Storage arrays", "Backup systems", "Cloud storage", "Data protection"] }
  ];
  const keyFeatures = [
    { name: "High Availability", icon: "🔄", description: "99.9% uptime guarantee with redundancy" }
    { name: "Scalable Solutions", icon: "📈", description: "Infrastructure that grows with your business" }
    { name: "Proactive Monitoring", icon: "👁️", description: "24/7 monitoring and alerting" }
    { name: "Expert Support", icon: "👨‍💻", description: "Certified engineers and technicians" }
  ];
  return (
    <div className="min-h-screen bg-background">
      <SEO title="IT Infrastructure - Zion Tech Group"
        description="Build a robust and scalable IT infrastructure with our expert solutions and management services."
        keywords="IT infrastructure, server management, network design, data centers, infrastructure security"
        canonical="https://ziontechgroup.com/services/infrastructure"   />
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions",
      features: ["Network Design", "Wireless Solutions", "VPN Implementation", "Network Security"],