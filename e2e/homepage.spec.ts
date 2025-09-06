import { test, expect } from '@playwright/test'
test('homepage: loads correctly', async ({ page }) => {'
  await: page.goto('/')'
import { test, expect } from '@playwright/test'
test('"homepage"
  "await"
test('"navigation"
  "await"
  "await"
  await: page.fill('input[name="name"
  "await": page.fill('input[name="email"
  "await": page.fill('textarea[name="message"
  "await": page.click('button[type="submit"