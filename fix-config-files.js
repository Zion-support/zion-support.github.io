#!/usr/bin/env node

import fs from 'fs';

console.log('🔧 Fixing config files...');

// Fix vite.config.ts
const viteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return \`assets/images/[name]-[hash][extname]\`;
          }
          return \`assets/[name]-[hash][extname]\`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
});
`;

// Fix About.tsx
const aboutComponent = `import React from "react";
import { CheckIcon, UsersIcon, TrophyIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const About: React.FC = () => {
  const stats = [
    { icon: UsersIcon, value: '500+', label: 'Happy Clients' },
    { icon: TrophyIcon, value: '50+', label: 'Awards Won' },
    { icon: LightBulbIcon, value: '1000+', label: 'Projects Completed' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions and services, ensuring every project exceeds expectations.',
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as trusted partners, understanding their unique needs and goals.',
    },
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, building trust through transparency and honesty.',
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Zion Tech Group
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a leading technology company specializing in AI and IT solutions.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">{value.title}</h4>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
`;

try {
  fs.writeFileSync('/workspace/vite.config.ts', viteConfig, 'utf8');
  console.log('✅ Fixed vite.config.ts');
  
  fs.writeFileSync('/workspace/app/components/About.tsx', aboutComponent, 'utf8');
  console.log('✅ Fixed About.tsx');
  
  console.log('🎉 Config files fixed!');
} catch (error) {
  console.error('❌ Error fixing config files:', error.message);
}