<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {ReviewsModerationTable} from "@/components/admin/reviews/ReviewsModerationTable";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useState, useEffect} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Star, AlertTriangle} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
<<<<<<< HEAD
function ReviewsModerationContent() {;
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useState, useEffect } from "react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useState, useEffect } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
CardTitle,
} from "@/components/ui/card";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { Star, AlertTriangle } from "lucide-react";
=======
  CardTitle,
} from "@/components/ui/card";
import { Star, AlertTriangle } from "lucide-react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from "@/components/ui/use-toast";
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
<<<<<<< HEAD
  const fetchReviews = async () => {
    setIsLoading(true),
    try {}
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)
    } catch (error) {"
      console.error("Error fetching reviews:", error),
      toast({"
        title: "Error""
        description: "Failed to load reviews. Please try again later.""
        variant: "destructive"})
      setIsLoading(false)
    }
  const fetchReviews = async () => {
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const fetchReviews = async () => {
    setIsLoading(true),
=======
  const fetchReviews = async () => {
  const fetchReviews = async () => {
    setIsLoading(true),
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching reviews:", error),
      toast({
        title: "Error"
        description: "Failed to load reviews. Please try again later."
        variant: "destructive"})
      setIsLoading(false)
    }

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),

  const fetchReviews = async () => {;
    setIsLoading(true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching reviews:", error),
      toast({
        title: "Error"
        description: "Failed to load reviews. Please try again later."
        variant: "destructive"})
      setIsLoading(false)
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  const fetchReviews = async () => {;
=======
  const fetchReviews = async () => {"
  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsLoading(true);
    try {}
      // In a real application, you would fetch reviews from an API'
      // For now, let's simulate a delay and return empty data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReviews([]);
      setIsLoading(false);
    } catch (error) {"
      console.error("Error fetching reviews:", error);
      (toast({"
        title: "Error","
        description: "Failed to load reviews. Please try again later.","
        variant: "destructive",
      }),
        setIsLoading(false));
    }
  };

  }
  useEffect(() => {
    fetchReviews()
  }, [activeTab]);
  const handleRefresh = () => {
    fetchReviews()
  }

  },

  useEffect(() => {
    fetchReviews()
  }, [activeTab]),

  const handleRefresh = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    fetchReviews()
  },

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
    fetchReviews()
};
=======
    fetchReviews();
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  useEffect(() => {}
    fetchReviews();
  }, [activeTab]);

  const handleRefresh = () => {;
    fetchReviews();
  };
=======
    fetchReviews()
};

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  const handleRefresh = () => {}
    fetchReviews();
  };

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
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

        <Card>
          <CardHeader>"
            <CardTitle className="flex items-center gap-2">"
              <Star className="h-5 w-5" />
              Review Management;
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs"
              defaultValue="pending"
              value={activeTab}
              onValueChange={setActiveTab}
            >"
              <TabsList className="mb-6">"
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>"
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
"
              <TabsContent value="pending" className="mt-0">
<ReviewsModerationTable;
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                />
              </TabsContent>
"
              <TabsContent value="reported" className="mt-0">"
                <div className="text-center py-12 border rounded-lg">"
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />"
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>"
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by;
                    users.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
)
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

