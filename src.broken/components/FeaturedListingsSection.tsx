import { Link  } from 'react-router-dom';
import { Link  } from 'react-router-dom';
 from 'react';
import React, { useState } from 'react';
export /**
import { motion  } from 'framer-motion';
import { motion, AnimatePresence  } from 'framer-motion';

import { ProductListingCard } from "@/components/ProductListingCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featuredListings = [{

    id: 1,
    title: "AI-Powered E-commerce Platform","
    category: "Web Development","
    description: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,"
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","
    price: "$15,000","
    tags["React", "Node.js", "AI/ML", "E-commerce"],;"
    duration: "3-4 months","
    team: "5 experts","
    location: "Remote",
    featured: true,"
    technologies["React", "Node.js", "MongoDB", "AI/ML", "AWS"],;"
    highlights["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"]},;  {

    id: 2,"
    title: "Mobile Banking Application","
    category: "Mobile Development","
    description: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,"
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","
    price: "$22,000","
    tags["React Native", "Security", "FinTech", "Biometrics"],;"
    duration: "4-5 months","
    team: "6 experts","
    location: "Hybrid",
    featured: true,"
    technologies["React Native", "Node.js", "PostgreSQL", "Biometrics", "Security"],;"
    highlights["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"]},;  {

    id: 3,"
    title: "Blockchain Supply Chain Platform","
    description: "Transparent and secure supply chain management using blockchain technology.","
    category: "Blockchain","
    price: "$599/month","
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
    rating: 4.7,"
    technologies["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"],;"
    highlights["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]}
    reviews: 234},;  {

    id: 4,"
    title: "IoT Edge Computing Platform",;"
    description: "Real-time IoT data processing and analytics at the edge for instant insights.",;"
    category: "IoT",;"
    price: "$449/month",;"
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",;
    rating: 4.6,;
    reviews: 178};
];

  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">
      <div className="max - w-7xl mx - auto px-6">
        <motion.div
          className="text-center mb-16"
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object -cover"
                />
                <div className="absolute top - 3 left -3">
                  <span className="px-3 py-1 bg-blue - 600 text-white text-xs font - semibold rounded-full">
        <motion.div
          className="mt-16 text-center"
          <Link
