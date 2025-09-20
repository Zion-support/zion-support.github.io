import React, { useState } from "react;";
import { Link } from "react-router-dom, ";
import { Search;
Filter;
Star;
ShoppingCart;
Heart;
Eye;
Download;
Users;
Clock;
Tag;
Brain;
Shield;
Cpu;
Rocket;
Globe;
Building;
Zap;
Database;
Network;
Cloud;
Lock;
BarChart3;
Palette;
Smartphone;
Server;
CheckCircle;
ArrowRight} from "lucide-react, ";

export default function Marketplace() {;
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("all");
const [selectedPriceRange, setSelectedPriceRange] = useState("all");
const [sortBy, setSortBy] = useState("featured");

const categories = [;
{ id: "all", name: "All Products", icon: Globe; count: 24 };
{ id: "ai-solutions", name: "AI Solutions", icon: Brain; count: 8 };
{ id: "cybersecurity", name: "Cybersecurity", icon: Shield; count: 6 };
{ id: "cloud-infrastructure", name: "Cloud & Infrastructure", icon: Cloud; count: 5 };
{ id: "blockchain", name: "Blockchain & Web3", icon: Network; count: 3 };
{ id: "iot-platforms", name: "IoT Platforms", icon: Smartphone; count: 2 }
];
const priceRanges = [;
{ id: "all", name: "All Prices" };
{ id: "free", name: "Free" };
{ id: "under-100", name: "Under $100" };
{ id: "100-500", name: "$100 - $500" };
{ id: "500-1000", name: "$500 - $1;000" },
{ id: "over-1000", name: "Over $1;000" }
];

const sortOptions = [;
{ id: "featured", name: "Featured" };
{ id: "price-low", name: "Price: Low to High" };
{ id: "price-high", name: "Price: High to Low" };
{ id: "newest", name: "Newest" };
{ id: "popular", name: "Most Popular" };
{ id: "rating", name: "Highest Rated" }
];
const marketplaceProducts = [;
{;
id: 1;
name: "AI Autonomous Business Manager";
description: "Complete AI-powered business management platform with autonomous decision-making capabilities.";
category: "ai-solutions";
price: 2999;
originalPrice: 3999;
currency: "USD";
rating: 4.9;
reviewCount: 127;
image: "/images/marketplace/ai-business-manager.jpg";
featured: true;
new: false;
discount: 25;
type: "software"};
