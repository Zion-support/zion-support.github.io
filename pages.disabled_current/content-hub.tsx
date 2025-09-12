import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
const ContentHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    { id: "all", name: "All Content", count: 156 },
    { id: "blog", name: "Blog Posts", count: 42 },
    { id: "guides", name: "Guides & Tutorials", count: 28 },
    { id: "case-studies", name: "Case Studies", count: 15 },
    { id: "whitepapers", name: "Whitepapers", count: 12 },
    { id: "videos", name: "Videos", count: 23 },
    { id: "webinars", name: "Webinars", count: 8 },
    { id: "news", name: "News & Updates", count: 28 },