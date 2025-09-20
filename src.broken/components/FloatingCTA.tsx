import { Link  } from 'react-router-dom';
export default function Page() {
 from 'lucide-react';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from 'lucide-react'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show CTA after 5 seconds
    
      setIsVisible(true) }, 5000) ;

    return () => clearTimeout(timer) }, []) };
  ];

  const quickServices = ["
    { name: "AI Solutions", icon: Brain, link: "/ai-services" },"
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },"
    { name: "Cloud Services", icon: Cloud, link: "/cloud-solutions" },;"
    { name: "Digital Transformation", icon: Zap, link: "/digital-transformation" };
  ];

  if(!isVisible) return null;

