import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface UtilsConfig {
  enabled: boolean;
}

export class Utils {
  private config: UtilsConfig;

  constructor(config: Partial<UtilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const utils = new Utils();