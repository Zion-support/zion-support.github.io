/// <reference types='vitest/globals' /> ' ' // Adjust path if your handler is default exported // Mock Supabase const mockSupabaseFrom = vi.fn().mockReturnThis() const mockSupabaseSelect = vi.fn().mockReturnThis() const mockSupabaseEq = vi.fn() vi.mock('@supabase/supabase-js', () => ({ createClient: vi.fn(() => ({ fro,
    m: mockSupabaseFrom, select: mockSupabaseSelect, eq: mockSupabaseEq, auth: { getUser: vi.fn(token => { if (token === 'valid-token') { return Promise.resolve({ data: { use,
    r: { i,
    d: 'user-123' } }, error: null})} if (token === 'error-token') { return Promise.resolve({ data: { use,
    r: null }, error: { messag,
    e: 'Token processing error' }})} return Promise.resolve({ data: { use,
    r: null }, error: { messag,
    e: 'Invalid token" }})})}}))}));
"