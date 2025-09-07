<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ApiWebhooks() {
  // Sample webhook event payload

  const newApplicationPayload = `{

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD

export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;

  "event_type": "new_application";
  "created_at": "2023-06-10T15: 42:31Z";
  "data": {;
=======
  "event_type": "new_application";
  "created_at": "2023-06-10T15: 42:31Z";
  "data": {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export function ApiWebhooks() {
  // Sample webhook event payload
  const newApplicationPayload = `{;
  "event_type": "new_application";
  "created_at": "2023-06-10T15: 42:31Z";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/developers/CodeBlock",
<<<<<<< HEAD

=======
<<<<<<< HEAD

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

  "created_at": "2023 - 06 - 12T09: 15:22Z";
  "data": {
    "project_id": "project - 123";
    "job_id": "job - 456";
    "client_id": "client - 789";
    "talent_id": "talent - 123";
    "start_date": "2023 - 07 - 01";
    "status": "offer_accepted",

    "created_at": "2023 - 06 - 12T09:15:22Z";
  }`
}`;
;

    "status": "new",;

    "created_at": "2023-06-15T11:30:00Z";
  }`
}`;

  "event_type": "message_received";
  "created_at": "2023-06-18T14: 22:15Z";
  "data": {;
    "message_id": "msg-123";
    "conversation_id": "conv-456";
    "sender_id": "user-789";

    "recipient_id": "user-012",;

    "content": "Hi, I'd like to discuss the project details.";

    "created_at": "2023-06-18T14:22:15Z";
  }`
}`;

    "created_at": "2023 - 06 - 15T11:30:00Z";
  }`
}`;
;`
  const messageReceivedPayload = `{"
  "event_type": "message_received";"
  "created_at": "2023 - 06 - 18T14: 22:15Z";"
  "data": {"
    "message_id": "msg - 123";"
    "conversation_id": "conv - 456";"
    "sender_id": "user - 789";"
    "recipient_id": "user - 012",'"
    "content": "Hi, I'd like to discuss the project details.";"
    "created_at": "2023 - 06 - 18T14:22:15Z";
  }`
}`;
;`
  const webhookHandlerJs = `// Express.js webhook handler example;'
const express = require ('express');
const app = express ();'
const crypto = require ('crypto');
;
// Middleware to parse JSON bodies;
app.use (express.json ());
;
// Your webhook secret from the Zion dashboard;'
const webhook_secret = 'YOUR_WEBHOOK_SECRET';
;
// Middleware to verify webhook signatures;
/**
 * verifyWebhookSignature - Function description;
 */
function verifyWebhookSignature() { return null; }
if ( {) {}
  $2;
}'
    return res.status (401).send ('Missing signature or timestamp');
  }
  // Verify the signature;'
  const payload = timestamp + '.' + JSON.stringify (req.body);
  const expected_signature = crypto;'
    .create_hmac ('sha256', webhook_secret);
    .update (payload);'
    .digest ('hex');
;
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (401).send ('Invalid signature');
  }
  next ();
}
// Webhook endpoint with signature verification;'
app.post ('/webhooks / zion', verifyWebhookSignature, (req, res) => {}
  const { event_type, data } = req.body;
;
  // Handle different event types;

  switch (event_type) {
    case 'new_application':;
      console.log ('New application received:', data.application_id);
      // Process the new application...;
      break;

const express = require('express');
const app = express();'
const crypto = require('crypto');

// Middleware to parse JSON bodies;
app && app.use(express && express.json());

// Your webhook secret from the Zion dashboard;'
const webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures;
function verifyWebhookSignature(): any (req, res, next) {;'
  const signature = req && req.headers['x-zion-signature'];'
  const timestamp = req && req.headers['x-zion-timestamp'];

  if (!signature || !timestamp) {;'
    return res && res.status(401).send('Missing signature or timestamp');
  }

  // Verify the signature;'
  const payload = timestamp + '.' + JSON && JSON.stringify(req && req.body);
  const expectedSignature = crypto;'
    .createHmac('sha256', webhookSecret);
    .update(payload);'
    .digest('hex');

  if (signature !== expectedSignature) {;'
    return res && res.status(401).send('Invalid signature');
  }

  next();
}

// Webhook endpoint with signature verification;'
app && app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req && req.body;

  // Handle different event types;
  switch (event_type) {;'
    case 'new_application':;'
      console && console.log('New application received:', data && data.application_id);
      // Process the new application...;
      break;
'
    case 'talent_hired':;'
      console && console.log('Talent hired:', data && data.talent_id);
      // Update your system...;
      break;
'
    case 'quote_received':;'
      console && console.log('New quote received:', data && data.quote_id);
      // Process the quote...;
      break;
'
    case 'message_received':;'
      console && console.log('New message received:', data && data.message_id);
      // Process the message...;
      break;

    default:;'
      console && console.log('Unknown event type:', event_type);
  }

  // Always return a 200 response quickly;'
  res && res.status(200).send('Webhook received');
});

app && app.listen(3000, () => {;'
  console && console.log('Webhook server listening on port 3000');

  "data": {

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

  "created_at": "2023 - 06 - 12T09: 15:22Z";
  "data": {
    "project_id": "project - 123";
    "job_id": "job - 456";
    "client_id": "client - 789";
    "talent_id": "talent - 123";
    "start_date": "2023 - 07 - 01";
    "status": "offer_accepted",

    "created_at": "2023 - 06 - 12T09:15:22Z";
  }`
}`;
;

    "status": "new",;

    "created_at": "2023-06-15T11:30:00Z";
  }`
}`;

  "event_type": "message_received";
  "created_at": "2023-06-18T14: 22:15Z";
  "data": {;
    "message_id": "msg-123";
    "conversation_id": "conv-456";
    "sender_id": "user-789";

    "recipient_id": "user-012",;

    "content": "Hi, I'd like to discuss the project details.";

    "created_at": "2023-06-18T14:22:15Z";
  }`
}`;

    "created_at": "2023 - 06 - 15T11:30:00Z";
  }`
}`;
;`
  const messageReceivedPayload = `{"
  "event_type": "message_received";"
  "created_at": "2023 - 06 - 18T14: 22:15Z";"
  "data": {"
    "message_id": "msg - 123";"
    "conversation_id": "conv - 456";"
    "sender_id": "user - 789";"
    "recipient_id": "user - 012",'"
    "content": "Hi, I'd like to discuss the project details.";"
    "created_at": "2023 - 06 - 18T14:22:15Z";
  }`
}`;
;`
  const webhookHandlerJs = `// Express.js webhook handler example;'
const express = require ('express');
const app = express ();'
const crypto = require ('crypto');
;
// Middleware to parse JSON bodies;
app.use (express.json ());
;
// Your webhook secret from the Zion dashboard;'
const webhook_secret = 'YOUR_WEBHOOK_SECRET';
;
// Middleware to verify webhook signatures;
/**
 * verifyWebhookSignature - Function description;
 */
function verifyWebhookSignature() { return null; }
if ( {) {}
  $2;
}'
    return res.status (401).send ('Missing signature or timestamp');
  }
  // Verify the signature;'
  const payload = timestamp + '.' + JSON.stringify (req.body);
  const expected_signature = crypto;'
    .create_hmac ('sha256', webhook_secret);
    .update (payload);'
    .digest ('hex');
;
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (401).send ('Invalid signature');
  }
  next ();
}
// Webhook endpoint with signature verification;'
app.post ('/webhooks / zion', verifyWebhookSignature, (req, res) => {}
  const { event_type, data } = req.body;
;
  // Handle different event types;

  switch (event_type) {
    case 'new_application':;
      console.log ('New application received:', data.application_id);
      // Process the new application...;
      break;

const express = require('express');
const app = express();'
const crypto = require('crypto');

// Middleware to parse JSON bodies;
app && app.use(express && express.json());

// Your webhook secret from the Zion dashboard;'
const webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures;
function verifyWebhookSignature(): any (req, res, next) {;'
  const signature = req && req.headers['x-zion-signature'];'
  const timestamp = req && req.headers['x-zion-timestamp'];

  if (!signature || !timestamp) {;'
    return res && res.status(401).send('Missing signature or timestamp');
  }

  // Verify the signature;'
  const payload = timestamp + '.' + JSON && JSON.stringify(req && req.body);
  const expectedSignature = crypto;'
    .createHmac('sha256', webhookSecret);
    .update(payload);'
    .digest('hex');

  if (signature !== expectedSignature) {;'
    return res && res.status(401).send('Invalid signature');
  }

  next();
}

// Webhook endpoint with signature verification;'
app && app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req && req.body;

  // Handle different event types;
  switch (event_type) {;'
    case 'new_application':;'
      console && console.log('New application received:', data && data.application_id);
      // Process the new application...;
      break;
'
    case 'talent_hired':;'
      console && console.log('Talent hired:', data && data.talent_id);
      // Update your system...;
      break;
'
    case 'quote_received':;'
      console && console.log('New quote received:', data && data.quote_id);
      // Process the quote...;
      break;
'
    case 'message_received':;'
      console && console.log('New message received:', data && data.message_id);
      // Process the message...;
      break;

    default:;'
      console && console.log('Unknown event type:', event_type);
  }

  // Always return a 200 response quickly;'
  res && res.status(200).send('Webhook received');
});

