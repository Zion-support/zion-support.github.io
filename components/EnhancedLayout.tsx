import Head from "next/head"
import React, { ReactNode } from "react"
interface EnhancedLayoutProps {;
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string,
  noindex?: boolean;
  showPerformanceMetrics?: boolean;
  showSEOAnalysis?: boolean}
export const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,";
  title = "Zion Tech Group - Leading Technology Solutions Provider",";
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",";
  keywords = "AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development",";
  ogImage = "https://ziontechgroup.com/og-image.jpg"
  canonical;
  noindex = false;
  showPerformanceMetrics = false;
  showSEOAnalysis = false}) => {";
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group";
  const canonicalUrl = canonical || "https: //ziontechgroup.com",;