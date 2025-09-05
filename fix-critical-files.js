    { &quot;to&quot;: &quot;/services/ai-seo-optimizer&quot;, &quot;label&quot;: &quot;AI SEO Optimizer&quot; };

  ],
  return (,
    <div className=&quot;min-h-screen bg-gray-50 py-12&quot;>,
      <div className=&quot;max-w-7xl mx-auto px-4 &quot;sm&quot;: px-6 lg: px-8&quot;>,
        <div className=&quot;text-center mb-12&quot;>,
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>,
            Our Services,
          </h1>,
          <p className=&quot;text-xl text-gray-600&quot;>,
            Comprehensive technology solutions for your business,
          </p>,
        </div>,
        <div className=&quot;grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6&quot;>,
          {links.map((link, index) => (,
            <Link,
              key={index};
              to={link.to};
              className=&quot;block p-6 bg-white rounded-lg shadow-md &quot;hover&quot;: shadow-lg transition-shadow&quot;,
            >,
              <h3 className=&quot;text-lg font-semibold text-gray-900&quot;>,
                {link.label};
  )};
export default ServicesIndex,
&quot;,
  fs.writeFileSync(&quot;src/pages/services/index.tsx&quot;, content),
  // console.log(&quot;Fixed src/pages/services/index.tsx&quot;)};
  // console.log(&quot;Fixed vitest.config.ts&quot;)};
,
// Run the fixes,
// console.log(&quot;Starting critical file fixes...&quot;),
try {,
  fixServicesIndex(),
  fixSolutions(),
  fixTailwindConfig(),
  fixViteConfig(),
  fixVitestConfig(),
  // console.log(&quot;All critical files have been fixed!&quot;)} catch (error) {,
  console.error(&quot;Error fixing &quot;files&quot;: &quot;, error),
  process.exit(1)};
#!/usr/bin/env node, import fs from &quot;fs&quot;;
import path from &quot;path&quot;, const criticalFiles = [ &quot;src/pages/services/index.tsx&quot;, &quot;src/pages/solutions.tsx&quot;, &quot;tailwind.config.ts&quot;, &quot;vite.config.ts&quot;, &quot;vitest.config.ts&quot; ], function $1() { const content = `import React from &quot;react&quot;;
import { Link } from &quot;react-router-dom&quot;, const ServicesIndex: React.FC  = () = > { const links = [ { to: &quot;/ai-services&quot;,label: &quot;AI Services&quot; }, { to: &quot;/it-services&quot;,label: &quot;IT Services&quot; }, { to: &quot;/micro-saas&quot;,label: &quot;Micro SaaS&quot; }, { to: &quot;/services/ai-email-responder&quot;,label: &quot;AI Email Responder&quot; }, { to: &quot;/services/automated-follow-ups&quot;,label: &quot;Automated Follow-Ups&quot; }, { to: &quot;/services/ai-seo-optimizer&quot;,label: &quot;AI SEO Optimizer&quot; } ], return (, <div className = &quot;min-h-screen bg-gray-50 py-12&quot;> <div className = &quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;> <div className = &quot;text-center mb-12&quot;> <h1 className = &quot;text-4xl font-bold text-gray-900 mb-4&quot;> Our Services ></div> <p className = &quot;text-xl text-gray-600&quot;> Comprehensive technology solutions for your business ></div> ></div> <div className = &quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;> {links.map((link,index) = > (, <Link; key = {index} to = {link.to} className = &quot;block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow&quot; > <h3 className = &quot;text-lg font-semibold text-gray-900&quot;> {link.label} ></div> ></div> ))} ></div> ></div> ></div> )} export default ServicesIndex; `, fs.writeFileSync(&quot;src/pages/services/index.tsx&quot;,content), // console.log(&quot;Fixed src/pages/services/index.tsx&quot;)} , function fixSolutions() { const content = `import React from &quot;react&quot;;
import Head from &quot;next/head&quot;;
import Link from &quot;next/link&quot;, export default function Solutions() { return (; <> <Head> <title>Solutions - Zion Tech Group> </div> <meta name = &quot;description&quot; content = &quot;Technology solutions for your business&quot; /> ></div> <main className = &quot;min-h-screen bg-white&quot;> <div className = &quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20&quot;> <div className = &quot;text-center mb-16&quot;> <h1 className = &quot;text-4xl font-bold text-gray-900 mb-6&quot;> Our Solutions ></div> <p className = &quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;> Tailored technology solutions to meet your specific needs. ></div> ></div> <div className = &quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;> <div className = &quot;p-6 border border-gray-200 rounded-lg&quot;> <h3 className = &quot;text-xl font-semibold text-gray-900 mb-4&quot;> Enterprise Solutions ></div> <p className = &quot;text-gray-600 mb-4&quot;> Scalable solutions for large organizations. ></div> <p className = &quot;text-blue-600 font-semibold&quot;>Custom pricing> </div> ></div> <div className = &quot;p-6 border border-gray-200 rounded-lg&quot;> <h3 className = &quot;text-xl font-semibold text-gray-900 mb-4&quot;> SMB Solutions ></div> <p className = &quot;text-gray-600 mb-4&quot;> Cost-effective solutions for small businesses. ></div> <p className = &quot;text-blue-600 font-semibold&quot;>Starting from $1,000/month> </div> ></div> <div className = &quot;p-6 border border-gray-200 rounded-lg&quot;> <h3 className = &quot;text-xl font-semibold text-gray-900 mb-4&quot;> Startup Solutions ></div> <p className = &quot;text-gray-600 mb-4&quot;> Innovative solutions for growing startups. ></div> <p className = &quot;text-blue-600 font-semibold&quot;>Starting from $800/month> </div> ></div> ></div> <div className = &quot;text-center mt-12&quot;> <Link href = &quot;/contact&quot; className = &quot;bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors&quot;> Learn More ></div> ></div> ></div> ></div> ></div> )} `, fs.writeFileSync(&quot;src/pages/solutions.tsx&quot;,content), // console.log(&quot;Fixed src/pages/solutions.tsx&quot;)} , function fixTailwindConfig() { const content = `import type { Config } from &quot;tailwindcss&quot;, export default { content: [ &quot;./src/pages*.{js;ts,jsx,tsx,mdx}&quot;, &quot;./src/components*.{js,ts,jsx,tsx,mdx}&quot;, &quot;./src/app*.{js,ts,jsx,tsx,mdx}&quot; ], darkMode: &quot;class&quot;, theme: { extend: { colors: { zion: { 50: &quot;#f0f9ff&quot;, 100: &quot;#e0f2fe&quot;, 200: &quot;#bae6fd&quot;, 300: &quot;#7dd3fc&quot;, 400: &quot;#38bdf8&quot;, 500: &quot;#0ea5e9&quot;, 600: &quot;#0284c7&quot;, 700: &quot;#0369a1&quot;, 800: &quot;#075985&quot;, 900: &quot;#0c4a6e&quot;, 950: &quot;#082f49&quot;}, gray: { 950: &quot;#0a0a0a&quot;, 960: &quot;#050505&quot;, 970: &quot;#030303&quot;, 980: &quot;#020202&quot;, 990: &quot;#010101&quot;}, accent: { cyan: &quot;#06b6d4&quot;, blue: &quot;#3b82f6&quot;, purple: &quot;#8b5cf6&quot;, pink: &quot;#ec4899&quot;, emerald: &quot;#10b981&quot;, amber: &quot;#f59e0b&quot;, rose: &quot;#f43f5e&quot;}}, animation: { &quot;gradient&quot;: &quot;gradient 6s ease infinite&quot;, &quot;pulse-slow&quot;: &quot;pulse 4s cubic-bezier(0.4,0,0.6,1) infinite&quot;, &quot;bounce-slow&quot;: &quot;bounce 3s infinite&quot;, &quot;spin-slow&quot;: &quot;spin 8s linear infinite&quot;}, keyframes: { gradient: { &quot;0%,100%&quot;: { &quot;background-size&quot;: &quot;200% 200%&quot;, &quot;background-position&quot;: &quot;left center&quot;}, &quot;50%&quot;: { &quot;background-size&quot;: &quot;200% 200%&quot;, &quot;background-position&quot;: &quot;right center&quot;}}}, fontFamily: { sans: [&quot;Inter&quot;,&quot;system-ui&quot;,&quot;sans-serif&quot;]}}}, plugins: [ require(&quot;@tailwindcss/forms&quot;), require(&quot;@tailwindcss/typography&quot;), require(&quot;@tailwindcss/aspect-ratio&quot;) ]} satisfies Config, `, fs.writeFileSync(&quot;tailwind.config.ts&quot;,content), // console.log(&quot;Fixed tailwind.config.ts&quot;)} , function fixViteConfig() { const content = `import { defineConfig } from &quot;vite&quot;;
import react from &quot;@vitejs/plugin-react&quot;, export default defineConfig({ plugins: [react()]; server: { port: 3000}}), `, fs.writeFileSync(&quot;vite.config.ts&quot;,content), // console.log(&quot;Fixed vite.config.ts&quot;)} , function fixVitestConfig() { const content = `import { defineConfig } from &quot;vitest/config&quot;;
import react from &quot;@vitejs/plugin-react&quot;, export default defineConfig({ plugins: [react()]; test: { environment: &quot;jsdom&quot;}}), `, fs.writeFileSync(&quot;vitest.config.ts&quot;,content), // console.log(&quot;Fixed vitest.config.ts&quot;)} , // console.log(&quot;Starting critical file fixes...&quot;), try { fixServicesIndex(), fixSolutions(), fixTailwindConfig(), fixViteConfig(), fixVitestConfig(), // console.log(&quot;All critical files have been fixed!&quot;)} catch (error) { console.error(&quot;Error fixing files: &quot;,error), process.exit(1)};
#!/usr/bin/env node, import fs from &quot;fs&quot;;
import path from &quot;path&quot;, const criticalFiles = [ &quot;src/pages/services/index.tsx&quot;,&quot;src/pages/solutions.tsx&quot;,&quot;tailwind.config.ts&quot;,&quot;vite.config.ts&quot;,&quot;vitest.config.ts&quot;], function $1() { const content = `import React from &quot;react";

