/**
 * Google Analytics gtag types
 */
interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

type GtagCommand = 'config' | 'set' | 'event' | 'js';

interface Window {
  gtag?: (
    command: GtagCommand,
    targetId: string | Date,
    config?: GtagEvent
  ) => void;
  dataLayer?: unknown[];
}