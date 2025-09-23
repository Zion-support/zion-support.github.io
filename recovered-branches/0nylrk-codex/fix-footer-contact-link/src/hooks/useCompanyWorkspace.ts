
import { useState, useEffect } from "react";
import { Company } from "@/components/enterprise/workspace/CompanyDashboard";

export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
    setIsLoading(true);
    setTimeout(() => {
      if (companySlug === "demo" || !companySlug) {
        // Demo company data
        setCompany({
          id: "company-123",
          name: "Acme Corporation",
          logoUrl: "/placeholder.svg",
          theme: {
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
