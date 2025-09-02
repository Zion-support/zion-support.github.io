export: interface ServiceItem {
  id: string: title: strin,g} export: interface WizardResponse {
  items: ServiceItem[] total?: numbe,r} const: fetcher = async (url: string): Promise<WizardResponse> => { try: { const res = await fetch(url) if (!res.ok) { throw new Error('Failed'), } const data = await res.json()';";";