app && app.listen(3000, () => {;'
  console && console.log('Webhook server listening on port 3000');

  "data": {

    "application_id": "app-123456";
    "job_id": "job-789";
    "talent_id": "talent-456";
    "status": "new";
    "cover_letter": "I'm excited to apply for this position...";

import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**
 * ApiWebhooks - Function description
 */
function ApiWebhooks() {
  // Sample webhook event payload;
  const newApplicationPayload = `{
  "event_type": "new_application";
  "created_at": "2023 - 06 - 10T15: 42:31Z";
  "data": {
    "application_id": "app - 123456";
    "job_id": "job - 789";
    "talent_id": "talent - 456";
    "status": "new";
    "cover_letter": "I'm excited to apply for this position...";
    "resume_url": "https://storage.zionai.com / resumes / resume - 123.pdf",
    "created_at": "2023 - 06 - 10T15:42:31Z";
  }
}`;

  const newHirePayload = `{

    "resume_url": "https://storage && storage.zionai.com/resumes/resume-123 && 123.pdf",;
    "created_at": "2023-06-10T15:42:31Z";
  }
}`;

<<<<<<< HEAD
=======
  const newApplicationPayload = `{
  "event_type": "new_application",
  "created_at": "2023-06-10T15:42:31Z",
  "data": {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "application_id": "app-123456";
    "job_id": "job-789";
    "talent_id": "talent-456";
    "status": "new";
    "cover_letter": "I'm excited to apply for this position...";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**
 * ApiWebhooks - Function description
 */
function ApiWebhooks() {
  // Sample webhook event payload;
  const newApplicationPayload = `{
  "event_type": "new_application";
  "created_at": "2023 - 06 - 10T15: 42:31Z";
  "data": {
    "application_id": "app - 123456";
    "job_id": "job - 789";
    "talent_id": "talent - 456";
    "status": "new";
    "cover_letter": "I'm excited to apply for this position...";
    "resume_url": "https://storage.zionai.com / resumes / resume - 123.pdf",
    "created_at": "2023 - 06 - 10T15:42:31Z";
  }
}`;
<<<<<<< HEAD

  const newHirePayload = `{

=======
;
  const newHirePayload = `{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "resume_url": "https://storage && storage.zionai.com/resumes/resume-123 && 123.pdf",;
    "created_at": "2023-06-10T15:42:31Z";
  }
}`;
<<<<<<< HEAD

=======
  const newHirePayload = `{;
  "event_type": "talent_hired";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "created_at": "2023 - 06 - 12T09: 15:22Z";
  "data": {
    "project_id": "project - 123";
    "job_id": "job - 456";
    "client_id": "client - 789";
    "talent_id": "talent - 123";
    "start_date": "2023 - 07 - 01";
    "status": "offer_accepted",
    "created_at": "2023 - 06 - 12T09:15:22Z";
  }
}`;
;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const quoteReceivedPayload = `{
    "status": "offer_accepted",;
    "created_at": "2023-06-12T09:15:22Z";
  }
}`;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const quoteReceivedPayload = `{;
  "event_type": "quote_received";
<<<<<<< HEAD

  const quoteReceivedPayload = `{;
  "event_type": "quote_received";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "status": "new",;
    "created_at": "2023-06-15T11:30:00Z";
  }
}`;
  const messageReceivedPayload = `{;

  "event_type": "message_received";
  "created_at": "2023-06-18T14: 22:15Z";
  "data": {;
    "message_id": "msg-123";
    "conversation_id": "conv-456";
    "sender_id": "user-789";
    "recipient_id": "user-012",;

    "content": "Hi, I'd like to discuss the project details.";
    "created_at": "2023-06-18T14:22:15Z";
  }
}`;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "created_at": "2023 - 06 - 15T11: 30:00Z";
  "data": {
    "quote_id": "quote - 123";
    "client_id": "client - 456";
    "talent_id": "talent - 789";
    "project_name": "Website Redesign";
    "budget_min": 5000;
    "budget_max": 8000;
    "status": "new",
    "created_at": "2023 - 06 - 15T11:30:00Z";
  }
}`;
;
  const messageReceivedPayload = `{
  "event_type": "message_received";
  "created_at": "2023 - 06 - 18T14: 22:15Z";
  "data": {
    "message_id": "msg - 123";
    "conversation_id": "conv - 456";
    "sender_id": "user - 789";
    "recipient_id": "user - 012",
    "content": "Hi, I'd like to discuss the project details.";
    "created_at": "2023 - 06 - 18T14:22:15Z";
  }
}`;
;
  const webhookHandlerJs = `// Express.js webhook handler example;
const express = require ('express');
const app = express ();
const crypto = require ('crypto');
;
// Middleware to parse JSON bodies;
app.use (express.json ());
;
// Your webhook secret from the Zion dashboard;
const webhook_secret = 'YOUR_WEBHOOK_SECRET';
;
// Middleware to verify webhook signatures;
/**
 * verifyWebhookSignature - Function description
 */
function verifyWebhookSignature() {
  const signature = req.headers['x - zion - signature'];
  const timestamp = req.headers['x - zion - timestamp'];
;
  // Check condition
if ( {) {
  $2
}
    return res.status (401).send ('Missing signature or timestamp');
  }
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify (req.body);
  const expected_signature = crypto;
    .create_hmac ('sha256', webhook_secret);
    .update (payload);
    .digest ('hex');
;
  // Check condition
if ( {) {
  $2
}
    return res.status (401).send ('Invalid signature');
  }
  next ();
}
// Webhook endpoint with signature verification;
app.post ('/webhooks / zion', verifyWebhookSignature, (req, res) => {
  const { event_type, data } = req.body;
;
  // Handle different event types;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  switch (event_type) {
    case 'new_application':;
      console.log ('New application received:', data.application_id);
      // Process the new application...;
      break;
<<<<<<< HEAD

=======
  const webhookHandlerJs = `// Express && Express.js webhook handler example;
const express = require('express');
const app = express();
const crypto = require('crypto');
// Middleware to parse JSON bodies;
app && app.use(express && express.json());
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET';
// Middleware to verify webhook signatures;
function verifyWebhookSignature(): any (req, res, next) {;
  const signature = req && req.headers['x-zion-signature'];
  const timestamp = req && req.headers['x-zion-timestamp'];
  if (!signature || !timestamp) {;
    return res && res.status(401).send('Missing signature or timestamp');
  }
  // Verify the signature;
  const payload = timestamp + '.' + JSON && JSON.stringify(req && req.body);
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex');
  if (signature !== expectedSignature) {;
    return res && res.status(401).send('Invalid signature');
  }
  next();
}
// Webhook endpoint with signature verification;
app && app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req && req.body;
  // Handle different event types;
  switch (event_type) {;
    case 'new_application':;
      console && console.log('New application received:', data && data.application_id);
      // Process the new application...;
      break;
    case 'talent_hired':;
      console && console.log('Talent hired:', data && data.talent_id);
      // Update your system...;
      break;
    case 'quote_received':;
      console && console.log('New quote received:', data && data.quote_id);
      // Process the quote...;
      break;
    case 'message_received':;
      console && console.log('New message received:', data && data.message_id);
      // Process the message...;
      break;
    default:;
      console && console.log('Unknown event type:', event_type);
  }
  // Always return a 200 response quickly;
  res && res.status(200).send('Webhook received');
});
app && app.listen(3000, () => {;
  console && console.log('Webhook server listening on port 3000');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  "event_type": "new_application",
  "created_at": "2023-06-10T15:42:31Z",
  "data": {

<<<<<<< HEAD
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf"
    "created_at": "2023-06-10T15:42:31Z"
  }
}`;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React from "react",
export function ApiWebhooks() {
  // Sample webhook event payload
  const newApplicationPayload = $2;
  "created_at": "2023-06-10T15: 42: 31Z",
  "data": {
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    "application_id": "app-123456",

    "job_id": "job-789",
    "talent_id": "talent-456",
    "status": "new",
    "cover_letter": "I'm excited to apply for this position...",
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf",
    "created_at": "2023-06-10T15:42:31Z"
  }
}`,

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
`
  const newHirePayload = `{"
  "event_type": "talent_hired","
  "created_at": "2023-06-12T09:15:22Z","
  "data": {}
"
    "project_id": "project-123","
    "job_id": "job-456","
    "client_id": "client-789","
    "talent_id": "talent-123","
    "start_date": "2023-07-01","
    "status": "offer_accepted","
    "created_at": "2023-06-12T09:15:22Z"
  }`
}`,

  const quoteReceivedPayload = `{
  "event_type": "quote_received",
  "created_at": "2023-06-15T11:30:00Z",
  "data": {

`
  const quoteReceivedPayload = `{"
  "event_type": "quote_received","
  "created_at": "2023-06-15T11:30:00Z","
  "data": {}
"
    "quote_id": "quote-123","
    "client_id": "client-456","
    "talent_id": "talent-789","
    "project_name": "Website Redesign","
    "budget_min": 5000,"
    "budget_max": 8000,"
    "status": "new","
    "created_at": "2023-06-15T11:30:00Z"
  }`
<<<<<<< HEAD
}`,

=======
}`,

  "data": {
    "message_id": "msg-123",
    "conversation_id": "conv-456",
    "sender_id": "user-789",
    "recipient_id": "user-012",
    "content": "Hi, I'd like to discuss the project details.",
    "created_at": "2023-06-18T14:22:15Z"
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;
  "event_type": "new_application",;
  "created_at": "2023-06-10T15:42:31Z",;
  "data": {;
    "application_id": "app-123456",;
    "job_id": "job-789",;
    "talent_id": "talent-456",;
    "status": "new",;
    "cover_letter": "I'm excited to apply for this position...",;
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf",;
    "created_at": "2023-06-10T15:42:31Z";
  }
}`,;
  const newHirePayload = `{;
  "event_type": "talent_hired",;
  "created_at": "2023-06-12T09:15:22Z",;
  "data": {;
    "project_id": "project-123",;
    "job_id": "job-456",;
    "client_id": "client-789",;
    "talent_id": "talent-123",;
    "start_date": "2023-07-01",;
    "status": "offer_accepted",;
    "created_at": "2023-06-12T09:15:22Z";
  }
}`,;
  const quoteReceivedPayload = `{;
  "event_type": "quote_received",;
  "created_at": "2023-06-15T11:30:00Z",;
  "data": {;
    "quote_id": "quote-123",;
    "client_id": "client-456",;
    "talent_id": "talent-789",;
    "project_name": "Website Redesign",;
    "budget_min": 5000,;
    "budget_max": 8000,;
    "status": "new",;
    "created_at": "2023-06-15T11:30:00Z";
  }
}`,;
  const messageReceivedPayload = `{;
  "event_type": "message_received",;
  "created_at": "2023-06-18T14:22:15Z",;
  "data": {;
    "message_id": "msg-123",;
    "conversation_id": "conv-456",;
    "sender_id": "user-789",;
    "recipient_id": "user-012",;
    "content": "Hi, I'd like to discuss the project details.",;
    "created_at": "2023-06-18T14:22:15Z";
  }
}`,;
  const webhookHandlerJs = `// Express.js webhook handler example;
const express = require('express'),;
const app = express(),;
const crypto = require('crypto'),;
// Middleware to parse JSON bodies;
app.use(express.json()),;
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
// Middleware to verify webhook signatures;
function verifyWebhookSignature(req, res, next) {;
  const signature = req.headers['x-zion-signature'],;
  const timestamp = req.headers['x-zion-timestamp'],;
  if (!signature || !timestamp) {;
    return res.status(401).send('Missing signature or timestamp');
  }
;
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex'),;
  if (signature !== expectedSignature) {;
    return res.status(401).send('Invalid signature');
  }
;
  next();

  const webhookHandlerJs = `// Express.js webhook handler example
const express = require('express');
const app = express();
const crypto = require('crypto');

// Middleware to parse JSON bodies
app.use(express.json());

// Your webhook secret from the Zion dashboard
const webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-zion-signature'];
  const timestamp = req.headers['x-zion-timestamp'];
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp')
  }
  
  // Verify the signature
  const payload = timestamp + '.' + JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature')
  }
  
  next()

  "event_type": "message_received",
  "created_at": "2023-06-18T14:22:15Z",
  "data": {
    "message_id": "msg-123",
    "conversation_id": "conv-456",
    "sender_id": "user-789",
    "recipient_id": "user-012",
    "content": "Hi, I'd like to discuss the project details.",
    "created_at": "2023-06-18T14:22:15Z"
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiWebhooks() { return null; }
  }`
}`,;`
  const newHirePayload = `{;"
  "event_type": "talent_hired",;"
  "created_at": "2023-06-12T09:15:22Z",;"
  "data": {;"
    "project_id": "project-123",;"
    "job_id": "job-456",;"
    "client_id": "client-789",;"
    "talent_id": "talent-123",;"
    "start_date": "2023-07-01",;"
    "status": "offer_accepted",;"
    "created_at": "2023-06-12T09:15:22Z";
  }`
}`,;`
  const quoteReceivedPayload = `{;"
  "event_type": "quote_received",;"
  "created_at": "2023-06-15T11:30:00Z",;"
  "data": {;"
    "quote_id": "quote-123",;"
    "client_id": "client-456",;"
    "talent_id": "talent-789",;"
    "project_name": "Website Redesign",;"
    "budget_min": 5000,;"
    "budget_max": 8000,;"
    "status": "new",;"
    "created_at": "2023-06-15T11:30:00Z";
  }`
}`,;`
  const messageReceivedPayload = `{;"
  "event_type": "message_received",;"
  "created_at": "2023-06-18T14:22:15Z",;"
  "data": {;"
    "message_id": "msg-123",;"
    "conversation_id": "conv-456",;"
    "sender_id": "user-789",;"
    "recipient_id": "user-012",;'"
    "content": "Hi, I'd like to discuss the project details.",;"
    "created_at": "2023-06-18T14:22:15Z";
  }`
}`,;`
  const webhookHandlerJs = `// Express.js webhook handler example;'
const express = require('express'),;
const app = express(),;'
const crypto = require('crypto'),;
// Middleware to parse JSON bodies;
app.use(express.json()),;
// Your webhook secret from the Zion dashboard;'
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
// Middleware to verify webhook signatures;
function verifyWebhookSignature() { return null; }
  }
;
  // Verify the signature;'
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;'
    .createHmac('sha256', webhookSecret);
    .update(payload);'
    .digest('hex'),;
  if (signature !== expectedSignature) {;'
    return res.status(401).send('Invalid signature');
  }
;
  next();

}

// Webhook endpoint with signature verification'
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {}
  const { event_type, data } = req.body,

      break,
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const newHirePayload = `{
  "event_type": "talent_hired",
  "created_at": "2023-06-12T09:15:22Z",
  "data": {

<<<<<<< HEAD
    "project_id": "project-123";
    "job_id": "job-456";
    "client_id": "client-789";
    "talent_id": "talent-123";
    "start_date": "2023-07-01";
    "status": "offer_accepted"
    "created_at": "2023-06-12T09:15:22Z"
  }
}`;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    "project_id": "project-123",
    "job_id": "job-456",
    "client_id": "client-789",
    "talent_id": "talent-123",
    "start_date": "2023-07-01",
    "status": "offer_accepted",
    "created_at": "2023-06-12T09:15:22Z"
  }
}`,

