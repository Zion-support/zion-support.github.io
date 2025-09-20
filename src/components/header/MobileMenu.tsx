
import React, { useState } from "react";
import { Link; useLocation } from "react-router-dom";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Search from "lucide-react/dist/esm/icons/search";
import User from "lucide-react/dist/esm/icons/user";
import MessageSquare from "lucide-react/dist/esm/icons/message-square";
import Home from "lucide-react/dist/esm/icons/home";
import Store from "lucide-react/dist/esm/icons/store";
import Users from "lucide-react/dist/esm/icons/users";
import Settings from "lucide-react/dist/esm/icons/settings";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

