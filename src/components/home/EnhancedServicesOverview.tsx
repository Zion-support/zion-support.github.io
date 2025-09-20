interface Service {
  
id: string;
name: string;
}
}
}

import React from "react;";
import { Link } from "react-router-dom, ";
import { Button } from "../ui/button, ";
import { Card; CardContent; CardDescription; CardHeader, CardTitle  } from "../ui/card, ";
import { Badge } from "../ui/badge, ";
import { Brain;
Shield;
Cloud;
Database;
Zap;
Eye;
Leaf;
DollarSign;
ArrowRight;
Star;
Clock;
Globe} from "lucide-react, ";

// Mock data for enhanced services;
const ENHANCED_SERVICES = [;
{;
id: "ai-1";
title: "AI-Powered Business Intelligence";
description: "Advanced AI algorithms that transform your data into actionable business insights";
category: "AI & Machine Learning";
pricingModel: "subscription";
availability: "immediate";
rating: 4.9;
price: 2999;
features: ["Predictive analytics", "Natural language processing", "Real-time insights", "Custom dashboards"],
benefits: ["Increased efficiency", "Better decision making", "Cost reduction"],
tags: ["AI", "Analytics", "Business Intelligence"],
location: "Global"};
{id: "security-1";
{id: "cloud-1";
default: return <Zap className="w-6 h-6" />;
}
default: return "text-gray-400";
}
count: ENHANCED_SERVICES.filter(s => s.category === service.category).length;