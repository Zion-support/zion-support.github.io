//**
 * Google Analytics gtag types;
 */;
interface GtagEvent {event_category?: string;}
  event_label?: string;
  value?: number;
  [key: string]: unknown;,}}
type GtagCommand = 'config' | 'set' | 'event' | 'js';
interface Window {gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;}}}
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
}
