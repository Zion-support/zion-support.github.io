// LogRocket shim for Vite compatibility
export const LogRocket = {
  init: () => {},
  identify: () => {},
  track: () => {},
  captureException: () => {},
  captureMessage: () => {},
  getSessionURL: () => '',
  sessionURL: '',
};

export default LogRocket;