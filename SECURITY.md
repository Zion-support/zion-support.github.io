# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

1. **Do NOT** open a public issue
2. Email security@zion.holdings with details:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

3. Allow us 48-72 hours to respond
4. We will work with you to understand and address the issue

## Security Best Practices

When contributing to this project:

- Never commit sensitive information (API keys, passwords, tokens)
- Use environment variables for configuration
- Follow secure coding practices
- Keep dependencies up to date
- Run security audits regularly: `npm audit`

## Security Features

This project implements:

- Content Security Policy (CSP)
- HTTPS enforcement
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure authentication mechanisms
- Regular security audits

## Disclosure Policy

- Security issues will be disclosed after a fix is available
- We will credit reporters who follow responsible disclosure
- Critical vulnerabilities will be patched within 7 days

Thank you for helping keep Zion.app secure!
