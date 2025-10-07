import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

//Polyfill for react-router-dom in Jest environment
if (typeof (global as Record<string, unknown>).TextEncoder === 'undefined') {
  (global as Record<string, unknown>).TextEncoder = TextEncoder;
}

if (typeof (global as Record<string, unknown>).TextDecoder === 'undefined') {
  (global as Record<string, unknown>).TextDecoder =
    TextDecoder as unknown as typeof globalThis.TextDecoder;
}
