:src/pages/admin/ReviewsModeration.tsx

import { SEO } from "@/components/SEO",
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useState, useEffect } from "react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Star, AlertTriangle } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { logErrorToProduction } from '@/utils/productionLogger',
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),

const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchReviews = null;
:src/pages/admin/ReviewsModeration.tsx
  const fetchReviews = async () => {
    setIsLoading(true),
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise (resolve => set_timeout (resolve, 1000));
      set_reviews ([]);
      setIsLoading (false);
      logErrorToProduction (
        error instanceof Error ? error.message : String (error),
        error instanceof Error ? error : undefined,'
        { message: 'Error fetching reviews' }
      );
toast ({
        title: 'Error',
        description: 'Failed to load reviews. Please try again later.',
        variant: 'destructive',
      });

      setIsLoading (false) }
  }
  useEffect (() => {"
    fetch_reviews ();        title: "Error","
        description: "Failed to load reviews. Please try again later.","
        variant: "destructive"}),
      setIsLoading (false);
    }
  }
  useEffect (() => {}
    fetch_reviews ();
  useEffect ((, ) => {}
    fetch_reviews ();
  }, [active_tab]),
  const handle_refresh = () =>: any {}
    fetch_reviews ();
  }'
import { SEO } from '@/components/SEO';'
import { ReviewsModerationTable } from '@/components/admin/reviews/ReviewsModerationTable';'
import { ProtectedRoute } from '@/components/ProtectedRoute';'
import { useState, useEffect } from 'react';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import { Star, AlertTriangle } from 'lucide-react';'
import { toast } from '@/components/ui/use-toast';'
import { logErrorToProduction } from '@/utils/productionLogger';
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState('pending');
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {;
    setIsLoading(true);
    try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReviews([]);

const ReviewsModeration: React.FC = () => {
  return (
<>;

      setIsLoading(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"}),
      setIsLoading(false)
    }
},

  useEffect(() => {
    fetchReviews()
  }, [activeTab]),

  const handleRefresh = () => {
    fetchReviews()
  },

  return (
    <>
      <SEO
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"
      />
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

  return (
    <>;

      setIsLoading(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' });
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"});
function ReviewsModerationContent() { return null; }
    } catch (error) {'
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),
      toast({"
        title: "Error","
        description: "Failed to load reviews. Please try again later.","
        variant: "destructive"}),
      setIsLoading(false)
    }
"
              <Star className="h-5 w-5" />

  return (
    <>
      <SEO
        title='Review Moderation | Zion AI Marketplace'
        description='Moderate and manage reviews in the Zion AI Marketplace'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Review Moderation</h1>
            <p className='text-muted-foreground mt-1'>
              Manage, approve, or reject reviews
            </p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Star className='h-5 w-5' />
:src/pages/admin/ReviewsModeration.tsx
              Review Management
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
"
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
"
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>"
              <TabsList className="mb-6">"
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>"
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
/>;'
      <main className='container mx-auto px-4 py-8'>;'
        <div className='flex justify-between items-center mb-8'>;
          <div>;'
            <h1 className='text-3xl font-bold'>Review Moderation</h1>;'
            <p className='text-muted-foreground mt-1'>;
              Manage, approve, or reject reviews;
            </p>;
          </div>;
        </div>;
:src/pages/admin/ReviewsModeration.tsx

        <Card>;
          <CardHeader>;'
            <CardTitle className='flex items-center gap-2'>;'"
              <Star className='h-5 w-5' />              Review Management            <CardTitle className="flex items-center gap-2">;"
              <Star className="h-5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
:src/pages/admin/ReviewsModeration.tsx
            <Tabs'
              defaultValue='pending'
              value={activeTab}
              onValueChange={setActiveTab}>;'
              <TabsList className='mb-6'>;'
                <TabsTrigger value='pending'>Pending Reviews</TabsTrigger>;'
                <TabsTrigger value='reported'>Reported Reviews</TabsTrigger>;
              </TabsList>;
'
              <TabsContent value='pending' className='mt-0'>;"
                <ReviewsModerationTable                  reviews={reviews}            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;"
              <TabsList className="mb-6">;"
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;"
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;
"
              <TabsContent value="pending" className="mt-0">;

<ReviewsModerationTable
                <ReviewsModerationTable 
<Tabs
              defaultValue='pending'
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className='mb-6'>
                <TabsTrigger value='pending'>Pending Reviews</TabsTrigger>
                <TabsTrigger value='reported'>Reported Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value='pending' className='mt-0'>
                <ReviewsModerationTable
:src/pages/admin/ReviewsModeration.tsx
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                  reviews = {reviews,}
                  isLoading = {isLoading,}
                  onRefresh = {handleRefresh,}

:src/pages/admin/ReviewsModeration.tsx

              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable;
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable 
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
              </TabsContent>
:src/pages/admin/ReviewsModeration.tsx
              <TabsContent value="reported" className="mt-0">
                <div className="text-center py-12 border rounded-lg">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>
:src/pages/admin/ReviewsModeration.tsx
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by users.
</p>
                  </p>

:src/pages/admin/ReviewsModeration.tsx
<TabsContent value='reported' className='mt-0'>
                <div className='text-center py-12 border rounded-lg'>
                  <AlertTriangle className='h-10 w-10 text-amber-500 mx-auto mb-2' />
                  <h3 className='text-lg font-medium mb-2'>Reported Reviews</h3>
                  <p className='text-muted-foreground'>
                    This section will show reviews that have been reported by
                    users.
                  </p>
:src/pages/admin/ReviewsModeration.tsx
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </>
:src/pages/admin/ReviewsModeration.tsx
  )
  );
};

export default function ReviewsModeration() {};
      <SEO;'
        title='Review Moderation | Zion AI Marketplace';'
        description='Moderate and manage reviews in the Zion AI Marketplace';
      />;'
      <main className='container mx - auto px - 4 py - 8'>;'
        <div className='flex justify - between items - center mb - 8'>;
          <div>;'
            <h1 className='text - 3xl font - bold'>Review Moderation</h1>;'
            <p className='text - muted - foreground mt - 1'>;
              Manage, approve, or reject reviews;
            </p>;
  )
