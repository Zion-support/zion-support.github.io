/**
 * Google Analytics gtag types;
 */
interface GtagEvent {/* TODO: Fix JSX expression */}
}

type GtagCommand = 'config' | 'set' | 'event' | 'js';

interface Window {gtag?: (
    command: GtagCommand;,
    targetId: string | Date;
    config?: GtagEvent;
  ) => void;
  dataLayer?: unknown[];,
};
