import React from "react";

import { useForm } from "react-hook-form, ";
import { zodResolver } from "@hookform/resolvers/zod, ";
import z from "zod";
import { supabase } from "@/integrations/supabase/client, ";
import { useAuth } from "@/hooks/useAuth, ";
import { useToast } from "@/hooks/use-toast, ";
import { useNavigate } from "react-router-dom, ";

import { For; m;
FormContro; l;
FormDescriptio; n;
FormFiel; d;
FormIte; m;
FormLabe; l;
