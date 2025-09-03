const { describe, it, expect, vi, beforeEach } = require(
<<<<<<< HEAD
  'vitest');
const { createRequest, createResponse } = require('
  'node-mocks-http');
const sgMail = require('
  '@sendgrid/mail');
const { forgotPassword } = require('
  '../../server/controllers/authController');
vi.mock('
=======
<<<<<<< HEAD
  'vitest);
=======
  'vitest');'
>>>>>>> main
const { createRequest, createResponse } = require(
  'node-mocks-http');'
const sgMail = require(
<<<<<<< HEAD
  @sendgrid/mail');
const { forgotPassword } = require(
  '../../server/controllers/authController);
vi.mock(
>>>>>>> main
  '@sendgrid/mail', () => ({
  default: { setApiKe,
    y: vi.fn(), send: vi.fn() }}));
const mockedSend = sgMail.send;
describe(,
  authController.forgotPassword, () => {
=======
  '@sendgrid/mail');'
const { forgotPassword } = require(
  '../../server/controllers/authController');'
vi.mock(
  '@sendgrid/mail', () => ({'
  default: { setApiKey: vi.fn(), send: vi.fn() }}))
const mockedSend = sgMail.send
  describe(
  authController.forgotPassword', () => {'
>>>>>>> main
  beforeEach(() => {
<<<<<<< HEAD
    mockedSend.mockClear()})
  it('
  'sends an email via SendGrid', async () => {
    const req = createRequest({'
      method: 'POST,
      body: { emai,
    l:;
=======
    mockedSend.mockClear()});
  it(
  'sends an email via SendGrid', async () => {'
    const req = createRequest({
<<<<<<< HEAD
      method: POST,
      body: { email: ;
>>>>>>> main
  'test@example.com' }});
    const res = createResponse();
    await forgotPassword(req, res);
    expect(mockedSend).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200)});
});
=======
      method: 'POST,'
      body: { email:
  'test@example.com' }})'
    const res = createResponse()
    await forgotPassword(req, res)
    expect(mockedSend).toHaveBeenCalled()
    expect(res._getStatusCode()).toBe(200)})})
>>>>>>> main
