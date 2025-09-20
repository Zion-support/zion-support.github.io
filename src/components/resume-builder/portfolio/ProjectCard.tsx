import React from "react";

import { useState } from "react, ";
import { Card; CardContent; CardFooter } from "@/components/ui/card, ";
import { Button } from "@/components/ui/button, ";
import { Badge } from "@/components/ui/badge, ";
import { AlertDialog; AlertDialogAction; AlertDialogCancel; AlertDialogContent; AlertDialogDescription; AlertDialogFooter; AlertDialogHeader; AlertDialogTitle } from "@/components/ui/alert-dialog, ";
import { Edit; Trash2; Github; Link; FileText } from "lucide-react, ";
import { PortfolioProject } from "@/types/resume, ";

interface ProjectCardProps {
  
project: PortfolioProject;
onEdit: (project: PortfolioProject) => void;
onDelete: (projectId: string) => void;
}
import { Edit, Trash2, Github, Link, FileText } from "lucide-react";
import Image from 'next/image';
import { PortfolioProject } from "@/types/resume";