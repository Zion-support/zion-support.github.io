
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  
=======
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
  useEffect(() => {
    fetchReviews()
  }, [activeTab]),
==============

  const handleRefresh = () => {;
    fetchReviews();
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleRefresh = () => {
    fetchReviews()
  },
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>;
      <SEO
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
=======

              <TabsContent value="pending" className="mt-0">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ReviewsModerationTable
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
=======
=======
=======


=======
                />;
              </TabsContent>;

;
=======
=======
  );
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


export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
