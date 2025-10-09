/**
 * Google Analytics gtag types
 */
<<<<<<< HEAD

=======
>>>>>>> main
interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
<<<<<<< HEAD
  custom_map?: Record<string, any>;
=======
<<<<<<< HEAD
=======
  [key: string]: unknown;
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
>>>>>>> main
}

type GtagCommand = 'config' | 'set' | 'event' | 'js';

interface Window {
<<<<<<< HEAD
  gtag: (command: GtagCommand, targetId: string, config?: Record<string, any>) => void;
}

declare global {
  interface Window {
    gtag: (command: GtagCommand, targetId: string, config?: Record<string, any>) => void;
  }
}

export {};
=======
<<<<<<< HEAD
  gtag: (command: GtagCommand, targetId: string, config?: any) => void;
=======
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
}
>>>>>>> main
