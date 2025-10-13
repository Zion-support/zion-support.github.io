<<<<<<< HEAD
/**;
 * Google Analytics gtag types;*/
 */;
interface GtagEvent {event_category?: string;};
  event_label?: string;
  value?: number;
  [key: string]: unknown;,}};
type GtagCommand = 'config' | 'set' | 'event' | 'js';'
interface Window {gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;}}};
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
};
=======
'use client';
import React from 'react';

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Types</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
