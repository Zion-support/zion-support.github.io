# Development Guide

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
├── services/      # API services
├── types/         # TypeScript type definitions
└── styles/        # CSS and styling files
```

## Development Workflow

1. Create a feature branch from main
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Submit a pull request

## Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

## Testing

- Write unit tests for utilities and hooks
- Write component tests using React Testing Library
- Write integration tests for critical user flows

## Performance

- Use React.memo for expensive components
- Implement proper loading states
- Optimize bundle size with code splitting

---
*Generated automatically by Smart Documentation Generator*
