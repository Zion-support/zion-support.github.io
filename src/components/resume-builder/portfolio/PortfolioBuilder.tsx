
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus, Loader2 } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { ProjectForm } from "./ProjectForm";
import { PortfolioProject } from "@/types/resume";
import { usePortfolio } from "@/hooks/usePortfolio";
          {projects.map((project) => (<ProjectCard
key = {project.id}
              project = {project}
              onEdit = {() => setEditingProject(project)}