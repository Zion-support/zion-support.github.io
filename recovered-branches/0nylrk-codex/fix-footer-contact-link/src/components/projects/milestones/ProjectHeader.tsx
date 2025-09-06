import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
interface ProjectHeaderProps {
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;
}

    