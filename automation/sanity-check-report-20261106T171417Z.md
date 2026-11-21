# Homepage Sanity Check Report — 2026-11-06T17:14:17Z

**Target:** https://ziontechgroup.com/  
**Run time (UTC):** 2026-11-06T17:14:17Z  
**Run time (local):** 2026-11-06T14:14:17-03:00 (Brasília)  
**Script:** `scripts/homepage_sanity_check.py`  
**Branch:** main  

## Result

✅ **Homepage OK — no build-failed fallback detected**

## Raw response

```
URL: https://ziontechgroup.com/
HTTP Status: 200
Content-Type: text/html; charset=utf-8
Raw bytes (decoded, UTF-8): 52,940 bytes / 52,403 characters
Page Title: Zion Tech Group | Advanced AI Services & IT Solutions
```

## Build-failed indicators

None. All indicators (`build failed`, `Build Failed`, `BUILD FAILED`, `failed to compile`, `application error`, `unable to render`, `error:`, `500 internal server error`, `something went wrong`, `Next.js error occurred`, `Server Error`, `Error: Server Error`, `>500<`, `/500.html`, `/_next/static/500`) returned **no matches**.

## Page text preview (first 300 chars)

```
<!DOCTYPE html>
<html lang="en" data-homepage="recovered-2026-03-19" data-published="2026-09-05T14:03Z">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width...
```

## Notes

- HTTP 200 confirms the homepage serves the live build, not a fallback.
- No build-failed / server-error / `500` patterns present on the 200 body.
- Injected `data-homepage="recovered-2026-03-19"` confirms the recovered homepage is live.
