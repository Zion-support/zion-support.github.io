
import { ProductListingCard } from "@/components/ProductListingCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturedListingsSectionProps {
  showTitle?: boolean;
}

export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
      category: "AI Models",
