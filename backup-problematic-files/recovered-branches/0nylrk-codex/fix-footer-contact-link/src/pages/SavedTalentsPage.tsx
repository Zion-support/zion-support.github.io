
import { useState, useEffect } from "react"
import { AppHeader } from "@/layout/
import { Footer } from "@/components/
import { SEO } from "@/components/
import { TalentCard } from "@/components/talent/
import { useAuth } from "@/hooks/
import { supabase } from "@/integrations/supabase/
import { TalentProfile } from "@/types/
import { toast } from "@/components/ui/
    // // //
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <AppHeader /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents