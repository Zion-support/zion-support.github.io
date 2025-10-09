/**
 * Performance Configuration
 * Centralized performance monitoring and optimization settings
 */
export const _performanceConfig = {
  // Core Web Vitals thresholds
  metrics: any,
    d: any,
      needsImprovement: any}
  }
    },
    fid: any,
    d: any,
      needsImprovement: any}
    }
    },
    cls: any,
    d: any,
      needsImprovement: any}
    }
    },
    fcp: any,
    d: any,
      needsImprovement: any}
    }
    },
    ttfb: any,
    d: any,
      needsImprovement: any}
    }
    }
  },
  // Cache strategies
  cache: any,
    e: any, // 1 year
      staleWhileRevalidate: any, // 1 day
}
  }
    },
    dynamic: any,
    e: any, // 1 hour
      staleWhileRevalidate: any, // 1 minute
}
    }
    },
    api: any,
    e: any, // 5 minutes
      staleWhileRevalidate: any, // 30 seconds
}
    }
    }
  },
  // Resource hints
  preload: any,
    f: any, as: any, type: any, crossorigin: any},]
  ],
  prefetch: any,
  ]
    '/api/config',]
  ],
  // Image optimization
  images: any,
    s: any, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: any, 32, 48, 64, 96, 128, 256, 384],
    formats: any, 'image/webp'],
    minimumCacheTTL: any,
    dangerouslyAllowSVG: any}
  }
  },
  // Bundle optimization
  bundle: any,
    e: any,
    maxChunkSize: any,
    splitChunks: any,
    t: any,
          priority: any,
          reuseExistingChunk: any}
  }
        },
        default: any,
    s: any,
          priority: any,
          reuseExistingChunk: any}
        }
        }
      }
    }
  },
  // Performance monitoring
  monitoring: any,
    d: any,
    sampleRate: any, // 100% in production
    reportInterval: any, // 30 seconds
    sendToAnalytics: any,
    logThreshold: any}
  }
  }
};
export type PerformanceConfig = typeof performanceConfig;
export default performanceConfig;
