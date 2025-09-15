# 🔗 External Link Checker Workflows

This directory contains GitHub Actions workflows for automatically monitoring the health of external links on the Zion Tech Group website.

## 📋 Overview

The link checker workflows automatically:

- ✅ Check external links for broken URLs, timeouts, and errors
- 📊 Generate comprehensive health reports with scoring
- 🚨 Create GitHub issues when problems are detected
- 💬 Comment on pull requests with link health status
- 📈 Track link health over time with detailed metrics

## 🚀 Available Workflows

### 1. Basic Link Checker (`link-checker.yml`)

- **Purpose**: Simple external link validation
- **Frequency**: Weekly (Monday 6 AM UTC)
- **Triggers**: Manual, push to main/develop, pull requests
- **Features**: Basic link checking with simple reporting

### 2. Enhanced Link Checker (`enhanced-link-checker.yml`) ⭐ **Recommended**

- **Purpose**: Comprehensive external link health monitoring
- **Frequency**: Weekly (Monday 6 AM UTC)
- **Triggers**: Manual, push to main/develop, pull requests
- **Features**: Advanced reporting, health scoring, categorization, detailed analytics

## ⚙️ Configuration

### External Links Configuration (`config/external-links.json`)

The enhanced workflow uses a JSON configuration file to define which links to check:

```json
{
  "links": [
    {
      "url": "https://ziontechgroup.com",
      "description": "Main website",
      "category": "primary",
      "expected_status": 200
    }
  ],
  "settings": {
    "check_frequency": "weekly",
    "timeout_seconds": 30,
    "retry_attempts": 3
  }
}
```

#### Link Categories

- **primary**: Critical business links (highest priority)
- **website**: Internal website pages
- **social**: Social media profiles
- **legal**: Legal and compliance pages
- **seo**: SEO and technical pages

## 📊 Health Scoring System

The enhanced workflow provides a comprehensive health scoring system:

| Score Range | Grade | Status    | Description                                |
| ----------- | ----- | --------- | ------------------------------------------ |
| 95-100%     | 🟢 A+ | Excellent | Perfect link health                        |
| 90-94%      | 🟢 A  | Good      | Minor issues, good overall health          |
| 80-89%      | 🟡 B  | Fair      | Some issues need attention                 |
| 70-79%      | 🟠 C  | Poor      | Multiple issues, immediate action needed   |
| <70%        | 🔴 F  | Critical  | Critical issues, urgent attention required |

## 🔧 Customization

### Adding New Links

1. Edit `config/external-links.json`
2. Add new link entries with appropriate categories
3. Commit and push changes
4. The workflow will automatically include new links in the next run

### Modifying Workflow Settings

1. Edit the workflow file (`.github/workflows/enhanced-link-checker.yml`)
2. Adjust timeout, retry, and concurrency settings
3. Modify the schedule if needed
4. Commit and push changes

### Link Categories

You can add custom categories by:

1. Adding new category definitions in the configuration file
2. Updating the workflow to handle new categories
3. Customizing the reporting for category-specific insights

## 📈 Monitoring and Alerts

### Automatic Notifications

- **GitHub Issues**: Created automatically when problems are detected
- **PR Comments**: Link health status posted on pull requests
- **Workflow Artifacts**: Detailed reports stored for 90 days
- **Status Checks**: Workflow status reflects overall link health

### Manual Triggers

- **Manual Run**: Use "workflow_dispatch" to run checks anytime
- **Branch Protection**: Runs automatically on pushes and PRs
- **Scheduled**: Weekly automated checks every Monday

## 🛠️ Troubleshooting

### Common Issues

1. **Configuration File Not Found**
   - Ensure `config/external-links.json` exists
   - Check file path and permissions

2. **Invalid JSON Format**
   - Validate JSON syntax using online tools
   - Check for missing commas or brackets

3. **Link Check Failures**
   - Review workflow logs for specific error messages
   - Verify external services are accessible
   - Check network connectivity from GitHub Actions

4. **Timeout Issues**
   - Increase timeout values in configuration
   - Check if external services are experiencing delays
   - Consider reducing concurrency for slower services

### Debug Mode

To enable debug mode:

1. Add `--verbose` flag to linkinator command
2. Check workflow logs for detailed output
3. Review generated artifacts for troubleshooting

## 📚 Best Practices

### Link Management

1. **Regular Updates**: Keep the external links configuration current
2. **Categorization**: Use meaningful categories for better organization
3. **Priority Management**: Focus on primary and critical links first
4. **Documentation**: Maintain clear descriptions for each link

### Workflow Optimization

1. **Concurrency**: Adjust based on external service limitations
2. **Timeout Settings**: Balance between thoroughness and speed
3. **Retry Logic**: Use appropriate retry codes for transient failures
4. **Scheduling**: Choose times when external services are most reliable

### Reporting

1. **Health Scores**: Monitor trends over time
2. **Category Analysis**: Identify problem areas by category
3. **Response Times**: Track performance improvements
4. **Action Items**: Use recommendations for systematic improvements

## 🔗 Integration

### CI/CD Pipeline

The workflows integrate seamlessly with your CI/CD pipeline:

- Runs on every push and pull request
- Provides status checks for branch protection
- Generates artifacts for deployment verification

### GitHub Features

- **Issues**: Automatic issue creation for problems
- **Pull Requests**: Health status in PR comments
- **Actions**: Detailed workflow execution history
- **Artifacts**: Long-term storage of reports

## 📞 Support

For questions or issues with the link checker workflows:

1. **Check Workflow Logs**: Review detailed execution logs
2. **Review Documentation**: Refer to this README and workflow files
3. **GitHub Issues**: Create issues for workflow problems
4. **Team Collaboration**: Work with the Zion Tech Group development team

## 🚀 Getting Started

1. **Enable Workflows**: Ensure GitHub Actions are enabled for your repository
2. **Review Configuration**: Check `config/external-links.json` for your links
3. **Test Run**: Use "workflow_dispatch" to test the workflow manually
4. **Monitor Results**: Review generated reports and issues
5. **Iterate**: Adjust configuration based on results and requirements

---

_Last updated: January 2026_
_Maintained by: Zion Tech Group Development Team_
