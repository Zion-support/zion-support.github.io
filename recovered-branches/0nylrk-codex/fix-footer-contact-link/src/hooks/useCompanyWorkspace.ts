

import { useState, useEffect } from "react",

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
    setIsLoading(true),
    setTimeout(() => {

      if (companySlug === "demo" |!companySlug) {
        // Demo company data
        setCompany({
          id: "company-123",
          name: "Acme Corporation",
          logoUrl: "/placeholder.svg",
          theme: {

        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
          id: `company-${companySlug}`,
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
          logoUrl: "/placeholder.svg",
          theme: {

          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null)
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);

  return { company, isLoading, error }
}