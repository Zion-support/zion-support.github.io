
      <div className="text-xs text-zinc - 300 mb-2">
        {getScoreLabel(score) } • Core Web Vitals
      </div>

      <div className="space - y-1 text-xs">
        {metrics.fcp && (<div className="flex justify -between">
            <span > FCP:</span>
            <span className={metrics.fcp <= 1800 ? 'text-green - 400' : 'text-yellow-400'}>
