#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
// List of files that need fixing;
const filesToFix = [ "pages/ai-services.tsx",
  "pages/blog.tsx",
  "pages/help.tsx",
  "pages/it-services.tsx",
  "pages/micro-saas.tsx",
  "pages/pricing.tsx",
  "pages/privacy.tsx",
  "pages/services/ai-development.tsx",
  "pages/services/cloud-services.tsx",
  "pages/services/web-development.tsx",
  "pages/terms.tsx",
  "components/ContactForm.tsx",
  "components/TestimonialsSection.tsx" ];
function fixStringLiterals(content) {;