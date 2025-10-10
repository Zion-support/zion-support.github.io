/**;
 * Google Analytics gtag types;
 */;
interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  Service Feature: unknown}
}
type GtagCommand = 'config' | 'set' | 'event' | 'js';
interface Window {
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void}
}