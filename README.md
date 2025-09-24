# Zion App

A modern, high-performance web application built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** with strict type checking
- **Tailwind CSS** for styling
- **Performance monitoring** and optimization
- **Error boundaries** for better error handling
- **Security headers** and best practices
- **Image optimization** with WebP/AVIF support
- **Bundle optimization** with code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript 5.0.0
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: Lucide React, Heroicons
- **Animation**: Framer Motion
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 20.18.1 or higher
- npm 10.0.0 or higher

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run clean` - Clean build artifacts

## 🏗️ Project Structure

```
zion.app/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── lib/                    # Utility functions and configurations
├── public/                 # Static assets
├── styles/                 # Global styles
├── types/                  # TypeScript type definitions
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

### TypeScript Configuration

The project uses strict TypeScript configuration with:
- Strict type checking enabled
- Path mapping for clean imports
- Modern ES2022 target
- Comprehensive type safety rules

### Next.js Configuration

Optimized for performance and security:
- Image optimization with WebP/AVIF
- Bundle optimization with code splitting
- Security headers
- Performance monitoring

### Tailwind CSS

Configured with:
- Custom design system
- Responsive utilities
- Dark mode support
- Performance optimizations

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Bundle Analysis**: Built-in bundle analyzer
- **Performance Monitoring**: Custom performance tracking utilities
- **Caching**: Optimized caching strategies

## 🛡️ Security Features

- **Security Headers**: Comprehensive security headers
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Strict Transport Security
- **Input Validation**: Type-safe input handling

## 🧪 Testing

The project includes:
- Unit tests with Jest
- Type checking with TypeScript
- Linting with ESLint
- Performance testing utilities

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configure environment variables

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code examples

## 🔄 Changelog

### Latest Updates
- Enhanced TypeScript configuration
- Improved performance monitoring
- Better error handling
- Security improvements
- Bundle optimization

---

Built with ❤️ by the Zion team