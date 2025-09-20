interface Service {
  
id: string;
name: string;
}
}
}

import React from "react;";
import { Card; CardContent; CardDescription; CardHeader, CardTitle  } from "@/components/ui/card, ";
import { Button } from "@/components/ui/button, ";
import { Badge } from "@/components/ui/badge, ";
import { Link } from "react-router-dom, ";
import { FuturisticCard, NeonText  } from "@/components/ui/FuturisticBackground, ";
import { Brain;
Shield;
Cloud;
BarChart3;
Network;
Video;
Mic;
Eye;
Settings;
Monitor;
Server;
Key;
Globe;
Zap;
Layers;
ArrowRight} from "lucide-react, ";

export function ServicesShowcase() {const featuredServices = [;
{;
title: "AI Content Generator";
description: "Generate high-quality content; code; and documentation using advanced AI models.",
icon: <Brain className="h-12 w-12 text-zion-cyan" />;
price: "$29/month";
features: ["Blog posts", "Technical docs", "Marketing copy", "Code snippets"],
category: "AI Services";
badge: "Popular";
link: "/ai-content-generator";
glowColor: "#00ffff"};
{title: "Cybersecurity Assessment";
link: "/cybersecurity-assessment";
glowColor: "#ef4444"};
{title: "Cloud Migration Service";
link: "/cloud-migration";
glowColor: "#3b82f6"};
{title: "Data Analytics Dashboard";
link: "/data-analytics";
glowColor: "#22c55e"};
{title: "AI Model Training";
link: "/ai-model-training";
glowColor: "#a855f7"};
{title: "Network Infrastructure";
link: "/network-infrastructure";
category: "Quantum Computing";
link: "/quantum-computing-api"};
{title: "Edge Computing Platform";
description: "Distributed computing platform for low-latency applications and real-time processing.";
icon: <Layers className="h-10 w-10 text-cyan-400" />;
price: "$0.50/hour";
category: "Edge Computing";
link: "/edge-computing"};
{title: "Blockchain Integration";
description: "Integrate blockchain technology into your applications for enhanced security and transparency.";
icon: <Key className="h-10 w-10 text-emerald-400" />;
price: "$199/month";
category: "Blockchain";
link: "/blockchain-integration"};
{title: "IoT Device Management";
description: "Comprehensive IoT platform for device connectivity; monitoring; and data collection.",
icon: <Network className="h-10 w-10 text-blue-400" />;
price: "$0.50/device/month";
category: "IoT Platform";