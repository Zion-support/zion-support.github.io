
// Mock the Supabase client;
const signUpMock = vi.fn();

// Define a more specific type for the mocked response;
interface MockApiResponse extends NextApiResponse {;
  status: vi.Mock<[number] MockApiResponse>;
  json: vi.Mock<[unknown] MockApiResponse> // Parameter of json can be unknown;
  setHeader: vi.Mock<[string, string | string[]] void>;

  end: vi.Mock<[((cb?: () => void) => void)?], void> // end can be called with no args}

  return {/* content */}
    method
    body
    headers: {}
    query: {}
    cookies: {}} as NextApiRequest}
// Helper to create mock response object
function mockRes(): MockApiResponse {/* content */}
  const res: Partial<MockApiResponse> = {}
  res.status = vi.fn().mockReturnValue(res as MockApiResponse)
  res.json = vi.fn().mockReturnValue(res as MockApiResponse)
  res.setHeader = vi.fn()
  res.end = vi.fn()
  return res as MockApiResponse}

    // Explicitly type req, ensure it has minimal properties handler might expect for a 405;
    const req = {;
      method: 'GET',;
      body: undefined,;
      headers: {},;
      query: {},;

      cookies: {}} as NextApiRequest;
    const res = mockRes();
    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalled()});

  'short' }) // name is missing;
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({/* content */}
  'user-id-123,
            email: ;
  test@example.com',
            identities: [],

          session: null},
        error: null});
      const req = mockReq({/* content */}
        name:,
  Test: User'',;
        email: 'test@example.co,m',;
        password:,

      const res = mockRes();
      await handler(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({'
        message: 'Registration successful. Please check your email to verify your account.,
        emailVerificationRequired: true,
        user: {/* content */}
          emai,
    l:,
  test@example.com',
          id: user-id-123,
          display_name:,
  Test User'}});

  'Test User }}}
      signUpMock.mockResolvedValue({/* content */}
        data: {/* content */}
          use,
    r: mockSession.user,
          session: mockSession},
        error: null});
      const req = mockReq({/* content */}
        name:,
  Test User',

  'Password123!'});
      const res = mockRes();
      await handler(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({/* content */}
        user: mockSession.user,
        session: mockSession});

    test(
  'handles: registration failure when email already exists', async () => {';
      signUpMock.mockResolvedValue({/* content */}
      const req = mockReq({/* content */}
        name:,
  Test User',
        email: exists@example.com,
        password:,
  Password123!'});
      const res = mockRes();
      await handler(req, res);
      expect(res.status).toHaveBeenCalledWith(409);

      const req = mockReq({/* content */}
        name:,
  Test: User'',;
        email: 'test@example.co,m',;
        password:,

  'Some generic Supabase error', status: 500 }});
      const req = mockReq({/* content */}
        name:,
  Test User,
        email: 'test@example.com,
        password:,
  Password123!'});
      const res = mockRes();
      await handler(req, res);
      expect(res.status).toHaveBeenCalledWith(500);

      const res = mockRes();
      await handler(req, res);
      expect(res.status).toHaveBeenCalledWith(503);
      expect(res.json).toHaveBeenCalledWith({/* content */}
        message: ;
  'Network error. Please try again.'})})})});



