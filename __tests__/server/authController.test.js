import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

vi.mock('@sendgrid/mail', () => ({
  send: vi.fn(),
}));

describe('authController.forgotPassword', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should send password reset email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'test@example.com' },
    });

    await authController.forgotPassword(req, res);

    expect(send).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200);
  });
});