<<<<<<< HEAD
  const quoteReceivedPayload = `{
  "event_type": "quote_received",
  "created_at": "2023-06-15T11:30:00Z",
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const quoteReceivedPayload = `{
  "event_type": "quote_received",
  "created_at": "2023-06-15T11:30:00Z",
  "data": {
<<<<<<< HEAD
    "quote_id": "quote-123";
    "client_id": "client-456";
    "talent_id": "talent-789";
    "project_name": "Website Redesign";
    "budget_min": 5000;
    "budget_max": 8000;
    "status": "new"
    "created_at": "2023-06-15T11:30:00Z"
  }
}`;
  const messageReceivedPayload = `{
  "event_type": "message_received";
  "created_at": "2023-06-18T14: 22:15Z";
  "data": {
    "message_id": "msg-123";
    "conversation_id": "conv-456";
    "sender_id": "user-789";
    "recipient_id": "user-012"
    "content": "Hi, I'd like to discuss the project details.";
    "created_at": "2023-06-18T14:22:15Z"
  }
}`;
  const webhookHandlerJs = `// Express.js webhook handler example
const express = require('express');
const app = express();
const crypto = require('crypto');
// Middleware to parse JSON bodies
app.use(express.json());
// Your webhook secret from the Zion dashboard
const webhookSecret = 'YOUR_WEBHOOK_SECRET';
// Middleware to verify webhook signatures
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-zion-signature'];
  const timestamp = req.headers['x-zion-timestamp'];
  if (!signature |!timestamp) {
    return res.status(401).send('Missing signature or timestamp')
  }
  // Verify the signature
  const payload = timestamp + '.' + JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex');
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature')
  }
  next()
}
// Webhook endpoint with signature verification
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {
  const { event_type, data } = req.body;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    "quote_id": "quote-123",
    "client_id": "client-456",
    "talent_id": "talent-789",
    "project_name": "Website Redesign",
    "budget_min": 5000,
    "budget_max": 8000,
    "status": "new",
    "created_at": "2023-06-15T11:30:00Z"
  }
}`,

  const messageReceivedPayload = `{
<<<<<<< HEAD
  "event_type": "message_received";
  "created_at": "2023-06-18T14: 22:15Z";
  "data": {
    "message_id": "msg-123";
    "conversation_id": "conv-456";
    "sender_id": "user-789";
    "recipient_id": "user-012",
    "content": "Hi, I'd like to discuss the project details.";
    "created_at": "2023-06-18T14:22:15Z"
  }
}`;

  const webhookHandlerJs = `// Express.js webhook handler example
