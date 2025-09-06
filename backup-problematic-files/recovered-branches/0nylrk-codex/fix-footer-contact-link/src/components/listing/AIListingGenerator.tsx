
import React, { useState } from "react"
import { useToast } from "@/hooks/
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/
import { supabase } from "@/integrations/supabase/
import { AIListingForm } from "./
import { GeneratedContentDisplay } from "./
import { LoadingContentSkeleton } from "./
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer 