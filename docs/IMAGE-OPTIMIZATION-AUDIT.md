# Autonomous Image Optimization & Alt Text Compliance

> Automated image asset audit: alt text enforcement, file size, format diversity (WebP/AVIF), responsive attributes. Runs on PRs and daily. Self-hosted.

## Overview

Image optimization and accessibility compliance are now checked automatically. This system:

- **Scans source code** (TSX/TS/HTML) for `<img>` and Next.js `<Image>` usage
- **Validates** every image reference:
  - ✅ `alt` text present (WCAG requirement)
  - 📦 File size reasonable (warn >500KB, fail >1MB)
  - 🖼️ Modern format variants (WebP/AVIF) exist for large images
  - 📏 No missing files
- **Aggregates by page** to see which pages are heaviest
- **Tracks history** — per-page metrics over time to detect regressions
- **PR comments** — reports issues on pull requests
- **Daily health** — Telegram summary + GitHub issue for systemic problems
- **Fully autonomous** — no external services; all local file system checks

---

## Architecture

```
┌───────────────────────────────┐
│ GitHub Actions                │
│ Trigger: PR to main           │
│ Trigger: Daily 14:00 UTC      │
└───────────┬───────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│ automation/image-optimization-audit.cjs │
│  1. Scan source files (find + regex)   │
│     - <img src alt>                    │
│     - <Image src alt>                  │
│  2. Resolve image paths (public/ folder)│
│  3. Stat each image file                │
│     - size, exists, variants (webp/avif)│
│  4. Build per-page stats                │
│  5. Compare to history                  │
│  6. Alerts + GitHub issues              │
└──────────┬──────────────────────────────┘
           │
           ▼
    ┌──────┴───────┐
    │              │
    ▼              ▼
┌──────────────┐ ┌─────────────────────┐
│ PR Comment   │ │ Telegram Daily      │
│ (summary)    │ │ Summary             │
│              │ │                     │
│ 🚨 Issues:   │ │ 🖼️ Image Audit —   │
│ - Missing alt│ │ Stats + top pages   │
│ - Oversized  │ │                    │
│ - No WebP    │ └─────────────────────┘
└──────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│ GitHub Issue (if ≥3 pages with critical)│
│ - Missing alt across many images        │
│ - Extremely large images                │
│ - Systemic format gaps                  │
└─────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│ State persisted                          │
│ .hermes/memory/image-optimization/       │
│  - history.json (per-page 30d rolling)   │
│  - latest-report.json (current run)      │
│  - image-audit.log                       │
└─────────────────────────────────────────┘
```

---

## Components

| File | Purpose |
|------|---------|
| `automation/image-optimization-audit.cjs` | Source scanner + file stat collector + metrics |
| `.github/workflows/image-optimization-audit.yml` | PR + daily workflow |
| `.hermes/memory/image-optimization/history.json` | Per-page time-series (30 days) |
| `.hermes/memory/image-optimization/latest-report.json` | Current report |
| `docs/IMAGE-OPTIMIZATION-AUDIT.md` | This file |

---

## What Gets Scanned

**Source file patterns:**
- `app/**/*.tsx`
- `app/**/*.ts`
- `components/**/*.tsx`
- `components/**/*.ts`
- `public/**/*.html`

**Detected patterns:**
- `<img src="..." alt="...">`
- Next.js `<Image src="..." alt="..." />`

**Image path resolution:**
- Leading `/` → `public/` folder (Next.js convention)
- Relative paths → resolved from repo root
- External URLs (http...) → skipped (not our assets)

---

## Metrics Collected

| Metric | Unit | Thresholds |
|--------|------|-----------|
| Images scanned | count | — |
| Total image weight | KB | — |
| Missing alt text | count | Any → PR comment; ≥3 pages → issue |
| Oversized images (>500KB) | count | Warning |
| Extremely large (>1MB) | count | Critical |
| No WebP/AVIF variant (for images >50KB) | count | Warning |
| Per-page image weight | KB | Warn >2MB, Fail >5MB |

---

## Thresholds & Actions

| Condition | Severity | Action |
|-----------|----------|--------|
| Any `<img>` without `alt` | Critical | PR comment (blocks merge intent); daily issue if widespread |
| Image file > 1MB | Critical | Listed in PR comment; flagged in daily |
| Image file 500KB–1MB | Warning | Reported |
| Image >50KB without `.webp` or `.avif` variant | Info | Reported (suggest conversion) |
| Page total image weight >5MB | Critical | Daily issue |
| Page total image weight 2–5MB | Warning | Telegram summary |

---

## Report Format

### Telegram Daily Summary
```
🖼️ Image Optimization Audit — May 12, 2026
Base: https://ziontechgroup.com

⚠️ 8 issues across 23 images:
• Missing alt: 5
• Oversized (>500KB): 2
• No WebP/AVIF: 1

Top pages by weight:
• /: 1540KB (12 images)
• /services/ai-consulting: 890KB (5 images)
• /tools: 720KB (4 images)

Details: .hermes/memory/image-optimization/latest-report.json
```

