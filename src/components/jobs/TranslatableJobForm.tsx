
import React, { useState } from "react";
import { Button } from "@/components/ui/button";,
import { Input } from "@/components/ui/input";,
import { Textarea } from "@/components/ui/textarea";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import { Card, CardContent } from "@/components/ui/card";,
import { Loader2, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";,
import { useTranslationService } from "@/hooks/useTranslationService";,
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";,