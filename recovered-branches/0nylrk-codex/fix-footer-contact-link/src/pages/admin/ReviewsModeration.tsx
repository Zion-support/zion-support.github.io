
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
<<<<<<< HEAD
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useState, useEffect } from "react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Star, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
function ReviewsModerationContent() {
=======
function ReviewsModerationContent() {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
function ReviewsModerationContent() {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

<<<<<<< HEAD
<<<<<<< HEAD
import { Star, AlertTriangle } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { Star, AlertTriangle } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const fetchReviews = async () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchReviews = async () => {;
    setIsLoading(true);
    try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReviews([]);
      setIsLoading(false);
    } catch (error) {;
      console && console.error("Error fetching reviews:", error);
      toast({;
        title: "Error",;
        description: "Failed to load reviews. Please try again later.",;
        variant: "destructive"}),;
      setIsLoading(false);
    }
  };
=======
  }
  useEffect(() => {
    fetchReviews()
  }, [activeTab]);
  const handleRefresh = () => {
    fetchReviews()
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  },


  useEffect(() => {;
    fetchReviews();
  }, [activeTab]);
<<<<<<< HEAD
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

<<<<<<< HEAD
  },

  useEffect(() => {
    fetchReviews()
  }, [activeTab]),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const handleRefresh = () => {;
    fetchReviews();
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleRefresh = () => {
    fetchReviews()
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>;
      <SEO
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"

<<<<<<< HEAD
<<<<<<< HEAD
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
;
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState("pending"),;
  const [reviews, setReviews] = useState([]),;
  const [isLoading, setIsLoading] = useState(true),;
  ;
  const fetchReviews = async () => {;
    setIsLoading(true),;
    try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setReviews([]),;
      setIsLoading(false),;
    } catch (error) {;
      console.error("Error fetching reviews:", error),;
      toast({;
        title:"Error",;
        description:"Failed to load reviews. Please try again later.",;
        variant:"destructive"}),;
      setIsLoading(false),;
    }
  },;
;
  useEffect(() => {;
    fetchReviews(),;
  }, [activeTab]),;
;
  const handleRefresh = () => {;
    fetchReviews(),;
  },;
  ;
  return (;
    <>;
      <SEO;
        title="Review Moderation | Zion AI Marketplace";
        description="Moderate and manage reviews in the Zion AI Marketplace";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Review Moderation</h1>;
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>;
          <CardHeader>;
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
<<<<<<< HEAD
<<<<<<< HEAD
                <ReviewsModerationTable
              ;
              <TabsContent value="pending" className="mt-0">;
                <ReviewsModerationTable ;
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
  return (
    <>
      <SEO
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Review Moderation</h1>
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>
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
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="pending" className="mt-0">
=======

              <TabsContent value="pending" className="mt-0">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <TabsContent value="pending" className="mt-0">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ReviewsModerationTable
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
<<<<<<< HEAD
<<<<<<< HEAD
                />
              </TabsContent>
              <TabsContent value="reported" className="mt-0">
                <div className="text-center py-12 border rounded-lg">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by users.
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



}
export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Review Moderation</h1>;
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
        <Card>;
          <CardHeader>;
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
<<<<<<< HEAD
<<<<<<< HEAD
                />;
              </TabsContent>;
              ;
                />;
              </TabsContent>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;
              </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TabsContent value="reported" className="mt-0">;
                <div className="text-center py-12 border rounded-lg">;
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />;
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>;
                  <p className="text-muted-foreground">;
                    This section will show reviews that have been reported by users.;
                  </p>;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;
    </>;
<<<<<<< HEAD
}
export default function ReviewsModeration() {;
  return (
  );
<<<<<<< HEAD
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
=======
=======
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fetch_reviews = async () => {
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
      <main className="container mx - auto px - 4 py - 8">;
        <div className="flex justify - between items - center mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold">Review Moderation</h1>;
            <p className="text - muted - foreground mt - 1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
        <Card>;
          <CardHeader>;
            <CardTitle className="flex items - center gap - 2">;
              <Star className="h - 5 w - 5" />;
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
              <TabsContent value="pending" className="mt - 0">;
                <ReviewsModerationTable;
                  reviews={reviews}
                  is_loading={is_loading}
                  on_refresh={handle_refresh}
                />;
              </TabsContent>;
              <TabsContent value="reported" className="mt - 0">;
                <div className="text - center py - 12 border rounded - lg">;
                  <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb - 2" />;
                  <h3 className="text - lg font - medium mb - 2">Reported Reviews</h3>;
                  <p className="text - muted - foreground">;
                    This section will show reviews that have been reported by users.;
                  </p>;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;
    </>);
}
export default /**
 * ReviewsModeration - Function description
 */
function ReviewsModeration() {
  return (
    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
