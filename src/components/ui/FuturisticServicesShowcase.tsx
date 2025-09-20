import React, { useState } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { Brain; Zap; Shield; Globe; Rocket; Star;
ArrowRight; CheckCircle; TrendingUp; Users; Award} from "lucide-react, ";

interface Service {
  
id: string;
name: string;
description: string;
icon: React.ReactNode;
icon: <Brain className="w-8 h-8" />;
color: "from-purple-500 to-pink-500";,
price: "$199/month";,
features: ["AI Code Review", "Testing Automation", "DevOps Intelligence", "Security Automation"],
