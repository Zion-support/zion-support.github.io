import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';

interface QuantumNeuralFusionShowcaseProps {
  className?: string;
}

export default function QuantumNeuralFusionShowcase({
  className = ""
}: QuantumNeuralFusionShowcaseProps) {
  const features = [
    {
      title: "Quantum Processing",
      description: "Leverage quantum computing for complex problem solving",
      badge: "Revolutionary"
    },
    {
      title: "Neural Networks",
      description: "Advanced deep learning with quantum-enhanced capabilities",
      badge: "Advanced"
    },
    {
      title: "Fusion Technology",
      description: "Seamless integration of quantum and neural processing",
      badge: "Breakthrough"
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <Badge variant="secondary">{feature.badge}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}