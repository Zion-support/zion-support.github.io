import React, { useState, useEffect } from "react"
import { AppLayout } from "@/layout/
import { SEO } from "@/components/
import { Card, CardContent } from "@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { Button } from "@/components/ui/
import { toast } from "@/hooks/
import { supabase } from "@/integrations/supabase/
import { FraudFlag, FraudStats } from "@/types/
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/