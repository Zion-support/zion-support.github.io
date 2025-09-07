<<<<<<< HEAD

import { checkOnline, safeFetch  } from '@/integrations/supabase/client';
import { vi  } from 'vitest';

// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false },

    writable: true
  });
  const result = checkOnline();
  expect(result).toBe(false);
});

=======
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false };    writable: true});

import { check_online, safe_fetch } from '@/integrations / supabase / client';
import { vi } from 'vitest';
// Test that check_online returns false when navigator is offline;
it ('check_online returns false when navigator is offline', async () => {
  Object.define_property (window, 'navigator', {
    value: { on_line: false })
    writable: true});
pr-12325
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safe_fetch throws custom error when fetch fails;
it ('safe_fetch throws when fetch rejects', async () => {
    value: { on_line: true }
  vi.spy_on (global, 'fetch').mockRejectedValue (new Error ('Network error'));
  await expect (safe_fetch ('https: //example.com')).rejects.to_throw ('Failed to connect to Supabase');
;
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false };


import { check_online, safe_fetch } from '@/integrations / supabase / client';''
import { vi } from 'vitest';'
// Test that check_online returns false when navigator is offline;'
it ('check_online returns false when navigator is offline', async () => {''
  Object.define_property (window, 'navigator', {'
    value: { on_line: false })
    writable: true});
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safeFetch throws custom error when fetch fails

import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
// Test that checkOnline returns false when navigator is offline;
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false };)
// Test that safeFetch throws custom error when fetch fails;
pr-12325
it('safeFetch throws when fetch rejects', async () => {
    value: { onLine: true };
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
  await expect(safeFetch('https: //example.com')).rejects.toThrow('Failed to connect to Supabase')
;
;
pr-12325
// Test that safe_fetch throws custom error when fetch fails;'
it ('safe_fetch throws when fetch rejects', async () => {'
    value: { on_line: true }'
  vi.spy_on (global, 'fetch').mockRejectedValue (new Error ('Network error'));''
  await expect (safe_fetch ('https: //example.com')).rejects.to_throw ('Failed to connect to Supabase');'
;
'
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;''
import { vi } from 'vitest',;'
// Test that checkOnline returns false when navigator is offline;'
it('checkOnline returns false when navigator is offline', async () => {''
  Object.defineProperty(window, 'navigator', {'
    value: { onLine: false };)
    writable: true});
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safeFetch throws custom error when fetch fails;'
it('safeFetch throws when fetch rejects', async () => {'
    value: { onLine: true };'
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));''
  await expect(safeFetch('https: //example.com')).rejects.toThrow('Failed to connect to Supabase')'
;
;
'

>>>>>>> origin/main
