
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Company } from "@/components/enterprise/workspace/CompanyDashboard",
=======
import { useState, useEffect } from &quot;react&quot;;
import { Company } from &quot;@/components/enterprise/workspace/CompanyDashboard&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
    setIsLoading(true),
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
<<<<<<< HEAD
          billingCycle: "Annual",
          workspaceUrl: "acme.zion-ai.com"}),
        setError(null)
=======
          billingCycle: &quot;Annual&quot;,
          workspaceUrl: &quot;acme.zion-ai.com&quot;});
        setError(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai.com`}),
        setError(null)
=======
          billingCycle: &quot;Monthly&quot;,
          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import { useState, useEffect } from "react",;
import { Company } from "@/components/enterprise/workspace/CompanyDashboard",;
export function useCompanyWorkspace(companySlug?: string) {;
  const [company, setCompany] = useState<Company | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  useEffect(() => {;
    // In a real app, this would fetch data from an API based on the companySlug;
    // For now, we'll simulate a delay and return mock data;
    setIsLoading(true),;
    setTimeout(() => {;
      if (companySlug === "demo" || !companySlug) {;
        // Demo company data;
        setCompany({;
          id: "company-123",;
          name: "Acme Corporation",;
          logoUrl: "/placeholder.svg",;
          theme: {;
            primaryColor: "#4f46e5",;
            backgroundColor: "#ffffff",;
            textColor: "#1f2937"},;
          plan: "Business",;
          teamSize: 12,;
          teamLimit: 50,;
          billingCycle: "Annual",;
          workspaceUrl: "acme.zion-ai.com"}),;
        setError(null);
      } else {;
        // For any other slug, we could check if it's a valid company;
        // For demo purposes, let's assume it exists;
        setCompany({;
          id: `company-${companySlug}`,;
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),;
          logoUrl: "/placeholder.svg",;
          theme: {;
            primaryColor: "#4f46e5",;
            backgroundColor: "#ffffff",;
            textColor: "#1f2937"},;
          plan: "Teams",;
          teamSize: 5,;
          teamLimit: 10,;
          billingCycle: "Monthly",;
          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
      setIsLoading(false);
    }, 1000), // Simulate loading delay;
  }, [companySlug]);
  return { company, isLoading, error }
}
;