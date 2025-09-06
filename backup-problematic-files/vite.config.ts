import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/
      include: any
      '@':path.resolve(__dirname, './
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
            '@radix-ui/
          'state-vendor':['@reduxjs/
        chunkFileNames: any
          if (/\.(css)$/.test(assetInfo.name || '') return 'css/
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '') return 'images/
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '') return 'fonts/
          return 'assets/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
    exclude:['@radix-ui/
      '@': path.resolve(__dirname, _'./
            '@radix-ui/react-accordion', _'@radix-ui/react-alert-dialog', _'@radix-ui/react-avatar', _'@radix-ui/react-checkbox', _'@radix-ui/react-collapsible', _'@radix-ui/react-dialog', _'@radix-ui/react-dropdown-menu', _'@radix-ui/react-hover-card', _'@radix-ui/react-label', _'@radix-ui/react-menubar', _'@radix-ui/react-navigation-menu', _'@radix-ui/react-popover', _'@radix-ui/react-progress', _'@radix-ui/react-radio-group', _'@radix-ui/react-scroll-area', _'@radix-ui/react-select', _'@radix-ui/react-separator', _'@radix-ui/react-slider', _'@radix-ui/react-slot', _'@radix-ui/react-switch', _'@radix-ui/react-tabs', _'@radix-ui/react-toast', _'@radix-ui/react-toggle', _'@radix-ui/
            'clsx', _'tailwind-merge', _'class-variance-authority', _], _'icons-vendor': ['lucide-react'], _'state-vendor': ['@reduxjs/
        chunkFileNames: any
        assetFileNames: assetInfo => {_if (/\.(css)$/
            return 'css/
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/
            return 'images/
          if (/\.(woff2?|eot|ttf|otf)$/
            return 'fonts/
          return 'assets/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
      '@radix-ui/
    exclude: ['@radix-ui/
      'react', _'react-dom', _'react-router-dom', _'framer-motion', _'lucide-react', _'@radix-ui/react-accordion', _'@radix-ui/react-alert-dialog', _'@radix-ui/react-avatar', _'@radix-ui/react-checkbox', _'@radix-ui/react-collapsible', _'@radix-ui/react-dialog', _'@radix-ui/react-dropdown-menu', _'@radix-ui/react-label', _'@radix-ui/react-popover', _'@radix-ui/react-progress', _'@radix-ui/react-radio-group', _'@radix-ui/react-scroll-area', _'@radix-ui/react-select', _'@radix-ui/react-separator', _'@radix-ui/react-slider', _'@radix-ui/react-slot', _'@radix-ui/react-switch', _'@radix-ui/react-tabs', _'@radix-ui/react-toast', _'@radix-ui/react-tooltip', _], _exclude: ['@radix-ui/