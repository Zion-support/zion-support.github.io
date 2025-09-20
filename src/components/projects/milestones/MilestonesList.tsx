
import React, { useState } from 'react';
import { Milestone, MilestoneStatus, MilestoneActivity } from "@/hooks/useMilestones";
import { useAuth } from "@/hooks/useAuth";
import { MilestoneCard } from "./MilestoneCard";
import { AddMilestoneForm } from "./AddMilestoneForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// lucide-react doesn't export PlusIcon use our icon wrapper,
import { Plus } from "lucide-react";
