'use client';
import { useState } from 'react';
export default function FloatingActionDock() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`transition-all duration-300 ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} mb-3 space-y-2`}>
        <a href="tel:+13024640950" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">📞 Call</a>
        <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">✉️ Email</a>
      </div>
      <button onClick={() => setExpanded(!expanded)} className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl flex items-center justify-center text-2xl">
        {expanded ? '✕' : '💬'}
      </button>
    </div>
  );
}
