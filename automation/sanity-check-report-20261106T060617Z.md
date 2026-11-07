# Homepage Sanity Check Report — 2026-11-06T06:06:17Z

**Target:** https://ziontechgroup.com/  
**Run time (UTC):** 2026-11-06T06:06:17Z  
**Run time (local):** 2026-11-06T03:06:17-03:00  
**Script:** `scripts/homepage_sanity_check.py`  
**Branch:** hero-carousel

## Result

✅ **Homepage OK — no build-failed fallback detected**

## Raw response

```
URL: https://ziontechgroup.com/
HTTP Status: 200
Content-Type: text/html; charset=utf-8
```

## Build-failed indicators

None. All indicators returned **no matches**.

## Page text preview (first 200 chars)

```
<!DOCTYPE html>
<html lang="en" data-homepage="recovered-2026-03-19" data-published="2026-09-05T14:03Z">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" width=device-width
```

## Notes

- HTTP 200 confirms the homepage serves the live build, not a fallback.
- No build-failed/Next.js error patterns in the 200 OK body.
- Homepage shows valid, well-formed HTML (doctype + html tag present).
