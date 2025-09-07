import React from 'react';
export default function SEOIndex() {

  const [slugs, setSlugs] = React.useState<string[]>([])
  React.useEffect(() => {
    // In a real app, list from API or build-time, here we rely on directory hint not available at runtime.
    setSlugs([])
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </div>
  )
}
}