:src/pages/admin/ReviewsModeration.tsx
'"
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"};
;
import { SEO } from "@/components/SEO",;
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useState, useEffect } from "react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Star, AlertTriangle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;
:src/pages/admin/ReviewsModeration.tsx
import { logErrorToProduction } from '@/utils/productionLogger',;
function ReviewsModerationContent() { return null; }
    } catch (error) {;'
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),;
      toast({;"
        title: "Error",;"
        description: "Failed to load reviews. Please try again later.",;"
import { logErrorToProduction } from '@/utils/productionLogger',;
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState("pending"),;,
  const [reviews, setReviews] = useState([]),;,
  const [isLoading, setIsLoading] = useState(true),;
  const fetchReviews = async () => {;
    setIsLoading(true),;
    try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000)),;,
      setReviews([]),;
      setIsLoading(false);
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),;
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
:src/pages/admin/ReviewsModeration.tsx
      <SEO;"
        title="Review Moderation | Zion AI Marketplace";"
        description="Moderate and manage reviews in the Zion AI Marketplace";
      />;"
      <main className="container mx-auto px-4 py-8">;"
        <div className="flex justify-between items-center mb-8">;
          <div>;"
            <h1 className="text-3xl font-bold">Review Moderation</h1>;"
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
        <Card>;
          <CardHeader>;
:src/pages/admin/ReviewsModeration.tsx
            <CardTitle className="flex items-center gap-2">;
            <CardTitle className="flex items-center gap-2">;
              <Star className="h-5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>;
          </CardHeader>;
:src/pages/admin/ReviewsModeration.tsx
          <CardContent>;"
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;"
              <TabsList className="mb-6">;"
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;"
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;"
              <TabsContent value="pending" className="mt-0">;
                <ReviewsModerationTable;
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
:src/pages/admin/ReviewsModeration.tsx
/>;
              </TabsContent>;
              <TabsContent value="reported" className="mt-0">;
                <div className="text-center py-12 border rounded-lg">;
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />;
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>;
:src/pages/admin/ReviewsModeration.tsx
                  <p className="text-muted-foreground">;
                    This section will show reviews that have been reported by users.;
</p>;
                  <p className="text-muted-foreground">;
                    This section will show reviews that have been reported by users.;
                  </p>;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
    </>;
  );
}
:src/pages/admin/ReviewsModeration.tsx
;
export default function ReviewsModeration() {;
  return (;
    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>;
  );
:src/pages/admin/ReviewsModeration.tsx
}
;
  reviews;
}is_loading= {}
  is_loading;
}on_refresh= {"
  handle_refresh ";"
}/> </TabsContent> <TabsContent value="reported" className="mt - 0" > <div className="text - center py - 12 border rounded - lg" > <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb - 2" /> <h3 className="text - lg font - medium mb - 2" >Reported Reviews</h3> <p className="text - muted - foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> </>);
}export default /**;
 * ReviewsModeration - Function description;
 */
function ReviewsModeration() { return null; }
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
}
;
  );
}

export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  );

};
return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management </CardTitle> <CardDescription> Review and moderate user-submitted reviews before they go live </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="mt-0" > <ReviewsModerationTable reviews= {;
  reviews ;
}isLoading= {;
  isLoading ;
}onRefresh= {;
  handleRefresh ";
}/> </TabsContent> <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews</h3> <p className="text-muted-foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> </>) ;
}export default function ReviewsModeration () {;
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"
:src/pages/admin/ReviewsModeration.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
