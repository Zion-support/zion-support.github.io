import {useState, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {useJobApplications} from "@/hooks/useJobApplications";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {toast} from "@/hooks/use-toast";
import {KanbanColumn} from "./KanbanColumn";
import {useIsMobile} from "@/hooks/use-mobile";
interface DnDLocation {
  droppableId: string,
  index: number









    title: "Rejected",;
    description: "Not moving forward"}],;



  }







      toast({;
        title: "Status updated",;
        description: `Candidate moved to ${COLUMNS && COLUMNS.find(col => col && col.id === newStatus)?.title}`});


        description: "Please try again",;

          <Card key={i} className="h-[500px]">;
            <CardHeader>;


        ))}
      </div>;
    );
  }


  return (
    <DragDropContext onDragEnd={handleDragEnd}>;
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`}>;
        {COLUMNS && COLUMNS.map(column => (;
          <KanbanColumn
import { useState, useEffect } from './react';
import { DragDropContext, Droppable, Draggable } from './react - beautiful - dnd';
import { useJobApplications } from '@/hooks / useJobApplications';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Skeleton } from '@/components / ui / skeleton';
import { toast } from '@/hooks / use - toast';
import { KanbanColumn } from './KanbanColumn';

const COLUMNS = [;
  {"
    id: "new","
    title: "Applied","
    description: "New applications"},
  {"
    id: "shortlisted","
    title: "Shortlisted","
    description: "Candidates selected for review"},
  {"
    id: "interview","
    title: "Interview","
    description: "Scheduled for interview"},
  {"
    id: "hired","
    title: "Hired","
    description: "Successful candidates"},
  {"
    id: "rejected","
    title: "Rejected","
    description: "Not moving forward"}],
interface KanbanBoardProps {}


  const handleDragEnd = async (result: DropResult) => {}

          <KanbanColumn;


