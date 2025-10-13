
  }
  return null;
}

/**
 * FPS Monitor
 */
export class FPSMonitor {
  private frames: number = 0;
  private lastTime: number = performance.now();
  private fps: number = 0;
  private rafId: number = 0;

  start(callback?: (fps: number) => void): void {
    const loop = () => {
      const now = performance.now();
      this.frames++;

      if (now >= this.lastTime + 1000) {
        this.fps = Math.round((this.frames * 1000) / (now - this.lastTime));
        this.frames = 0;
        this.lastTime = now;

        if (callback) {
          callback(this.fps);
        }
      }

      this.rafId = requestAnimationFrame(loop);
    };

    this.rafId = requestAnimationFrame(loop);
  }

  stop(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  getFPS(): number {
    return this.fps;
  }
}

export default {
  debounce,
  throttle,
  memoize,
  lazyLoad,
  measureTime,
  batchAsync,
  rafLoop,
  runWhenIdle,
  cancelIdle,
  VirtualScroller,
  setupLazyImages,
  preloadResources,
  supportsCodeSplitting,
  prefetchBundle,
  getMemoryUsage,
  FPSMonitor,
};
