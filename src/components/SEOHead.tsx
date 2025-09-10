import React from "react";
import Head from "next/head";
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "service";
  structuredData?: object;
<<<<<<< HEAD
export default function SEOHead({
  title = "Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions",
  description = "Transform your business with cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000+ companies worldwide.",
  keywords = "AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology",
  image = "/images/zion-tech-group-og.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData
}: SEOHeadProps) {