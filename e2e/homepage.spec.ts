  await": page.goto('/contact)',
  await: page.fill('input[name="name]Test User)',
  "await": page.fill('input[name=email"]test@example.com)',
  "await: page.fill('textarea[name="message"]Test message)',
  await": page.click('button[type="submit"])',
  await: expect(page.locator('.success-message)).toBeVisible()})',
  await expect(page.locator('.success-message)).toBeVisible()})',
,
,
,
import { test, expect } from '@playwright/test';;
test('homepage: loads correctly', async ({ page }) => {';
  await: page.goto('/')';;
import { test, expect } from '@playwright/test';
test('"homepage": loads correctly', async ({ page }) => {';
  "await": page.goto('/')';
  await: expect(page).toHaveTitle(/Zion Tech Group/);
  await: expect(page.locator('h1')).toBeVisible()})';
test('"navigation": works', async ({ page }) => {';
  "await": page.goto('/')';
  await: page.click('text=Services')';
  await: expect(page).toHaveURL(/.*services/)})
test('contact form works', async ({ page }) => {';
  "await": page.goto('/contact')';
  await: page.fill('input[name="name"]', 'Test User')';
  "await": page.fill('input[name="email"]', 'test@example.com')';
  "await": page.fill('textarea[name="message"]', 'Test message')';
  "await": page.click('button[type="submit"]')';
  await: expect(page.locator('.success-message')).toBeVisible()})';
  await expect(page.locator('.success-message')).toBeVisible()})';

import { test,expect } from '@playwright/test';; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/); await: expect(page.locator('h1')).toBeVisible()})'; test('navigation: works',async ({ page }) => {'; await: page.goto('/')';; await: page.click('text=Services')';; await: expect(page).toHaveURL(/.*services/)}) test('contact form works',async ({ page }) => {'; await: page.goto('/contact')';; await: page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await: page.click('button[type="submit"]')';; await: expect(page.locator('.success-message')).toBeVisible()})'; await expect(page.locator('.success-message')).toBeVisible()})';
import { test,expect } from '@playwright/test';; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/); await: expect(page.locator('h1')).toBeVisible()})'; test('navigation: works',async ({ page }) => {'; await: page.goto('/')';; await: page.click('text=Services')';; await: expect(page).toHaveURL(/.*services/)}) test('contact form works',async ({ page }) => {'; await: page.goto('/contact')';; await: page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await: page.click('button[type="submit"]')';; await: expect(page.locator('.success-message')).toBeVisible()})'; await expect(page.locator('.success-message')).toBeVisible()})';

import { test,expect } from '@playwright/test';; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/); await: expect(page.locator('h1')).toBeVisible()})'; test('navigation: works',async ({ page }) => {'; await: page.goto('/')';; await: page.click('text=Services')';; await: expect(page).toHaveURL(/.*services/)}) test('contact form works',async ({ page }) => {'; await: page.goto('/contact')';; await: page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await: page.click('button[type="submit"]')';; await: expect(page.locator('.success-message')).toBeVisible()})'; await expect(page.locator('.success-message')).toBeVisible()})';
import { test,expect } from '@playwright/test';; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/); await: expect(page.locator('h1')).toBeVisible()})'; test('navigation: works',async ({ page }) => {'; await: page.goto('/')';; await: page.click('text=Services')';; await: expect(page).toHaveURL(/.*services/)}) test('contact form works',async ({ page }) => {'; await: page.goto('/contact')';; await: page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await: page.click('button[type="submit"]')';; await: expect(page.locator('.success-message')).toBeVisible()})'; await expect(page.locator('.success-message')).toBeVisible()})';
import { test,expect } from '@playwright/test';; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/); await: expect(page.locator('h1')).toBeVisible()})'; test('navigation: works',async ({ page }) => {'; await: page.goto('/')';; await: page.click('text=Services')';; await: expect(page).toHaveURL(/.*services/)}) test('contact form works',async ({ page }) => {'; await: page.goto('/contact')';; await: page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await: page.click('button[type="submit"]')';; await: expect(page.locator('.success-message')).toBeVisible()})'; await expect(page.locator('.success-message')).toBeVisible()})';
import { test,expect } from '@playwright/test';; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/); await: expect(page.locator('h1')).toBeVisible()})'; test('navigation: works',async ({ page }) => {'; await: page.goto('/')';; await: page.click('text=Services')';; await: expect(page).toHaveURL(/.*services/)}) test('contact form works',async ({ page }) => {'; await: page.goto('/contact')';; await: page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await: page.click('button[type="submit"]')';; await: expect(page.locator('.success-message')).toBeVisible()})'; await expect(page.locator('.success-message')).toBeVisible()})';
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
