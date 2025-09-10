import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Microscope,
  TestTube,
  Satellite,
  Telescope
} from "lucide-react";
export default function ResearchDevelopment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const researchAreas = [
    "all",
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Computing",
    "IoT & Edge Computing",
    "Blockchain",
    "AR/VR",
    "Robotics",
    "Data Science",
    "Biotechnology"