const express = require('express');
const app = express();
const crypto = require('crypto');

// Middleware to parse JSON bodies
app.use(express.json());

// Your webhook secret from the Zion dashboard
const webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-zion-signature'];
  const timestamp = req.headers['x-zion-timestamp'];
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp')
  }
  
  // Verify the signature
  const payload = timestamp + '.' + JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature')
  }
  
  next()
  "event_type": "message_received",
  "created_at": "2023-06-18T14:22:15Z",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "data": {
    "message_id": "msg-123",
    "conversation_id": "conv-456",
    "sender_id": "user-789",
    "recipient_id": "user-012",
    "content": "Hi, I'd like to discuss the project details.",
    "created_at": "2023-06-18T14:22:15Z"
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;
  "event_type": "new_application",;
  "created_at": "2023-06-10T15:42:31Z",;
  "data": {;
    "application_id": "app-123456",;
    "job_id": "job-789",;
    "talent_id": "talent-456",;
    "status": "new",;
    "cover_letter": "I'm excited to apply for this position...",;
    "resume_url": "https://storage.zionai.com/resumes/resume-123.pdf",;
    "created_at": "2023-06-10T15:42:31Z";
<<<<<<< HEAD
=======
  }
}`,;
  const newHirePayload = `{;
  "event_type": "talent_hired",;
  "created_at": "2023-06-12T09:15:22Z",;
  "data": {;
    "project_id": "project-123",;
    "job_id": "job-456",;
    "client_id": "client-789",;
    "talent_id": "talent-123",;
    "start_date": "2023-07-01",;
    "status": "offer_accepted",;
    "created_at": "2023-06-12T09:15:22Z";
  }
}`,;
  const quoteReceivedPayload = `{;
  "event_type": "quote_received",;
  "created_at": "2023-06-15T11:30:00Z",;
  "data": {;
    "quote_id": "quote-123",;
    "client_id": "client-456",;
    "talent_id": "talent-789",;
    "project_name": "Website Redesign",;
    "budget_min": 5000,;
    "budget_max": 8000,;
    "status": "new",;
    "created_at": "2023-06-15T11:30:00Z";
  }
}`,;
  const messageReceivedPayload = `{;
  "event_type": "message_received",;
  "created_at": "2023-06-18T14:22:15Z",;
  "data": {;
    "message_id": "msg-123",;
    "conversation_id": "conv-456",;
    "sender_id": "user-789",;
    "recipient_id": "user-012",;
    "content": "Hi, I'd like to discuss the project details.",;
    "created_at": "2023-06-18T14:22:15Z";
  }
}`,;
  const webhookHandlerJs = `// Express.js webhook handler example;
