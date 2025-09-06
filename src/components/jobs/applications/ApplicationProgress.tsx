
import { ApplicationStatus } from "@/types/jobs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils"
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import { cn } from "@/lib/utils";
import { ApplicationStatus  } from '@/types / jobs';
import { Progress  } from '@/components / ui / progress';
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn  } from '@/lib / utils';
interface ApplicationProgressProps {
  status: ApplicationStatus,
  class_name?: string;
}
export /**
 * ApplicationProgress - Function description
 */
function ApplicationProgress() {
  // Define the progress value based on status;
  const getProgressValue = () =>: any {
  const statusRank: Record<ApplicationStatus, number> = {
    new: 1
    viewed: 2
    shortlisted: 3
    interview: 4
    hired: 5
    rejected: 5}
  const currentRank = statusRank[current]
  const statusRank_ = statusRank[status]
  const currentRank = statusRank[current]
  const statusRank_ = statusRank[status]
  const statusRank_ = statusRank[status]
  const currentRank = statusRank[current]
  const statusRank_ = statusRank[status]
  const statusRank_ = statusRank[status],

    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
