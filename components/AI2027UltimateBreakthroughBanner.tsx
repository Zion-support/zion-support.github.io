import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

interface AI2027UltimateBreakthroughBannerProps {
  className?: string;
}

export default function AI2027UltimateBreakthroughBanner({
  className = ""
}: AI2027UltimateBreakthroughBannerProps) {
  return (
    <Card className={`bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white border-0 ${className}`}>
      <CardContent className="p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">AI 2027 Ultimate Breakthrough</h2>
          <p className="text-xl text-blue-100 mb-6">
            Experience the future of artificial intelligence with revolutionary quantum-neural fusion technology
          </p>
          <Button 
            href="/services" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900"
          >
            Explore AI 2027 Solutions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}