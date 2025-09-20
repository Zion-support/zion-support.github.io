interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { ReviewStats } from "@/components/reviews/ReviewStats";,
import { ReviewsList } from "@/components/reviews/ReviewsList";,
import { useReviews } from "@/hooks/useReviews";,
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {averageRating}totalReviews= {ratingCount}ratingDistribution= {
  ratingDistribution "
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {reviews}isLoading= {isLoading}onReportReview= {
  reportReview "
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating >= 4)
}isLoading= {isLoading}onReportReview= {
  reportReview "
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating < 4)
}isLoading= {isLoading}onReportReview= {reportReview}/> </TabsContent> </Tabs> </div> </div> </div>)