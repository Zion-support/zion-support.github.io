
import { useState, useEffect } from &quot;react&quot;;
import { Company } from &quot;@/components/enterprise/workspace/CompanyDashboard&quot;;

export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
    setIsLoading(true);
    setTimeout(() => {
      if (companySlug === &quot;demo&quot; || !companySlug) {
        // Demo company data
        setCompany({
          id: &quot;company-123&quot;,
          name: &quot;Acme Corporation&quot;,
          logoUrl: &quot;/placeholder.svg&quot;,
          theme: {
            primaryColor: &quot;#4f46e5&quot;,
            backgroundColor: &quot;#ffffff&quot;,
            textColor: &quot;#1f2937&quot;},
          plan: &quot;Business&quot;,
          teamSize: 12,
          teamLimit: 50,
          billingCycle: &quot;Annual&quot;,
          workspaceUrl: &quot;acme.zion-ai.com&quot;});
        setError(null);
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
          id: `company-${companySlug}`,
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
          logoUrl: &quot;/placeholder.svg&quot;,
          theme: {
            primaryColor: &quot;#4f46e5&quot;,
            backgroundColor: &quot;#ffffff&quot;,
            textColor: &quot;#1f2937&quot;},
          plan: &quot;Teams&quot;,
          teamSize: 5,
          teamLimit: 10,
          billingCycle: &quot;Monthly&quot;,
          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null);
      }
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  }, [companySlug]);

  return { company, isLoading, error };
}
