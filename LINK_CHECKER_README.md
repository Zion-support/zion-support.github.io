# 🔗 Link Checker Workflows

This repository contains automated GitHub Actions workflows for checking the health of links on the Zion Tech Group website.

## 📋 Available Workflows

### 1. Basic External Link Checker (`link-checker.yml`)

- **Purpose**: Checks predefined external links (social media, services, etc.)
- **Scope**: External links only
- **Frequency**: Weekly (Monday at 6 AM UTC)
- **Runtime**: ~30 minutes

### 2. Comprehensive Link Checker (`comprehensive-link-checker.yml`)

- **Purpose**: Comprehensive checking of internal and external links
- **Scope**: Internal links from built website + external links
- **Frequency**: Weekly (Monday at 6 AM UTC)
- **Runtime**: ~45 minutes

## 🚀 Features

### ✅ What Each Workflow Checks

#### Basic External Link Checker

- Social media links (LinkedIn, Facebook, Twitter, Instagram)
- Service provider links (fonts, CDNs)
- Website infrastructure (sitemap, robots.txt)
- Custom external links list

#### Comprehensive Link Checker

- **Internal Links**: All links within the built website
- **External Links**: Predefined external service links
- **Extracted Links**: External links found in website content
- **Built Website**: Links from the compiled/distributed version

### 🔧 Technical Features

- **Concurrent Checking**: Multiple links checked simultaneously
- **Retry Logic**: Failed links are retried automatically
- **Timeout Handling**: Configurable timeouts for slow responses
- **Detailed Reporting**: JSON and Markdown reports
- **Artifact Storage**: Reports saved for 30 days
- **Issue Creation**: Automatic GitHub issues for broken links
- **PR Comments**: Link check results posted on pull requests

## 📅 Scheduling

Both workflows run:

- **Automatically**: Every Monday at 6:00 AM UTC
- **Manually**: Via GitHub Actions "workflow_dispatch" trigger
- **On Push**: When changes are made to markdown, HTML, or React files

## 📊 Reports Generated

### Basic External Link Checker

- `LINK_REPORT.md` - Human-readable summary
- `link_report.json` - Machine-readable data
- `external_links.txt` - List of checked links

### Comprehensive Link Checker

- `COMPREHENSIVE_LINK_REPORT.md` - Detailed analysis
- `combined_report.json` - All results combined
- `internal_links.json` - Internal link results
- `external_links.json` - External link results
- `extracted_external_links.json` - Found external links
- Various supporting files

## 🎯 How to Use

### 1. Manual Execution

1. Go to **Actions** tab in GitHub
2. Select **Link Checker** or **Comprehensive Link Checker**
3. Click **Run workflow**
4. Choose branch and click **Run workflow**

### 2. View Results

1. **Actions** tab → Click on workflow run
2. **Artifacts** section → Download reports
3. **Issues** tab → View any created issues for broken links

### 3. Customize External Links

Edit the `external_links.txt` section in each workflow to add/remove links:

```yaml
cat > external_links.txt << 'EOF'
https://ziontechgroup.com
https://github.com/Zion-Holdings
https://www.linkedin.com/company/zion-tech-group
# Add your custom links here
EOF
```

## 🔍 Understanding Results

### Link States

- **OK**: Link is working correctly
- **BROKEN**: Link returns an error (4xx, 5xx status)
- **TIMEOUT**: Link takes too long to respond
- **SKIP**: Link was skipped due to filters

### Report Sections

1. **Executive Summary**: High-level overview
2. **Statistics**: Counts of different link states
3. **Detailed Analysis**: Specific broken/timeout links
4. **Recommendations**: Action items for fixing issues

## 🛠️ Configuration Options

### Timeouts

```yaml
--timeout 30000 # 30 seconds per link
```

### Concurrency

```yaml
--concurrency 15 # Check 15 links simultaneously
```

### Retry Logic

```yaml
--retry 3 # Retry failed links 3 times
```

### Skip Patterns

```yaml
--skip '.*(logout|signout|auth|login|admin).*'
```

## 📈 Performance Considerations

### Basic External Link Checker

- **Recommended for**: Quick external link health checks
- **Best for**: Social media and service provider monitoring
- **Resource usage**: Low

### Comprehensive Link Checker

- **Recommended for**: Full website health monitoring
- **Best for**: Production deployment validation
- **Resource usage**: Medium (requires building website)

## 🚨 Troubleshooting

### Common Issues

#### Workflow Fails to Start

- Check repository permissions
- Verify workflow file syntax
- Ensure GitHub Actions are enabled

#### No Reports Generated

- Check workflow logs for errors
- Verify linkinator installation
- Check network connectivity

#### Missing Links in Reports

- Verify link format (must start with http:// or https://)
- Check skip patterns aren't too restrictive
- Ensure links are accessible from GitHub Actions runners

### Debug Mode

Add debug output by modifying the linkinator commands:

```yaml
linkinator external_links.txt \
  --format json \
  --concurrency 10 \
  --timeout 30000 \
  --retry 3 \
  --verbose \  # Add this for debug output
  > external_links.json || true
```

## 🔄 Maintenance

### Regular Tasks

1. **Review Reports**: Check weekly reports for patterns
2. **Update Link Lists**: Add new external services
3. **Monitor Performance**: Adjust timeouts and concurrency
4. **Clean Artifacts**: Old reports are automatically cleaned up

### Link List Updates

- Add new social media accounts
- Include new service providers
- Remove deprecated services
- Update changed URLs

## 📚 Additional Resources

### Linkinator Documentation

- [GitHub Repository](https://github.com/JustinBeckwith/linkinator)
- [Command Line Options](https://github.com/JustinBeckwith/linkinator#command-line-options)
- [Configuration Examples](https://github.com/JustinBeckwith/linkinator#examples)

### GitHub Actions

- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Scheduled Events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)
- [Artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)

## 🤝 Contributing

To improve these workflows:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test locally** (if possible)
5. **Submit a pull request**

### Areas for Improvement

- Add more link checking tools
- Improve report formatting
- Add email notifications
- Integrate with monitoring services
- Add link health scoring

## 📞 Support

For issues or questions:

1. Check workflow logs for error details
2. Review this README for configuration help
3. Create an issue in the repository
4. Contact the development team

---

**Last Updated**: January 2026  
**Maintained by**: Zion Tech Group Development Team
