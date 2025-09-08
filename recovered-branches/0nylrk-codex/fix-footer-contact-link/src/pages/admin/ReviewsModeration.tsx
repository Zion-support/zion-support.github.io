
  const handleRefresh = () => {;
    fetchReviews();
  };
  }
  useEffect(() => {
    fetchReviews()
  }, [activeTab]);

  const handleRefresh = () => {
    fetchReviews()
  }



    <>;
      <SEO"
        title="Review Moderation | Zion AI Marketplace""
        description="Moderate and manage reviews in the Zion AI Marketplace"
      />
      <AppHeader />"
      <main className="container mx-auto px-4 py-8">"
        <div className="flex justify-between items-center mb-8">
          <div>"
            <h1 className="text-3xl font-bold">Review Moderation</h1>"
            <p className="text-muted-foreground mt-1">
              Manage, approve, or reject reviews;
            </p>

          </div>
        </div>




            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;





}
export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}


