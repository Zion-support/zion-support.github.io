<<<<<<< HEAD
'use client';

export default function TechnologyStack() {
	return null;
}
=======
"use client";
import React from 'react';

const TechnologyStack: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
          <div className="p-4 rounded-lg border">Next.js</div>
          <div className="p-4 rounded-lg border">React</div>
          <div className="p-4 rounded-lg border">TypeScript</div>
          <div className="p-4 rounded-lg border">Tailwind CSS</div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6fc7
