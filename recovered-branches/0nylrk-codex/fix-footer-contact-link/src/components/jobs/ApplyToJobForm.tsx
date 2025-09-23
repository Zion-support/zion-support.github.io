
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobApplications } from "@/hooks/useJobApplications";
import { useResume } from "@/hooks/useResume";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
