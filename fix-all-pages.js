
export default ${componentName};`
// Get all AI service pages from App.tsx;
const aiServicePages  = []': value"'ai-analytics', 'ai-automation', 'ai-chatbot-builder', 'ai-cybersecurity'"'ai-crm', 'ai-data-analytics', 'ai-healthcare', 'ai-financial-services'"'ai-computer-vision', 'ai-voice-solutions', 'ai-ecommerce-solutions'"'ai-hr-solutions', 'ai-content-generation', 'ai-workflow-automation'"'ai-document-processing', 'ai-predictive-analytics', 'ai-edge-computing'"'ai-video-analysis', 'ai-speech-synthesis', 'ai-recommendation-engine'"'ai-sentiment-analysis', 'ai-chatbot-enterprise', 'ai-content-moderation'"'ai-predictive-modeling', 'ai-document-intelligence', 'ai-conversation-analytics'"'ai-supply-chain-ai', 'ai-healthcare-diagnostics', 'ai-financial-forecasting'"'ai-iot-analytics', 'ai-conversational-ai', 'ai-automated-testing'"'ai-knowledge-management', 'ai-customer-churn', 'ai-automated-reporting'"'ai-voice-assistant', 'ai-content-generation-pro'"'""
]
const allPages  = []: value;
  ...aiServicePages;
  ...itServicePages;
  ...microSaasPages;
  ...emergingTechPages;
  ...companyPages;
  ...resourcePages;;
]'"""''"'
 `'use client'"";"
  return ()
    <div>Content</div>
  )
    fs.mkdirSync(pageDir, { recursive: true })
  // Overwrite page file with correct template;
fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName))
})'"''"'
console.log('All pages fixed!')"'"'";"