;
  const fetch_reviews = async () => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useState, useEffect } from "react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Star, AlertTriangle } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState("pending"),;
  const [reviews, setReviews] = useState([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const fetchReviews = async () => {;
    setIsLoading(true),;
try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setReviews([]),;
      setIsLoading(false);
    } catch (error) {;
      console.error("Error fetching reviews:", error),;
      toast({;
        title: "Error",;
        description: "Failed to load reviews. Please try again later.",;
        variant: "destructive"}),;
      setIsLoading(false);
    }
  },;
  useEffect(() => {;
    fetchReviews();
  }, [activeTab]),;
  const handleRefresh = () => {;
    fetchReviews();
  };
  return (;
    <>;
      <SEO;
        title="Review Moderation | Zion AI Marketplace";
        description="Moderate and manage reviews in the Zion AI Marketplace";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py-8">;
        <div className="flex justify - between items - center mb-8">;
          <div>;
<h1 className="text - 3xl font - bold">Review Moderation</h1>;
            <p className="text - muted - foreground mt - 1">Manage, approve, or reject reviews</p>;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Review Moderation</h1>;
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
        <Card>;
          <CardHeader>;
<<<<<<< HEAD
            <CardTitle className="flex items-center gap-2">;
              <Star className="h-5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
<Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;
              <TabsContent value="pending" className="mt-0">;

                <ReviewsModerationTable;
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
/>;
              </TabsContent>;
<<<<<<< HEAD
              <TabsContent value="reported" className="mt-0">;
                <div className="text-center py-12 border rounded-lg">;
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />;
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>;
                  <p className="text-muted-foreground">;
=======
              <TabsContent value="reported" className="mt-0">;
                <div className="text - center py - 12 border rounded-lg">;
                  <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb-2" />;
                  <h3 className="text - lg font - medium mb-2">Reported Reviews</h3>;
                  <p className="text - muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    This section will show reviews that have been reported by users.;

</ReviewsModerationTable>
              </TabsContent>;"
              <TabsContent value="reported" className="mt - 0">;"
</TabsContent>"
                <div className="text - center py - 12 border rounded - lg">;"
</div>"
                  <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb - 2" />;"
</AlertTriangle>"
                  <h3 className="text - lg font - medium mb - 2">Reported Reviews</h3>;""
                  <p className="text - muted - foreground">;"
</p>

                  </p>;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;
</>;
  );
}
;
export default function ReviewsModeration() {;
  return (;
    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>;
  );
}
;

import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { ReviewsModerationTable } from '@/components / admin / reviews / ReviewsModerationTable';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { useState, useEffect } from './react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Star, AlertTriangle } from './lucide-react';
import { toast } from '@/components / ui / use - toast';
/**
 * ReviewsModerationContent - Function description
 */
function ReviewsModerationContent() {
  const [active_tab, setActiveTab] = useState ("pending");
  const [reviews, set_reviews] = useState ([]);
  const [is_loading, setIsLoading] = useState (true);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

export default function ReviewsModeration() {}
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const fetch_reviews = async () => {
=======
    try {;  const fetch_reviews = async () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const fetch_reviews = async () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

;
  const fetch_reviews = async () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setIsLoading (true);
    try {}
      // In a real application, you would fetch reviews from an API;'
      // For now, let's simulate a delay and return empty data;
      await new Promise (resolve => set_timeout (resolve, 1000));
      set_reviews ([]);
      setIsLoading (false);
    } catch (error) {"
      console.error ("Error fetching reviews:", error);
      toast ({"
        title: "Error","
        description: "Failed to load reviews. Please try again later.","
        variant: "destructive"}),
      setIsLoading (false);
    }
  }
;
  useEffect (() => {}
    fetch_reviews ();
  }, [active_tab]);
;
  const handle_refresh = () =>: any {}
    fetch_reviews ();
  }
;
  return (
    <>;
      <SEO;"
        title="Review Moderation | Zion AI Marketplace";"
        description="Moderate and manage reviews in the Zion AI Marketplace";
      />;
<AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="flex justify - between items - center mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold">Review Moderation</h1>;
            <p className="text - muted - foreground mt - 1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
        <Card>;
          <CardHeader>;
<CardTitle className="flex items - center gap-2">;
              <Star className="h - 5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user - submitted reviews before they go live;
            </CardDescription>;
          </CardHeader>;
<CardContent>;
            <Tabs default_value="pending" value={active_tab} onValueChange={setActiveTab}>;
              <TabsList className="mb - 6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;
<TabsContent value="pending" className="mt-0">;
                <ReviewsModerationTable;
                  reviews={reviews}
                  is_loading={is_loading}
                  on_refresh={handle_refresh}
                />;
</TabsContent>;
<TabsContent value="reported" className="mt-0">;
                <div className="text - center py - 12 border rounded-lg">;
                  <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb-2" />;
                  <h3 className="text - lg font - medium mb-2">Reported Reviews</h3>;
                  <p className="text - muted-foreground">;
                    This section will show reviews that have been reported by users.;
                  </p>;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;

;

}
export default /**;
=======
export default /**
 * ReviewsModeration - Function description
</Footer>)
    </>);

;
}
export default /**
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
 * ReviewsModeration - Function description;
 */
