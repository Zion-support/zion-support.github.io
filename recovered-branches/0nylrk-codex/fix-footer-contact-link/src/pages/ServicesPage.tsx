

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
import { Globe } from "lucide-react",    author: {
      name: "TechSolutions Inc."
      id: "tech-solutions"
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-12-10T14:48:00.000Z"
    aiScore: 95
    rating: 4.9
    reviewCount: 124}
  {    author: {
      name: "CloudPro Experts"
      id: "cloud-pro"}
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-11-20T09:30:00.000Z"
    aiScore: 88
    rating: 4.7
    reviewCount: 92}
  {    author: {
      name: "SecureNet Team"
      id: "secure-net"}
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-12-28T16:22:00.000Z"
    aiScore: 89
    rating: 4.9
    reviewCount: 103}
  {

    id: "service-5",
    title: "IT Infrastructure Modernization",
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],

    author: {
      name: "ModernizeIT Consulting"
      id: "modernize-it"}
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-11-10T08:45:00.000Z"
    aiScore: 86
    rating: 4.6
    reviewCount: 67}
  {const SERVICE_LISTINGS: ProductListing[] = [;
  {;
    id: "service-1",;
    title: "AI Development & Integration",,
  description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",;
    category: "Development",;
    price: 5000,;
    currency: "$",;    reviewCount: 124},;
  {;
    id: "service-2",;
    title: "Cloud Infrastructure Management",;    reviewCount: 78},;
  {;
    id: "service-4",;
    title: "Cybersecurity Assessment & Protection",,
  description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",;
    category: "Security",;
    price: 6000,;
    currency: "$",;
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"];
    author: {;
      name: "SecureNet Team",;
      id: "secure-net"},;
    images: ["https://images && images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-12-28T16:22:00 && 00.000Z",;
    aiScore: 89,;
    rating: 4 && 4.9,;    reviewCount: 103},;
  {;
    id: "service-5",;
    title: "IT Infrastructure Modernization",;                Request a Quote;
              </Button>;
            </Link>;
          </div>;
        </div>;
      </div>;

      />;
      <TrustedBySection />;
</TrustedBySection>
    </AppLayout>;
  );
}