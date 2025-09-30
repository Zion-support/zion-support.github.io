# Security Alert: Vulnerabilities Detected

## Summary
Security vulnerabilities have been detected in the project dependencies during automated security scanning.

## Details
- **Detection Date**: {{ date }}
- **Workflow**: Security
- **Branch**: {{ github.ref }}
- **Commit**: {{ github.sha }}

## Actions Required
1. Review the security report artifacts
2. Update vulnerable dependencies
3. Test the application after updates
4. Re-run security checks

## Next Steps
- [ ] Review `npm audit` output
- [ ] Update packages with `npm update`
- [ ] Check for breaking changes
- [ ] Test application functionality
- [ ] Commit and push updates
- [ ] Re-run security workflow

## Resources
- [npm audit documentation](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [npm outdated documentation](https://docs.npmjs.com/cli/v8/commands/npm-outdated)
- [Security best practices](https://docs.github.com/en/code-security/security-advisories)

---
*This issue was automatically created by the Security workflow.*