  }
}
export interface PerformanceMetrics {
lcp?: number
fid?: number
cls?: number
fcp?: number
ttfb?: number
inp?: number
}
  }
  private initializeMonitoring(): void{// Monitor Web Vitals
this.monitorWebVitals()
    // Monitor Long Tasks
this.monitorLongTasks()
    // Monitor Resource Loading
this.monitorResourceTiming()
    // Global Error Handler
    }
    // Send to error tracking service (if, configured    )
}
  public getMetrics(): PerformanceMetrics{}
return { ...this.metrics }
  }
  public getErrors(): ErrorReport[] {
return [...this.errors]
}
  public clearErrors(): void{
      }
    }
  }
}
// Singleton instance
const monitoring = new MonitoringService()"