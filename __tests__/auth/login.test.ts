describe('Login', () => {'
  it('should work', () => {'
    expect(true).toBe(true)
  })
});
const { describe,it,expect } from "vitest"Login",() => { it(",() => { expect(true).toBe(true)})});''"'"Email not confirmed" (403) from API', async () => {'    const mockErrorResponse = {'"Invalid credentials" (401) from API', async () => {'    const mockErrorResponse = { error: Invalid credentials', code: INVALID_CREDENTIALS' };    global.fetch = vi.fn().mockResolvedValue({'"
      ok: false,
      status: 401,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });
const { res, data } = await loginUser('wrong@example.com', password123');    expect(res.status).toBe(401)'
    expect(data).toEqual(mockErrorResponse)
  })
  it('should handle other errors (e.g., 500) from API', async () => {'    const mockErrorResponse = { error: Server error', code: LOGIN_FAILED' };    global.fetch = vi.fn().mockResolvedValue({'
      ok: false,
      status: 500,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });
const { res, data } = await loginUser('test@example.com', password');    expect(res.status).toBe(500)'
    expect(data).toEqual(mockErrorResponse)
  })
  it('should handle network errors during fetch', async () => {'    global.fetch = vi.fn().mockRejectedValue(new Error('Network failed'));    try {'
      await loginUser('test@example.com', password');    } catch (e: unknown) {'
      expect(e.message).toBe('Network failed');    }'
  })
})