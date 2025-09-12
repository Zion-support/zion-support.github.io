import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
const Newsroom: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    { id: "all", name: "All News", count: 156 },
    { id: "press-releases", name: "Press Releases", count: 23 },
    { id: "company-news", name: "Company News", count: 45 },
    { id: "product-updates", name: "Product Updates", count: 34 },
    { id: "partnerships", name: "Partnerships", count: 18 },
    { id: "awards", name: "Awards & Recognition", count: 12 },
    { id: "thought-leadership", name: "Thought Leadership", count: 24 },