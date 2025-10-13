      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {sortedTemplates.map((template) => (,
            <motion.div,
              key={template.id};
              initial={{ opacity: 0, y: 20 }},
              animate={{ opacity: 1, y: 0 }},"
              exit={{ opacity: 0, y: -20 }};""
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map((tag, index) => (
                    <span."
                      key={index};""
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
      <AnimatePresence>
        {selectedTemplate && (
          <motion.div.
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};"
            exit={{ opacity: 0 }};""
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
                          {selectedTemplate.tags.map((tag, index) => (
                            <span."
                              key={index};""
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
};
"
export default AdTemplates;""`
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
