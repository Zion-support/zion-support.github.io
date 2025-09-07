import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createMocks } from 'node-mocks-http';
import { send } from '@sendgrid/mail';
import authController from '../../server/controllers/authController';

vi.mock('@sendgrid/mail', () => ({
  send: vi.fn()
}));

describe('authController.forgotPassword', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should send password reset email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'test@example.com' }
    });

    await authController.forgotPassword(req, res);

    expect(send).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200);
  });
});