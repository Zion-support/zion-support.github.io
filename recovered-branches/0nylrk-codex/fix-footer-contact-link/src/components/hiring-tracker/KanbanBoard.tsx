
import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useJobApplications } from "@/hooks/
import { JobApplication, ApplicationStatus } from "@/types/
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/
import { Button } from "@/components/ui/
import { Skeleton } from "@/components/ui/
import { toast } from "@/hooks/
import { KanbanColumn } from "./
import { useIsMobile } from "@/hooks/