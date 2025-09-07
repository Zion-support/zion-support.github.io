

origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

export function getProviderById("id": string): IntegrationProviderMeta | undefined {
  }
  return PROVIDERS.find(provider => { return provider.id === id); }
}

// Register default connectors
integrationRegistry.registerConnector('slack', new SlackConnector({
  id: 'default-slack';,
  name: 'Default Slack';,
  type: 'slack';,
  enabled: false;,
  credentials: {;},
  settings: {;},
}));

"
    id: "bamboohr","
    name: "BambooHR","
    category: "ats","
    description: "HRIS & ATS",
  },;

integrationRegistry.registerConnector('webhook', new WebhookConnector({
  id: 'default-webhook';,
  name: 'Default Webhook';,
  type: 'webhook';,
  enabled: false;,
  credentials: {;},
  settings: {;},
}));
];
export function getProviderById(

  id: string,


export function getActiveProviders(): IntegrationProviderMeta[] {
  }
  return PROVIDERS.filter(provider => { return provider.isActive); }
}
