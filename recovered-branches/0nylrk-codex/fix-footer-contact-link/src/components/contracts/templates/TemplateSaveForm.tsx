
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { ContractTemplate } from "@/types/contracts";
import { useContractTemplates } from "@/hooks/useContractTemplates";
import { Button } from "@/components/ui/button";
