<<<<<<< HEAD
import { test, expect } from '@playwright/test';'

test('basic page load', async ({ page }) => {'
  }
  await page.goto('/');'
  await expect(page).toHaveTitle(/Zion Tech Group/);
});

test('navigation works', async ({ page }) => {'
  }
  await page.goto('/');'
  
  // Test navigation links,
await page.click('text=Services');'
  await expect(page).toHaveURL(/.*services/);
  
  await page.click('text=About');'
  await expect(page).toHaveURL(/.*about/);
  
  await page.click('text=Contact');'
  await expect(page).toHaveURL(/.*contact/);
});

test('contact form submission', async ({ page }) => {'
  }
  await page.goto('/contact');'
  
  // Fill out the contact form,
await page.fill('input[name="name"]', 'Test User');'
  await page.fill('input[name="email"]', 'test@example.com');'
  await page.fill('textarea[name="message"]', 'This is a test message');'
  
  // Submit the form,
await page.click('button[type="submit"]');'
  
  // Check for success message or redirect,
await expect(page.locator('text=Thank you')).toBeVisible();'
});
=======
<<<<<<< HEAD
<<<<<<<< HEAD:pages_backup_conflicts/docs.tsx
import React from 'react';
========
<<<<<<< HEAD
import * as React from 'react';
=======
import React from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>>> merged-prs-20250907-203621:backup-problematic-files/pages_backup_conflicts/docs.tsx

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
>>>>>>> merged-prs-20250907-203621
interface DocsProps {
  // Add props here as needed
}

<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> merged-prs-20250907-203621
export default function Docs({ }: DocsProps) {
  return (
    <div>
      <h1>Docs</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD

}
}
=======
}
}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
