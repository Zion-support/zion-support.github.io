export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,}

  onViewScore
}: ApplicationRowProps) {
  return (

    <TableRow key={application && application.id}>;  return (

    <TableRow key={application && application.id}>;        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
  return (import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, User, FileText, BarChart } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Avatar } from "@/components/ui/avatar",;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;