### PR Comment
```
🚨 Image optimization audit found issues

Images: 23 | Total issues: 8
Missing alt: 5
Oversized (>500KB): 2
No WebP/AVIF: 1

See artifact for details. Consider optimizing images before merge.
```
(If clean: `✅ Image audit passed — all images optimized and have alt text.`)

---

## GitHub Issue Example

**Title:** `🚨 Image Optimization Issues — 05/12/2026 — 8 found`

**Body includes:**
- Summary table (missing alt count, oversized count, format gaps)
- Top 10 heaviest pages
- Remediation checklist with commands
- Links to WCAG alt text requirement

**Labels:** `automation`, `performance`, `accessibility`

---

## Configuration

| Env Var | Default | Purpose |
|---------|---------|--------|
| `APP_URL` | `https://ziontechgroup.com` | Base URL (for artifact references) |
| `TELEGRAM_BOT_TOKEN` | — | Enable Telegram alerts |
| `TELEGRAM_CHAT_ID` | `8435383377` | Chat destination |
| `GITHUB_TOKEN` | — | For PR comments + GitHub issues |

---

## Storage

```
.hermes/memory/image-optimization/
├── image-audit.log
├── history.json       # { pages: { "/path": { "2026-05-12": { images, weight, missingAlt, issues[] } } } }
└── latest-report.json # { summary, pageStats: {"/": {images, weight, issues[]}}, issues[] }
```

---

## Testing Locally

1. Run the audit:
   ```bash
   node automation/image-optimization-audit.cjs
   ```

2. Check console output and `latest-report.json`.

3. Force a missing alt to test:
   - Add `<img src="/test.jpg" />` without alt in any component
   - Re-run — should detect `missing_alt` issue

4. Test large image (if you have a big file in `public/`):
   - Ensure it's >1MB → should be flagged critical

---

## Remediation Guide

### 1. Add Alt Text
```tsx
// ❌ Bad
<img src="/logo.png" />

// ✅ Good
<img src="/logo.png" alt="Zion Tech Group logo" />
```
Alt text should be concise, descriptive, and convey purpose.

### 2. Compress Oversized Images
```bash
# Using ImageMagick
convert input.jpg -quality 85 output.jpg

# Using mozjpeg
jpegtran -optimize -progressive -copy none -outfile output.jpg input.jpg

# Using pngquant for PNG
pngquant --quality=65-80 --ext .png --force input.png
```

### 3. Convert to Modern Formats
```bash
# WebP (lossy, ~30% smaller)
cwebp -q 80 input.jpg -o output.webp

# AVIF (even smaller, slower encode)
avifenc --min=0 --max=63 --tier=0 --speed 2 input.png output.avif

# Place alongside original in public/
# Then update Image component: <Image src="/image.webp" ... />
```

### 4. Add Responsive `srcset` for Large Images
```tsx
<img
  src="/hero-large.jpg"
  srcSet="
    /hero-small.jpg 480w,
    /hero-medium.jpg 768w,
    /hero-large.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 1200px"
  alt="Hero image description"
/>
```

### 5. Use Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="Description"
  width={1200}
  height={800}
  priority
/>
```
Next.js automatically optimizes (WebP fallback, lazy loading, size reduction).

---

## Troubleshooting

**"No images found"** — The scanner only looks in `app/`, `components/`, `public/` directories. Ensure images are referenced in those paths.

**"Missing file false positive"** — If using external CDN URLs (e.g., Cloudinary), the script marks them as `external: true` and skips file checks. To suppress, ensure src starts with `http`.

**"False alarm on WebP"** — The script only checks file system siblings. If you dynamically route to WebP via CDN, ignore via `ACCESSIBILITY_IGNORE_RULES` equivalent (not yet implemented; could be added).

**"Scan too slow"** — On large repos, `find` can take time. The script is read-only; consider caching or limiting scope.

**"PR comment not appearing"** — Ensure workflow has `pull-requests: write` permission (it does). Also check `GITHUB_TOKEN` is available.

---

## Future Enhancements

- **Integration with Lighthouse** — combine image weight with overall performance score
- **Visual diff for image changes** — detect if image was unintentionally modified
- **Suggestion engine** — auto-generate alt text by analyzing image filename/context
- **Dynamic import detection** — flag images that could be lazy-loaded but aren't
- **Bundle impact** — calculate actual bytes added to JS bundles by imported images
- **Component-level scan** — parse Storybook stories for image usage
- **Dashboard UI** — `/admin/image-optimization` with weight trends, top offenders
- **Auto-compress CI** — on PR, automatically generate compressed/WebP variants and suggest as commit
- **Ignore list** — config file for intentionally unoptimized assets (e.g., logos with transparency)

---

## Why This Matters

- **Performance:** Images are typically 50–70% of page weight. Optimizing = faster load → better Lighthouse → higher conversion.
- **Accessibility:** Alt text is WCAG 2.1 AA requirement; also boosts SEO.
- **Bandwidth:** Mobile users save data; lower hosting CDN costs.
- **Core Web Vitals:** LCP (Largest Contentful Paint) often an image; serving optimized formats improves LCP.
- **Free & autonomous:** No image CDN fees; automated checking ensures no regressions.

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw (Task #28)*
