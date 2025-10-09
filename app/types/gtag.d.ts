/**
 * Google Analytics gtag types
 */
interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
<<<<<<< HEAD
=======
  [key: string]: unknown;
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
}

type GtagCommand = 'config' | 'set' | 'event' | 'js';

interface Window {
<<<<<<< HEAD
  gtag: (command: GtagCommand, targetId: string, config?: any) => void;
=======
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
}