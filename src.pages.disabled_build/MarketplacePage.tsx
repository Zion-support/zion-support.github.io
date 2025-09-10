import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search,
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Download,
  Play,
  Users,
  TrendingUp,
  Award,
  Clock,
  Tag,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Settings,
  BarChart3,
  Globe,
  Lock
} from "lucide-react";
export function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    { id: "all", name: "All Products", icon: Globe },
    { id: "ai", name: "AI Solutions", icon: Brain },
    { id: "security", name: "Security", icon: Shield },
    { id: "cloud", name: "Cloud Services", icon: Cloud },
    { id: "data", name: "Data Analytics", icon: Database },
    { id: "development", name: "Development Tools", icon: Code },
    { id: "automation", name: "Automation", icon: Settings },
    { id: "analytics", name: "Analytics", icon: BarChart3 }