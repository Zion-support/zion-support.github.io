
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
;
// Test that checkOnline returns false when navigator is offline;
it('checkOnline returns false when navigator is offline', async () => {;
  Object.defineProperty(window, 'navigator', {;
    value:{ onLine:false },;
    writable:true}),;
  const result = await checkOnline(),;
  expect(result).toBe(false),;
}),;
;
// Test that safeFetch throws custom error when fetch fails;
it('safeFetch throws when fetch rejects', async () => {;
  Object.defineProperty(window, 'navigator', {;
    value:{ onLine:true },;
    writable:true}),;
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error')),;
  await expect(safeFetch('https://example.com')).rejects.toThrow('Failed to connect to Supabase');
}),; 
import { checkOnline, safeFetch  } from '@/integrations/supabase/client';
import { vi  } from 'vitest';
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false },
    writable: true
  });
  const result = checkOnline();
  expect(result).toBe(false);
});
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
    writable: true}),
  const result = await checkOnline(),
  expect(result).toBe(false)
}),

// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: true },
    writable: true}),
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error')),
  await expect(safeFetch('https: //example.com')).rejects.toThrow('Failed to connect to Supabase')
}),
;
// Test that checkOnline returns false when navigator is offline;
it('checkOnline returns false when navigator is offline', async () => {;
  Object.defineProperty(window, 'navigator', {;
    value: { onLine: false },;
    writable: true}),;
  const result = await checkOnline(),;
  expect(result).toBe(false);
}),;
// Test that safeFetch throws custom error when fetch fails;
it('safeFetch throws when fetch rejects', async () => {;
  Object.defineProperty(window, 'navigator', {;
    value: { onLine: true },;
    writable: true}),;
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error')),;
  await expect(safeFetch('https: //example.com')).rejects.toThrow('Failed to connect to Supabase');
});
=======
=======import { check_online, safe_fetch } from '@/integrations / supabase / client';
import { vi } from 'vitest';
// Test that check_online returns false when navigator is offline;
it ('check_online returns false when navigator is offline', async () => {
  Object.define_property (window, 'navigator', {
    value: { on_line: false }
    writable: true});
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safe_fetch throws custom error when fetch fails;
it ('safe_fetch throws when fetch rejects', async () => {
    value: { on_line: true }
  vi.spy_on (global, 'fetch').mockRejectedValue (new Error ('Network error'));
  await expect (safe_fetch ('https: //example.com')).rejects.to_throw ('Failed to connect to Supabase');
;

=======

import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
