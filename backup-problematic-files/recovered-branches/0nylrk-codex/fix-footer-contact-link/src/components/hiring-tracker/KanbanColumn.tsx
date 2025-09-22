
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Droppable } from "react-beautiful-dnd",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { CandidateCard } from "./CandidateCard",;
;
interface KanbanColumnProps {;
  id:string,;
<<<<<<< HEAD
  title:string,;
=======
  title:string,,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  description:string,;
  applications:JobApplication[],;
=======
import { Droppable } from "react-beautiful-dnd";""
import { JobApplication } from "@/types/jobs";""
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { CandidateCard } from "./CandidateCard";"
;
interface KanbanColumnProps {;
  id: string;,;
  title: string;,,
  description: string;,;
  applications: JobApplication[];,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  count:number;
}
export function KanbanColumn({;
  id,;
  title,;
  description,;
  applications,;
  count;)
} KanbanColumnProps) {;
  // Add color based on column type;
  const getBadgeVariant = (columnId:string) => {;
    switch (columnId) {;"
      case "new":return "secondary",;""
      case "shortlisted":;""
        return "outline",;""
      case "interview":;""
        return "default",;""
      case "hired":;""
        return "success",;""
      case "rejected":;""
        return "destructive",;"
      default:;"
        return "outline";"
  },;
  const getColumnBgColor = (columnId:string) => {;
<<<<<<< HEAD
    switch (columnId) {;
      case "hired":return "bg-green-50",;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      case "rejected":;
        return "bg-red-50",;
      default:;
        return "bg-muted/30";
<<<<<<< HEAD
<<<<<<< HEAD

}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      case "hired":return "bg-green-50",;""
        return "bg-red-50",;"
        return "bg-muted/30";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
