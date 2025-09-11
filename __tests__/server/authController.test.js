const { describe, it, expect, vi, beforeEach } = require(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  'vitest')'
  'node-mocks-http')'
  '@sendgrid/mail')'
  '../../server/controllers/authController')'
  '@sendgrid/mail', () => ({'
  authController.forgotPassword', () => {'
  'node-mocks-http')'
  @sendgrid/mail'
  '
  '@sendgrid/mail'
  '"sends"
      "method"
      "body"
<<<<<<< HEAD
    "await"
=======
  'vitest')';
const { createRequest, createResponse } = require(
  'node-mocks-http')';
const sgMail = require(
  '@sendgrid/mail')';
const { forgotPassword } = require(
  '../../server/controllers/authController')';
vi.mock(
  '@sendgrid/mail', () => ({';
  "default": { setApiKey: vi.fn(), "send": vi.fn()}}));
const mockedSend = sgMail.send;
describe(
  authController.forgotPassword', () => {';
const { createRequest, createResponse } = require(
  'node-mocks-http')';
const sgMail = require(
  @sendgrid/mail');
const { forgotPassword } = require(
  '../../server/controllers/authController);
vi.mock(
  '@sendgrid/mail', () => ({
  "default": { setApiKe
    y: vi.fn(), "send": vi.fn() }}));
const mockedSend = sgMail.send;
describe(
  authController.forgotPassword, () => {
  beforeEach(() => {
    mockedSend.mockClear()})
  it(
  '"sends": an email via SendGrid', async () => {';
    const req = createRequest({
      "method": 'POS,T, ';
      "body": { email:';test@example.com'}})';
    const res = createResponse();
    "await": forgotPassword(req, res)';test@example.com' }});
    const res = createResponse();
    await forgotPassword(req, res);
    expect(mockedSend).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200)})});
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
    "await">>>>>>> cursor/expand-services-advertise-and-build-project-4b36
