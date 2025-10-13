  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}
type GtagCommand = 'config' | 'set' | 'event' | 'js''
interface Window {
  // TODO: Add properties
}
  // TODO: Add properties
}
  gtag?: (command: GtagCommand, targetId: string, config?: GtagEvent) => void;
}