function ReviewsModeration() {}
  return (

    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>);
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ),;
}
;
export default function ReviewsModeration() {;
  return (;
    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>;
  ),;
} const fetchReviews = async () => {
  setIsLoading (true);
try {
  //In a real application, you would fetch reviews from an API //For now, let's simulate a delay and return empty data await new Promise (resolve => setTimeout (resolve, 1000) );
setReviews ([]);
setIsLoading (false) 
}catch (error) {
  setIsLoading (false);
}
};
return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <AppHeader /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management </CardTitle> <CardDescription> Review and moderate user-submitted reviews before they go live </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="mt-0" > <ReviewsModerationTable reviews= {
  reviews 
}isLoading= {
  isLoading 
}onRefresh= {
  handleRefresh 
}/> </TabsContent> <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews</h3> <p className="text-muted-foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> <Footer /> </>) 
}export default function ReviewsModeration () {
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> 
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <TabsContent value="reported" className="mt-0">"
                <div className="text-center py-12 border rounded-lg">"
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />"
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>""
                  <p className="text-muted-foreground">"
      </main>
      <Footer />

    </>)
  );

export default function ReviewsModeration() {
    <ProtectedRoute>

      <ReviewsModerationContent />

        title="Review Moderation | Zion AI Marketplace";""
        description="Moderate and manage reviews in the Zion AI Marketplace";"
      />;

      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;"
        <div className="flex justify - between items - center mb - 8">;"
          <div>;
            <h1 className="text - 3xl font - bold">Review Moderation</h1>;""
            <p className="text - muted - foreground mt - 1">Manage, approve, or reject reviews</p>;"
          </div>;
        <Card>;

          <CardHeader>;
            <CardTitle className="flex items - center gap - 2">;"
              <Star className="h - 5 w - 5" />;"

            ;
            <CardDescription>;

          <CardContent>;
            <Tabs default_value="pending" value={active_tab} onValueChange={setActiveTab}>;"
              <TabsList className="mb - 6">;"
                <TabsTrigger value="pending">Pending Reviews;""
                <TabsTrigger value="reported">Reported Reviews;"
              ;"
              <TabsContent value="pending" className="mt - 0">;"

                  is_loading={is_loading}
                  on_refresh={handle_refresh}

              <TabsContent value="reported" className="mt - 0">;"
                <div className="text - center py - 12 border rounded - lg">;"
                  <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb - 2" />;"
                  <h3 className="text - lg font - medium mb - 2">Reported Reviews</h3>;""
                  <p className="text - muted - foreground">;"
                  </p>;
      </main>;
      <Footer />;
)
    </>);

export default /**
 * ReviewsModeration - Function description;
 */
function ReviewsModeration() {
</ProtectedRoute>
      <ReviewsModerationContent />;
</ReviewsModerationContent>)
    </ProtectedRoute>);
    <ProtectedRoute>;

      <ReviewsModerationContent />;

return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <AppHeader /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management  <CardDescription> Review and moderate user-submitted reviews before they go live   <CardContent>  <TabsContent value="pending" className="mt-0" > <ReviewsModerationTable reviews= {"
)"
}/>  <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews</h3> <p className="text-muted-foreground" > This section will show reviews that have been reported by users. </p> </div>     </main> <Footer /> </>)"
} () {
  return (<ProtectedRoute> <ReviewsModerationContent />  )"
pr-12325
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> )"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
