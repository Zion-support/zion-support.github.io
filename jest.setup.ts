import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

//Polyfill for react-router-dom in Jest environment
//@ts-ignore
if (typeof (global as any).TextEncoder === 'undefined') {
  //@ts-ignore
  (global as any).TextEncoder = TextEncoder;
}

//@ts-ignore
if (typeof (global as any).TextDecoder === 'undefined') {
  // @ts-ignore
  (global as any).TextDecoder =
    TextDecoder as unknown as typeof globalThis.TextDecoder;
}
