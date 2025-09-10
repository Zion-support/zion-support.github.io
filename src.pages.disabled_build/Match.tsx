import React from "react";
const Match: React.FC = () => {;""""
  const [selectedCategory, setSelectedCategory] = useState("all");""""
  const [searchQuery, setSearchQuery] = useState("");"
""
  """
    { id: "all", name: "All Categories", icon: Sparkles, count: 150 },;"""
    { id: "ai", name: "AI Services", icon: Brain, count: 45 },;"""
    { id: "cloud", name: "Cloud & DevOps", icon: Cloud, count: 32 },;"""
    { id: "security", name: "Cybersecurity", icon: Shield, count: 28 },;"""
    { id: "data", name: "Data & Analytics", icon: Database, count: 25 },;"""
    { id: "iot", name: "IoT & Edge", icon: Cpu, count: 20 };