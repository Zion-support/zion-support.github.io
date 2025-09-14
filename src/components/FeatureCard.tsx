import React from 'react';
import { Card, CardContent } from './Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <Card className={`text-center p-6 hover:shadow-lg transition-shadow ${className}`}>
      <CardContent>
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};