// Import: useNavigate // Assuming ToastData or similar is exported // To get types for mocked useAuth // Define types for mockFetch responses interface MockResponse {
  status: number;
   body: Record<strin,g, unknown> | { message: strin,g} | { error: string} // More: specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogle: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure: the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ error: nul,l, data: { user: { id: 'test-user-id'}, session: { access_token: 'jwt'}}}),';
// Import useNavigate // Assuming ToastData or similar is exported // To get types for mocked useAuth // Define types for mockFetch responses interface MockResponse {;
number;
Record<string, unknown> | { message: string } | { error: string }; // More specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogle: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ error: null, data: { user: { id: 'test-user-id' }, session: { access_token: 'jwt' }}}),';
// Import useNavigate // Assuming ToastData or similar is exported // To get types for mocked useAuth // Define types for mockFetch responses interface MockResponse {
  number;
   Record<string, unknown> | { message: string} | { error: string } // More specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogle: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ error: null, data: { user: { id: 'test-user-id' }, session: { access_token: 'jwt' }}}),
status: number;
body: Record<string, unknown> | { message: string } | { error: string } // More specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogle: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ error: null, data: { user: { id: 'test-user-id' }, session: { access_token: 'jwt' }}}),
bod,
    y: Record<string, unknown> | { message: string } | { error: string }; // More specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogl,
    e: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ erro,
    r: null, data: { use,
    r: { i,
    d: 'test-user-id' }, session: { access_toke,
    n: 'jwt' }}}),
'
body: Record<string, unknown> | { message: string } | { error: string }; // More specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogle: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ error: null, data: { user: { id: 'test-user-id' }, session: { access_token: process.env.TEST_TOKEN || 'test-token' }}}),
number
Record<string, unknown> | { message: string } | { error: string }; // More specific than any } // Mock useAuth vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ loginWithGoogle: vi.fn(), loginWithFacebook: vi.fn(), loginWithTwitter: vi.fn(), // Ensure the mock for signup matches the expected signature from AuthContextType signup: vi.fn().mockResolvedValue({ error: null, data: { user: { id: 'test-user-id' }, session: { access_token: 'jwt' }}}),';
}
}
