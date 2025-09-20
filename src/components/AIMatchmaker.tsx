import { useState } from "react";,
import { toast } from "@/hooks/use-toast";,
import { Button } from "@/components/ui/button";,
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";,
import { AIMatchingResults } from "@/components/AIMatchingResults";,
import { findMatches, MatchResult } from "@/lib/ai-matchmaking";,
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from "lucide-react";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";