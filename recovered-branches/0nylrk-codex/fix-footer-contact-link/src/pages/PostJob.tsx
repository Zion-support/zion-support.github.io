
import { Header } from "@/components/header",
import { Footer } from "@/components/Footer",
import { JobPostingForm } from "@/components/jobs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { useIsMobile } from "@/hooks/use-mobile",export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth(),
  const isMobile = useIsMobile(),
  
  if (isLoading) {
    return (
      <div className=&quot;flex items-center justify-center min-h-screen&quot;>
        <div className=&quot;animate-pulse&quot;>Loading...</div>
      </div>
    )
  }

export default function PostJob() {_const { isAuthenticated, _isLoading} = useAuth();
  const _isMobile = useIsMobile();
  
  if (isLoading) {_return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    );}
  
  return (
    <>
      <SEO 
        title=&quot;Post a Job | Zion AI Marketplace&quot; 
        description=&quot;Post a job to find the perfect AI talent for your project.&quot; 
      />
      <Header />
      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>
        <Card className=&quot;border shadow-md&quot;>          <CardHeader>
            <CardTitle className={_`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>
            <CardDescription>
              Fill out the form below to post your job and find the perfect talent.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <JobPostingForm />
          </CardContent>
        </Card>
      </main>
      <Footer />
      {/* Add extra bottom padding on mobile to account for the bottom nav */}
      {isMobile && <div className=&quot;h-16&quot;></div>}    </>
  )
}
