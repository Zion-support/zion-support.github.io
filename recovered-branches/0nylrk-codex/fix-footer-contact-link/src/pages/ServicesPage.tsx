
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
    id: "service-1";
    title: "AI Development & Integration";
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.";
    category: "Development";
    price: 5000;
    currency: "$";
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
    author: {
      name: "TechSolutions Inc.";
      id: "tech-solutions";
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto;
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
;