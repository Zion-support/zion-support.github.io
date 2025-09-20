import React from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function ZionHireAI() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Zion Hire AI</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>AI-powered hiring solutions will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}