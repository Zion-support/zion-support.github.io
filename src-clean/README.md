# Zion Tech Group - Technology Solutions

A modern, responsive website for Zion Tech Group, showcasing our comprehensive technology services including AI, Cloud, Cybersecurity, and Data Analytics solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Service Showcase**: Detailed information about our technology services
- **Contact Form**: Interactive contact form with validation
- **Performance Optimized**: Fast loading with modern React practices
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 Pages

- **Home**: Company overview, services preview, and contact information
- **Services**: Detailed service offerings with pricing and features
- **Contact**: Contact form and company information
- **404**: Custom error page with navigation options

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zion-tech-group
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Colors

The application uses a custom color palette defined in `tailwind.config.js`:

- **Zion Blue**: Primary brand color
- **Zion Cyan**: Accent color
- **Zion Purple**: Secondary accent
- **Zion Slate**: Text and background colors

### Styling

Custom CSS classes are defined in `src/index.css`:
- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.card`: Card component styling

## 📁 Project Structure

```
src/
├── pages/           # Page components
│   ├── Home.tsx     # Homepage
│   ├── Services.tsx # Services page
│   ├── Contact.tsx  # Contact page
│   └── NotFound.tsx # 404 page
├── App.tsx          # Main app component
├── main.tsx         # App entry point
├── index.css        # Global styles
└── App.css          # App-specific styles
```

## 🔧 Configuration

### Vite Configuration

The build tool is configured in `vite.config.ts` with:
- React plugin
- Path aliases (@/ for src/)
- Development server on port 3000
- Source maps for production builds

### TypeScript Configuration

TypeScript is configured in `tsconfig.json` with:
- Strict mode enabled
- Path mapping for imports
- Modern ES2020 target

## 📊 Performance

- **Lazy Loading**: Components are loaded on demand
- **Code Splitting**: Automatic code splitting by routes
- **Optimized Images**: Placeholder for image optimization
- **Minimal Dependencies**: Only essential packages included

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Contact Information

- **Phone**: +1 (302) 464-0950
- **Email**: kleber@ziontechgroup.com
- **Address**: 364 E Main St STE 1008, Middletown DE 19709
- **Hours**: Monday - Friday: 9:00 AM - 6:00 PM EST

## 📝 License

This project is proprietary to Zion Tech Group.

## 🤝 Contributing

For internal development and contributions, please follow the established coding standards and review process.

---

Built with ❤️ by Zion Tech Group