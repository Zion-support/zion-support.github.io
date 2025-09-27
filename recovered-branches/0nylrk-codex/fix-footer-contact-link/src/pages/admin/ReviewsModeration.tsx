import {AppHeader} from "@/layout/AppHeader",
import {Footer} from "@/components/Footer",
import {SEO} from "@/components/SEO",
import {ReviewsModerationTable} from "@/components/admin/reviews/ReviewsModerationTable",
import {ProtectedRoute} from "@/components/ProtectedRoute",
import {useState, useEffect} from "react",
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs",
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card",
import {Star, AlertTriangle} from "lucide-react",
import {toast} from "@/components/ui/use-toast",
import { Star, AlertTriangle } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useState, useEffect } from "react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AppHeader } from '@/layout / AppHeader',
import { Footer } from '@/components / Footer',
import { SEO } from '@/components / SEO',
import { ReviewsModerationTable } from '@/components / admin / reviews / ReviewsModerationTable',
import { ProtectedRoute } from '@/components / ProtectedRoute',
import { useState, useEffect } from './react',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card',
import { Star, AlertTriangle } from './lucide-react',
import { toast } from '@/components / ui / use - toast',;
const [activeTab, setActiveTab] = useState("pending"),;
const [reviews, setReviews] = useState([]),;
const [isLoading, setIsLoading] = useState(true),;
function ReviewsModerationContent() {;
const [activeTab, setActiveTab] = useState("pending"),;
const [reviews, setReviews] = useState([]),;
const [isLoading, setIsLoading] = useState(true),;
const fetchReviews = async () => {
    setIsLoading(true),
    try {
      // In a real application, you would fetch reviews from an API,
      // For now, let's simulate a delay and return empty data,
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)} catch (error) {
      console.error("Error fetching reviews:", error),
      toast({,
title: "Error",
        description: "Failed to load reviews. Please try again later.",;,
variant: "destructive"}),
      setIsLoading(false)}
}
  useEffect(() => {
    fetchReviews()},
 [activeTab]),;
const handleRefresh = () => {
    fetchReviews()}
},
  useEffect(() => {
    fetchReviews()},
 [activeTab]),;
const handleRefresh = () => {
    fetchReviews()},;
const handleRefresh = () => {
    fetchReviews()},;
return (
    <>,
      <SEO,
title="Review Moderation | Zion AI Marketplace",
        description="Moderate and manage reviews in the Zion AI Marketplace",
      />,
      <AppHeader />,
      <main className="container mx-auto px-4 py-8">,
        <div className="flex justify-between items-center mb-8">,
          <div>,
            <h1 className="text-3xl font-bold">Review Moderation
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews

        <Card>,
          <CardHeader>,
            <CardTitle className="flex items-center gap-2">,
              <Star className="h-5 w-5" />,
              Review Management,
            
            <CardDescription>,
              Review and moderate user-submitted reviews before they go live,

          <CardContent>,
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>,
              <TabsList className="mb-6">,
                <TabsTrigger value="pending">Pending Reviews
                <TabsTrigger value="reported">Reported Reviews
              
              <TabsContent value="pending" className="mt-0">,
                <ReviewsModerationTable,
reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
,
                />,
              
              <TabsContent value="reported" className="mt-0">,
                <div className="text-center py-12 border rounded-lg">,
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />,
                  <h3 className="text-lg font-medium mb-2">Reported Reviews
                  <p className="text-muted-foreground">,
                    This section will show reviews that have been reported by users.,

      <Footer />,
    </>)}
export default function ReviewsModeration() {;
return (
    <ProtectedRoute>,
      <ReviewsModerationContent />,
    </ProtectedRoute>)}
,;
function ReviewsModerationContent() {;
const [activeTab, setActiveTab] = useState("pending"),;
const [reviews, setReviews] = useState([]),;
const [isLoading, setIsLoading] = useState(true),;
const fetchReviews = async () => {
    setIsLoading(true),
    try {
      // In a real application, you would fetch reviews from an API,
      // For now, let's simulate a delay and return empty data,
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)} catch (error) {
      console.error("Error fetching reviews:", error),
      toast({,
title: "Error",
        description: "Failed to load reviews. Please try again later.",;,
variant: "destructive"}),
      setIsLoading(false)}
  },
  useEffect(() => {
    fetchReviews()},
 [activeTab]),;
const handleRefresh = () => {
    fetchReviews()},;
return (
    <>,
      <SEO,
title="Review Moderation | Zion AI Marketplace",
        description="Moderate and manage reviews in the Zion AI Marketplace",
      />,
      <AppHeader />,
      <main className="container mx-auto px-4 py-8">,
        <div className="flex justify-between items-center mb-8">,
          <div>,
            <h1 className="text-3xl font-bold">Review Moderation
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews

        <Card>,
          <CardHeader>,
            <CardTitle className="flex items-center gap-2">,
              <Star className="h-5 w-5" />,
              Review Management,
            
            <CardDescription>,
              Review and moderate user-submitted reviews before they go live,

          <CardContent>,
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>,
              <TabsList className="mb-6">,
                <TabsTrigger value="pending">Pending Reviews
                <TabsTrigger value="reported">Reported Reviews
              
              <TabsContent value="pending" className="mt-0">,
                <ReviewsModerationTable,
reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
,
                />,
              
              <TabsContent value="reported" className="mt-0">,
                <div className="text-center py-12 border rounded-lg">,
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />,
                  <h3 className="text-lg font-medium mb-2">Reported Reviews
                  <p className="text-muted-foreground">,
                    This section will show reviews that have been reported by users.,

      <Footer />,
    </>)}
,
export default function ReviewsModeration() {;
return (
    <ProtectedRoute>,
      <ReviewsModerationContent />,
    </ProtectedRoute>)}
}
,
/**,
 * ReviewsModerationContent - Function description,
 */,;
function ReviewsModerationContent() {;
const [active_tab, setActiveTab] = useState ("pending"),;
const [reviews, set_reviews] = useState ([]),;
const [is_loading, setIsLoading] = useState (true)