const express = require('express'),;
const app = express(),;
const crypto = require('crypto'),;
// Middleware to parse JSON bodies;
app.use(express.json()),;
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
// Middleware to verify webhook signatures;
function verifyWebhookSignature(req, res, next) {;
  const signature = req.headers['x-zion-signature'],;
  const timestamp = req.headers['x-zion-timestamp'],;
  if (!signature || !timestamp) {;
    return res.status(401).send('Missing signature or timestamp');
  }
;
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex'),;
  if (signature !== expectedSignature) {;
    return res.status(401).send('Invalid signature');
  }
;
  next();

    "quote_id": "quote-123",
    "client_id": "client-456",
    "talent_id": "talent-789",
    "project_name": "Website Redesign",
    "budget_min": 5000,
    "budget_max": 8000,
    "status": "new",
    "created_at": "2023-06-15T11:30:00Z"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}`,;
  const newHirePayload = `{;
  "event_type": "talent_hired",;
  "created_at": "2023-06-12T09:15:22Z",;
  "data": {;
    "project_id": "project-123",;
    "job_id": "job-456",;
    "client_id": "client-789",;
    "talent_id": "talent-123",;
    "start_date": "2023-07-01",;
    "status": "offer_accepted",;
    "created_at": "2023-06-12T09:15:22Z";
  }
}`,;
  const quoteReceivedPayload = `{;
  "event_type": "quote_received",;
  "created_at": "2023-06-15T11:30:00Z",;
  "data": {;
    "quote_id": "quote-123",;
    "client_id": "client-456",;
    "talent_id": "talent-789",;
    "project_name": "Website Redesign",;
    "budget_min": 5000,;
    "budget_max": 8000,;
    "status": "new",;
    "created_at": "2023-06-15T11:30:00Z";
  }
}`,;
  const messageReceivedPayload = `{;
  "event_type": "message_received",;
  "created_at": "2023-06-18T14:22:15Z",;
  "data": {;
    "message_id": "msg-123",;
    "conversation_id": "conv-456",;
    "sender_id": "user-789",;
    "recipient_id": "user-012",;
    "content": "Hi, I'd like to discuss the project details.",;
    "created_at": "2023-06-18T14:22:15Z";
  }
}`,;
  const webhookHandlerJs = `// Express.js webhook handler example;
const express = require('express'),;
const app = express(),;
const crypto = require('crypto'),;
// Middleware to parse JSON bodies;
app.use(express.json()),;
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
// Middleware to verify webhook signatures;
function verifyWebhookSignature(req, res, next) {;
  const signature = req.headers['x-zion-signature'],;
  const timestamp = req.headers['x-zion-timestamp'],;
  if (!signature || !timestamp) {;
    return res.status(401).send('Missing signature or timestamp');
  }
;
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex'),;
  if (signature !== expectedSignature) {;
    return res.status(401).send('Invalid signature');
  }
;
  next();

<<<<<<< HEAD
  const webhookHandlerJs = `// Express.js webhook handler example
const express = require('express');
const app = express();
const crypto = require('crypto');

// Middleware to parse JSON bodies
app.use(express.json());

// Your webhook secret from the Zion dashboard
const webhookSecret = 'YOUR_WEBHOOK_SECRET';

// Middleware to verify webhook signatures
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-zion-signature'];
  const timestamp = req.headers['x-zion-timestamp'];
  
  if (!signature || !timestamp) {
    return res.status(401).send('Missing signature or timestamp')
  }
  
  // Verify the signature
  const payload = timestamp + '.' + JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature')
  }
  
  next()

  "event_type": "message_received",
  "created_at": "2023-06-18T14:22:15Z",
  "data": {
    "message_id": "msg-123",
    "conversation_id": "conv-456",
    "sender_id": "user-789",
    "recipient_id": "user-012",
    "content": "Hi, I'd like to discuss the project details.",
    "created_at": "2023-06-18T14:22:15Z"
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiWebhooks() { return null; }
  }`
}`,;`
  const newHirePayload = `{;"
  "event_type": "talent_hired",;"
  "created_at": "2023-06-12T09:15:22Z",;"
  "data": {;"
    "project_id": "project-123",;"
    "job_id": "job-456",;"
    "client_id": "client-789",;"
    "talent_id": "talent-123",;"
    "start_date": "2023-07-01",;"
    "status": "offer_accepted",;"
    "created_at": "2023-06-12T09:15:22Z";
  }`
}`,;`
  const quoteReceivedPayload = `{;"
  "event_type": "quote_received",;"
  "created_at": "2023-06-15T11:30:00Z",;"
  "data": {;"
    "quote_id": "quote-123",;"
    "client_id": "client-456",;"
    "talent_id": "talent-789",;"
    "project_name": "Website Redesign",;"
    "budget_min": 5000,;"
    "budget_max": 8000,;"
    "status": "new",;"
    "created_at": "2023-06-15T11:30:00Z";
  }`
}`,;`
  const messageReceivedPayload = `{;"
  "event_type": "message_received",;"
  "created_at": "2023-06-18T14:22:15Z",;"
  "data": {;"
    "message_id": "msg-123",;"
    "conversation_id": "conv-456",;"
    "sender_id": "user-789",;"
    "recipient_id": "user-012",;'"
    "content": "Hi, I'd like to discuss the project details.",;"
    "created_at": "2023-06-18T14:22:15Z";
  }`
}`,;`
  const webhookHandlerJs = `// Express.js webhook handler example;'
const express = require('express'),;
const app = express(),;'
const crypto = require('crypto'),;
// Middleware to parse JSON bodies;
app.use(express.json()),;
// Your webhook secret from the Zion dashboard;'
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
// Middleware to verify webhook signatures;
function verifyWebhookSignature() { return null; }
  }
;
  // Verify the signature;'
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;'
    .createHmac('sha256', webhookSecret);
    .update(payload);'
    .digest('hex'),;
  if (signature !== expectedSignature) {;'
    return res.status(401).send('Invalid signature');
  }
;
  next();

=======
  const messageReceivedPayload = `{

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

// Webhook endpoint with signature verification'
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {}
  const { event_type, data } = req.body,
<<<<<<< HEAD

      break,

  const newHirePayload = `{
  "event_type": "talent_hired",
  "created_at": "2023-06-12T09:15:22Z",
  "data": {

    "project_id": "project-123",
    "job_id": "job-456",
    "client_id": "client-789",
    "talent_id": "talent-123",
    "start_date": "2023-07-01",
    "status": "offer_accepted",
    "created_at": "2023-06-12T09:15:22Z"
  }
}`,

  const quoteReceivedPayload = `{
  "event_type": "quote_received",
  "created_at": "2023-06-15T11:30:00Z",
=======
  
  // Handle different event types
  switch (event_type) {
    case 'new_application':
<<<<<<< HEAD
      console.log($2);
      // Process the new application...
      break,
    
    case 'talent_hired':
      console.log($2);
      // Update your system...
      break,
    
    case 'quote_received':
      console.log($2);
      // Process the quote...
      break,
    
    case 'message_received':
      console.log($2);
      // Process the message...
      break,
    
    default:
      console.log('Unknown event type:', event_type)
  }
  // Always return a 200 response quickly
  res.status(200).send('Webhook received')
=======
      // // // console.log('New application received:', data.application_id),
      // Process the new application...
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      break,
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    case 'talent_hired':

      // // // console.log('Talent hired:', data.talent_id),
      // Update your system...

    case 'quote_received':

      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...

    case 'message_received':

      // // // console.log('New message received:', data.message_id),
      // Process the message...

      break;
      break,
    
    case 'talent_hired':
      // // // console.log('Talent hired:', data.talent_id),
      // Update your system...
      break;
      break,
    
    case 'quote_received':
      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...
      break;
      break,
    
    case 'message_received':
      // // // console.log('New message received:', data.message_id),
      // Process the message...
      break;
      break,

<<<<<<< HEAD
=======
<<<<<<< HEAD
      break;
      break,
    
    case 'talent_hired':
      // // // console.log('Talent hired:', data.talent_id),
      // Update your system...
      break;
      break,
    
    case 'quote_received':
      // // // console.log('New quote received:', data.quote_id),
      // Process the quote...
      break;
      break,
    
    case 'message_received':
      // // // console.log('New message received:', data.message_id),
      // Process the message...
      break;
      break,
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    default:

      // // // console.log('Unknown event type:', event_type)
  }
  // Always return a 200 response quickly'
  res.status(200).send('Webhook received')
<<<<<<< HEAD

}),

                </td>
=======
<<<<<<< HEAD
});
app.listen(3000, () => {
  console.log('Webhook server listening on port 3000')
}),`;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
}),

