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
<<<<<<< HEAD
  gtag?: (
    command: GtagCommand;
    targetId: string | Date;
    config?: GtagEvent;
  ) => void;
  dataLayer?: unknown[];,
interface Window {/* TODO: Fix JSX expression */}
=======
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
>>>>>>> origin/resolve-merge-conflicts
}