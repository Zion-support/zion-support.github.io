<<<<<<< HEAD
/**;
 * Google Analytics gtag types;
 */;
interface GtagEvent {event_category?: string;}
  event_label?: string;
  value?: number;
  [key: string]: unknown;,}}
type GtagCommand = 'config' | 'set' | 'event' | 'js';
<<<<<<< HEAD
interface Window {gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;}}}
=======
=======
/**
 * Google Analytics gtag types
 */
interface GtagEvent {
<<<<<<< HEAD
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
=======
    event_category?: string
  event_label?: string
  value?: number
  [key: string]: unknown
  }
>>>>>>> origin/main
}
type GtagCommand = 'config' | 'set' | 'event' | 'js'
>>>>>>> origin/main
interface Window {
<<<<<<< HEAD
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
}
=======
    gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void
  }
}
>>>>>>> origin/main
>>>>>>> origin/main
