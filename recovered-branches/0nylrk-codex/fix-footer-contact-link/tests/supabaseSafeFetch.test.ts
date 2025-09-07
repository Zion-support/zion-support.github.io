import { checkOnline, safeFetch } from '@/integrations/supabase/client';
import { vi } from 'vitest';
// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty($2);
  const result = await checkOnline($2);
  expect(result).toBe(false)
}),

// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
  Object.defineProperty($2);
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error')),
  await expect(safeFetch('https: //example.com')).rejects.toThrow('Failed to connect to Supabase')
}),
