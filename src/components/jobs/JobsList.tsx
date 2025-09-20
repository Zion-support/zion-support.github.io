
import { useState, useEffect } from "react";,
import { useAuth } from "@/hooks/useAuth";,
import { supabase } from "@/integrations/supabase/client";,
import { Job, JobStatus } from "@/types/jobs";,
import { Button } from "@/components/ui/button";,
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";,
import { Badge } from "@/components/ui/badge";,
import { Loader2, Edit, X, Eye } from "lucide-react";
import { format } from "date-fns";,
import Link from "next/link";
import { logErrorToProduction } from '@/utils/productionLogger';
interface JobsListProps {return (<div className="grid gap-6 md:grid-cols-2">
}
