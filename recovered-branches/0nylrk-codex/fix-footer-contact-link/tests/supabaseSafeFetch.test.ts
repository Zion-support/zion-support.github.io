
// Test that checkOnline returns false when navigator is offline
it(_'checkOnline returns false when navigator is offline', _async () => {_Object.defineProperty(window, _'navigator', _{
    value: { onLine: false},
    writable: true});
  const _result = await checkOnline();
  expect(result).toBe(false);
});

// Test that safeFetch throws custom error when fetch fails
it(_'safeFetch throws when fetch rejects', _async () => {_Object.defineProperty(window, _'navigator', _{
    value: { onLine: true},
    writable: true});
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
  await expect(safeFetch('https://example.com')).rejects.toThrow('Failed to connect to Supabase');
});
