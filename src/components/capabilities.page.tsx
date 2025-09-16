import React from 'react';

const capabilities.page: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">capabilities.page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">Capabilities</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
        {CAPABILITIES.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">
            {c}
        ))}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default capabilities.page;