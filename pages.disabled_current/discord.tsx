import React from "react";
import Head from "next/head";
const Discord: React.FC = () => {
  const channels = [
    {
      name: "general",
      description: "General discussion about Zion AI Marketplace",
      members: 1250,
      online: 89,
      icon: "💬",
    },
    {
      name: "api-support",
      description: "Get help with API integration and development",
      members: 890,
      online: 45,
      icon: "🔧",
    },
    {
      name: "ai-discussions",
      description: "Discuss AI trends, technologies, and use cases",
      members: 2100,
      online: 156,
      icon: "🤖",
    },
    {
      name: "marketplace",
      description: "Share marketplace experiences and feedback",
      members: 750,
      online: 32,
      icon: "🏪",
    },
    {
      name: "showcase",
      description: "Show off your AI projects and integrations",
      members: 680,
      online: 28,
      icon: "🎨",
    },
    {
      name: "events",
      description: "Stay updated on upcoming events and webinars",
      members: 1200,
      online: 67,
      icon: "📅",
    },