# 🎨 Canonical Content & Design Pattern (Oct 6, 2026)

Single source of truth for all app-network content published on ziontechgroup.com. Mirror of https://github.com/Zion-support/zion-app-network/blob/main/DESIGN_PATTERN.md

## Showcase HTML pattern (required for every batch)
1. Language switcher nav: 🌐 EN · PT · ES · FR · DE
2. H1 with theme emoji + batch title
3. Release line linking to the app network hub
4. Responsive card grid — one card per app: live link (H3), one-line value prop, GitHub link
5. Discovery block: 5 benefits + 2 CTAs (Start Free Discovery → /discovery/, Browse the App Network → /zion-app-network/)
6. Footer: back link to homepage + spotlight doc link
- CSS: shared inline block — system-ui, max-width 960px, #0b5fff primary, .grid/.card/.cta/.disc classes
- hreflang alternates on all 5 variants; <html lang> per variant
- Naming: apps/<month>-<year>-batchNN[-pt|-es|-fr|-de].html

## Indexes updated on every release
- SPOTLIGHTS_INDEX.md (prepend) · APP_NETWORK_LATEST.md

## Translations
See https://github.com/Zion-support/zion-app-network/blob/main/TRANSLATIONS.md — every public page ships in en, pt-BR, es, fr, de.

© 2026 Zion Tech Group — https://ziontechgroup.com