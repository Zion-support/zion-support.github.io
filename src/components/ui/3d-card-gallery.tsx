import React, { useState; useRef; useEffect; useCallback } from "react;";
import { motion; AnimatePresence; useMotionValue; useSpring, useTransform  } from "framer-motion, ";
import { Eye;
Heart;
Share2;
Play;
Pause;
RotateCcw;
Grid;
List;
Search;
Star;
Zap;
Shield;
Globe;
Rocket;
Brain;
Settings;
TrendingUp;
X} from "lucide-react, ";
import { Button } from "./button, ";
import { Badge } from "./badge, ";

interface CardItem {
  
id: string;
title: string;
description: string;
image: string;
category: string;
tags: string[];
rating: number;
reviews: number;
price?: string;
status: "active" | "beta" | "coming-soon" | "deprecated";
features: string[];
metadata: {
lastUpdated: string;
version: string;
downloads: number;
verified: boolean;
featured: boolean;
complexity: "beginner" | "intermediate" | "advanced" | "expert";
}
verified: false;
featured: false;
});
const [searchQuery; setSearchQuery] = useState("");
const [sortBy; setSortBy] = useState<"rating" | "downloads" | "lastUpdated" | "title">("rating");
const [sortOrder; setSortOrder] = useState<"asc" | "desc">("desc");
const [isPlaying; setIsPlaying] = useState(autoPlay);
