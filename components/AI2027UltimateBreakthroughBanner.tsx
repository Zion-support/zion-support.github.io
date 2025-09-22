import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

interface AI2027UltimateBreakthroughBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function AI2027UltimateBreakthroughBanner({ 
  title = "AI 2027 Ultimate Breakthrough",
  description = "Discover the revolutionary AI technologies that will transform 2027",
  ctaText = "Explore Now",
  ctaLink = "/services/ai-solutions"
}: AI2027UltimateBreakthroughBannerProps) {
  return (
    <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
      <CardContent className="p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <Button asChild size="lg">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}