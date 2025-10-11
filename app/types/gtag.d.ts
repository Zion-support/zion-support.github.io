/**;
 * Google Analytics gtag types;
 */;
interface GtagEvent {event_category?: string;}
  event_label?: string;
  value?: number;
<<<<<<< HEAD
  [key: string]: unknown;
  }
}
=======
  [key: string]: unknown;,}}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
type GtagCommand = 'config' | 'set' | 'event' | 'js';
<<<<<<< HEAD
interface Window {gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;}}}
=======
interface Window {
    gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
  }
}
>>>>>>> origin/main
