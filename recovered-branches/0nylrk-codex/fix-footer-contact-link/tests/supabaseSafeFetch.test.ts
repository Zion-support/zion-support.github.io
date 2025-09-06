<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/tests/supabaseSafeFetch.test.ts

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/tests/supabaseSafeFetch.test.ts
import { check_online, safe_fetch } from '@/integrations / supabase / client';
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/tests/supabaseSafeFetch.test.ts

=======

import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/tests/supabaseSafeFetch.test.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { checkOnline, safeFetch  } from '@/integrations/supabase/client';
import { vi  } from 'vitest';
=======
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false },
<<<<<<< HEAD
    writable: true
  });
  const result = checkOnline();
  expect(result).toBe(false);
});
=======
import { checkOnline, safeFetch } from '@/integrations/supabase/client',;
import { vi } from 'vitest',;
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
