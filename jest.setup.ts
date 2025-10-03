import { TextEncoder, TextDecoder } from 'util';

// Polyfill for react-router-dom in Jest environment
// @ts-ignore
if (typeof (global as any).TextEncoder === 'undefined') {/* content */}
  // @ts-ignore
  (global as any).TextEncoder = TextEncoder;
}
// @ts-ignore
if (typeof (global as any).TextDecoder === 'undefined') {/* content */}
  // @ts-ignore
  (global as any).TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}

