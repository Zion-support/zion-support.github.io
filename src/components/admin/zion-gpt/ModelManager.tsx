import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";,
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";,
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";,
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ModelConfig } from "@/utils/zion-gpt";
import { logErrorToProduction } from '@/utils/productionLogger';
interface ModelVersionData extends ModelConfig {trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
                        onClick = {() => checkTrainingStatus(model.id)}
                    ) : model.trainingStatus === 'succeeded' ? (<Button
variant = {model.active ? "outline" : "default"}
                        size="sm"
                        onClick = {() => toggleModelActive(model.id model.active model.purpose)}