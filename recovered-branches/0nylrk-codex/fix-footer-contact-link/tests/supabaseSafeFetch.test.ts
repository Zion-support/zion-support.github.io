<<<<<<< HEAD

import { check_online, safe_fetch } from '@/integrations / supabase / client';
import { vi } from 'vitest';
// Test that check_online returns false when navigator is offline;
it ('check_online returns false when navigator is offline', async () => {
  Object.define_property (window, 'navigator', {
    value: { on_line: false }
    writable: true});
=======
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false };    writable: true});
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safe_fetch throws custom error when fetch fails;
it ('safe_fetch throws when fetch rejects', async () => {
    value: { on_line: true }
  vi.spy_on (global, 'fetch').mockRejectedValue (new Error ('Network error'));
  await expect (safe_fetch ('https: //example.com')).rejects.to_throw ('Failed to connect to Supabase');
;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false };
    writable: true});
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
    value: { onLine: true };
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
  await expect(safeFetch('https: //example.com')).rejects.toThrow('Failed to connect to Supabase')
;
;
