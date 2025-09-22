import React from 'react';
import { Card, CardContent } from './ui/Card';

interface QuantumNeuralFusionRevolutionBannerProps {
  title?: string;
  description?: string;
}

export default function QuantumNeuralFusionRevolutionBanner({ 
  title = "Quantum Neural Fusion Revolution",
  description = "Experience the next evolution in quantum-enhanced AI"
}: QuantumNeuralFusionRevolutionBannerProps) {
  return (
    <Card className="mb-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-purple-200">
      <CardContent className="p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}