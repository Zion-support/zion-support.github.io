





      'Invalid or expired password reset token.'

    );
  });
});



      body: {},

    expect(JSON.parse(res._getData())).toEqual({

      error: 'Token is required',


      body: { token: 'valid-token' },


      error: 'New password is required',

    });
  });

  it('returns 400 if token is invalid', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,

      body: { token: 'invalid', newPassword: 'newpass123' },

    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({





