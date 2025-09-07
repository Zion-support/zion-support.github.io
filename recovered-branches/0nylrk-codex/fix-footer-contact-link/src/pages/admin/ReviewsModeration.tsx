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
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useState, useEffect } from "react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",import { Star, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  

  const fetchReviews = async () => {;
    setIsLoading(true);
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReviews([]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      (toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
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
  

  const handleRefresh = () => {
    fetchReviews()
};

  return (
    <>;
      <SEO
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Review Moderation</h1>
            <p className="text-muted-foreground mt-1">
              Manage, approve, or reject reviews
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Review Management
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="pending"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable

import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { SEO } from "@/components/SEO";""
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { useState, useEffect } from "react";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Star, AlertTriangle } from "lucide-react";""
import { toast } from "@/components/ui/use-toast";"
function ReviewsModerationContent() {"
  const [activeTab, setActiveTab] = useState("pending");"
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    setIsLoading(true),
    try {
  // TODO: Implement
      // In a real application, you would fetch reviews from an API;"
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching reviews:", error),"
      toast({"
        title: "Error"","
  description: "Failed to load reviews. Please try again later."")"
        variant: "destructive"})"
  

  const fetchReviews = async () => {"
  const fetchReviews = async () => {;
    setIsLoading(true);
  const [activeTab, setActiveTab] = useState("pending");"

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState(\"pending\"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  const fetchReviews = async () => {;
    setIsLoading(true);
    try {

  // TODO: Implement
      // In a real application, you would fetch reviews from an API;"
      // For now, let's simulate a delay and return empty data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReviews([]);
      setIsLoading(false);
      console.error("Error fetching reviews:", error);"
      (toast({"
        title: "Error",""
        description: "Failed to load reviews. Please try again later.",""
        variant: "destructive",")

      }),
        setIsLoading(false));
  };

  useEffect(() => {
    fetchReviews();
  }, [activeTab]);

  const handleRefresh = () => {;

    fetchReviews()
  const handleRefresh = () => {

  },

  }, [activeTab]),



  return (
    <>;
  }
  useEffect(() => {}
    fetchReviews()}
  }, [activeTab]);
  const handleRefresh = (
    fetchReviews()) => {
  return $3;}
}
  }
  },
  const handleRefresh = (
    fetchReviews()) => {
  return $3;}
}
};
  return (
    <>;

      <SEO;"
        title="Review Moderation | Zion AI Marketplace"""
        description="Moderate and manage reviews in the Zion AI Marketplace""

      />

      <AppHeader />
"

</AppHeader>"
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="flex justify-between items-center mb-8">"
</div>
          <div>
</div>"
            <h1 className="text-3xl font-bold">Review Moderation</h1>""
            <p className="text-muted-foreground mt-1">"
</p>

        <Card>

            </p>
          </div>
        </div>

        <Card>
</Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">"
              <Star className="h-5 w-5" />"

            
            <CardDescription>

            
          
          <CardContent>

            <Tabs;"
              defaultValue="pending""
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="mb-6">"
                <TabsTrigger value="pending">Pending Reviews""
                <TabsTrigger value="reported">Reported Reviews"
              
              <TabsContent value="pending" className="mt-0">"

                <ReviewsModerationTable;
pr-12325
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
</ReviewsModerationTable>
              </TabsContent>
"
              <TabsContent value="reported" className="mt-0">"
</TabsContent>"
                <div className="text-center py-12 border rounded-lg">"
</div>"
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />"
</AlertTriangle>"
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>""
                  <p className="text-muted-foreground">"
</p>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
</Footer>
    </>)
  );
}

export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  );
}
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
    try {;  const fetch_reviews = async () => {
    setIsLoading (true);
    try {
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise (resolve => set_timeout (resolve, 1000));
      set_reviews ([]);
      setIsLoading (false);
    } catch (error) {
      console.error ("Error fetching reviews:", error);
      toast ({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"}),
      setIsLoading (false);
    }
  }
;
  useEffect (() => {
    fetch_reviews ();
  }, [active_tab]);
;
  const handle_refresh = () =>: any {
    fetch_reviews ();
  }
;
  return (
    <>;
      <SEO;
        title="Review Moderation | Zion AI Marketplace";
        description="Moderate and manage reviews in the Zion AI Marketplace";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py-8">;
        <div className="flex justify - between items - center mb-8">;
          <div>;
            <h1 className="text - 3xl font-bold">Review Moderation</h1>;
            <p className="text - muted - foreground mt-1">Manage, approve, or reject reviews</p>;
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
              <TabsList className="mb-6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;
              <TabsContent value="pending" className="mt-0">;
</ProtectedRoute>
      <ReviewsModerationContent />
</ReviewsModerationContent>
    </ProtectedRoute>
    <>;
      <SEO;"
        title="Review Moderation | Zion AI Marketplace";""
        description="Moderate and manage reviews in the Zion AI Marketplace";"

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <main className="container mx - auto px - 4 py - 8">;"
</main>"
        <div className="flex justify - between items - center mb - 8">;"
</div>
          <div>;
</div>"
            <h1 className="text - 3xl font - bold">Review Moderation</h1>;""
            <p className="text - muted - foreground mt - 1">Manage, approve, or reject reviews</p>;"
          </div>;
        </div>;
        <Card>;
</Card>
          <CardHeader>;
</CardHeader>"
            <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
              <Star className="h - 5 w - 5" />;"
</Star>
            </CardTitle>;
            <CardDescription>;
</CardDescription>
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
</CardContent>"
            <Tabs default_value="pending" value={active_tab} onValueChange={setActiveTab}>;"
</Tabs>"
              <TabsList className="mb - 6">;"
</TabsList>"
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;""
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="pending" className="mt - 0">;"
</TabsContent>

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

}

export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}
;
}
export default /**
 * ReviewsModeration - Function description
</Footer>)
    </>);


;
}
export default /**
 * ReviewsModeration - Function description;
 */
function ReviewsModeration() {
  return (

    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>);
}
              
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

