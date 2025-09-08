/** @type {import('tailwindcss').Config} */

module.exports = $2;
  content: [
    './pages/**/*.{js,ts,jsx,tsx}./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fade-in': 'fadeIn 0.6s ease-out forwardsfade-in-up': 'fadeInUp 0.6s ease-out forwardsfade-in-down': 'fadeInDown 0.6s ease-out forwardsslide-in-left': 'slideInLeft 0.6s ease-out forwardsslide-in-right': 'slideInRight 0.6s ease-out forwardsscale-in': 'scaleIn 0.6s ease-out forwardsfloat': 'float 6s ease-in-out infinitepulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinitebounce-slow': 'bounce 2s infiniteglow': 'glow 2s ease-in-out infinite alternateshimmer': 'shimmer 2.5s linear infinitematrix': 'matrix 20s linear infiniteneon-pulse': 'neonPulse 1.5s ease-in-out infinitecyber-float': 'cyberFloat 8s ease-in-out infinitehologram': 'hologram 3s ease-in-out infiniteenergy-wave': 'energyWave 4s ease-in-out infinitequantum-spin': 'quantumSpin 6s linear infiniteneural-network': 'neuralNetwork 10s linear infiniteplasma-flow': 'plasmaFlow 5s ease-in-out infinitecyber-grid': 'cyberGrid 15s linear infinite',
        primary: {
          50: '#eff6ff',

          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',

          950: '#172554'
        }
      },
      fontFamily: {
        sans: ['Intersystem-uisans-serif'],
        mono: ['JetBrains MonoFira Codemonospace']},
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]},
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'},
      // Add cursor color palette to match CSS variables
      colors: {
        // ... existing colors ...
        cursor: {
          blue: '#3b82f6blue-hover': '#2563eb',
          accent: '#10b981accent-hover': '#059669',
          purple: '#8b5cf6purple-hover': '#7c3aed',
          light: '#374151',
          lighter: '#4b5563',
          dark: '#1f2937',
          darker: '#111827'}},
      spacing: {
        '18': '4.5rem88': '22rem128': '32rem'},
      borderRadius: {
        '4xl': '2rem5xl': '2.5rem'},
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)'},
      animation: {
        'float': 'float 6s ease-in-out infinitepulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinitebounce-slow': 'bounce 3s infinitespin-slow': 'spin 8s linear infiniteping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinitefade-in': 'fadeIn 0.5s ease-in-outslide-up': 'slideUp 0.5s ease-outscale-in': 'scaleIn 0.3s ease-outshimmer': 'shimmer 2s linear infiniteneon-pulse': 'neonPulse 1.5s ease-in-out infinite alternatematrix-rain': 'matrixRain 20s linear infinitequantum-shift': 'quantumShift 4s ease-in-out infinitespace-drift': 'spaceDrift 8s ease-in-out infiniteai-breathe': 'aiBreathe 3s ease-in-out infinitehologram-flicker': 'hologramFlicker 0.5s ease-in-out infinite alternatecyber-glitch': 'cyberGlitch 0.3s ease-in-out infinite alternateneural-pulse': 'neuralPulse 2s ease-in-out infinitequantum-entangle': 'quantumEntangle 5s ease-in-out infinitespace-time-warp': 'spaceTimeWarp 10s ease-in-out infiniteai-consciousness': 'aiConsciousness 6s ease-in-out infinitebiotech-evolution': 'biotechEvolution 7s ease-in-out infinitemetaverse-float': 'metaverseFloat 4s ease-in-out infinitequantum-compute': 'quantumCompute 8s ease-in-out infinitespace-mining': 'spaceMining 12s ease-in-out infiniteai-emotion': 'aiEmotion 3.5s ease-in-out infinitequantum-security': 'quantumSecurity 5.5s ease-in-out infinitebiotech-dna': 'biotechDNA 6.5s ease-in-out infinitespace-colonization': 'spaceColonization 15s ease-in-out infiniteai-creativity': 'aiCreativity 4.5s ease-in-out infinitequantum-learning': 'quantumLearning 7.5s ease-in-out infinitespace-exploration': 'spaceExploration 20s ease-in-out infiniteai-autonomy': 'aiAutonomy 5.5s ease-in-out infinitequantum-finance': 'quantumFinance 6.5s ease-in-out infinitebiotech-health': 'biotechHealth 4.5s ease-in-out infinitespace-technology': 'spaceTechnology 18s ease-in-out infiniteai-innovation': 'aiInnovation 3.5s ease-in-out infinitequantum-space': 'quantumSpace 25s ease-in-out infinitebiotech-research': 'biotechResearch 8.5s ease-in-out infinitespace-mining-automation': 'spaceMiningAutomation 30s ease-in-out infiniteai-consciousness-evolution': 'aiConsciousnessEvolution 10s ease-in-out infinitequantum-internet-security': 'quantumInternetSecurity 7.5s ease-in-out infinitebiotech-dna-computing': 'biotechDNAComputing 12.5s ease-in-out infinitequantum-financial-trading': 'quantumFinancialTrading 9.5s ease-in-out infinitespace-mining-platform': 'spaceMiningPlatform 35s ease-in-out infinitemetaverse-digital-reality': 'metaverseDigitalReality 6.5s ease-in-out infiniteautonomous-devops': 'autonomousDevOps 8.5s ease-in-out infinitequantum-cloud-infrastructure': 'quantumCloudInfrastructure 15.5s ease-in-out infiniteai-powered-enterprise-security': 'aiPoweredEnterpriseSecurity 6.5s ease-in-out infiniteautonomous-it-operations': 'autonomousITOperations 9.5s ease-in-out infinitezero-trust-architecture': 'zeroTrustArchitecture 7.5s ease-in-out infiniteai-emotion-marketing': 'aiEmotionMarketing 4.5s ease-in-out infinitebiotech-personalized-nutrition': 'biotechPersonalizedNutrition 5.5s ease-in-out infinitequantum-learning-accelerator': 'quantumLearningAccelerator 8.5s ease-in-out infiniteintelligent-data-governance': 'intelligentDataGovernance 6.5s ease-in-out infiniteai-meeting-transcriber': 'aiMeetingTranscriber 4.5s ease-in-out infinite'
        'scale-out': 'scaleOut 0.3s ease-outbounce-in': 'bounceIn 0.6s ease-outbounce-out': 'bounceOut 0.6s ease-outrotate-in': 'rotateIn 0.6s ease-outrotate-out': 'rotateOut 0.6s ease-outflip-in-x': 'flipInX 0.6s ease-outflip-in-y': 'flipInY 0.6s ease-outzoom-in': 'zoomIn 0.3s ease-outzoom-out': 'zoomOut 0.3s ease-outpulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinitespin-slow': 'spin 3s linear infinitebounce-slow': 'bounce 2s infinitegrid-flow': 'gridFlow 20s linear infiniteparticle': 'particle 7s linear infinitescan-line': 'scanLine 3s ease-in-out infinitegradient-x': 'gradientX 3s ease-in-out infinitebounce-x': 'bounceX 2s ease-in-out infinitecount-up': 'countUp 2s ease-out forwards'},
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        },

        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },

        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }

      },
      animationDelay: {
        '2000': '2s4000': '4s'},
      backdropBlur: {
        xs: '2px'},
      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))gradient-mesh': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd)gradient-cyber': 'linear-gradient(45deg, #ff0055, #00ffff, #ffff00, #ff00ff, #8000ff)gradient-quantum': 'linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899, #10b981, #f59e0b)gradient-neon': 'linear-gradient(45deg, #ff0080, #00ffff, #ffff00, #ff00ff, #8000ff)gradient-hologram': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)gradient-space': 'linear-gradient(45deg, #1e3a8a, #7c3aed, #059669, #dc2626, #ea580c)'},
      backgroundSize: {
        'auto': 'autocover': 'covercontain': 'contain200%': '200%300%': '300%400%': '400%500%': '500%'},
      backgroundPosition: {
        'center': 'centertop': 'topbottom': 'bottomleft': 'leftright': 'righttop-left': 'top lefttop-right': 'top rightbottom-left': 'bottom leftbottom-right': 'bottom right'},
      backgroundAttachment: {
        'fixed': 'fixedlocal': 'localscroll': 'scroll'},
      backgroundClip: {
        'border': 'border-boxpadding': 'padding-boxcontent': 'content-boxtext': 'text'},
      backgroundOrigin: {
        'border': 'border-boxpadding': 'padding-boxcontent': 'content-box'},
      backgroundRepeat: {
        'repeat': 'repeatno-repeat': 'no-repeatrepeat-x': 'repeat-xrepeat-y': 'repeat-yrepeat-round': 'repeat-roundrepeat-space': 'repeat-space'},
      backgroundBlendMode: {
        'normal': 'normalmultiply': 'multiplyscreen': 'screenoverlay': 'overlaydarken': 'darkenlighten': 'lightencolor-dodge': 'color-dodgecolor-burn': 'color-burnhard-light': 'hard-lightsoft-light': 'soft-lightdifference': 'differenceexclusion': 'exclusionhue': 'huesaturation': 'saturationcolor': 'colorluminosity': 'luminosity'},
      mixBlendMode: {
        'normal': 'normalmultiply': 'multiplyscreen': 'screenoverlay': 'overlaydarken': 'darkenlighten': 'lightencolor-dodge': 'color-dodgecolor-burn': 'color-burnhard-light': 'hard-lightsoft-light': 'soft-lightdifference': 'differenceexclusion': 'exclusionhue': 'huesaturation': 'saturationcolor': 'colorluminosity': 'luminosity'},
      filter: {
        'none': 'noneblur': 'blur(4px)blur-sm': 'blur(2px)blur-md': 'blur(8px)blur-lg': 'blur(16px)blur-xl': 'blur(24px)blur-2xl': 'blur(40px)blur-3xl': 'blur(64px)brightness': 'brightness(1.1)brightness-75': 'brightness(0.75)brightness-90': 'brightness(0.9)brightness-110': 'brightness(1.1)brightness-125': 'brightness(1.25)brightness-150': 'brightness(1.5)brightness-200': 'brightness(2)contrast': 'contrast(1.1)contrast-75': 'contrast(0.75)contrast-90': 'contrast(0.9)contrast-110': 'contrast(1.1)contrast-125': 'contrast(1.25)contrast-150': 'contrast(1.5)contrast-200': 'contrast(2)grayscale': 'grayscale(1)grayscale-0': 'grayscale(0)hue-rotate': 'hue-rotate(15deg)hue-rotate-30': 'hue-rotate(30deg)hue-rotate-60': 'hue-rotate(60deg)hue-rotate-90': 'hue-rotate(90deg)hue-rotate-180': 'hue-rotate(180deg)invert': 'invert(1)invert-0': 'invert(0)saturate': 'saturate(1.1)saturate-0': 'saturate(0)saturate-50': 'saturate(0.5)saturate-75': 'saturate(0.75)saturate-90': 'saturate(0.9)saturate-110': 'saturate(1.1)saturate-125': 'saturate(1.25)saturate-150': 'saturate(1.5)saturate-200': 'saturate(2)sepia': 'sepia(1)sepia-0': 'sepia(0)drop-shadow': 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))drop-shadow-sm': 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))drop-shadow-md': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))drop-shadow-lg': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))drop-shadow-xl': 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))drop-shadow-2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))drop-shadow-none': 'drop-shadow(0 0 #0000)'},
      backdropFilter: {
        'none': 'noneblur': 'blur(4px)blur-sm': 'blur(2px)blur-md': 'blur(8px)blur-lg': 'blur(16px)blur-xl': 'blur(24px)blur-2xl': 'blur(40px)blur-3xl': 'blur(64px)brightness': 'brightness(1.1)brightness-75': 'brightness(0.75)brightness-90': 'brightness(0.9)brightness-110': 'brightness(1.1)brightness-125': 'brightness(1.25)brightness-150': 'brightness(1.5)brightness-200': 'brightness(2)contrast': 'contrast(1.1)contrast-75': 'contrast(0.75)contrast-90': 'contrast(0.9)contrast-110': 'contrast(1.1)contrast-125': 'contrast(1.25)contrast-150': 'contrast(1.5)contrast-200': 'contrast(2)grayscale': 'grayscale(1)grayscale-0': 'grayscale(0)hue-rotate': 'hue-rotate(15deg)hue-rotate-30': 'hue-rotate(30deg)hue-rotate-60': 'hue-rotate(60deg)hue-rotate-90': 'hue-rotate(90deg)hue-rotate-180': 'hue-rotate(180deg)invert': 'invert(1)invert-0': 'invert(0)saturate': 'saturate(1.1)saturate-0': 'saturate(0)saturate-50': 'saturate(0.5)saturate-75': 'saturate(0.75)saturate-90': 'saturate(0.9)saturate-110': 'saturate(1.1)saturate-125': 'saturate(1.25)saturate-150': 'saturate(1.5)saturate-200': 'saturate(2)sepia': 'sepia(1)sepia-0': 'sepia(0)'},
      transitionProperty: {
        'none': 'noneall': 'allcolors': 'color, background-color, border-color, text-decoration-color, fill, strokeopacity': 'opacityshadow': 'box-shadowtransform': 'transformbackground': 'background-color, background-image, background-position, background-size, background-repeat, background-attachment, background-clip, background-originborder': 'border-color, border-width, border-style, border-radiusspacing': 'margin, padding, width, height, top, right, bottom, lefttypography': 'color, background-color, font-size, font-weight, line-height, text-align, text-decoration, text-transform, letter-spacing, word-spacinglayout': 'display, position, top, right, bottom, left, z-index, float, clear, vertical-align, text-align, white-space, word-break, word-wrap, overflow, overflow-x, overflow-y, clip, visibility, opacity, zoom, cursor, pointer-events, user-select, resize, transition, animation, transform, transform-origin, transform-style, perspective, perspective-origin, backface-visibility'},
      transitionDuration: {
        '75': '75ms100': '100ms150': '150ms200': '200ms300': '300ms500': '500ms700': '700ms1000': '1000ms1500': '1500ms2000': '2000ms3000': '3000ms4000': '4000ms5000': '5000ms'},
      transitionTimingFunction: {
        'linear': 'linearin': 'cubic-bezier(0.4, 0, 1, 1)out': 'cubic-bezier(0, 0, 0.2, 1)in-out': 'cubic-bezier(0.4, 0, 0.2, 1)bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)ease-quantum': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)ease-neon': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)ease-hologram': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)ease-cyberpunk': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)ease-space': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'},
      transitionDelay: {
        '75': '75ms100': '100ms150': '150ms200': '200ms300': '300ms500': '500ms700': '700ms1000': '1000ms1500': '1500ms2000': '2000ms3000': '3000ms4000': '4000ms5000': '5000ms'},
      zIndex: {
        '60': '6070': '7080': '8090': '90100': '100'},
      screens: {
        'xs': '475px3xl': '1600px4xl': '1920px5xl': '2560px'}}},
  plugins: []}
    './pages/**/*.{js,ts,jsx,tsx}./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}},
  plugins: []}


