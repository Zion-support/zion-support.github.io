
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCategoryList } from "./HelpCategoryList";
import { HelpArticleList } from "./HelpArticleList";
import { HelpArticleView } from "./HelpArticleView";
import { HELP_CATEGORIES } from "./help-content";
import { AppLayout } from "@/layout/AppLayout";
import { Search } from "lucide-react";
