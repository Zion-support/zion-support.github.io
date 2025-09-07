import React from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import {AppPlatform, AppMetadataValues} from "./MetadataManager";
import {toast} from "sonner";
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react",
import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";
import { AppPlatform, AppMetadataValues } from "./MetadataManager",
import { toast } from "sonner",
interface ExportPanelProps {

  platform: AppPlatform

  metadata: AppMetadataValues
}
export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {

  const handleExport = (format: 'json' | 'csv') => {
    try {
let content: string,
      let fileName: string,
      if (format === 'json') {;
        content = JSON.stringify(metadata, null, 2);
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2),

import React from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import {AppPlatform, AppMetadataValues} from "./MetadataManager";
import {toast} from "sonner";
interface ExportPanelProps {;
  platform: AppPlatform,;
  metadata: AppMetadataValues;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {;
  const handleExport = (format: 'json' | 'csv') => {;
    try {;
      let content: string,;
      let fileName: string,;

      if (format === 'json') {;
        content = JSON && JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata && metadata.version}.json`;
      } else {;
        // Convert object to CSV format;

        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [;
          metadata && metadata.appTitle;
          metadata && metadata.shortDescription;
          metadata && metadata.longDescription;
          metadata && metadata.version;
          metadata && metadata.platform;
        ];

      let content: string,
      let fileName: string,

let content: string
      let fileName: string
      let content: string,
      let fileName: string,
      if (format === 'json') {;
        content = JSON.stringify(metadata, null, 2);
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2),
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`



