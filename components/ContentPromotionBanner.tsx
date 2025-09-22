import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ContentPromotionBanner({ 
  title = "Discover More Content",
  description = "Explore our latest insights and solutions",
  ctaText = "Learn More",
  ctaLink = "/services"
}: ContentPromotionBannerProps) {
  return (
    <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button asChild>
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}