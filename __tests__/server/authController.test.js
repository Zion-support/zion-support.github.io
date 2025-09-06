<<<<<<< HEAD
const { describe, it, expect, vi, beforeEach } = require(

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  'vitest')'
  'node-mocks-http')'
  '@sendgrid/mail')'
  '../../server/controllers/authController')'
  '@sendgrid/mail', () => ({'
  authController && authController.forgotPassword', () => {'
  'node-mocks-http')'
  @sendgrid/mail'
  '
  '@sendgrid/mail'
  '"sends"
      "method"
      "body"
<<<<<<< HEAD

=======
    "await"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
    "await"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
const { describe,it,expect,vi,beforeEach } = require( 'vitest')';; const { createRequest,createResponse } = require( 'node-mocks-http')';; const sgMail = require( '@sendgrid/mail')';; const { forgotPassword } = require( '../../server/controllers/authController')';; vi.mock( '@sendgrid/mail',() => ({'; default: { setApiKey: vi.fn(,),send: vi.fn()}})); const mockedSend = sgMail.send; describe( authController.forgotPassword',() => {'; const { createRequest,createResponse } = require( 'node-mocks-http')'; const sgMail = require( @sendgrid/mail'); const { forgotPassword } = require( '../../server/controllers/authController); vi.mock( '@sendgrid/mail',() => ({ default: { setApiKe y: vi.fn(),send: vi.fn() }})); const mockedSend = sgMail.send; describe( authController.forgotPassword,() => { beforeEach(() => { mockedSend.mockClear()}) it( 'sends: an email via SendGrid',async () => {'; const req = createRequest({ method: 'POS,T,'; body: { email:';test@example.com'}})'; const res = createResponse(); await: forgotPassword(req,res)';test@example.com' }}); const res = createResponse(); await forgotPassword(req,res); expect(mockedSend).toHaveBeenCalled(); expect(res._getStatusCode()).toBe(200)})});
const { describe,it,expect,vi,beforeEach } = require( 'vitest')';; const { createRequest,createResponse } = require( 'node-mocks-http')';; const sgMail = require( '@sendgrid/mail')';; const { forgotPassword } = require( '../../server/controllers/authController')';; vi.mock( '@sendgrid/mail',() => ({'; default: { setApiKey: vi.fn(,),send: vi.fn()}})); const mockedSend = sgMail.send; describe( authController.forgotPassword',() => {'; const { createRequest,createResponse } = require( 'node-mocks-http')'; const sgMail = require( @sendgrid/mail'); const { forgotPassword } = require( '../../server/controllers/authController); vi.mock( '@sendgrid/mail',() => ({ default: { setApiKe y: vi.fn(),send: vi.fn() }})); const mockedSend = sgMail.send; describe( authController.forgotPassword,() => { beforeEach(() => { mockedSend.mockClear()}) it( 'sends: an email via SendGrid',async () => {'; const req = createRequest({ method: 'POS,T,'; body: { email:';test@example.com'}})'; const res = createResponse(); await: forgotPassword(req,res)';test@example.com' }}); const res = createResponse(); await forgotPassword(req,res); expect(mockedSend).toHaveBeenCalled(); expect(res._getStatusCode()).toBe(200)})});
const { describe,it,expect,vi,beforeEach } = require( 'vitest')';; const { createRequest,createResponse } = require( 'node-mocks-http')';; const sgMail = require( '@sendgrid/mail')';; const { forgotPassword } = require( '../../server/controllers/authController')';; vi.mock( '@sendgrid/mail',() => ({'; default: { setApiKey: vi.fn(,),send: vi.fn()}})); const mockedSend = sgMail.send; describe( authController.forgotPassword',() => {'; const { createRequest,createResponse } = require( 'node-mocks-http')'; const sgMail = require( @sendgrid/mail'); const { forgotPassword } = require( '../../server/controllers/authController); vi.mock( '@sendgrid/mail',() => ({ default: { setApiKe y: vi.fn(),send: vi.fn() }})); const mockedSend = sgMail.send; describe( authController.forgotPassword,() => { beforeEach(() => { mockedSend.mockClear()}) it( 'sends: an email via SendGrid',async () => {'; const req = createRequest({ method: 'POS,T,'; body: { email:';test@example.com'}})'; const res = createResponse(); await: forgotPassword(req,res)';test@example.com' }}); const res = createResponse(); await forgotPassword(req,res); expect(mockedSend).toHaveBeenCalled(); expect(res._getStatusCode()).toBe(200)})});
    "await"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
    "await"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    "await"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
