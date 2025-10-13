// Chrome extension types
declare global {
  interface Window {
    chrome?: {
      runtime?: {
        onMessage: {
          addListener: (
            callback: (
              message: unknown,
              sender: unknown,
              sendResponse: (response?: unknown) => void
            ) => boolean | void
          ) => void;
        };
      };
    };
  }
}

export {};