app.listen(3000, () => {
  // // // console.log('Webhook server listening on port 3000')
}),`,

<<<<<<< HEAD
  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Webhooks</h1>
        <p>
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.
        </p>
        <h2>Supported Events</h2>
        <p>You can subscribe to the following webhook events:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="py-2 px-4 text-white font-mono">new_application</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 px-4 text-white font-mono">quote_received</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-white font-mono">message_received</td>
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a new message</td>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </tr>
            </tbody>
          </table>
        </div>

          under the Webhooks tab. For each webhook, you'll need to provide:
        </p>

        <ul>
          <li>A name for the webhook (for your reference)</li>
          <li>The URL where you want to receive webhook events</li>
          <li>The event types you want to subscribe to</li>
        </ul>

          should use to verify that incoming requests are genuinely from Zion.
        </p>

        <h2>Webhook Payload Format</h2>
        <p>All webhook payloads follow a common format:</p>
<<<<<<< HEAD
=======
        <Tabs defaultValue="new_application">
          <TabsList>
            <TabsTrigger value="new_application">New Application</TabsTrigger>
            <TabsTrigger value="talent_hired">Talent Hired</TabsTrigger>
            <TabsTrigger value="quote_received">Quote Received</TabsTrigger>
            <TabsTrigger value="message_received">Message Received</TabsTrigger>
          </TabsList>
          <TabsContent value="new_application">
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="talent_hired">
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="quote_received">
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="message_received">
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />
          </TabsContent>
        </Tabs>
        <h2>Verifying Webhook Signatures</h2>
        <p>
          To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request.
          We include two HTTP headers with each webhook request:
        </p>
        <ul>
          <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li>
          <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li>
        </ul>
        <p>Here's an example of verifying a webhook in Node.js:</p>
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />
        <h2>Testing Webhooks</h2>
        <p>
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab,
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.
        </p>
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>
          <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li>
          <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li>
          <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li>
        </ul>
      </div>
    </ApiDocsLayout>
  )

}),

                </td>
              </tr>
            </tbody>
          </table>
        </div>

          under the Webhooks tab. For each webhook, you'll need to provide:
        </p>

<<<<<<< HEAD
        <ul>
          <li>A name for the webhook (for your reference)</li>
          <li>The URL where you want to receive webhook events</li>
          <li>The event types you want to subscribe to</li>
        </ul>

          should use to verify that incoming requests are genuinely from Zion.
        </p>

        <h2>Webhook Payload Format</h2>
        <p>All webhook payloads follow a common format:</p>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              language="json"
              showLineNumbers={true}
            />
          </TabsContent>
        </Tabs>

        <h2>Verifying Webhook Signatures</h2>
        <p>

          with each webhook request:
        </p>

        <ul>
          <li>

          language="javascript"
          showLineNumbers={true}
        />

        <h2>Testing Webhooks</h2>
        <p>

          webhook to send a test payload to your endpoint.
        </p>

        <h2>Best Practices</h2>
        <ul>
          <li>

          </li>
        </ul>
      </div>
    </ApiDocsLayout>
  );
<<<<<<< HEAD
=======
=======
  return (


}
export default ApiWebhooks;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
// Webhook endpoint with signature verification;
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req.body,;
  // Handle different event types;
  switch (event_type) {;
    case 'new_application':;
      // // // console.log('New application received:', data.application_id),;
      // Process the new application...;
      break,;

    case 'talent_hired':;
      // // // console.log('Talent hired:', data.talent_id),;
      // Update your system...;
      break,;

    case 'quote_received':;
      // // // console.log('New quote received:', data.quote_id),;
      // Process the quote...;
      break,;

    case 'message_received':;
      // // // console.log('New message received:', data.message_id),;
      // Process the message...;
      break,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    default:;
      // // // console.log('Unknown event type:', event_type);
  }
;
  // Always return a 200 response quickly;
  res.status(200).send('Webhook received');
}),;
app.listen(3000, () => {;
  // // // console.log('Webhook server listening on port 3000');
}),`,;
  return (;
<<<<<<< HEAD
}),`;
  return (
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Webhooks</h1>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Webhooks</h1>;
<<<<<<< HEAD
        ;
=======
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <p>;
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.;
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.;
        </p>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;
        ;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;
=======

        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="overflow-x-auto mb-6">;
          <table className="w-full border-collapse">;
            <thead>;
              <tr className="border-b border-zinc-800">;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">new_application</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td>;
              </tr>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td>;
              </tr>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">quote_received</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td>;
              </tr>;
              <tr>;
                <td className="py-2 px-4 text-white font-mono">message_received</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a new message</td>;

              </tr>;
            </tbody>;
          </table>;
        </div>;
<<<<<<< HEAD

        <h2 > Setting Up Webhooks</h2>;
        <p>;
          You can configure webhooks in the <a href="/developers / portal" className="text - zion - cyan">Developer Portal</a> under the Webhooks tab.;
          For each webhook, you'll need to provide:;
        </p>;
        <ul>;
          <li > A name for the webhook (for your reference)</li>;
          <li > The URL where you want to receive webhook events</li>;
          <li > The event types you want to subscribe to</li>;
        </ul>;
        <p>;
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.;
        </p>;
        <h2 > Webhook Payload Format</h2>;
        <p > All webhook payloads follow a common format:</p>;
        <Tabs default_value="new_application">;

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
        <h2 > Setting Up Webhooks</h2>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Setting Up Webhooks</h2>;
        <p>;
          You can configure webhooks in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a> under the Webhooks tab.;
          For each webhook, you'll need to provide:;
        </p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <ul>;
          <li>A name for the webhook (for your reference)</li>;
          <li>The URL where you want to receive webhook events</li>;
          <li>The event types you want to subscribe to</li>;
        </ul>;
<<<<<<< HEAD
        <p>;
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.;
        </p>;
        <h2>Webhook Payload Format</h2>;
        <p>All webhook payloads follow a common format:</p>;
=======

        <p>;
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.;
        </p>;

        <h2>Webhook Payload Format</h2>;
        <p>All webhook payloads follow a common format:</p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Tabs defaultValue="new_application">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <TabsList>;
            <TabsTrigger value="new_application">New Application</TabsTrigger>;
            <TabsTrigger value="talent_hired">Talent Hired</TabsTrigger>;
            <TabsTrigger value="quote_received">Quote Received</TabsTrigger>;
<<<<<<< HEAD

            <TabsTrigger value="message_received">Message Received</TabsTrigger>;
          </TabsList>;"
          <TabsContent value="new_application">;"
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="talent_hired">;"
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="quote_received">;"
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="message_received">;"
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;

=======
            <TabsTrigger value="message_received">Message Received</TabsTrigger>;
          </TabsList>;
          <TabsContent value="new_application">;
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="talent_hired">;
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="quote_received">;
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="message_received">;
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Verifying Webhook Signatures</h2>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <p>;
          To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request.;
          We include two HTTP headers with each webhook request:;
        </p>;
<<<<<<< HEAD

        <ul>;
          <li><code > X-Zion - Signature</code>: HMAC - SHA256 signature</li>;
          <li><code > X-Zion - Timestamp</code>: Unix timestamp when the webhook was sent</li>;
        </ul>;
        <p > Here's an example of verifying a webhook in Node.js:</p>;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;
        <h2 > Testing Webhooks</h2>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <ul>;
          <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li>;
          <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li>;
        </ul>;
<<<<<<< HEAD
        <p>Here's an example of verifying a webhook in Node.js:</p>;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;
=======

        <p>Here's an example of verifying a webhook in Node && Node.js:</p>;

        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Testing Webhooks</h2>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <p>;
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab;
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.;
        </p>;
<<<<<<< HEAD
        <h2 > Best Practices</h2>;
        <ul>;
          <li><strong > Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong > Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong > Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li>;
          <li><strong > Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>);
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Best Practices</h2>;
        <ul>;
          <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li>;
          <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
  );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
export default ApiWebhooks;

<<<<<<< HEAD
=======
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiWebhooks() {;
  // Sample webhook event payload;
  const newApplicationPayload = `{;
  "event_type":"new_application",;
  "created_at":"2023-06-10T15:42:31Z",;
  "data":{;
    "application_id":"app-123456",;
    "job_id":"job-789",;
    "talent_id":"talent-456",;
    "status":"new",;
    "cover_letter":"I'm excited to apply for this position...",;
    "resume_url":"https://storage.zionai.com/resumes/resume-123.pdf",;
    "created_at":"2023-06-10T15:42:31Z";
  }
}`,;
;
  const newHirePayload = `{;
  "event_type":"talent_hired",;
  "created_at":"2023-06-12T09:15:22Z",;
  "data":{;
    "project_id":"project-123",;
    "job_id":"job-456",;
    "client_id":"client-789",;
    "talent_id":"talent-123",;
    "start_date":"2023-07-01",;
    "status":"offer_accepted",;
    "created_at":"2023-06-12T09:15:22Z";
  }
}`,;
;
  const quoteReceivedPayload = `{;
  "event_type":"quote_received",;
  "created_at":"2023-06-15T11:30:00Z",;
  "data":{;
    "quote_id":"quote-123",;
    "client_id":"client-456",;
    "talent_id":"talent-789",;
    "project_name":"Website Redesign",;
    "budget_min":5000,;
    "budget_max":8000,;
    "status":"new",;
    "created_at":"2023-06-15T11:30:00Z";
  }
}`,;
;
  const messageReceivedPayload = `{;
  "event_type":"message_received",;
  "created_at":"2023-06-18T14:22:15Z",;
  "data":{;
    "message_id":"msg-123",;
    "conversation_id":"conv-456",;
    "sender_id":"user-789",;
    "recipient_id":"user-012",;
    "content":"Hi, I'd like to discuss the project details.",;
    "created_at":"2023-06-18T14:22:15Z";
  }
}`,;
;
  const webhookHandlerJs = `// Express.js webhook handler example;
