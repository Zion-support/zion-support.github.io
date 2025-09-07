# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automating various tasks in the Zion Tech Group application.

## 🔗 Link Checker Workflow

### Overview
The Link Checker workflow automatically monitors the health of external and internal links in your application. It runs weekly and can also be triggered manually or on specific events.

### Features
- **Automated Link Monitoring**: Runs weekly on Mondays at 6 AM
- **Comprehensive Coverage**: Checks both external and internal links
- **Smart Triggering**: Runs on push to main/develop branches and when content changes
- **Detailed Reporting**: Generates comprehensive reports with broken link details
- **Issue Creation**: Automatically creates GitHub issues for broken links
- **PR Comments**: Comments on pull requests with link check results
- **Artifact Storage**: Stores reports for 30 days for historical analysis

### When It Runs
1. **Scheduled**: Every Monday at 6 AM UTC
2. **Manual**: Via workflow dispatch (GitHub UI)
3. **Automatic**: On push to main/develop branches with content changes
4. **Content Changes**: When source files, documentation, or HTML files are modified

### What It Checks

#### External Links
- Main website: https://ziontechgroup.com
- Social media profiles (LinkedIn, Facebook, Instagram, Twitter, YouTube)
- Developer platforms (GitHub, Medium, Dev.to, Hashnode)
- Community platforms (Reddit, Discord, Telegram)
- Content platforms (TikTok, Pinterest)

#### Internal Links
- Built application files (after `npm run build`)
- HTML files with href attributes
- Internal routing and navigation

### Workflow Steps
1. **Checkout**: Retrieves the latest code
2. **Setup**: Installs Node.js and linkinator
3. **Build**: Builds the application to check internal links
4. **External Check**: Verifies all external social media and platform links
5. **Internal Check**: Analyzes internal links in the built application
6. **Analysis**: Generates comprehensive reports
7. **Issue Creation**: Creates GitHub issues for broken links
8. **PR Comments**: Comments on pull requests with results
9. **Artifact Upload**: Stores reports for future reference

### Outputs

#### Reports Generated
- `LINK_REPORT.md`: Comprehensive markdown report
- `link_report.json`: External link check results (JSON)
- `internal_report.json`: Internal link check results (JSON)
- `external_links.txt`: List of external links checked

#### GitHub Actions Artifacts
- **Name**: `link-check-reports`
- **Retention**: 30 days
- **Contents**: All generated reports and data files

### Configuration

#### External Links
To add or modify external links, edit the `external_links.txt` section in the workflow:

```yaml
cat > external_links.txt << 'EOF'
https://ziontechgroup.com
https://github.com/Zion-Holdings
# Add more links here
EOF
```

#### Schedule
To change the schedule, modify the cron expression:

```yaml
schedule:
  - cron: '0 6 * * 1'  # Weekly on Monday at 6 AM
```

Common cron patterns:
- `'0 6 * * 1'` - Weekly on Monday at 6 AM
- `'0 2 * * *'` - Daily at 2 AM
- `'0 6 * * 0,3'` - Twice weekly on Sunday and Wednesday at 6 AM

#### Timeouts
Adjust timeouts for different environments:

```yaml
timeout-minutes: 30  # Overall workflow timeout
--timeout 30000      # External link timeout (30 seconds)
--timeout 15000      # Internal link timeout (15 seconds)
```

### Monitoring and Alerts

#### GitHub Issues
- **Automatic Creation**: Issues are created for broken links
- **Labels**: `link-check`, `automated`, `maintenance`
- **Assignees**: None (can be configured)
- **Content**: Full report with broken link details

#### Pull Request Comments
- **Automatic Comments**: Added to PRs when links are broken
- **Content**: Link check summary and recommendations
- **Trigger**: On PR creation or when links break

#### Workflow Summary
- **GitHub Actions Summary**: Shows results in the Actions tab
- **Status Indicators**: ✅ Success, ⚠️ Warnings, ❌ Failures
- **Metrics**: Total links checked, broken links count

### Troubleshooting

#### Common Issues

1. **Workflow Fails to Start**
   - Check branch permissions
   - Verify workflow file syntax
   - Ensure required permissions are set

2. **Link Check Timeouts**
   - Increase timeout values
   - Reduce concurrency
   - Check network connectivity

3. **Missing Reports**
   - Verify artifact upload step
   - Check file paths and names
   - Review workflow logs

4. **False Positives**
   - Some social media platforms may block automated requests
   - Consider adding exclusions for problematic URLs
   - Implement retry logic for flaky links

#### Debugging
- Check workflow logs in GitHub Actions
- Review generated artifacts
- Verify linkinator installation and configuration
- Test individual links manually

### Best Practices

#### Link Management
1. **Regular Monitoring**: Run checks weekly or more frequently
2. **Quick Response**: Fix broken links within 24-48 hours
3. **Documentation**: Keep external link lists updated
4. **Testing**: Verify links work before adding to workflow

#### Workflow Maintenance
1. **Review Reports**: Check generated reports regularly
2. **Update Links**: Keep external link lists current
3. **Monitor Performance**: Track workflow execution times
4. **Iterate**: Improve workflow based on results

#### Security Considerations
1. **Permissions**: Use minimal required permissions
2. **Secrets**: Avoid storing sensitive URLs in workflow
3. **Rate Limiting**: Respect external service rate limits
4. **Monitoring**: Watch for unusual link check patterns

### Integration with Other Workflows

#### CI/CD Pipeline
- Run link checks before deployment
- Block deployments with broken links
- Include link health in deployment status

#### Quality Gates
- Use link check results in quality metrics
- Include in automated testing
- Report to monitoring dashboards

#### Documentation
- Auto-generate link health reports
- Include in project documentation
- Share with stakeholders

### Future Enhancements

#### Planned Features
- **Custom Link Categories**: Group links by importance or type
- **Slack Notifications**: Send alerts to team channels
- **Dashboard Integration**: Display results in monitoring dashboards
- **Historical Analysis**: Track link health over time

#### Advanced Monitoring
- **Link Performance**: Measure response times
- **Content Validation**: Check for content changes
- **SEO Impact**: Analyze broken link impact on SEO
- **User Experience**: Monitor user-facing link issues

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Linkinator Documentation](https://github.com/JustinBeckwith/linkinator)
- [Cron Expression Generator](https://crontab.guru/)
- [GitHub Actions Examples](https://github.com/actions/starter-workflows)

## 🤝 Contributing

To improve these workflows:
1. Create a feature branch
2. Make your changes
3. Test the workflow locally
4. Submit a pull request
5. Include tests and documentation

## 📞 Support

For workflow issues or questions:
- Check workflow logs and artifacts
- Review this documentation
- Create a GitHub issue
- Contact the development team