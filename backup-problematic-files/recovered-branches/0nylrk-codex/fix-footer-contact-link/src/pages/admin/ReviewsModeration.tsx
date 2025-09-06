
import { AppHeader } from "@/layout/
import { Footer } from "@/components/
import { SEO } from "@/components/
import { ReviewsModerationTable } from "@/components/admin/reviews/
import { ProtectedRoute } from "@/components/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { toast } from "@/components/ui/
return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <AppHeader /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management </CardTitle> <CardDescription> Review and moderate user-submitted reviews before they go live </CardDescription> </CardHeader> <CardContent>
> </TabsContent> <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews