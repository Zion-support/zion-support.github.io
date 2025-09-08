# Zion Tech Group Website

A modern, responsive website built with React, TypeScript, and Vite for Zion Tech Group - a leading technology company specializing in AI solutions, cloud services, and digital transformation.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Optimized for speed and user experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useContext)
- **Package Manager**: npm

## 📁 Project Structure

## Environment Configuration

⚠️ **IMPORTANT**: This project uses **Supabase for authentication** and **Netlify for environment variable management**. Proper configuration is essential for the application to function correctly.

### Authentication Setup

The application uses Supabase for all authentication functionality:
- User registration and login
- Email verification and password reset
- Social authentication (Google, Facebook, GitHub, Microsoft, Twitter)
- Session management and profile handling

### Required Environment Variables

A comprehensive list of environment variables can be found in the `.env.example` file. For local development, create a `.env.local` file and populate it with the necessary values based on `.env.example`. For production deployment (e.g., on Netlify), these variables must be configured in your hosting provider's UI.

**Key variables include:**

-   **Supabase Configuration:**
    -   `NEXT_PUBLIC_SUPABASE_URL`
    -   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    -   `SUPABASE_SERVICE_ROLE_KEY` (for server-side operations)
-   **NextAuth.js Configuration:**
    -   `NEXTAUTH_SECRET` (a randomly generated string for signing tokens)
    -   `NEXTAUTH_URL` (the canonical URL of your application)
-   **OAuth Provider Credentials:**
    -   `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
    -   `FACEBOOK_CLIENT_ID` & `FACEBOOK_CLIENT_SECRET`
    -   `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`
    -   `MICROSOFT_CLIENT_ID` & `MICROSOFT_CLIENT_SECRET` (and potentially `MICROSOFT_TENANT_ID`)
    -   Other provider credentials as needed.
-   **Internal Authentication Service:**
    -   `INTERNAL_AUTH_SERVICE_URL` (if used for specific flows like registration)

Ensure all variables marked as required in `.env.example` or in specific documentation (like `docs/SUPABASE_AUTHENTICATION_SETUP.md`) are correctly set.

### 📚 Detailed Setup Guides

- **[Supabase Authentication Setup](docs/SUPABASE_AUTHENTICATION_SETUP.md)** - Complete guide for configuring Supabase authentication
- **[Netlify Deployment Guide](docs/NETLIFY_DEPLOYMENT_GUIDE.md)** - Step-by-step Netlify deployment with environment variables
- **[Optional Two-Factor Authentication](TWO_FACTOR_AUTHENTICATION_SUMMARY.md)** - Overview of enabling 2FA in the IPO portal
- **[Logging Guidelines](docs/LOGGING_GUIDELINES.md)** - Usage instructions for the project logger
- **Collect Logs** - `npm run logs:collect` bundles recent logs under `logs/archive/`
- **Analyze Logs** - `npm run logs:summary` scans collected logs and reports missing translation keys
- **CSV Log Summary** - `npm run logs:summary:csv` outputs a CSV report of error counts per log file
- **Health Check** - `npm run logs:health` prints a quick system status report
- **Automated Alerts** - `npm run logs:alerts` enables real-time log monitoring and sends alerts to the configured webhook
- **Missing Key Log** - Any translation keys not found at runtime are appended to `logs/missing-keys.log`
- **Bug Logging** - Run `python3 main_app.py` to generate sample bug logs in `logs/bug/bug_log.json`. Use `python3 bug_logger.py --summary` to view a summary of logged issues.

### CDN for Static Assets

To improve performance, the application can serve static assets from a CDN.
Set `NEXT_PUBLIC_CDN_URL` to your CDN domain (e.g., `https://cdn.yourdomain.com`).
When this variable is provided in production builds, Next.js will prefix asset
URLs so they are loaded from the CDN.

### Quick Setup Verification

After setting up environment variables, verify your configuration:

```bash
# Check environment setup
npx ts-node --transpile-only scripts/check-env.ts

# Test Supabase connection (in browser console)
console.log('Supabase configured:', !!window.location.origin.includes('localhost') || !!process.env.NEXT_PUBLIC_SUPABASE_URL)
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ziontechgroup-website.git
   cd ziontechgroup-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors and Theme

The website uses a custom color palette defined in `tailwind.config.js`:

## Integrations

See [docs/Integrations.md](docs/Integrations.md) for information on the Zion Assistant browser extension and Slack bot.
Payment environment variables are documented in [docs/Payments.md](docs/Payments.md).

## Product Media

Product listings now support rich media. The `product_listings` table includes new
`video_url` and `model_url` fields for MP4 videos and GLB 3D models. Upload media
through the product submission form and view it in the gallery tabs (Images, Video, 3D).

## Troubleshooting

### Network Issues

If you see errors related to missing modules like 'react', 'react-dom', or 'lucide-react', your environment may not have internet access to download these dependencies. Options to resolve this:

1. Ensure you have internet connectivity
2. Configure proxy settings if needed: `npm config set proxy http://your-proxy:port`
3. Use a pre-downloaded `node_modules` directory if available

### Package Manager Issues

If you encounter errors running `bun install` (for example, integrity check failures), delete any `bun.lockb` file and run `npm install` instead. This project relies on npm and is not guaranteed to work with Bun. Adding `bun.lockb` to `.gitignore` ensures Bun isn't accidentally used.

For pnpm errors showing "This project is configured to use npm", use `./setup.sh npm` instead as the project may have npm-specific configurations.

If you see a warning about `rimraf@3.0.2` being deprecated, install the latest
version of `rimraf`:

```sh
npm install rimraf@^5 --save-dev
```

### Components

All components are built with TypeScript and follow a consistent design pattern. You can customize:

- **Layout**: Modify header, footer, and sidebar in `src/layout/`
- **Pages**: Update page content in `src/pages/`
- **Components**: Customize reusable components in `src/components/`

## 📱 Pages

1. **Home** (`/`) - Landing page with hero section and services overview
2. **About** (`/about`) - Company information and values
3. **Services** (`/services`) - Detailed service offerings
4. **Pricing** (`/pricing`) - Service pricing plans
5. **Team** (`/team`) - Team member profiles
6. **Careers** (`/careers`) - Job opportunities
7. **Blog** (`/blog`) - Articles and insights
8. **Contact** (`/contact`) - Contact form and information

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

If you don't have network connectivity, run `./offline-dev.sh` to start a
minimal offline server until you can reinstall the packages. This script
provides a basic interface so you can continue working in a limited mode
until dependencies can be installed.

The build process is configured in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
})
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📊 Performance Optimization

- **Code Splitting**: Routes are lazy-loaded for better performance
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size
- **Caching**: Proper cache headers for static assets

## 🔒 Security

- **HTTPS Only**: All external links use HTTPS
- **Content Security Policy**: Configured in production builds
- **Input Validation**: Form inputs are properly validated
- **XSS Protection**: React's built-in XSS protection

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm run test:coverage
```

## 📈 Analytics

The website includes Google Analytics integration. Configure your tracking ID in the environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 302 464 0950
- **Website**: https://ziontechgroup.com

## 🙏 Acknowledgments

- **Design Inspiration**: Modern tech company websites
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS

## 📅 Changelog

### Version 1.0.0 (Current)
- Initial website launch
- Complete page structure
- Responsive design
- SEO optimization
- Performance optimization

---

**Built with ❤️ by the Zion Tech Group Team**

For more information about Zion Tech Group, visit [https://ziontechgroup.com](https://ziontechgroup.com)
