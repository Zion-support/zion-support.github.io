

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
        title="Post a Job | Zion AI Marketplace" 
        description="Post a job to find the perfect AI talent for your project." 
      />
      <Header />
      <main className={_`container mx-auto px-${isMobile ? '2' : '4'} py-${_isMobile ? '6' : '12'} max-w-4xl`}>
        <Card className="border shadow-md">
          <CardHeader>
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
      {_/* Add extra bottom padding on mobile to account for the bottom nav */}
      {_isMobile && <div className="h-16"></div>}
    </>
  );
}
