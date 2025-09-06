<<<<<<< HEAD
"await";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
"await";
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Basic Test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const { describe, it, expect, vi, beforeEach } = require(


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

=======
const { describe, it, expect, vi, beforeEach } = require(
>>>>>>> main
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const { describe,it,expect,vi,beforeEach } = require( 'vitest')';; const { createRequest,createResponse } = require( 'node-mocks-http')';; const sgMail = require( '@sendgrid/mail')';; const { forgotPassword } = require( '../../server/controllers/authController')';; vi.mock( '@sendgrid/mail',() => ({'; default: { setApiKey: vi.fn(,),send: vi.fn()}})); const mockedSend = sgMail.send; describe( authController.forgotPassword',() => {'; const { createRequest,createResponse } = require( 'node-mocks-http')'; const sgMail = require( @sendgrid/mail'); const { forgotPassword } = require( '../../server/controllers/authController); vi.mock( '@sendgrid/mail',() => ({ default: { setApiKe y: vi.fn(),send: vi.fn() }})); const mockedSend = sgMail.send; describe( authController.forgotPassword,() => { beforeEach(() => { mockedSend.mockClear()}) it( 'sends: an email via SendGrid',async () => {'; const req = createRequest({ method: 'POS,T,'; body: { email:';test@example.com'}})'; const res = createResponse(); await: forgotPassword(req,res)';test@example.com' }}); const res = createResponse(); await forgotPassword(req,res); expect(mockedSend).toHaveBeenCalled(); expect(res._getStatusCode()).toBe(200)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
const { describe,it,expect,vi,beforeEach } = require( 'vitest')';; const { createRequest,createResponse } = require( 'node-mocks-http')';; const sgMail = require( '@sendgrid/mail')';; const { forgotPassword } = require( '../../server/controllers/authController')';; vi.mock( '@sendgrid/mail',() => ({'; default: { setApiKey: vi.fn(,),send: vi.fn()}})); const mockedSend = sgMail.send; describe( authController.forgotPassword',() => {'; const { createRequest,createResponse } = require( 'node-mocks-http')'; const sgMail = require( @sendgrid/mail'); const { forgotPassword } = require( '../../server/controllers/authController); vi.mock( '@sendgrid/mail',() => ({ default: { setApiKe y: vi.fn(),send: vi.fn() }})); const mockedSend = sgMail.send; describe( authController.forgotPassword,() => { beforeEach(() => { mockedSend.mockClear()}) it( 'sends: an email via SendGrid',async () => {'; const req = createRequest({ method: 'POS,T,'; body: { email:';test@example.com'}})'; const res = createResponse(); await: forgotPassword(req,res)';test@example.com' }}); const res = createResponse(); await forgotPassword(req,res); expect(mockedSend).toHaveBeenCalled(); expect(res._getStatusCode()).toBe(200)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
'await';
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
