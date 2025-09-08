
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

  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),

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

  const fetchReviews = async () => {;

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


  const handleRefresh = () => {
    fetchReviews()
  }


  },

  useEffect(() => {
    fetchReviews()
  }, [activeTab]),



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



              Review Management;
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live;

            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;


                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}




}
export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}


