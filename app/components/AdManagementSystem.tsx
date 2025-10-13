
export default function ComponentsPage() {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {sortedAds.map((ad) => (,
            <motion.div,
              key={ad.id};
              initial={{ opacity: 0, y: 20 }},
              animate={{ opacity: 1, y: 0 }},"
              exit={{ opacity: 0, y: -20 }};""
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                    <div className="flex gap-1">
                      <button."
                        onClick={() => setSelectedAd(ad)};""
                        className="p-1 text-gray-400 hover: text-blue-600 transition-colors""
                      >""
                        <Eye className="w-4 h-4" />
};
"
export default AdManagementSystem;""`
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
