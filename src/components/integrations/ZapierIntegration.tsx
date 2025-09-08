
import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from 'lucide-react'
export function ZapierIntegration() {

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Check, Copy, ExternalLink } from 'lucide-react';
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");
  const handleCopyApiKey = null;
