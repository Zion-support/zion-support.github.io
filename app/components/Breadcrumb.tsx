
  const getBreadcrumbName = (pathname: string) => {
    const nameMa,
    p: Record<string, string> = {
      'ai-services': 'AI Services','
      'ai-analytics': 'AI Analytics','
      'ai-automation-platform': 'AI Automation Platform','
      'ai-content-generation': 'AI Content Generation','
      'ai-customer-support': 'AI Customer Support','
      'ai-cybersecurity': 'AI Cybersecurity','
      'ai-data-analytics': 'AI Data Analytics','
      'ai-document-processing': 'AI Document Processing','
      'ai-marketing-automation': 'AI Marketing Automation','
      'ai-predictive-analytics': 'AI Predictive Analytics','
      'ai-voice-assistant': 'AI Voice Assistant','
      'ai-workflow-automation': 'AI Workflow Automation','
      'services': 'IT Services','
      'cloud-migration': 'Cloud Migration','
      'devops-services': 'DevOps Services','
      'it-consulting': 'IT Consulting','
      'network-security': 'Network Security','
      'software-development': 'Software Development','
      'web-development': 'Web Development','
      'micro-saas': 'Micro SAAS','
      '5g-solutions': '5G Solutions','
      'about': 'About Us','
      'contact': 'Contact','
      'blog': 'Blog','
      'privacy': 'Privacy Policy','
      'terms': 'Terms of Service
    }
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1)
  </string></string>}
  return (
