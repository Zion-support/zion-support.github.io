import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {

  platform: AppPlatform;
}

type ChangelogEntry = {
  id: string;
  version: string;
  date: string;
  changes: string,
};

    });
  };