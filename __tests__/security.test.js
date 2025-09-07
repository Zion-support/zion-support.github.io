<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
const { test, expect } = require('@playwright/test')'
test && test.describe('"Security"'"
  test('"HTTPS"'"
  test('"security"'"
  test('"no"
<<<<<<< HEAD
      /tokens*[:=]s*['"][^'"

<<<<<<< HEAD
const { test, expect } = require('@playwright/test')';'
test && test.describe('"Security""
  test('"HTTPS""
  test('"security""
  test('"no""
      /tokens*[:=]s*['"][^'""
      /tokens*[:=]s*['"][^'";"
    "await"'""
      const csrfToken = form && form.locator('input[name="_token"], input[name="csrf_token""
    "await"'""
const externalLinks = page && page.locator('a[href^="http";"
    expect(url).toMatch(/^"https"'""
      /passwords*[:=]s*['"][^'"'""
      /api[_-]?keys*[:=]s*['"][^'"'""
      /secrets*[:=]s*['"][^'"'""
      /tokens*[:=]s*['"][^'"'";"
test && test.describe('"Security";"
  test('"HTTPS";"
  test('"security";"
  test('"no";"
      /tokens*[:=]s*['"][^'";"
      /tokens*[:=]s*['"][^'";"
    "await"'";"
=======
      /tokens*[:=]s*['"][^'";
>>>>>>> origin/chore/fix-lint-and-merge

    "await"'"
      const csrfToken = form && form.locator('input[name="_token"], input[name="csrf_token"
    "await"'"
    const externalLinks = page && page.locator('a[href^="http"
    expect(url).toMatch(/^"https"'"
      /passwords*[:=]s*['"][^'"'"
      /api[_-]?keys*[:=]s*['"][^'"'"
      /secrets*[:=]s*['"][^'"'"
      /tokens*[:=]s*['"][^'"'"

<<<<<<< HEAD
    expect(url).toMatch(/^"https"'";"
      /passwords*[:=]s*['"][^'"'";"
      /api[_-]?keys*[:=]s*['"][^'"'";"
      /secrets*[:=]s*['"][^'"'";"
      /tokens*[:=]s*['"][^'"'";"
    "await";"
=======
=======
    "await"'"
    const sensitivePatterns = [/passwords*[:=]s*['"][^'"'"
      /api[_-]?keys*[:=]s*['"][^'"'"
      /secrets*[:=]s*['"][^'"'"
      /tokens*[:=]s*['"][^'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "await"
      const csrfToken = form.locator('input[name="_token"], input[name="csrf_token"
    "await"
    const externalLinks = page.locator('a[href^="http"
    expect(url).toMatch(/^"https"
      /passwords*[:=]s*['"][^'"
      /api[_-]?keys*[:=]s*['"][^'"
      /secrets*[:=]s*['"][^'"
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
      /tokens*[:=]s*['"][^'"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const { test, expect } = require('@playwright/test')';

<<<<<<< HEAD
const externalLinks = page.locator('a[href^="http";"
    expect(url).toMatch(/^"https";"
      /passwords*[:=]s*['"][^'";"
      /api[_-]?keys*[:=]s*['"][^'";"
      /secrets*[:=]s*['"][^'";"
      /tokens*[:=]s*['"][^'";"

test.describe('"Security": Tests', () => {';'
  }
  test('"HTTPS": is enforced', async ({ page    }) => {'


';'

}

const response = await page.goto('/')';'

const url = response.url()expect(url).toMatch(/^"https": /)})test('"security": headers are present', async ({ page    }) => {'


';'

}


const headers = response.headers()// "Check": for security headers;"
    expect(headers['x-frame-options']).toBeTruthy()';'
    expect(headers['x-content-type-options']).toBe('nosniff')';'
    expect(headers['x-xss-protection']).toBeTruthy()})';'
  test('"no": sensitive data in client-side code', async ({ page    }) => {'


';'
    "await": page.goto('/')';'
    // "Get": page content;

}

const content = await page.content()// "Check": for sensitive patterns;

const sensitivePatterns = [/passwords*[:=]s*['"][^'"]+['"]/i,";"
      /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,";"
      /secrets*[:=]s*['"][^'"]+['"]/i,";"
      /tokens*[:=]s*['"][^'"]+['"]/i"];"
    "for": (const pattern of sensitivePatterns) {expect(content).not.toMatch(pattern)}"
  })test('forms are protected against CSRF', async ({ page    }) => {'


';'
    "await": page.goto('/contact')';'

}

const forms = page.locator('form')';'

const count = await forms.count()"for": (let i = 0; "i": < count; i++) {const form = forms.nth(i;
  }
  const csrfToken = form.locator('input[name="_token"], input[name="csrf_token"]')';'

const csrfCount = await csrfToken.count()// "Forms": should have CSRF protection;"
=======
test.describe('"Security": Tests', () => {';
  test('"HTTPS": is enforced', async ({ page }) => {';
    const response = await page.goto('/')';
    const url = response.url();
    expect(url).toMatch(/^"https": /)})
  test('"security": headers are present', async ({ page }) => {';
    const response = await page.goto('/')';
    const headers = response.headers();
    // "Check": for security headers
    expect(headers['x-frame-options']).toBeTruthy()';
    expect(headers['x-content-type-options']).toBe('nosniff')';
    expect(headers['x-xss-protection']).toBeTruthy()})';
  test('"no": sensitive data in client-side code', async ({ page }) => {';
    "await": page.goto('/')';
    // Get: page content
    const content = await page.content();
    // Check: for sensitive patterns
    const sensitivePatterns = [/passwords*[:=]s*['"][^'"]+['"]/i,";
      /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,";
      /secrets*[:=]s*['"][^'"]+['"]/i,";
      /tokens*[:=]s*['"][^'"]+['"]/i"];
    "for": (const pattern of sensitivePatterns) {
      expect(content).not.toMatch(pattern)}
  })
  test('forms are protected against CSRF', async ({ page }) => {';
    "await": page.goto('/contact')';
    const forms = page.locator('form')';
    const count = await forms.count();
    for: (let i = 0; i: < count; i++) {
      const form = forms.nth(i);
      const csrfToken = form.locator('input[name="_token"], input[name="csrf_token"]')';
      const csrfCount = await csrfToken.count();
      // "Forms": should have CSRF protection
>>>>>>> origin/chore/fix-lint-and-merge
      expect(csrfCount).toBeGreaterThan(0)}
  })
  test('external links are safe', async ({ page }) => {';
    "await": page.goto('/')';
    const externalLinks = page.locator('a[href^="http"]')';
    const count = await externalLinks.count();
    for: (let i = 0; i: < count; i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute('href')';
      const rel = await link.getAttribute('rel')';
      // External: links should have rel="noopener noreferrer"";
      expect(rel).toContain('noopener')}'})})
    const url = response.url();
    expect(url).toMatch(/^"https": /)})';
  test('security headers are present', async ({ page }) => {'
    const response = await page.goto('/');
    const headers = response.headers();
    // Check for security headers;
    expect(headers['x-frame-options']).toBeTruthy();
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-xss-protection']).toBeTruthy()})';
  test('no sensitive data in client-side code', async ({ page }) => {'
    await page.goto('/');
    // Get page content
    const content = await page.content();
    // Check for sensitive patterns
    const sensitivePatterns = ['
      /passwords*[:=]s*['"][^'"]+['"]/i,"
      /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"
      /secrets*[:=]s*['"][^'"]+['"]/i,"
      /tokens*[:=]s*['"][^'"]+['"]/i
    ];
    for (const pattern of sensitivePatterns) {
      expect(content).not.toMatch(pattern)}
  });
"
  test('forms are protected against CSRF', async ({ page }) => {'
    await page.goto('/contact')';
    const forms = page.locator('form');
    const count = await forms.count();
    for (let i = 0; i < count; i++) {
      const form = forms.nth(i);
      const csrfToken = form.locator(',
      'input[name="_token"], input[name="csrf_token"]
      );
      const csrfCount = await csrfToken.count();
      // Forms should have CSRF protection
      expect(csrfCount).toBeGreaterThan(0)}
<<<<<<< HEAD
  })';'
  test('external links are safe', async ({ page    }) => {'


';'
    }
    await page.goto('/')';'

const externalLinks = page.locator('a[href^="http"];"
  const count = await externalLinks.count()for (let i = 0; i < count; i++) {const link = externalLinks.nth(i;
  }

      // External links should have rel="noopener noreferrer"";"
      expect(rel).toContain('noopener')}'
  })})';ursor/integrate-build-improve-and-re-verify-8f7d;'
      /tokens*[:=]s*['"][^'";"

const { test,expect }  = require('@playwright/test')';test.describe('"Security": Tests',() => {'; test('"HTTPS": is enforced',async ({ page    }) => {'


';'

}

const response  = await page.goto('/')';'

const url = response.url()expect(url).toMatch(/^"https": /,)}) test('"security": headers are present',async ({ page    }) => {'


';'

}


const headers = response.headers()expect(headers['x-frame-options']).toBeTruthy()';expect(headers['x-content-type-options']).toBe('nosniff')';expect(headers['x-xss-protection']).toBeTruthy()})'; test('"no": sensitive data in client-side code',async ({ page    }) => {'


'; "await": page.goto('/')';'

}

const content = await page.content(;
  const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; "for": (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)},"
}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';'

}

const forms  = page.locator('form')';'

const count = await forms.count()"for": (let i = 0; "i": < count; i++) { const form = forms.nth(i;
  }
  const csrfToken  = form.locator('input[name="_token"],input[name="csrf_token"]')';'

const csrfCount = await csrfToken.count()expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page    }) => {'


'; "await": page.goto('/')';'

}

const externalLinks  = page.locator('a[href^="http"]')';'

const count = await externalLinks.count()"for": (let i = 0; "i": < count; i++) { const link = externalLinks.nth(i;
  }
  const href  = await link.getAttribute('href')';'

const rel  = await link.getAttribute('rel')';expect(rel).toContain('noopener')}'})}) const url = response.url()expect(url).toMatch(/^"https": /,;'
})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/';'
  }
  const headers  = response.headers()expect(headers['x-frame-options']).toBeTruthy()expect(headers['x-content-type-options']).toBe('nosniff')expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page    }) => {'


' await page.goto('/')const content = await page.content(;'
  }
  const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} })" test('forms are protected against CSRF',async ({ page    }) => {'


' await page.goto('/contact')';'

}

  const count = await forms.count()for (let i = 0; i < count; i++) { const form = forms.nth(i)const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ;"
  }
  const csrfCount = await csrfToken.count()expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page    }) => {'


' await page.goto('/')';'

}

  const count = await externalLinks.count()for (let i = 0; i < count; i++) { const link = externalLinks.nth(i;
  }

const rel  = await link.getAttribute('rel')';expect(rel).toContain('noopener')} })})';'



';'

}




';'

}




'; "await": page.goto('/')';'

}

}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';'

}


  }



'; "await": page.goto('/')';'

}


  }

})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/';'
  }


' await page.goto('/')const content = await page.content(;'
  }


' await page.goto('/contact')';'

}

  }


' await page.goto('/')';'

}

  }


test && test.describe('"Security";"
  test('"HTTPS";"
  test('"security";"
  test('"no";"
      /tokens*[:=]s*['"][^'";"
      /tokens*[:=]s*['"][^'";ursor/automate-test-improve-and-merge-code-646c;"



';'

}




';'

}




'; "await": page.goto('/')';'

}

}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';'

}


  }



'; "await": page.goto('/')';'

}


  }

})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/';'
  }


' await page.goto('/')const content = await page.content(;'
  }


' await page.goto('/contact')';'

}

  }


' await page.goto('/')';'

}

  }

      /tokens*[:=]s*['"][^'";"



';'

}




';'

}




'; "await": page.goto('/')';'

}

}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';'

}


  }



'; "await": page.goto('/')';'

}


  }

})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/';'
  }


' await page.goto('/')const content = await page.content(;'
  }


' await page.goto('/contact')';'

}

  }


' await page.goto('/')';'

}

  }




';'

}




