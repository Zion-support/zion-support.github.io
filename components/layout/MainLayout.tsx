import React from "react";
import Head from "next/head";
interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.",
  keywords = "technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services",
  ogImage = "/og-image.jpg"