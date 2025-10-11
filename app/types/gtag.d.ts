/**;
 * Google Analytics gtag types;
 */;
interface GtagEvent {event_category?: string;}
  event_label?: string;
  value?: number;
  [key: string]: unknown;
  }
}
type GtagCommand = 'config' | 'set' | 'event' | 'js';
<<<<<<< HEAD
interface Window {gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;}}}
=======
interface Window {
    gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
  }
}
>>>>>>> origin/main
