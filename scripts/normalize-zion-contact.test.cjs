'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { normalize, contact } = require('./normalize-zion-contact.cjs');
test('replaces Zion display, WhatsApp and broken telephone literals', () => {
  const before = '<a href="https://wa.me/13024640950?text=Discovery">+1 302 464 0950</a> <a href="tel:+130****0950">Call</a> +55 (47) 99999-9999';
  assert.equal(normalize(before), '<a href="https://wa.me/5511976140076?text=Discovery">+55 11 97614-0076</a> <a href="tel:+5511976140076">Call</a> +55 11 97614-0076');
  assert.equal(normalize('href="tel:+13024640"'), 'href="tel:+5511976140076"');
});
test('preserves third-party contacts, customer input placeholders, prices and checkout', () => {
  const unrelated = '<input placeholder="Your phone"><a href="tel:+551133334444">Client</a><a href="https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06">$2,500</a><form id="dq"></form>';
  assert.equal(normalize(unrelated), unrelated);
});
test('is idempotent and canonical contact stays consistent', () => {
  const once = normalize('+1 (302) 464-0950 +13024640950 5547999999999');
  assert.equal(normalize(once), once);
  assert.equal(contact.whatsappUrl, 'https://wa.me/' + contact.phoneE164.slice(1));
});
