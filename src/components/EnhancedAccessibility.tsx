import React from 'react';

interface EnhancedAccessibilityProps {
  position: string;
}

export function EnhancedAccessibility(props: EnhancedAccessibilityProps) {
  return (
    <div className={`fixed ${props.position} z-50`}>
      <button className="w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
        <span className="text-xl"></span>
      </button>
    </div>
  );
}