<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    writable: true});
  const result = await check_online ();
  expect (result).to_be (false);
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  const result = await check_online ();
  expect (result).to_be (false);
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Test that safe_fetch throws custom error when fetch fails;
it ('safe_fetch throws when fetch rejects', async () => {
    value: { on_line: true }
  vi.spy_on (global, 'fetch').mockRejectedValue (new Error ('Network error'));
  await expect (safe_fetch ('https: //example.com')).rejects.to_throw ('Failed to connect to Supabase');
;
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

;

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