const express = require('express'),;
const app = express(),;
const crypto = require('crypto'),;
;
// Middleware to parse JSON bodies;
app.use(express.json()),;
;
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET',;
;
// Middleware to verify webhook signatures;
function verifyWebhookSignature(req, res, next) {;
  const signature = req.headers['x-zion-signature'],;
  const timestamp = req.headers['x-zion-timestamp'],;
  ;
  if (!signature || !timestamp) {;
    return res.status(401).send('Missing signature or timestamp'),;
  }
  ;
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body),;
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret);
    .update(payload);
    .digest('hex'),;
  ;
  if (signature !== expectedSignature) {;
    return res.status(401).send('Invalid signature'),;
  }
  ;
  next(),;
}
;
// Webhook endpoint with signature verification;
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {;
  const { event_type, data } = req.body,;
  ;
  // Handle different event types;
  switch (event_type) {;
    case 'new_application':;
      // // // console.log('New application received:', data.application_id),;
      // Process the new application...;
      break,;
    ;
    case 'talent_hired':;
      // // // console.log('Talent hired:', data.talent_id),;
      // Update your system...;
      break,;
    ;
    case 'quote_received':;
      // // // console.log('New quote received:', data.quote_id),;
      // Process the quote...;
      break,;
    ;
    case 'message_received':;
      // // // console.log('New message received:', data.message_id),;
      // Process the message...;
      break,;
    ;
    default:;
      // // // console.log('Unknown event type:', event_type),;
  }
  ;
  // Always return a 200 response quickly;
  res.status(200).send('Webhook received'),;
}),;
;
app.listen(3000, () => {;
  // // // console.log('Webhook server listening on port 3000'),;
}),`,;
;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Webhooks</h1>;
        ;
        <p>;
          Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace.;
          Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen.;
        </p>;
;
        <h2>Supported Events</h2>;
        <p>You can subscribe to the following webhook events:</p>;
        ;
        <div className="overflow-x-auto mb-6">;
          <table className="w-full border-collapse">;
            <thead>;
              <tr className="border-b border-zinc-800">;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">new_application</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td>;
              </tr>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">talent_hired</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td>;
              </tr>;
              <tr className="border-b border-zinc-800">;
                <td className="py-2 px-4 text-white font-mono">quote_received</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td>;
              </tr>;
              <tr>;
                <td className="py-2 px-4 text-white font-mono">message_received</td>;
                <td className="py-2 px-4 text-zinc-300">Triggered when you receive a new message</td>;
              </tr>;
            </tbody>;
          </table>;
        </div>;
;
        <h2>Setting Up Webhooks</h2>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <p>;
          You can configure webhooks in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a> under the Webhooks tab.;
          For each webhook, you'll need to provide:;
        </p>;
        ;
        <ul>;
          <li>A name for the webhook (for your reference)</li>;
          <li>The URL where you want to receive webhook events</li>;
          <li>The event types you want to subscribe to</li>;
        </ul>;
        ;
        <p>;
          After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion.;
        </p>;
<<<<<<< HEAD
        <h2 > Webhook Payload Format</h2>;
        <p > All webhook payloads follow a common format:</p>;
        <Tabs default_value="new_application">;

=======
;
        <h2>Webhook Payload Format</h2>;
        <p>All webhook payloads follow a common format:</p>;
        ;
        <Tabs defaultValue="new_application">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <TabsList>;
            <TabsTrigger value="new_application">New Application</TabsTrigger>;
            <TabsTrigger value="talent_hired">Talent Hired</TabsTrigger>;
            <TabsTrigger value="quote_received">Quote Received</TabsTrigger>;

            <TabsTrigger value="message_received">Message Received</TabsTrigger>;
          </TabsList>;"
          <TabsContent value="new_application">;"
            <CodeBlock code={newApplicationPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="talent_hired">;"
            <CodeBlock code={newHirePayload} language="json" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="quote_received">;"
            <CodeBlock code={quoteReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="message_received">;"
            <CodeBlock code={messageReceivedPayload} language="json" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
<<<<<<< HEAD

=======
;
        <h2>Verifying Webhook Signatures</h2>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <p>;
          To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request.;
          We include two HTTP headers with each webhook request:;
        </p>;
<<<<<<< HEAD

=======
        ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <ul>;
          <li><code>X-Zion-Signature</code>:HMAC-SHA256 signature</li>;
          <li><code>X-Zion-Timestamp</code>:Unix timestamp when the webhook was sent</li>;
        </ul>;
        ;
        <p>Here's an example of verifying a webhook in Node.js:</p>;
        ;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;
;
        <h2>Testing Webhooks</h2>;
        <p>;
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab,;
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.;
        </p>;
        ;
        <h2>Best Practices</h2>;
        <ul>;
          <li><strong>Respond quickly</strong>:Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong>Verify signatures</strong>:Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong>Implement retries</strong>:Prepare for occasional failures by implementing retry logic</li>;
          <li><strong>Monitor webhook activity</strong>:Use the Developer Portal to view webhook delivery history and logs</li>;
        </ul>;
      </div>;
<<<<<<< HEAD
    </ApiDocsLayout>);
}
export default ApiWebhooks;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ;
        <ul>;
          <li><code>X-Zion-Signature</code>:HMAC-SHA256 signature</li>;
          <li><code>X-Zion-Timestamp</code>:Unix timestamp when the webhook was sent</li>;
        </ul>;
        ;
        <p>Here's an example of verifying a webhook in Node.js:</p>;
        ;
        <CodeBlock code={webhookHandlerJs} language="javascript" showLineNumbers={true} />;
;
        <h2>Testing Webhooks</h2>;
        <p>;
          You can test your webhook implementation using the Developer Portal. From the Webhooks tab,;
          select "Test Webhook" next to any configured webhook to send a test payload to your endpoint.;
        </p>;
        ;
        <h2>Best Practices</h2>;
        <ul>;
          <li><strong>Respond quickly</strong>:Return a 200 response as soon as you receive the webhook, then process it asynchronously</li>;
          <li><strong>Verify signatures</strong>:Always verify webhook signatures to ensure requests are legitimate</li>;
          <li><strong>Implement retries</strong>:Prepare for occasional failures by implementing retry logic</li>;
          <li><strong>Monitor webhook activity</strong>:Use the Developer Portal to view webhook delivery history and logs</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
  ),;}
;
<<<<<<< HEAD
=======
=======
    </ApiDocsLayout>;
  ),;}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default ApiWebhooks,;
 export function ApiWebhooks () {
  //Sample webhook event payload const newApplicationPayload = ` {
  "event type" : "new application";
"created at" : "2023-06-10T15:42:31Z";
"data" : {
  "application id" : "app-123456";
"job id" : "job-789";
"talent id" : "talent-456";
"status" : "new";
"cover letter" : "I'm excited to apply for this position...";
"resume url" : "https://storage.zionai.com/resumes/resume-123.pdf";
"created at" : "2023-06-10T15:42:31Z" 
}
}`;
const newHirePayload = ` {
  "event type" : "talent hired";
"created at" : "2023-06-12T09:15:22Z";
"data" : {
  "project id" : "project-123";
"job id" : "job-456";
"client id" : "client-789";
"talent id" : "talent-123";
"start date" : "2023-07-01";
"status" : "offer accepted";
"created at" : "2023-06-12T09:15:22Z" 
}
}`;
const quoteReceivedPayload = ` {
  "event type" : "quote received";
"created at" : "2023-06-15T11:30:00Z";
"data" : {
  "quote id" : "quote-123";
"client id" : "client-456";
"talent id" : "talent-789";
"project name" : "Website Redesign";
"budget min" : 5000;
"budget max" : 8000;
"status" : "new";
"created at" : "2023-06-15T11:30:00Z" 
}
}`;
const messageReceivedPayload = ` {
  "event type" : "message received";
"created at" : "2023-06-18T14:22:15Z";
"data" : {
  "message id" : "msg-123";
"conversation id" : "conv-456";
"sender id" : "user-789";
"recipient id" : "user-012";
"content" : "Hi, I'd like to discuss the project details.";
"created at" : "2023-06-18T14:22:15Z" 
}
}`;
const webhookHandlerJs = `//Express.js webhook handler example const express = require ('express');
const app = express ();
const crypto = require ('crypto');
//Your webhook secret from the Zion dashboard .createHmac ('sha256', webhookSecret) .update (payload) .digest ('hex');
next () 
}//Webhook endpoint with signature verification case 'talent hired': case 'quote received': case 'message received': 
}
});
max-w-3xl prose prose-invert"> <h1>Webhooks</h1> <p> Webhooks allow your application to receive real-time notifications when events occur in the Zion AI Marketplace. Instead of constantly polling our API for updates, webhooks push data to your server whenever relevant events happen. </p> <h2>Supported Events</h2> <p>You can subscribe to the following webhook events:</p> <div className=" overflow-x-auto mb-6"> <table className=" w-full border-collapse"> <thead> <tr className=" border-b border-zinc-800"> <th className=" text-left py-2 px-4 text-zinc-300 font-medium">Event Type</th> <th className=" text-left py-2 px-4 text-zinc-300 font-medium">Description</th> </tr> </thead> <tbody> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">new application</td> <td className=" py-2 px-4 text-zinc-300">Triggered when a talent applies to one of your job postings</td> </tr> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">talent hired</td> <td className=" py-2 px-4 text-zinc-300">Triggered when a talent is hired for a project</td> </tr> <tr className=" border-b border-zinc-800"> <td className=" py-2 px-4 text-white font-mono">quote received</td> <td className=" py-2 px-4 text-zinc-300">Triggered when you receive a quote request</td> </tr> <tr> <td className=" py-2 px-4 text-white font-mono">message received</td> <td className=" py-2 px-4 text-zinc-300">Triggered when you receive a new message</td> </tr> </tbody> </table> </div> <h2>Setting Up Webhooks</h2> <p> You can configure webhooks in the <a href=" /developers/portal"className=" text-zion-cyan">Developer Portal</Link> under the Webhooks tab. For each webhook, you'll need to provide: </p> <ul> <li>A name for the webhook (for your reference) </li> <li>The window.URL where you want to receive webhook events</li> <li>The event types you want to subscribe to</li> </ul> <p> After creating a webhook, you'll be given a webhook secret that you should use to verify that incoming requests are genuinely from Zion. </p> <h2>Webhook Payload Format</h2> <p>All webhook payloads follow a common format:</p> <Tabs defaultValue=" new application"> <TabsList> <TabsTrigger value=" new application">New Application</TabsTrigger> <TabsTrigger value=" talent hired">Talent Hired</TabsTrigger> <TabsTrigger value=" quote received">Quote Received</TabsTrigger> <TabsTrigger value=" message received">Message Received</TabsTrigger> </TabsList> </TabsContent> </Tabs> <h2>Verifying Webhook Signatures</h2> <p> To ensure webhook requests are genuinely from Zion, you should verify the signature included in each request. We include two HTTP headers with each webhook request: </p> <ul> <li><code>X-Zion-Signature</code>: HMAC-SHA256 signature</li> <li><code>X-Zion-Timestamp</code>: Unix timestamp when the webhook was sent</li> </ul> <p>Here's an example of verifying a webhook in Node.js:</p> <h2>Testing Webhooks</h2> <p> You can test your webhook implementation using the Developer Portal. From the Webhooks tab;
select " Test Webhook" next to any configured webhook to send a test payload to your endpoint. </p> <h2>Best Practices</h2> <ul> <li><strong>Respond quickly</strong>: Return a 200 response as soon as you receive the webhook, then process it asynchronously</li> <li><strong>Verify signatures</strong>: Always verify webhook signatures to ensure requests are legitimate</li> <li><strong>Implement retries</strong>: Prepare for occasional failures by implementing retry logic</li> <li><strong>Monitor webhook activity</strong>: Use the Developer Portal to view webhook delivery history and logs</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiWebhooks;
;
export default ApiWebhooks;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}),`;
  return (
}
export default ApiWebhooks;

<<<<<<< HEAD
export default ApiWebhooks;
=======
export default ApiWebhooks;
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
