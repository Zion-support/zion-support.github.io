# Contributing to Zion Tech Group Website

Thank you for considering contributing to the Zion Tech Group website! This document provides guidelines and instructions for contributing.

## Development Setup

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation
```bash
# Clone the repository
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Code Quality Standards

### Before Submitting
All contributions must pass the following checks:

```bash
# Run type checking
pnpm run type-check

# Run linting
pnpm run lint

# Run tests
pnpm run test

# Run all checks
pnpm run health-check
```

### Code Style
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Write tests for new features

### Performance Guidelines
- Use lazy loading for heavy components
- Optimize images before committing
- Avoid unnecessary re-renders
- Use React.memo and useMemo appropriately
- Keep bundle size minimal

## Project Structure

```
zion.app/
├── app/              # Next.js app directory
│   ├── components/   # React components
│   ├── utils/        # Utility functions
│   └── hooks/        # Custom React hooks
├── src/              # Source code
│   ├── components/   # Shared components
│   └── utils/        # Shared utilities
├── __tests__/        # Test files
└── public/           # Static assets
```

## Testing

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests
- Write unit tests for utility functions
- Write integration tests for components
- Aim for >80% code coverage
- Use descriptive test names

## Performance Testing

```bash
# Run performance audit
pnpm perf:audit

# Analyze bundle size
pnpm analyze
```

## Commit Guidelines

### Commit Message Format
```
type(scope): subject

body

footer
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(homepage): add interactive AI ROI calculator

fix(cache): resolve memory leak in cache manager

perf(images): implement lazy loading for hero images
```

## Pull Request Process

1. **Create a branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them
   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```

3. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Use a clear, descriptive title
   - Include a detailed description
   - Reference any related issues
   - Add screenshots for UI changes

5. **Wait for review**
   - Address reviewer feedback
   - Keep the PR up to date with main
   - Ensure all checks pass

## Reporting Issues

### Bug Reports
Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (browser, OS, etc.)

### Feature Requests
Include:
- Clear description of the feature
- Use cases and benefits
- Potential implementation approach
- Mockups or examples if applicable

## Code Review Guidelines

### For Authors
- Keep PRs focused and small
- Write clear commit messages
- Add tests for new features
- Update documentation
- Respond to feedback promptly

### For Reviewers
- Be respectful and constructive
- Focus on code quality and standards
- Check for performance implications
- Verify tests are included
- Approve when ready

## Development Best Practices

### TypeScript
- Enable strict mode
- Avoid `any` types
- Use type inference where possible
- Create interfaces for complex types

### React
- Use functional components
- Implement proper error boundaries
- Optimize re-renders with React.memo
- Use custom hooks for shared logic

### Performance
- Monitor bundle size
- Implement code splitting
- Use dynamic imports
- Optimize images and assets

### Accessibility
- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation
- Test with screen readers

### Security
- Sanitize user inputs
- Use environment variables for secrets
- Follow OWASP guidelines
- Keep dependencies updated

## Getting Help

- Open an issue for questions
- Check existing documentation
- Review closed issues and PRs
- Contact the maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to reach out to the maintainers at info@zion.app