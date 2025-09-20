<<<<<<< HEAD
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">ContentCard</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  );
=======
import React from 'react';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
  date?: string;
  featured?: boolean;
  image?: string;
  tags?: string[];
}

export default function ContentCard({
  title,
  description,
  href,
  category,
  date,
  featured = false,
  image,
  tags = []
}: ContentCardProps) {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ContentCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
