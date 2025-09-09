import { useState  } from './react';
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import { Edit, Trash2, Github, Link, FileText  } from './lucide-react';
import { PortfolioProject  } from '@/types / resume';
interface ProjectCardProps {
  project: PortfolioProject;
  on_edit: (project: PortfolioProject) => void;
  on_delete: (project_id: string) => void;
}
export /**
 * ProjectCard - Function description
 */
function ProjectCard() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState (false);
;
  const handle_delete = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_delete (project.id);
    }
    setDeleteDialogOpen (false);
  }
;

  return (
    <Card className="h - full flex flex-col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg-muted">;
        {project.image_url ? (
          <img;
            src={project.image_url}
            alt={project.title}
import {useState} from 'react';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from '@/components/ui/alert-dialog';
import {Edit, Trash2, Github, Link, FileText} from 'lucide-react';
import {PortfolioProject} from '@/types/resume';interface ProjectCardProps {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void;
}
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
};

    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />;
        ) : (;    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project && project.image_url ? (;
          <img"
            className="w-full h-full object-cover"
          />;
        ) :(;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
      </div>

      <CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>

          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}

