import React from "react";
import Image from "next/image";
import { Card } from "./Card";
import { Badge } from "./Badge";
type EnhancedMarketplaceCardProps = {
  title: string;
  description: string;
  price?: string;
  image?: string;
};
export default function EnhancedMarketplaceCard({ title, description, price, image }: EnhancedMarketplaceCardProps) {