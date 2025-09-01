<<<<<<< HEAD
export default function CompWorkspace(...args[]):  {

    const { compSlug } = useParams();
    const { user } = useAuth();
    const { comp, isLoading, error } = useCompWorkspace(compSlug);
    const { isWhitelabel, tenant, brandName } = useWhitelabel();
    if (isLoading) {
"
        return <Navigate to = "/unauthorized" />}
    return (<ProtectedRoute>
      <SEO title = {`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`} description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`} />;
      <Header customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl} customTheme={effectiveTheme} />;'"
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)}}>;
        <CompanyDashboard company={company} />;
=======
        <CompanyDashboard company={company}  />;
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      </main>;
      <Footer  />;
    </ProtectedRoute>) }
'"`