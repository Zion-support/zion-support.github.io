import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Eye,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    { id: "all", name: "All News", icon: Globe },
    { id: "ai", name: "AI & Machine Learning", icon: Brain },
    { id: "security", name: "Cybersecurity", icon: Shield },
    { id: "cloud", name: "Cloud Computing", icon: Cloud },
    { id: "development", name: "Development", icon: Code },
    { id: "data", name: "Data & Analytics", icon: Database },
    { id: "company", name: "Company News", icon: Award },
    { id: "industry", name: "Industry Trends", icon: TrendingUp }