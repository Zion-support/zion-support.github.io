#!/bin/bash

# Fix app/automation/page.tsx
sed -i '/export const metadata: Metadata = {/,/}/d' app/automation/page.tsx
sed -i '/import { Metadata } from '\''next'\''/a export const metadata: Metadata = {\n  title: "Automation - Zion Holdings",\n  description: "Intelligent automation solutions for your business"\n}' app/automation/page.tsx

# Fix app/ai-2026-ultimate-business-transformation/page.tsx
sed -i '/export const metadata: Metadata = {/,/}/d' app/ai-2026-ultimate-business-transformation/page.tsx
sed -i '/import { Metadata } from '\''next'\''/a export const metadata: Metadata = {\n  title: "AI 2026 Ultimate Business Transformation - Zion Holdings",\n  description: "Complete business transformation through advanced AI technologies for 2026"\n}' app/ai-2026-ultimate-business-transformation/page.tsx

# Fix app/ai-2026-ultimate-comprehensive-guide/page.tsx
sed -i '/export const metadata: Metadata = {/,/}/d' app/ai-2026-ultimate-comprehensive-guide/page.tsx
sed -i '/import { Metadata } from '\''next'\''/a export const metadata: Metadata = {\n  title: "AI 2026 Ultimate Comprehensive Guide - Zion Holdings",\n  description: "Complete guide to AI technologies and implementation for 2026"\n}' app/ai-2026-ultimate-comprehensive-guide/page.tsx

# Fix app/autonomous-systems-2026/page.tsx
sed -i '/export const metadata: Metadata = {/,/}/d' app/autonomous-systems-2026/page.tsx
sed -i '/import { Metadata } from '\''next'\''/a export const metadata: Metadata = {\n  title: "Autonomous Systems 2026 - Zion Holdings",\n  description: "Next-generation autonomous systems and AI technologies for 2026"\n}' app/autonomous-systems-2026/page.tsx