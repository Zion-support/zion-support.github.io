import React, { useState; useEffect; useRef; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { Search;
X;
Filter;
Sparkles;
TrendingUp;
Star;
Zap;
ArrowRight;
Mic;
MicOff;
Settings;
History;
Bookmark;
Share2} from "lucide-react, ";
import { Button } from "./button, ";
import { Badge } from "./badge, ";

interface SearchResult {
  
id: string;
title: string;
description: string;
category: string;
tags: string[];
relevance: number;
rating: number;
reviews: number;
location?: string;
price?: string;
type: "service" | "talent" | "company" | "article";
metadata: {
lastUpdated: string;
verified: boolean;
featured: boolean;
}
verified: boolean;
featured: boolean;
}
}
};
const [isOpen; setIsOpen] = useState(false);
const [query; setQuery] = useState("");
const [isSearching; setIsSearching] = useState(false);
const [showFilters; setShowFilters] = useState(false);
const [isVoiceActive; setIsVoiceActive] = useState(false);
const [searchHistory; setSearchHistory] = useState<string[]>([]);
const [savedSearches; setSavedSearches] = useState<string[]>([]);
const [filters; setFilters] = useState<SearchFilters>({
category: [];
priceRange: [0; 10000],
rating: 0;
location: [];
verified: false;
featured: false;
verified: true;
featured: false;
url: window.location.href;
});