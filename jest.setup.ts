import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

//Polyfill for react-router-dom in Jest environment
//@ts-expect-error - Global TextEncoder may not be defined in Jest environment
if (typeof (global as Record<string, unknown>).TextEncoder === 'undefined') {
  //@ts-expect-error - Global TextEncoder may not be defined in Jest environment
  (global as Record<string, unknown>).TextEncoder = TextEncoder;
}

//@ts-expect-error - Global TextDecoder may not be defined in Jest environment
if (typeof (global as Record<string, unknown>).TextDecoder === 'undefined') {
  // @ts-expect-error - Global TextDecoder may not be defined in Jest environment
  (global as Record<string, unknown>).TextDecoder =
    TextDecoder as unknown as typeof globalThis.TextDecoder;
}
