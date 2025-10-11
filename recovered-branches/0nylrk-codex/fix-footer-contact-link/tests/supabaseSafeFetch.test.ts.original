import { checkOnline, safeFetch } from '@/integrations/supabase/client';
import { vi } from 'vitest';

// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false },
<<<<<<< HEAD
    writable: true});
=======
    writable: true,
  });
>>>>>>> origin/auto/autonomy-17186719616
  const result = await checkOnline();
  expect(result).toBe(false);
});

// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: true },
<<<<<<< HEAD
    writable: true});
=======
    writable: true,
  });
>>>>>>> origin/auto/autonomy-17186719616
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
  await expect(safeFetch('https://example.com')).rejects.toThrow('Failed to connect to Supabase');
});
