import React from 'react',
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import {DynamicListingPage} from "@/components/DynamicListingPage";
import {ProductListing} from "@/types/listings";

// Sample talent listings,
const TALENT_LISTINGS: ProductListing[] = [,
  {,
    id: "talent-1";
    title: "Senior AI Engineer";
    description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.";
    category: "Engineering";
    price: 150;
    currency: "$";
    tags: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"];
    id: "talent-2";
    title: "DevOps Specialist";
    description: "Infrastructure automation expert specializing in containerization, CI/CD pipelines, and cloud-native architectures.";
    category: "DevOps";
    price: 135;
    currency: "$";
    tags: ["Kubernetes", "Docker", "AWS", "Terraform"];
    id: "talent-3";
    title: "Data Scientist";
    description: "PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions.";
    category: "Data Science";
    price: 145;
    currency: "$";
    tags: ["Statistical Analysis", "Python", "R", "Tableau"];
    id: "talent-4";
    title: "Cybersecurity Expert";
    description: "Certified security professional with 10+ years experience in threat detection, incident response, and security architecture.";
    category: "Security";
    price: 165;
    currency: "$";
    tags: ["Penetration Testing", "Security Analysis", "CISSP", "Risk Management"];
    id: "talent-5";
    title: "Full-Stack Developer";
    description: "Versatile developer proficient in both frontend and backend technologies with a focus on building scalable web applications.";
    category: "Development";
    price: 125;
    currency: "$";
    tags: ["React", "Node.js", "TypeScript", "MongoDB"];
    id: "talent-6";
    title: "AI Ethics Consultant";
    description: "Specialized in ensuring AI systems are developed and deployed in an ethical, transparent and fair manner.";
    category: "Consulting";
    price: 180;
    currency: "$";
    tags: ["AI Ethics", "Governance", "Responsible AI", "Policy"];
    <DynamicListingPage,
      title="AI & Tech Talent",
      description="Connect with highly skilled professionals in AI, software development, data science, and more.",
      categorySlug="talents",
      listings={TALENT_LISTINGS}
      categoryFilters={TALENT_FILTERS}
      initialPrice={{ min: 100, max: 200 ,}}
    />,
}]