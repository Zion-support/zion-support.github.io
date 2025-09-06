import React, { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
 from "@/components/ui/
import { Input } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { Button } from "@/components/ui/
 from "@/components/ui/
import { AspectRatio } from "@/components/ui/
import { Separator } from "@/components/ui/
import { toast } from "@/components/ui/
import { useAuth } from "@/hooks/
import { useTalentProfileEnhancer } from "@/hooks/
import { supabase } from "@/integrations/supabase/