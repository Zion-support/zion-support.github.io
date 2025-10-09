/**
 * Google Analytics gtag types
 */

interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_map?: Record<string, any>;
}

type GtagCommand = 'config' | 'set' | 'event' | 'js';

interface Window {
  gtag: (command: GtagCommand, targetId: string, config?: Record<string, any>) => void;
}

declare global {
  interface Window {
    gtag: (command: GtagCommand, targetId: string, config?: Record<string, any>) => void;
  }
}

export {};