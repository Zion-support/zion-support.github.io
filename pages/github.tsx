import React, { useState } from "react";
import Head from "next/head";
const GitHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", name: "All Discussions", icon: "💬" },
    { id: "announcements", name: "Announcements", icon: "📢" },
    { id: "general", name: "General", icon: "🌐" },
    { id: "ideas", name: "Ideas", icon: "💡" },
    { id: "help", name: "Help", icon: "❓" },
    { id: "showcase", name: "Showcase", icon: "🎨" },