import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Check, X, User, Star, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";,
import { toast } from "@/hooks/use-toast";,
import { supabase } from "@/integrations/supabase/client";
import { Review, ReviewStatus } from "@/types/reviews";
                  <Button
  return (<div className="flex"> {[1 2, 3  4, 5].map ( (star) => (<Star key= {
}> <TableCell> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {review.reviewer profile?.avatar url ? (<AvatarImage src= {
}</TableBody> </Table> </DialogDescription> </DialogHeader> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div className=" flex items-center gap-2"> <Avatar> {selectedReview.reviewer profile?.avatar url ? (<AvatarImage src= {
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {selectedReview.timeliness rating}/5 </Badge>)
}disabled= {isPending}> Reject </Button> <Button onClick={
  () => handleApprove (selectedReview.id)
}disabled= {isPending}> Approve </Button> </>)