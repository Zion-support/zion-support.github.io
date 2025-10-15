# Contributing to Zion.app

Thank you for your interest in contributing to Zion.app! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/zion.app.git`
3. Install dependencies: `npm install` or `pnpm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Process

1. **Branch Naming**: Use descriptive branch names
   - Feature: `feature/description`
   - Bug fix: `fix/description`
   - Hotfix: `hotfix/description`

2. **Commits**: Write clear commit messages
   - Use present tense ("Add feature" not "Added feature")
   - Be descriptive but concise
   - Reference issues when applicable

3. **Testing**: Ensure all tests pass before submitting PR
   ```bash
   npm test
   npm run lint
   npm run type-check
   ```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure all tests pass and no linting errors exist
3. Update documentation as needed
4. Request review from maintainers
5. Address review feedback promptly

## Coding Standards

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing code style

## Testing Guidelines

- Write tests for new features
- Maintain test coverage above 80%
- Test edge cases and error conditions
- Use descriptive test names

## Questions?

Feel free to open an issue for questions or discussions about contributing.

Thank you for contributing to Zion.app!
