import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function ContentPromotionBanner({
  title = "Discover More AI Solutions",
  description = "Explore our comprehensive suite of AI-powered tools and services designed to transform your business.",
  ctaText = "Explore Services",
  ctaHref = "/services",
  className = ""
}: ContentPromotionBannerProps) {
  return (
    <Card className={`bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button href={ctaHref} variant="primary">
            {ctaText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}