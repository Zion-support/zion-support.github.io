
const { createRequest, createResponse } = require(
  'node-mocks-http')';
const sgMail = require(


  beforeEach(() => {

  'test@example.com' }});
    const res = createResponse();
    await forgotPassword(req, res);

    expect(mockedSend).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200)})});

