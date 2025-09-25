import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon;
}

export default function DeveloperPortal() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Developer Portal</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>Developer portal content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}