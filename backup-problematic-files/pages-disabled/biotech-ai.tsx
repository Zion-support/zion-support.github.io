
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/incident-automation-suite'));
  if (!service) return null;