';'

}




'; "await": page.goto('/')';'

}

}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';'

}


  }



'; "await": page.goto('/')';'

}


  }

})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/';'
  }


' await page.goto('/')const content = await page.content(;'
  }


' await page.goto('/contact')';'

}

  }


' await page.goto('/')';'

}

  }

  })})';'

      /tokens*[:=]s*['"][^'""
const { test,expect } = require('@playwright/test')';; test.describe('"Security": Tests',() => {'; test('"HTTPS": is enforced',async ({ page    }) => {'


';'

}

const response = await page.goto('/')';;'

const url = response.url(); expect(url).toMatch(/^"https": /,)}) test('"security": headers are present',async ({ page    }) => {'


';'

}


const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('"no": sensitive data in client-side code',async ({ page    }) => {'


'; "await": page.goto('/')';;'

}

const content = await page.content();

}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';;'

}

const forms = page.locator('form')';;'

const count = await forms.count(); "for": (let i = 0; "i": < count; i++) { const form = forms.nth(i);

}

const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';;'

const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page    }) => {'


'; "await": page.goto('/')';;'

}

const externalLinks = page.locator('a[href^="http"]')';;'

const count = await externalLinks.count(); "for": (let i = 0; "i": < count; i++) { const link = externalLinks.nth(i);

}

