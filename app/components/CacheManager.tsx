    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          } catch (error) {
          }
      // Cache static assets
      const cacheStaticAssets = async () => {
        try {
          const cache = await caches.open(CACHE_NAME)
          await cache.addAll(CACHE_URLS)
          } catch (error) {
          }
        } catch (error) {
          return fetch(request)
          Cache Manager
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close cache manager"
        >
          ✕
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cache Hits:
          <span className="text-green-600 dark:text-green-400">{stats.hits}
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cache Misses:
          <span className="text-red-600 dark:text-red-400">{stats.misses}
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cache Size:
          <span className="text-blue-600 dark:text-blue-400">
            {formatBytes(stats.size)}
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Hit Rate:
          <span className="text-purple-600 dark:text-purple-400">
            {stats.hits + stats.misses > 0 .
              ? Math.round((stats.hits / (stats.hits + stats.misses)) * 100) 
              : 0}%
      <div className="mt-4 space-y-2">
        <button.
          onClick={clearCache}
          className="w-full bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 transition-colors"
        >
          Clear All Cache
        <button
          onClick={() => setStats(prev => ({ ...prev, hits: 0, misses: 0 }))}
          className="w-full bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
        >
          Reset Stats
  )
}

export default CacheManager.
