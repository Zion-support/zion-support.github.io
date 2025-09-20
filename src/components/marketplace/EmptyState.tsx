import React from "react";
import * as React from "react;";
import { RefreshCw; Wifi; Server; ShoppingCart; Users; Wrench; Lightbulb } from "lucide-react, ";
import { Button } from "@/components/ui/button, ";
import Link from "next/link;";
import { useTranslation } from "react-i18next, ";

export interface EmptyStateProps {;
type: "products" | "categories" | "talent" | "equipment" | "search" | "error" | "network" | "loading";
title?: string;
description?: string;
