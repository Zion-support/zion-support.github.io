'use client';
enabled?: boolean
threshold?: number
measureMemoryUsage?: boolean
}
}
    }
  }, []);
const
;if (!isMonitoringFPS) return;
const
;frameCountRef.current++);
const
;      if (currentTime - lastTimeRef.current >= 1000) {;
const
;  }