
import React, { useState } from "react";
import { Button } from "@/components/ui/button";,
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
          {languages.map((language) => (<Card
              onClick = {() => setSelectedLanguage(language.code)}