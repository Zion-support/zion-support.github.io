// Autoheal webhook API endpoint
export default function handler(req: any, res: any) {
  const { app, severity, message, stack } = req.body;
  
  const body = `Auto-healing alert App: ${app}Severity: ${severity}Message: ${message}Stack:\n\n${stack || 'n/a'}`;
  
  res.status(200).json({ message: 'Autoheal webhook endpoint', body });
}