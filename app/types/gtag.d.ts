/**
 * Google Analytics gtag types;
 */
interface GtagEvent {/* TODO: Fix JSX expression */}
}

type GtagCommand = 'config' | 'set' | 'event' | 'js';
<<<<<<< HEAD

interface Window {
  gtag?: (
    command: GtagCommand;
    targetId: string | Date;
    config?: GtagEvent;
  ) => void;
  dataLayer?: unknown[];,
=======
interface Window {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
}