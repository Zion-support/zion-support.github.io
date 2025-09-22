import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

interface QuantumNeuralFusionRevolutionBannerProps {
  className?: string;
}

export default function QuantumNeuralFusionRevolutionBanner({
  className = ""
}: QuantumNeuralFusionRevolutionBannerProps) {
  return (
    <Card className={`bg-gradient-to-r from-cyan-900 via-teal-900 to-emerald-900 text-white border-0 ${className}`}>
      <CardContent className="p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quantum Neural Fusion Revolution</h2>
          <p className="text-xl text-cyan-100 mb-6">
            The next generation of AI that combines quantum computing with neural networks for unprecedented capabilities
          </p>
          <Button 
            href="/services" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-cyan-900"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}