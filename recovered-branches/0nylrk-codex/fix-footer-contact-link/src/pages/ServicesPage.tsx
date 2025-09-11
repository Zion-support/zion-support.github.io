
<<<<<<< HEAD
<<<<<<< HEAD
import {DynamicListingPage} from "@/components/DynamicListingPage";
import {ProductListing} from "@/types/listings";
import {AppLayout} from "@/layout/AppLayout";
import {TrustedBySection} from "@/components/TrustedBySection";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {Globe} from "lucide-react";
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
import { AppLayout } from "@/layout/AppLayout",
import { TrustedBySection } from "@/components/TrustedBySection",
import { Button } from "@/components/ui/button",


import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
  {

    id: "service-1"
    title: "AI Development & Integration"
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems."
    category: "Development"
    price: 5000
    currency: "$"
    tags: ["AI Integration", "Machine Learning", "Enterprise"];
import { Link } from "react-router-dom",
import { Globe } from "lucide-react",
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
  {
    id: "service-1",
    title: "AI Development & Integration",
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    author: {
      name: "TechSolutions Inc."
      id: "tech-solutions"
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-12-10T14:48:00.000Z"
    aiScore: 95
    rating: 4.9
    reviewCount: 124}
  {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-2"
    title: "Cloud Infrastructure Management"
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.";
    category: "Management"
    price: 3000
    currency: "$"
    tags: ["Cloud", "DevOps", "Security"];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-2",
    title: "Cloud Infrastructure Management",
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"],
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    author: {
      name: "CloudPro Experts"
      id: "cloud-pro"}
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-11-20T09:30:00.000Z"
    aiScore: 88
    rating: 4.7
    reviewCount: 92}
  {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-3"
    title: "Big Data Analysis & Insights"
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services."
    category: "Analytics"
    price: 4500
    currency: "$"
    tags: ["Big Data", "Analytics", "Business Intelligence"];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-3",
    title: "Big Data Analysis & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"],
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    author: {
      name: "DataMind Solutions"
      id: "datamind"
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2024-01-05T11:15:00.000Z"
    aiScore: 92
    rating: 4.8
    reviewCount: 78}
  {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-4"
    title: "Cybersecurity Assessment & Protection"
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats."
    category: "Security"
    price: 6000
    currency: "$"
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-4",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    author: {
      name: "SecureNet Team"
      id: "secure-net"}
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-12-28T16:22:00.000Z"
    aiScore: 89
    rating: 4.9
    reviewCount: 103}
  {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-5"
    title: "IT Infrastructure Modernization"
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.";
    category: "Consulting"
    price: 8500
    currency: "$"
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-5",
    title: "IT Infrastructure Modernization",
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    author: {
      name: "ModernizeIT Consulting"
      id: "modernize-it"}
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-11-10T08:45:00.000Z"
    aiScore: 86
    rating: 4.6
    reviewCount: 67}
  {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-6"
    title: "AI Strategy & Implementation"
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage."
    category: "Strategy"
    price: 7500
    currency: "$"
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "service-6",
    title: "AI Strategy & Implementation",
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    author: {
      name: "AI Future Consulting"
      id: "ai-future"
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2024-02-02T10:30:00.000Z"
    aiScore: 94
    rating: 4.8
    reviewCount: 85}]
// Filter options specific to services
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' }
  { label: 'Management', value: 'management' }
  { label: 'Security', value: 'security' }
  { label: 'Analytics', value: 'analytics' }
  { label: 'Consulting', value: 'consulting' }
  { label: 'Strategy', value: 'strategy' }]
<<<<<<< HEAD
<<<<<<< HEAD

