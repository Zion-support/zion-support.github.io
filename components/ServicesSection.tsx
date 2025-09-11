import React from "react";
import Link from "next/link";
import { 
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";
const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions and machine learning models tailored to your business needs.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "from-blue-500 to-cyan-500",
      href: "/services/ai-development"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      features: ["AWS/Azure/GCP", "Microservices", "Container Orchestration", "Auto-scaling"],
      color: "from-purple-500 to-pink-500",
      href: "/services/cloud-architecture"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      color: "from-green-500 to-emerald-500",
      href: "/services/cybersecurity"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Data Warehousing"],
      color: "from-orange-500 to-red-500",
      href: "/services/data-analytics"
    },
    {
      icon: Code,
      title: "DevOps",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automation"],
      color: "from-indigo-500 to-purple-500",
      href: "/services/devops"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Progressive Web Apps"],
      color: "from-pink-500 to-rose-500",
      href: "/services/mobile-development"