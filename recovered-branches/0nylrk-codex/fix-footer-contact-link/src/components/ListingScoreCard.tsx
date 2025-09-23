
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  className?: string;
}

export function ListingScoreCard({ 
