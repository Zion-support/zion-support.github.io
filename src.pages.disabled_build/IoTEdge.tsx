import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu,
  Zap,
  Shield,
  Database,
  Network,
  Globe,
  CheckCircle,
  ArrowRight,
  Code,
  Server,
  Wifi,
  Lock,
  BarChart3,
  Target,
  Clock,
  Users,
  Rocket,
  Sensor
} from "lucide-react";
const services = [
  {
    icon: Cpu,
    title: "Edge Computing Infrastructure",
    description: "Deploy and manage edge computing nodes for real-time data processing.",
    features: ["Edge node deployment", "Load balancing", "Failover systems", "Performance monitoring"],
    benefits: ["Reduced latency", "Bandwidth optimization", "Real-time processing", "Cost efficiency"]
  },
  {
    icon: Sensor,
    title: "IoT Device Management",
    description: "Comprehensive platform for managing IoT devices and sensors.",
    features: ["Device provisioning", "Remote monitoring", "Firmware updates", "Health monitoring"],
    benefits: ["Centralized control", "Reduced maintenance", "Improved reliability", "Scalable deployment"]
  },
  {
    icon: Network,
    title: "Edge Analytics",
    description: "Process and analyze data at the edge for instant insights.",
    features: ["Real-time analytics", "Machine learning", "Data filtering", "Predictive maintenance"],
    benefits: ["Instant insights", "Reduced cloud costs", "Better decision making", "Proactive maintenance"]
  },
  {
    icon: Shield,
    title: "IoT Security",
    description: "End-to-end security for IoT devices and edge networks.",
    features: ["Device authentication", "Data encryption", "Threat detection", "Access control"],
    benefits: ["Enhanced security", "Compliance ready", "Risk mitigation", "Trust building"]