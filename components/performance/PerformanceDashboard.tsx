  loadTime: number
import React, { useState, useEffect } from './react'
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number;}
  timeToInteractive: number;}

    return \'text-red-600\'
                </span>
              </div>
            )}
      )}
    </div>
  )}

export default PerformanceDashboard
              new_metrics.firstContentfulPaint = entry.start_time
          } else // Check condition
            new_metrics.cumulativeLayoutShift =
              (new_metrics.cumulativeLayoutShift || 0) + (entry as any).value
      <button
        on_click={() =    /> setIsVisible (!is_visible)}"
        className=\"bg - blue - 600 text - white px - 4 py - 2 rounded - lg shadow - lg hover:bg - blue-700 transition-colors\">

        📊 Performance
                  className={`text - sm font - mono ${getScoreColor (metrics.load_time, { good: 2000, needs_improvement: 4000 })}`}
                >
                  {metrics.load_time.to_fixed (0)}ms
                </span>
              </div>)}

                  className={`text - sm font - mono ${getScoreColor (metrics.firstContentfulPaint, { good: 1800, needs_improvement: 3000 })}`}
                >
                  {metrics.firstContentfulPaint.to_fixed (0)}ms
                </span>
              </div>)}

                  className={`text - sm font - mono ${getScoreColor (metrics.largestContentfulPaint, { good: 2500, needs_improvement: 4000 })}`}
                >
                  {metrics.largestContentfulPaint.to_fixed (0)}ms
                </span>
              </div>)}

                  className={`text - sm font - mono ${getScoreColor (metrics.cumulativeLayoutShift, { good: 0.1, needs_improvement: 0.25 })}`}
                >
                  {metrics.cumulativeLayoutShift.to_fixed (3)}
                </span>
              </div>)}

              Core Web Vitals monitoring in real - time
            </div>
          </div>
    </div>
  )
