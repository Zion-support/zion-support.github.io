import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react'
import { cn } from "@/lib/utils";
interface ProfileHeroProps {
  name: string;
  title: string;
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;

  return (
    <div className;
