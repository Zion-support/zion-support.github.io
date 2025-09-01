import { Navigate, useParams  } from 'react-router-dom';
export default function Page() {
 = useWhitelabel () ;
    if(isLoading) {
        return < Navigate to = "/unauthorized"/>}
    return (<ProtectedRoute>
      <SEO title = {`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`} description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}.Collaborate with your team to find top talent.`}/>;
      <Header customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl} customTheme={effectiveTheme}/>;
      <main className="min - h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var (--background) ' }}>;
        <CompanyDashboard company={company}/>;
      </main>;
      <Footer />;
    </ProtectedRoute>) ;
}
