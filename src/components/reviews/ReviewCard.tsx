import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea";
interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const handleReport = null;
