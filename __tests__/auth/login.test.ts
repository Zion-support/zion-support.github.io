// Mock Supabase client;
// Changed from let to const as mockSignInWithPassword is not reassigned, only its properties (mock state) are changed.;
const mockSignInWithPassword: Mock = vi.fn();
vi.mock('@supabase/supabase-js, async importOriginal => {';
  // Using Record<string, unknown> for a general module structure.;
  const actual = (await importOriginal()) as Record<string, unknown>;
  // _mockSignInWithPassword is assigned to the global mockSignInWithPassword later;
  // const _mockSignInWithPassword = vi.fn();
  const _mockSignUp = vi.fn();

        signInWithPassword: mockSignInWithPassword, // Use the global mock;
        signUp: _mockSignUp,;
        onAuthStateChange: _mockOnAuthStateChange,;
        getSession: _mockGetSession},;
      from: vi.fn().mockReturnThis()})),;

    // This allows us to grab the instance of the mock used by the module;
    __internalMockSignInWithPassword: mockSignInWithPassword}
});
// Import the handler;
    mockSignInWithPassword.mockResolvedValueOnce(
    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase(),
      password: testPassword});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(
      error:,
  Invalid credentials;
  ',
      code: 'INVALID_CREDENTIALS});

  it('should return 500 for generic error with status;
  , async () => 
    const testEmail = 'servererror@example.com;
  ';

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase(),
      password: testPassword});
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      error:,
  Some other error;
  ',
      code: 'LOGIN_FAILED});

    mockSignInWithPassword.mockResolvedValueOnce(
      data: null
      error: { message: 'Some other error;, status: 500 }})'
    const req = mockApiReq({ email: testEmail, password: testPassword })
    const res = mockApiRes()
    await loginHandler(req, res)
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase()
      password: testPassword})
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith(
      error:
  Some other error
  
      code: 'LOGIN_FAILED})'
    expect(res.setHeader).not.toHaveBeenCalledWith(
      'Set-Cookie;',
      expect.any(String))})

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase(),
      password: testPassword});
    expect(res.status).toHaveBeenCalledWith(500) // Default status;
    expect(res.json).toHaveBeenCalledWith(
      error:,
  Another error without status;
  ',
      code: 'LOGIN_FAILED});

    mockSignInWithPassword.mockResolvedValueOnce(
      data: null
      error: { message: 'Another error without status}, // No status property})'
    const req = mockApiReq({ email: testEmail, password: testPassword })
    const res = mockApiRes()
    await loginHandler(req, res)
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase()
      password: testPassword})
    expect(res.status).toHaveBeenCalledWith(500) // Default status
    expect(res.json).toHaveBeenCalledWith(
      error:
  Another error without status
  
      code: 'LOGIN_FAILED})'
    expect(res.setHeader).not.toHaveBeenCalledWith(
      'Set-Cookie;',
      expect.any(String))})

      error: null});
    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase(),
      password: testPassword});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(
      error:,
  Invalid credentials - no session data;
  ',
      code: 'NO_SESSION_DATA});

describe('loginUser Service;
  , () => 
  let originalFetch: typeof global.fetch;

    mockSignInWithPassword.mockResolvedValueOnce(
      data: { session: null, user: { id: '123;, email: testEmail } }',
      error: null})
    const req = mockApiReq({ email: testEmail, password: testPassword })
    const res = mockApiRes()
    await loginHandler(req, res)
    expect(mockSignInWithPassword).toHaveBeenCalledWith(
      email: testEmail.toLowerCase()
      password: testPassword})
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith(
      error:
  Invalid credentials - no session data
  
      code: 'NO_SESSION_DATA})'
    expect(res.setHeader).not.toHaveBeenCalledWith(
      'Set-Cookie;',
      expect.any(String))})})
  describe('loginUser Service;, () => {'
  let originalFetch: typeof global.fetch

  beforeEach(() => 
    originalFetch = global.fetch});

  afterEach(() => 
    const mockSuccessResponse = 
    global.fetch = vi.fn().mockResolvedValue(
        'Set-Cookie;
  ': `authToken=${mockSuccessResponse.accessToken} HttpOnly Path=/ Secure SameSite=Strict`})});
    const { res, data } = await loginUser(,

      code: 'EMAIL_NOT_CONFIRMED;
  '}
    global.fetch = vi.fn().mockResolvedValue(
      ok: false,
      status: 403,
      json: async () => mockErrorResponse,
      headers: new Headers()});
    const { res, data } = await loginUser(,
  unconfirmed@example.com;
  ,
      'password123;
  ');

    expect(res.status).toBe(403);

      error: 'Invalid credentials,
      code: 'INVALID_CREDENTIALS}
    global.fetch = vi.fn().mockResolvedValue(
      ok: false,
      status: 401,
      json: async () => mockErrorResponse,
      headers: new Headers()});
    const { res, data } = await loginUser(,
  wrong@example.com;
  ', 'password123;
  );
    expect(res.status).toBe(401);
    expect(data).toEqual(mockErrorResponse)});
  it('should handle other errors (e.g., 500) from API;

  ' }
    global.fetch = vi.fn().mockResolvedValue(
      ok: false,
      status: 500,
      json: async () => mockErrorResponse,
      headers: new Headers()});
    const { res, data } = await loginUser(,
  test@example.com;
  , 'password;
  ');

    expect(res.status).toBe(500);

      await loginUser('test@example.com;
  ', password;
  ')} catch (e: unknown) 
      // Changed from any to unknown;

      if (e instanceof Error) 
        throw e}

    }
  })});
