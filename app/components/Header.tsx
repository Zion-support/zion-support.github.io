import React from "react";
import Navigation from "./Navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Zion Tech Group - AI & IT Solutions",
  description: "Leading provider of AI and IT solutions for modern businesses.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Zion Tech Group - AI & IT Solutions",
    description: "Leading provider of AI and IT solutions for modern businesses.",
  },
};


const features = [
  {
    icon: "CheckCircle",
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence solutions",
    benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: "CheckCircle",
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions",
    benefits: ["Auto-scaling", "High Availability", "Security"]
  },
  {
    icon: "CheckCircle",
    title: "Data Analytics",
    description: "Powerful data analysis and visualization",
    benefits: ["Real-time Analytics", "Predictive Modeling", "Business Intelligence"]
  },
  {
    icon: "CheckCircle",
    title: "Automation",
    description: "Streamline your business processes",
    benefits: ["Workflow Automation", "Process Optimization", "Efficiency Gains"]
  }
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase productivity with AI automation",
  "Enhance security with advanced protection",
  "Scale your business with cloud solutions"
];

const Header = () => {
  return (
    <>
      
      
      <header className="bg-slate-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
        <Navigation />
      </header>
    </>
  );
};

export default Header;