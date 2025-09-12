import React from "react";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { Heart, Shield, Database, Zap, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Stethoscope, Microscope, Pill, Brain } from "lucide-react";
export default function HealthcareTech(...args: []):  {
  const features = [
    {
      icon: Heart,
      title: "Patient Care",
      description: "AI-powered diagnostics and personalized treatment recommendations",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "HIPAA-compliant security with end-to-end encryption",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Interoperability",
      description: "Seamless integration across healthcare systems and platforms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring and alert systems",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI Diagnostics",
      description: "Machine learning algorithms for accurate disease detection",
      color: "from-purple-500 to-pink-500"
    },;
    {;
      icon: Activity,;
      title: "Predictive Analytics",;
      description: "Early warning systems and preventive care insights",;
      color: "from-indigo-500 to-purple-500";
    };