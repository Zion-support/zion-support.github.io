# Deployment Guide

## Production Build

1. Build the application:

```bash
npm run build:netlify
```

2. The build output will be in the `dist` directory.

## Deployment Options

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build:netlify`
3. Set publish directory: `dist`
4. Set Node version to 20 (via Netlify UI or `netlify.toml`)
5. Deploy automatically on push to the `main` branch

### Vercel

1. Import your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Manual Deployment

1. Upload the contents of the `dist` directory to your web server
2. Configure your server to serve `index.html` for all routes
3. Set up proper caching headers

## Environment Variables

Set the following environment variables in production:

```env
VITE_API_URL=https://your-production-api.com
VITE_APP_ENV=production
```

## Monitoring

- Set up error tracking (Sentry, LogRocket)
- Monitor performance metrics
- Set up uptime monitoring

---

This guide reflects the current Netlify setup defined in `netlify.toml` (Node 20, `npm run build:netlify`, publish `dist`).
