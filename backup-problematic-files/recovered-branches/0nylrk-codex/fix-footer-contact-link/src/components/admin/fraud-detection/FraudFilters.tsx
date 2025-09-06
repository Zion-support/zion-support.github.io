
import React from "react"
import { Input } from "@/components/ui/
import { Button } from "@/components/ui/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/
        
  return (<div className="flex flex-col md:flex-row gap-4 mb-6" > <div className="relative flex-1" > 
</SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" pending">Pending</SelectItem> <SelectItem value=" reviewed">Reviewed</SelectItem> <SelectItem value=" ignored">Ignored</SelectItem> <SelectItem value=" actioned">Actioned</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Severities</SelectItem> <SelectItem value=" safe">Safe</SelectItem> <SelectItem value=" suspicious">Suspicious</SelectItem> <SelectItem value=" dangerous">Dangerous</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Types</SelectItem> <SelectItem value=" signup">Signups</SelectItem> <SelectItem value=" job">Jobs</SelectItem> <SelectItem value=" message">Messages</SelectItem> <SelectItem value=" quote">Quotes</SelectItem> <SelectItem value=" review">Reviews</SelectItem> </SelectContent> 