export default function ServicesPage() {
  return (
    <AppLayout>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={SERVICE_LISTINGS}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <TrustedBySection />
    </AppLayout>
  )
}
      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={SERVICE_LISTINGS}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <TrustedBySection />
    </AppLayout>
  )
};
;
import { DynamicListingPage } from "@/components/DynamicListingPage",;
import { ProductListing } from "@/types/listings",;
import { AppLayout } from "@/layout/AppLayout",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { Globe } from "lucide-react",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import {DynamicListingPage} from "@/components/DynamicListingPage";
import {ProductListing} from "@/types/listings";
import {AppLayout} from "@/layout/AppLayout";
import {TrustedBySection} from "@/components/TrustedBySection";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {Globe} from "lucide-react";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Sample service listings;
const SERVICE_LISTINGS: ProductListing[] = [;
  {;
    id: "service-1",;
    title: "AI Development & Integration",;
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",;
    category: "Development",;
    price: 5000,;
    currency: "$",;
<<<<<<< HEAD
<<<<<<< HEAD
    tags: ["AI Integration", "Machine Learning", "Enterprise"],;
    author: {;
      name: "TechSolutions Inc.",;
      id: "tech-solutions",;
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-12-10T14:48:00.000Z",;
    aiScore: 95,;
    rating: 4.9,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    tags: ["AI Integration", "Machine Learning", "Enterprise"];
    author: {;
      name: "TechSolutions Inc.",;
      id: "tech-solutions",;
      avatarUrl: "https://images && images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images && images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-12-10T14:48:00 && 00.000Z",;
    aiScore: 95,;
    rating: 4 && 4.9,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    reviewCount: 124},;
  {;
    id: "service-2",;
    title: "Cloud Infrastructure Management",;
<<<<<<< HEAD
<<<<<<< HEAD
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",;
    category: "Management",;
    price: 3000,;
    currency: "$",;
    tags: ["Cloud", "DevOps", "Security"],;
    author: {;
      name: "CloudPro Experts",;
      id: "cloud-pro"},;
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-11-20T09:30:00.000Z",;
    aiScore: 88,;
    rating: 4.7,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.";
    category: "Management",;
    price: 3000,;
    currency: "$",;
    tags: ["Cloud", "DevOps", "Security"];
    author: {;
      name: "CloudPro Experts",;
      id: "cloud-pro"},;
    images: ["https://images && images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-11-20T09:30:00 && 00.000Z",;
    aiScore: 88,;
    rating: 4 && 4.7,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    reviewCount: 92},;
  {;
    id: "service-3",;
    title: "Big Data Analysis & Insights",;
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",;
    category: "Analytics",;
    price: 4500,;
    currency: "$",;
<<<<<<< HEAD
<<<<<<< HEAD
    tags: ["Big Data", "Analytics", "Business Intelligence"],;
    author: {;
      name: "DataMind Solutions",;
      id: "datamind",;
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-01-05T11:15:00.000Z",;
    aiScore: 92,;
    rating: 4.8,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    tags: ["Big Data", "Analytics", "Business Intelligence"];
    author: {;
      name: "DataMind Solutions",;
      id: "datamind",;
      avatarUrl: "https://images && images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images && images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-01-05T11:15:00 && 00.000Z",;
    aiScore: 92,;
    rating: 4 && 4.8,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    reviewCount: 78},;
  {;
    id: "service-4",;
    title: "Cybersecurity Assessment & Protection",;
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",;
    category: "Security",;
    price: 6000,;
    currency: "$",;
<<<<<<< HEAD
<<<<<<< HEAD
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],;
    author: {;
      name: "SecureNet Team",;
      id: "secure-net"},;
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-12-28T16:22:00.000Z",;
    aiScore: 89,;
    rating: 4.9,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"];
    author: {;
      name: "SecureNet Team",;
      id: "secure-net"},;
    images: ["https://images && images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-12-28T16:22:00 && 00.000Z",;
    aiScore: 89,;
    rating: 4 && 4.9,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    reviewCount: 103},;
  {;
    id: "service-5",;
    title: "IT Infrastructure Modernization",;
<<<<<<< HEAD
<<<<<<< HEAD

import { DynamicListingPage } from "@/components/DynamicListingPage",;
import { ProductListing } from "@/types/listings",;
import { AppLayout } from "@/layout/AppLayout",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { Globe } from "lucide-react",;
;
// Sample service listings;
const SERVICE_LISTINGS:ProductListing[] = [;
  {;
    id:"service-1",;
    title:"AI Development & Integration",;
    description:"Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",;
    category:"Development",;
    price:5000,;
    currency:"$",;
    tags:["AI Integration", "Machine Learning", "Enterprise"],;
    author:{;
      name:"TechSolutions Inc.",;
      id:"tech-solutions",;
      avatarUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},;
    images:["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],;
    createdAt:"2023-12-10T14:48:00.000Z",;
    aiScore:95,;
    rating:4.9,;
    reviewCount:124},;
  {;
    id:"service-2",;
    title:"Cloud Infrastructure Management",;
    description:"24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",;
    category:"Management",;
    price:3000,;
    currency:"$",;
    tags:["Cloud", "DevOps", "Security"],;
    author:{;
      name:"CloudPro Experts",;
      id:"cloud-pro"},;
    images:["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],;
    createdAt:"2023-11-20T09:30:00.000Z",;
    aiScore:88,;
    rating:4.7,;
    reviewCount:92},;
  {;
    id:"service-3",;
    title:"Big Data Analysis & Insights",;
    description:"Transform your raw data into actionable business insights with our advanced analytics and visualization services.",;
    category:"Analytics",;
    price:4500,;
    currency:"$",;
    tags:["Big Data", "Analytics", "Business Intelligence"],;
    author:{;
      name:"DataMind Solutions",;
      id:"datamind",;
      avatarUrl:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"},;
    images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
    createdAt:"2024-01-05T11:15:00.000Z",;
    aiScore:92,;
    rating:4.8,;
    reviewCount:78},;
  {;
    id:"service-4",;
    title:"Cybersecurity Assessment & Protection",;
    description:"Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",;
    category:"Security",;
    price:6000,;
    currency:"$",;
    tags:["Cybersecurity", "Penetration Testing", "Compliance"],;
    author:{;
      name:"SecureNet Team",;
      id:"secure-net"},;
    images:["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],;
    createdAt:"2023-12-28T16:22:00.000Z",;
    aiScore:89,;
    rating:4.9,;
    reviewCount:103},;
  {;
    id:"service-5",;
    title:"IT Infrastructure Modernization",;
    description:"Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",;
    category:"Consulting",;
    price:8500,;
    currency:"$",;
    tags:["Digital Transformation", "Legacy Systems", "Infrastructure"],;
    author:{;
      name:"ModernizeIT Consulting",;
      id:"modernize-it"},;
    images:["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],;
    createdAt:"2023-11-10T08:45:00.000Z",;
    aiScore:86,;
    rating:4.6,;
    reviewCount:67},;
  {;
    id:"service-6",;
    title:"AI Strategy & Implementation",;
    description:"Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",;
    category:"Strategy",;
    price:7500,;
    currency:"$",;
    tags:["AI Strategy", "Digital Transformation", "Business Growth"],;
    author:{;
      name:"AI Future Consulting",;
      id:"ai-future",;
      avatarUrl:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"},;
    images:["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],;
    createdAt:"2024-02-02T10:30:00.000Z",;
    aiScore:94,;
    rating:4.8,;
    reviewCount:85}],;
;
// Filter options specific to services;
const SERVICE_FILTERS = [;
  { label:'Development', value:'development' },;
  { label:'Management', value:'management' },;
  { label:'Security', value:'security' },;
  { label:'Analytics', value:'analytics' },;
  { label:'Consulting', value:'consulting' },;
  { label:'Strategy', value:'strategy' }],;
;
export default function ServicesPage() {;
  return (;
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",;
    category: "Consulting",;
    price: 8500,;
    currency: "$",;
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],;
    author: {;
      name: "ModernizeIT Consulting",;
      id: "modernize-it"},;
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-11-10T08:45:00.000Z",;
    aiScore: 86,;
    rating: 4.6,;
    reviewCount: 67},;
  {;
    id: "service-6",;
    title: "AI Strategy & Implementation",;
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",;
    category: "Strategy",;
    price: 7500,;
    currency: "$",;
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],;
    author: {;
      name: "AI Future Consulting",;
      id: "ai-future",;
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-02-02T10:30:00.000Z",;
    aiScore: 94,;
    rating: 4.8,;
    reviewCount: 85}],;
// Filter options specific to services;
const SERVICE_FILTERS = [;
  { label: 'Development', value: 'development' },;
  { label: 'Management', value: 'management' },;
  { label: 'Security', value: 'security' },;
  { label: 'Analytics', value: 'analytics' },;
  { label: 'Consulting', value: 'consulting' },;
  { label: 'Strategy', value: 'strategy' }];
export default function ServicesPage() {;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import { DynamicListingPage } from '@/components / DynamicListingPage';
import { ProductListing } from '@/types / listings';
import { AppLayout } from '@/layout / AppLayout';
import { TrustedBySection } from '@/components / TrustedBySection';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
import { Globe } from './lucide-react';
// Sample service listings;
const SERVICE_LISTINGS: ProductListing[] = [;
  {
    id: "service - 1",
    title: "AI Development & Integration",
    description: "Full - stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"];
    author: {
      name: "TechSolutions Inc.",
      id: "tech - solutions",
      avatar_url: "https://images.unsplash.com / photo - 1568602471122 - 7832951cc4c5?auto = format & fit = crop & w=100 & h=100"},
    images: ["https://images.unsplash.com / photo - 1581092918056 - 0c4c3acd3789?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2023 - 12 - 10T14:48:00.000Z",
    ai_score: 95,
    rating: 4.9,
    review_count: 124},
  {
    id: "service - 2",
    title: "Cloud Infrastructure Management",
    description: "24 / 7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.";
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"];
    author: {
      name: "CloudPro Experts",
      id: "cloud - pro"},
    images: ["https://images.unsplash.com / photo - 1544197150 - b99a580bb7a8?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2023 - 11 - 20T09:30:00.000Z",
    ai_score: 88,
    rating: 4.7,
    review_count: 92},
  {
    id: "service - 3",
    title: "Big Data Analysis & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"];
    author: {
      name: "DataMind Solutions",
      id: "datamind",
      avatar_url: "https://images.unsplash.com / photo - 1573497019940 - 1c28c88b4f3e?auto = format & fit = crop & w=100 & h=100"},
    images: ["https://images.unsplash.com / photo - 1551288049 - bebda4e38f71?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2024 - 01 - 05T11:15:00.000Z",
    ai_score: 92,
    rating: 4.8,
    review_count: 78},
  {
    id: "service - 4",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"];
    author: {
      name: "SecureNet Team",
      id: "secure - net"},
    images: ["https://images.unsplash.com / photo - 1510511459019 - 5dda7724fd87?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2023 - 12 - 28T16:22:00.000Z",
    ai_score: 89,
    rating: 4.9,
    review_count: 103},
  {
    id: "service - 5",
    title: "IT Infrastructure Modernization",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.";
    category: "Consulting",;
    price: 8500,;
    currency: "$",;
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <AppLayout>;
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">;
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">;
          <h2 className="text-white text-lg font-medium">Featured Services</h2>;
          <div className="flex flex-wrap gap-2">;
            <Link to="/it-onsite-services">;
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                <Globe className="h-4 w-4 mr-2" />;
                Global IT Onsite Services;
              </Button>;
            </Link>;
            <Link to="/request-quote">;
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
    author: {
      name: "ModernizeIT Consulting",
      id: "modernize - it"},
    images: ["https://images.unsplash.com / photo - 1558494949 - ef010cbdcc31?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2023 - 11 - 10T08:45:00.000Z",
    ai_score: 86,
    rating: 4.6,
    review_count: 67},
  {
    id: "service - 6",
    title: "AI Strategy & Implementation",
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"];
    author: {
      name: "AI Future Consulting",
      id: "ai - future",
      avatar_url: "https://images.unsplash.com / photo - 1560250097 - 0b93528c311a?auto = format & fit = crop & w=100 & h=100"},
    images: ["https://images.unsplash.com / photo - 1519389950473 - 47ba0277781c?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2024 - 02 - 02T10:30:00.000Z",
    ai_score: 94,
    rating: 4.8,
    review_count: 85}],
// Filter options specific to services;
const SERVICE_FILTERS = [;
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' }],
export default /**
 * ServicesPage - Function description
 */
function ServicesPage() {
  return (
    <AppLayout>;
      <div className="bg - zion - blue - dark py - 4 px - 4 md:px - 8 mb - 6 border - b border - zion - blue - light">;
        <div className="container mx - auto flex flex - col md:flex - row items - center justify - between gap - 4">;
          <h2 className="text - white text - lg font - medium">Featured Services</h2>;
          <div className="flex flex - wrap gap - 2">;
            <Link to="/it - onsite - services">;
              <Button variant="outline" className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10">;
                <Globe className="h - 4 w - 4 mr - 2" />;
                Global IT Onsite Services;
              </Button>;
            </Link>;
            <Link to="/request - quote">;
              <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Request a Quote;
              </Button>;
            </Link>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <TrustedBySection />;
    </AppLayout>;
  );
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <DynamicListingPage;
        title="IT & AI Services";
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management.";
        category_slug="services";
        listings={SERVICE_LISTINGS}
        category_filters={SERVICE_FILTERS}
        initial_price={{ min: 3000, max: 10000 }}
      />;
      <TrustedBySection />;
    </AppLayout>);
<<<<<<< HEAD
      <DynamicListingPage ;
        title="IT & AI Services";
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management.";
        categorySlug="services";
        listings={SERVICE_LISTINGS}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min:3000, max:10000 }}
      />;
      <TrustedBySection />;
    </AppLayout>;
  ),; rating: 4.8;
reviewCount: 85 
}];
//Filter options specific to services export default function ServicesPage () {
  return (<AppLayout> <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light" > <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4" > <h2 className="text-white text-lg font-medium" >Featured Services</h2> <div className="flex flex-wrap gap-2" > <Link to="/it-onsite-services" > <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > <Globe className="h-4 w-4 mr-2" /> Global IT Onsite Services </Button> </Link> <Link to="/request-quote" > <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Request a Quote </Button> </Link> </div> </div> </div> <DynamicListingPage listings= {
  SERVICE LISTINGS 
}categoryFilters= {
  SERVICE FILTERS 
}initialPrice= {
  {
  min: 3000, max: 10000 
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"

<<<<<<< HEAD
<<<<<<< HEAD
}/> <TrustedBySection /> </AppLayout>) 
}
      <DynamicListingPage;
        title="IT & AI Services";
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management.";
        categorySlug="services";
        listings={SERVICE_LISTINGS}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />;
      <TrustedBySection />;
    </AppLayout>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
