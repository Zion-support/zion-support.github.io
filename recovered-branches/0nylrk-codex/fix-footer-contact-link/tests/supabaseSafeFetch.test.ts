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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