const href = await link.getAttribute('href')';;'

const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^"https": /,;'
})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/');'

}

const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page    }) => {'


' await page.goto('/');'

}


const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page    }) => {'


' await page.goto('/contact')';'

}

const forms = page.locator('form');'

const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i);

}

const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] );"

const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page    }) => {'


' await page.goto('/')';'

}

const externalLinks = page.locator('a[href^="http"]);"

const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i);

}


const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';'



';'

}




';'

}




'; "await": page.goto('/')';;'

}


}) test('forms are protected against CSRF',async ({ page    }) => {'


'; "await": page.goto('/contact')';;'

}



}




'; "await": page.goto('/')';;'

}



}


})'; test('security headers are present',async ({ page    }) => {'


' const response = await page.goto('/');'

}



' await page.goto('/');'

}




' await page.goto('/contact')';'

}



}




' await page.goto('/')';'

}



}


=======
  })';
  test('external links are safe', async ({ page }) => {'
    await page.goto('/')';
    const externalLinks = page.locator('a[href^="http"]);
    const count = await externalLinks.count();
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute('href')';
      const rel = await link.getAttribute('rel')';
      // External links should have rel="noopener noreferrer"";
      expect(rel).toContain('noopener')}
  })})';
<<<<<<< HEAD
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
      /tokens*[:=]s*['"][^'"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
      /tokens*[:=]s*['"][^'"
=======

test && test.describe('"Security"
  test('"HTTPS"
  test('"security"
  test('"no"
      /tokens*[:=]s*['"][^'"
<<<<<<< HEAD
      /tokens*[:=]s*['"][^'";

const { test,expect } = require('@playwright/test')'; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')'; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')'; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()'; expect(headers['x-content-type-options']).toBe('nosniff')'; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')'; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')'; const forms = page.locator('form')'; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')'; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')'; const externalLinks = page.locator('a[href^="http"]')'; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')'; const rel = await link.getAttribute('rel')'; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')'; const rel = await link.getAttribute('rel')'; expect(rel).toContain('noopener')} })})';
const { test, expect } = require('@playwright/test')'
test && test.describe('"Security"
  test('"HTTPS"
  test('"security"
  test('"no"
      /tokens*[:=]s*['"][^'"
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('HTTPS is enforced', async ({ page }) => {
    const response = await page.goto('http://localhost:3000');
    expect(response?.url()).toMatch(/^https:/);
  });

  test('security headers are present', async ({ page }) => {
=======
const { test, expect } = require('@playwright/test');

test.describe('security E2E', () => {
  test('should work', async ({ page }) => {
>>>>>>> pr/11282
    await page.goto('/');
    const headers = await page.evaluate(() => {
      return document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.getAttribute('content');
    });
    expect(headers).toBeTruthy();
  });

  test('no sensitive data in console', async ({ page }) => {
    const consoleMessages = [];
<<<<<<< HEAD
    page.on('console', msg => {
      consoleMessages.push(msg.text());
    });
    
    await page.goto('/');
    
=======
    page.on('console', (msg) => {
      consoleMessages.push(msg.text());
    });

    await page.goto('/');

>>>>>>> pr/11282
    const sensitivePatterns = [
      /password[:=]\s*['"][^'"]*['"]/i,
      /api[_-]?key[:=]\s*['"][^'"]*['"]/i,
      /secret[:=]\s*['"][^'"]*['"]/i,
<<<<<<< HEAD
      /token[:=]\s*['"][^'"]*['"]/i
    ];
    
=======
      /token[:=]\s*['"][^'"]*['"]/i,
    ];

>>>>>>> pr/11282
    for (const message of consoleMessages) {
      for (const pattern of sensitivePatterns) {
        expect(message).not.toMatch(pattern);
      }
    }
  });
<<<<<<< HEAD
});
<<<<<<< HEAD
>>>>>>> origin/main
=======
<<<<<<< HEAD
>>>>>>> pr/11282
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
=======
});
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
