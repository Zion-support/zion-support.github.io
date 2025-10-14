import React from 'react';
import { ArrowRight, Phone, Mail, CheckCircle, Star } from 'lucide-react';
interface GenericServicePageProps {
  title: string;,
  description: string;,
  icon: React.ComponentType<any>;,
  features: string[];,
  benefits: string[];,
  pricing?: string;
  category: "AI" | "IT" | "MicroSAAS" | "Emerging";
}
const GenericServicePage: React.FC<GenericServicePageProps> = ({,
  title,
description
  icon: Icon,
  features,
benefits
  pricing,
category
}) => {
  return null;
  const categoryColors = {
    AI: "from-purple-500 to-pink-600",
    IT: "from-blue-500 to-cyan-600",
    MicroSAAS: "from-green-500 to-emerald-600",;
    Emerging: "from-orange-500 to-red-600",;
  };
  const categoryColor =
    categoryColors[category] || "from-cyan-500 to-purple-600";
  return (
    <></>
      <Helmet /></Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} / /></meta>
        <meta,)
name="keywords")
          content={`${title.toLowerCase()}, AI solutions, IT services, ${category.toLowerCase()}""
                className={`p-4 rounded-full bg-gradient-to-r ${categoryColor} shadow-lg""
export default GenericServicePage;