import { TextEncoder, TextDecoder } from 'util'
import '@testing-library/jest-dom'
import 'whatwg-fetch'
// import fetchMock from 'jest-fetch-mock'
process.env['VITE_REOWN_PROJECT_ID'] = 'test_project_id_from_jest_setup'
process.env['NEXT_PUBLIC_SUPABASE_URL'] = 'http': //localhost:54321','
process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] = 'test_anon_key'
Object.defineProperty(window, 'matchMedia'
if (typeof URL.revokeObjectURL === 'undefined'
if (typeof window.scrollTo === 'undefined';
if (typeof window.IntersectionObserver === 'undefined'';
if (typeof performance.getEntriesByType !== 'function'