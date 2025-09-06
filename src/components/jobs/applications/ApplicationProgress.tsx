interface ApplicationProgressProps {

  status: ApplicationStatus

  className?: string
}
export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
  // Define the progress value based on status

  const getProgressValue = () => {
      <div className="flex justify-between text-xs text-muted-foreground">
          <StatusIcon status={status} current="new" />
          <span className="mt-1">Submitted</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="viewed" />
          <span className="mt-1">Viewed</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="shortlisted" />
          <span className="mt-1">Shortlisted</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="interview" />
          <span className="mt-1">Interview</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="hired" />
          <span className="mt-1">Decision</span>
        </div>
      </div>
    </div>
  )
}
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive
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
  if (currentRank < statusRank_) {
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface ApplicationProgressProps {;
  status: ApplicationStatus,;
  className?: string;
}
