
export default function ComponentsPage() {
  return (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('list')};`
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover: bg-gray-100'`
                }`};"
              >""
                <BarChart3 className="w-4 h-4 inline mr-1" />
              <button
                onClick={() => setViewMode('calendar')};`
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'calendar' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'`
                }`};"
              >""
                <Calendar className="w-4 h-4 inline mr-1" />
                  {schedule.status === 'running' ? (
                    <button,"
                      onClick={() => handleStatusChange(schedule.id, 'paused')};""
                      className="p-2 text-yellow-600 hover: bg-yellow-100 rounded-lg transition-colors""",
                      title="Pause""
                    >""
                      <Pause className="w-5 h-5" />
                  ) : schedule.status === 'paused' ? (
                    <button,"
                      onClick={() => handleStatusChange(schedule.id, 'running')};""
                      className="p-2 text-green-600 hover: bg-green-100 rounded-lg transition-colors"","
                      title="Resume""
                    >""
                      <Play className="w-5 h-5" />
      <AnimatePresence>
        {(isCreating || isEditing) && (
          <motion.div.
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};"
            exit={{ opacity: 0 }};""
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
                        type="text"
                        value={formData.adId};"
                        onChange={(e) => setFormData(prev => ({ ...prev, adId: e.target.value   }))};""
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                        required.
                      />
                        type="date"
                        value={formData.endDate};"
                        onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value   }))};""
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        required,
                      />
                        type="time"
                        value={formData.endTime};"
                        onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value   }))};""
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        required,
                      />
                          type="button"
                          onClick={() => toggleDayOfWeek(index)};`
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.daysOfWeek.includes(index);
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700 hover: bg-gray-200'`
                          }`};
                        >
};
"
export default AdScheduler;""`
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
