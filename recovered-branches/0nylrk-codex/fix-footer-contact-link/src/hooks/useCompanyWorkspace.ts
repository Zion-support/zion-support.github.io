


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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

            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Business",
          teamSize: 12,
          teamLimit: 50,
          billingCycle: "Annual",
          workspaceUrl: "acme.zion-ai.com"}),

        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
          id: `company-${companySlug}`,
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
          logoUrl: "/placeholder.svg",
          theme: {

            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",

  return { company, isLoading, error }
}