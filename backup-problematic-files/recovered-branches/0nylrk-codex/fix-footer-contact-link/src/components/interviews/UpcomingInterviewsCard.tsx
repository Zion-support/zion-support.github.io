
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/
import { Button } from "@/components/ui/
import { useInterviews } from "@/hooks/
import { Interview } from "@/types/
import { Avatar } from "@/components/ui/
      
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link to="/interviews" >Schedule Interview</Link> </Button> </div> </CardContent> </Card> return (
</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > 