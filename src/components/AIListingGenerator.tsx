import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card;
CardContent;
, CardFooter;
CardHeader;
, CardTitle } from "@/components/ui/card";
import Skeleton from '@/components/ui/skeleton';
import { Sparkles, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";,
  return}setIsLoading (true);
}catch (error) {';
  logErrorToProduction ('Error generating content:', {;
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {generatedContent.description}</p> </div> <div>) )