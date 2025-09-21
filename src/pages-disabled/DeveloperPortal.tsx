import React from 'react',
interface TabDefinition {
  id: string,
  label: string;
  icon: React.ComponentType<any>, }

export default function DeveloperPortal() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Developer Portal
        </h1>
        <p className="text-zion-cyan text-center">
          Developer resources coming soon...
        </p>
      </div>
    </div>
  );
}