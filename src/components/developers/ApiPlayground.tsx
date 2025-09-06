
import { useState } from "react",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
interface Param {
  name: string;
  type: string;
  required?: boolean
}

interface ApiPlaygroundProps {
  method: string;
  path: string;
  params?: Param[]
}

export function ApiPlayground({ method, path, params;

