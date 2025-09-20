import React from 'react';

import { Header } from "@/components/Header";,
import { SEO } from "@/components/SEO";,
import { useAuth } from "@/hooks/useAuth";,
import { useRouter } from "next/router";,
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";,
import { Input } from "@/components/ui/input";,
import { Label } from "@/components/ui/label";,
import { Button } from "@/components/ui/button";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";,
import { toast } from "sonner";,
import { supabase } from "@/integrations/supabase/client";,
import { Switch } from "@/components/ui/switch";
}