
import { useQuery } from "@tanstack/
import { supabase } from "@/integrations/supabase/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Skeleton } from "@/components/ui/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/
Format path names for better display <div> <CardTitle className="text-white text-lg" >Top Pages</CardTitle> <CardDescription className="text-zion-slate-light" >Most viewed pages on your platform</CardDescription> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light" > <SelectItem value="1d" >Last 24h</SelectItem> <SelectItem value="7d" >Last 7 days</SelectItem> <SelectItem value="30d" >Last 30 days</SelectItem> <SelectItem value="90d" >Last 3 months</SelectItem> <SelectItem value="365d" >Last year</SelectItem> </SelectContent> </Select> </div> </CardHeader> <CardContent></div> </div> 