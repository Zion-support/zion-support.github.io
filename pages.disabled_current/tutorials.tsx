import React, { useState } from "react";
import Head from "next/head";
const Tutorials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", name: "All Tutorials", icon: "📚" },
    { id: "getting-started", name: "Getting Started", icon: "🚀" },
    { id: "integration", name: "Integration", icon: "🔗" },
    { id: "advanced", name: "Advanced", icon: "⚡" },
    { id: "best-practices", name: "Best Practices", icon: "✅" },